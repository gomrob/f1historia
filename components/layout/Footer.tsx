import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-[#E8E8EE] bg-white mt-12">
      <div className="max-w-[1400px] mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-[#0A0A0F]">F1 Historia</span>
          <span className="text-[#D5D5E2]">·</span>
          <span className="text-xs text-[#9CA3AF]">Guía histórica de la Fórmula 1 desde 1950</span>
        </div>
        <div className="flex items-center gap-4 text-xs text-[#9CA3AF]">
          <Link
            href="/fuentes"
            className="hover:text-[#378ADD] transition-colors"
          >
            Fuentes de datos
          </Link>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
