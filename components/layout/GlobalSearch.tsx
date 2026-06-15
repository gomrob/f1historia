'use client'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, X, User, Wrench, MapPin, Trophy } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { SearchResult } from '@/lib/types'

const CATEGORY_META: Record<SearchResult['category'], { label: string; Icon: typeof User; color: string }> = {
  pilotos:    { label: 'Pilotos',    Icon: User,    color: '#27F4D2' },
  escuderias: { label: 'Escuderías', Icon: Wrench,  color: '#FF8000' },
  circuitos:  { label: 'Circuitos',  Icon: MapPin,  color: '#378ADD' },
  temporadas: { label: 'Temporadas', Icon: Trophy,  color: '#E8001D' },
}

const CATEGORY_ORDER: SearchResult['category'][] = ['pilotos', 'escuderias', 'circuitos', 'temporadas']

export function GlobalSearch() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Ctrl+K / Cmd+K opens the search, Escape closes it
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen(true)
      } else if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  // Focus input when opened
  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  // Click outside closes the dropdown
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  // Debounced search
  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      setLoading(false)
      return
    }
    setLoading(true)
    const timer = setTimeout(() => {
      fetch(`/api/search?q=${encodeURIComponent(query.trim())}`)
        .then(res => res.json())
        .then(data => setResults(data.results ?? []))
        .catch(() => setResults([]))
        .finally(() => setLoading(false))
    }, 150)
    return () => clearTimeout(timer)
  }, [query])

  function handleSelect(result: SearchResult) {
    setOpen(false)
    setQuery('')
    setResults([])
    router.push(result.href)
  }

  function handleClose() {
    setOpen(false)
    setQuery('')
    setResults([])
  }

  const grouped = CATEGORY_ORDER
    .map(category => ({ category, items: results.filter(r => r.category === category) }))
    .filter(g => g.items.length > 0)

  return (
    <div ref={containerRef} className="relative flex items-center">
      {/* Trigger / expandable input */}
      <div
        className={cn(
          'flex items-center bg-[#F5F5F7] border border-[#E8E8EE] rounded-lg overflow-hidden transition-all duration-300 ease-out',
          open ? 'w-[220px] sm:w-[320px] px-2' : 'w-9 px-0 justify-center cursor-pointer hover:bg-[#EFEFF3]'
        )}
        onClick={() => !open && setOpen(true)}
      >
        <Search size={16} className="text-[#6B6B80] flex-shrink-0 m-2" />
        <input
          ref={inputRef}
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Buscar pilotos, equipos, circuitos..."
          className={cn(
            'bg-transparent outline-none text-sm text-[#0A0A0F] placeholder:text-[#9CA3AF] transition-all duration-200',
            open ? 'w-full opacity-100 py-2' : 'w-0 opacity-0'
          )}
        />
        {open && (
          <button
            onClick={(e) => { e.stopPropagation(); handleClose() }}
            className="text-[#9CA3AF] hover:text-[#0A0A0F] flex-shrink-0 p-1"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Keyboard shortcut hint */}
      {!open && (
        <kbd className="hidden lg:inline-flex items-center gap-0.5 absolute -right-12 top-1/2 -translate-y-1/2 text-[10px] text-[#9CA3AF] bg-[#F5F5F7] border border-[#E8E8EE] rounded px-1.5 py-0.5 pointer-events-none">
          ⌘K
        </kbd>
      )}

      {/* Results dropdown */}
      {open && query.trim() && (
        <div className="absolute top-full mt-2 right-0 w-[90vw] sm:w-[420px] max-w-[420px] bg-white border border-[#E8E8EE] rounded-xl shadow-lg max-h-[70vh] overflow-y-auto z-50">
          {loading && (
            <div className="px-4 py-6 text-center text-sm text-[#9CA3AF]">Buscando...</div>
          )}
          {!loading && grouped.length === 0 && (
            <div className="px-4 py-6 text-center text-sm text-[#9CA3AF]">Sin resultados para &quot;{query}&quot;</div>
          )}
          {!loading && grouped.map(({ category, items }) => {
            const { label, Icon, color } = CATEGORY_META[category]
            return (
              <div key={category} className="py-2 border-b border-[#F0F0F3] last:border-b-0">
                <p className="px-4 pb-1 text-xs text-[#9CA3AF] font-medium uppercase tracking-widest">{label}</p>
                {items.map(item => (
                  <button
                    key={`${category}-${item.id}`}
                    onClick={() => handleSelect(item)}
                    className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-[#F5F5F7] transition-colors"
                  >
                    <span
                      className="flex items-center justify-center w-7 h-7 rounded-lg flex-shrink-0"
                      style={{ background: `${color}15`, color }}
                    >
                      <Icon size={14} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-[#0A0A0F] font-medium truncate">{item.label}</span>
                      {item.sublabel && (
                        <span className="block text-xs text-[#9CA3AF] truncate">{item.sublabel}</span>
                      )}
                    </span>
                  </button>
                ))}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
