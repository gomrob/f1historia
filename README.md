# F1 Historia — Guía Histórica Interactiva de la Fórmula 1

Aplicación web completa con la historia de la Fórmula 1 desde 1950 hasta la actualidad.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** — sistema de diseño oscuro personalizado
- **Framer Motion** — animaciones de transición
- **Three.js + React Three Fiber** — visualizador 3D de coches (fase 2)
- **Recharts / D3** — gráficos de clasificación
- **Leaflet** — mapa interactivo de circuitos (fase 2)

## Secciones

| Sección | Ruta | Estado |
|---|---|---|
| Inicio | `/` | ✅ |
| Temporadas | `/temporadas` | ✅ |
| Circuitos | `/circuitos` | ✅ |
| Pilotos | `/pilotos` | ✅ |
| Escuderías | `/escuderias` | ✅ |
| Hall of Fame | `/hall-of-fame` | ✅ |

## Instalación

```bash
cd f1historia
npm install
npm run dev
```

La app estará disponible en `http://localhost:3000`

## Estructura de datos

```
data/
  drivers.ts    — Pilotos históricos con estadísticas completas
  teams.ts      — Escuderías con historia por temporada
  circuits.ts   — Circuitos con historial de carreras
  seasons.ts    — Temporadas con entradas de equipos y pilotos
```

## Próximas fases

### Fase 2 — Datos completos
- [ ] Integración con Ergast API (resultados 1950-2024)
- [ ] OpenF1 API (datos 2023-2025 en tiempo real)
- [ ] Completar datos de todas las temporadas históricas

### Fase 3 — Visualización avanzada
- [ ] Visor 3D de coches con Three.js/R3F
- [ ] Mapa mundial interactivo de circuitos (Leaflet)
- [ ] Trazados SVG reales de cada circuito
- [ ] Gráfico de clasificación animado por temporada

### Fase 4 — Contenido rico
- [ ] Fotos históricas via Wikimedia API
- [ ] Bios expandidas con Wikipedia API
- [ ] Galería de libreas por temporada
- [ ] Comparador de pilotos side-by-side

## Convenciones

- Colores de equipos en `lib/types.ts` → `TEAM_COLORS`
- Todos los componentes en `components/`
- Datos estáticos en `data/`
- Utilidades en `lib/utils.ts`
