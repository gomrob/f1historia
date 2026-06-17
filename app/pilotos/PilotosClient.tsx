'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Search, Trophy, Medal, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { DRIVERS, searchDrivers } from '@/data/drivers'
import { IndexedBadge } from '@/components/ui/IndexedBadge'
import { FlagIcon } from '@/components/ui/FlagIcon'
import type { Driver } from '@/lib/types'

const PAGE_SIZE = 48

interface ChampPodiums { p1: number; p2: number; p3: number }

interface Props {
  podiumsMap: Record<string, ChampPodiums>
}

export default function PilotosClient({ podiumsMap }: Props) {
  const router = useRouter()
  const [query, setQuery] = useState('')
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

  useEffect(() => { setPage(1) }, [query, filter])

  return (
    <div className="min-h-screen max-w-[1400px] mx-auto px-4 py-8">
      <div className="mb-8">
        <p className="section-eyebrow mb-1">Enciclopedia</p>
        <div className="flex flex-wrap items-center gap-3 mb-1">
          <h1 className="text-4xl font-bold text-[#0A0A0F]">Pilotos</h1>
          <IndexedBadge type="pilotos" />
        </div>
        <p className="text-[#6B6B80]">Historia y estadísticas de todos los pilotos de la Fórmula 1</p>
      </div>

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
        <div className="flex-1 min-w-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {paginated.map(driver => (
              <DriverCard
                key={driver.id}
                driver={driver}
                podiums={podiumsMap[driver.id] ?? { p1: driver.championships, p2: 0, p3: 0 }}
                onClick={() => router.push(`/pilotos/${driver.id}`)}
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
      </div>
    </div>
  )
}

function DriverCard({ driver, podiums, onClick }: { driver: Driver; podiums: ChampPodiums; onClick: () => void }) {
  const p1 = podiums.p1 > 0 ? podiums.p1 : driver.championships
  const p2 = podiums.p2
  const p3 = podiums.p3

  return (
    <div
      onClick={onClick}
      className="f1-card interactive p-4 cursor-pointer transition-all"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <FlagIcon nationality={driver.nationality} size={22} />
          <div>
            <h3 className="text-sm font-semibold text-[#0A0A0F] leading-tight">{driver.name}</h3>
            <p className="text-xs text-[#9CA3AF]">{driver.nationality}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          {p1 > 0 && (
            <div className="flex items-center gap-1 bg-yellow-900/30 text-yellow-400 px-2 py-0.5 rounded text-xs font-bold">
              <Trophy size={10} />
              {p1}x
            </div>
          )}
          {p2 > 0 && (
            <div className="flex items-center gap-1 bg-slate-200/80 text-slate-600 px-2 py-0.5 rounded text-xs font-bold">
              <Medal size={10} />
              {p2}x
            </div>
          )}
          {p3 > 0 && (
            <div className="flex items-center gap-1 bg-orange-100 text-orange-600 px-2 py-0.5 rounded text-xs font-bold">
              <Medal size={10} />
              {p3}x
            </div>
          )}
        </div>
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
