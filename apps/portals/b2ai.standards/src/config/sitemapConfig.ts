import {
  DetailPageConfig,
  SitemapConfig,
} from '@sage-bionetworks/synapse-portal-framework/src/sitemap/types'
import {
  standardsDetailsPageSQL,
  organizationDetailsPageSQL,
} from './resources'

const detailPages: DetailPageConfig[] = [
  {
    path: 'Explore/Standard/DetailsPage',
    sql: standardsDetailsPageSQL,
    primaryKeyColumn: 'id',
  },
  {
    path: 'Explore/Organization/DetailsPage',
    sql: organizationDetailsPageSQL,
    primaryKeyColumn: 'id',
  },
]

const sitemapConfig: SitemapConfig = {
  detailPages,
}

export default sitemapConfig
