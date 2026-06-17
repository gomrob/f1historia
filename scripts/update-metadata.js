// Shared helper: updates data/json/metadata.json with the current timestamp.
// Called at the end of any script that scrapes or regenerates data.

const fs = require('fs')
const path = require('path')

const METADATA_FILE = path.join(__dirname, '..', 'data', 'json', 'metadata.json')

function touchMetadata() {
  fs.writeFileSync(METADATA_FILE, JSON.stringify({ lastUpdated: new Date().toISOString() }, null, 2) + '\n')
}

module.exports = { touchMetadata }
