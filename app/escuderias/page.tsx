'use client'
import { useState } from 'react'
import { Search, Trophy, Zap, Medal, Circle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TEAMS, searchTeams } from '@/data/teams'
import { DRIVERS } from '@/data/drivers'
import { F1CarSVG } from '@/components/ui/F1CarSVG'
import type { Team } from '@/lib/types'

export default function EscuderiasPage() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<Team | null>(null)
  const [filter, setFilter] = useState<'todas' | 'activas' | 'históricas'>('todas')

  const filtered = (query ? searchTeams(query) : TEAMS)
    .filter(t => {
      if (filter === 'activas') return t.active
      if (filter === 'históricas') return !t.active
      return true
    })
    .sort((a, b) => b.championships - a.championships || b.wins - a.wins)

  return (
    <div className="min-h-screen max-w-[1400px] mx-auto px-4 py-8">
      <div className="mb-8">
        <p className="section-eyebrow mb-1">Enciclopedia</p>
        <h1 className="text-4xl font-bold text-[#0A0A0F] mb-1">Escuderías</h1>
        <p className="text-[#6B6B80]">Historia, estadísticas y evolución técnica de cada equipo</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
          <input
            type="text"
            placeholder="Buscar escudería..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full bg-white border border-[#E8E8EE] text-[#0A0A0F] placeholder-[#9CA3AF] pl-9 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:border-[#E8001D] transition-colors"
          />
        </div>
        <div className="flex gap-2">
          {(['todas', 'activas', 'históricas'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                'px-3 py-2 rounded-lg text-sm font-medium border transition-all capitalize',
                filter === f
                  ? 'bg-[#E8001D] border-[#E8001D] text-white'
                  : 'bg-white border-[#E8E8EE] text-[#6B6B80] hover:text-[#0A0A0F] hover:border-[#D5D5E2]'
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {selected ? (
        <TeamDetail team={selected} onClose={() => setSelected(null)} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map(team => (
            <TeamCard key={team.id} team={team} onClick={() => setSelected(team)} />
          ))}
        </div>
      )}
    </div>
  )
}

function TeamCard({ team, onClick }: { team: Team; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="f1-card interactive p-5 cursor-pointer overflow-hidden relative"
      style={{ borderTopColor: team.color, borderTopWidth: 3 }}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-base font-bold text-[#0A0A0F]">{team.name}</h3>
            <span className="text-sm">{team.flag}</span>
          </div>
          <p className="text-xs text-[#9CA3AF]">{team.basedIn}</p>
          <p className="text-xs text-[#9CA3AF]">Fundado: {team.founded}{team.dissolved ? ` — ${team.dissolved}` : ''}</p>
        </div>
        {team.championships > 0 && (
          <div className="flex items-center gap-1 px-2 py-1 rounded text-xs font-bold" style={{ background: `${team.color}15`, color: team.color }}>
            <Trophy size={10} />
            {team.championships}x WCC
          </div>
        )}
      </div>

      <F1CarSVG teamId={team.id} primaryColor={team.color} className="my-2 opacity-90" />

      <div className="grid grid-cols-3 gap-2 mt-3">
        <MiniStat label="Victorias" value={team.wins} />
        <MiniStat label="Poles" value={team.poles} />
        <MiniStat label="Podiums" value={team.podiums} />
      </div>

      {!team.active && (
        <div className="mt-2 text-xs text-[#9CA3AF] flex items-center gap-1">
          <Circle size={6} className="text-[#9CA3AF]" /> Equipo histórico
        </div>
      )}
      {team.active && (
        <div className="mt-2 text-xs text-green-400 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> Activo
        </div>
      )}
    </div>
  )
}

function MiniStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-[#F5F5F7] rounded p-2 text-center">
      <div className="text-[10px] text-[#9CA3AF] uppercase tracking-wide">{label}</div>
      <div className="text-sm font-bold text-[#0A0A0F]">{value}</div>
    </div>
  )
}

function TeamDetail({ team, onClose }: { team: Team; onClose: () => void }) {
  const [seasonIdx, setSeasonIdx] = useState(0)
  const seasons = team.seasons?.sort((a, b) => b.year - a.year) ?? []
  const currentSeason = seasons[seasonIdx]

  return (
    <div className="animate-fade-in">
      {/* Back button */}
      <button
        onClick={onClose}
        className="flex items-center gap-2 text-sm text-[#6B6B80] hover:text-[#0A0A0F] mb-6 transition-colors"
      >
        ← Volver a escuderías
      </button>

      {/* Header */}
      <div className="f1-card p-6 mb-4" style={{ borderTopWidth: 4, borderTopColor: team.color }}>
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl font-bold text-[#0A0A0F]">{team.name}</h2>
              <span className="text-2xl">{team.flag}</span>
              {team.championships > 0 && (
                <span className="flex items-center gap-1 px-2 py-1 rounded text-sm font-bold" style={{ background: `${team.color}20`, color: team.color }}>
                  <Trophy size={12} /> {team.championships}x Campeón
                </span>
              )}
            </div>
            <p className="text-sm text-[#6B6B80]">{team.fullName} · {team.basedIn}</p>
            <p className="text-xs text-[#9CA3AF]">
              {team.founded}{team.dissolved ? ` — ${team.dissolved}` : ' — Presente'}
            </p>
          </div>
        </div>

        <p className="text-sm text-[#6B6B80] leading-relaxed mb-6 border-l-2 pl-4" style={{ borderColor: team.color }}>
          {team.bio}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Victorias', value: team.wins, Icon: Trophy, color: '#F5C518' },
            { label: 'Poles', value: team.poles, Icon: Zap, color: '#378ADD' },
            { label: 'Podiums', value: team.podiums, Icon: Medal, color: '#C0C0C0' },
            { label: 'WCC', value: team.championships, Icon: Trophy, color: team.color },
          ].map(({ label, value, Icon, color }) => (
            <div key={label} className="bg-[#F5F5F7] rounded-lg p-4">
              <div className="flex items-center gap-1.5 mb-1">
                <Icon size={12} style={{ color }} />
                <span className="text-[10px] text-[#9CA3AF] uppercase tracking-widest">{label}</span>
              </div>
              <div className="text-2xl font-bold text-[#0A0A0F]">{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Seasons */}
      {seasons.length > 0 && (
        <div className="f1-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-[#0A0A0F]">Historia por temporada</h3>
            <select
              value={seasonIdx}
              onChange={e => setSeasonIdx(Number(e.target.value))}
              className="bg-[#F5F5F7] border border-[#E8E8EE] text-[#0A0A0F] px-3 py-1.5 rounded text-sm focus:outline-none"
            >
              {seasons.map((s, i) => (
                <option key={s.year} value={i}>{s.year}</option>
              ))}
            </select>
          </div>

          {currentSeason && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <F1CarSVG
                  teamId={team.id}
                  primaryColor={currentSeason.color ?? team.color}
                  year={currentSeason.year}
                  className="mb-4"
                />

                <div className="grid grid-cols-2 gap-2">
                  <InfoRow label="Chasis" value={currentSeason.chassis} />
                  <InfoRow label="Motor" value={currentSeason.engine} />
                  <InfoRow label="Suministrador" value={currentSeason.engineSupplier} />
                  <InfoRow label="Neumáticos" value={currentSeason.tyreSupplier} />
                  <InfoRow label="Director" value={currentSeason.principal} />
                  {currentSeason.technicalDirector && (
                    <InfoRow label="Direc. Técnico" value={currentSeason.technicalDirector} />
                  )}
                </div>
              </div>

              <div>
                <p className="section-eyebrow mb-3">Pilotos</p>
                <div className="space-y-2 mb-4">
                  {currentSeason.drivers.map(did => {
                    const driver = DRIVERS.find(d => d.id === did)
                    const ds = driver?.seasons?.find(s => s.year === currentSeason.year)
                    return (
                      <div key={did} className="flex items-center justify-between bg-[#F5F5F7] rounded px-3 py-2">
                        <div className="flex items-center gap-2">
                          <span style={{ color: currentSeason.color ?? team.color }} className="font-bold text-sm">
                            #{ds?.number ?? driver?.number ?? '–'}
                          </span>
                          <span className="text-sm text-[#0A0A0F]">{driver?.name ?? did}</span>
                          <span>{driver?.flag}</span>
                        </div>
                        <span className="text-xs text-[#6B6B80]">{ds?.points ?? '–'} pts</span>
                      </div>
                    )
                  })}
                </div>

                {currentSeason.sponsors && currentSeason.sponsors.length > 0 && (
                  <>
                    <p className="section-eyebrow mb-2">Patrocinadores</p>
                    <div className="flex flex-wrap gap-1.5">
                      {currentSeason.sponsors.map(s => (
                        <span key={s} className="text-xs bg-[#F5F5F7] border border-[#E8E8EE] px-2 py-1 rounded text-[#6B6B80]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="bg-[#F5F5F7] rounded p-3 text-center">
                    <div className="text-[10px] text-[#9CA3AF] uppercase tracking-wide">Posición</div>
                    <div className="text-xl font-bold text-[#0A0A0F]">P{currentSeason.position}</div>
                  </div>
                  <div className="bg-[#F5F5F7] rounded p-3 text-center">
                    <div className="text-[10px] text-[#9CA3AF] uppercase tracking-wide">Puntos</div>
                    <div className="text-xl font-bold text-[#0A0A0F]">{currentSeason.points}</div>
                  </div>
                  <div className="bg-[#F5F5F7] rounded p-3 text-center">
                    <div className="text-[10px] text-[#9CA3AF] uppercase tracking-wide">Victorias</div>
                    <div className="text-xl font-bold text-[#0A0A0F]">{currentSeason.wins}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#F5F5F7] rounded p-2">
      <div className="text-[10px] text-[#9CA3AF] uppercase tracking-wide">{label}</div>
      <div className="text-sm text-[#0A0A0F] font-medium truncate">{value}</div>
    </div>
  )
}
