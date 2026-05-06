import { createReactRouterConfig } from '@sage-bionetworks/synapse-portal-framework/ssg/createReactRouterConfig'
import { preloadAllCroissantMetadata } from '@sage-bionetworks/synapse-portal-framework/utils/fetchCroissantMetadata'
import sitemapConfig from './src/config/sitemapConfig'
import { metadataConfig as initiativeMetadata } from './src/pages/InitiativeDetailsPage.config'
import { metadataConfig as datasetMetadata } from './src/pages/DatasetDetailsPage.config'
import { metadataConfig as studyMetadata } from './src/pages/StudyDetailsPage/StudyDetailsPage.config'
import { metadataConfig as toolMetadata } from './src/pages/ToolDetailsPage/ToolDetailsPage.config'
import { metadataConfig as hackathonMetadata } from './src/pages/HackathonDetailsPage/HackathonDetailsPage.config'
import { metadataConfig as orgMetadata } from './src/pages/OrganizationDetailsPage/OrganizationDetailsPage.config'

export default createReactRouterConfig({
  sitemapConfig,
  metadataConfigs: [
    initiativeMetadata,
    datasetMetadata,
    studyMetadata,
    toolMetadata,
    hackathonMetadata,
    orgMetadata,
  ],
  // NF is the only portal that ships Croissant JSON-LD for datasets.
  additionalPreloads: [preloadAllCroissantMetadata],
})
