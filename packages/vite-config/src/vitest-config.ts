import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite-config.js'
import type { UserConfig } from 'vite'
export default mergeConfig(
  viteConfig as UserConfig,
  defineConfig({
    optimizeDeps: {
      exclude: ['vitest/utils'],
      include: ['@vitest/utils', 'vitest/browser'],
    },
    test: {
      environment: 'jsdom',
      reporters: ['default', 'html'],
      outputFile: { html: './coverage/report/index.html' },
      coverage: {
        provider: 'c8',
        reporter: ['text-summary', 'html-spa'],
        reportsDirectory: './coverage/cov',
      },
    },
  }) as UserConfig,
)
