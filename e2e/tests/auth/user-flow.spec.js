// @ts-check
const { test, expect } = require('@playwright/test');

test('user-flow', async ({ page }) => {
  await page.goto('/user-flow');
  await expect(page).toHaveTitle('Belvexa Beauty Platform');
  //await expect(page.locator('p')).toHaveCountGreaterThan(0);
});
