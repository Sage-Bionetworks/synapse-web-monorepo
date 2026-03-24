import type { Config } from '@react-router/dev/config'
import { fetchResourceIds } from '@sage-bionetworks/synapse-portal-framework/sitemap/queryTableForSitemap'
import { preloadDetailPageMetadata } from '@sage-bionetworks/synapse-portal-framework/utils/fetchDetailPageMetadata'
import type { DetailPageMetadataConfig } from '@sage-bionetworks/synapse-portal-framework/utils/fetchDetailPageMetadata'
import { preloadAllCroissantMetadata } from '@sage-bionetworks/synapse-portal-framework/utils/fetchCroissantMetadata'
import sitemapConfig from './src/config/sitemapConfig'
import { metadataConfig as initiativeMetadata } from './src/pages/InitiativeDetailsPage.config'
import { metadataConfig as datasetMetadata } from './src/pages/DatasetDetailsPage.config'
import { metadataConfig as studyMetadata } from './src/pages/StudyDetailsPage/StudyDetailsPage.config'
import { metadataConfig as toolMetadata } from './src/pages/ToolDetailsPage/ToolDetailsPage.config'
import { metadataConfig as hackathonMetadata } from './src/pages/HackathonDetailsPage/HackathonDetailsPage.config'
import { metadataConfig as orgMetadata } from './src/pages/OrganizationDetailsPage/OrganizationDetailsPage.config'

/**
 * Metadata configs for each detail page type.
 * Imported from their respective detail page modules so there is a single
 * source of truth — no duplicate config objects between here and the loaders.
 */
const metadataConfigs: DetailPageMetadataConfig[] = [
  initiativeMetadata,
  datasetMetadata,
  studyMetadata,
  toolMetadata,
  hackathonMetadata,
  orgMetadata,
]

export default {
  appDirectory: 'src',
  ssr: false,
  prerender: {
    paths: async ({ getStaticPaths }) => {
      const isProduction = process.env.NODE_ENV === 'production'
      console.log('[prerender] Starting prerender...')

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
          console.warn(
            `[prerender] Skipping ${detailPage.path}: ${result.error}`,
          )
          continue
        }
        for (const id of result.ids) {
          dynamicRoutes.push(`/${detailPage.path}/${id}`)
        }
      }

      console.log(
        `[prerender] ${getStaticPaths().length} static + ${
          dynamicRoutes.length
        } dynamic routes`,
      )

      // Hydrate caches so individual loader() calls are instant hits.
      // Only needed for production builds where all routes are pre-rendered.
      if (isProduction) {
        await Promise.all([
          ...metadataConfigs.map(mc => preloadDetailPageMetadata(mc)),
          preloadAllCroissantMetadata(),
        ])
      }

      console.log(
        `[prerender] Preloaded metadata for ${metadataConfigs.length} detail page types and Croissant`,
      )
      return [...getStaticPaths(), ...dynamicRoutes]
    },
    unstable_concurrency: 4,
  },
} satisfies Config
