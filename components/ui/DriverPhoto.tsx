'use client'
import { useEffect, useState } from 'react'
import { User } from 'lucide-react'

/** Fetches a driver portrait from Wikipedia's REST summary API. Falls back to a User icon. */
export function DriverPhoto({ name, className }: { name: string; className?: string }) {
  const [url, setUrl] = useState<string | null | undefined>(undefined)

  useEffect(() => {
    let cancelled = false
    setUrl(undefined)
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`)
      .then(res => (res.ok ? res.json() : null))
      .then(data => {
        if (cancelled) return
        setUrl(data?.thumbnail?.source ?? data?.originalimage?.source ?? null)
      })
      .catch(() => {
        if (!cancelled) setUrl(null)
      })
    return () => { cancelled = true }
  }, [name])

  if (url) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={url} alt={name} className={className ?? 'w-24 h-24 rounded-xl object-cover'} />
    )
  }

  return (
    <div className={className ?? 'w-24 h-24 rounded-xl flex items-center justify-center bg-[#F5F5F7]'}>
      <User size={40} className="text-[#D5D5E2]" />
    </div>
  )
}
