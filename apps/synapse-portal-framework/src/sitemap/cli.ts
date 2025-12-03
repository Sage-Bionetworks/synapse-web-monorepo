#!/usr/bin/env node
/**
 * CLI entry point for sitemap generation.
 *
 * Usage:
 *   npx tsx sitemap/cli.ts <portal-name> [--config <config-path>]
 *
 * Arguments:
 *   portal-name: The name of the portal (used to construct base URL)
 *
 * Options:
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
      'Usage: tsx sitemap/cli.ts <portal-name> [--config <config-path>]',
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

  // Find routes config file
  const fileNameCandidates = ['routesConfig.ts', 'routesConfig.tsx']
  let routesConfigPath = ''

  for (const fileName of fileNameCandidates) {
    const candidatePath = path.join(process.cwd(), 'src/config', fileName)
    if (fs.existsSync(candidatePath)) {
      routesConfigPath = candidatePath
      break
    }
  }

  if (!routesConfigPath) {
    console.error(
      'Error: Could not find routesConfig.ts or routesConfig.tsx in src/config/',
    )
    process.exit(1)
  }

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
  console.log(`Routes config: ${routesConfigPath}`)
  console.log(`Output directory: ${outputDir}`)

  try {
    await generateSitemap({
      portalName,
      routesConfigPath,
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
