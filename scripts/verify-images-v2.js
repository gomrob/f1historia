#!/usr/bin/env node
/**
 * verify-images-v2.js — Extracts ALL image URLs directly from data files
 * and checks each one via HTTP. Writes data/json/image-audit.json.
 */

const https = require('https')
const http  = require('http')
const fs    = require('fs')
const path  = require('path')

const BASE = path.join(__dirname, '..')

// ── Extract URLs from source files ────────────────────────────────────────────

function extractUrls(filePath, fieldNames) {
  const content = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' })
  const results = []
  const pattern = new RegExp(`(${fieldNames.join('|')}):\\s*['"]([^'"]+)['"]`, 'g')
  let m
  while ((m = pattern.exec(content)) !== null) {
    const url = m[2]
    if (url.startsWith('http')) {
      results.push({ field: m[1], url, file: path.basename(filePath) })
    }
  }
  return results
}

// drivers.ts has Mojibake — use latin1 as read mode
function extractUrlsBinary(filePath, fieldNames) {
  const buf = fs.readFileSync(filePath)
  const content = buf.toString('latin1') // safe for ASCII URL extraction
  const results = []
  const pattern = new RegExp(`(${fieldNames.join('|')}):\\s*['"]([^'"]+)['"]`, 'g')
  let m
  while ((m = pattern.exec(content)) !== null) {
    const url = m[2]
    if (url.startsWith('http')) {
      results.push({ field: m[1], url, file: 'drivers.ts' })
    }
  }
  return results
}

const entries = [
  ...extractUrlsBinary(path.join(BASE, 'data', 'drivers.ts'), ['photo', 'helmetUrl']),
  ...extractUrls(path.join(BASE, 'data', 'teams.ts'),   ['logoUrl', 'carImageUrl']),
  ...extractUrls(path.join(BASE, 'data', 'circuits.ts'), ['photoUrl', 'trackImageUrl', 'logoUrl']),
]

console.log(`Found ${entries.length} image URLs to verify.\n`)

// ── HTTP check ─────────────────────────────────────────────────────────────

function checkUrl(url) {
  return new Promise((resolve) => {
    const TO = setTimeout(() => resolve({ status: 'timeout', code: null, ct: null }), 12000)
    const lib = url.startsWith('https') ? https : http
    const req = lib.request(url, {
      method: 'HEAD',
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; F1HistoriaAudit/2.0; +https://f1historia.vercel.app)' }
    }, (res) => {
      clearTimeout(TO)
      const code = res.statusCode
      const ct   = res.headers['content-type'] || ''
      if (code >= 300 && code < 400 && res.headers.location) {
        checkUrl(res.headers.location).then(resolve)
        return
      }
      const isImg = /^image\//i.test(ct) || /\.(svg|png|jpg|jpeg|webp|gif)(\?|$)/i.test(url)
      if (code === 200 && isImg) resolve({ status: 'ok', code, ct })
      else if (code === 200) resolve({ status: 'ok_no_img_ct', code, ct })
      else resolve({ status: 'broken', code, ct })
    })
    req.on('error', (e) => { clearTimeout(TO); resolve({ status: 'error', code: null, ct: null, err: e.message }) })
    req.end()
  })
}

// ── Main ──────────────────────────────────────────────────────────────────

async function main() {
  const results = []
  let ok = 0, broken = 0, timedOut = 0

  for (const entry of entries) {
    process.stdout.write(`  ${entry.file}:${entry.field} ... `)
    const r = await checkUrl(entry.url)
    const rec = { ...entry, ...r }
    results.push(rec)
    if (r.status === 'ok' || r.status === 'ok_no_img_ct') { ok++; console.log(`OK ${r.code}`) }
    else if (r.status === 'timeout') { timedOut++; console.log('TIMEOUT') }
    else { broken++; console.log(`BROKEN ${r.code || r.err}`) }
  }

  const summary = { checked: entries.length, ok, broken, timeout: timedOut, timestamp: new Date().toISOString() }
  const brokenList = results.filter(r => r.status !== 'ok' && r.status !== 'ok_no_img_ct')
  const out = { summary, broken_urls: brokenList, all_results: results }

  const outPath = path.join(BASE, 'data', 'json', 'image-audit.json')
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2))

  console.log(`\n── Final audit ──`)
  console.log(`  Total:   ${entries.length}`)
  console.log(`  OK:      ${ok}`)
  console.log(`  Broken:  ${broken}`)
  console.log(`  Timeout: ${timedOut}`)
  if (brokenList.length > 0) {
    console.log(`\nBroken URLs:`)
    brokenList.forEach(r => console.log(`  [${r.status} ${r.code}] ${r.file}:${r.field} — ${r.url}`))
  }
  console.log(`\nReport saved to data/json/image-audit.json`)
}

main().catch(console.error)
