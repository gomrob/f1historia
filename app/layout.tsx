import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'F1 Historia — Guía Histórica de la Fórmula 1',
  description: 'La guía histórica interactiva más completa de la Fórmula 1. Temporadas, pilotos, escuderías, circuitos y hall of fame desde 1950.',
  keywords: 'Formula 1, F1, historia, estadísticas, pilotos, escuderías, circuitos',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[#FAFAFA] text-[#0A0A0F] antialiased">
        <Navbar />
        <main className="pt-[60px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
