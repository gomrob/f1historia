// Server-side data loader for the static F1 dataset stored in data/json/.
// All files in data/json/ were downloaded once via scripts/fetch-data.js from the
// Jolpica API (Ergast-compatible). The website never calls that API at runtime —
// it only reads these local JSON snapshots.

import fs from 'fs'
import path from 'path'

const JSON_DIR = path.join(process.cwd(), 'data', 'json')

function readJson<T>(relPath: string): T | null {
  const filePath = path.join(JSON_DIR, relPath)
  if (!fs.existsSync(filePath)) return null
  return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as T
}

// ─── Raw Jolpica/Ergast JSON shapes ────────────────────────────────────────

interface ErgastDriver {
  driverId: string
  code?: string
  url: string
  givenName: string
  familyName: string
  dateOfBirth: string
  nationality: string
}

interface ErgastConstructor {
  constructorId: string
  url: string
  name: string
  nationality: string
}

interface ErgastCircuit {
  circuitId: string
  url: string
  circuitName: string
  Location: {
    lat: string
    long: string
    locality: string
    country: string
  }
}

interface ErgastDriverStanding {
  position: string
  positionText: string
  points: string
  wins: string
  Driver: ErgastDriver
  Constructors: ErgastConstructor[]
}

interface ErgastConstructorStanding {
  position: string
  positionText: string
  points: string
  wins: string
  Constructor: ErgastConstructor
}

interface ErgastRaceResult {
  number: string
  position: string
  positionText: string
  points: string
  Driver: ErgastDriver
  Constructor: ErgastConstructor
  grid: string
  laps: string
  status: string
  Time?: { millis: string; time: string }
  FastestLap?: {
    rank: string
    lap: string
    Time: { time: string }
  }
}

interface ErgastRace {
  season: string
  round: string
  url: string
  raceName: string
  Circuit: ErgastCircuit
  date: string
  time?: string
  Results?: ErgastRaceResult[]
}

interface ErgastSeasonsResponse {
  MRData: { SeasonTable: { Seasons: { season: string; url: string }[] } }
}

interface ErgastDriversResponse {
  MRData: { DriverTable: { Drivers: ErgastDriver[] } }
}

interface ErgastConstructorsResponse {
  MRData: { ConstructorTable: { Constructors: ErgastConstructor[] } }
}

interface ErgastStandingsResponse<T> {
  MRData: { StandingsTable: { StandingsLists: { DriverStandings?: T[]; ConstructorStandings?: T[] }[] } }
}

interface ErgastRacesResponse {
  MRData: { RaceTable: { Races: ErgastRace[] } }
}

// ─── Public types ───────────────────────────────────────────────────────────

export interface DriverStandingEntry {
  position: number
  points: number
  wins: number
  driverId: string
  driverName: string
  driverCode?: string
  nationality: string
  constructorIds: string[]
  constructorNames: string[]
}

export interface ConstructorStandingEntry {
  position: number
  points: number
  wins: number
  constructorId: string
  constructorName: string
  nationality: string
}

export interface RaceResultEntry {
  position: number | null
  positionText: string
  driverId: string
  driverName: string
  driverCode?: string
  nationality: string
  constructorId: string
  constructorName: string
  points: number
  laps: number
  grid: number
  status: string
  time?: string
}

export interface RaceResults {
  round: number
  raceName: string
  circuitName: string
  country: string
  date: string
  results: RaceResultEntry[]
}

export interface RaceCalendarEntry {
  round: number
  raceName: string
  circuitName: string
  country: string
  date: string
}

// ─── Caches ──────────────────────────────────────────────────────────────────

let driverNameCache: Map<string, string> | null = null
let constructorNameCache: Map<string, string> | null = null

function getDriverNameMap(): Map<string, string> {
  if (driverNameCache) return driverNameCache
  const data = readJson<ErgastDriversResponse>('drivers.json')
  const map = new Map<string, string>()
  for (const d of data?.MRData.DriverTable.Drivers ?? []) {
    map.set(d.driverId, `${d.givenName} ${d.familyName}`)
  }
  driverNameCache = map
  return map
}

function getConstructorNameMap(): Map<string, string> {
  if (constructorNameCache) return constructorNameCache
  const data = readJson<ErgastConstructorsResponse>('constructors.json')
  const map = new Map<string, string>()
  for (const c of data?.MRData.ConstructorTable.Constructors ?? []) {
    map.set(c.constructorId, c.name)
  }
  constructorNameCache = map
  return map
}

// ─── Public API ──────────────────────────────────────────────────────────────

export interface DriverSeasonSummary {
  year: number
  position: number
  points: number
  wins: number
  constructorNames: string[]
}

let driverSeasonHistoryCache: Map<string, DriverSeasonSummary[]> | null = null

/** Per-driver season-by-season championship history, built from standings/drivers_{year}.json. */
export function getDriverSeasonHistory(driverId: string): DriverSeasonSummary[] {
  if (!driverSeasonHistoryCache) {
    const cache = new Map<string, DriverSeasonSummary[]>()
    for (const year of getAllSeasonYears()) {
      for (const s of getDriverStandings(year)) {
        const list = cache.get(s.driverId) ?? []
        list.push({ year, position: s.position, points: s.points, wins: s.wins, constructorNames: s.constructorNames })
        cache.set(s.driverId, list)
      }
    }
    driverSeasonHistoryCache = cache
  }
  return (driverSeasonHistoryCache.get(driverId) ?? []).sort((a, b) => b.year - a.year)
}

export interface CircuitWinner {
  year: number
  driverId: string
  driverName: string
  nationality: string
  constructorId: string
  constructorName: string
}

let circuitWinnersCache: Map<string, CircuitWinner[]> | null = null

/** Race winners for every circuit, indexed by circuitId, built from results/results_{year}.json. */
export function getCircuitWinners(circuitId: string): CircuitWinner[] {
  if (!circuitWinnersCache) {
    const cache = new Map<string, CircuitWinner[]>()
    for (const year of getAllSeasonYears()) {
      const data = readJson<ErgastRacesResponse>(`results/results_${year}.json`)
      for (const race of data?.MRData.RaceTable.Races ?? []) {
        const winner = race.Results?.find(r => r.position === '1')
        if (!winner) continue
        const list = cache.get(race.Circuit.circuitId) ?? []
        list.push({
          year,
          driverId: winner.Driver.driverId,
          driverName: `${winner.Driver.givenName} ${winner.Driver.familyName}`,
          nationality: winner.Driver.nationality,
          constructorId: winner.Constructor.constructorId,
          constructorName: winner.Constructor.name,
        })
        cache.set(race.Circuit.circuitId, list)
      }
    }
    circuitWinnersCache = cache
  }
  return (circuitWinnersCache.get(circuitId) ?? []).sort((a, b) => b.year - a.year)
}

let circuitGPCountCache: Map<string, number> | null = null

/** Number of Grands Prix held at each circuit, indexed by circuitId, built from results/results_{year}.json. */
export function getCircuitGPCount(circuitId: string): number {
  if (!circuitGPCountCache) {
    const cache = new Map<string, number>()
    for (const year of getAllSeasonYears()) {
      const data = readJson<ErgastRacesResponse>(`results/results_${year}.json`)
      for (const race of data?.MRData.RaceTable.Races ?? []) {
        const id = race.Circuit.circuitId
        cache.set(id, (cache.get(id) ?? 0) + 1)
      }
    }
    circuitGPCountCache = cache
  }
  return circuitGPCountCache.get(circuitId) ?? 0
}

export interface ChampionshipPodiums {
  p1: number
  p2: number
  p3: number
}

/** Count how many times a driver finished P1, P2, P3 in the drivers' championship. */
export function getDriverChampionshipPodiums(driverId: string): ChampionshipPodiums {
  const history = getDriverSeasonHistory(driverId)
  return {
    p1: history.filter(s => s.position === 1).length,
    p2: history.filter(s => s.position === 2).length,
    p3: history.filter(s => s.position === 3).length,
  }
}

/** ISO timestamp of the last data update, read from data/json/metadata.json. */
export function getLastUpdated(): string | null {
  const data = readJson<{ lastUpdated: string }>('metadata.json')
  return data?.lastUpdated ?? null
}

/** All seasons with available data, sorted descending (newest first). */
export function getAllSeasonYears(): number[] {
  const data = readJson<ErgastSeasonsResponse>('seasons.json')
  const years = (data?.MRData.SeasonTable.Seasons ?? []).map(s => Number(s.season))
  return years.sort((a, b) => b - a)
}

/** Looks up a driver's full name by id, falling back to the id itself. */
export function getDriverName(driverId: string): string {
  return getDriverNameMap().get(driverId) ?? driverId
}

/** Looks up a constructor's full name by id, falling back to the id itself. */
export function getConstructorName(constructorId: string): string {
  return getConstructorNameMap().get(constructorId) ?? constructorId
}

/** Final drivers' championship standings for a given year, ordered by position. */
export function getDriverStandings(year: number): DriverStandingEntry[] {
  const data = readJson<ErgastStandingsResponse<ErgastDriverStanding>>(`standings/drivers_${year}.json`)
  const list = data?.MRData.StandingsTable.StandingsLists[0]?.DriverStandings ?? []
  return list.map(s => ({
    position: Number(s.position),
    points: Number(s.points),
    wins: Number(s.wins),
    driverId: s.Driver.driverId,
    driverName: `${s.Driver.givenName} ${s.Driver.familyName}`,
    driverCode: s.Driver.code,
    nationality: s.Driver.nationality,
    constructorIds: s.Constructors.map(c => c.constructorId),
    constructorNames: s.Constructors.map(c => c.name),
  }))
}

/** Final constructors' championship standings for a given year, ordered by position. */
export function getConstructorStandings(year: number): ConstructorStandingEntry[] {
  const data = readJson<ErgastStandingsResponse<ErgastConstructorStanding>>(`standings/constructors_${year}.json`)
  const list = data?.MRData.StandingsTable.StandingsLists[0]?.ConstructorStandings ?? []
  return list.map(s => ({
    position: Number(s.position),
    points: Number(s.points),
    wins: Number(s.wins),
    constructorId: s.Constructor.constructorId,
    constructorName: s.Constructor.name,
    nationality: s.Constructor.nationality,
  }))
}

/** Race-by-race results for a given year, ordered by round. */
export function getRaceResultsByYear(year: number): RaceResults[] {
  const data = readJson<ErgastRacesResponse>(`results/results_${year}.json`)
  const races = data?.MRData.RaceTable.Races ?? []
  return races.map(race => ({
    round: Number(race.round),
    raceName: race.raceName,
    circuitName: race.Circuit.circuitName,
    country: race.Circuit.Location.country,
    date: race.date,
    results: (race.Results ?? []).map(r => ({
      position: r.position ? Number(r.position) : null,
      positionText: r.positionText,
      driverId: r.Driver.driverId,
      driverName: `${r.Driver.givenName} ${r.Driver.familyName}`,
      driverCode: r.Driver.code,
      nationality: r.Driver.nationality,
      constructorId: r.Constructor.constructorId,
      constructorName: r.Constructor.name,
      points: Number(r.points),
      laps: Number(r.laps),
      grid: Number(r.grid),
      status: r.status,
      time: r.Time?.time,
    })),
  }))
}

/** Race calendar (without results) for a given year, ordered by round. */
export function getRaceCalendar(year: number): RaceCalendarEntry[] {
  const data = readJson<ErgastRacesResponse>(`races/races_${year}.json`)
  const races = data?.MRData.RaceTable.Races ?? []
  return races.map(race => ({
    round: Number(race.round),
    raceName: race.raceName,
    circuitName: race.Circuit.circuitName,
    country: race.Circuit.Location.country,
    date: race.date,
  }))
}
