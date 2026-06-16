'use client'
import { useEffect, useState } from 'react'
import { Database } from 'lucide-react'

type CountKey = 'pilotos' | 'circuitos' | 'escuderias' | 'temporadas'

const LABELS: Record<CountKey, (n: number) => string> = {
  pilotos: n => `${n} pilotos indexados`,
  circuitos: n => `${n} circuitos indexados`,
  escuderias: n => `${n} escuderías indexadas`,
  temporadas: n => `${n} temporadas indexadas (1950-2026)`,
}

export function IndexedBadge({ type }: { type: CountKey }) {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    fetch('/api/counts')
      .then(res => res.json())
      .then(data => setCount(data[type] ?? null))
      .catch(() => setCount(null))
  }, [type])

  if (count === null) return null

  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-[#6B6B80] bg-[#F0F0F4] px-2.5 py-1 rounded-full">
      <Database size={12} />
      {LABELS[type](count)}
    </span>
  )
}
