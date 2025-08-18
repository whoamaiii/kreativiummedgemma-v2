#!/usr/bin/env node
/*
  Lints JSON locale files under src/locales/** by attempting JSON.parse.
  Exits with non-zero on the first failure, printing the file and position.
*/
const fs = require('fs');
const path = require('path');

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else yield p;
  }
}

const root = path.resolve(process.cwd(), 'src', 'locales');
if (!fs.existsSync(root)) {
  console.log('No src/locales directory found, skipping');
  process.exit(0);
}

for (const file of walk(root)) {
  if (!file.endsWith('.json')) continue;
  const content = fs.readFileSync(file, 'utf8');
  try {
    JSON.parse(content);
  } catch (e) {
    console.error(`Invalid JSON: ${file}`);
    console.error(e.message || e);
    process.exit(1);
  }
}
console.log('Locale JSON lint passed');
