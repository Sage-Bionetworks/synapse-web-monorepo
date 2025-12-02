import {
  DetailPageConfig,
  SitemapConfig,
} from '@sage-bionetworks/synapse-portal-framework/src/sitemap/types'
import { datasetsSql } from './resources'

const detailPages: DetailPageConfig[] = [
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
