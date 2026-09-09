import { createReactRouterConfig } from '@sage-bionetworks/synapse-portal-framework/ssg/createReactRouterConfig'
import sitemapConfig from './src/config/sitemapConfig'
import { metadataConfig as datasetsMetadata } from './src/pages/DatasetDetailsPage.config'

export default createReactRouterConfig({
  sitemapConfig,
  metadataConfigs: [datasetsMetadata],
  /* Not enabling additionalPreloads yet because NAMHUB currently has no Croissant mappings in syn65903895. This avoids prefetching ~256 unused files. Re-enable once NAMHUB dataset mappings are added */
  //additionalPreloads: [preloadAllCroissantMetadata]
})
