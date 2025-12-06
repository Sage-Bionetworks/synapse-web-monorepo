import {
  DetailPageConfig,
  SitemapConfig,
} from '@sage-bionetworks/synapse-portal-framework/src/sitemap/types'
import { projectsSql, studiesSql } from './resources'

const detailPages: DetailPageConfig[] = [
  {
    path: 'Explore/Projects/DetailsPage',
    sql: projectsSql,
    primaryKeyColumn: 'shortName',
  },
  {
    path: 'Explore/Studies/DetailsPage',
    sql: studiesSql,
    primaryKeyColumn: 'studyKey',
  },
]

const sitemapConfig: SitemapConfig = {
  detailPages,
}

export default sitemapConfig
