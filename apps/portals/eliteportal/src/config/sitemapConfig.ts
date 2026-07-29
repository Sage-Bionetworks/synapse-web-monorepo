import {
  DetailPageConfig,
  SitemapConfig,
} from '@sage-bionetworks/synapse-portal-framework/sitemap/types'
import {
  programsSql,
  projectsSql,
  studiesSql,
  datasetsSql,
  modelsSql,
} from './resources'

const detailPages: DetailPageConfig[] = [
  {
    path: 'Explore/Projects/DetailsPage',
    sql: projectsSql,
    primaryKeyColumn: 'shortName',
  },
  {
    path: 'Explore/Programs/DetailsPage',
    sql: programsSql,
    primaryKeyColumn: 'program',
  },
  {
    path: 'Explore/Studies/DetailsPage',
    sql: studiesSql,
    primaryKeyColumn: 'studyKey',
  },
  {
    path: 'Explore/Datasets/DetailsPage',
    sql: datasetsSql,
    primaryKeyColumn: 'id',
  },
  {
    path: 'Explore/Models/DetailsPage',
    sql: modelsSql,
    primaryKeyColumn: 'id',
  },
]

const sitemapConfig: SitemapConfig = {
  detailPages,
}

export default sitemapConfig
