import {
  QueryResultBundle,
  waitForAsyncResult,
} from '@sage-bionetworks/synapse-client'
import { extractEntityIdFromSql } from '../sitemap/queryTableForSitemap'
import { PrerenderCache } from './cache'
import { createAnonymousSynapseClient } from './synapseClient'

const BUNDLE_MASK_QUERY_RESULTS = 0x1
const BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE = 0x8

/**
 * Configuration for fetching metadata for a single detail page resource.
 */
export interface DetailPageMetadataConfig {
  /** SQL query for the table (e.g. 'SELECT * FROM syn52694652') */
  sql: string
  /** Column name that contains the display title (e.g. 'studyName') */
  titleColumn: string
  /** Column name that contains the description (optional) */
  descriptionColumn?: string
  /** Column name to filter by — must match the URL path parameter (e.g. 'studyId') */
  paramName: string
}

/**
 * Metadata extracted from a Synapse table row for a single detail page.
 */
export interface DetailPageMetadata {
  title: string | null
  description: string | null
}

// ---------------------------------------------------------------------------
// In-memory cache
// ---------------------------------------------------------------------------

/**
 * Module-level cache for detail page metadata.
 *
 * Pre-populated via {@link preloadDetailPageMetadata} during SSG builds.
 * Cache key format: `${sql}:${paramValue}`
 */
const metadataCache = new PrerenderCache<string, DetailPageMetadata>()

/**
 * Builds a cache key from the SQL query and filter parameter value.
 */
function cacheKey(
  config: DetailPageMetadataConfig,
  paramValue: string,
): string {
  return `${config.sql}:${paramValue}`
}

/**
 * Queries a Synapse table anonymously to fetch the title and description
 * for a single detail page resource.
 *
 * Used by:
 * - Route `loader` exports at build time (pre-rendering) to provide data for `meta()`.
 * - Route `clientLoader` exports at runtime as a fallback for non-pre-rendered paths.
 *
 * This function is isomorphic — it works in both Node.js and browser environments.
 *
 * Results are cached in memory for the lifetime of the build process.
 * See {@link metadataCache} for details.
 *
 * @param config - Describes which table, columns, and filter to use
 * @param paramValue - The URL parameter value to filter by (e.g. 'syn12345')
 * @returns The title and description, or nulls if not found
 */
export async function fetchDetailPageMetadata(
  config: DetailPageMetadataConfig,
  paramValue: string,
): Promise<DetailPageMetadata> {
  const key = cacheKey(config, paramValue)
  return metadataCache.get(key, () =>
    fetchDetailPageMetadataFromApi(config, paramValue),
  )
}

/**
 * Batch-preloads metadata for ALL records in a Synapse table into the cache.
 *
 * Designed to be called once from `prerender()` in `react-router.config.ts`
 * during SSG builds. After calling this function, individual
 * {@link fetchDetailPageMetadata} calls for the same table become instant
 * cache lookups instead of per-record API calls.
 *
 * The function queries the table for ALL rows (paginated), extracts the
 * title and description columns, and pre-populates {@link metadataCache}
 * using its `set()` method.
 *
 * Safe to call multiple times — subsequent calls are no-ops if the cache
 * is still populated.
 *
 * @param config - Describes which table and columns to query
 * @returns The number of entries preloaded
 */
export async function preloadDetailPageMetadata(
  config: DetailPageMetadataConfig,
): Promise<number> {
  const entityId = extractEntityIdFromSql(config.sql)
  if (!entityId) {
    console.warn(
      `preloadDetailPageMetadata: Could not extract entity ID from SQL: ${config.sql}`,
    )
    return 0
  }

  const client = createAnonymousSynapseClient()

  let offset = 0
  let hasMore = true
  let limit: number | undefined = undefined
  let preloadedCount = 0
  console.log(
    `preloadDetailPageMetadata: Preloading entries for entity ${entityId}...`,
  )

  try {
    while (hasMore) {
      // On first query, also request maxRowsPerPage to determine optimal page size
      const partMask =
        limit === undefined
          ? BUNDLE_MASK_QUERY_RESULTS | BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE
          : BUNDLE_MASK_QUERY_RESULTS

      const queryBundleRequest = {
        concreteType:
          'org.sagebionetworks.repo.model.table.QueryBundleRequest' as const,
        entityId,
        partMask,
        query: {
          sql: config.sql,
          offset,
          limit,
        },
      }

      const asyncJobId =
        await client.tableServicesClient.postRepoV1EntityIdTableQueryAsyncStart(
          {
            id: entityId,
            queryBundleRequest,
          },
        )

      const result = await waitForAsyncResult(() =>
        client.asynchronousJobServicesClient.getRepoV1AsynchronousJobJobId({
          jobId: asyncJobId.token!,
        }),
      )

      const responseBody = result.responseBody as QueryResultBundle | undefined

      // On first query, extract maxRowsPerPage to use as limit for subsequent queries
      if (limit === undefined && responseBody?.maxRowsPerPage) {
        limit = responseBody.maxRowsPerPage
      }

      const queryResults = responseBody?.queryResult?.queryResults
      if (!queryResults?.rows || queryResults.rows.length === 0) {
        hasMore = false
        continue
      }

      const rows = queryResults.rows
      const headers = queryResults.headers

      // Find column indices
      const paramIndex = headers?.findIndex(
        h => h.name?.toLowerCase() === config.paramName.toLowerCase(),
      )
      const titleIndex = headers?.findIndex(
        h => h.name?.toLowerCase() === config.titleColumn.toLowerCase(),
      )
      const descriptionIndex = config.descriptionColumn
        ? headers?.findIndex(
            h =>
              h.name?.toLowerCase() === config.descriptionColumn!.toLowerCase(),
          )
        : -1

      if (paramIndex === undefined || paramIndex === -1) {
        console.warn(
          `preloadDetailPageMetadata: Column "${config.paramName}" not found in query results for entity ${entityId}`,
        )
        return preloadedCount
      }

      // Extract metadata from each row and populate the cache
      for (const row of rows) {
        const paramValue = row.values?.[paramIndex]
        if (paramValue == null || paramValue === '') continue

        const title =
          titleIndex !== undefined && titleIndex >= 0
            ? row.values?.[titleIndex] ?? null
            : null
        const description =
          descriptionIndex !== undefined && descriptionIndex >= 0
            ? row.values?.[descriptionIndex] ?? null
            : null

        metadataCache.set(cacheKey(config, String(paramValue)), {
          title,
          description,
        })
        preloadedCount++
      }

      // Move to next page
      offset += rows.length

      // If we got fewer rows than the limit, we've reached the end
      if (limit !== undefined && rows.length < limit) {
        hasMore = false
      }
    }

    console.log(
      `preloadDetailPageMetadata: Preloaded ${preloadedCount} entries for entity ${entityId}`,
    )
    return preloadedCount
  } catch (error) {
    console.warn(
      `preloadDetailPageMetadata: Failed to preload metadata for entity ${entityId}:`,
      error instanceof Error ? error.message : error,
    )
    return preloadedCount
  }
}

/**
 * Internal: performs the actual Synapse API call (uncached).
 */
async function fetchDetailPageMetadataFromApi(
  config: DetailPageMetadataConfig,
  paramValue: string,
): Promise<DetailPageMetadata> {
  const entityId = extractEntityIdFromSql(config.sql)
  if (!entityId) {
    console.warn(
      `fetchDetailPageMetadata: Could not extract entity ID from SQL: ${config.sql}`,
    )
    return { title: null, description: null }
  }

  const client = createAnonymousSynapseClient()

  const queryBundleRequest = {
    concreteType:
      'org.sagebionetworks.repo.model.table.QueryBundleRequest' as const,
    entityId,
    partMask: BUNDLE_MASK_QUERY_RESULTS,
    query: {
      sql: config.sql,
      additionalFilters: [
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter' as const,
          columnName: config.paramName,
          operator: 'EQUAL' as const,
          values: [paramValue],
        },
      ],
      limit: 1,
    },
  }

  try {
    const asyncJobId =
      await client.tableServicesClient.postRepoV1EntityIdTableQueryAsyncStart({
        id: entityId,
        queryBundleRequest,
      })

    const result = await waitForAsyncResult(() =>
      client.asynchronousJobServicesClient.getRepoV1AsynchronousJobJobId({
        jobId: asyncJobId.token!,
      }),
    )

    const responseBody = result.responseBody as QueryResultBundle | undefined
    const queryResults = responseBody?.queryResult?.queryResults
    const headers = queryResults?.headers
    const firstRow = queryResults?.rows?.[0]

    if (!headers || !firstRow?.values) {
      console.warn(
        `fetchDetailPageMetadata: No rows found for ${config.paramName}=${paramValue} in entity ${entityId}`,
        { rowCount: queryResults?.rows?.length, headerCount: headers?.length },
      )
      return { title: null, description: null }
    }

    const titleIndex = headers.findIndex(
      h => h.name?.toLowerCase() === config.titleColumn.toLowerCase(),
    )
    const descriptionIndex = config.descriptionColumn
      ? headers.findIndex(
          h =>
            h.name?.toLowerCase() === config.descriptionColumn!.toLowerCase(),
        )
      : -1

    const title = titleIndex >= 0 ? firstRow.values[titleIndex] ?? null : null
    const description =
      descriptionIndex >= 0 ? firstRow.values[descriptionIndex] ?? null : null

    return { title, description }
  } catch (error) {
    console.warn(
      `fetchDetailPageMetadata: Failed to fetch metadata for ${config.paramName}=${paramValue}:`,
      error instanceof Error ? error.message : error,
    )
    return { title: null, description: null }
  }
}
