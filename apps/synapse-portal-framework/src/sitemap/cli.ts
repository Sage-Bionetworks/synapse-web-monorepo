#!/usr/bin/env node
/**
 * CLI entry point for sitemap generation.
 *
 * Usage:
 *   npx tsx sitemap/cli.ts <portal-name> --routes <routes-json-path> [--config <config-path>]
 *
 * Arguments:
 *   portal-name: The name of the portal (used to construct base URL)
 *
 * Options:
 *   --routes: Path to pre-extracted routes JSON file (from Vite SSR build)
 *   --config: Path to a sitemap config file (TypeScript or JSON)
 *             If not provided, only static routes will be included
 */

import * as fs from 'fs'
import * as path from 'path'
import { generateSitemap } from './generateSitemap'
import type { SitemapConfig } from './types'

async function main() {
  const args = process.argv.slice(2)

  if (args.length === 0) {
    console.error(
      'Usage: tsx sitemap/cli.ts <portal-name> --routes <routes-json-path> [--config <config-path>]',
    )
    console.error(
      '\nNote: sitemap.xml assumes portal is hosted on <portal-name>.synapse.org',
    )
    process.exit(1)
  }

  // Strip surrounding double quotes (if exist)
  const portalName = args[0].replace(/^"|"$/g, '')

  // Parse optional --config argument
  let sitemapConfigPath: string | undefined
  const configIndex = args.indexOf('--config')
  if (configIndex !== -1 && args[configIndex + 1]) {
    sitemapConfigPath = args[configIndex + 1]
  }

  // Parse required --routes argument (path to pre-extracted routes JSON)
  const routesIndex = args.indexOf('--routes')
  if (routesIndex === -1 || !args[routesIndex + 1]) {
    console.error('Error: --routes <routes-json-path> is required')
    console.error(
      'Run `pnpm build-sitemap-routes` first to generate the routes JSON file.',
    )
    process.exit(1)
  }
  const routesJsonPath = args[routesIndex + 1]

  const absoluteRoutesPath = path.isAbsolute(routesJsonPath)
    ? routesJsonPath
    : path.join(process.cwd(), routesJsonPath)

  if (!fs.existsSync(absoluteRoutesPath)) {
    console.error(`Error: Routes JSON file not found: ${absoluteRoutesPath}`)
    console.error(
      'Run `pnpm build-sitemap-routes` first to generate the routes JSON file.',
    )
    process.exit(1)
  }
  console.log(`Using pre-extracted routes from: ${absoluteRoutesPath}`)

  // Load sitemap config if provided
  let sitemapConfig: SitemapConfig | undefined

  if (sitemapConfigPath) {
    const absoluteConfigPath = path.isAbsolute(sitemapConfigPath)
      ? sitemapConfigPath
      : path.join(process.cwd(), sitemapConfigPath)

    if (!fs.existsSync(absoluteConfigPath)) {
      console.error(
        `Error: Sitemap config file not found: ${absoluteConfigPath}`,
      )
      process.exit(1)
    }

    try {
      // For TypeScript files, we need to use dynamic import
      // This requires the file to be transpiled or use tsx/ts-node
      const configModule = (await import(absoluteConfigPath)) as {
        default?: SitemapConfig
        sitemapConfig?: SitemapConfig
      }
      sitemapConfig = configModule.default || configModule.sitemapConfig
      console.log(
        `Loaded sitemap config with ${
          sitemapConfig?.detailPages?.length || 0
        } detail page configurations`,
      )
    } catch (error) {
      console.error(`Error loading sitemap config: ${error}`)
      process.exit(1)
    }
  }

  const outputDir = path.join(process.cwd(), 'build')

  console.log(`Generating sitemap for ${portalName}...`)
  console.log(`Output directory: ${outputDir}`)

  try {
    await generateSitemap({
      portalName,
      staticRoutesPath: absoluteRoutesPath,
      sitemapConfig,
      outputDir,
    })
    console.log('\nSitemap generation complete!')
  } catch (error) {
    console.error('Error generating sitemap:', error)
    process.exit(1)
  }
}

main()
