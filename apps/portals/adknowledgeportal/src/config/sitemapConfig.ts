import type { SitemapConfig } from '@sage-bionetworks/synapse-portal-framework/src/sitemap'
import { programsSql, projectsSql, studiesSql } from './resources'

/**
 * Sitemap configuration for the AD Knowledge Portal.
 * Maps detail page routes to their data sources for dynamic URL generation.
 */
const sitemapConfig: SitemapConfig = {
  detailPages: [
    {
      path: 'Explore/Programs/DetailsPage',
      sql: programsSql,
      primaryKeyColumn: 'Program',
    },
    {
      path: 'Explore/Projects/DetailsPage',
      sql: projectsSql,
      primaryKeyColumn: 'Grant Number',
    },
    {
      path: 'Explore/Studies/DetailsPage',
      sql: studiesSql,
      primaryKeyColumn: 'Study',
    },
  ],
}

export default sitemapConfig
