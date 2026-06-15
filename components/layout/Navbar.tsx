'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Trophy, MapPin, User, Wrench, Star, Menu, X, Flag } from 'lucide-react'
import { cn } from '@/lib/utils'
import { GlobalSearch } from './GlobalSearch'

const NAV_ITEMS = [
  { href: '/temporadas', label: 'Temporadas',   Icon: Trophy,  color: '#E8001D' },
  { href: '/circuitos',  label: 'Circuitos',    Icon: MapPin,  color: '#378ADD' },
  { href: '/pilotos',    label: 'Pilotos',      Icon: User,    color: '#27F4D2' },
  { href: '/escuderias', label: 'Escuderías',   Icon: Wrench,  color: '#FF8000' },
  { href: '/hall-of-fame', label: 'Hall of Fame', Icon: Star,  color: '#F5C518' },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E8E8EE]">
      <nav className="max-w-[1400px] mx-auto px-4 h-[60px] flex items-center gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="flex items-center justify-center w-8 h-8 bg-[#E8001D] rounded-md">
            <Flag size={16} className="text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight">
            <span className="text-[#E8001D]">F1</span>
            <span className="text-[#0A0A0F]">Historia</span>
          </span>
        </Link>

        {/* Divider */}
        <div className="h-5 w-px bg-[#E8E8EE] hidden md:block" />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 flex-1">
          {NAV_ITEMS.map(({ href, label, Icon, color }) => {
            const active = pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  active
                    ? 'text-[#0A0A0F] bg-[#F5F5F7]'
                    : 'text-[#6B6B80] hover:text-[#0A0A0F] hover:bg-[#F5F5F7]/60'
                )}
                style={active ? { color } : {}}
              >
                <Icon size={15} style={{ color: active ? color : undefined }} />
                {label}
              </Link>
            )
          })}
        </div>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-3">
          <span className="hidden lg:block text-xs text-[#6B6B80] bg-[#F5F5F7] px-2 py-1 rounded border border-[#E8E8EE]">
            1950 — 2025
          </span>

          <GlobalSearch />

          {/* Mobile menu button */}
          <button
            className="md:hidden p-1.5 text-[#6B6B80] hover:text-[#0A0A0F]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#E8E8EE] px-4 py-3">
          {NAV_ITEMS.map(({ href, label, Icon, color }) => {
            const active = pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors',
                  active ? 'text-[#0A0A0F] bg-[#F5F5F7]' : 'text-[#6B6B80]'
                )}
                style={active ? { color } : {}}
              >
                <Icon size={16} style={{ color: active ? color : undefined }} />
                {label}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}
