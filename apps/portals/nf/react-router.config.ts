import type { Config } from '@react-router/dev/config'
import { fetchResourceIds } from '@sage-bionetworks/synapse-portal-framework/sitemap/queryTableForSitemap'
import { preloadDetailPageMetadata } from '@sage-bionetworks/synapse-portal-framework/utils/fetchDetailPageMetadata'
import type { DetailPageMetadataConfig } from '@sage-bionetworks/synapse-portal-framework/utils/fetchDetailPageMetadata'
import { preloadAllCroissantMetadata } from '@sage-bionetworks/synapse-portal-framework/utils/fetchCroissantMetadata'
import sitemapConfig from './src/config/sitemapConfig'
import {
  datasetsSql,
  fundersSql,
  hackathonsSql,
  initiativesSql,
  studiesSql,
  toolsSql,
} from './src/config/resources'

/**
 * Metadata configs for each detail page type.
 * These map to the DetailPageMetadataConfig defined in each detail page component.
 * The `paramName` must match the `primaryKeyColumn` in sitemapConfig for the
 * same table, so that cache keys align with what the loader() functions produce.
 */
const metadataConfigs: DetailPageMetadataConfig[] = [
  {
    sql: initiativesSql,
    titleColumn: 'initiative',
    descriptionColumn: 'summary',
    paramName: 'initiative',
  },
  {
    sql: datasetsSql,
    titleColumn: 'title',
    descriptionColumn: 'description',
    paramName: 'id',
  },
  {
    sql: studiesSql,
    titleColumn: 'studyName',
    descriptionColumn: 'summary',
    paramName: 'studyId',
  },
  {
    sql: toolsSql,
    titleColumn: 'resourceName',
    descriptionColumn: 'description',
    paramName: 'resourceId',
  },
  {
    sql: hackathonsSql,
    titleColumn: 'name',
    descriptionColumn: 'summary',
    paramName: 'id',
  },
  {
    sql: fundersSql,
    titleColumn: 'organizationName',
    descriptionColumn: 'summary',
    paramName: 'abbreviation',
  },
]

async function paths() {
  const isProduction = process.env.NODE_ENV === 'production'
  console.log('[prerender] Generating static routes...')
  const staticRoutes = [
    '/',
    '/Explore/Studies',
    '/Explore/Datasets',
    '/Explore/Files',
    '/Explore/Publications',
    '/Explore/Tools',
    '/Explore/Initiatives',
    '/Explore/Hackathon',
    '/Research Tools Central/Browse Tools',
    '/Search',
  ]

  const dynamicRoutes: string[] = []

  // Enumerate record IDs for each detail page type.
  // In dev mode, fetch only 1 ID per type to keep startup fast while still
  // satisfying React Router's prerender validation for loader exports.
  for (const detailPage of sitemapConfig.detailPages) {
    const result = await fetchResourceIds(
      detailPage,
      isProduction ? undefined : 1,
    )
    if (!result.success) {
      console.warn(`[prerender] Skipping ${detailPage.path}: ${result.error}`)
      continue
    }
    for (const id of result.ids) {
      dynamicRoutes.push(`/${detailPage.path}/${id}`)
    }
  }

  // Hydrate caches so individual loader() calls are instant hits.
  // Only needed for production builds where all routes are pre-rendered.
  if (isProduction) {
    await Promise.all([
      ...metadataConfigs.map(mc => preloadDetailPageMetadata(mc)),
      preloadAllCroissantMetadata(),
    ])
  }

  console.log(
    `[prerender] ${staticRoutes.length} static + ${dynamicRoutes.length} dynamic routes`,
  )
  return [...staticRoutes, ...dynamicRoutes]
}

export default {
  appDirectory: 'src',
  ssr: false,
  prerender: {
    paths,
    unstable_concurrency: 4,
  },
} satisfies Config
