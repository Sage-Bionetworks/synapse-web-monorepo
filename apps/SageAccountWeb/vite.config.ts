import { mergeConfig } from 'vite'
import { playwright } from '@vitest/browser-playwright'
import {
  baseConfig,
  vitestConfig,
  reactPlugins,
  nodePolyfillsPlugin,
} from 'vite-config'

const config = mergeConfig(
  baseConfig,
  mergeConfig(vitestConfig, {
    plugins: [nodePolyfillsPlugin(), ...reactPlugins()],
    test: {
      projects: [
        {
          extends: true,
          test: {
            name: 'jsdom',
            include: ['src/**/*.test.[jt]s?(x)'],
            exclude: [
              '**/node_modules/**',
              '**/.git/**',
              '**/dist/**',
              'src/**/*.browser.test.[jt]s?(x)',
            ],
            setupFiles: ['src/tests/setupTests.ts'],
          },
        },
        {
          extends: true,
          test: {
            name: 'browser',
            // Real-browser tests for behavior jsdom cannot observe (actual CSS
            // layout/cascade, e.g. responsive overflow and overlap bugs).
            include: ['src/**/*.browser.test.[jt]s?(x)'],
            // setupTests.ts stubs window.location/matchMedia the jsdom way,
            // which breaks (or is unnecessary) in a real browser.
            setupFiles: ['src/tests/setupTests.browser.ts'],
            // One MSW service worker is registered per browser page and shared
            // by the per-file iframes, so a parallel file's `resetHandlers()`
            // can strand another file's in-flight requests.
            fileParallelism: false,
            browser: {
              enabled: true,
              provider: playwright(),
              headless: true,
              // Starting size only; tests that care set their own viewport via
              // `src/tests/viewports.ts`.
              viewport: { width: 1440, height: 900 },
              instances: [{ browser: 'chromium' }],
            },
          },
        },
      ],
    },
  }),
)

export default config
