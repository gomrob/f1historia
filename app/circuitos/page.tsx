'use client'
import { useState, useEffect } from 'react'
import { Search, MapPin, Calendar, Timer, RotateCcw, RotateCw, Ruler } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CIRCUITS, searchCircuits } from '@/data/circuits'
import type { Circuit } from '@/lib/types'

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
        <h1 className="text-4xl font-bold text-[#0A0A0F] mb-1">Circuitos</h1>
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

/** Fetches a representative image for a circuit from Wikipedia's REST summary API. Returns null if unavailable. */
function useWikiImage(title: string): string | null | undefined {
  const [url, setUrl] = useState<string | null | undefined>(undefined)

  useEffect(() => {
    let cancelled = false
    setUrl(undefined)
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`)
      .then(res => (res.ok ? res.json() : null))
      .then(data => {
        if (cancelled) return
        setUrl(data?.thumbnail?.source ?? data?.originalimage?.source ?? null)
      })
      .catch(() => {
        if (!cancelled) setUrl(null)
      })
    return () => { cancelled = true }
  }, [title])

  return url
}

function CircuitCard({ circuit, onClick }: { circuit: Circuit; onClick: () => void }) {
  const image = useWikiImage(circuit.fullName)

  return (
    <div
      onClick={onClick}
      className="f1-card interactive p-4 cursor-pointer"
      style={{ borderTopWidth: 2, borderTopColor: circuit.active ? '#378ADD' : '#D5D5E2' }}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-2xl">{circuit.flag}</span>
        {!circuit.active && (
          <span className="text-[10px] text-[#9CA3AF] bg-[#F5F5F7] px-2 py-0.5 rounded border border-[#E8E8EE]">Histórico</span>
        )}
        {circuit.active && (
          <span className="text-[10px] text-[#378ADD] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">Activo</span>
        )}
      </div>
      <h3 className="text-sm font-bold text-[#0A0A0F] mb-0.5 line-clamp-2">{circuit.name}</h3>
      <p className="text-xs text-[#6B6B80] mb-3">{circuit.city}, {circuit.country}</p>

      {image && (
        <div className="mb-3 rounded-lg overflow-hidden bg-[#F5F5F7]" style={{ height: 90 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={circuit.name} className="w-full h-full object-cover" />
        </div>
      )}

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
              <span className="text-4xl">{circuit.flag}</span>
              <div>
                <h2 className="text-2xl font-bold text-[#0A0A0F]">{circuit.name}</h2>
                <p className="text-[#6B6B80]">{circuit.city}, {circuit.country}</p>
                <p className="text-xs text-[#9CA3AF] mt-1">{circuit.gpName}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              <StatBox label="Longitud" value={`${circuit.length} km`} />
              <StatBox label="Vueltas" value={circuit.laps.toString()} />
              <StatBox label="Curvas" value={circuit.corners.toString()} />
              <StatBox label="Zonas DRS" value={circuit.drsZones.toString()} />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <InfoItem label="Primer GP" value={circuit.firstGP.toString()} />
              <InfoItem label="Último GP" value={circuit.lastGP.toString()} />
              <InfoItem label="Dirección" value={circuit.direction === 'clockwise' ? 'Horario' : 'Antihorario'} />
            </div>

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

          {/* Circuit layout */}
          <div className="f1-card p-6">
            <p className="section-eyebrow mb-4">Trazado</p>
            <CircuitLayout circuit={circuit} />
          </div>
        </div>

        {/* Race history */}
        <div className="f1-card p-5">
          <p className="section-eyebrow mb-4">Historial de ganadores</p>
          {circuit.races.length > 0 ? (
            <div className="space-y-2">
              {circuit.races.sort((a, b) => b.year - a.year).map(race => (
                <div key={race.year} className="bg-[#F5F5F7] rounded px-3 py-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#378ADD]">{race.year}</span>
                    <span className="text-xs text-[#9CA3AF]">{race.laps} vueltas</span>
                  </div>
                  <p className="text-sm font-medium text-[#0A0A0F] mt-0.5">{race.winner}</p>
                  <p className="text-xs text-[#6B6B80]">{race.team} · {race.time}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-[#9CA3AF]">No hay datos de carreras disponibles</p>
          )}
        </div>
      </div>
    </div>
  )
}

function CircuitLayout({ circuit }: { circuit: Circuit }) {
  const image = useWikiImage(circuit.fullName)

  if (image) {
    return (
      <div className="bg-[#F5F5F7] rounded-lg p-2 flex items-center justify-center" style={{ height: 220 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={`Trazado de ${circuit.name}`} className="max-h-full max-w-full object-contain rounded" />
      </div>
    )
  }

  return <CircuitTraceSVG circuit={circuit} />
}

function CircuitTraceSVG({ circuit }: { circuit: Circuit }) {
  // Generic circuit SVG representations per circuit type
  const traces: Record<string, string> = {
    monza: 'M50,80 L350,80 Q370,80 370,100 L370,140 Q370,160 350,160 L200,160 L200,200 L150,200 L150,160 L50,160 Q30,160 30,140 L30,100 Q30,80 50,80 Z',
    monaco: 'M80,40 Q120,20 160,30 L260,30 Q300,30 320,60 L320,100 Q320,130 290,150 L200,180 Q170,190 140,180 L80,150 Q50,130 50,100 L50,60 Q50,40 80,40 Z',
    silverstone: 'M60,100 Q60,60 100,50 L200,40 Q260,35 300,70 L340,90 Q360,110 340,140 L300,160 Q260,175 200,175 L100,165 Q60,155 60,130 Z',
  }

  const defaultPath = 'M60,80 Q60,40 100,35 L200,30 Q270,28 310,60 L340,90 Q360,115 340,145 L300,165 Q260,180 200,178 L100,170 Q60,158 60,130 Z'
  const path = traces[circuit.id] ?? defaultPath

  return (
    <div className="bg-[#F5F5F7] rounded-lg p-4 flex items-center justify-center" style={{ height: 220 }}>
      <svg viewBox="0 0 400 220" className="w-full max-w-sm" fill="none">
        <path d={path} stroke="#378ADD" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
        <path d={path} stroke="#378ADD" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {/* Start/finish line */}
        <line x1="195" y1="26" x2="205" y2="34" stroke="#E8001D" strokeWidth="3" />
        <circle cx="200" cy="30" r="4" fill="#E8001D" />
        <text x="210" y="28" fill="#E8001D" fontSize="9" fontFamily="Inter">S/F</text>
        <text x="50%" y="210" textAnchor="middle" fill="#9CA3AF" fontSize="10" fontFamily="Inter">{circuit.length} km · {circuit.corners} curvas</text>
      </svg>
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
