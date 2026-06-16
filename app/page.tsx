import Link from 'next/link'
import { Trophy, MapPin, User, Wrench, Star, RefreshCw } from 'lucide-react'
import { getLastUpdated } from '@/lib/data-loader'
import { HomeCarousel } from '@/components/HomeCarousel'

const SECTIONS = [
  {
    href: '/temporadas',
    label: 'Temporadas',
    description: 'Cada campeonato desde 1950. Equipos, pilotos, resultados y clasificaciones.',
    Icon: Trophy,
    color: '#E8001D',
    stat: '75 temporadas',
  },
  {
    href: '/circuitos',
    label: 'Circuitos',
    description: 'Todos los trazados que han acogido Grandes Premios a lo largo de la historia.',
    Icon: MapPin,
    color: '#378ADD',
    stat: '77 circuitos',
  },
  {
    href: '/pilotos',
    label: 'Pilotos',
    description: 'Perfiles completos, estadísticas y trayectorias de todos los pilotos históricos.',
    Icon: User,
    color: '#27F4D2',
    stat: '800+ pilotos',
  },
  {
    href: '/escuderias',
    label: 'Escuderías',
    description: 'Historia, evolución técnica, coches y patrocinadores de cada equipo.',
    Icon: Wrench,
    color: '#FF8000',
    stat: '210+ escuderías',
  },
  {
    href: '/hall-of-fame',
    label: 'Hall of Fame',
    description: 'Los rankings históricos: campeones, victorias, poles y récords de la F1.',
    Icon: Star,
    color: '#F5C518',
    stat: 'Todos los récords',
  },
]

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

      {/* ── HERO: light theme ── */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: '580px',
          background: 'linear-gradient(110deg, #FAFAFA 42%, #F2F2F5 100%)',
        }}
      >
        {/* Top red accent */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#E8001D]" />

        {/* McLaren MP4/5 — right portion, masked edges */}
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

        {/* Text content */}
        <div className="relative max-w-[1400px] mx-auto px-4 pt-16 pb-32 flex flex-col min-h-[580px] justify-center">
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

          {/* Stats — light-themed boxes */}
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

      {/* ── SLIDER / CAROUSEL ── */}
      <section className="py-12 bg-white border-t border-[#F0F0F3]">
        <div className="max-w-[1400px] mx-auto px-4 mb-8">
          <p className="section-eyebrow mb-1">Explora la historia</p>
          <h2 className="text-2xl font-bold text-[#0A0A0F]">Todo sobre la Fórmula 1</h2>
        </div>
        <HomeCarousel />
      </section>

      {/* ── QUICK ACCESS LINKS ── */}
      <section className="py-8 px-4 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {SECTIONS.map(({ href, label, Icon, color }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-[#E8E8EE] hover:border-[#D5D5E2] hover:shadow-sm transition-all duration-150"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: `${color}15` }}
              >
                <Icon size={15} style={{ color }} />
              </div>
              <span className="text-sm font-medium text-[#0A0A0F] truncate">{label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      {lastUpdatedLabel && (
        <footer className="px-4 pb-10 max-w-[1400px] mx-auto">
          <div className="flex items-center gap-2 text-xs text-[#9CA3AF]">
            <RefreshCw size={12} />
            <span>Datos actualizados el {lastUpdatedLabel}</span>
          </div>
        </footer>
      )}
    </div>
  )
}
