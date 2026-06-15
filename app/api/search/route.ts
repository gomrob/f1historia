import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import type { SearchResult } from '@/lib/types'

const JSON_DIR = path.join(process.cwd(), 'data', 'json')
const MAX_PER_CATEGORY = 4

interface ErgastDriver {
  driverId: string
  givenName: string
  familyName: string
  nationality: string
}
interface ErgastConstructor {
  constructorId: string
  name: string
  nationality: string
}
interface ErgastCircuit {
  circuitId: string
  circuitName: string
  Location: { locality: string; country: string }
}

let driversCache: ErgastDriver[] | null = null
let constructorsCache: ErgastConstructor[] | null = null
let circuitsCache: ErgastCircuit[] | null = null
let seasonsCache: number[] | null = null

function readJson<T>(relPath: string): T {
  return JSON.parse(fs.readFileSync(path.join(JSON_DIR, relPath), 'utf-8'))
}

function getDrivers(): ErgastDriver[] {
  if (!driversCache) {
    const data = readJson<{ MRData: { DriverTable: { Drivers: ErgastDriver[] } } }>('drivers.json')
    driversCache = data.MRData.DriverTable.Drivers
  }
  return driversCache
}

function getConstructors(): ErgastConstructor[] {
  if (!constructorsCache) {
    const data = readJson<{ MRData: { ConstructorTable: { Constructors: ErgastConstructor[] } } }>('constructors.json')
    constructorsCache = data.MRData.ConstructorTable.Constructors
  }
  return constructorsCache
}

function getCircuits(): ErgastCircuit[] {
  if (!circuitsCache) {
    const data = readJson<{ MRData: { CircuitTable: { Circuits: ErgastCircuit[] } } }>('circuits.json')
    circuitsCache = data.MRData.CircuitTable.Circuits
  }
  return circuitsCache
}

function getSeasons(): number[] {
  if (!seasonsCache) {
    const data = readJson<{ MRData: { SeasonTable: { Seasons: { season: string }[] } } }>('seasons.json')
    seasonsCache = data.MRData.SeasonTable.Seasons.map(s => Number(s.season))
  }
  return seasonsCache
}

export async function GET(request: NextRequest) {
  const q = (request.nextUrl.searchParams.get('q') ?? '').trim().toLowerCase()
  if (q.length < 1) {
    return NextResponse.json({ results: [] })
  }

  const results: SearchResult[] = []

  const drivers = getDrivers()
    .filter(d => `${d.givenName} ${d.familyName}`.toLowerCase().includes(q))
    .slice(0, MAX_PER_CATEGORY)
    .map(d => ({
      id: d.driverId,
      label: `${d.givenName} ${d.familyName}`,
      sublabel: d.nationality,
      category: 'pilotos' as const,
      href: `/pilotos?id=${d.driverId}`,
    }))
  results.push(...drivers)

  const constructors = getConstructors()
    .filter(c => c.name.toLowerCase().includes(q))
    .slice(0, MAX_PER_CATEGORY)
    .map(c => ({
      id: c.constructorId,
      label: c.name,
      sublabel: c.nationality,
      category: 'escuderias' as const,
      href: `/escuderias?id=${c.constructorId}`,
    }))
  results.push(...constructors)

  const circuits = getCircuits()
    .filter(c => c.circuitName.toLowerCase().includes(q) || c.Location.country.toLowerCase().includes(q))
    .slice(0, MAX_PER_CATEGORY)
    .map(c => ({
      id: c.circuitId,
      label: c.circuitName,
      sublabel: `${c.Location.locality}, ${c.Location.country}`,
      category: 'circuitos' as const,
      href: `/circuitos?id=${c.circuitId}`,
    }))
  results.push(...circuits)

  const seasons = getSeasons()
    .filter(y => String(y).includes(q))
    .sort((a, b) => b - a)
    .slice(0, MAX_PER_CATEGORY)
    .map(y => ({
      id: String(y),
      label: `Temporada ${y}`,
      category: 'temporadas' as const,
      href: `/temporadas?year=${y}`,
    }))
  results.push(...seasons)

  return NextResponse.json({ results })
}
