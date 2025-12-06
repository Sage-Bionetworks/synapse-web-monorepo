import { mergeConfig } from 'vite'
import { sitemapViteConfig } from 'vite-config'
import { resolve } from 'path'

/**
 * Vite configuration for building the sitemap route extraction script.
 *
 * This is built separately from the main portal build and runs in Node.js
 * to extract the route tree for sitemap generation.
 */
export default mergeConfig(sitemapViteConfig, {
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'src/sitemap/entry.ts'),
    },
  },
})
