import { resolve } from 'path'
import { mergeConfig, type UserConfig } from 'vite'
import { sitemapViteConfig as baseSitemapViteConfig } from 'vite-config'

/**
 * Vite config for building the sitemap route extraction script in an SSG portal.
 *
 * Defaults the entry to `<portal>/src/sitemap/entry.ts`. Each portal's
 * `sitemap.vite.config.ts` becomes:
 * ```ts
 * import { sitemapViteConfig } from '@sage-bionetworks/synapse-portal-framework/ssg/sitemapViteConfig'
 * export default sitemapViteConfig
 * ```
 *
 * If a portal needs a different entry path, use `mergeConfig` with the
 * underlying `sitemapViteConfig` from `vite-config` directly.
 */
export const sitemapViteConfig: UserConfig = mergeConfig(
  baseSitemapViteConfig,
  {
    build: {
      rollupOptions: {
        input: resolve(process.cwd(), 'src/sitemap/entry.ts'),
      },
    },
  },
)

export default sitemapViteConfig
