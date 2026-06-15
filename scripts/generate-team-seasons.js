const fs = require('fs')
const path = require('path')

const FILE = path.join(process.cwd(), 'data', 'teams.ts')
const STANDINGS_DIR = path.join(process.cwd(), 'data', 'json', 'standings')
const RESULTS_DIR = path.join(process.cwd(), 'data', 'json', 'results')

// team id -> list of { id: ergastConstructorId, from, to }
const MAPPING = {
  ferrari: [{ id: 'ferrari', from: 1950, to: 2025 }],
  mclaren: [{ id: 'mclaren', from: 1966, to: 2025 }],
  mercedes: [{ id: 'mercedes', from: 2010, to: 2025 }],
  redbull: [{ id: 'red_bull', from: 2005, to: 2025 }],
  williams: [{ id: 'williams', from: 1977, to: 2025 }],
  lotus: [{ id: 'team_lotus', from: 1958, to: 1994 }],
  alpine: [
    { id: 'toleman', from: 1981, to: 1985 },
    { id: 'renault', from: 2002, to: 2011 },
    { id: 'lotus_f1', from: 2012, to: 2015 },
    { id: 'renault', from: 2016, to: 2020 },
    { id: 'alpine', from: 2021, to: 2025 },
  ],
  alfa_romeo: [{ id: 'alfa', from: 1950, to: 1985 }],
  maserati: [{ id: 'maserati', from: 1950, to: 1960 }],
  brm: [{ id: 'brm', from: 1950, to: 1977 }],
  vanwall: [{ id: 'vanwall', from: 1954, to: 1958 }],
  cooper: [{ id: 'cooper', from: 1950, to: 1969 }],
  brabham: [{ id: 'brabham', from: 1962, to: 1992 }],
  tyrrell: [{ id: 'tyrrell', from: 1968, to: 1998 }],
  matra: [{ id: 'matra', from: 1965, to: 1972 }],
  march: [{ id: 'march', from: 1969, to: 1992 }],
  surtees: [{ id: 'surtees', from: 1970, to: 1978 }],
  shadow: [{ id: 'shadow', from: 1973, to: 1980 }],
  ligier: [{ id: 'ligier', from: 1976, to: 1996 }],
  arrows: [{ id: 'arrows', from: 1977, to: 2002 }],
  minardi: [{ id: 'minardi', from: 1985, to: 2005 }],
  benetton: [{ id: 'benetton', from: 1986, to: 2001 }],
  jordan: [{ id: 'jordan', from: 1991, to: 2005 }],
  bar: [{ id: 'bar', from: 1999, to: 2005 }],
  brawn: [{ id: 'brawn', from: 2009, to: 2009 }],
  hrt: [{ id: 'hrt', from: 2010, to: 2012 }],
  caterham: [{ id: 'caterham', from: 2010, to: 2014 }],
  marussia: [
    { id: 'marussia', from: 2010, to: 2015 },
    { id: 'manor', from: 2016, to: 2016 },
  ],
  force_india: [
    { id: 'force_india', from: 2008, to: 2018 },
    { id: 'racing_point', from: 2019, to: 2020 },
  ],
  toro_rosso: [
    { id: 'toro_rosso', from: 2006, to: 2019 },
    { id: 'alphatauri', from: 2020, to: 2023 },
    { id: 'rb', from: 2024, to: 2025 },
  ],
}

const standingsCache = new Map()
function loadStandings(year) {
  if (!standingsCache.has(year)) {
    const file = path.join(STANDINGS_DIR, `constructors_${year}.json`)
    standingsCache.set(year, fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf-8')) : null)
  }
  return standingsCache.get(year)
}

const resultsCache = new Map()
function loadResults(year) {
  if (!resultsCache.has(year)) {
    const file = path.join(RESULTS_DIR, `results_${year}.json`)
    resultsCache.set(year, fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf-8')) : null)
  }
  return resultsCache.get(year)
}

function getStanding(year, ergastId) {
  const data = loadStandings(year)
  if (!data) return null
  const list = data.MRData.StandingsTable.StandingsLists[0]
  if (!list) return null
  const entry = list.ConstructorStandings.find(c => c.Constructor.constructorId === ergastId)
  if (!entry) return null
  return { points: Number(entry.points), position: Number(entry.position), wins: Number(entry.wins) }
}

function getRacesAndDrivers(year, ergastId) {
  const data = loadResults(year)
  if (!data) return { races: 0, drivers: [] }
  let races = 0
  const drivers = new Set()
  for (const race of data.MRData.RaceTable.Races) {
    let found = false
    for (const result of race.Results) {
      if (result.Constructor.constructorId === ergastId) {
        found = true
        drivers.add(result.Driver.driverId)
      }
    }
    if (found) races++
  }
  return { races, drivers: [...drivers] }
}

let src = fs.readFileSync(FILE, 'utf-8')

// Split into individual team blocks while preserving everything outside the array
const arrayStart = src.indexOf('export const TEAMS: Team[] = [') + 'export const TEAMS: Team[] = ['.length
const arrayEndMarker = '\n]\n\nexport function getTeam'
const arrayEnd = src.indexOf(arrayEndMarker)
const before = src.slice(0, arrayStart)
const arrayBody = src.slice(arrayStart, arrayEnd)
const after = src.slice(arrayEnd)

// Find each top-level team object by tracking brace depth
const teamBlocks = []
let depth = 0
let blockStart = null
for (let i = 0; i < arrayBody.length; i++) {
  const ch = arrayBody[i]
  if (ch === '{') {
    if (depth === 0) blockStart = i
    depth++
  } else if (ch === '}') {
    depth--
    if (depth === 0) {
      teamBlocks.push(arrayBody.slice(blockStart, i + 1))
    }
  }
}

let totalNewSeasons = 0
let totalEnriched = 0

const newBlocks = teamBlocks.map(block => {
  const id = block.match(/id: '([^']+)',/)[1]
  const mapping = MAPPING[id]
  if (!mapping) return block

  const existingYears = new Set([...block.matchAll(/\n\s*\{\s*\n\s*year: (\d+),/g)].map(m => Number(m[1])))

  const colorMatch = block.match(/color: '(#[0-9A-Fa-f]+)'/)
  const teamColor = colorMatch ? colorMatch[1] : '#555566'

  const newEntries = []

  for (const range of mapping) {
    for (let year = range.from; year <= range.to; year++) {
      const standing = getStanding(year, range.id)
      if (!standing) continue
      const { races, drivers } = getRacesAndDrivers(year, range.id)

      if (existingYears.has(year)) {
        // Enrich existing entry with races count if missing
        const re = new RegExp(`(\\{\\s*\\n\\s*year: ${year},[\\s\\S]*?)\\n(\\s*\\})`)
        block = block.replace(re, (m, p1, p2) => {
          if (/races:/.test(p1)) return m
          return `${p1},\n        races: ${races}\n${p2}`
        })
        totalEnriched++
        continue
      }

      const driversStr = drivers.map(d => `'${d}'`).join(', ')
      newEntries.push(`      {
        year: ${year}, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: [${driversStr}], points: ${standing.points}, position: ${standing.position}, wins: ${standing.wins},
        color: '${teamColor}', sponsors: [], liveryColors: [],
        races: ${races}
      },`)
      existingYears.add(year)
      totalNewSeasons++
    }
  }

  if (newEntries.length === 0) return block

  // Insert new entries right after "seasons: ["
  return block.replace(/seasons:\s*\[/, `seasons: [\n${newEntries.join('\n')}`)
})

fs.writeFileSync(FILE, before + newBlocks.join(',\n  ') + after)
console.log(`Added ${totalNewSeasons} new season entries, enriched ${totalEnriched} existing entries with race counts.`)
