const fs = require('fs')
const path = require('path')
const FILE = path.join(process.cwd(), 'data', 'circuits.ts')
let src = fs.readFileSync(FILE, 'utf-8')

for (const id of ['bahrain', 'imola', 'jeddah']) {
  const re = new RegExp(`(id: '${id}',[\\s\\S]*?)active: true`)
  const before = src
  src = src.replace(re, '$1active: false')
  if (src === before) throw new Error(`No change for ${id}`)
}

fs.writeFileSync(FILE, src)
console.log('done')

require('./update-metadata').touchMetadata()
