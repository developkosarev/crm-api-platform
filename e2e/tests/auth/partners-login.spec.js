// @ts-check
const { test, expect } = require("@playwright/test");

test("partner-login", async ({ page }) => {
  await page.goto("/partners/login/");
  await expect(page).toHaveTitle("Belvexa Beauty Platform");
});

test("partner-login-en", async ({ page }) => {
  await page.goto("/en/partners/login/");
  await expect(page).toHaveTitle("Belvexa Beauty Platform");
});

test("partner-login-ru", async ({ page }) => {
  await page.goto("/ru/partners/login/");
  await expect(page).toHaveTitle("Belvexa Beauty Platform");
});
