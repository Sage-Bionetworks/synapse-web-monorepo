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
    concurrency = 16,
  } = options

  return {
    appDirectory,
    ssr: false,
    prerender: {
      paths: async ({ getStaticPaths }) => {
        const isProduction = process.env.NODE_ENV === 'production'
        const dynamicRoutes: string[] = []

        // Enumerate record IDs for each detail page type. We fetch only 1 ID
        // when:
        //   - in dev mode (keeps startup fast), or
        //   - the detail page is marked `prerender: false` (high-cardinality
        //     page that we don't want statically generated at scale).
        // Either way React Router's ssr:false validator is satisfied because
        // at least one path matches each loader-exporting route — the
        // remaining paths fall through to the SPA fallback at runtime.
        for (const detailPage of sitemapConfig.detailPages) {
          const limit =
            !isProduction || detailPage.prerender === false ? 1 : undefined
          const result = await fetchResourceIds(detailPage, limit)
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

        // Exclude legacy /DetailsPage redirect routes (and any sub-paths like
        // /DetailsPage/Details) from prerendering.
        // Prerendering them creates S3 directory structures (DetailsPage/index.html)
        // that cause S3 to 302-redirect `/DetailsPage?id=X` → `/DetailsPage/`
        // while dropping the query string, breaking the client-side redirect.
        // CloudFront serves __spa-fallback.html for these 404s, so React Router
        // handles them client-side with the full URL (including query) intact.
        const staticPaths = getStaticPaths().filter(
          p => !p.includes('/DetailsPage'),
        )

        return [...staticPaths, ...dynamicRoutes]
      },
      unstable_concurrency: concurrency,
    },
  } satisfies Config
}
