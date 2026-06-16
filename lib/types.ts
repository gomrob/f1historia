// ─── Core Types ──────────────────────────────────────────────────────────────

export interface Driver {
  id: string
  name: string
  firstName: string
  lastName: string
  nationality: string
  flag: string
  dateOfBirth: string
  placeOfBirth: string
  bio: string
  photo?: string
  helmetUrl?: string
  number?: number
  championships: number
  wins: number
  poles: number
  podiums: number
  fastestLaps: number
  racesEntered: number
  points: number
  active: boolean
  seasons: DriverSeason[]
}

export interface DriverSeason {
  year: number
  teamId: string
  number: number
  points: number
  position: number
  wins: number
  podiums: number
  poles: number
}

export interface Team {
  id: string
  name: string
  fullName: string
  nationality: string
  flag: string
  color: string
  founded: number
  dissolved?: number
  bio: string
  logoUrl?: string
  championships: number
  wins: number
  poles: number
  podiums: number
  basedIn: string
  active: boolean
  seasons: TeamSeason[]
}

export interface TeamSeason {
  year: number
  chassis: string
  engine: string
  engineSupplier: string
  tyreSupplier: string
  principal: string
  technicalDirector?: string
  drivers: string[]
  points: number
  position: number
  wins: number
  color: string
  sponsors: string[]
  liveryColors: string[]
  carModel3d?: string
  races?: number
}

export interface Circuit {
  id: string
  name: string
  fullName: string
  country: string
  city: string
  flag: string
  lat: number
  lng: number
  length: number
  laps: number
  firstGP: number
  lastGP: number
  gpName: string
  surface: string
  direction: 'clockwise' | 'counter-clockwise'
  corners: number
  drsZones: number
  lapRecord?: { time: string; driver: string; year: number }
  svgPath?: string
  photo?: string
  logoUrl?: string
  trackImageUrl?: string
  active: boolean
  races: CircuitRace[]
}

export interface CircuitRace {
  year: number
  winner: string
  team: string
  time: string
  fastestLap?: string
  laps: number
}

export interface Season {
  year: number
  champion: string | null
  constructorChampion: string | null
  totalRaces: number
  entries: SeasonEntry[]
  races: Race[]
}

export interface SeasonEntry {
  teamId: string
  driverIds: string[]
  chassis: string
  engine: string
  points: number
  position: number
  wins: number
  color: string
}

export interface Race {
  id: string
  year: number
  round: number
  name: string
  circuitId: string
  date: string
  results: RaceResult[]
  fastestLap?: { driverId: string; time: string; lap: number }
  polePosition?: { driverId: string; time: string }
}

export interface RaceResult {
  position: number
  driverId: string
  teamId: string
  points: number
  laps: number
  time?: string
  status: 'Finished' | 'Retired' | 'DSQ' | 'DNS'
  grid: number
  fastestLap?: boolean
}

export interface HallOfFameEntry {
  driverId: string
  championships: number
  wins: number
  poles: number
  podiums: number
  fastestLaps: number
  races: number
  points: number
  firstSeason: number
  lastSeason: number
  teams: string[]
}

export interface SearchResult {
  id: string
  label: string
  sublabel?: string
  category: 'pilotos' | 'escuderias' | 'circuitos' | 'temporadas'
  href: string
}

// ─── UI Types ─────────────────────────────────────────────────────────────────

export type NavSection = 'temporadas' | 'circuitos' | 'pilotos' | 'escuderias' | 'hall-of-fame'

export interface TeamColor {
  primary: string
  secondary?: string
}

export const TEAM_COLORS: Record<string, string> = {
  redbull:      '#3671C6',
  ferrari:      '#E8002D',
  mclaren:      '#FF8000',
  mercedes:     '#27F4D2',
  alpine:       '#FF87BC',
  astonmartin:  '#358C75',
  williams:     '#64C4FF',
  haas:         '#B6BABD',
  sauber:       '#52E252',
  racingbulls:  '#6692FF',
  cadillac:     '#9C8A5E',
  lotus:        '#FFD700',
  tyrrell:      '#1E3A5F',
  brabham:      '#1B5E20',
  benetton:     '#00C853',
  renault:      '#FFD700',
  jordan:       '#FFD700',
  bar:          '#B71C1C',
  toyota:       '#E53935',
  bmwsauber:    '#1565C0',
  brawn:        '#FFD700',
  hrt:          '#FF6F00',
  caterham:     '#2E7D32',
  marussia:     '#C62828',
  manor:        '#E53935',
  force_india:  '#FF6F00',
  racing_point: '#F06292',
}

export const NAV_ITEMS = [
  { id: 'temporadas' as NavSection,   label: 'Temporadas',   icon: 'Trophy',    color: '#E8001D' },
  { id: 'circuitos' as NavSection,    label: 'Circuitos',    icon: 'Map',       color: '#378ADD' },
  { id: 'pilotos' as NavSection,      label: 'Pilotos',      icon: 'User',      color: '#27F4D2' },
  { id: 'escuderias' as NavSection,   label: 'Escuderías',   icon: 'Wrench',    color: '#FF8000' },
  { id: 'hall-of-fame' as NavSection, label: 'Hall of Fame', icon: 'Star',      color: '#F5C518' },
]
