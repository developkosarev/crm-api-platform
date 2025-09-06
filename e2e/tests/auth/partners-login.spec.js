// @ts-check
const { test, expect } = require('@playwright/test');

test('partners-login', async ({ page }) => {
  await page.goto('/partners/login/');
  await expect(page).toHaveTitle('Belvexa Beauty Platform');
});

test('partners-login-en', async ({ page }) => {
  await page.goto('/en/partners/login/');
  await expect(page).toHaveTitle('Belvexa Beauty Platform');
});

test('partners-login-ru', async ({ page }) => {
  await page.goto('/ru/partners/login/');
  await expect(page).toHaveTitle('Belvexa Beauty Platform');
});

