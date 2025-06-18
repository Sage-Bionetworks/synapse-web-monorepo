import { useGetQueryResultBundleWithAsyncStatus } from '@/synapse-queries'
import {
  BackendDestinationEnum,
  getColumnIndex,
  getEndpoint,
} from '@/utils/functions/index'
import { BUNDLE_MASK_QUERY_RESULTS } from '@/utils/SynapseConstants'
import Box from '@mui/material/Box'
import { SynapseFeaturedDatasetItem } from './SynapseFeaturedDatasetItem'

export type SynapseFeaturedDatasetsProps = {
  sourceTable: string
}

export function SynapseFeaturedDatasets({
  sourceTable,
}: SynapseFeaturedDatasetsProps) {
  // TODO: Figure out how we should present the featured datasets.  Random selection?  Paginated with page nav?
  // TODO: Only show 3 cards, and a "Show all datasets" which shows another 3?
  const { data } = useGetQueryResultBundleWithAsyncStatus({
    entityId: sourceTable,
    query: {
      sql: `SELECT * FROM ${sourceTable} where name is not null and isFeatured = 'true'`,
      limit: 6,
      sort: [
        //TODO: sort?
        // { column: 'last_updated', direction: 'DESC' },
      ],
    },
    partMask: BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  })

  const rowSet = data?.responseBody?.queryResult?.queryResults
  const headers = rowSet?.headers
  const entityIdColIndex = getColumnIndex('id', headers)!
  const communityColIndex = getColumnIndex('community', headers)!
  const nameColIndex = getColumnIndex('name', headers)!
  const descriptionColIndex = getColumnIndex('description', headers)!
  const contributorsColIndex = getColumnIndex('contributors', headers)!
  const keywordsColIndex = getColumnIndex('keywords', headers)!
  const individualsColIndex = getColumnIndex('individuals', headers)!
  const imageColIndex = getColumnIndex('image', headers)!
  const sizeColIndex = getColumnIndex('size', headers)!
  const sizeUnitColIndex = getColumnIndex('sizeUnit', headers)!
  const linkColIndex = getColumnIndex('link', headers)!

  if (!rowSet || rowSet.rows.length == 0) {
    return <></>
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
      }}
    >
      {rowSet.rows.map((row, index) => {
        const community = row.values[communityColIndex]
        const id = row.values[entityIdColIndex]
        const name = row.values[nameColIndex]
        const description = row.values[descriptionColIndex]
        const contributors = row.values[contributorsColIndex]
        const keywords = row.values[keywordsColIndex]
        const individuals = row.values[individualsColIndex]
        const imageFileId = row.values[imageColIndex]
        const size = row.values[sizeColIndex]
        const sizeUnit = row.values[sizeUnitColIndex]
        const linkColumnValue = row.values[linkColIndex]

        const link =
          linkColumnValue ??
          `${getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT)}Synapse:${id}`
        return (
          <Box key={index} sx={{ maxWidth: '450px', width: '100%' }}>
            <SynapseFeaturedDatasetItem
              sourceTable={sourceTable}
              community={community}
              link={link}
              name={name}
              description={description}
              keywords={keywords}
              individuals={individuals}
              contributors={contributors}
              imageFileId={imageFileId}
              size={size}
              sizeUnit={sizeUnit}
            />
          </Box>
        )
      })}
    </Box>
  )
}
