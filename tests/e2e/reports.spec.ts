import { test, expect } from '@playwright/test';
import { runAxeWithAppChromeHidden, writeAxeViolations } from '../utils/a11y';

// Smoke test: verify export buttons are present and clickable (no actual file content check)

test.describe('Reports exports', () => {
  test('Export buttons present and clickable', async ({ page }) => {
    await page.goto('/reports');

    const csv = page.getByTestId('export-csv');
    const json = page.getByTestId('export-json');
    const backup = page.getByTestId('create-backup');

    await expect(csv).toBeVisible();
    await expect(json).toBeVisible();
    await expect(backup).toBeVisible();

    // Baseline a11y
    const a11y = await runAxeWithAppChromeHidden(page);
    await writeAxeViolations('reports-baseline', a11y);
    expect(a11y.violations.length).toBe(0);

    await csv.click();
    await expect(page.getByTestId('toast-export-success-csv')).toHaveCount(1);

    await json.click();
    await expect(page.getByTestId('toast-export-success-json')).toHaveCount(1);

    await backup.click();
    await expect(page.getByTestId('toast-export-success-backup')).toHaveCount(1);
  });
});

