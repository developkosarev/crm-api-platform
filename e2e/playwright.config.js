// @ts-check
const { defineConfig, devices } = require('@playwright/test');
import * as dotenv from 'dotenv';

dotenv.config({ path: process.env.ENV_FILE || '.env' });

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: 'html',
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], },
    },
    //{
    //  name: 'firefox',
    //  use: { ...devices['Desktop Firefox'] },
    //},
    //{
    //  name: 'webkit',
    //  use: { ...devices['Desktop Safari'] },
    //},
  ],
});

