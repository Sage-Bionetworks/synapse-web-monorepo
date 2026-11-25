import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: '.',
  testMatch: 'gridLoad.bench.ts',
  outputDir: './.cache/test-output',
  globalSetup: './globalSetup.ts',
  globalTeardown: './globalTeardown.ts',
  // One page at a time, so runs do not compete for CPU.
  workers: 1,
  fullyParallel: false,
  retries: 0,
  // Failed runs are results; record them and keep going.
  maxFailures: 0,
  timeout: 20 * 60_000,
  reporter: [['list']],
  use: {
    viewport: { width: 1600, height: 1200 },
    // The Storybook build registers MSW's service worker; it must not answer the benchmark's requests.
    serviceWorkers: 'block',
    trace: 'off',
    video: 'off',
    screenshot: 'off',
  },
  projects: [
    {
      name: 'chromium',
      // Full Chromium in new headless mode rather than the stripped-down headless shell.
      use: { ...devices['Desktop Chrome'], channel: 'chromium' },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
})
