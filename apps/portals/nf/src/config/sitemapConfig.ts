import type { SitemapConfig } from '@sage-bionetworks/synapse-portal-framework/src/sitemap'
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
    },
    {
      path: 'Explore/Datasets',
      sql: datasetsSql,
      primaryKeyColumn: 'id',
    },
    {
      path: 'Explore/Studies',
      sql: studiesSql,
      primaryKeyColumn: 'studyId',
    },
    {
      path: 'Explore/Tools',
      sql: toolsSql,
      primaryKeyColumn: 'resourceId',
    },
    {
      path: 'Explore/Hackathon',
      sql: hackathonsSql,
      primaryKeyColumn: 'id',
    },
    {
      path: 'Organizations',
      sql: fundersSql,
      primaryKeyColumn: 'abbreviation',
    },
  ],
}

export default sitemapConfig
