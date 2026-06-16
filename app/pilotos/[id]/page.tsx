import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Trophy, Zap, Medal, Timer, Flag } from 'lucide-react'
import { DRIVERS } from '@/data/drivers'
import { getDriverSeasonHistory } from '@/lib/data-loader'
import { DriverPhoto } from '@/components/ui/DriverPhoto'
import { FlagIcon } from '@/components/ui/FlagIcon'

export default function PilotoDetailPage({ params }: { params: { id: string } }) {
  const driver = DRIVERS.find(d => d.id === params.id)
  if (!driver) notFound()

  const seasons = getDriverSeasonHistory(driver.id)

  return (
    <div className="min-h-screen max-w-[1400px] mx-auto px-4 py-8">
      <Link
        href="/pilotos"
        className="flex items-center gap-2 text-sm text-[#6B6B80] hover:text-[#0A0A0F] mb-6 transition-colors"
      >
        ← Volver a pilotos
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="f1-card p-6" style={{ borderTopWidth: 3, borderTopColor: '#27F4D2' }}>
            <div className="flex items-start gap-4 mb-4">
              <DriverPhoto name={driver.name} className="w-24 h-24 rounded-xl object-cover flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-2xl font-bold text-[#0A0A0F]">{driver.name}</h2>
                  <FlagIcon nationality={driver.nationality} size={24} />
                </div>
                <p className="text-[#6B6B80]">{driver.nationality}</p>
                {driver.active && (
                  <span className="inline-flex items-center gap-1 mt-2 text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> Activo
                  </span>
                )}
              </div>
              {driver.number && (
                <div className="text-5xl font-bold text-[#27F4D2] opacity-80 flex-shrink-0">#{driver.number}</div>
              )}
            </div>

            {driver.bio && (
              <p className="text-sm text-[#6B6B80] leading-relaxed mb-4 border-l-2 pl-4" style={{ borderColor: '#27F4D2' }}>
                {driver.bio}
              </p>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <StatBox label="Campeonatos" value={driver.championships} Icon={Trophy} color="#F5C518" />
              <StatBox label="Victorias" value={driver.wins} Icon={Trophy} color="#F5C518" />
              <StatBox label="Poles" value={driver.poles} Icon={Zap} color="#378ADD" />
              <StatBox label="Podiums" value={driver.podiums} Icon={Medal} color="#C0C0C0" />
              <StatBox label="V. rápidas" value={driver.fastestLaps} Icon={Timer} color="#9D6EF5" />
              <StatBox label="Carreras" value={driver.racesEntered} Icon={Flag} color="#9CA3AF" />
            </div>

            {driver.dateOfBirth && (
              <div className="mt-4 grid grid-cols-2 gap-3">
                <InfoItem label="Nacimiento" value={new Date(driver.dateOfBirth).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })} />
                {driver.placeOfBirth && <InfoItem label="Lugar" value={driver.placeOfBirth} />}
              </div>
            )}
          </div>
        </div>

        {/* Season history */}
        <div className="f1-card p-5">
          <p className="section-eyebrow mb-4">Historial de temporadas</p>
          {seasons.length > 0 ? (
            <div className="space-y-2 max-h-[600px] overflow-y-auto">
              {seasons.map(s => (
                <div key={s.year} className="bg-[#F5F5F7] rounded px-3 py-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#27F4D2]">{s.year}</span>
                    <span className="text-xs text-[#9CA3AF]">P{s.position}</span>
                  </div>
                  <p className="text-sm font-medium text-[#0A0A0F] mt-0.5">{s.constructorNames.join(' / ')}</p>
                  <p className="text-xs text-[#6B6B80]">{s.points} pts · {s.wins} victorias</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-[#9CA3AF]">No hay datos de temporadas disponibles</p>
          )}
        </div>
      </div>
    </div>
  )
}

function StatBox({ label, value, Icon, color }: { label: string; value: number; Icon: any; color: string }) {
  return (
    <div className="bg-[#F5F5F7] rounded-lg p-3">
      <div className="flex items-center gap-1.5 mb-1">
        <Icon size={12} style={{ color }} />
        <span className="text-[10px] text-[#9CA3AF] uppercase tracking-wide">{label}</span>
      </div>
      <div className="text-xl font-bold text-[#0A0A0F]">{value}</div>
    </div>
  )
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center bg-[#F5F5F7] rounded px-3 py-2 text-sm">
      <span className="text-[#9CA3AF]">{label}</span>
      <span className="text-[#0A0A0F] font-medium">{value}</span>
    </div>
  )
}
