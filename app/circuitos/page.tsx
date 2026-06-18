'use client'
import { useState, useEffect } from 'react'
import { Search, MapPin, Calendar, Timer, RotateCcw, RotateCw, Ruler, ChevronDown, Flag, Camera } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FlagIcon } from '@/components/ui/FlagIcon'
import { CIRCUITS, searchCircuits } from '@/data/circuits'
import { IndexedBadge } from '@/components/ui/IndexedBadge'
import type { Circuit } from '@/lib/types'
import type { CircuitWinner } from '@/lib/data-loader'

export default function CircuitosPage() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<Circuit | null>(null)
  const [filter, setFilter] = useState<'todos' | 'activos' | 'históricos'>('todos')

  const filtered = (query ? searchCircuits(query) : CIRCUITS)
    .filter(c => {
      if (filter === 'activos') return c.active
      if (filter === 'históricos') return !c.active
      return true
    })
    .sort((a, b) => a.country.localeCompare(b.country))

  return (
    <div className="min-h-screen max-w-[1400px] mx-auto px-4 py-8">
      <div className="mb-8">
        <p className="section-eyebrow mb-1">Mapa histórico</p>
        <div className="flex flex-wrap items-center gap-3 mb-1">
          <h1 className="text-4xl font-bold text-[#0A0A0F]">Circuitos</h1>
          <IndexedBadge type="circuitos" />
        </div>
        <p className="text-[#6B6B80]">Todos los trazados que han acogido Grandes Premios de Fórmula 1</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
          <input
            type="text"
            placeholder="Buscar circuito o país..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full bg-white border border-[#E8E8EE] text-[#0A0A0F] placeholder-[#9CA3AF] pl-9 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:border-[#378ADD] transition-colors"
          />
        </div>
        <div className="flex gap-2">
          {(['todos', 'activos', 'históricos'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                'px-3 py-2 rounded-lg text-sm font-medium border transition-all capitalize',
                filter === f
                  ? 'bg-[#378ADD] border-[#378ADD] text-white'
                  : 'bg-white border-[#E8E8EE] text-[#6B6B80] hover:text-[#0A0A0F] hover:border-[#D5D5E2]'
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {selected ? (
        <CircuitDetail circuit={selected} onClose={() => setSelected(null)} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {filtered.map(circuit => (
            <CircuitCard key={circuit.id} circuit={circuit} onClick={() => setSelected(circuit)} />
          ))}
        </div>
      )}
    </div>
  )
}

/** Placeholder shown when no circuit photo is available. */
function NoImagePlaceholder() {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-2 rounded-lg"
      style={{ backgroundColor: '#F0F0F4' }}
    >
      <Camera size={24} className="text-[#C8C8D4]" />
      <span className="text-xs text-[#C8C8D4]">Sin foto</span>
    </div>
  )
}

function CircuitCard({ circuit, onClick }: { circuit: Circuit; onClick: () => void }) {
  const image = circuit.photoUrl ?? null

  return (
    <div
      onClick={onClick}
      className="f1-card interactive p-4 cursor-pointer"
      style={{ borderTopWidth: 2, borderTopColor: circuit.active ? '#378ADD' : '#D5D5E2' }}
    >
      <div className="relative mb-3 rounded-lg overflow-hidden flex items-center justify-center bg-[#F0F0F4]" style={{ aspectRatio: '16 / 9' }}>
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={circuit.name} className="w-full h-full object-contain" />
        ) : (
          <NoImagePlaceholder />
        )}
        <div className="absolute bottom-2 left-2">
          {!circuit.active ? (
            <span className="text-[10px] text-[#9CA3AF] bg-white/90 px-2 py-0.5 rounded border border-[#E8E8EE]">Histórico</span>
          ) : (
            <span className="text-[10px] text-[#378ADD] bg-white/90 px-2 py-0.5 rounded border border-blue-100">Activo</span>
          )}
        </div>
      </div>

      <h3 className="text-sm font-bold text-[#0A0A0F] mb-0.5 line-clamp-2">{circuit.name}</h3>
      <p className="text-xs text-[#6B6B80] mb-3 flex items-center gap-1.5">
        <FlagIcon country={circuit.country} size={16} />
        <span>{circuit.city}, {circuit.country}</span>
      </p>

      <div className="grid grid-cols-2 gap-1.5 text-xs">
        <div className="flex items-center gap-1.5 text-[#9CA3AF]">
          <Ruler size={11} />
          <span>{circuit.length} km</span>
        </div>
        <div className="flex items-center gap-1.5 text-[#9CA3AF]">
          {circuit.direction === 'clockwise' ? <RotateCw size={11} /> : <RotateCcw size={11} />}
          <span>{circuit.laps} vueltas</span>
        </div>
        <div className="flex items-center gap-1.5 text-[#9CA3AF]">
          <Calendar size={11} />
          <span>Primer GP: {circuit.firstGP}</span>
        </div>
        <div className="flex items-center gap-1.5 text-[#9CA3AF]">
          <MapPin size={11} />
          <span>{circuit.corners} curvas</span>
        </div>
      </div>
    </div>
  )
}

function CircuitDetail({ circuit, onClose }: { circuit: Circuit; onClose: () => void }) {
  const trackImage = circuit.trackImageUrl ?? null

  return (
    <div className="animate-fade-in">
      <button
        onClick={onClose}
        className="flex items-center gap-2 text-sm text-[#6B6B80] hover:text-[#0A0A0F] mb-6 transition-colors"
      >
        ← Volver a circuitos
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="f1-card p-6" style={{ borderTopWidth: 3, borderTopColor: '#378ADD' }}>
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F5F5F7] rounded-lg shrink-0">
                <Flag size={22} className="text-[#378ADD]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#0A0A0F]">{circuit.name}</h2>
                <p className="text-[#6B6B80] flex items-center gap-1.5">
                  <FlagIcon country={circuit.country} size={16} />
                  <span>{circuit.city}, {circuit.country}</span>
                </p>
                <p className="text-xs text-[#9CA3AF] mt-1">{circuit.gpName}</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden mb-4 flex items-center justify-center bg-[#F0F0F4]" style={{ maxHeight: '400px', minHeight: '180px' }}>
              {trackImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={trackImage} alt={`Trazado de ${circuit.name}`} className="max-w-full max-h-[400px] object-contain" />
              ) : (
                <NoImagePlaceholder />
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              <StatBox label="Longitud" value={`${circuit.length} km`} />
              <StatBox label="Vueltas" value={circuit.laps.toString()} />
              <StatBox label="Curvas" value={circuit.corners.toString()} />
              <StatBox label="Zonas DRS" value={circuit.drsZones.toString()} />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              <InfoItem label="Primer GP" value={circuit.firstGP.toString()} />
              <InfoItem label="Último GP" value={circuit.lastGP.toString()} />
              <InfoItem label="Dirección" value={circuit.direction === 'clockwise' ? 'Horario' : 'Antihorario'} />
            </div>

            {circuit.onboardLapYoutubeId && (
              <div className="mb-4">
                <p className="text-[10px] text-[#9CA3AF] uppercase tracking-widest mb-2">Vuelta onboard</p>
                <a
                  href={`https://www.youtube.com/watch?v=${circuit.onboardLapYoutubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative rounded-lg overflow-hidden group"
                  style={{ aspectRatio: '16/9' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${circuit.onboardLapYoutubeId}/maxresdefault.jpg`}
                    alt={`Onboard lap ${circuit.name}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                    <div className="bg-red-600 rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform">
                      <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            )}

            <GPCountStat circuitId={circuit.id} />

            {circuit.lapRecord && (
              <div className="mt-4 bg-[#F5F5F7] rounded-lg p-4 flex items-center gap-4">
                <Timer size={20} className="text-purple-500" />
                <div>
                  <p className="text-[10px] text-[#9CA3AF] uppercase tracking-widest mb-1">Vuelta rápida récord</p>
                  <p className="text-lg font-bold text-[#0A0A0F]">{circuit.lapRecord.time}</p>
                  <p className="text-xs text-[#6B6B80]">{circuit.lapRecord.driver} · {circuit.lapRecord.year}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Race history */}
        <div className="f1-card p-5">
          {circuit.logoUrl && (
            <div className="flex items-center justify-center mb-4 p-3 bg-[#F5F5F7] rounded-lg border border-[#E8E8EE]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={circuit.logoUrl}
                alt={`Logo ${circuit.name}`}
                style={{ maxWidth: 120, maxHeight: 56, objectFit: 'contain', display: 'block' }}
              />
            </div>
          )}
          <p className="section-eyebrow mb-4">Historial de ganadores</p>
          <CircuitWinners circuitId={circuit.id} />
        </div>
      </div>
    </div>
  )
}

/** Fetches and renders the total number of Grands Prix held at a circuit. */
function GPCountStat({ circuitId }: { circuitId: string }) {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    let cancelled = false
    setCount(null)
    fetch(`/api/circuit-gp-count?id=${encodeURIComponent(circuitId)}`)
      .then(res => (res.ok ? res.json() : { count: 0 }))
      .then(data => {
        if (!cancelled) setCount(data.count)
      })
      .catch(() => {
        if (!cancelled) setCount(0)
      })
    return () => { cancelled = true }
  }, [circuitId])

  if (count === null) return null

  return (
    <div className="mt-4 bg-[#F5F5F7] rounded-lg p-4 flex items-center gap-4">
      <Flag size={20} className="text-[#378ADD]" />
      <div>
        <p className="text-lg font-bold text-[#0A0A0F]">{count} Grandes Premios disputados</p>
      </div>
    </div>
  )
}

const WINNERS_PAGE_SIZE = 15

/** Fetches and renders a circuit's race-winner history, sorted most recent first. */
function CircuitWinners({ circuitId }: { circuitId: string }) {
  const [winners, setWinners] = useState<CircuitWinner[] | null>(null)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    let cancelled = false
    setWinners(null)
    setExpanded(false)
    fetch(`/api/circuit-winners?id=${encodeURIComponent(circuitId)}`)
      .then(res => (res.ok ? res.json() : []))
      .then(data => {
        if (!cancelled) setWinners(data)
      })
      .catch(() => {
        if (!cancelled) setWinners([])
      })
    return () => { cancelled = true }
  }, [circuitId])

  if (winners === null) {
    return <p className="text-sm text-[#9CA3AF]">Cargando historial...</p>
  }

  if (winners.length === 0) {
    return <p className="text-sm text-[#9CA3AF]">No hay datos de carreras disponibles</p>
  }

  const visible = expanded ? winners : winners.slice(0, WINNERS_PAGE_SIZE)

  return (
    <div className="space-y-2">
      {visible.map(race => (
        <div key={race.year} className="bg-[#F5F5F7] rounded px-3 py-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#378ADD]">{race.year}</span>
            <FlagIcon nationality={race.nationality} size={18} />
          </div>
          <p className="text-sm font-medium text-[#0A0A0F] mt-0.5">{race.driverName}</p>
          <p className="text-xs text-[#6B6B80]">{race.constructorName}</p>
        </div>
      ))}

      {!expanded && winners.length > WINNERS_PAGE_SIZE && (
        <button
          onClick={() => setExpanded(true)}
          className="flex items-center justify-center gap-1.5 w-full text-sm font-medium text-[#378ADD] hover:text-[#0A0A0F] py-2 transition-colors"
        >
          Ver historial completo <ChevronDown size={14} />
        </button>
      )}
    </div>
  )
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#F5F5F7] rounded-lg p-3">
      <div className="text-[10px] text-[#9CA3AF] uppercase tracking-widest mb-1">{label}</div>
      <div className="text-lg font-bold text-[#0A0A0F]">{value}</div>
    </div>
  )
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center bg-[#F5F5F7] rounded px-3 py-2 text-sm">
      <span className="text-[#9CA3AF]">{label}</span>
      <span className="text-[#0A0A0F] font-medium">{value}</span>
    </div>
  )
}
