import {
  QueryResultBundle,
  SynapseClient,
  waitForAsyncResult,
} from '@sage-bionetworks/synapse-client'
import { extractEntityIdFromSql } from '../sitemap/queryTableForSitemap'

const BUNDLE_MASK_QUERY_RESULTS = 0x1

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

/**
 * Creates an anonymous SynapseClient instance (no access token).
 *
 * This is the same pattern used by fetchResourceIds in the sitemap tooling.
 */
function createAnonymousSynapseClient(): SynapseClient {
  return new SynapseClient({
    basePath: 'https://repo-prod.prod.sagebase.org',
  })
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
 * @param config - Describes which table, columns, and filter to use
 * @param paramValue - The URL parameter value to filter by (e.g. 'syn12345')
 * @returns The title and description, or nulls if not found
 */
export async function fetchDetailPageMetadata(
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
