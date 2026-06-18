'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight, Trophy, Flag, Users, BarChart2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TEAMS } from '@/data/teams'
import { DRIVERS } from '@/data/drivers'
import { F1CarSVG } from '@/components/ui/F1CarSVG'
import { IndexedBadge } from '@/components/ui/IndexedBadge'
import { FlagIcon } from '@/components/ui/FlagIcon'
import { TEAM_COLORS, type Season } from '@/lib/types'
import type { DriverStandingEntry, ConstructorStandingEntry, RaceResults } from '@/lib/data-loader'

const TABS = [
  { id: 'equipos', label: 'Equipos & Pilotos', Icon: Users },
  { id: 'resultados', label: 'Resultados', Icon: Flag },
  { id: 'clasificacion', label: 'Clasificación', Icon: BarChart2 },
]

function teamColor(constructorId: string): string {
  return TEAM_COLORS[constructorId.replace(/_/g, '')] ?? '#9CA3AF'
}

// Display names for teams not yet present in data/teams.ts (current-era entries)
const TEAM_NAME_FALLBACKS: Record<string, string> = {
  astonmartin: 'Aston Martin',
  haas: 'Haas',
  sauber: 'Sauber',
  racingbulls: 'Racing Bulls',
  cadillac: 'Cadillac',
}

// Teams that changed official name at some point — returns year-accurate display name
function getTeamDisplayName(teamId: string, year: number): string {
  if (teamId === 'racingbulls') {
    if (year <= 2019) return 'Toro Rosso'
    if (year <= 2023) return 'AlphaTauri'
    return 'Racing Bulls'
  }
  if (teamId === 'sauber') {
    if (year <= 2023) return 'Alfa Romeo'
    if (year === 2024) return 'Kick Sauber'
    return 'Audi'
  }
  if (teamId === 'force_india') {
    if (year <= 2018) return 'Force India'
    return 'Racing Point'
  }
  if (teamId === 'alpine') {
    if (year <= 2020) return 'Renault'
    return 'Alpine'
  }
  return TEAMS.find(t => t.id === teamId)?.name ?? TEAM_NAME_FALLBACKS[teamId] ?? teamId
}

// Logos for teams not yet present in data/teams.ts (current-era entries)
const TEAM_LOGO_FALLBACKS: Record<string, string> = {
  astonmartin: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Aston_Martin_F1_Team_logo_2024.jpg',
  haas: 'https://upload.wikimedia.org/wikipedia/commons/1/18/TGR_Haas_F1_Team_Logo_%282026%29.svg',
  sauber: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Audif1.com_logo17.svg',
  racingbulls: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/VCARB_F1_logo.svg/250px-VCARB_F1_logo.svg.png',
  cadillac: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Cadillac_Wordmark.svg',
}

function teamLogo(constructorId: string): string | undefined {
  return TEAMS.find(t => t.id === constructorId)?.logoUrl ?? TEAM_LOGO_FALLBACKS[constructorId]
}

interface Props {
  years: number[]
  year: number
  season?: Season
  driverStandings: DriverStandingEntry[]
  constructorStandings: ConstructorStandingEntry[]
  raceResults: RaceResults[]
}

export default function TemporadasClient({ years, year, season, driverStandings, constructorStandings, raceResults }: Props) {
  const router = useRouter()
  const [tab, setTab] = useState('equipos')
  const [activeTeam, setActiveTeam] = useState<string | null>(null)

  const yearIdx = years.indexOf(year)

  function goToYear(y: number) {
    router.push(`/temporadas?year=${y}`)
  }
  function prevYear() { if (yearIdx < years.length - 1) goToYear(years[yearIdx + 1]) }
  function nextYear() { if (yearIdx > 0) goToYear(years[yearIdx - 1]) }

  const champion = driverStandings[0]
  const constructorChampion = constructorStandings[0]
  const totalRaces = raceResults.length

  return (
    <div className="min-h-screen max-w-[1400px] mx-auto px-4 py-8">

      {/* Season selector */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="section-eyebrow mb-1">Campeonato del Mundo</p>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-4xl font-bold text-[#0A0A0F]">Temporada <span className="text-[#E8001D]">{year}</span></h1>
            <IndexedBadge type="temporadas" />
            {year === 2026 && (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E8001D] bg-[#E8001D]/10 border border-[#E8001D]/20 px-2.5 py-1 rounded-full">
                Temporada actual
              </span>
            )}
          </div>
          {(champion || constructorChampion) && (
            <p className="text-sm text-[#6B6B80] mt-1">
              {totalRaces} carreras
              {champion && (
                <>
                  {' '}· Campeón: <span className="text-[#0A0A0F]">{champion.driverName}</span>
                </>
              )}
              {constructorChampion && (
                <>
                  {' '}· Constructor: <span className="text-[#0A0A0F]">{constructorChampion.constructorName}</span>
                </>
              )}
            </p>
          )}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={prevYear}
            disabled={yearIdx >= years.length - 1}
            className="p-2 rounded-lg bg-white border border-[#E8E8EE] text-[#6B6B80] hover:text-[#0A0A0F] hover:border-[#D5D5E2] disabled:opacity-30 transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <select
            value={year}
            onChange={e => goToYear(Number(e.target.value))}
            className="bg-white border border-[#E8E8EE] text-[#0A0A0F] px-3 py-2 rounded-lg text-sm focus:outline-none focus:border-[#E8001D] appearance-none cursor-pointer"
          >
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
          <button
            onClick={nextYear}
            disabled={yearIdx <= 0}
            className="p-2 rounded-lg bg-white border border-[#E8E8EE] text-[#6B6B80] hover:text-[#0A0A0F] hover:border-[#D5D5E2] disabled:opacity-30 transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Champion banner */}
      {(champion || constructorChampion) && (
        <div className="f1-card p-5 mb-6 flex flex-wrap items-center gap-4 border-l-4 border-l-[#E8001D]">
          <Trophy size={28} className="text-[#E8001D] flex-shrink-0" />
          {champion && (
            <div>
              <p className="text-xs text-[#9CA3AF] uppercase tracking-widest mb-0.5">Campeón del Mundo {year}</p>
              <p className="text-xl font-bold text-[#0A0A0F]">{champion.driverName}</p>
            </div>
          )}
          {constructorChampion && (
            <div className="ml-4 border-l border-[#E8E8EE] pl-4">
              <p className="text-xs text-[#9CA3AF] uppercase tracking-widest mb-0.5">Constructor</p>
              <p className="text-xl font-bold text-[#0A0A0F]">{constructorChampion.constructorName}</p>
            </div>
          )}
          <div className="ml-4 border-l border-[#E8E8EE] pl-4">
            <p className="text-xs text-[#9CA3AF] uppercase tracking-widest mb-0.5">Carreras</p>
            <p className="text-xl font-bold text-[#0A0A0F]">{totalRaces}</p>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex border-b border-[#E8E8EE] mb-6 overflow-x-auto">
        {TABS.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={cn('f1-tab flex items-center gap-2', tab === id && 'active')}
          >
            <Icon size={14} />
            {label}
          </button>
        ))}
      </div>

      {/* Content */}
      {tab === 'equipos' && (
        <TeamsTab season={season} year={year} activeTeam={activeTeam} setActiveTeam={setActiveTeam} driverStandings={driverStandings} />
      )}
      {tab === 'resultados' && <ResultsTab raceResults={raceResults} year={year} />}
      {tab === 'clasificacion' && (
        <StandingsTab driverStandings={driverStandings} constructorStandings={constructorStandings} year={year} />
      )}
    </div>
  )
}

/** Driver avatar: uses static photo from data/drivers.ts, falls back to Wikipedia, then initials */
function DriverAvatar({ staticPhoto, driverName, initials, color, size = 56 }: {
  staticPhoto?: string
  driverName: string
  initials: string
  color: string
  size?: number
}) {
  const [wikiPhoto, setWikiPhoto] = useState<string | null | undefined>(staticPhoto ? null : undefined)

  useEffect(() => {
    if (staticPhoto) return
    let cancelled = false
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(driverName)}`)
      .then(res => res.ok ? res.json() : null)
      .then((data: { thumbnail?: { source?: string } } | null) => {
        if (!cancelled) setWikiPhoto(data?.thumbnail?.source ?? null)
      })
      .catch(() => { if (!cancelled) setWikiPhoto(null) })
    return () => { cancelled = true }
  }, [driverName, staticPhoto])

  const src = staticPhoto ?? wikiPhoto
  const dim = `${size}px`

  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={driverName}
        className="rounded-full object-cover object-top flex-shrink-0 border-2"
        style={{ width: dim, height: dim, borderColor: color }}
      />
    )
  }

  return (
    <div
      className="rounded-full flex items-center justify-center font-bold flex-shrink-0 text-white"
      style={{ width: dim, height: dim, background: color, fontSize: size * 0.28 }}
    >
      {initials}
    </div>
  )
}

function TeamsTab({ season, year, activeTeam, setActiveTeam, driverStandings }: {
  season?: Season
  year: number
  activeTeam: string | null
  setActiveTeam: (id: string | null) => void
  driverStandings: DriverStandingEntry[]
}) {
  if (!season || season.entries.length === 0) {
    return (
      <div className="text-center py-20 text-[#9CA3AF]">
        <p className="text-lg">No hay datos de equipos para la temporada {year}</p>
        <p className="text-sm mt-2">Consulta la pestaña de Clasificación para ver los resultados completos</p>
      </div>
    )
  }

  // Build driverId → points+position lookup from standings JSON
  const standingsLookup: Record<string, { points: number; position: number }> = {}
  for (const s of driverStandings) {
    standingsLookup[s.driverId] = { points: s.points, position: s.position }
    // Also index by full name for cross-referencing
    standingsLookup[s.driverName.toLowerCase()] = { points: s.points, position: s.position }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {season.entries.map((entry) => {
        const team = TEAMS.find(t => t.id === entry.teamId)
        const teamSeason = team?.seasons?.find((s) => s.year === year) ?? null
        const logo = teamLogo(entry.teamId)
        const displayName = getTeamDisplayName(entry.teamId, year)
        const chassis = teamSeason?.chassis ?? entry.chassis ?? null
        const engine = teamSeason?.engine ?? entry.engine ?? null

        return (
          <div
            key={entry.teamId}
            className="f1-card overflow-hidden rounded-xl"
            style={{ border: `2px solid ${entry.color}30` }}
          >
            {/* ── 2-COLUMN LAYOUT ── */}
            <div className="flex min-h-[200px]">

              {/* ── LEFT COLUMN ── */}
              <div className="flex flex-col w-[42%] flex-shrink-0">

                {/* Top: team color header with logo + name */}
                <div
                  className="flex-1 flex flex-col items-center justify-center gap-3 px-3 py-5 text-center"
                  style={{ background: entry.color }}
                >
                  {/* Logo */}
                  {logo && (
                    <div className="h-10 w-20 flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={logo}
                        alt={displayName}
                        className="max-h-full max-w-full object-contain"
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  )}
                  {/* Team name */}
                  <h3 className="text-sm font-bold text-white leading-tight">{displayName}</h3>
                  {/* Chassis / engine */}
                  {(chassis || engine) && (
                    <div className="text-[10px] text-white/60 leading-tight">
                      {chassis && <span>{chassis} </span>}
                      {engine && <span>({engine})</span>}
                    </div>
                  )}
                </div>

                {/* Bottom: car image — more space now that points/position removed */}
                <div
                  className="flex items-center justify-center px-2 py-4"
                  style={{ background: `${entry.color}18`, minHeight: 88 }}
                >
                  <F1CarSVG
                    teamId={entry.teamId}
                    primaryColor={entry.color}
                    year={year}
                    carImageUrl={teamSeason?.carImageUrl}
                    className="max-h-[80px] w-full"
                  />
                </div>
              </div>

              {/* ── RIGHT COLUMN: driver rows ── */}
              <div className="flex-1 flex flex-col divide-y divide-[#F0F0F3]">
                {entry.driverIds.map((did) => {
                  const d = DRIVERS.find(dr => dr.id === did)
                  const ds = d?.seasons?.find((s) => s.year === year)
                  const parts = (d?.name ?? did).split(' ')
                  const initials = parts.length >= 2
                    ? `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
                    : (d?.name ?? did).slice(0, 2).toUpperCase()
                  const driverNum = ds?.number ?? d?.number

                  // Points: try season history first, then standings JSON (by driver name)
                  const driverPts = ds?.points
                    ?? standingsLookup[d?.name?.toLowerCase() ?? '']?.points
                    ?? null
                  const driverPos = ds?.position
                    ?? standingsLookup[d?.name?.toLowerCase() ?? '']?.position
                    ?? null

                  return (
                    <div key={did} className="flex items-center gap-2.5 px-3 py-3 flex-1">
                      {/* Circular photo */}
                      <DriverAvatar
                        staticPhoto={d?.photo}
                        driverName={d?.name ?? did}
                        initials={initials}
                        color={entry.color}
                        size={48}
                      />

                      {/* Driver info */}
                      <div className="flex-1 min-w-0">
                        {/* Number */}
                        <div
                          className="text-xl font-black leading-none"
                          style={{ color: entry.color }}
                        >
                          {driverNum !== undefined ? `#${driverNum}` : '–'}
                        </div>
                        {/* Full name */}
                        <div className="text-xs font-semibold text-[#0A0A0F] leading-tight truncate">
                          {d?.name ?? did}
                        </div>
                        {/* Flag + nationality */}
                        <div className="flex items-center gap-1 mt-0.5">
                          {d && <FlagIcon nationality={d.nationality} size={11} />}
                          <span className="text-[10px] text-[#9CA3AF] truncate">{d?.nationality ?? ''}</span>
                        </div>
                        {/* Points */}
                        {driverPts !== null && (
                          <div className="mt-0.5">
                            <span className="text-xs font-bold" style={{ color: entry.color }}>
                              {driverPts} pts
                            </span>
                            {driverPos !== null && driverPos > 0 && (
                              <span className="text-[10px] text-[#9CA3AF] ml-1">P{driverPos}</span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Helmet thumbnail */}
                      {d?.helmetUrl && (
                        <div
                          className="flex-shrink-0 flex items-center justify-center"
                          style={{ width: 44, height: 44 }}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={d.helmetUrl}
                            alt={`Casco ${d?.name}`}
                            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                          />
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function ResultsTab({ raceResults, year }: { raceResults: RaceResults[]; year: number }) {
  if (raceResults.length === 0) {
    if (year === 2026) {
      return (
        <div className="f1-card p-8 text-center">
          <Flag size={40} className="text-[#E8001D] mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-[#0A0A0F] mb-2">Temporada en curso</h3>
          <p className="text-[#6B6B80] text-sm max-w-md mx-auto">
            La temporada 2026 está en curso — los resultados se irán añadiendo conforme se disputen las carreras.
          </p>
        </div>
      )
    }
    return (
      <div className="f1-card p-8 text-center">
        <Flag size={40} className="text-[#E8001D] mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-[#0A0A0F] mb-2">Sin resultados disponibles</h3>
        <p className="text-[#6B6B80] text-sm max-w-md mx-auto">
          No se encontraron resultados de carrera para esta temporada.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {raceResults.map(race => (
        <details key={race.round} className="f1-card overflow-hidden" open={race.round === 1}>
          <summary className="px-4 py-3 cursor-pointer flex items-center justify-between gap-3 select-none">
            <div className="flex items-center gap-3 min-w-0">
              <span className="w-7 h-7 rounded flex items-center justify-center text-xs font-bold bg-[#F5F5F7] text-[#6B6B80] flex-shrink-0">
                {race.round}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[#0A0A0F] truncate">{race.raceName}</p>
                <p className="text-xs text-[#9CA3AF] flex items-center gap-1">{race.circuitName} · <FlagIcon country={race.country} size={12} /> {race.country} · {race.date}</p>
              </div>
            </div>
            {race.results[0] && (
              <span className="text-xs text-[#6B6B80] flex-shrink-0 hidden sm:inline">
                Ganador: <span className="text-[#0A0A0F] font-medium">{race.results[0].driverName}</span>
              </span>
            )}
          </summary>
          <div className="overflow-x-auto border-t border-[#E8E8EE]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E8E8EE]">
                  <th className="text-left px-4 py-2 text-xs text-[#9CA3AF] font-normal uppercase tracking-widest w-12">Pos</th>
                  <th className="text-left px-4 py-2 text-xs text-[#9CA3AF] font-normal uppercase tracking-widest">Piloto</th>
                  <th className="text-left px-4 py-2 text-xs text-[#9CA3AF] font-normal uppercase tracking-widest hidden sm:table-cell">Equipo</th>
                  <th className="text-right px-4 py-2 text-xs text-[#9CA3AF] font-normal uppercase tracking-widest">Puntos</th>
                  <th className="text-right px-4 py-2 text-xs text-[#9CA3AF] font-normal uppercase tracking-widest">Tiempo / Estado</th>
                </tr>
              </thead>
              <tbody>
                {race.results.map(r => (
                  <tr key={`${race.round}-${r.driverId}`} className="border-b border-[#F0F0F3] hover:bg-[#FAFAFA] transition-colors">
                    <td className="px-4 py-2">
                      <span className={cn(
                        'w-6 h-6 rounded flex items-center justify-center text-xs font-bold',
                        r.position === 1 ? 'bg-yellow-100 text-yellow-700' :
                        r.position === 2 ? 'bg-slate-200 text-slate-600' :
                        r.position === 3 ? 'bg-orange-100 text-orange-700' :
                        'text-[#9CA3AF]'
                      )}>
                        {r.position ?? r.positionText}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold" style={{ color: teamColor(r.constructorId) }}>#{r.driverCode ?? ''}</span>
                        <FlagIcon nationality={r.nationality} size={14} />
                        <span className="text-[#0A0A0F] font-medium">{r.driverName}</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 hidden sm:table-cell">
                      <span className="text-[#6B6B80] text-xs flex items-center gap-1.5">
                        {teamLogo(r.constructorId) ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={teamLogo(r.constructorId)} alt="" className="w-6 h-6 object-contain" />
                        ) : (
                          <span className="w-2 h-2 rounded-full" style={{ background: teamColor(r.constructorId) }} />
                        )}
                        {r.constructorName}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-right font-bold text-[#0A0A0F]">{r.points}</td>
                    <td className="px-4 py-2 text-right text-xs text-[#6B6B80]">
                      {r.time ?? r.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      ))}
    </div>
  )
}

function StandingsTab({ driverStandings, constructorStandings, year }: {
  driverStandings: DriverStandingEntry[]
  constructorStandings: ConstructorStandingEntry[]
  year: number
}) {
  if (driverStandings.length === 0 && year === 2026) {
    return (
      <div className="f1-card p-8 text-center">
        <BarChart2 size={40} className="text-[#E8001D] mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-[#0A0A0F] mb-2">Temporada en curso</h3>
        <p className="text-[#6B6B80] text-sm max-w-md mx-auto">
          La temporada 2026 está en curso — los resultados se irán añadiendo conforme se disputen las carreras.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4 items-start">
      {/* ── PILOTOS ── */}
      <div className="flex-1 min-w-0">
        <p className="section-eyebrow mb-3">Pilotos</p>
        <div className="f1-card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#E8E8EE]">
                <th className="text-left px-3 py-2 text-[10px] text-[#9CA3AF] font-normal uppercase tracking-widest w-9">Pos</th>
                <th className="text-left px-2 py-2 text-[10px] text-[#9CA3AF] font-normal uppercase tracking-widest">Piloto</th>
                <th className="text-left px-2 py-2 text-[10px] text-[#9CA3AF] font-normal uppercase tracking-widest hidden sm:table-cell lg:hidden xl:table-cell">Equipo</th>
                <th className="text-right px-3 py-2 text-[10px] text-[#9CA3AF] font-normal uppercase tracking-widest w-14">Pts</th>
              </tr>
            </thead>
            <tbody>
              {driverStandings.map((d, i) => {
                const color = teamColor(d.constructorIds[0] ?? '')
                return (
                  <tr key={d.driverId} className="border-b border-[#F0F0F3] hover:bg-[#FAFAFA] transition-colors">
                    <td className="px-3 py-2">
                      <span className={cn(
                        'w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold',
                        i === 0 ? 'bg-yellow-100 text-yellow-700' :
                        i === 1 ? 'bg-slate-200 text-slate-600' :
                        i === 2 ? 'bg-orange-100 text-orange-700' :
                        'text-[#9CA3AF]'
                      )}>
                        {d.position}
                      </span>
                    </td>
                    <td className="px-2 py-2">
                      <div className="flex items-center gap-1.5">
                        <FlagIcon nationality={d.nationality} size={13} />
                        <span className="text-[#0A0A0F] font-medium text-xs leading-tight">{d.driverName}</span>
                      </div>
                    </td>
                    <td className="px-2 py-2 hidden sm:table-cell lg:hidden xl:table-cell">
                      <div className="flex items-center gap-1">
                        {teamLogo(d.constructorIds[0] ?? '') ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={teamLogo(d.constructorIds[0] ?? '')} alt="" className="w-5 h-5 object-contain" />
                        ) : (
                          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
                        )}
                        <span className="text-[#6B6B80] text-xs truncate max-w-[90px]">{d.constructorNames[0]}</span>
                      </div>
                    </td>
                    <td className="px-3 py-2 text-right font-bold text-[#0A0A0F] text-xs">{d.points}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── CONSTRUCTORES ── */}
      {constructorStandings.length > 0 && (
        <div className="flex-1 min-w-0">
          <p className="section-eyebrow mb-3">Constructores</p>
          <div className="f1-card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E8E8EE]">
                  <th className="text-left px-3 py-2 text-[10px] text-[#9CA3AF] font-normal uppercase tracking-widest w-9">Pos</th>
                  <th className="text-left px-2 py-2 text-[10px] text-[#9CA3AF] font-normal uppercase tracking-widest">Escudería</th>
                  <th className="text-right px-3 py-2 text-[10px] text-[#9CA3AF] font-normal uppercase tracking-widest w-14">Pts</th>
                </tr>
              </thead>
              <tbody>
                {constructorStandings.map((c) => {
                  const color = teamColor(c.constructorId)
                  return (
                    <tr key={c.constructorId} className="border-b border-[#F0F0F3] hover:bg-[#FAFAFA] transition-colors">
                      <td className="px-3 py-2">
                        <span className={cn(
                          'w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold',
                          c.position === 1 ? 'bg-yellow-100 text-yellow-700' :
                          c.position === 2 ? 'bg-slate-200 text-slate-600' :
                          c.position === 3 ? 'bg-orange-100 text-orange-700' :
                          'text-[#9CA3AF]'
                        )}>
                          {c.position}
                        </span>
                      </td>
                      <td className="px-2 py-2">
                        <div className="flex items-center gap-1.5">
                          {teamLogo(c.constructorId) ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={teamLogo(c.constructorId)} alt="" className="w-5 h-5 object-contain flex-shrink-0" />
                          ) : (
                            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
                          )}
                          <span className="text-[#0A0A0F] font-medium text-xs">{c.constructorName}</span>
                        </div>
                      </td>
                      <td className="px-3 py-2 text-right font-bold text-[#0A0A0F] text-xs">{c.points}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
