import {
  DetailPageConfig,
  SitemapConfig,
} from '@sage-bionetworks/synapse-portal-framework/src/sitemap/types'
import { challengeProjectsSql } from './resources'

const detailPages: DetailPageConfig[] = [
  {
    path: 'Challenges/DetailsPage',
    sql: challengeProjectsSql,
    primaryKeyColumn: 'id',
  },
]

const sitemapConfig: SitemapConfig = {
  detailPages,
}

export default sitemapConfig
