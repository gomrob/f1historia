import { Globe } from 'lucide-react'
import { NATIONALITY_TO_CODE, COUNTRY_TO_CODE, flagUrl } from '@/data/flags'

interface FlagIconProps {
  nationality?: string
  country?: string
  code?: string
  size?: number
  className?: string
}

/**
 * Renders a real flag image from flagcdn.com.
 * Accepts nationality (e.g. "British"), country (e.g. "UK"), or raw ISO code (e.g. "GB").
 * Falls back to a Globe icon when no mapping is found.
 */
export function FlagIcon({ nationality, country, code, size = 20, className = '' }: FlagIconProps) {
  const isoCode =
    code ??
    (nationality ? NATIONALITY_TO_CODE[nationality] : undefined) ??
    (country ? COUNTRY_TO_CODE[country] : undefined)

  if (!isoCode) {
    return <Globe size={size} className={`text-[#9CA3AF] inline-block ${className}`} />
  }

  const w = Math.round(size * 1.4)
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={flagUrl(isoCode)}
      alt={nationality ?? country ?? isoCode}
      width={w}
      height={size}
      className={`inline-block rounded-sm object-cover align-middle ${className}`}
      style={{ height: size, width: 'auto', minWidth: w }}
    />
  )
}
