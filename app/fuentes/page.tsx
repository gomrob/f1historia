import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fuentes de datos — F1 Historia',
  description: 'Fuentes y referencias utilizadas para construir la base de datos histórica de F1 Historia.',
}

const SOURCES = [
  {
    name: 'Jolpica F1 API',
    url: 'https://api.jolpi.ca/ergast/f1/',
    category: 'API de datos',
    description: 'Sucesor oficial de la Ergast Motor Racing Developer API. Proporciona resultados de carreras, clasificaciones de pilotos y constructores, calendarios, tiempos de vuelta y datos históricos completos desde 1950 hasta la temporada actual. Base principal de toda la información estadística de la aplicación.',
    color: '#378ADD',
  },
  {
    name: 'Wikimedia Commons',
    url: 'https://commons.wikimedia.org/',
    category: 'Imágenes',
    description: 'Repositorio de imágenes libres utilizado para las fotografías de pilotos, imágenes de circuitos, trazados de pistas y logos de escuderías. Todas las imágenes provienen de archivos con licencia libre (CC BY-SA u otras licencias compatibles).',
    color: '#3C8BD9',
  },
  {
    name: 'Wikipedia',
    url: 'https://www.wikipedia.org/',
    category: 'Datos biográficos',
    description: 'Fuente principal para datos biográficos de pilotos, historia de escuderías y circuitos. Utilizada para fechas de nacimiento, lugar de origen, carreras históricas y detalles contextuales que no están disponibles en las APIs de resultados.',
    color: '#000000',
  },
  {
    name: 'Formula1.com',
    url: 'https://www.formula1.com/',
    category: 'Datos oficiales',
    description: 'Página oficial de la Fórmula 1. Referencia para números de piloto oficiales, alineaciones de equipos, denominaciones oficiales de escuderías y datos actuales de la temporada en curso.',
    color: '#E8001D',
  },
  {
    name: 'flagcdn.com',
    url: 'https://flagcdn.com/',
    category: 'Banderas de países',
    description: 'Servicio CDN para banderas de países en formato SVG y PNG. Utilizado para mostrar las banderas de nacionalidad de pilotos, escuderías y circuitos en toda la aplicación.',
    color: '#22C55E',
  },
  {
    name: 'thebestf1.es',
    url: 'https://www.thebestf1.es/',
    category: 'Datos complementarios',
    description: 'Fuente complementaria en español especializada en Fórmula 1 histórica. Utilizada para verificar datos biográficos, estadísticas y contexto histórico de pilotos y escuderías.',
    color: '#F59E0B',
  },
  {
    name: 'formulaonehistory.com',
    url: 'https://www.formulaonehistory.com/',
    category: 'Datos complementarios',
    description: 'Archivo histórico de la Fórmula 1. Referencia para datos técnicos de coches, estadísticas de circuitos, récords de vueltas y datos históricos poco documentados de las primeras décadas del campeonato.',
    color: '#8B5CF6',
  },
]

export default function FuentesPage() {
  return (
    <div className="min-h-screen max-w-[1400px] mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#6B6B80] hover:text-[#0A0A0F] mb-6 transition-colors"
        >
          ← Volver al inicio
        </Link>
        <p className="section-eyebrow mb-1">Transparencia</p>
        <h1 className="text-4xl font-bold text-[#0A0A0F] mb-2">Fuentes de datos</h1>
        <p className="text-[#6B6B80] max-w-2xl">
          F1 Historia es un proyecto de código abierto que agrega y presenta datos históricos de la Fórmula 1.
          A continuación se detallan todas las fuentes utilizadas para construir la base de datos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SOURCES.map(source => (
          <div
            key={source.name}
            className="f1-card p-5"
            style={{ borderTopWidth: 3, borderTopColor: source.color }}
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div>
                <h2 className="text-base font-bold text-[#0A0A0F]">{source.name}</h2>
                <span
                  className="inline-block text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded mt-1"
                  style={{ background: `${source.color}18`, color: source.color }}
                >
                  {source.category}
                </span>
              </div>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#378ADD] hover:underline whitespace-nowrap flex-shrink-0 mt-1"
              >
                Visitar →
              </a>
            </div>
            <p className="text-sm text-[#6B6B80] leading-relaxed">{source.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 f1-card p-5 bg-[#F5F5F7]">
        <h2 className="text-sm font-semibold text-[#0A0A0F] mb-2">Nota sobre licencias</h2>
        <p className="text-xs text-[#6B6B80] leading-relaxed">
          Las imágenes procedentes de Wikimedia Commons se utilizan bajo sus respectivas licencias libres.
          Los datos estadísticos y de resultados son información factual de dominio público.
          F1 Historia no está afiliado con la Fórmula 1, la FIA, ni ninguno de los equipos o pilotos mencionados.
          Las marcas registradas y logotipos pertenecen a sus respectivos propietarios.
        </p>
      </div>
    </div>
  )
}
