import { DRIVERS } from '@/data/drivers'
import { getAllSeasonYears, getDriverStandings } from '@/lib/data-loader'
import PilotosClient from './PilotosClient'

export default function PilotosPage() {
  // Pre-compute championship podiums (P1/P2/P3) for all drivers using name matching
  // to handle the Ergast-ID vs internal-ID mismatch in standings JSON files.
  const nameToId: Record<string, string> = {}
  for (const d of DRIVERS) {
    nameToId[d.name.toLowerCase()] = d.id
  }

  const podiumsMap: Record<string, { p1: number; p2: number; p3: number }> = {}

  for (const year of getAllSeasonYears()) {
    for (const s of getDriverStandings(year)) {
      const internalId = nameToId[s.driverName.toLowerCase()] ?? s.driverId
      if (!podiumsMap[internalId]) {
        podiumsMap[internalId] = { p1: 0, p2: 0, p3: 0 }
      }
      if (s.position === 1) podiumsMap[internalId].p1++
      else if (s.position === 2) podiumsMap[internalId].p2++
      else if (s.position === 3) podiumsMap[internalId].p3++
    }
  }

  return <PilotosClient podiumsMap={podiumsMap} />
}
