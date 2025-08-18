#!/usr/bin/env node
import { promises as fs } from 'node:fs';
import path from 'node:path';

async function* walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const res = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(res);
    } else {
      yield res;
    }
  }
}

async function main() {
  const root = path.resolve(process.cwd(), 'src', 'locales');
  let count = 0;
  let ok = true;
  try {
    await fs.access(root);
  } catch {
    console.error('Locales directory not found:', root);
    process.exit(1);
  }

  for await (const file of walk(root)) {
    if (!file.endsWith('.json')) continue;
    count++;
    try {
      const text = await fs.readFile(file, 'utf8');
      JSON.parse(text);
    } catch (e) {
      ok = false;
      console.error('Invalid JSON:', file, '\n ', e.message);
    }
  }

  if (!count) {
    console.warn('No JSON files found under', root);
  }

  if (!ok) process.exit(1);
  console.log('All locale JSON files are valid. Checked', count, 'file(s).');
}

main().catch((e) => {
  console.error('Validation script failed:', e);
  process.exit(1);
});
