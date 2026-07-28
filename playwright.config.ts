import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Run tests sequentially (recommended while learning)
  fullyParallel: false,

  // No retries
  retries: 0,

  // Run one test worker at a time
  workers: 1,

  // HTML report
  reporter: 'html',

  use: {
    // Uncomment if all tests use the same website
    // baseURL: 'https://blazedemo.com',

    // Keep trace only if a test fails
    trace: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});