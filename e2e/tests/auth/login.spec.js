// @ts-check
const { test, expect } = require('@playwright/test');

import { users } from "../constants";

test('login', async ({ page }) => {
  await page.goto('/login/');
  await expect(page).toHaveTitle('Customers login page');
  await page.getByRole('textbox', { name: 'E-Mail-Adresse' }).click();
  await page.getByRole('textbox', { name: 'E-Mail-Adresse' }).fill(users.customer.email);
  await page.getByRole('textbox', { name: 'Passwort' }).click();
  await page.getByRole('textbox', { name: 'Passwort' }).fill(users.customer.password);
  await page.getByRole('button', { name: 'Anmelden' }).click();

  await expect(page).toHaveURL('/profile/');
  await expect(page.getByText('Profile')).toBeVisible();
  await expect(page.getByText(`Email: ${users.customer.email}`)).toBeVisible();
  await page.getByText('Profile').click();
});

test('login-en', async ({ page }) => {
  await page.goto('/en/login/');
  await expect(page).toHaveTitle('Customers login page');
});

test('login-ru', async ({ page }) => {
  await page.goto('/ru/login/');
  await expect(page).toHaveTitle('Customers login page');
});

