import { NextRequest, NextResponse } from 'next/server'
import { getCircuitWinners } from '@/lib/data-loader'

export async function GET(request: NextRequest) {
  const circuitId = request.nextUrl.searchParams.get('id')
  if (!circuitId) {
    return NextResponse.json({ error: 'Missing id' }, { status: 400 })
  }
  return NextResponse.json(getCircuitWinners(circuitId))
}
