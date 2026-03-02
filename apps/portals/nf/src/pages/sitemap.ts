/**
 * Sitemap resource route — generates sitemap.xml dynamically via SSR.
 *
 * This is a React Router "resource route" (loader only, no default component
 * export). It returns `application/xml` containing the sitemap for the NF portal.
 *
 * Static route paths are extracted from the ServerBuild.routes manifest at
 * runtime — no separate build step required. Dynamic resource IDs (datasets,
 * studies, tools, etc.) are fetched from Synapse tables.
 *
 * Caching strategy: stale-while-revalidate with a 24-hour TTL.
 * - Fresh cache → return immediately
 * - Stale cache → return stale, kick off background regeneration
 * - No cache (cold start) → return static-only sitemap, start full generation
 */
import type { Route } from './+types/sitemap'
import {
  extractStaticRoutePaths,
  generateStaticUrls,
  generateDynamicUrls,
  generateSitemapXml,
} from '@sage-bionetworks/synapse-portal-framework/sitemap/index'
import sitemapConfig from '../config/sitemapConfig'

const BASE_URL = `https://${import.meta.env.VITE_PORTAL_KEY}.synapse.org`
const TTL_MS = 24 * 60 * 60 * 1000 // 24 hours

/** In-memory cache for the generated sitemap XML. */
let cache: { xml: string; generatedAt: number } | null = null

/** Guard to prevent concurrent background regenerations. */
let regenerating = false

/**
 * Generates a sitemap XML string with static routes only (fast, no API calls).
 */
async function generateStaticOnlySitemap(
  getServerBuild: Route.LoaderArgs['context']['serverBuild'],
): Promise<string> {
  const build = await getServerBuild()
  const staticPaths = extractStaticRoutePaths(build.routes)
  const lastmod = new Date().toISOString()
  const urls = generateStaticUrls(staticPaths, BASE_URL, lastmod)
  return generateSitemapXml(urls)
}

/**
 * Generates a full sitemap XML string including dynamic resource URLs.
 * This may take several minutes due to paginated Synapse table queries.
 */
async function generateFullSitemap(
  getServerBuild: Route.LoaderArgs['context']['serverBuild'],
): Promise<string> {
  const build = await getServerBuild()
  const staticPaths = extractStaticRoutePaths(build.routes)
  const lastmod = new Date().toISOString()
  const staticUrls = generateStaticUrls(staticPaths, BASE_URL, lastmod)

  const { urls: dynamicUrls, warnings } = await generateDynamicUrls(
    sitemapConfig.detailPages,
    BASE_URL,
    lastmod,
  )

  if (warnings.length > 0) {
    console.warn(
      `[sitemap] Generated with ${warnings.length} warning(s):`,
      warnings,
    )
  }

  const allUrls = [...staticUrls, ...dynamicUrls]
  console.log(`[sitemap] Generated ${allUrls.length} URLs`)
  return generateSitemapXml(allUrls)
}

/**
 * Triggers background regeneration of the full sitemap.
 * Updates the cache when complete. Errors are logged but do not affect
 * the currently cached sitemap.
 */
function triggerBackgroundRegeneration(
  getServerBuild: Route.LoaderArgs['context']['serverBuild'],
): void {
  if (regenerating) return
  regenerating = true
  console.log('[sitemap] Starting background regeneration...')

  generateFullSitemap(getServerBuild)
    .then(xml => {
      cache = { xml, generatedAt: Date.now() }
      console.log('[sitemap] Background regeneration complete')
    })
    .catch(err => {
      console.error('[sitemap] Background regeneration failed:', err)
    })
    .finally(() => {
      regenerating = false
    })
}

export async function loader({ context }: Route.LoaderArgs) {
  const now = Date.now()
  const getServerBuild = context.serverBuild

  if (cache) {
    const age = now - cache.generatedAt

    if (age < TTL_MS) {
      // Fresh cache — return immediately
      return new Response(cache.xml, {
        headers: {
          'Content-Type': 'application/xml',
          'Cache-Control': 'public, max-age=3600', // Let CDN/browser cache for 1h
        },
      })
    }

    // Stale cache — return stale, trigger background regeneration
    triggerBackgroundRegeneration(getServerBuild)
    return new Response(cache.xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600',
      },
    })
  }

  // No cache (cold start) — generate static-only sitemap immediately
  const staticXml = await generateStaticOnlySitemap(getServerBuild)
  cache = { xml: staticXml, generatedAt: now }

  // Kick off full generation in the background
  triggerBackgroundRegeneration(getServerBuild)

  return new Response(staticXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
