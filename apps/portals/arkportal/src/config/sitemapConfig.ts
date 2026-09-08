import {
  DetailPageConfig,
  SitemapConfig,
} from '@sage-bionetworks/synapse-portal-framework/sitemap/types'
import { datasetsSql, projectsSql, programSql } from './resources'

const detailPages: DetailPageConfig[] = [
  {
    path: 'Explore/Programs',
    urlParamStyle: 'path-segment',
    sql: programSql,
    primaryKeyColumn: 'Program',
  },
  {
    path: 'Explore/Projects',
    urlParamStyle: 'path-segment',
    sql: projectsSql,
    primaryKeyColumn: 'Project',
  },
  {
    path: 'Explore/Datasets',
    urlParamStyle: 'path-segment',
    sql: datasetsSql,
    primaryKeyColumn: 'id',
  },
]

const sitemapConfig: SitemapConfig = {
  detailPages,
}

export default sitemapConfig
