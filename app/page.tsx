import Link from 'next/link'
import { Trophy, MapPin, User, Wrench, Star, ArrowRight } from 'lucide-react'

const SECTIONS = [
  {
    href: '/temporadas',
    label: 'Temporadas',
    description: 'Cada campeonato desde 1950. Equipos, pilotos, resultados y clasificaciones.',
    Icon: Trophy,
    color: '#E8001D',
    bg: 'from-red-950/30 to-transparent',
    stat: '75 temporadas',
  },
  {
    href: '/circuitos',
    label: 'Circuitos',
    description: 'Todos los trazados que han acogido Grandes Premios a lo largo de la historia.',
    Icon: MapPin,
    color: '#378ADD',
    bg: 'from-blue-950/30 to-transparent',
    stat: '77 circuitos',
  },
  {
    href: '/pilotos',
    label: 'Pilotos',
    description: 'Perfiles completos, estadísticas y trayectorias de todos los pilotos históricos.',
    Icon: User,
    color: '#27F4D2',
    bg: 'from-teal-950/30 to-transparent',
    stat: '800+ pilotos',
  },
  {
    href: '/escuderias',
    label: 'Escuderías',
    description: 'Historia, evolución técnica, coches y patrocinadores de cada equipo.',
    Icon: Wrench,
    color: '#FF8000',
    bg: 'from-orange-950/30 to-transparent',
    stat: '210+ escuderías',
  },
  {
    href: '/hall-of-fame',
    label: 'Hall of Fame',
    description: 'Los rankings históricos: campeones, victorias, poles y récords de la F1.',
    Icon: Star,
    color: '#F5C518',
    bg: 'from-yellow-950/30 to-transparent',
    stat: 'Todos los récords',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-grid">
      {/* Hero */}
      <section className="relative px-4 pt-16 pb-12 max-w-[1400px] mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs tracking-[3px] uppercase text-[#9CA3AF] mb-4">
            La guía histórica definitiva
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-none">
            <span className="text-[#E8001D]">Fórmula 1</span>
            <br />
            <span className="text-[#0A0A0F]">desde 1950</span>
          </h1>
          <p className="text-lg text-[#6B6B80] max-w-xl leading-relaxed">
            75 años de historia del automovilismo más apasionante del mundo. Explora temporadas, pilotos, escuderías y circuitos con datos detallados.
          </p>
        </div>

        {/* Decorative stats */}
        <div className="flex flex-wrap gap-6 mt-10">
          {[
            { label: 'Grandes Premios', value: '1.100+' },
            { label: 'Campeones', value: '34' },
            { label: 'Victorias registradas', value: '1.100+' },
            { label: 'Circuitos históricos', value: '77' },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col">
              <span className="text-3xl font-bold text-[#0A0A0F]">{value}</span>
              <span className="text-xs text-[#9CA3AF] mt-1">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section cards */}
      <section className="px-4 pb-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SECTIONS.map(({ href, label, description, Icon, color, stat }) => (
            <Link
              key={href}
              href={href}
              className="group f1-card interactive p-6 flex flex-col gap-4 relative overflow-hidden"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: color }} />

              <div className="flex items-start justify-between">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <span className="text-xs text-[#9CA3AF] bg-[#F5F5F7] px-2 py-1 rounded border border-[#E8E8EE]">
                  {stat}
                </span>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#0A0A0F] mb-1">{label}</h2>
                <p className="text-sm text-[#6B6B80] leading-relaxed">{description}</p>
              </div>

              <div
                className="flex items-center gap-1 text-sm font-medium mt-auto group-hover:gap-2 transition-all"
                style={{ color }}
              >
                Explorar <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
