import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  timeout: 30 * 1000,
  // retries: process.env.CI ? 2 : 0,
  retries:1,
  // workers: process.env.CI ? 1 : undefined,
  workers: 1,
  reporter: [
    ['html'],
    ['list'],
    ['allure-playwright'],
    ['dot'],
  ],
  use: {
    baseURL: 'https://practicesoftwaretesting.com/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: false,
    viewport: { width: 1280, height: 720 },

  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

  ],

});
