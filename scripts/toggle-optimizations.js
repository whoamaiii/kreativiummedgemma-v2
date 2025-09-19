#!/usr/bin/env node

/**
 * Script to toggle between optimized and original implementations
 * Usage: node scripts/toggle-optimizations.js [enable|disable]
 */

const fs = require('fs');
const path = require('path');

const mode = process.argv[2] || 'enable';

const replacements = [
  // Exporter switching deprecated; single exporter path is '@/lib/analyticsExport'
  {
    file: 'src/pages/StudentProfile.tsx',
    backup: 'src/pages/StudentProfile.original.tsx',
    optimized: 'src/pages/StudentProfileOptimized.tsx'
  }
];

function toggleOptimizations(enable) {
  console.log(`${enable ? 'Enabling' : 'Disabling'} optimizations...`);

  replacements.forEach(({ file, original, optimized, backup }) => {
    const filePath = path.join(process.cwd(), file);
    
    if (backup) {
      // For file swapping
      const backupPath = path.join(process.cwd(), backup);
      const optimizedPath = path.join(process.cwd(), optimized);
      
      if (enable) {
        // Backup original if not exists
        if (!fs.existsSync(backupPath) && fs.existsSync(filePath)) {
          fs.copyFileSync(filePath, backupPath);
        }
        // Use optimized version
        if (fs.existsSync(optimizedPath)) {
          fs.copyFileSync(optimizedPath, filePath);
          console.log(`✓ Enabled optimized ${file}`);
        }
      } else {
        // Restore original
        if (fs.existsSync(backupPath)) {
          fs.copyFileSync(backupPath, filePath);
          console.log(`✓ Restored original ${file}`);
        }
      }
    } else if (original && optimized) {
      // For import replacements
      if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        if (enable) {
          content = content.replace(original, optimized);
        } else {
          content = content.replace(optimized, original);
        }
        fs.writeFileSync(filePath, content);
        console.log(`✓ Updated imports in ${file}`);
      }
    }
  });

  console.log(`\nOptimizations ${enable ? 'enabled' : 'disabled'}. Run 'npm run build' to see the changes.`);
}

if (mode === 'enable') {
  toggleOptimizations(true);
} else if (mode === 'disable') {
  toggleOptimizations(false);
} else {
  console.error('Usage: node scripts/toggle-optimizations.js [enable|disable]');
  process.exit(1);
}
