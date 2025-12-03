import { SitemapConfig } from '@sage-bionetworks/synapse-portal-framework/src/sitemap/types'
import { studySql } from './resources'

const sitemapConfig: SitemapConfig = {
  detailPages: [
    {
      path: 'Explore/Collections/DetailsPage',
      sql: studySql,
      primaryKeyColumn: 'study',
    },
  ],
}

export default sitemapConfig
