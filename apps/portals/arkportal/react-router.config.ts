import { createReactRouterConfig } from '@sage-bionetworks/synapse-portal-framework/ssg/createReactRouterConfig'
import sitemapConfig from './src/config/sitemapConfig'
import { metadataConfig as datasetsMetadata } from './src/pages/DatasetDetailsPage.config'
import { metadataConfig as programsMetadata } from './src/pages/ProgramDetailsPage.config'
import { metadataConfig as projectsMetadata } from './src/pages/ProjectDetailsPage.config'

export default createReactRouterConfig({
  sitemapConfig,
  metadataConfigs: [datasetsMetadata, programsMetadata, projectsMetadata],
  /* Not enabling additionalPreloads yet because ARK currently has no Croissant mappings in syn65903895. This avoids prefetching ~256 unused files. Re-enable once ARK dataset mappings are added */
  //additionalPreloads: [preloadAllCroissantMetadata]
})
