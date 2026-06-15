const fs = require('fs')
const path = require('path')

const FILE = path.join(process.cwd(), 'data', 'circuits.ts')

const FLAGS = {
  'Great Britain': '🇬🇧', 'Australia': '🇦🇺', 'USA': '🇺🇸', 'Sweden': '🇸🇪',
  'Germany': '🇩🇪', 'Azerbaijan': '🇦🇿', 'Portugal': '🇵🇹', 'Switzerland': '🇨🇭',
  'Spain': '🇪🇸', 'France': '🇫🇷', 'Hungary': '🇭🇺', 'Brazil': '🇧🇷',
  'Japan': '🇯🇵', 'Argentina': '🇦🇷', 'South Africa': '🇿🇦', 'Belgium': '🇧🇪',
  'Italy': '🇮🇹', 'Singapore': '🇸🇬', 'Canada': '🇨🇦', 'Austria': '🇦🇹',
  'Mexico': '🇲🇽', 'Malaysia': '🇲🇾', 'China': '🇨🇳', 'Morocco': '🇲🇦',
}

// [id, name, fullName, country, city, lat, lng, length, laps, firstGP, lastGP, gpName, direction, corners, drsZones, active]
const NEW_CIRCUITS = [
  ['ain-diab', 'Circuito Ain-Diab', 'Ain-Diab Circuit', 'Morocco', 'Casablanca', 33.5786, -7.6875, 7.618, 53, 1958, 1958, 'Gran Premio de Marruecos', 'clockwise', 8, 0, false],
  ['aintree', 'Aintree', 'Aintree Motor Racing Circuit', 'Great Britain', 'Liverpool', 53.4769, -2.94056, 4.828, 50, 1955, 1962, 'Gran Premio de Gran Bretaña', 'clockwise', 6, 0, false],
  ['albert_park', 'Albert Park Circuit', 'Melbourne Grand Prix Circuit', 'Australia', 'Melbourne', -37.8497, 144.968, 5.278, 58, 1996, 2025, 'Gran Premio de Australia', 'clockwise', 14, 4, true],
  ['americas', 'Circuito de las Américas', 'Circuit of The Americas', 'USA', 'Austin', 30.1328, -97.6411, 5.513, 56, 2012, 2025, 'Gran Premio de Estados Unidos', 'counter-clockwise', 20, 2, true],
  ['anderstorp', 'Scandinavian Raceway', 'Scandinavian Raceway', 'Sweden', 'Anderstorp', 57.2653, 13.6042, 4.018, 80, 1973, 1978, 'Gran Premio de Suecia', 'clockwise', 8, 0, false],
  ['avus', 'AVUS', 'Automobil-Verkehrs- und Übungsstraße', 'Germany', 'Berlín', 52.4806, 13.2514, 8.3, 9, 1959, 1959, 'Gran Premio de Alemania', 'clockwise', 2, 0, false],
  ['baku', 'Circuito urbano de Bakú', 'Baku City Circuit', 'Azerbaijan', 'Bakú', 40.3725, 49.8533, 6.003, 51, 2016, 2025, 'Gran Premio de Azerbaiyán', 'counter-clockwise', 20, 2, true],
  ['boavista', 'Circuito da Boavista', 'Circuito da Boavista', 'Portugal', 'Oporto', 41.1705, -8.67325, 7.4, 18, 1958, 1960, 'Gran Premio de Portugal', 'clockwise', 9, 0, false],
  ['bremgarten', 'Circuito de Bremgarten', 'Circuit Bremgarten', 'Switzerland', 'Berna', 46.9589, 7.40194, 7.28, 30, 1950, 1954, 'Gran Premio de Suiza', 'clockwise', 9, 0, false],
  ['catalunya', 'Circuit de Barcelona-Catalunya', 'Circuit de Barcelona-Catalunya', 'Spain', 'Montmeló', 41.57, 2.26111, 4.657, 66, 1991, 2025, 'Gran Premio de España', 'clockwise', 14, 2, true],
  ['charade', 'Circuito de Charade', 'Circuit de Charade', 'France', 'Clermont-Ferrand', 45.7472, 3.03889, 8.055, 38, 1965, 1972, 'Gran Premio de Francia', 'clockwise', 18, 0, false],
  ['dallas', 'Fair Park', 'Fair Park', 'USA', 'Dallas', 32.7774, -96.7587, 3.901, 67, 1984, 1984, 'Gran Premio de Dallas', 'clockwise', 17, 0, false],
  ['dijon', 'Dijon-Prenois', 'Circuit de Dijon-Prenois', 'France', 'Dijon', 47.3625, 4.89913, 3.801, 80, 1974, 1984, 'Gran Premio de Francia', 'clockwise', 10, 0, false],
  ['donington', 'Donington Park', 'Donington Park', 'Great Britain', 'Castle Donington', 52.8306, -1.37528, 4.023, 76, 1993, 1993, 'Gran Premio de Europa', 'clockwise', 12, 0, false],
  ['fuji', 'Fuji Speedway', 'Fuji Speedway', 'Japan', 'Oyama', 35.3717, 138.927, 4.563, 67, 1976, 2008, 'Gran Premio de Japón', 'clockwise', 16, 0, false],
  ['galvez', 'Autódromo Juan y Oscar Gálvez', 'Autódromo Oscar Alfredo Gálvez', 'Argentina', 'Buenos Aires', -34.6943, -58.4593, 5.968, 53, 1953, 1998, 'Gran Premio de Argentina', 'counter-clockwise', 13, 0, false],
  ['george', 'Circuito Prince George', 'Prince George Circuit', 'South Africa', 'East London', -33.0486, 27.8736, 2.436, 82, 1962, 1962, 'Gran Premio de Sudáfrica', 'clockwise', 10, 0, false],
  ['hungaroring', 'Hungaroring', 'Hungaroring', 'Hungary', 'Budapest', 47.5789, 19.2486, 4.381, 70, 1986, 2025, 'Gran Premio de Hungría', 'clockwise', 14, 1, true],
  ['indianapolis', 'Indianapolis Motor Speedway', 'Indianapolis Motor Speedway Road Course', 'USA', 'Indianápolis', 39.795, -86.2347, 4.192, 73, 2000, 2007, 'Gran Premio de Estados Unidos', 'clockwise', 13, 0, false],
  ['jacarepagua', 'Autódromo de Jacarepaguá', 'Autódromo Internacional Nelson Piquet', 'Brazil', 'Río de Janeiro', -22.9756, -43.395, 5.031, 63, 1978, 1989, 'Gran Premio de Brasil', 'clockwise', 12, 0, false],
  ['jarama', 'Circuito del Jarama', 'Circuito Permanente del Jarama', 'Spain', 'Madrid', 40.6171, -3.58558, 3.404, 90, 1968, 1981, 'Gran Premio de España', 'clockwise', 13, 0, false],
  ['kyalami', 'Kyalami', 'Kyalami Grand Prix Circuit', 'South Africa', 'Midrand', -25.9894, 28.0767, 4.104, 75, 1967, 1993, 'Gran Premio de Sudáfrica', 'clockwise', 14, 0, false],
  ['lemans', 'Circuito Bugatti de Le Mans', 'Circuit Bugatti', 'France', 'Le Mans', 47.95, 0.224231, 4.43, 57, 1967, 1967, 'Gran Premio de Francia', 'clockwise', 14, 0, false],
  ['madring', 'Circuito urbano de Madrid', 'Madring', 'Spain', 'Madrid', 40.46528, -3.61528, 5.474, 56, 2026, 2026, 'Gran Premio de España', 'counter-clockwise', 20, 2, true],
  ['marina_bay', 'Circuito de Marina Bay', 'Marina Bay Street Circuit', 'Singapore', 'Singapur', 1.2914, 103.864, 4.94, 62, 2008, 2025, 'Gran Premio de Singapur', 'clockwise', 19, 1, true],
  ['monsanto', 'Circuito de Monsanto', 'Monsanto Park Circuit', 'Portugal', 'Lisboa', 38.7197, -9.20306, 5.44, 40, 1959, 1959, 'Gran Premio de Portugal', 'clockwise', 14, 0, false],
  ['montjuic', 'Circuito de Montjuïc', 'Circuit de Montjuïc', 'Spain', 'Barcelona', 41.3664, 2.15167, 3.79, 60, 1969, 1975, 'Gran Premio de España', 'clockwise', 14, 0, false],
  ['mosport', 'Mosport Park', 'Mosport International Raceway', 'Canada', 'Ontario', 44.0481, -78.6756, 3.957, 80, 1967, 1977, 'Gran Premio de Canadá', 'clockwise', 10, 0, false],
  ['mugello', 'Autodromo Internazionale del Mugello', 'Autodromo Internazionale del Mugello', 'Italy', 'Mugello', 43.9975, 11.3719, 5.245, 59, 2020, 2020, 'Gran Premio de la Toscana', 'clockwise', 15, 2, false],
  ['nivelles', 'Nivelles-Baulers', 'Circuit Nivelles-Baulers', 'Belgium', 'Bruselas', 50.6211, 4.32694, 3.737, 85, 1972, 1974, 'Gran Premio de Bélgica', 'clockwise', 8, 0, false],
  ['okayama', 'Circuito TI de Aida', 'Okayama International Circuit', 'Japan', 'Okayama', 34.915, 134.221, 3.703, 83, 1994, 1995, 'Gran Premio del Pacífico', 'clockwise', 13, 0, false],
  ['pedralbes', 'Circuito de Pedralbes', 'Circuit de Pedralbes', 'Spain', 'Barcelona', 41.3903, 2.11667, 6.316, 70, 1951, 1954, 'Gran Premio de España', 'clockwise', 11, 0, false],
  ['pescara', 'Circuito de Pescara', 'Pescara Circuit', 'Italy', 'Pescara', 42.475, 14.1508, 25.8, 18, 1957, 1957, 'Gran Premio de Pescara', 'clockwise', 18, 0, false],
  ['phoenix', 'Circuito callejero de Phoenix', 'Phoenix Street Circuit', 'USA', 'Phoenix', 33.4479, -112.075, 3.72, 75, 1989, 1991, 'Gran Premio de Estados Unidos', 'clockwise', 10, 0, false],
  ['red_bull_ring', 'Red Bull Ring', 'Red Bull Ring', 'Austria', 'Spielberg', 47.2197, 14.7647, 4.318, 71, 2014, 2025, 'Gran Premio de Austria', 'clockwise', 10, 3, true],
  ['ricard', 'Circuit Paul Ricard', 'Circuit Paul Ricard', 'France', 'Le Castellet', 43.2506, 5.79167, 5.842, 53, 1971, 2022, 'Gran Premio de Francia', 'clockwise', 15, 2, false],
  ['riverside', 'Riverside International Raceway', 'Riverside International Raceway', 'USA', 'California', 33.937, -117.273, 5.275, 75, 1960, 1960, 'Gran Premio de Estados Unidos', 'clockwise', 9, 0, false],
  ['rodriguez', 'Autódromo Hermanos Rodríguez', 'Autódromo Hermanos Rodríguez', 'Mexico', 'Ciudad de México', 19.4042, -99.0907, 4.304, 71, 1963, 2025, 'Gran Premio de México', 'counter-clockwise', 17, 2, true],
  ['sebring', 'Sebring International Raceway', 'Sebring International Raceway', 'USA', 'Florida', 27.4547, -81.3483, 8.355, 12, 1959, 1959, 'Gran Premio de Estados Unidos', 'clockwise', 12, 0, false],
  ['sepang', 'Sepang International Circuit', 'Sepang International Circuit', 'Malaysia', 'Kuala Lumpur', 2.76083, 101.738, 5.543, 56, 1999, 2017, 'Gran Premio de Malasia', 'counter-clockwise', 15, 2, false],
  ['shanghai', 'Circuito Internacional de Shanghái', 'Shanghai International Circuit', 'China', 'Shanghái', 31.3389, 121.22, 5.451, 56, 2004, 2025, 'Gran Premio de China', 'clockwise', 16, 2, true],
  ['tremblant', 'Circuit Mont-Tremblant', 'Circuit Mont-Tremblant', 'Canada', 'Quebec', 46.1877, -74.6099, 4.265, 90, 1968, 1970, 'Gran Premio de Canadá', 'clockwise', 9, 0, false],
  ['villeneuve', 'Circuit Gilles Villeneuve', 'Circuit Gilles Villeneuve', 'Canada', 'Montreal', 45.5, -73.5228, 4.361, 70, 1978, 2025, 'Gran Premio de Canadá', 'counter-clockwise', 14, 3, true],
  ['zeltweg', 'Zeltweg', 'Flugplatz Zeltweg', 'Austria', 'Estiria', 47.2039, 14.7478, 3.186, 50, 1964, 1964, 'Gran Premio de Austria', 'clockwise', 4, 0, false],
  ['zolder', 'Circuit Zolder', 'Omloop Terlaemen', 'Belgium', 'Heusden-Zolder', 50.9894, 5.25694, 4.262, 70, 1973, 1984, 'Gran Premio de Bélgica', 'clockwise', 10, 0, false],
]

let src = fs.readFileSync(FILE, 'utf-8')

// Rename existing ids to match Ergast canonical circuitIds
const RENAMES = {
  india: 'buddh',
  hockenheim: 'hockenheimring',
  qatar: 'losail',
  las_vegas: 'vegas',
  abu_dhabi: 'yas_marina',
  korea: 'yeongam',
}
for (const [oldId, newId] of Object.entries(RENAMES)) {
  const before = src
  src = src.replace(`id: '${oldId}',`, `id: '${newId}',`)
  if (src === before) throw new Error(`Rename failed for ${oldId}`)
}

function entry([id, name, fullName, country, city, lat, lng, length, laps, firstGP, lastGP, gpName, direction, corners, drsZones, active]) {
  const flag = FLAGS[country] ?? '🏁'
  return `  {
    id: '${id}',
    name: '${name.replace(/'/g, "\\'")}',
    fullName: '${fullName.replace(/'/g, "\\'")}',
    country: '${country}',
    city: '${city.replace(/'/g, "\\'")}',
    flag: '${flag}',
    lat: ${lat},
    lng: ${lng},
    length: ${length},
    laps: ${laps},
    firstGP: ${firstGP},
    lastGP: ${lastGP},
    gpName: '${gpName.replace(/'/g, "\\'")}',
    surface: 'Asphalt',
    direction: '${direction}',
    corners: ${corners},
    drsZones: ${drsZones},
    active: ${active},
    races: []
  },`
}

const newEntries = NEW_CIRCUITS.map(entry).join('\n')

const marker = '\n]\n\nexport function getCircuit'
if (!src.includes(marker)) throw new Error('Insertion marker not found')
src = src.replace(marker, `\n${newEntries}\n]\n\nexport function getCircuit`)

fs.writeFileSync(FILE, src)
console.log(`Added ${NEW_CIRCUITS.length} new circuits, renamed ${Object.keys(RENAMES).length} ids.`)
