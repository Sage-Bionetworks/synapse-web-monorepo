import { createReactRouterConfig } from '@sage-bionetworks/synapse-portal-framework/ssg/createReactRouterConfig'
import { preloadAllCroissantMetadata } from '@sage-bionetworks/synapse-portal-framework/utils/fetchCroissantMetadata'
import sitemapConfig from './src/config/sitemapConfig'
import { metadataConfig as datasetsMetadata } from './src/pages/DatasetDetailsPage.config'
import { metadataConfig as programsMetadata } from './src/pages/ProgramDetailsPage.config'
import { metadataConfig as projectsMetadata } from './src/pages/ProjectDetailsPage.config'

export default createReactRouterConfig({
  sitemapConfig,
  metadataConfigs: [datasetsMetadata, programsMetadata, projectsMetadata],
  additionalPreloads: [preloadAllCroissantMetadata],
})
