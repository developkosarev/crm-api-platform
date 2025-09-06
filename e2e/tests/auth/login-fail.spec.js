// @ts-check
const { test, expect } = require('@playwright/test');

import { users } from "../constants";

test('login-fail', async ({ page }) => {
  await page.goto('/login/');
  await expect(page).toHaveTitle('Customers login page');
  await page.getByRole('textbox', { name: 'E-Mail-Adresse' }).click();
  await page.getByRole('textbox', { name: 'E-Mail-Adresse' }).fill(users.customer.email);
  await page.getByRole('textbox', { name: 'Passwort' }).click();
  await page.getByRole('textbox', { name: 'Passwort' }).fill('demo');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  await expect(page).toHaveURL('/login/');
  await expect(page.getByText('Profile')).not.toBeVisible();
});