import { Link } from '@mui/material'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { useGetQueryResultBundleWithAsyncStatus } from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import { parseEntityIdFromSqlStatement } from 'synapse-react-client/utils/functions/SqlFunctions'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'

export type PopularSearchesProps = {
  sql: string
  onGoToExploreToolsWithFullTextSearch: (fullTextSearchTerm: string) => void
}

/**
 * Expects table/view column "displayText", and "fullTextSearch".  Create links using this information.
 */
function PopularSearches({
  sql,
  onGoToExploreToolsWithFullTextSearch,
}: PopularSearchesProps) {
  const partMask = SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
  const entityId = parseEntityIdFromSqlStatement(sql)
  const request: QueryBundleRequest = {
    partMask,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId,
    query: {
      sql,
      limit: 4,
    },
  }
  const { data: queryResultResponse, isLoading } =
    useGetQueryResultBundleWithAsyncStatus(request)

  const rowSet = queryResultResponse?.responseBody?.queryResult?.queryResults

  return (
    <div className="PopularSearches">
      {!isLoading &&
        rowSet &&
        rowSet.rows.length > 0 &&
        rowSet.rows.map((row, rowIndex) => {
          const displayTextColumnIndex = rowSet.headers.findIndex(
            el => el.name === 'displayText',
          )
          const ftsColumnIndex = rowSet.headers.findIndex(
            el => el.name === 'fullTextSearch',
          )
          const displayText = row.values[displayTextColumnIndex]
          const fullTextSearch = row.values[ftsColumnIndex] as string
          return (
            <Link
              key={rowIndex}
              onClick={() =>
                onGoToExploreToolsWithFullTextSearch(fullTextSearch)
              }
            >
              {displayText}
            </Link>
          )
        })}
    </div>
  )
}

export default PopularSearches
