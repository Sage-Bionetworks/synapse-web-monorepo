import {
  DetailPageConfig,
  SitemapConfig,
} from '@sage-bionetworks/synapse-portal-framework/src/sitemap/types'
import { studiesSql } from './resources'

const detailPages: DetailPageConfig[] = [
  {
    path: 'Explore/Studies/DetailsPage',
    sql: studiesSql,
    primaryKeyColumn: 'id',
  },
]

const sitemapConfig: SitemapConfig = {
  detailPages,
}

export default sitemapConfig
