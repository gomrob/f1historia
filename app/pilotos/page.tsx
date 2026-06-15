'use client'
import { useState, useEffect } from 'react'
import { Search, Trophy, Zap, Medal, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { DRIVERS, searchDrivers } from '@/data/drivers'
import { TEAMS } from '@/data/teams'
import type { Driver } from '@/lib/types'

const PAGE_SIZE = 48

export default function PilotosPage() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<Driver | null>(null)
  const [filter, setFilter] = useState<'todos' | 'activos' | 'campeones'>('todos')
  const [page, setPage] = useState(1)

  const filtered = (query ? searchDrivers(query) : DRIVERS)
    .filter(d => {
      if (filter === 'activos') return d.active
      if (filter === 'campeones') return d.championships > 0
      return true
    })
    .sort((a, b) => b.championships - a.championships || b.wins - a.wins || a.name.localeCompare(b.name))

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  // Reset to page 1 whenever the query or filter changes
  useEffect(() => {
    setPage(1)
  }, [query, filter])

  return (
    <div className="min-h-screen max-w-[1400px] mx-auto px-4 py-8">
      <div className="mb-8">
        <p className="section-eyebrow mb-1">Enciclopedia</p>
        <h1 className="text-4xl font-bold text-[#0A0A0F] mb-1">Pilotos</h1>
        <p className="text-[#6B6B80]">Historia y estadísticas de todos los pilotos de la Fórmula 1</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
          <input
            type="text"
            placeholder="Buscar piloto..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full bg-white border border-[#E8E8EE] text-[#0A0A0F] placeholder-[#9CA3AF] pl-9 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:border-[#E8001D] transition-colors"
          />
        </div>
        <div className="flex gap-2">
          {(['todos', 'activos', 'campeones'] as const).map(f => (
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

      <div className="flex gap-4">
        {/* Driver grid */}
        <div className="flex-1 min-w-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {paginated.map(driver => (
              <DriverCard
                key={driver.id}
                driver={driver}
                isSelected={selected?.id === driver.id}
                onClick={() => setSelected(selected?.id === driver.id ? null : driver)}
              />
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16 text-[#9CA3AF]">
              <p>No se encontraron pilotos para &ldquo;{query}&rdquo;</p>
            </div>
          )}

          {filtered.length > PAGE_SIZE && (
            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={currentPage <= 1}
                className={cn(
                  'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium border transition-all',
                  currentPage <= 1
                    ? 'bg-[#F5F5F7] border-[#E8E8EE] text-[#D5D5E2] cursor-not-allowed'
                    : 'bg-white border-[#E8E8EE] text-[#6B6B80] hover:text-[#0A0A0F] hover:border-[#D5D5E2]'
                )}
              >
                <ChevronLeft size={14} />
                Anterior
              </button>
              <span className="text-sm text-[#6B6B80]">
                Página <span className="font-semibold text-[#0A0A0F]">{currentPage}</span> de {totalPages}
              </span>
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage >= totalPages}
                className={cn(
                  'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium border transition-all',
                  currentPage >= totalPages
                    ? 'bg-[#F5F5F7] border-[#E8E8EE] text-[#D5D5E2] cursor-not-allowed'
                    : 'bg-white border-[#E8E8EE] text-[#6B6B80] hover:text-[#0A0A0F] hover:border-[#D5D5E2]'
                )}
              >
                Siguiente
                <ChevronRight size={14} />
              </button>
            </div>
          )}
        </div>

        {/* Detail panel */}
        {selected && (
          <div className="w-80 flex-shrink-0 hidden lg:block">
            <DriverDetail driver={selected} onClose={() => setSelected(null)} />
          </div>
        )}
      </div>
    </div>
  )
}

function DriverCard({ driver, isSelected, onClick }: { driver: Driver; isSelected: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'f1-card interactive p-4 cursor-pointer transition-all',
        isSelected && 'border-[#E8001D]'
      )}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">{driver.flag}</span>
          <div>
            <h3 className="text-sm font-semibold text-[#0A0A0F] leading-tight">{driver.name}</h3>
            <p className="text-xs text-[#9CA3AF]">{driver.nationality}</p>
          </div>
        </div>
        {driver.championships > 0 && (
          <div className="flex items-center gap-1 bg-yellow-900/30 text-yellow-400 px-2 py-0.5 rounded text-xs font-bold">
            <Trophy size={10} />
            {driver.championships}x
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2">
        <Stat label="Victorias" value={driver.wins} />
        <Stat label="Poles" value={driver.poles} />
        <Stat label="Podiums" value={driver.podiums} />
      </div>

      {driver.active && (
        <div className="mt-2 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <span className="text-xs text-green-400">Activo</span>
        </div>
      )}
    </div>
  )
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-[#F5F5F7] rounded p-2">
      <div className="text-[10px] text-[#9CA3AF] uppercase tracking-wide">{label}</div>
      <div className="text-base font-bold text-[#0A0A0F]">{value}</div>
    </div>
  )
}

function DriverDetail({ driver, onClose }: { driver: Driver; onClose: () => void }) {
  const topTeam = driver.seasons?.[0]?.teamId
    ? TEAMS.find(t => t.id === driver.seasons[0].teamId)
    : null

  return (
    <div className="f1-card p-5 sticky top-20">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{driver.flag}</span>
          <div>
            <h2 className="text-lg font-bold text-[#0A0A0F]">{driver.name}</h2>
            <p className="text-sm text-[#6B6B80]">{driver.nationality}</p>
          </div>
        </div>
        <button onClick={onClose} className="text-[#9CA3AF] hover:text-[#0A0A0F] text-lg leading-none">×</button>
      </div>

      {driver.number && (
        <div className="text-5xl font-bold text-[#E8001D] mb-4 opacity-80">#{driver.number}</div>
      )}

      <p className="text-xs text-[#6B6B80] leading-relaxed mb-4 border-l-2 border-[#E8E8EE] pl-3">
        {driver.bio}
      </p>

      <div className="grid grid-cols-2 gap-2 mb-4">
        <StatBig label="Campeonatos" value={driver.championships} Icon={Trophy} color="#F5C518" />
        <StatBig label="Victorias" value={driver.wins} Icon={Trophy} color="#F5C518" />
        <StatBig label="Poles" value={driver.poles} Icon={Zap} color="#378ADD" />
        <StatBig label="Podiums" value={driver.podiums} Icon={Medal} color="#C0C0C0" />
      </div>

      <div className="space-y-1 text-xs text-[#6B6B80]">
        <div className="flex justify-between py-1 border-b border-[#F0F0F3]">
          <span className="text-[#9CA3AF]">Nacimiento</span>
          <span>{new Date(driver.dateOfBirth).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <div className="flex justify-between py-1 border-b border-[#F0F0F3]">
          <span className="text-[#9CA3AF]">Lugar</span>
          <span>{driver.placeOfBirth}</span>
        </div>
        <div className="flex justify-between py-1 border-b border-[#F0F0F3]">
          <span className="text-[#9CA3AF]">Carreras</span>
          <span>{driver.racesEntered}</span>
        </div>
        <div className="flex justify-between py-1 border-b border-[#F0F0F3]">
          <span className="text-[#9CA3AF]">Vueltas rápidas</span>
          <span>{driver.fastestLaps}</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="text-[#9CA3AF]">Puntos totales</span>
          <span>{driver.points.toLocaleString()}</span>
        </div>
      </div>

      {driver.seasons && driver.seasons.length > 0 && (
        <div className="mt-4">
          <p className="section-eyebrow mb-2">Temporadas</p>
          <div className="space-y-1 max-h-48 overflow-y-auto">
            {driver.seasons.sort((a, b) => b.year - a.year).map(s => {
              const team = TEAMS.find(t => t.id === s.teamId)
              return (
                <div key={s.year} className="flex items-center justify-between text-xs bg-[#F5F5F7] rounded px-2 py-1.5">
                  <span className="text-[#0A0A0F] font-medium">{s.year}</span>
                  <span className="text-[#6B6B80]">{team?.name ?? s.teamId}</span>
                  <span className="text-[#E8001D] font-bold">P{s.position}</span>
                  <span className="text-[#6B6B80]">{s.points} pts</span>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

function StatBig({ label, value, Icon, color }: { label: string; value: number; Icon: any; color: string }) {
  return (
    <div className="bg-[#F5F5F7] rounded-lg p-3">
      <div className="flex items-center gap-1.5 mb-1">
        <Icon size={12} style={{ color }} />
        <span className="text-[10px] text-[#9CA3AF] uppercase tracking-wide">{label}</span>
      </div>
      <div className="text-xl font-bold text-[#0A0A0F]">{value}</div>
    </div>
  )
}
