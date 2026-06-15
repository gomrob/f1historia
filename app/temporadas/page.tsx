import { SEASONS } from '@/data/seasons'
import {
  getAllSeasonYears,
  getDriverStandings,
  getConstructorStandings,
  getRaceResultsByYear,
} from '@/lib/data-loader'
import TemporadasClient from './TemporadasClient'

export default function TemporadasPage({
  searchParams,
}: {
  searchParams: { year?: string }
}) {
  const years = getAllSeasonYears()
  const requested = searchParams?.year ? Number(searchParams.year) : NaN
  const year = years.includes(requested) ? requested : years[0]

  const driverStandings = getDriverStandings(year)
  const constructorStandings = getConstructorStandings(year)
  const raceResults = getRaceResultsByYear(year)
  const season = SEASONS.find(s => s.year === year)

  return (
    <TemporadasClient
      years={years}
      year={year}
      season={season}
      driverStandings={driverStandings}
      constructorStandings={constructorStandings}
      raceResults={raceResults}
    />
  )
}
