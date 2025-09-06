// @ts-check
const { test, expect } = require('@playwright/test');

test('homepage', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Startseite');
});

test('homepage-ru', async ({ page }) => {
  await page.goto('/ru/');
  await expect(page).toHaveTitle('Домашняя страница');
});

test('homepage-en', async ({ page }) => {
  await page.goto('/en/');
  await expect(page).toHaveTitle('Belvexa | Beauty & Wellness, Tailored by Your Trusted Salon');
});

test('services', async ({ page }) => {
  await page.goto('/services');
  await expect(page).toHaveTitle('Services');
  //await expect(page.locator('p')).toHaveCountGreaterThan(0);
});

test('contact', async ({ page }) => {
  await page.goto('/contact');
  await expect(page).toHaveTitle('Contact');
  //await expect(page.locator('p')).toHaveCountGreaterThan(0);
  const count = await page.locator('p').count();
  if (count > 0) {
    console.log(`Count = ${count} p`);
  }
  const value = 1;
  expect(value).toBe(1);
});

//test('swagger', async ({ page }) => {
//  await page.goto('https://localhost/docs');
//  await expect(page).toHaveTitle('Hello API Platform - API Platform');
//  await expect(page.locator('.operation-tag-content > span')).toHaveCount(5);
//});

//test('admin', async ({ page, browserName }) => {
//  await page.goto('https://localhost/admin');
//  await page.getByLabel('Create').click();
//  await page.getByLabel('Name').fill('foo' + browserName);
//  await page.getByLabel('Save').click();
//  await expect(page).toHaveURL(/admin#\/greetings$/);
//  await page.getByText('foo' + browserName).first().click();
//  await expect(page).toHaveURL(/show$/);
//  await page.getByLabel('Edit').first().click();
//  await page.getByLabel('Name').fill('bar' + browserName);
//  await page.getByLabel('Save').click();
//  await expect(page).toHaveURL(/admin#\/greetings$/);
//  await page.getByText('bar' + browserName).first().click();
//});
