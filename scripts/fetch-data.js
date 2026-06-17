// One-off script to populate data/json/ with static snapshots from the Jolpica API
// (Ergast-compatible successor). Run once with: node scripts/fetch-data.js
// The website never calls this API directly — it only reads the JSON files this script produces.

const fs = require('fs')
const path = require('path')

const BASE_URL = 'https://api.jolpi.ca/ergast/f1'
const PAGE_LIMIT = 100
const DELAY_MS = 200
const MAX_RETRIES = 6
const RETRY_BASE_DELAY_MS = 2000
const FIRST_YEAR = 1950
const LAST_YEAR = 2025
const FIRST_CONSTRUCTOR_STANDINGS_YEAR = 1958

const ROOT = path.join(__dirname, '..')
const JSON_DIR = path.join(ROOT, 'data', 'json')
const STANDINGS_DIR = path.join(JSON_DIR, 'standings')
const RESULTS_DIR = path.join(JSON_DIR, 'results')
const RACES_DIR = path.join(JSON_DIR, 'races')
const ERROR_LOG = path.join(JSON_DIR, 'errors.log')

const stats = { ok: 0, failed: 0, skipped: 0 }
const errors = []

function ensureDirs() {
  for (const dir of [JSON_DIR, STANDINGS_DIR, RESULTS_DIR, RACES_DIR]) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function fetchJson(url) {
  const res = await fetch(url, { headers: { Accept: 'application/json' } })
  if (!res.ok) {
    const err = new Error(`HTTP ${res.status} ${res.statusText}`)
    err.status = res.status
    err.retryAfter = res.headers.get('retry-after')
    throw err
  }
  return res.json()
}

async function fetchJsonWithRetry(url) {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const data = await fetchJson(url)
      await sleep(DELAY_MS)
      return data
    } catch (err) {
      if (err.status === 429 && attempt < MAX_RETRIES) {
        const retryAfterMs = err.retryAfter ? Number(err.retryAfter) * 1000 : null
        const backoffMs = retryAfterMs || RETRY_BASE_DELAY_MS * Math.pow(2, attempt)
        console.log(`    WAIT 429, reintentando en ${backoffMs}ms (intento ${attempt + 1}/${MAX_RETRIES})`)
        await sleep(backoffMs)
        continue
      }
      throw err
    }
  }
}

// Fetches all pages of a simple list resource (drivers, constructors, circuits)
// and merges the items into a single array on the first response.
async function fetchAllPages(urlBuilder, getList) {
  let offset = 0
  let total = Infinity
  let combined = []
  let firstData = null

  while (offset < total) {
    const data = await fetchJsonWithRetry(urlBuilder(offset))
    if (!firstData) firstData = data
    total = Number(data.MRData.total)
    combined = combined.concat(getList(data))
    offset += PAGE_LIMIT
  }

  return { firstData, combined, total }
}

async function fetchSimpleList(label, urlPath, getTable, getList, setList) {
  const data = await fetchAllPages(
    offset => `${BASE_URL}${urlPath}?limit=${PAGE_LIMIT}&offset=${offset}`,
    getList
  )
  const { firstData, combined, total } = data
  setList(firstData, combined)
  firstData.MRData.limit = String(PAGE_LIMIT)
  firstData.MRData.total = String(total)
  console.log(`  OK   ${label} (${combined.length}/${total})`)
  return firstData
}

// Standings (driver/constructor) for a given year, paginated.
async function fetchStandings(year, kind) {
  const endpoint = kind === 'driver' ? 'driverStandings' : 'constructorStandings'
  const key = kind === 'driver' ? 'DriverStandings' : 'ConstructorStandings'

  const { firstData, combined, total } = await fetchAllPages(
    offset => `${BASE_URL}/${year}/${endpoint}.json?limit=${PAGE_LIMIT}&offset=${offset}`,
    data => {
      const list = data.MRData.StandingsTable.StandingsLists[0]
      return list ? (list[key] || []) : []
    }
  )

  if (firstData.MRData.StandingsTable.StandingsLists[0]) {
    firstData.MRData.StandingsTable.StandingsLists[0][key] = combined
  }
  firstData.MRData.limit = String(PAGE_LIMIT)
  firstData.MRData.total = String(total)
  console.log(`  OK   standings/${kind === 'driver' ? 'drivers' : 'constructors'}_${year}.json (${combined.length}/${total})`)
  return firstData
}

// Results for a given year, paginated. Merges Results arrays across pages by round.
async function fetchResults(year) {
  const racesByRound = new Map()

  const { firstData, total } = await fetchAllPages(
    offset => `${BASE_URL}/${year}/results.json?limit=${PAGE_LIMIT}&offset=${offset}`,
    data => {
      for (const race of data.MRData.RaceTable.Races) {
        if (!racesByRound.has(race.round)) {
          racesByRound.set(race.round, { ...race, Results: [...race.Results] })
        } else {
          racesByRound.get(race.round).Results.push(...race.Results)
        }
      }
      return []
    }
  )

  const races = Array.from(racesByRound.values()).sort((a, b) => Number(a.round) - Number(b.round))
  firstData.MRData.RaceTable.Races = races
  firstData.MRData.limit = String(PAGE_LIMIT)
  firstData.MRData.total = String(total)
  const resultCount = races.reduce((sum, r) => sum + r.Results.length, 0)
  console.log(`  OK   results/results_${year}.json (${resultCount}/${total} resultados, ${races.length} carreras)`)
  return firstData
}

async function runTask(outPath, label, taskFn) {
  if (fs.existsSync(outPath)) {
    stats.skipped++
    console.log(`  SKIP ${label} (ya existe)`)
    return
  }
  try {
    const data = await taskFn()
    fs.writeFileSync(outPath, JSON.stringify(data, null, 2))
    stats.ok++
  } catch (err) {
    stats.failed++
    const msg = `${label} -> ${err.message}`
    errors.push(msg)
    console.log(`  FAIL ${label} -> ${err.message}`)
  }
}

async function main() {
  ensureDirs()

  console.log('=== Descargando archivos base ===')
  await runTask(path.join(JSON_DIR, 'seasons.json'), 'seasons.json', () =>
    fetchSimpleList('seasons.json', '/seasons.json', d => d, d => d.MRData.SeasonTable.Seasons,
      (d, list) => { d.MRData.SeasonTable.Seasons = list })
  )
  await runTask(path.join(JSON_DIR, 'drivers.json'), 'drivers.json', () =>
    fetchSimpleList('drivers.json', '/drivers.json', d => d, d => d.MRData.DriverTable.Drivers,
      (d, list) => { d.MRData.DriverTable.Drivers = list })
  )
  await runTask(path.join(JSON_DIR, 'constructors.json'), 'constructors.json', () =>
    fetchSimpleList('constructors.json', '/constructors.json', d => d, d => d.MRData.ConstructorTable.Constructors,
      (d, list) => { d.MRData.ConstructorTable.Constructors = list })
  )
  await runTask(path.join(JSON_DIR, 'circuits.json'), 'circuits.json', () =>
    fetchSimpleList('circuits.json', '/circuits.json', d => d, d => d.MRData.CircuitTable.Circuits,
      (d, list) => { d.MRData.CircuitTable.Circuits = list })
  )

  console.log('\n=== Descargando clasificaciones de pilotos (1950-2025) ===')
  for (let year = FIRST_YEAR; year <= LAST_YEAR; year++) {
    await runTask(
      path.join(STANDINGS_DIR, `drivers_${year}.json`),
      `standings/drivers_${year}.json`,
      () => fetchStandings(year, 'driver')
    )
  }

  console.log('\n=== Descargando clasificaciones de constructores (1958-2025) ===')
  for (let year = FIRST_CONSTRUCTOR_STANDINGS_YEAR; year <= LAST_YEAR; year++) {
    await runTask(
      path.join(STANDINGS_DIR, `constructors_${year}.json`),
      `standings/constructors_${year}.json`,
      () => fetchStandings(year, 'constructor')
    )
  }

  console.log('\n=== Descargando resultados de carreras (1950-2025) ===')
  for (let year = FIRST_YEAR; year <= LAST_YEAR; year++) {
    await runTask(
      path.join(RESULTS_DIR, `results_${year}.json`),
      `results/results_${year}.json`,
      () => fetchResults(year)
    )
  }

  console.log('\n=== Descargando calendarios de carreras (1950-2025) ===')
  for (let year = FIRST_YEAR; year <= LAST_YEAR; year++) {
    await runTask(
      path.join(RACES_DIR, `races_${year}.json`),
      `races/races_${year}.json`,
      () => fetchSimpleList(`races/races_${year}.json`, `/${year}/races.json`, d => d, d => d.MRData.RaceTable.Races,
        (d, list) => { d.MRData.RaceTable.Races = list })
    )
  }

  if (errors.length > 0) {
    fs.writeFileSync(ERROR_LOG, errors.join('\n') + '\n')
  } else if (fs.existsSync(ERROR_LOG)) {
    fs.unlinkSync(ERROR_LOG)
  }

  console.log('\n=== Resumen ===')
  console.log(`Archivos descargados correctamente: ${stats.ok}`)
  console.log(`Archivos ya existentes (omitidos): ${stats.skipped}`)
  console.log(`Errores: ${stats.failed}`)
  if (stats.failed > 0) {
    console.log(`Detalles de errores guardados en ${path.relative(ROOT, ERROR_LOG)}`)
  }

  require('./update-metadata').touchMetadata()
}

main().catch(err => {
  console.error('Error fatal:', err)
  process.exit(1)
})
