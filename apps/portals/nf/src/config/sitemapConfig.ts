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
      path: 'Explore/Initiatives/DetailsPage',
      sql: initiativesSql,
      primaryKeyColumn: 'initiative',
    },
    {
      path: 'Explore/Datasets/DetailsPage',
      sql: datasetsSql,
      primaryKeyColumn: 'id',
    },
    {
      path: 'Explore/Studies/DetailsPage',
      sql: studiesSql,
      primaryKeyColumn: 'studyId',
    },
    {
      path: 'Explore/Tools/DetailsPage',
      sql: toolsSql,
      primaryKeyColumn: 'resourceId',
    },
    {
      path: 'Explore/Hackathon/DetailsPage',
      sql: hackathonsSql,
      primaryKeyColumn: 'id',
    },
    {
      path: 'Organizations/DetailsPage',
      sql: fundersSql,
      primaryKeyColumn: 'abbreviation',
    },
  ],
}

export default sitemapConfig
