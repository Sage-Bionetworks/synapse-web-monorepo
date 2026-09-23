import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

/**
 * Setup for browser APIs jsdom lacks, shared by every package. Consumers
 * merge their own `setupFiles` after this one, so they can override it.
 */
const jsdomSetupFile = fileURLToPath(
  new URL('./vitest.setup.js', import.meta.url),
)

/**
 * Shared Vitest configuration defaults used across all packages.
 *
 * This includes only settings that are universal. Per-package settings like
 * `test.include`, `test.silent`, and `test.testTimeout` should be specified
 * in each consumer's vite.config.ts override. A consumer's own
 * `test.setupFiles` are appended to the shared one by `mergeConfig`, not
 * replaced.
 */
export default defineConfig({
  optimizeDeps: {
    exclude: ['vitest/utils'],
    include: ['@vitest/utils', 'vitest/browser'],
  },
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    setupFiles: [jsdomSetupFile],
    exclude: ['**/node_modules/**', '**/.git/**', '**/dist/**'],
    reporters: ['default', 'html'],
    outputFile: { html: './coverage/report/index.html' },
    coverage: {
      provider: 'v8',
      reporter: ['text-summary', 'html-spa'],
      reportsDirectory: './coverage/cov',
    },
    server: {
      deps: {
        // https://github.com/mui/mui-x/issues/17427#issuecomment-2830951458
        inline: ['@mui/x-data-grid'],
      },
    },
  },
})
