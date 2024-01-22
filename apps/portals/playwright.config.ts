import { defineConfig, devices } from '@playwright/test'
import dotenv from 'dotenv'
import path from 'path'

const baseURL = 'http://localhost:3000'
export const viewports = {
  expanded: { width: 1600, height: 1200 },
  collapsed: { width: 1280, height: 720 },
}
export const defaultExpectTimeout = 10 * 1000

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
dotenv.config()
dotenv.config({
  path: path.resolve(`src/configurations/${process.env.PORTAL!}/.env`),
})

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  /* Timeouts */
  expect: {
    timeout: defaultExpectTimeout,
  },
  testDir: './e2e',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 2,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI
    ? [['list'], ['blob', { fileName: `report-${process.env.PORTAL!}.zip` }]]
    : 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: baseURL,

    /* Collect traces. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], viewport: viewports.expanded },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], viewport: viewports.expanded },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], viewport: viewports.expanded },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'pnpm portal:start',
    url: baseURL,
    reuseExistingServer: true,
  },
})
