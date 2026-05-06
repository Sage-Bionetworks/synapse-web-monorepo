import type { Config } from '@react-router/dev/config'
import { fetchResourceIds } from '../sitemap/queryTableForSitemap'
import type { SitemapConfig } from '../sitemap/types'
import {
  preloadDetailPageMetadata,
  type DetailPageMetadataConfig,
} from '../utils/fetchDetailPageMetadata'

export type CreateReactRouterConfigOptions = {
  /** Sitemap config listing all detail page types and their primary keys. */
  sitemapConfig: SitemapConfig
  /**
   * Detail page metadata configs whose caches should be preloaded during
   * production prerender (so individual loaders hit cache instead of making
   * redundant Synapse calls).
   */
  metadataConfigs: DetailPageMetadataConfig[]
  /**
   * Optional additional preload calls run alongside metadata preloading
   * during production prerender. Use for portal-specific caches (e.g. NF's
   * `preloadAllCroissantMetadata`).
   */
  additionalPreloads?: (() => Promise<unknown>)[]
  /** App directory. Defaults to `'src'`. */
  appDirectory?: string
  /** Number of concurrent prerender requests. Defaults to 4. */
  concurrency?: number
}

/**
 * Builds a React Router framework-mode `Config` for an SSG portal.
 *
 * Encapsulates the portal-agnostic prerender pipeline: enumerate detail-page
 * record IDs, hydrate metadata caches in production, and exclude legacy
 * `/DetailsPage` paths (their prerendered directory output causes S3 to drop
 * the redirect query string).
 */
export function createReactRouterConfig(
  options: CreateReactRouterConfigOptions,
): Config {
  const {
    sitemapConfig,
    metadataConfigs,
    additionalPreloads = [],
    appDirectory = 'src',
    concurrency = 4,
  } = options

  return {
    appDirectory,
    ssr: false,
    prerender: {
      paths: async ({ getStaticPaths }) => {
        const isProduction = process.env.NODE_ENV === 'production'
        const dynamicRoutes: string[] = []

        // Enumerate record IDs for each detail page type. In dev mode, fetch
        // only 1 ID per type to keep startup fast while still satisfying React
        // Router's prerender validation for loader exports.
        for (const detailPage of sitemapConfig.detailPages) {
          const result = await fetchResourceIds(
            detailPage,
            isProduction ? undefined : 1,
          )
          if (!result.success) {
            console.warn(
              `[prerender] Skipping ${detailPage.path}: ${result.error}`,
            )
            continue
          }
          for (const id of result.ids) {
            dynamicRoutes.push(`/${detailPage.path}/${id}`)
          }
        }

        // Hydrate caches so individual loader() calls during prerender are
        // instant cache hits. Only needed for production builds where all routes
        // are pre-rendered.
        if (isProduction) {
          await Promise.all([
            ...metadataConfigs.map(mc => preloadDetailPageMetadata(mc)),
            ...additionalPreloads.map(p => p()),
          ])
        }

        // Exclude legacy /DetailsPage redirect routes from prerendering.
        // Prerendering them creates S3 directory structures (DetailsPage/index.html)
        // that cause S3 to 302-redirect `/DetailsPage?id=X` → `/DetailsPage/`
        // while dropping the query string, breaking the client-side redirect.
        // CloudFront serves __spa-fallback.html for these 404s, so React Router
        // handles them client-side with the full URL (including query) intact.
        const staticPaths = getStaticPaths().filter(
          p => !p.endsWith('/DetailsPage'),
        )

        return [...staticPaths, ...dynamicRoutes]
      },
      unstable_concurrency: concurrency,
    },
  } satisfies Config
}
