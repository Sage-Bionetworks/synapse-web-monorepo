import { defineConfig, devices } from '@playwright/test'

const baseURL = 'http://localhost:4173'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? [['list'], ['html', { open: 'never' }]] : 'html',
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'pnpm example:build && pnpm example:preview --port 4173',
    url: baseURL,
    // Never reuse: the command bundles the app, so a server left over from an
    // earlier run would silently serve stale code and tests would pass or fail
    // against the wrong build.
    reuseExistingServer: false,
  },
})
