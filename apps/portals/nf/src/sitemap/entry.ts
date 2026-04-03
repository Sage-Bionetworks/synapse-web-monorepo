/**
 * Sitemap route extraction entry point for the NF portal.
 *
 * Unlike the other portals (which use RouteObject[] and call
 * generateSitemapRoutesFile), the NF portal uses React Router Framework Mode's
 * RouteConfigEntry[] format in routes.ts. The simplest approach is to write
 * the static route list directly.
 *
 * Dynamic routes (detail pages) are enumerated by the CLI via sitemapConfig.
 *
 * Usage: vite build --config sitemap.vite.config.ts && node build/sitemap-entry.mjs
 */
import * as fs from 'fs'
import * as path from 'path'

// Static routes — same set as prerender() in react-router.config.ts.
// Dynamic routes (detail pages) are enumerated by the CLI via sitemapConfig.
const staticRoutes = [
  '/',
  '/Explore/Studies',
  '/Explore/Datasets',
  '/Explore/Files',
  '/Explore/Publications',
  '/Explore/Tools',
  '/Explore/Initiatives',
  '/Explore/Hackathon',
  '/Research%20Tools%20Central/Browse%20Tools',
  '/Search',
]

const outputPath = path.join(process.cwd(), 'build', 'sitemap-routes.json')
const dir = path.dirname(outputPath)
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
fs.writeFileSync(outputPath, JSON.stringify(staticRoutes, null, 2))
console.log(`Wrote ${staticRoutes.length} routes to ${outputPath}`)
