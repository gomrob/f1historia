'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight, Trophy, Flag, Users, BarChart2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TEAMS } from '@/data/teams'
import { DRIVERS } from '@/data/drivers'
import { F1CarSVG } from '@/components/ui/F1CarSVG'
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
          <h1 className="text-4xl font-bold text-[#0A0A0F]">Temporada <span className="text-[#E8001D]">{year}</span></h1>
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
        <TeamsTab season={season} year={year} activeTeam={activeTeam} setActiveTeam={setActiveTeam} />
      )}
      {tab === 'resultados' && <ResultsTab raceResults={raceResults} />}
      {tab === 'clasificacion' && (
        <StandingsTab driverStandings={driverStandings} constructorStandings={constructorStandings} />
      )}
    </div>
  )
}

function TeamsTab({ season, year, activeTeam, setActiveTeam }: {
  season?: Season
  year: number
  activeTeam: string | null
  setActiveTeam: (id: string | null) => void
}) {
  if (!season || season.entries.length === 0) {
    return (
      <div className="text-center py-20 text-[#9CA3AF]">
        <p className="text-lg">No hay datos de equipos para la temporada {year}</p>
        <p className="text-sm mt-2">Consulta la pestaña de Clasificación para ver los resultados completos</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {season.entries.map((entry) => {
        const team = TEAMS.find(t => t.id === entry.teamId)
        if (!team) return null
        const teamSeason = team.seasons?.find((s) => s.year === year) ?? null
        const isActive = activeTeam === entry.teamId

        return (
          <div key={entry.teamId}>
            <div
              className={cn('f1-card p-5 cursor-pointer transition-all', isActive && 'border-opacity-100')}
              style={{ borderLeftWidth: isActive ? 4 : 1, borderLeftColor: entry.color }}
              onClick={() => setActiveTeam(isActive ? null : entry.teamId)}
            >
              <div className="flex items-start gap-4">
                {/* Position */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold flex-shrink-0"
                  style={{ background: `${entry.color}15`, color: entry.color }}
                >
                  {entry.position}
                </div>

                {/* Team info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-semibold text-[#0A0A0F]">{team.name}</h3>
                    {teamSeason && (
                      <span className="text-xs text-[#9CA3AF] bg-[#F5F5F7] px-2 py-0.5 rounded border border-[#E8E8EE]">
                        {teamSeason.chassis}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#9CA3AF]">
                    {teamSeason?.engine ?? entry.engine} · {teamSeason?.principal ?? '—'}
                  </p>

                  {/* Drivers */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {entry.driverIds.map((did) => {
                      const d = DRIVERS.find(dr => dr.id === did)
                      const ds = d?.seasons?.find((s) => s.year === year)
                      return (
                        <span
                          key={did}
                          className="flex items-center gap-1.5 text-xs bg-[#F5F5F7] border border-[#E8E8EE] px-2 py-1 rounded"
                        >
                          <span style={{ color: entry.color }} className="font-bold">
                            #{ds?.number ?? d?.number ?? '–'}
                          </span>
                          <span className="text-[#0A0A0F]">{d?.name ?? did}</span>
                          {d && <span>{d.flag}</span>}
                          {ds && (
                            <span className="text-[#9CA3AF] ml-1">{ds.points} pts</span>
                          )}
                        </span>
                      )
                    })}
                  </div>
                </div>

                {/* Stats */}
                <div className="text-right flex-shrink-0 hidden sm:block">
                  <div className="text-2xl font-bold" style={{ color: entry.color }}>
                    {entry.points}
                  </div>
                  <div className="text-xs text-[#9CA3AF]">puntos</div>
                  <div className="text-sm text-[#6B6B80] mt-1">{entry.wins} victorias</div>
                </div>
              </div>

              {/* Car illustration */}
              <div className="mt-4 px-4">
                <F1CarSVG
                  teamId={entry.teamId}
                  primaryColor={entry.color}
                  year={year}
                  className="max-h-[100px]"
                />
              </div>

              {/* Sponsors row */}
              {isActive && teamSeason?.sponsors && (
                <div className="mt-4 pt-4 border-t border-[#E8E8EE]">
                  <p className="text-xs text-[#9CA3AF] uppercase tracking-widest mb-2">Patrocinadores</p>
                  <div className="flex flex-wrap gap-2">
                    {teamSeason.sponsors.map((s) => (
                      <span key={s} className="text-xs bg-[#F5F5F7] border border-[#E8E8EE] px-2 py-1 rounded text-[#6B6B80]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function ResultsTab({ raceResults }: { raceResults: RaceResults[] }) {
  if (raceResults.length === 0) {
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
                <p className="text-xs text-[#9CA3AF]">{race.circuitName} · {race.country} · {race.date}</p>
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
                        <span className="text-[#0A0A0F] font-medium">{r.driverName}</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 hidden sm:table-cell">
                      <span className="text-[#6B6B80] text-xs flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full" style={{ background: teamColor(r.constructorId) }} />
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

function StandingsTab({ driverStandings, constructorStandings }: {
  driverStandings: DriverStandingEntry[]
  constructorStandings: ConstructorStandingEntry[]
}) {
  const maxDriverPts = Math.max(...driverStandings.map(d => d.points), 1)
  const maxConstructorPts = Math.max(...constructorStandings.map(c => c.points), 1)

  return (
    <div className="space-y-6">
      {/* Drivers */}
      <div>
        <p className="section-eyebrow mb-4">Campeonato de pilotos</p>
        <div className="f1-card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#E8E8EE]">
                <th className="text-left px-4 py-3 text-xs text-[#9CA3AF] font-normal uppercase tracking-widest w-12">Pos</th>
                <th className="text-left px-4 py-3 text-xs text-[#9CA3AF] font-normal uppercase tracking-widest">Piloto</th>
                <th className="text-left px-4 py-3 text-xs text-[#9CA3AF] font-normal uppercase tracking-widest hidden sm:table-cell">Equipo</th>
                <th className="text-right px-4 py-3 text-xs text-[#9CA3AF] font-normal uppercase tracking-widest">Puntos</th>
              </tr>
            </thead>
            <tbody>
              {driverStandings.map((d, i) => {
                const color = teamColor(d.constructorIds[0] ?? '')
                return (
                  <tr key={d.driverId} className="border-b border-[#F0F0F3] hover:bg-[#FAFAFA] transition-colors">
                    <td className="px-4 py-3">
                      <span className={cn(
                        'w-6 h-6 rounded flex items-center justify-center text-xs font-bold',
                        i === 0 ? 'bg-yellow-100 text-yellow-700' :
                        i === 1 ? 'bg-slate-200 text-slate-600' :
                        i === 2 ? 'bg-orange-100 text-orange-700' :
                        'text-[#9CA3AF]'
                      )}>
                        {d.position}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {d.driverCode && <span className="text-xs font-bold" style={{ color }}>{d.driverCode}</span>}
                        <span className="text-[#0A0A0F] font-medium">{d.driverName}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <span className="text-[#6B6B80] text-xs flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full" style={{ background: color }} />
                        {d.constructorNames.join(' / ')}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <div className="hidden sm:block w-24 h-1 rounded-full bg-[#E8E8EE]">
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${Math.round((d.points / maxDriverPts) * 100)}%`, background: color }}
                          />
                        </div>
                        <span className="font-bold text-[#0A0A0F] w-10 text-right">{d.points}</span>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Constructors */}
      {constructorStandings.length > 0 && (
        <div>
          <p className="section-eyebrow mb-4">Campeonato de constructores</p>
          <div className="f1-card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E8E8EE]">
                  <th className="text-left px-4 py-3 text-xs text-[#9CA3AF] font-normal uppercase tracking-widest w-12">Pos</th>
                  <th className="text-left px-4 py-3 text-xs text-[#9CA3AF] font-normal uppercase tracking-widest">Escudería</th>
                  <th className="text-left px-4 py-3 text-xs text-[#9CA3AF] font-normal uppercase tracking-widest hidden sm:table-cell">Victorias</th>
                  <th className="text-right px-4 py-3 text-xs text-[#9CA3AF] font-normal uppercase tracking-widest">Puntos</th>
                </tr>
              </thead>
              <tbody>
                {constructorStandings.map((c) => {
                  const color = teamColor(c.constructorId)
                  return (
                    <tr key={c.constructorId} className="border-b border-[#F0F0F3] hover:bg-[#FAFAFA] transition-colors">
                      <td className="px-4 py-3">
                        <span className={cn(
                          'w-6 h-6 rounded flex items-center justify-center text-xs font-bold',
                          c.position === 1 ? 'bg-yellow-100 text-yellow-700' :
                          c.position === 2 ? 'bg-slate-200 text-slate-600' :
                          c.position === 3 ? 'bg-orange-100 text-orange-700' :
                          'text-[#9CA3AF]'
                        )}>
                          {c.position}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-full min-h-[12px] rounded-sm" style={{ background: color }} />
                          <span className="text-[#0A0A0F] font-medium">{c.constructorName}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 hidden sm:table-cell text-[#6B6B80]">{c.wins}</td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-3">
                          <div className="hidden sm:block w-24 h-1 rounded-full bg-[#E8E8EE]">
                            <div
                              className="h-full rounded-full"
                              style={{ width: `${Math.round((c.points / maxConstructorPts) * 100)}%`, background: color }}
                            />
                          </div>
                          <span className="font-bold text-[#0A0A0F] w-10 text-right">{c.points}</span>
                        </div>
                      </td>
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
