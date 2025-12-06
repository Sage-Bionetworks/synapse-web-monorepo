import { SitemapConfig } from '@sage-bionetworks/synapse-portal-framework/src/sitemap/types'

// stopadportal does not have detail pages; only static pages (Apply, Help, Terms, etc.)
const sitemapConfig: SitemapConfig = {
  detailPages: [],
}

export default sitemapConfig
