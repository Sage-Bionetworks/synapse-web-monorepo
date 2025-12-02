import { SitemapConfig } from '@sage-bionetworks/synapse-portal-framework/src/sitemap/types'

// genie portal only has table explore pages, no detail pages for resource navigation
const sitemapConfig: SitemapConfig = {
  detailPages: [],
}

export default sitemapConfig
