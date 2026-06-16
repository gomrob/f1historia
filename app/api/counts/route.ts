import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const JSON_DIR = path.join(process.cwd(), 'data', 'json')

function readJson<T>(relPath: string): T {
  return JSON.parse(fs.readFileSync(path.join(JSON_DIR, relPath), 'utf-8'))
}

export async function GET() {
  const drivers = readJson<{ MRData: { DriverTable: { Drivers: unknown[] } } }>('drivers.json')
  const circuits = readJson<{ MRData: { CircuitTable: { Circuits: unknown[] } } }>('circuits.json')
  const constructors = readJson<{ MRData: { ConstructorTable: { Constructors: unknown[] } } }>('constructors.json')
  const seasons = readJson<{ MRData: { SeasonTable: { Seasons: unknown[] } } }>('seasons.json')

  return NextResponse.json({
    pilotos: drivers.MRData.DriverTable.Drivers.length,
    circuitos: circuits.MRData.CircuitTable.Circuits.length,
    escuderias: constructors.MRData.ConstructorTable.Constructors.length,
    temporadas: seasons.MRData.SeasonTable.Seasons.length,
  })
}
