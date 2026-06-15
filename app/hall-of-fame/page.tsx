'use client'
import { useState } from 'react'
import { Trophy, Flag, Zap, Medal, Timer, Hash, Users } from 'lucide-react'
import { cn } from '@/lib/utils'
import { DRIVERS } from '@/data/drivers'
import { TEAMS } from '@/data/teams'

type RankingKey = 'championships' | 'wins' | 'poles' | 'podiums' | 'fastestLaps' | 'racesEntered' | 'points'

const RANKINGS: { key: RankingKey; label: string; unit: string; Icon: any; color: string }[] = [
  { key: 'championships', label: 'Campeonatos',  unit: 'títulos',  Icon: Trophy, color: '#F5C518' },
  { key: 'wins',          label: 'Victorias',    unit: 'victorias', Icon: Trophy, color: '#F5C518' },
  { key: 'poles',         label: 'Poles',        unit: 'poles',    Icon: Zap,    color: '#378ADD' },
  { key: 'podiums',       label: 'Podiums',      unit: 'podiums',  Icon: Medal,  color: '#C0C0C0' },
  { key: 'fastestLaps',   label: 'Vueltas rápidas', unit: 'v. rápidas', Icon: Timer, color: '#9D6EF5' },
  { key: 'racesEntered',  label: 'Carreras',     unit: 'carreras', Icon: Flag,   color: '#9CA3AF' },
  { key: 'points',        label: 'Puntos',       unit: 'puntos',   Icon: Hash,   color: '#27F4D2' },
]

const TEAM_RANKINGS: { key: 'championships' | 'wins' | 'poles' | 'podiums'; label: string; Icon: any; color: string }[] = [
  { key: 'championships', label: 'Campeonatos WCC', Icon: Trophy, color: '#F5C518' },
  { key: 'wins',          label: 'Victorias',        Icon: Trophy, color: '#F5C518' },
  { key: 'poles',         label: 'Poles',            Icon: Zap,    color: '#378ADD' },
  { key: 'podiums',       label: 'Podiums',          Icon: Medal,  color: '#C0C0C0' },
]

export default function HallOfFamePage() {
  const [tab, setTab] = useState<'pilotos' | 'escuderias'>('pilotos')
  const [ranking, setRanking] = useState<RankingKey>('championships')
  const [teamRanking, setTeamRanking] = useState<'championships' | 'wins' | 'poles' | 'podiums'>('championships')

  const sortedDrivers = [...DRIVERS].sort((a, b) => (b[ranking] ?? 0) - (a[ranking] ?? 0))
  const sortedTeams = [...TEAMS].sort((a, b) => (b[teamRanking] ?? 0) - (a[teamRanking] ?? 0))

  const maxVal = sortedDrivers[0]?.[ranking] ?? 1
  const maxTeamVal = sortedTeams[0]?.[teamRanking] ?? 1

  const currentRankingInfo = RANKINGS.find(r => r.key === ranking)!

  return (
    <div className="min-h-screen max-w-[1400px] mx-auto px-4 py-8">
      <div className="mb-8">
        <p className="section-eyebrow mb-1">Rankings históricos</p>
        <h1 className="text-4xl font-bold text-[#0A0A0F] mb-1">
          Hall of <span className="text-[#F5C518]">Fame</span>
        </h1>
        <p className="text-[#6B6B80]">Los grandes récords de la historia de la Fórmula 1</p>
      </div>

      {/* Top 3 spotlight */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {sortedDrivers.slice(0, 3).map((driver, i) => (
          <TopCard key={driver.id} driver={driver} position={i + 1} rankKey={ranking} />
        ))}
      </div>

      {/* Tab switcher */}
      <div className="flex border-b border-[#E8E8EE] mb-6">
        <button
          onClick={() => setTab('pilotos')}
          className={cn('f1-tab flex items-center gap-2', tab === 'pilotos' && 'active')}
        >
          <Users size={14} /> Pilotos
        </button>
        <button
          onClick={() => setTab('escuderias')}
          className={cn('f1-tab flex items-center gap-2', tab === 'escuderias' && 'active')}
        >
          <Zap size={14} /> Escuderías
        </button>
      </div>

      {tab === 'pilotos' && (
        <div className="flex gap-4">
          {/* Ranking selector */}
          <div className="w-48 flex-shrink-0 hidden lg:block">
            <p className="section-eyebrow mb-3">Categoría</p>
            <div className="space-y-1">
              {RANKINGS.map(({ key, label, Icon, color }) => (
                <button
                  key={key}
                  onClick={() => setRanking(key)}
                  className={cn(
                    'w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-left transition-all',
                    ranking === key
                      ? 'text-[#0A0A0F] font-medium'
                      : 'text-[#9CA3AF] hover:text-[#6B6B80]'
                  )}
                  style={ranking === key ? { background: `${color}15`, color } : {}}
                >
                  <Icon size={13} />
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile ranking selector */}
          <div className="lg:hidden mb-4 flex flex-wrap gap-2">
            {RANKINGS.map(({ key, label, color }) => (
              <button
                key={key}
                onClick={() => setRanking(key)}
                className={cn(
                  'px-3 py-1.5 rounded text-xs font-medium border transition-all',
                  ranking === key ? 'text-[#0A0A0F] border-transparent' : 'text-[#9CA3AF] border-[#E8E8EE]'
                )}
                style={ranking === key ? { background: color, borderColor: color } : {}}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Ranking table */}
          <div className="flex-1 min-w-0">
            <div className="f1-card overflow-hidden">
              <div className="px-4 py-3 border-b border-[#E8E8EE] flex items-center gap-2">
                <currentRankingInfo.Icon size={14} style={{ color: currentRankingInfo.color }} />
                <span className="text-sm font-medium text-[#0A0A0F]">{currentRankingInfo.label}</span>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {sortedDrivers.map((driver, i) => {
                    const val = driver[ranking] ?? 0
                    const pct = Math.round((val / maxVal) * 100)
                    return (
                      <tr key={driver.id} className={cn('border-b border-[#F0F0F3] hover:bg-[#FAFAFA] transition-colors', i < 3 && 'bg-[#F5F5F7]/60')}>
                        <td className="px-4 py-3 w-10">
                          <PositionBadge pos={i + 1} />
                        </td>
                        <td className="px-2 py-3 w-8 text-lg">{driver.flag}</td>
                        <td className="px-2 py-3">
                          <span className="font-medium text-[#0A0A0F]">{driver.name}</span>
                          {driver.active && <span className="ml-2 w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />}
                        </td>
                        <td className="px-4 py-3 hidden sm:table-cell">
                          <div className="flex items-center gap-3">
                            <div className="w-32 h-1.5 rounded-full bg-[#E8E8EE]">
                              <div
                                className="h-full rounded-full transition-all duration-500"
                                style={{ width: `${pct}%`, background: currentRankingInfo.color }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <span className="font-bold text-[#0A0A0F] text-base">{val.toLocaleString()}</span>
                          <span className="text-[#9CA3AF] text-xs ml-1">{currentRankingInfo.unit}</span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {tab === 'escuderias' && (
        <div className="flex gap-4">
          <div className="w-48 flex-shrink-0 hidden lg:block">
            <p className="section-eyebrow mb-3">Categoría</p>
            <div className="space-y-1">
              {TEAM_RANKINGS.map(({ key, label, Icon, color }) => (
                <button
                  key={key}
                  onClick={() => setTeamRanking(key)}
                  className={cn(
                    'w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-left transition-all',
                    teamRanking === key ? 'text-[#0A0A0F] font-medium' : 'text-[#9CA3AF] hover:text-[#6B6B80]'
                  )}
                  style={teamRanking === key ? { background: `${color}15`, color } : {}}
                >
                  <Icon size={13} />
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="f1-card overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {sortedTeams.map((team, i) => {
                    const val = team[teamRanking]
                    const pct = Math.round((val / maxTeamVal) * 100)
                    const tr = TEAM_RANKINGS.find(r => r.key === teamRanking)!
                    return (
                      <tr key={team.id} className="border-b border-[#F0F0F3] hover:bg-[#FAFAFA] transition-colors">
                        <td className="px-4 py-3 w-10"><PositionBadge pos={i + 1} /></td>
                        <td className="px-2 py-3 w-8 text-lg">{team.flag}</td>
                        <td className="px-2 py-3">
                          <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full" style={{ background: team.color }} />
                            <span className="font-medium text-[#0A0A0F]">{team.name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 hidden sm:table-cell">
                          <div className="w-32 h-1.5 rounded-full bg-[#E8E8EE]">
                            <div className="h-full rounded-full" style={{ width: `${pct}%`, background: tr.color }} />
                          </div>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <span className="font-bold text-[#0A0A0F] text-base">{val.toLocaleString()}</span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function PositionBadge({ pos }: { pos: number }) {
  const cls =
    pos === 1 ? 'bg-yellow-100 text-yellow-700' :
    pos === 2 ? 'bg-slate-200 text-slate-600' :
    pos === 3 ? 'bg-orange-100 text-orange-700' :
    'text-[#9CA3AF]'
  return (
    <span className={cn('w-7 h-7 rounded flex items-center justify-center text-xs font-bold', cls)}>
      {pos}
    </span>
  )
}

function TopCard({ driver, position, rankKey }: { driver: any; position: number; rankKey: RankingKey }) {
  const val = driver[rankKey]
  const rankInfo = RANKINGS.find(r => r.key === rankKey)!
  const heights = { 1: 'order-2', 2: 'order-1', 3: 'order-3' } as any
  const podiumColors = { 1: '#F5C518', 2: '#C0C0C0', 3: '#CD7F32' } as any

  return (
    <div
      className={cn('f1-card p-4 text-center', heights[position])}
      style={{ borderTopWidth: 3, borderTopColor: podiumColors[position] }}
    >
      <div
        className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-xl font-bold"
        style={{ background: `${podiumColors[position]}20`, color: podiumColors[position] }}
      >
        {position}
      </div>
      <p className="text-sm font-bold text-[#0A0A0F] mb-1 truncate">{driver.name}</p>
      <p className="text-xs text-[#9CA3AF] mb-2">{driver.flag} {driver.nationality}</p>
      <div className="text-2xl font-bold" style={{ color: rankInfo.color }}>
        {val?.toLocaleString()}
      </div>
      <div className="text-[10px] text-[#9CA3AF] uppercase tracking-wide">{rankInfo.unit}</div>
    </div>
  )
}
