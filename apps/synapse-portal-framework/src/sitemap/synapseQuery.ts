import {
  QueryResultBundle,
  SynapseClient,
  waitForAsyncResult,
} from '@sage-bionetworks/synapse-client'
import type { DetailPageConfig, ResourceQueryResult } from './types'

// Part masks for query bundle - we only need query results
const BUNDLE_MASK_QUERY_RESULTS = 0x1

/**
 * Extracts the entity ID from a SQL query string.
 * Re-exports from synapse-react-client for convenience.
 */
// Simple extractor for the Synapse entity ID from a SQL string.
// Mirrors the behaviour of `parseEntityIdFromSqlStatement` in synapse-react-client
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
  const pageSize = 1000
  let hasMore = true

  const client = createAnonymousSynapseClient()

  try {
    while (hasMore) {
      // Only select the primary key column to minimize data transfer.
      // Quote column names to handle names with spaces or special characters.
      const quotedColumnName = `"${config.primaryKeyColumn}"`
      const selectSql = `SELECT ${quotedColumnName} FROM ${entityId}`

      const queryBundleRequest = {
        concreteType:
          'org.sagebionetworks.repo.model.table.QueryBundleRequest' as const,
        entityId,
        partMask: BUNDLE_MASK_QUERY_RESULTS,
        query: {
          sql: selectSql,
          offset,
          limit: pageSize,
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
      const queryResults = responseBody?.queryResult?.queryResults
      if (!queryResults?.rows) {
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

      // Check if there are more results
      hasMore = rows.length === pageSize
      offset += pageSize
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
