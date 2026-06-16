import { RefreshCw } from 'lucide-react'
import { getLastUpdated } from '@/lib/data-loader'
import { HomeSections } from '@/components/HomeSections'

const STATS = [
  { label: 'Grandes Premios', value: '1.100+' },
  { label: 'Campeones', value: '34' },
  { label: 'Victorias registradas', value: '1.100+' },
  { label: 'Circuitos históricos', value: '77' },
]

export default function HomePage() {
  const lastUpdated = getLastUpdated()
  const lastUpdatedLabel = lastUpdated
    ? new Date(lastUpdated).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
    : null

  return (
    <div className="min-h-screen bg-[#FAFAFA]">

      {/* ── HERO: tema claro ── */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: '560px',
          background: 'linear-gradient(110deg, #FAFAFA 42%, #F2F2F5 100%)',
        }}
      >
        {/* Línea roja superior */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#E8001D]" />

        {/* McLaren MP4/5 — lado derecho con máscara */}
        <div
          className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] pointer-events-none select-none"
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 22%, black 100%), linear-gradient(to bottom, black 55%, transparent 100%)',
            WebkitMaskComposite: 'source-in',
            maskImage:
              'linear-gradient(to right, transparent 0%, black 22%, black 100%), linear-gradient(to bottom, black 55%, transparent 100%)',
            maskComposite: 'intersect',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero/mclaren-mp45-senna.png"
            alt="McLaren MP4/5 — Ayrton Senna 1989"
            className="h-full w-full object-contain object-right-bottom"
            draggable={false}
          />
        </div>

        {/* Contenido de texto */}
        <div className="relative max-w-[1400px] mx-auto px-4 pt-16 pb-28 flex flex-col min-h-[560px] justify-center">
          <div className="max-w-lg">
            <p className="text-xs tracking-[3px] uppercase text-[#E8001D] mb-4 font-semibold">
              La guía histórica definitiva
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-none">
              <span className="text-[#E8001D]">Fórmula 1</span>
              <br />
              <span className="text-[#0A0A0F]">desde 1950</span>
            </h1>
            <p className="text-lg text-[#6B6B80] max-w-md leading-relaxed">
              75 años del automovilismo más apasionante del mundo. Explora temporadas, pilotos, escuderías y circuitos con datos detallados.
            </p>
          </div>

          {/* Stats — cajas tema claro */}
          <div className="flex flex-wrap gap-3 mt-10">
            {STATS.map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col bg-white rounded-xl px-4 py-3 border border-[#E8E8EE] shadow-sm"
              >
                <span className="text-2xl font-bold text-[#0A0A0F]">{value}</span>
                <span className="text-xs text-[#9CA3AF] mt-0.5">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIONES ZIG-ZAG EDITORIAL ── */}
      <HomeSections />

      {/* ── FOOTER ── */}
      {lastUpdatedLabel && (
        <footer className="px-4 py-8 max-w-[1400px] mx-auto border-t border-[#EBEBF0]">
          <div className="flex items-center gap-2 text-xs text-[#9CA3AF]">
            <RefreshCw size={12} />
            <span>Datos actualizados el {lastUpdatedLabel}</span>
          </div>
        </footer>
      )}
    </div>
  )
}
