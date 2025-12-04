import {
  DetailPageConfig,
  SitemapConfig,
} from '@sage-bionetworks/synapse-portal-framework/src/sitemap/types'
import { datasetsSql, projectsSql, programSql } from './resources'

const detailPages: DetailPageConfig[] = [
  {
    path: 'Explore/Programs/DetailsPage',
    sql: programSql,
    primaryKeyColumn: 'Program',
  },
  {
    path: 'Explore/Projects/DetailsPage',
    sql: projectsSql,
    primaryKeyColumn: 'Project',
  },
  {
    path: 'Explore/Datasets/DetailsPage',
    sql: datasetsSql,
    primaryKeyColumn: 'id',
  },
]

const sitemapConfig: SitemapConfig = {
  detailPages,
}

export default sitemapConfig
