'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Trophy, MapPin, User, Wrench, Star, ArrowRight } from 'lucide-react'

type WikiSummary = {
  originalimage?: { source?: string }
  thumbnail?: { source?: string }
}

const SECTIONS = [
  {
    href: '/temporadas',
    label: 'Temporadas',
    eyebrow: '75 campeonatos · desde 1950',
    heading: 'Cada carrera, cada temporada',
    text: 'Revive cada campeonato desde 1950. Equipos, parrillas de pilotos, resultados carrera a carrera y la clasificación final de cada año. Desde Fangio hasta Verstappen.',
    cta: 'Explorar Temporadas',
    Icon: Trophy,
    color: '#E8001D',
    wikiTitle: 'Formula One',
    imgAlt: 'Fórmula 1',
  },
  {
    href: '/circuitos',
    label: 'Circuitos',
    eyebrow: '77 trazados históricos',
    heading: 'Los templos del automovilismo',
    text: 'Desde Mónaco a Monza, de Silverstone a Suzuka. Todos los circuitos que han acogido Grandes Premios, con historial de ganadores, récords de vuelta rápida y detalle del trazado.',
    cta: 'Explorar Circuitos',
    Icon: MapPin,
    color: '#378ADD',
    wikiTitle: 'Circuit de Monaco',
    imgAlt: 'Circuit de Monaco',
  },
  {
    href: '/pilotos',
    label: 'Pilotos',
    eyebrow: '800+ pilotos · todas las épocas',
    heading: 'Los héroes de la parrilla',
    text: 'Perfiles completos de más de 800 pilotos: estadísticas de carrera, trayectoria por equipo y temporada, campeonatos ganados y datos biográficos.',
    cta: 'Explorar Pilotos',
    Icon: User,
    color: '#27F4D2',
    wikiTitle: 'Ayrton Senna',
    imgAlt: 'Ayrton Senna',
  },
  {
    href: '/escuderias',
    label: 'Escuderías',
    eyebrow: '210+ constructores',
    heading: 'Los equipos que escribieron la historia',
    text: 'Ferrari, McLaren, Williams, Red Bull... la historia técnica y humana de cada constructor: evolución del chasis, cambios de motor, directores, patrocinadores y palmarés.',
    cta: 'Explorar Escuderías',
    Icon: Wrench,
    color: '#FF8000',
    wikiTitle: 'Scuderia Ferrari',
    imgAlt: 'Scuderia Ferrari',
  },
  {
    href: '/hall-of-fame',
    label: 'Hall of Fame',
    eyebrow: 'Rankings históricos',
    heading: 'Los números de la leyenda',
    text: 'Los rankings que definen 75 años: campeones mundiales, victorias absolutas, poles, podiums y vueltas rápidas. Compara a los grandes de todas las épocas.',
    cta: 'Ver Hall of Fame',
    Icon: Star,
    color: '#F5C518',
    wikiTitle: "World Drivers' Championship",
    imgAlt: 'Campeonato del Mundo de F1',
  },
]

function SectionBlock({ s, index }: { s: typeof SECTIONS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [imgSrc, setImgSrc] = useState<string | null | undefined>(undefined)

  useEffect(() => {
    let cancelled = false
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(s.wikiTitle)}`)
      .then(r => r.ok ? r.json() : null)
      .then((d: WikiSummary | null) => {
        if (!cancelled) setImgSrc(d?.originalimage?.source ?? d?.thumbnail?.source ?? null)
      })
      .catch(() => { if (!cancelled) setImgSrc(null) })
    return () => { cancelled = true }
  }, [s.wikiTitle])

  const imgLeft = index % 2 !== 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 44 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#EBEBF0] last:border-b-0"
      style={{ minHeight: 360 }}
    >
      {/* ── TEXT COLUMN ── */}
      <div
        className={`flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-14 ${imgLeft ? 'lg:order-2' : 'lg:order-1'}`}
      >
        <div className="flex items-center gap-2.5 mb-4">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${s.color}18`, border: `1.5px solid ${s.color}35` }}
          >
            <s.Icon size={18} style={{ color: s.color }} />
          </div>
          <span className="text-xs uppercase tracking-[3px] font-semibold" style={{ color: s.color }}>
            {s.eyebrow}
          </span>
        </div>

        <h2 className="text-3xl lg:text-[2.5rem] font-bold text-[#0A0A0F] mb-4 leading-tight">
          {s.heading}
        </h2>
        <p className="text-[#6B6B80] leading-relaxed mb-8 max-w-[420px] text-[15px]">
          {s.text}
        </p>

        <div>
          <Link
            href={s.href}
            className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg text-white hover:opacity-90 hover:gap-3 transition-all duration-150"
            style={{ background: s.color }}
          >
            {s.cta} <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* ── IMAGE COLUMN ── */}
      <div
        className={`relative min-h-[260px] lg:min-h-0 overflow-hidden flex items-center justify-center ${imgLeft ? 'lg:order-1' : 'lg:order-2'}`}
        style={{ background: `${s.color}09` }}
      >
        {imgSrc ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgSrc}
              alt={s.imgAlt}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient blend toward text column */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: imgLeft
                  ? 'linear-gradient(to left, rgba(250,250,250,0.35) 0%, transparent 50%)'
                  : 'linear-gradient(to right, rgba(250,250,250,0.35) 0%, transparent 50%)',
              }}
            />
          </>
        ) : imgSrc === null ? (
          <s.Icon size={110} style={{ color: s.color, opacity: 0.07 }} />
        ) : (
          <div
            className="w-8 h-8 rounded-full border-2 border-[#E8E8EE] animate-spin"
            style={{ borderTopColor: s.color }}
          />
        )}
      </div>
    </motion.div>
  )
}

export function HomeSections() {
  return (
    <div className="bg-white border-t border-[#EBEBF0]">
      {SECTIONS.map((s, i) => (
        <SectionBlock key={s.href} s={s} index={i} />
      ))}
    </div>
  )
}
