const fs = require('fs')
const path = require('path')

const FILE = path.join(process.cwd(), 'data', 'drivers.ts')
const JSON_FILE = path.join(process.cwd(), 'data', 'json', 'drivers.json')

const NATIONALITY_FLAGS = {
  'British': '🇬🇧', 'German': '🇩🇪', 'Brazilian': '🇧🇷', 'French': '🇫🇷',
  'Finnish': '🇫🇮', 'Austrian': '🇦🇹', 'Spanish': '🇪🇸', 'Dutch': '🇳🇱',
  'Australian': '🇦🇺', 'Canadian': '🇨🇦', 'Italian': '🇮🇹', 'American': '🇺🇸',
  'Mexican': '🇲🇽', 'Japanese': '🇯🇵', 'Monegasque': '🇲🇨', 'Thai': '🇹🇭',
  'Danish': '🇩🇰', 'Chinese': '🇨🇳', 'Argentine': '🇦🇷', 'Swiss': '🇨🇭',
  'Belgian': '🇧🇪', 'Swedish': '🇸🇪', 'New Zealander': '🇳🇿', 'Irish': '🇮🇪',
  'South African': '🇿🇦', 'Polish': '🇵🇱', 'Venezuelan': '🇻🇪', 'Colombian': '🇨🇴',
  'Indonesian': '🇮🇩', 'Azerbaijani': '🇦🇿', 'Portuguese': '🇵🇹', 'Hungarian': '🇭🇺',
  'Czech': '🇨🇿', 'Russian': '🇷🇺', 'Uruguayan': '🇺🇾', 'Chilean': '🇨🇱',
  'Rhodesian': '🇿🇼', 'Liechtensteiner': '🇱🇮', 'Indian': '🇮🇳', 'Malaysian': '🇲🇾',
  'East German': '🇩🇪',
}

function flagFor(nationality) {
  return NATIONALITY_FLAGS[nationality] ?? '🏁'
}

const src = fs.readFileSync(FILE, 'utf-8')
const existingIds = new Set([...src.matchAll(/\n {2}\{\n {4}id: '([^']+)',/g)].map(m => m[1]))

const drivers = JSON.parse(fs.readFileSync(JSON_FILE, 'utf-8')).MRData.DriverTable.Drivers

const newDrivers = drivers.filter(d => !existingIds.has(d.driverId))

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

function entry(d) {
  const givenName = d.givenName ?? ''
  const familyName = d.familyName ?? ''
  const nationality = d.nationality ?? ''
  const name = `${givenName} ${familyName}`.trim()
  return `  {
    id: '${esc(d.driverId)}',
    name: '${esc(name)}',
    firstName: '${esc(givenName)}',
    lastName: '${esc(familyName)}',
    nationality: '${esc(nationality)}',
    flag: '${flagFor(nationality)}',
    dateOfBirth: '${d.dateOfBirth ?? ''}',
    placeOfBirth: '',
    bio: '',
    championships: 0,
    wins: 0,
    poles: 0,
    podiums: 0,
    fastestLaps: 0,
    racesEntered: 0,
    points: 0,
    active: false,
    seasons: []
  },`
}

const newEntries = newDrivers.map(entry).join('\n')

const marker = '\n]\n\nexport function getDriver'
if (!src.includes(marker)) throw new Error('Insertion marker not found')
const updated = src.replace(marker, `\n${newEntries}\n]\n\nexport function getDriver`)

fs.writeFileSync(FILE, updated)
console.log(`Added ${newDrivers.length} new drivers (existing: ${existingIds.size}, total now: ${existingIds.size + newDrivers.length}).`)
