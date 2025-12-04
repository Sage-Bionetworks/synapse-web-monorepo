/**
 * Sitemap route extraction entry point for Cancer Complexity.
 *
 * This script is compiled by Vite in SSR mode to extract the route tree
 * and write it to a JSON file for sitemap generation.
 *
 * Usage: vite build --config sitemap.vite.config.ts && node build/sitemap-entry.mjs
 */
import routes from '@/config/routesConfig'
import { generateSitemapRoutesFile } from '@sage-bionetworks/synapse-portal-framework/sitemap/generateSitemapEntry'

generateSitemapRoutesFile(routes)
