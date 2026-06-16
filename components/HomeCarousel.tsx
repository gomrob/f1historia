'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Section {
  href: string
  label: string
  description: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: React.ComponentType<any>
  color: string
  stat: string
}

export function HomeCarousel({ sections }: { sections: Section[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)

  const updateState = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setShowLeft(scrollLeft > 10)
    setShowRight(scrollLeft < scrollWidth - clientWidth - 10)
    const firstCard = el.querySelector<HTMLElement>('[data-carousel-card]')
    if (firstCard) {
      const cardSpan = firstCard.offsetWidth + 16
      setActiveIndex(Math.round(scrollLeft / cardSpan))
    }
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', updateState, { passive: true })
    updateState()
    return () => el.removeEventListener('scroll', updateState)
  }, [updateState])

  const scrollToIndex = (i: number) => {
    const el = trackRef.current
    if (!el) return
    const firstCard = el.querySelector<HTMLElement>('[data-carousel-card]')
    if (!firstCard) return
    const cardSpan = firstCard.offsetWidth + 16
    el.scrollTo({ left: Math.max(0, Math.min(i, sections.length - 1)) * cardSpan, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      {/* Edge fade masks (desktop) */}
      {showLeft && (
        <div className="hidden md:block absolute left-0 top-0 bottom-4 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      )}
      {showRight && (
        <div className="hidden md:block absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      )}

      {/* Scrollable track */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto pb-2 px-4 max-w-[1400px] mx-auto"
        style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            data-carousel-card=""
            className="group flex-shrink-0 bg-white rounded-xl p-6 flex flex-col gap-4 relative overflow-hidden border border-[#E8E8EE] hover:border-[#D5D5E2] hover:shadow-md transition-all duration-200"
            style={{
              width: 'min(300px, 82vw)',
              scrollSnapAlign: 'start',
              borderTopWidth: 3,
              borderTopColor: s.color,
            }}
          >
            <div className="flex items-start justify-between gap-2">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${s.color}18`, border: `1.5px solid ${s.color}35` }}
              >
                <s.Icon size={22} style={{ color: s.color }} />
              </div>
              <span className="text-xs text-[#9CA3AF] bg-[#F5F5F7] px-2 py-1 rounded border border-[#E8E8EE] flex-shrink-0 mt-0.5">
                {s.stat}
              </span>
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-bold text-[#0A0A0F] mb-1.5">{s.label}</h3>
              <p className="text-sm text-[#6B6B80] leading-relaxed">{s.description}</p>
            </div>

            <div
              className="flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all duration-150"
              style={{ color: s.color }}
            >
              Explorar <ArrowRight size={14} />
            </div>
          </Link>
        ))}
      </div>

      {/* Navigation arrows (desktop only) */}
      <button
        onClick={() => scrollToIndex(activeIndex - 1)}
        aria-label="Anterior"
        className={cn(
          'hidden md:flex absolute left-6 top-[calc(50%-1rem)] -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#E8E8EE] shadow-md items-center justify-center hover:bg-[#F5F5F7] transition-all duration-150 z-20',
          !showLeft && 'opacity-20 pointer-events-none'
        )}
      >
        <ChevronLeft size={18} className="text-[#0A0A0F]" />
      </button>
      <button
        onClick={() => scrollToIndex(activeIndex + 1)}
        aria-label="Siguiente"
        className={cn(
          'hidden md:flex absolute right-6 top-[calc(50%-1rem)] -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#E8E8EE] shadow-md items-center justify-center hover:bg-[#F5F5F7] transition-all duration-150 z-20',
          !showRight && 'opacity-20 pointer-events-none'
        )}
      >
        <ChevronRight size={18} className="text-[#0A0A0F]" />
      </button>

      {/* Pagination dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {sections.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            aria-label={`Ir a ${i + 1}`}
            className="rounded-full transition-all duration-200 focus:outline-none"
            style={{
              width: i === activeIndex ? 24 : 8,
              height: 8,
              background: i === activeIndex ? '#E8001D' : '#D5D5E2',
            }}
          />
        ))}
      </div>
    </div>
  )
}
