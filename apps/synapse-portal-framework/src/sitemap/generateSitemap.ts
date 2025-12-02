import * as fs from 'fs'
import * as path from 'path'
import type {
  DetailPageConfig,
  SitemapConfig,
  SitemapUrl,
  ResourceQueryResult,
} from './types'
import { MAX_URLS_PER_SITEMAP } from './types'
import { fetchResourceIds } from './synapseQuery'

/**
 * Extracts static routes from a routesConfig file by parsing path declarations.
 * This relies on the file being formatted consistently (using the linter).
 *
 * Excludes:
 * - Dynamic routes with parameters (e.g., :id, :slug)
 * - Wildcard routes (*)
 * - Detail page routes (ending in /DetailsPage) since they require query params
 *
 * TODO: This should be refactored to take a RouteObject[] array rather than parsing regular expressions.
 * However, that would require bundling the routesConfig file in a node context, which is not straightforward
 * due to dependencies on React components and other frontend-specific code.
 */
export function extractStaticRoutes(routesConfigContent: string): string[] {
  const routes: string[] = []
  const regex = /^(\s*)path:\s*'(.*)'/gm
  const currentNestedPath: (string | undefined)[] = new Array<
    string | undefined
  >(100).fill(undefined)
  let previousNestingSpaceCount = -1

  let match: RegExpExecArray | null
  while ((match = regex.exec(routesConfigContent)) !== null) {
    const spaceCount = match[1].length
    const newPath = match[2].replaceAll(' ', '%20')

    if (spaceCount <= previousNestingSpaceCount) {
      // Reset paths from space count onwards
      currentNestedPath.forEach((_value, index) => {
        if (index >= spaceCount) {
          currentNestedPath[index] = undefined
        }
      })
    }

    previousNestingSpaceCount = spaceCount
    currentNestedPath[spaceCount] = newPath

    const currentPath = currentNestedPath
      .filter((value): value is string => value !== undefined)
      .map(str => str.replace(/\/+$/, ''))
      .join('/')

    // Skip routes that should not be in the sitemap:
    // - Dynamic routes with parameters (e.g., :id, :slug)
    // - Wildcard routes (*)
    // - Detail page routes (they require query params and will be generated dynamically)
    const isParamRoute = newPath.match(/^[:]/)
    const isWildcardRoute = newPath === '*'
    const isDetailsPage = currentPath.endsWith('/DetailsPage')

    if (!isParamRoute && !isWildcardRoute && !isDetailsPage) {
      routes.push(currentPath)
    }
  }

  return routes
}

/**
 * Generates sitemap URLs for static routes
 */
export function generateStaticUrls(
  routes: string[],
  baseUrl: string,
  lastmod: string,
): SitemapUrl[] {
  return routes.map(route => ({
    loc: `${baseUrl}${route}`,
    lastmod,
  }))
}

/**
 * Generates sitemap URLs for dynamic detail page routes by fetching resource IDs from Synapse
 */
export async function generateDynamicUrls(
  detailPages: DetailPageConfig[],
  baseUrl: string,
  lastmod: string,
): Promise<{ urls: SitemapUrl[]; warnings: string[] }> {
  const urls: SitemapUrl[] = []
  const warnings: string[] = []

  for (const config of detailPages) {
    console.log(`Fetching resource IDs for ${config.path}...`)
    const result: ResourceQueryResult = await fetchResourceIds(config)

    if (!result.success) {
      warnings.push(
        `Warning: Failed to fetch resources for ${config.path}: ${result.error}`,
      )
      console.warn(warnings[warnings.length - 1])
      continue
    }

    console.log(`  Found ${result.ids.length} resources`)

    const paramName = config.searchParamName || config.primaryKeyColumn
    for (const id of result.ids) {
      const encodedId = encodeURIComponent(id)
      urls.push({
        loc: `${baseUrl}/${config.path}?${paramName}=${encodedId}`,
        lastmod,
      })
    }
  }

  return { urls, warnings }
}

/**
 * Generates XML content for a sitemap
 */
export function generateSitemapXml(urls: SitemapUrl[]): string {
  let content =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  for (const url of urls) {
    content += `\t<url>\n`
    content += `\t\t<loc>${escapeXml(url.loc)}</loc>\n`
    content += `\t\t<lastmod>${url.lastmod}</lastmod>\n`
    content += `\t</url>\n`
  }

  content += '</urlset>'
  return content
}

/**
 * Generates a sitemap index XML file pointing to multiple sitemaps
 */
export function generateSitemapIndexXml(
  sitemapFiles: string[],
  baseUrl: string,
  lastmod: string,
): string {
  let content =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  for (const filename of sitemapFiles) {
    content += `\t<sitemap>\n`
    content += `\t\t<loc>${baseUrl}/${filename}</loc>\n`
    content += `\t\t<lastmod>${lastmod}</lastmod>\n`
    content += `\t</sitemap>\n`
  }

  content += '</sitemapindex>'
  return content
}

/**
 * Escapes special XML characters
 */
function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

/**
 * Splits URLs into chunks for multiple sitemap files if needed
 */
export function splitUrlsIntoSitemaps(
  urls: SitemapUrl[],
  maxPerSitemap: number = MAX_URLS_PER_SITEMAP,
): SitemapUrl[][] {
  const chunks: SitemapUrl[][] = []
  for (let i = 0; i < urls.length; i += maxPerSitemap) {
    chunks.push(urls.slice(i, i + maxPerSitemap))
  }
  return chunks.length > 0 ? chunks : [[]]
}

export interface GenerateSitemapOptions {
  portalName: string
  routesConfigPath: string
  sitemapConfig?: SitemapConfig
  outputDir: string
}

/**
 * Main function to generate sitemap(s) for a portal
 */
export async function generateSitemap(
  options: GenerateSitemapOptions,
): Promise<void> {
  const { portalName, routesConfigPath, sitemapConfig, outputDir } = options
  const baseUrl = `https://${portalName}.synapse.org`
  const lastmod = new Date().toISOString()
  const warnings: string[] = []

  // Read routes config file
  const routesConfigContent = fs.readFileSync(routesConfigPath, 'utf-8')

  // Extract static routes
  console.log('Extracting static routes...')
  const staticRoutes = extractStaticRoutes(routesConfigContent)
  console.log(`Found ${staticRoutes.length} static routes`)

  // Generate static URLs
  let allUrls = generateStaticUrls(staticRoutes, baseUrl, lastmod)

  // Generate dynamic URLs if sitemap config is provided
  if (sitemapConfig && sitemapConfig.detailPages.length > 0) {
    console.log(
      `Generating dynamic URLs for ${sitemapConfig.detailPages.length} detail page types...`,
    )
    const { urls: dynamicUrls, warnings: dynamicWarnings } =
      await generateDynamicUrls(sitemapConfig.detailPages, baseUrl, lastmod)
    allUrls = [...allUrls, ...dynamicUrls]
    warnings.push(...dynamicWarnings)
  }

  console.log(`Total URLs: ${allUrls.length}`)

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  // Split into multiple sitemaps if needed
  const urlChunks = splitUrlsIntoSitemaps(allUrls)

  if (urlChunks.length === 1) {
    // Single sitemap file
    const sitemapContent = generateSitemapXml(urlChunks[0])
    const sitemapPath = path.join(outputDir, 'sitemap.xml')
    fs.writeFileSync(sitemapPath, sitemapContent)
    console.log(`Generated ${sitemapPath}`)
  } else {
    // Multiple sitemap files with an index
    const sitemapFiles: string[] = []

    for (let i = 0; i < urlChunks.length; i++) {
      const filename = `sitemap-${i + 1}.xml`
      const sitemapContent = generateSitemapXml(urlChunks[i])
      const sitemapPath = path.join(outputDir, filename)
      fs.writeFileSync(sitemapPath, sitemapContent)
      console.log(`Generated ${sitemapPath}`)
      sitemapFiles.push(filename)
    }

    // Generate sitemap index
    const indexContent = generateSitemapIndexXml(sitemapFiles, baseUrl, lastmod)
    const indexPath = path.join(outputDir, 'sitemap.xml')
    fs.writeFileSync(indexPath, indexContent)
    console.log(`Generated sitemap index: ${indexPath}`)
  }

  // Print warnings summary
  if (warnings.length > 0) {
    console.log('\n--- Warnings ---')
    warnings.forEach(w => console.warn(w))
    console.log(
      `\nSitemap generated with ${warnings.length} warning(s). Some resources may be missing.`,
    )
  }
}
