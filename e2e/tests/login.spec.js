// @ts-check
const { test, expect } = require('@playwright/test');

test('login', async ({ page }) => {
  await page.goto('/login');
  //await expect(page).toHaveTitle('Anmelden');
});

