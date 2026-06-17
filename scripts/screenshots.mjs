import { chromium } from '@playwright/test'
import { writeFileSync, mkdirSync } from 'fs'

const BASE = 'http://localhost:3002'
const OUT = 'screenshots'
mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch()
const page = await browser.newPage()
await page.setViewportSize({ width: 1440, height: 900 })

async function shot(name, url, waitFor) {
  await page.goto(BASE + url, { waitUntil: 'networkidle' })
  if (waitFor) await page.waitForSelector(waitFor, { timeout: 10000 }).catch(() => {})
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: false })
  console.log(`✓ ${name}`)
}

// Pilotos — check badges
await shot('01-pilotos', '/pilotos')

// Temporadas 2026 — equipos tab
await shot('02-temporadas-2026', '/temporadas?year=2026', '.f1-card')

// Switch to equipos tab on temporadas
await page.goto(BASE + '/temporadas?year=2026', { waitUntil: 'networkidle' })
const equiposBtn = page.getByText('Equipos & Pilotos')
if (await equiposBtn.count() > 0) {
  await equiposBtn.click()
  await page.waitForTimeout(500)
  await page.screenshot({ path: `${OUT}/03-temporadas-equipos.png`, fullPage: false })
  console.log('✓ 03-temporadas-equipos')
}

// Circuitos — main list
await shot('04-circuitos', '/circuitos', '.f1-card')

// Circuitos — Monaco detail
await page.goto(BASE + '/circuitos', { waitUntil: 'networkidle' })
const monacoCard = page.getByText('Circuit de Monaco').first()
if (await monacoCard.count() > 0) {
  await monacoCard.click()
  await page.waitForLoadState('networkidle')
  await page.waitForTimeout(2500)
  await page.screenshot({ path: `${OUT}/05-circuito-monaco.png`, fullPage: true })
  console.log('✓ 05-circuito-monaco')
}

// Circuitos — Miami detail (has SVG track)
await page.goto(BASE + '/circuitos', { waitUntil: 'networkidle' })
const miamiCard = page.getByText('Miami International Autodrome').first()
if (await miamiCard.count() > 0) {
  await miamiCard.click()
  await page.waitForTimeout(600)
  await page.screenshot({ path: `${OUT}/06-circuito-miami.png`, fullPage: false })
  console.log('✓ 06-circuito-miami')
}

await browser.close()
console.log('\nDone! Screenshots saved to ./' + OUT)
