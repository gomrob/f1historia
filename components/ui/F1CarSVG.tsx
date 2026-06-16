'use client'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface F1CarSVGProps {
  teamId: string
  primaryColor: string
  secondaryColor?: string
  className?: string
  year?: number
  carImageUrl?: string
}

export function F1CarSVG({ teamId, primaryColor, secondaryColor = '#FFFFFF', className, year = 2024, carImageUrl }: F1CarSVGProps) {
  const [imgError, setImgError] = useState(false)

  if (carImageUrl && !imgError) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={carImageUrl}
        alt={`${teamId} ${year}`}
        className={cn('w-full object-contain', className)}
        onError={() => setImgError(true)}
      />
    )
  }

  const pc = primaryColor
  const sc = secondaryColor

  // Era-based proportions
  const isModern = (year ?? 2024) >= 2022
  const isTurbo = (year ?? 2024) >= 2014 && (year ?? 2024) < 2022
  const isV8 = (year ?? 2024) >= 2006 && (year ?? 2024) < 2014

  return (
    <svg
      viewBox="0 0 400 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-full', className)}
      aria-label={`Coche de F1 del equipo ${teamId}`}
    >
      {/* Shadow */}
      <ellipse cx="200" cy="148" rx="140" ry="6" fill="#000" opacity="0.25" />

      {/* Rear wing */}
      <rect x="310" y="45" width="50" height="5" rx="2" fill={pc} />
      <rect x="310" y="38" width="50" height="5" rx="2" fill={pc} opacity="0.7" />
      <rect x="330" y="50" width="4" height="30" rx="1" fill={pc} />
      <rect x="346" y="50" width="4" height="30" rx="1" fill={pc} />

      {/* Rear tyre */}
      <ellipse cx="320" cy="120" rx="26" ry="22" fill="#111" />
      <ellipse cx="320" cy="120" rx="20" ry="16" fill="#1a1a1a" />
      <ellipse cx="320" cy="120" rx="10" ry="8" fill={pc} opacity="0.8" />

      {/* Sidepods */}
      <path
        d="M160 90 Q180 82 240 80 L280 82 Q300 84 310 92 L310 116 Q290 118 240 116 Q200 115 160 112 Z"
        fill={pc}
      />
      <path
        d="M170 90 Q185 86 230 84 L270 86 Q285 88 295 94 L295 112 Q280 114 235 112 Q195 111 170 108 Z"
        fill={pc}
        opacity="0.6"
      />

      {/* Main body */}
      <path
        d="M80 88 Q110 72 155 70 L245 68 Q290 68 320 80 L325 95 Q300 102 240 104 Q180 104 120 100 L80 95 Z"
        fill={pc}
      />

      {/* Nose cone */}
      <path
        d="M30 92 Q50 86 80 86 L80 96 Q60 96 30 98 Z"
        fill={pc}
      />
      <path
        d="M18 93 Q25 91 30 92 L30 96 Q25 97 18 96 Z"
        fill={pc}
        opacity="0.5"
      />

      {/* Cockpit */}
      <path
        d="M160 70 Q175 52 200 50 Q225 50 240 68"
        fill={pc}
        stroke={sc}
        strokeWidth="1"
        opacity="0.9"
      />
      {/* Visor */}
      <path
        d="M170 68 Q183 55 200 54 Q218 55 228 68"
        fill="#0a0a14"
        opacity="0.9"
      />
      <path
        d="M172 68 Q184 58 200 57 Q216 58 226 68"
        fill="#1a2a3a"
        opacity="0.5"
      />

      {/* Halo */}
      <path
        d="M165 68 Q185 55 215 57 Q235 58 240 68"
        fill="none"
        stroke="#888"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <rect x="197" y="56" width="8" height="14" rx="2" fill="#888" />

      {/* Front wing */}
      <rect x="20" y="108" width="90" height="5" rx="2" fill={pc} />
      <rect x="28" y="102" width="75" height="5" rx="2" fill={pc} opacity="0.7" />
      <path d="M25 113 L20 108 L110 108 L105 113 Z" fill={pc} opacity="0.4" />

      {/* Front tyre */}
      <ellipse cx="85" cy="120" rx="22" ry="20" fill="#111" />
      <ellipse cx="85" cy="120" rx="16" ry="14" fill="#1a1a1a" />
      <ellipse cx="85" cy="120" rx="8" ry="7" fill={pc} opacity="0.8" />

      {/* Floor / diffuser */}
      <path
        d="M90 116 Q180 118 310 116 L310 122 Q180 125 90 122 Z"
        fill={pc}
        opacity="0.4"
      />

      {/* Livery stripes */}
      <line x1="120" y1="76" x2="280" y2="74" stroke={sc} strokeWidth="1.5" opacity="0.4" />
      <line x1="125" y1="80" x2="275" y2="78" stroke={sc} strokeWidth="0.8" opacity="0.2" />

      {/* Engine airbox */}
      {isModern && (
        <>
          <rect x="188" y="50" width="26" height="22" rx="3" fill={pc} opacity="0.7" />
          <rect x="192" y="48" width="18" height="4" rx="2" fill={pc} />
        </>
      )}

      {/* DRS / rear diffuser detail */}
      <path
        d="M308 108 Q320 105 340 106 L340 112 Q325 112 308 114 Z"
        fill={pc}
        opacity="0.6"
      />

      {/* Team color accent stripe on body */}
      <path
        d="M100 87 Q160 81 240 79 L240 84 Q160 86 100 92 Z"
        fill={sc}
        opacity="0.15"
      />
    </svg>
  )
}
