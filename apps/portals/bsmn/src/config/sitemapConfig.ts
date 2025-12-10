import {
  DetailPageConfig,
  SitemapConfig,
} from '@sage-bionetworks/synapse-portal-framework/src/sitemap/types'
import { projectsSql, studiesSql } from './resources'

const detailPages: DetailPageConfig[] = [
  {
    path: 'Explore/Projects/DetailsPage',
    sql: projectsSql,
    primaryKeyColumn: 'id',
  },
  {
    path: 'Explore/Data/DetailsPage',
    sql: studiesSql,
    primaryKeyColumn: 'id',
  },
]

const sitemapConfig: SitemapConfig = {
  detailPages,
}

export default sitemapConfig
