import { SitemapConfig } from '@sage-bionetworks/synapse-portal-framework/src/sitemap/types'

// digitalhealth portal collections are exposed via Collections/DetailsPage
// but the query uses a simple review table (not a main SQL table entity)
// so detail page indexing would be empty; static sitemap only
const sitemapConfig: SitemapConfig = {
  detailPages: [],
}

export default sitemapConfig
