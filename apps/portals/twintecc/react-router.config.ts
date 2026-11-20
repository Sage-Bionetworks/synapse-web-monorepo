import { createReactRouterConfig } from '@sage-bionetworks/synapse-portal-framework/ssg/createReactRouterConfig'
import sitemapConfig from './src/config/sitemapConfig'

export default createReactRouterConfig({
  sitemapConfig,
  metadataConfigs: [],
})
