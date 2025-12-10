import {
  DetailPageConfig,
  SitemapConfig,
} from '@sage-bionetworks/synapse-portal-framework/src/sitemap/types'
import { datasetsSql, toolsSql, educationSql } from './resources'

const detailPages: DetailPageConfig[] = [
  {
    path: 'Explore/Datasets/DetailsPage',
    sql: datasetsSql,
    primaryKeyColumn: 'datasetId',
  },
  {
    path: 'Explore/Tools/DetailsPage',
    sql: toolsSql,
    primaryKeyColumn: 'toolName',
  },
  {
    path: 'Explore/Educational Resources/DetailsPage',
    sql: educationSql,
    primaryKeyColumn: 'title',
  },
]

const sitemapConfig: SitemapConfig = {
  detailPages,
}

export default sitemapConfig
