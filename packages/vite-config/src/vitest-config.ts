import { defineConfig } from 'vitest/config'

/**
 * Partial config used to add a Vitest configuration to a Vite project.
 */
export default defineConfig({
  optimizeDeps: {
    exclude: ['vitest/utils'],
    include: ['@vitest/utils', 'vitest/browser'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    reporters: ['default', 'html'],
    outputFile: { html: './coverage/report/index.html' },
    coverage: {
      provider: 'v8',
      reporter: ['text-summary', 'html-spa'],
      reportsDirectory: './coverage/cov',
    },
  },
})
