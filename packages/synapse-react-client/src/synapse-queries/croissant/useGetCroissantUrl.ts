import { useGetFullTableQueryResults } from '@/synapse-queries/index'
import { getColumnIndex } from '@/utils/functions/index'
import { BUNDLE_MASK_QUERY_RESULTS } from '@/utils/SynapseConstants'

/* Synapse ID of table with all Croissant data (prod only) */
const CROISSANT_DATA_TABLE = 'syn65903895'

export function useGetCroissantUrl(
  datasetId: number,
  datasetVersionNumber: number,
) {
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
        const row = queryResultBundle.queryResult?.queryResults.rows.find(
          row => {
            return (
              row.values[datasetIdColumnIndex] === `syn${datasetId}` &&
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
