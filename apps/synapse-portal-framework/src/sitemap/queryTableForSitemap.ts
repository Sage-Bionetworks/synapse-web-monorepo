import {
  QueryResultBundle,
  SynapseClient,
  waitForAsyncResult,
} from '@sage-bionetworks/synapse-client'
import type { DetailPageConfig, ResourceQueryResult } from './types'

// Part masks for query bundle
// See https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/QueryBundleRequest.html
const BUNDLE_MASK_QUERY_RESULTS = 0x1
const BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE = 0x8

/**
 * Extracts the entity ID from a SQL query string.
 * Re-exports from synapse-react-client for convenience.
 */
// Simple extractor for the Synapse entity ID from a SQL string.
// Mirrors the behavior of `parseEntityIdFromSqlStatement` in synapse-react-client
export function extractEntityIdFromSql(sql: string): string | null {
  const matches = sql.match(/from\s+(syn\d+)(?:\.\d+)?/i)
  return matches ? matches[1] : null
}

/**
 * Creates an anonymous SynapseClient instance (no access token)
 */
function createAnonymousSynapseClient(): SynapseClient {
  return new SynapseClient({
    basePath: 'https://repo-prod.prod.sagebase.org',
  })
}

/**
 * Queries Synapse anonymously to fetch all resource IDs for a detail page.
 * Uses pagination to handle large result sets.
 *
 * @param config - The detail page configuration
 * @returns A promise that resolves to the query result with IDs
 */
export async function fetchResourceIds(
  config: DetailPageConfig,
): Promise<ResourceQueryResult> {
  const entityId = extractEntityIdFromSql(config.sql)
  if (!entityId) {
    return {
      config,
      ids: [],
      success: false,
      error: `Could not extract entity ID from SQL: ${config.sql}`,
    }
  }

  const ids: string[] = []
  let offset = 0
  let hasMore = true
  let limit: number | undefined = undefined // Will be set from maxRowsPerPage on first query

  const client = createAnonymousSynapseClient()

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

      // Start the async query job
      const asyncJobId =
        await client.tableServicesClient.postRepoV1EntityIdTableQueryAsyncStart(
          {
            id: entityId,
            queryBundleRequest,
          },
        )

      // Wait for the job to complete using the synapse-client utility
      const result = await waitForAsyncResult(() =>
        client.asynchronousJobServicesClient.getRepoV1AsynchronousJobJobId({
          jobId: asyncJobId.token!,
        }),
      )
      // Cast the asynchronous job result `responseBody` to our QueryResultBundle
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

      // Find the column index for the primary key
      const columnIndex = headers?.findIndex(
        h => h.name?.toLowerCase() === config.primaryKeyColumn.toLowerCase(),
      )

      if (columnIndex === undefined || columnIndex === -1) {
        throw new Error(
          `Column "${
            config.primaryKeyColumn
          }" not found in query results. Available columns: ${headers
            ?.map(h => h.name)
            .join(', ')}`,
        )
      }

      // Extract IDs from rows
      for (const row of rows) {
        const value = row.values?.[columnIndex]
        if (value != null && value !== '') {
          ids.push(String(value))
        }
      }

      // Move to next page
      offset += rows.length

      // If we got fewer rows than the limit, we've reached the end
      // If limit is undefined (shouldn't happen), fall back to checking for empty results on next iteration
      if (limit !== undefined && rows.length < limit) {
        hasMore = false
      }
    }

    return {
      config,
      ids,
      success: true,
    }
  } catch (error) {
    return {
      config,
      ids,
      success: false,
      error: error instanceof Error ? error.message : String(error),
    }
  }
}
