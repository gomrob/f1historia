/**
 * Generates data/json/season-entries/{year}.json for every F1 season (1950-2026).
 *
 * Uses locally cached standings data from data/json/standings/ first.
 * Falls back to the Jolpica API (Ergast-compatible) with a 300ms delay between
 * requests if a local file is missing.
 *
 * Output shape per entry matches lib/types.ts SeasonEntry:
 *   { teamId, driverIds, chassis, engine, points, position, wins, color }
 */

const fs   = require('fs')
const path = require('path')
const https = require('https')
const http  = require('http')

const DATA_DIR   = path.join(__dirname, '..', 'data', 'json')
const OUTPUT_DIR = path.join(DATA_DIR, 'season-entries')

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true })

// ─── Comprehensive team-color palette ────────────────────────────────────────
const TEAM_COLORS = {
  // Current era
  ferrari:       '#E8002D',
  mclaren:       '#FF8000',
  mercedes:      '#27F4D2',
  williams:      '#64C4FF',
  redbull:       '#3671C6',
  red_bull:      '#3671C6',
  astonmartin:   '#358C75',
  aston_martin:  '#358C75',
  alpine:        '#FF87BC',
  haas:          '#EB0A1E',
  sauber:        '#F50537',
  racingbulls:   '#6692FF',
  alphatauri:    '#6692FF',
  toro_rosso:    '#CC0000',
  cadillac:      '#9C8A5E',
  // 2000s–2010s
  renault:       '#FFD700',
  lotus_f1:      '#1A1A2E',
  jordan:        '#FFD700',
  bar:           '#B71C1C',
  toyota:        '#E53935',
  bmwsauber:     '#1565C0',
  brawn:         '#FFD700',
  force_india:   '#FF6F00',
  racing_point:  '#F06292',
  stewart:       '#003399',
  prost:         '#002FA7',
  super_aguri:   '#CC0000',
  virgin:        '#CC0000',
  hispania:      '#FF6F00',
  hrt:           '#FF6F00',
  caterham:      '#2E7D32',
  marussia:      '#C62828',
  manor:         '#E53935',
  // 1980s–1990s
  benetton:      '#00C853',
  lotus:         '#FFD700',
  team_lotus:    '#FFD700',
  brabham:       '#1B5E20',
  tyrrell:       '#1E3A5F',
  march:         '#FF6600',
  ligier:        '#003366',
  arrows:        '#FF8C00',
  fittipaldi:    '#FFD700',
  ats:           '#888888',
  ensign:        '#CC3300',
  osella:        '#003399',
  shadow:        '#444444',
  wolf:          '#1A1A2E',
  surtees:       '#CC6600',
  hesketh:       '#AAAAAA',
  toleman:       '#CC3300',
  minardi:       '#000080',
  coloni:        '#888888',
  andrea_moda:   '#888888',
  zakspeed:      '#888888',
  rial:          '#888888',
  eurobrun:      '#888888',
  onyx:          '#888888',
  larrousse:     '#003399',
  dallara:       '#888888',
  fondmetal:     '#888888',
  simtek:        '#FF6600',
  footwork:      '#FF8C00',
  pacific:       '#228B22',
  // 1950s–1970s
  alfa:          '#B22222',
  alfa_romeo:    '#B22222',
  maserati:      '#003399',
  cooper:        '#2E8B57',
  brm:           '#006400',
  vanwall:       '#006400',
  gordini:       '#003399',
  lancia:        '#CC0000',
  connaught:     '#2E8B57',
  matra:         '#003399',
  penske:        '#003399',
  lola:          '#888888',
  ram:           '#888888',
  martini:       '#888888',
  ags:           '#888888',
  // Lago/Talbot
  lago:          '#003399',
  simca:         '#003399',
  era:           '#228B22',
  alta:          '#228B22',
  milano:        '#CC0000',
  // Indianapolis 500 constructors (1950–1960 F1 era)
  kurtis_kraft:  '#2166AC',
  deidt:         '#4393C3',
  lesovsky:      '#4393C3',
  moore:         '#4393C3',
  watson:        '#4393C3',
  wetteroth:     '#4393C3',
  marchese:      '#4393C3',
  nichels:       '#4393C3',
  adams:         '#4393C3',
  snowberger:    '#4393C3',
  ewing:         '#4393C3',
  langley:       '#4393C3',
  olson:         '#4393C3',
  rae:           '#4393C3',
  stevens:       '#4393C3',
  trevis:        '#4393C3',
  epperly:       '#4393C3',
  watson_car:    '#4393C3',
  phillips:      '#4393C3',
  zink:          '#4393C3',
  turner:        '#4393C3',
  christensen:   '#4393C3',
  kk500g:        '#4393C3',
  kurtis500b:    '#4393C3',
  kurtis500c:    '#4393C3',
  schroeder:     '#4393C3',
}

function getColor(constructorId) {
  if (!constructorId) return '#6B6B80'
  const id = constructorId.toLowerCase()
  if (TEAM_COLORS[id]) return TEAM_COLORS[id]
  // Normalise: remove non-alphanumeric characters
  const norm = id.replace(/[^a-z0-9]/g, '')
  return TEAM_COLORS[norm] ?? '#6B6B80'
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function readLocalJson(relPath) {
  const fp = path.join(DATA_DIR, relPath)
  if (!fs.existsSync(fp)) return null
  try { return JSON.parse(fs.readFileSync(fp, 'utf-8')) } catch { return null }
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http
    const req = client.get(url, { headers: { 'User-Agent': 'f1historia-script/1.0' } }, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}`))
        res.resume()
        return
      }
      let data = ''
      res.on('data', chunk => data += chunk)
      res.on('end', () => {
        try { resolve(JSON.parse(data)) } catch (e) { reject(e) }
      })
    })
    req.on('error', reject)
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('Timeout')) })
  })
}

async function fetchOrLocal(localPath, apiUrl) {
  const local = readLocalJson(localPath)
  if (local) return local
  await sleep(300)
  try {
    console.log(`    → API: ${apiUrl}`)
    return await fetchUrl(apiUrl)
  } catch (e) {
    console.warn(`    ! API failed: ${e.message}`)
    return null
  }
}

// ─── Core builder ─────────────────────────────────────────────────────────────

async function buildEntriesForYear(year) {
  // 1. Load driver standings
  const driverData = await fetchOrLocal(
    `standings/drivers_${year}.json`,
    `https://api.jolpi.ca/ergast/f1/${year}/driverstandings.json`
  )
  const driverStandings =
    driverData?.MRData?.StandingsTable?.StandingsLists?.[0]?.DriverStandings ?? []

  if (driverStandings.length === 0) return []

  // 2. Map constructor → driverIds (take first/primary constructor per driver)
  const constructorDrivers = {}   // constructorId → [driverId, ...]
  for (const s of driverStandings) {
    const cid = s.Constructors?.[0]?.constructorId
    if (!cid) continue
    if (!constructorDrivers[cid]) constructorDrivers[cid] = []
    if (!constructorDrivers[cid].includes(s.Driver.driverId)) {
      constructorDrivers[cid].push(s.Driver.driverId)
    }
  }

  // 3. Try constructor standings (available 1958+)
  const constructorData = await fetchOrLocal(
    `standings/constructors_${year}.json`,
    `https://api.jolpi.ca/ergast/f1/${year}/constructorstandings.json`
  )
  const constructorStandings =
    constructorData?.MRData?.StandingsTable?.StandingsLists?.[0]?.ConstructorStandings ?? []

  if (constructorStandings.length > 0) {
    // Use constructor standings (authoritative for 1958+)
    return constructorStandings.map(cs => ({
      teamId:    cs.Constructor.constructorId,
      driverIds: constructorDrivers[cs.Constructor.constructorId] ?? [],
      chassis:   '',
      engine:    '',
      points:    Number(cs.points),
      position:  cs.position ? Number(cs.position) : 99,
      wins:      Number(cs.wins),
      color:     getColor(cs.Constructor.constructorId),
    }))
  }

  // 4. Pre-1958 fallback: derive from driver standings
  const seen = new Set()
  const entries = []

  for (const s of driverStandings) {
    const cid = s.Constructors?.[0]?.constructorId
    if (!cid || seen.has(cid)) continue
    seen.add(cid)

    const driverIds = constructorDrivers[cid] ?? []
    const totalPoints = driverStandings
      .filter(d => d.Constructors?.[0]?.constructorId === cid)
      .reduce((sum, d) => sum + Number(d.points), 0)
    const totalWins = driverStandings
      .filter(d => d.Constructors?.[0]?.constructorId === cid)
      .reduce((sum, d) => sum + Number(d.wins), 0)

    entries.push({
      teamId:    cid,
      driverIds,
      chassis:   '',
      engine:    '',
      points:    totalPoints,
      position:  0,
      wins:      totalWins,
      color:     getColor(cid),
    })
  }

  // Sort by points descending, assign positions
  entries.sort((a, b) => b.points - a.points)
  entries.forEach((e, i) => { e.position = i + 1 })
  return entries
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const years = []
  for (let y = 1950; y <= 2026; y++) years.push(y)

  console.log(`\n═══════════════════════════════════════════`)
  console.log(` BLOQUE 1 — Diagnóstico de huecos`)
  console.log(`═══════════════════════════════════════════`)

  // We can't easily import seasons.ts so we check which years have data
  console.log('\nTemporadas sin entries en data/seasons.ts (estimado):')
  const emptyYears = []
  for (let y = 1950; y <= 2026; y++) {
    // 2025 is missing, others that are empty: all except 2023,2024,2026
    if (![2026,2024,2023].includes(y)) emptyYears.push(y)
  }
  console.log(`  Años vacíos o incompletos: ${emptyYears.length}`)
  console.log(`  Rango: ${emptyYears[0]}–${emptyYears[emptyYears.length-1]}`)
  console.log(`  ⚠️  2025 completamente ausente del array SEASONS\n`)

  console.log(`═══════════════════════════════════════════`)
  console.log(` BLOQUE 2 — Generando season-entries`)
  console.log(`═══════════════════════════════════════════\n`)

  let success = 0, empty = 0, errors = 0

  for (const year of years) {
    process.stdout.write(`  ${year}... `)
    try {
      const entries = await buildEntriesForYear(year)
      const outPath = path.join(OUTPUT_DIR, `${year}.json`)
      fs.writeFileSync(outPath, JSON.stringify(entries, null, 2), 'utf-8')
      if (entries.length > 0) {
        console.log(`✓  ${entries.length} equipos`)
        success++
      } else {
        console.log(`–  (sin datos)`)
        empty++
      }
    } catch (e) {
      console.log(`✗  ERROR: ${e.message}`)
      errors++
    }
  }

  console.log(`\n═══════════════════════════════════════════`)
  console.log(` Resumen`)
  console.log(`═══════════════════════════════════════════`)
  console.log(`  ✓ Con datos:  ${success}`)
  console.log(`  – Sin datos:  ${empty}`)
  console.log(`  ✗ Errores:    ${errors}`)
  console.log(`  Archivos en: data/json/season-entries/\n`)
}

main().catch(console.error)
