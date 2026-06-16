import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { TEAM_COLORS } from './types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTeamColor(teamId: string): string {
  return TEAM_COLORS[teamId.toLowerCase().replace(/[^a-z]/g, '')] ?? '#555566'
}

export function formatTime(ms: number): string {
  const mins = Math.floor(ms / 60000)
  const secs = Math.floor((ms % 60000) / 1000)
  const millis = ms % 1000
  if (mins > 0) return `${mins}:${secs.toString().padStart(2, '0')}.${millis.toString().padStart(3, '0')}`
  return `${secs}.${millis.toString().padStart(3, '0')}`
}

export function formatLapTime(time: string): string {
  return time
}

export function ordinal(n: number): string {
  const s = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return n + (s[(v - 20) % 10] || s[v] || s[0])
}

const NATIONALITY_FLAGS: Record<string, string> = {
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
  'East German': '🇩🇪', 'Hong Kong': '🇭🇰',
  'Estonian': '🇪🇪',
}

const COUNTRY_FLAGS: Record<string, string> = {
  'UK': '🇬🇧', 'United Kingdom': '🇬🇧', 'Germany': '🇩🇪', 'Brazil': '🇧🇷',
  'France': '🇫🇷', 'Finland': '🇫🇮', 'Austria': '🇦🇹', 'Spain': '🇪🇸',
  'Netherlands': '🇳🇱', 'Australia': '🇦🇺', 'Canada': '🇨🇦', 'Italy': '🇮🇹',
  'USA': '🇺🇸', 'United States': '🇺🇸', 'Mexico': '🇲🇽', 'Japan': '🇯🇵',
  'Monaco': '🇲🇨', 'Thailand': '🇹🇭', 'Denmark': '🇩🇰', 'China': '🇨🇳',
  'Argentina': '🇦🇷', 'Switzerland': '🇨🇭', 'Belgium': '🇧🇪', 'Sweden': '🇸🇪',
  'New Zealand': '🇳🇿', 'Ireland': '🇮🇪', 'South Africa': '🇿🇦', 'Poland': '🇵🇱',
  'Venezuela': '🇻🇪', 'Colombia': '🇨🇴', 'Indonesia': '🇮🇩', 'Azerbaijan': '🇦🇿',
  'Portugal': '🇵🇹', 'Hungary': '🇭🇺', 'Czech Republic': '🇨🇿', 'Russia': '🇷🇺',
  'Uruguay': '🇺🇾', 'Chile': '🇨🇱', 'Bahrain': '🇧🇭', 'UAE': '🇦🇪',
  'United Arab Emirates': '🇦🇪', 'Saudi Arabia': '🇸🇦', 'Qatar': '🇶🇦',
  'Singapore': '🇸🇬', 'South Korea': '🇰🇷', 'Korea': '🇰🇷', 'India': '🇮🇳', 'Malaysia': '🇲🇾',
  'Turkey': '🇹🇷', 'Morocco': '🇲🇦', 'Vietnam': '🇻🇳', 'Azerbaijan ': '🇦🇿',
  'Estonia': '🇪🇪',
}

/** Maps an Ergast/F1 nationality (e.g. "British", "Brazilian") to its flag emoji. */
export function nationalityToFlag(nationality: string): string {
  return NATIONALITY_FLAGS[nationality] ?? '🏁'
}

/** Maps an English country name (e.g. "United Kingdom", "Brazil") to its flag emoji. */
export function countryToFlag(country: string): string {
  return COUNTRY_FLAGS[country] ?? '🏁'
}

/** @deprecated use nationalityToFlag */
export const flagEmoji = nationalityToFlag

export function getSeasonYears(start = 1950, end = 2025): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => end - i)
}

export function pointsToPercent(pts: number, max: number): number {
  return Math.round((pts / max) * 100)
}

export const ERA_COLORS: Record<string, string> = {
  '1950s': '#8B6914',
  '1960s': '#4A6741',
  '1970s': '#1A5276',
  '1980s': '#6C3483',
  '1990s': '#943126',
  '2000s': '#117A65',
  '2010s': '#1A5276',
  '2020s': '#E8001D',
}

export function getEra(year: number): string {
  const decade = Math.floor(year / 10) * 10
  return `${decade}s`
}
