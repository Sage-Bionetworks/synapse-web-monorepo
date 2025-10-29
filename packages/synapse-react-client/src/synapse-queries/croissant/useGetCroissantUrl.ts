import { useGetFullTableQueryResults } from '@/synapse-queries/index'
import { getColumnIndex } from '@/utils/functions/index'
import { normalizeSynPrefix } from '@/utils/functions/EntityTypeUtils'
import { BUNDLE_MASK_QUERY_RESULTS } from '@/utils/SynapseConstants'

/* Synapse ID of table with all Croissant data (prod only) */
const CROISSANT_DATA_TABLE = 'syn65903895'

/**
 * Retrieves the Croissant URL for a given dataset ID and version number. Currently, we fetch the contents of a TableEntity
 * in Synapse prod that contains the Croissant URLs for all datasets.
 */
export function useGetCroissantUrl(
  datasetId: string,
  datasetVersionNumber: number,
) {
  /**
   * At the time of writing, the Croissant table is small, and the number of cards that appear on a page is larger,
   * so it is more efficient to fetch the entire table, then filter on the client-side. Consider a different approach
   * if the table grows significantly.
   */
  return useGetFullTableQueryResults<string | null>(
    {
      entityId: CROISSANT_DATA_TABLE,
      query: { sql: `SELECT * FROM ${CROISSANT_DATA_TABLE}` },
      partMask: BUNDLE_MASK_QUERY_RESULTS,
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    },
    {
      // No need to frequently re-fetch
      staleTime: Infinity,
      select: queryResultBundle => {
        const datasetIdColumnIndex = getColumnIndex(
          'dataset',
          queryResultBundle.queryResult?.queryResults.headers,
        )
        const datasetVersionColumnIndex = getColumnIndex(
          'dataset_version',
          queryResultBundle.queryResult?.queryResults.headers,
        )
        const croissantS3FileColumnIndex = getColumnIndex(
          'croissant_file_s3_object',
          queryResultBundle.queryResult?.queryResults.headers,
        )

        if (
          datasetIdColumnIndex === undefined ||
          datasetVersionColumnIndex === undefined ||
          croissantS3FileColumnIndex === undefined
        ) {
          return null
        }
        const normalizedDatasetId = normalizeSynPrefix(datasetId)
        const row = queryResultBundle.queryResult?.queryResults.rows.find(
          row => {
            const rowDatasetId = row.values[datasetIdColumnIndex]
            if (typeof rowDatasetId !== 'string') {
              return false
            }
            return (
              normalizeSynPrefix(rowDatasetId) === normalizedDatasetId &&
              String(row.values[datasetVersionColumnIndex]) ===
                String(datasetVersionNumber)
            )
          },
        )
        return row?.values[croissantS3FileColumnIndex] ?? null
      },
    },
  )
}
