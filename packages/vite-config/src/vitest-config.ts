import { defineConfig } from 'vitest/config'

/**
 * Shared Vitest configuration defaults used across all packages.
 *
 * This includes only settings that are universal. Per-package settings like
 * `test.setupFiles`, `test.include`, `test.silent`, and `test.testTimeout`
 * should be specified in each consumer's vite.config.ts override.
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
