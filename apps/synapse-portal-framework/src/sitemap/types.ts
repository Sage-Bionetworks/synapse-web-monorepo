/**
 * Configuration for a detail page that should have its dynamic routes included in the sitemap.
 */
export interface DetailPageConfig {
  /**
   * The path to the detail page (e.g., 'Explore/Studies/DetailsPage')
   */
  path: string

  /**
   * The SQL query to fetch all resources for this detail page
   * (e.g., 'SELECT * FROM syn12345')
   */
  sql: string

  /**
   * The column name that contains the primary key/identifier for each resource
   * This will be used as the search parameter value in the generated URLs
   */
  primaryKeyColumn: string

  /**
   * Controls how the record identifier is appended to the detail page URL.
   * - 'query-param' (default): `/<path>?<primaryKeyColumn>=<id>`
   *   e.g. `/Explore/Studies/DetailsPage?studyId=syn123`
   * - 'path-segment': `/<path>/<id>`
   *   e.g. `/Explore/Studies/syn123`
   *
   * Use 'path-segment' for portals that have migrated to SSR with `/:param` routing.
   * Defaults to 'query-param' for backwards compatibility.
   */
  urlParamStyle?: 'query-param' | 'path-segment'

  /**
   * Whether to statically prerender every record's detail page at build time.
   *
   * - `true` (default): prerender every record returned by `sql`. Use for
   *   detail pages with bounded cardinality where SEO benefits outweigh the
   *   build cost.
   * - `false`: prerender exactly one sample record (the first one returned
   *   by `sql`) and leave the rest to the SPA fallback at runtime. Use for
   *   high-cardinality detail pages (e.g. >1000 records) where the build-time
   *   cost outweighs the SEO benefit. The single prerendered page is required
   *   to satisfy React Router's `ssr:false` validator, which rejects `loader`
   *   exports on routes that have zero prerendered paths.
   *
   * Either way, every record is still listed in `sitemap.xml` — this flag
   * only affects build-time HTML generation, not sitemap inclusion.
   */
  prerender?: boolean
}

/**
 * Sitemap configuration for a portal
 */
export interface SitemapConfig {
  /**
   * List of detail pages to include in the sitemap with dynamic resource IDs
   */
  detailPages: DetailPageConfig[]
}

/**
 * Result from querying Synapse for resource IDs
 */
export interface ResourceQueryResult {
  /** The detail page config that was queried */
  config: DetailPageConfig
  /** Array of primary key values for this resource type */
  ids: string[]
  /** Whether the query succeeded */
  success: boolean
  /** Error message if the query failed */
  error?: string
}

/**
 * A single URL entry for the sitemap
 */
export interface SitemapUrl {
  /** The full URL (loc) */
  loc: string
  /** Last modified date in ISO format */
  lastmod: string
}

/**
 * Maximum number of URLs allowed in a single sitemap file (per sitemap protocol spec)
 */
export const MAX_URLS_PER_SITEMAP = 50000

/**
 * Maximum file size for a single sitemap (50MB uncompressed, per spec)
 * We'll use a more conservative limit
 */
export const MAX_SITEMAP_SIZE_BYTES = 10 * 1024 * 1024 // 10MB
