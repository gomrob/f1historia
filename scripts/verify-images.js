#!/usr/bin/env node
/**
 * verify-images.js — Checks every image URL in drivers.ts, teams.ts, circuits.ts
 * and writes data/json/image-audit.json with results.
 * Usage: node scripts/verify-images.js
 */

const https = require('https')
const http = require('http')
const fs = require('fs')
const path = require('path')

// ── All URLs to verify ────────────────────────────────────────────────────────
const ENTRIES = [
  // --- drivers ---
  { file:'drivers.ts', field:'photo',     entity:'max_verstappen',    url:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Max_Verstappen_2023_British_GP_%28cropped%29.jpg/800px-Max_Verstappen_2023_British_GP_%28cropped%29.jpg' },
  { file:'drivers.ts', field:'photo',     entity:'lewis_hamilton',     url:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg/800px-Lewis_Hamilton_2016_Malaysia_2.jpg' },
  { file:'drivers.ts', field:'photo',     entity:'michael_schumacher', url:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Michael_Schumacher_2011_Suzuka.jpg/800px-Michael_Schumacher_2011_Suzuka.jpg' },
  { file:'drivers.ts', field:'helmetUrl', entity:'michael_schumacher', url:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Michael_Schumacher_helmet_2011.png/320px-Michael_Schumacher_helmet_2011.png' },
  { file:'drivers.ts', field:'photo',     entity:'charles_leclerc',    url:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Charles_Leclerc_2019_British_GP_%28cropped%29.jpg/800px-Charles_Leclerc_2019_British_GP_%28cropped%29.jpg' },
  { file:'drivers.ts', field:'photo',     entity:'carlos_sainz',       url:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Carlos_Sainz_Jr._2022_Silverstone.jpg/400px-Carlos_Sainz_Jr._2022_Silverstone.jpg' },
  { file:'drivers.ts', field:'photo',     entity:'albon',              url:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Alexander_Albon_2022_Bahrain.jpg/400px-Alexander_Albon_2022_Bahrain.jpg' },
  { file:'drivers.ts', field:'photo',     entity:'alonso',             url:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Fernando_Alonso_2021_Qatar.jpg/400px-Fernando_Alonso_2021_Qatar.jpg' },
  { file:'drivers.ts', field:'photo',     entity:'bottas',             url:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Valtteri_Bottas_2021_Styria.jpg/400px-Valtteri_Bottas_2021_Styria.jpg' },
  { file:'drivers.ts', field:'photo',     entity:'gasly',              url:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Pierre_Gasly_2022_Bahrain.jpg/400px-Pierre_Gasly_2022_Bahrain.jpg' },
  { file:'drivers.ts', field:'helmetUrl', entity:'hamilton',           url:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Lewis_Hamilton_2017_helmet.png/320px-Lewis_Hamilton_2017_helmet.png' },
  { file:'drivers.ts', field:'photo',     entity:'hulkenberg',         url:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Nico_H%C3%BClkenberg_2022_Bahrain.jpg/400px-Nico_H%C3%BClkenberg_2022_Bahrain.jpg' },
  { file:'drivers.ts', field:'photo',     entity:'leclerc',            url:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Charles_Leclerc_2021_Monza.jpg/400px-Charles_Leclerc_2021_Monza.jpg' },
  { file:'drivers.ts', field:'photo',     entity:'norris',             url:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Lando_Norris_2023_Belgium.jpg/400px-Lando_Norris_2023_Belgium.jpg' },
  { file:'drivers.ts', field:'helmetUrl', entity:'norris',             url:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Lando_Norris_helmet_2023.png/320px-Lando_Norris_helmet_2023.png' },
  { file:'drivers.ts', field:'photo',     entity:'ocon',               url:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Esteban_Ocon_2022_Bahrain.jpg/400px-Esteban_Ocon_2022_Bahrain.jpg' },
  { file:'drivers.ts', field:'photo',     entity:'perez',              url:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sergio_P%C3%A9rez_2022_Bahrain.jpg/400px-Sergio_P%C3%A9rez_2022_Bahrain.jpg' },
  { file:'drivers.ts', field:'photo',     entity:'piastri',            url:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oscar_Piastri_2023_Bahrain.jpg/400px-Oscar_Piastri_2023_Bahrain.jpg' },
  { file:'drivers.ts', field:'photo',     entity:'prost',              url:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Alain_Prost_1990_Canada.jpg/400px-Alain_Prost_1990_Canada.jpg' },
  { file:'drivers.ts', field:'photo',     entity:'raikkonen',          url:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Kimi_R%C3%A4ikk%C3%B6nen_2018_France.jpg/400px-Kimi_R%C3%A4ikk%C3%B6nen_2018_France.jpg' },
  { file:'drivers.ts', field:'photo',     entity:'russell',            url:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/George_Russell_2022_Bahrain.jpg/400px-George_Russell_2022_Bahrain.jpg' },
  { file:'drivers.ts', field:'photo',     entity:'sainz',              url:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Carlos_Sainz_Jr._2022_Silverstone.jpg/400px-Carlos_Sainz_Jr._2022_Silverstone.jpg' },
  { file:'drivers.ts', field:'photo',     entity:'senna',              url:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ayrton_Senna_1991_Germany.jpg/400px-Ayrton_Senna_1991_Germany.jpg' },
  { file:'drivers.ts', field:'helmetUrl', entity:'senna',              url:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Ayrton_Senna_helmet_1992.png/320px-Ayrton_Senna_helmet_1992.png' },
  { file:'drivers.ts', field:'photo',     entity:'stroll',             url:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Lance_Stroll_2022_Bahrain.jpg/400px-Lance_Stroll_2022_Bahrain.jpg' },
  { file:'drivers.ts', field:'photo',     entity:'verstappen',         url:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Max_Verstappen_2023_Belgium.jpg/400px-Max_Verstappen_2023_Belgium.jpg' },
  { file:'drivers.ts', field:'helmetUrl', entity:'verstappen',         url:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Max_Verstappen_2023_helmet.png/320px-Max_Verstappen_2023_helmet.png' },
  { file:'drivers.ts', field:'photo',     entity:'vettel',             url:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Sebastian_Vettel_2019_Germany.jpg/400px-Sebastian_Vettel_2019_Germany.jpg' },

  // --- team logos ---
  { file:'teams.ts', field:'logoUrl', entity:'ferrari',      url:'https://commons.wikimedia.org/wiki/Special:FilePath/Scuderia_Ferrari_Logo.svg' },
  { file:'teams.ts', field:'logoUrl', entity:'mclaren',      url:'https://commons.wikimedia.org/wiki/Special:FilePath/McLaren_Racing_logo.png' },
  { file:'teams.ts', field:'logoUrl', entity:'mercedes',     url:'https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-AMG_Petronas_F1_Team_logo_(2026).svg' },
  { file:'teams.ts', field:'logoUrl', entity:'redbull',      url:'https://commons.wikimedia.org/wiki/Special:FilePath/Red_Bull_Racing_-_2021_Logo.svg' },
  { file:'teams.ts', field:'logoUrl', entity:'williams',     url:'https://commons.wikimedia.org/wiki/Special:FilePath/Atlassian_Williams_F1_Team_logo.svg' },
  { file:'teams.ts', field:'logoUrl', entity:'lotus',        url:'https://commons.wikimedia.org/wiki/Special:FilePath/Lotus_F1_Team_logo.jpg' },
  { file:'teams.ts', field:'logoUrl', entity:'alpine',       url:'https://commons.wikimedia.org/wiki/Special:FilePath/Alpine_F1_Team_Logo.svg' },
  { file:'teams.ts', field:'logoUrl', entity:'alfa_romeo',   url:'https://commons.wikimedia.org/wiki/Special:FilePath/Alfa_Romeo_F1_Team_Stake_Logo.svg' },
  { file:'teams.ts', field:'logoUrl', entity:'maserati',     url:'https://commons.wikimedia.org/wiki/Special:FilePath/Maserati_logo.svg' },
  { file:'teams.ts', field:'logoUrl', entity:'brm',          url:'https://commons.wikimedia.org/wiki/Special:FilePath/BRM_logo.svg' },
  { file:'teams.ts', field:'logoUrl', entity:'brabham',      url:'https://commons.wikimedia.org/wiki/Special:FilePath/Brabham_logo.svg' },
  { file:'teams.ts', field:'logoUrl', entity:'tyrrell',      url:'https://commons.wikimedia.org/wiki/Special:FilePath/Tyrrell_Racing_logo.svg' },
  { file:'teams.ts', field:'logoUrl', entity:'march',        url:'https://commons.wikimedia.org/wiki/Special:FilePath/March_Engineering_logo.svg' },
  { file:'teams.ts', field:'logoUrl', entity:'shadow',       url:'https://commons.wikimedia.org/wiki/Special:FilePath/Shadow_Racing_Cars_logo.png' },
  { file:'teams.ts', field:'logoUrl', entity:'ligier',       url:'https://commons.wikimedia.org/wiki/Special:FilePath/Ligier_logo.svg' },
  { file:'teams.ts', field:'logoUrl', entity:'arrows',       url:'https://commons.wikimedia.org/wiki/Special:FilePath/Arrows_Grand_Prix_International_logo.svg' },
  { file:'teams.ts', field:'logoUrl', entity:'minardi',      url:'https://commons.wikimedia.org/wiki/Special:FilePath/Minardi_logo.svg' },
  { file:'teams.ts', field:'logoUrl', entity:'benetton',     url:'https://commons.wikimedia.org/wiki/Special:FilePath/Benetton_Formula_logo.svg' },
  { file:'teams.ts', field:'logoUrl', entity:'jordan',       url:'https://commons.wikimedia.org/wiki/Special:FilePath/Jordan_Grand_Prix_logo.svg' },
  { file:'teams.ts', field:'logoUrl', entity:'bar',          url:'https://commons.wikimedia.org/wiki/Special:FilePath/BAR_logo.svg' },
  { file:'teams.ts', field:'logoUrl', entity:'brawn',        url:'https://commons.wikimedia.org/wiki/Special:FilePath/Brawn_GP_logo.svg' },
  { file:'teams.ts', field:'logoUrl', entity:'hrt',          url:'https://commons.wikimedia.org/wiki/Special:FilePath/HRT_Formula_1_Team_logo.png' },
  { file:'teams.ts', field:'logoUrl', entity:'caterham',     url:'https://commons.wikimedia.org/wiki/Special:FilePath/Caterham_F1_Team_logo.svg' },
  { file:'teams.ts', field:'logoUrl', entity:'marussia',     url:'https://commons.wikimedia.org/wiki/Special:FilePath/Marussia_F1_Team_logo.svg' },
  { file:'teams.ts', field:'logoUrl', entity:'force_india',  url:'https://commons.wikimedia.org/wiki/Special:FilePath/Force_India.svg' },
  { file:'teams.ts', field:'logoUrl', entity:'toro_rosso',   url:'https://commons.wikimedia.org/wiki/Special:FilePath/Scuderia_Toro_Rosso_Logo.svg' },

  // --- team car images ---
  { file:'teams.ts', field:'carImageUrl', entity:'ferrari/2022',   url:'https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari_F1-75_2022.jpg' },
  { file:'teams.ts', field:'carImageUrl', entity:'ferrari/2023',   url:'https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari_SF-23_2023.jpg' },
  { file:'teams.ts', field:'carImageUrl', entity:'ferrari/2024',   url:'https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari_SF-24_2024_F1_car.jpg' },
  { file:'teams.ts', field:'carImageUrl', entity:'mclaren/2023',   url:'https://commons.wikimedia.org/wiki/Special:FilePath/McLaren_MCL60_2023.jpg' },
  { file:'teams.ts', field:'carImageUrl', entity:'mclaren/2024',   url:'https://commons.wikimedia.org/wiki/Special:FilePath/McLaren_MCL38_2024.jpg' },
  { file:'teams.ts', field:'carImageUrl', entity:'mercedes/2023',  url:'https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes_AMG_W14_2023.jpg' },
  { file:'teams.ts', field:'carImageUrl', entity:'mercedes/2024',  url:'https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes_AMG_W15_2024.jpg' },
  { file:'teams.ts', field:'carImageUrl', entity:'redbull/2023',   url:'https://commons.wikimedia.org/wiki/Special:FilePath/Red_Bull_Racing_RB19_2023.jpg' },
  { file:'teams.ts', field:'carImageUrl', entity:'redbull/2024',   url:'https://commons.wikimedia.org/wiki/Special:FilePath/Red_Bull_Racing_RB20_2024.jpg' },
  { file:'teams.ts', field:'carImageUrl', entity:'williams/2025',  url:'https://commons.wikimedia.org/wiki/Special:FilePath/Williams_FW47_2025.jpg' },

  // --- circuits ---
  { file:'circuits.ts', field:'photoUrl',     entity:'monza',       url:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Autodromo_Nazionale_Monza_DSC_0449.jpg/1280px-Autodromo_Nazionale_Monza_DSC_0449.jpg' },
  { file:'circuits.ts', field:'trackImageUrl',entity:'monza',       url:'https://commons.wikimedia.org/wiki/Special:FilePath/F1_circuits_2014-2018_-_Autodromo_Nazionale_Monza_(version_2).svg' },
  { file:'circuits.ts', field:'photoUrl',     entity:'monaco',      url:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Monte_carlo_formula1_2007.jpg/1280px-Monte_carlo_formula1_2007.jpg' },
  { file:'circuits.ts', field:'trackImageUrl',entity:'monaco',      url:'https://commons.wikimedia.org/wiki/Special:FilePath/F1_circuits_2014-2018_-_Circuit_de_Monaco_(version_2).svg' },
  { file:'circuits.ts', field:'photoUrl',     entity:'silverstone',  url:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Silverstone_2019.jpg/1280px-Silverstone_2019.jpg' },
  { file:'circuits.ts', field:'trackImageUrl',entity:'silverstone',  url:'https://commons.wikimedia.org/wiki/Special:FilePath/F1_circuits_2014-2018_-_Silverstone_(version_2).svg' },
  { file:'circuits.ts', field:'photoUrl',     entity:'spa',         url:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Spa-Francorchamps_Aerial.jpg/1280px-Spa-Francorchamps_Aerial.jpg' },
  { file:'circuits.ts', field:'trackImageUrl',entity:'spa',         url:'https://commons.wikimedia.org/wiki/Special:FilePath/F1_circuits_2014-2018_-_Circuit_de_Spa-Francorchamps_(version_2).svg' },
  { file:'circuits.ts', field:'logoUrl',      entity:'spa',         url:'https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Circuit_de_Spa_Francorchamps.svg' },
  { file:'circuits.ts', field:'photoUrl',     entity:'suzuka',      url:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Suzuka_Circuit_Aerial_photo.jpg/1280px-Suzuka_Circuit_Aerial_photo.jpg' },
  { file:'circuits.ts', field:'trackImageUrl',entity:'suzuka',      url:'https://commons.wikimedia.org/wiki/Special:FilePath/F1_circuits_2014-2018_-_Suzuka_Circuit_(version_2).svg' },
  { file:'circuits.ts', field:'photoUrl',     entity:'interlagos',  url:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/AereoAutodromo.jpg/1280px-AereoAutodromo.jpg' },
  { file:'circuits.ts', field:'trackImageUrl',entity:'interlagos',  url:"https://commons.wikimedia.org/wiki/Special:FilePath/F1_circuits_2014-2018_-_Aut%C3%B3dromo_Jos%C3%A9_Carlos_Pace_(version_2).svg" },
  { file:'circuits.ts', field:'photoUrl',     entity:'bahrain',     url:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Bahrain_International_Circuit_from_above.jpg/1280px-Bahrain_International_Circuit_from_above.jpg' },
  { file:'circuits.ts', field:'trackImageUrl',entity:'bahrain',     url:'https://commons.wikimedia.org/wiki/Special:FilePath/Remix_of_F1_circuits_2014-2018_-_Bahrain_International_Circuit_(version_2).svg' },
  { file:'circuits.ts', field:'photoUrl',     entity:'yas_marina',  url:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Yas_Marina_Circuit_from_above.jpg/1280px-Yas_Marina_Circuit_from_above.jpg' },
  { file:'circuits.ts', field:'trackImageUrl',entity:'yas_marina',  url:'https://commons.wikimedia.org/wiki/Special:FilePath/F1_circuits_2014-2018_-_Yas_Marina_Circuit_(version_2).svg' },
  { file:'circuits.ts', field:'photoUrl',     entity:'imola',       url:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Imola_Racetrack.jpg/1280px-Imola_Racetrack.jpg' },
  { file:'circuits.ts', field:'trackImageUrl',entity:'imola',       url:'https://commons.wikimedia.org/wiki/Special:FilePath/Imola_2009.svg' },
  { file:'circuits.ts', field:'logoUrl',      entity:'zandvoort',   url:'https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Circuit_Park_Zandvoort.svg' },
  { file:'circuits.ts', field:'photoUrl',     entity:'zandvoort',   url:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Zandvoort_circuit_from_the_air.jpg/1280px-Zandvoort_circuit_from_the_air.jpg' },
  { file:'circuits.ts', field:'photoUrl',     entity:'jeddah',      url:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Jeddah_Corniche_Circuit_aerial_view.jpg/1280px-Jeddah_Corniche_Circuit_aerial_view.jpg' },
  { file:'circuits.ts', field:'photoUrl',     entity:'miami',       url:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Hard_Rock_Stadium_%28aerial%29.jpg/1280px-Hard_Rock_Stadium_%28aerial%29.jpg' },
  { file:'circuits.ts', field:'photoUrl',     entity:'vegas',       url:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Las_Vegas_Strip_at_night.jpg/1280px-Las_Vegas_Strip_at_night.jpg' },
  { file:'circuits.ts', field:'photoUrl',     entity:'losail',      url:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Lusail_International_Circuit.jpg/1280px-Lusail_International_Circuit.jpg' },
  { file:'circuits.ts', field:'photoUrl',     entity:'albert_park', url:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Albert_Park_Circuit_from_the_air.jpg/1280px-Albert_Park_Circuit_from_the_air.jpg' },
  { file:'circuits.ts', field:'trackImageUrl',entity:'albert_park', url:'https://commons.wikimedia.org/wiki/Special:FilePath/F1_circuits_2014-2018_-_Melbourne_Grand_Prix_Circuit_(version_2).svg' },
  { file:'circuits.ts', field:'photoUrl',     entity:'americas',    url:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/COTA_Aerial_View.jpg/1280px-COTA_Aerial_View.jpg' },
  { file:'circuits.ts', field:'trackImageUrl',entity:'americas',    url:'https://commons.wikimedia.org/wiki/Special:FilePath/F1_circuits_2014-2018_-_Circuit_of_the_Americas_(version_2).svg' },
  { file:'circuits.ts', field:'logoUrl',      entity:'americas',    url:'https://commons.wikimedia.org/wiki/Special:FilePath/Circuit_of_the_Americas_logo.svg' },
  { file:'circuits.ts', field:'photoUrl',     entity:'baku',        url:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Baku_City_Circuit_aerial.jpg/1280px-Baku_City_Circuit_aerial.jpg' },
  { file:'circuits.ts', field:'trackImageUrl',entity:'baku',        url:'https://commons.wikimedia.org/wiki/Special:FilePath/F1_circuits_2014-2018_-_Baku_City_Circuit_(version_2).svg' },
  { file:'circuits.ts', field:'photoUrl',     entity:'catalunya',   url:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Circuit_de_Barcelona-Catalunya.jpg/1280px-Circuit_de_Barcelona-Catalunya.jpg' },
  { file:'circuits.ts', field:'trackImageUrl',entity:'catalunya',   url:'https://commons.wikimedia.org/wiki/Special:FilePath/F1_circuits_2014-2018_-_Circuit_de_Barcelona-Catalunya_(version_2).svg' },
  { file:'circuits.ts', field:'photoUrl',     entity:'hungaroring',  url:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Hungaroring_from_the_air.jpg/1280px-Hungaroring_from_the_air.jpg' },
  { file:'circuits.ts', field:'trackImageUrl',entity:'hungaroring',  url:'https://commons.wikimedia.org/wiki/Special:FilePath/F1_circuits_2014-2018_-_Hungaroring_(version_2).svg' },
  { file:'circuits.ts', field:'photoUrl',     entity:'marina_bay',  url:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Singapore_GP_from_above.jpg/1280px-Singapore_GP_from_above.jpg' },
  { file:'circuits.ts', field:'trackImageUrl',entity:'marina_bay',  url:'https://commons.wikimedia.org/wiki/Special:FilePath/F1_circuits_2014-2018_-_Marina_Bay_Street_Circuit_(version_2).svg' },
  { file:'circuits.ts', field:'photoUrl',     entity:'red_bull_ring', url:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Red_Bull_Ring_aerial.jpg/1280px-Red_Bull_Ring_aerial.jpg' },
  { file:'circuits.ts', field:'trackImageUrl',entity:'red_bull_ring', url:'https://commons.wikimedia.org/wiki/Special:FilePath/F1_circuits_2014-2018_-_Red_Bull_Ring.svg' },
  { file:'circuits.ts', field:'photoUrl',     entity:'rodriguez',   url:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Autodromo_Hermanos_Rodriguez_aerial.jpg/1280px-Autodromo_Hermanos_Rodriguez_aerial.jpg' },
  { file:'circuits.ts', field:'trackImageUrl',entity:'rodriguez',   url:"https://commons.wikimedia.org/wiki/Special:FilePath/F1_circuits_2014-2018_-_Aut%C3%B3dromo_Hermanos_Rodr%C3%ADguez_(version_2).svg" },
  { file:'circuits.ts', field:'photoUrl',     entity:'shanghai',    url:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Shanghai_International_Circuit.jpg/1280px-Shanghai_International_Circuit.jpg' },
  { file:'circuits.ts', field:'trackImageUrl',entity:'shanghai',    url:'https://commons.wikimedia.org/wiki/Special:FilePath/F1_circuits_2014-2018_-_Shanghai_International_Circuit_(version_2).svg' },
  { file:'circuits.ts', field:'photoUrl',     entity:'villeneuve',  url:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Circuit_Gilles_Villeneuve_aerial.jpg/1280px-Circuit_Gilles_Villeneuve_aerial.jpg' },
  { file:'circuits.ts', field:'trackImageUrl',entity:'villeneuve',  url:'https://commons.wikimedia.org/wiki/Special:FilePath/F1_circuits_2014-2018_-_Circuit_Gilles_Villeneuve_(version_2).svg' },
  { file:'circuits.ts', field:'photoUrl',     entity:'las_vegas',   url:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Las_Vegas_Strip_at_night.jpg/1280px-Las_Vegas_Strip_at_night.jpg' },
]

// ── HTTP check ────────────────────────────────────────────────────────────────
function checkUrl(url) {
  return new Promise((resolve) => {
    const timeout = setTimeout(() => resolve({ status: 'timeout', code: null, contentType: null }), 10000)
    const lib = url.startsWith('https') ? https : http
    const req = lib.request(url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0 (compatible; F1HistoriaBot/1.0)' } }, (res) => {
      clearTimeout(timeout)
      const code = res.statusCode
      const ct = res.headers['content-type'] || ''
      if (code >= 300 && code < 400 && res.headers.location) {
        // Follow one redirect
        checkUrl(res.headers.location).then(resolve)
        return
      }
      const isImage = /^image\//i.test(ct) || url.match(/\.(svg|png|jpg|jpeg|webp|gif)(\?|$)/i)
      if (code === 200 && isImage) resolve({ status: 'ok', code, contentType: ct })
      else if (code === 200) resolve({ status: 'ok_no_image_ct', code, contentType: ct })
      else resolve({ status: 'broken', code, contentType: ct })
    })
    req.on('error', (e) => { clearTimeout(timeout); resolve({ status: 'error', code: null, contentType: null, error: e.message }) })
    req.end()
  })
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`Checking ${ENTRIES.length} URLs...\n`)
  const results = []
  let ok = 0, broken = 0, timeout = 0

  for (const entry of ENTRIES) {
    process.stdout.write(`  ${entry.entity} [${entry.field}] ... `)
    const result = await checkUrl(entry.url)
    const record = { ...entry, ...result }
    results.push(record)
    if (result.status === 'ok' || result.status === 'ok_no_image_ct') { ok++; console.log(`✓ ${result.code}`) }
    else if (result.status === 'timeout') { timeout++; console.log('⏱ TIMEOUT') }
    else { broken++; console.log(`✗ ${result.code || result.error}`) }
  }

  const summary = { checked: ENTRIES.length, ok, broken, timeout, timestamp: new Date().toISOString() }
  const out = { summary, results }
  const outPath = path.join(__dirname, '..', 'data', 'json', 'image-audit.json')
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2))
  console.log(`\n── Summary ──`)
  console.log(`  OK:      ${ok}`)
  console.log(`  Broken:  ${broken}`)
  console.log(`  Timeout: ${timeout}`)
  console.log(`\nReport saved to data/json/image-audit.json`)
}

main().catch(console.error)
