import {
  DetailPageConfig,
  SitemapConfig,
} from '@sage-bionetworks/synapse-portal-framework/sitemap/types'
import {
  standardsDetailsPageSQL,
  organizationDetailsPageSQL,
  topicDetailsPageSQL,
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
  {
    path: 'Explore/DataTopic/DetailsPage',
    sql: topicDetailsPageSQL,
    primaryKeyColumn: 'id',
  },
]

const sitemapConfig: SitemapConfig = {
  detailPages,
}

export default sitemapConfig
