import { createReactRouterConfig } from '@sage-bionetworks/synapse-portal-framework/ssg/createReactRouterConfig'
import sitemapConfig from './src/config/sitemapConfig'
import { metadataConfig as grantMetadata } from './src/pages/GrantDetailsPage.config'
import { metadataConfig as peopleMetadata } from './src/pages/PeopleDetailsPage.config'
import { metadataConfig as datasetsMetadata } from './src/pages/DatasetsDetailsPage.config'
import { metadataConfig as toolsMetadata } from './src/pages/ToolsDetailsPage/ToolsDetailsPage.config'
import { metadataConfig as educationalResourcesMetadata } from './src/pages/EducationalResourcesDetailsPage.config'
import { preloadAllCroissantMetadata } from '@sage-bionetworks/synapse-portal-framework/utils/fetchCroissantMetadata'

export default createReactRouterConfig({
  sitemapConfig,
  // Publications are intentionally omitted — only one sample page is
  // prerendered (see `prerender: false` on the Publications entry in
  // sitemapConfig), so a bulk metadata preload would be wasted work; that
  // one page's loader fetches its own metadata.
  metadataConfigs: [
    grantMetadata,
    peopleMetadata,
    datasetsMetadata,
    toolsMetadata,
    educationalResourcesMetadata,
  ],
  // Include JSON-LD for datasets.
  additionalPreloads: [preloadAllCroissantMetadata],
})
