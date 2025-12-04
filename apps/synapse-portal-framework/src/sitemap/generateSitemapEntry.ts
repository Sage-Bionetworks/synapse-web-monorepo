import type { RouteObject } from 'react-router'
import { writeRoutePaths } from './extractRoutes'
import * as path from 'path'

/**
 * Creates a sitemap route extraction entry point for a portal.
 *
 * This function is called by each portal's sitemap entry script.
 * It writes the flattened route paths to a JSON file that is then
 * consumed by the sitemap CLI to generate the final sitemap.xml.
 *
 * @param routes - The portal's route tree from routesConfig
 * @param outputDir - The directory to write sitemap-routes.json to (default: 'build')
 */
export async function generateSitemapRoutesFile(
  routes: RouteObject[],
  outputDir: string = 'build',
): Promise<void> {
  const outputPath = path.join(process.cwd(), outputDir, 'sitemap-routes.json')
  await writeRoutePaths(routes, outputPath)
}
