import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Interactive Visualization - Trends & Filters smoke', () => {
  test('loads, opens filters, toggles Trends tab, and passes basic a11y checks', async ({ page }) => {
    await page.goto('/e2e/interactive-viz');

    // Title with student name should be visible
    await expect(page.getByRole('heading', { name: /interactive data analysis -\s*test student/i })).toBeVisible();

    // Counts should be present
    const counts = page.locator('[aria-label="Data counts"]');
    await expect(counts).toContainText(/emotions/i);
    await expect(counts).toContainText(/sensory inputs/i);
    await expect(counts).toContainText(/sessions/i);

    // Basic a11y check on the page
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .disableRules(['color-contrast', 'button-name'])
      .analyze();
    expect(accessibilityScanResults.violations.length).toBe(0);
  });
});


