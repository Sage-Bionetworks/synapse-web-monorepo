import type { SitemapConfig } from '@sage-bionetworks/synapse-portal-framework/sitemap/index'
import {
  datasetsSql,
  fundersSql,
  hackathonsSql,
  initiativesSql,
  studiesSql,
  toolsSql,
} from './resources'

/**
 * Sitemap configuration for the NF Portal.
 * Maps detail page routes to their data sources for dynamic URL generation.
 */
const sitemapConfig: SitemapConfig = {
  detailPages: [
    {
      path: 'Explore/Initiatives',
      sql: initiativesSql,
      primaryKeyColumn: 'initiative',
      urlParamStyle: 'path-segment',
    },
    {
      path: 'Explore/Datasets',
      sql: datasetsSql,
      primaryKeyColumn: 'id',
      urlParamStyle: 'path-segment',
    },
    {
      path: 'Explore/Studies',
      sql: studiesSql,
      primaryKeyColumn: 'studyId',
      urlParamStyle: 'path-segment',
    },
    {
      path: 'Explore/Tools',
      sql: toolsSql,
      primaryKeyColumn: 'resourceId',
      urlParamStyle: 'path-segment',
    },
    {
      path: 'Explore/Hackathon',
      sql: hackathonsSql,
      primaryKeyColumn: 'id',
      urlParamStyle: 'path-segment',
    },
    {
      path: 'Organizations',
      sql: fundersSql,
      primaryKeyColumn: 'abbreviation',
      urlParamStyle: 'path-segment',
    },
  ],
}

export default sitemapConfig
