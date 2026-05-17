import {
  DetailPageConfig,
  SitemapConfig,
} from '@sage-bionetworks/synapse-portal-framework/sitemap/types'
import {
  datasetsSql,
  educationSql,
  grantsSql,
  peopleSql,
  publicationSql,
  toolsSql,
} from './resources'

const detailPages: DetailPageConfig[] = [
  {
    path: 'Explore/Grants',
    sql: grantsSql,
    primaryKeyColumn: 'grantId',
    urlParamStyle: 'path-segment',
  },
  {
    path: 'Explore/People',
    sql: peopleSql,
    primaryKeyColumn: 'name',
    urlParamStyle: 'path-segment',
  },
  {
    path: 'Explore/Publications',
    sql: publicationSql,
    primaryKeyColumn: 'pubMedId',
    urlParamStyle: 'path-segment',
    // >4000 publications — too many to justify statically generating each
    // page. Only one sample page is prerendered; the rest fall through to
    // the SPA fallback. All entries still appear in sitemap.xml.
    prerender: false,
  },
  {
    path: 'Explore/Datasets',
    sql: datasetsSql,
    primaryKeyColumn: 'datasetId',
    urlParamStyle: 'path-segment',
  },
  {
    path: 'Explore/Tools',
    sql: toolsSql,
    primaryKeyColumn: 'toolName',
    urlParamStyle: 'path-segment',
  },
  {
    path: 'Explore/Educational Resources',
    sql: educationSql,
    primaryKeyColumn: 'title',
    urlParamStyle: 'path-segment',
  },
]

const sitemapConfig: SitemapConfig = {
  detailPages,
}

export default sitemapConfig
