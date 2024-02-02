import React from 'react'
import { SynapseConstants, SynapseUtilityFunctions } from 'synapse-react-client'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { gotoExploreToolsWithFullTextSearch } from './BrowseToolsPage'
import { Link } from '@mui/material'
import { SynapseQueries } from 'synapse-react-client'

export type PopularSearchesProps = {
  sql: string
}

/**
 * Expects table/view column "displayText", and "fullTextSearch".  Create links using this information.
 */
const PopularSearches: React.FunctionComponent<PopularSearchesProps> = ({
  sql,
}) => {
  const partMask = SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
  const entityId = SynapseUtilityFunctions.parseEntityIdFromSqlStatement(sql)
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
    SynapseQueries.useGetQueryResultBundleWithAsyncStatus(request)

  const rowSet = queryResultResponse?.responseBody?.queryResult?.queryResults

  return (
    <div className="PopularSearches">
      {!isLoading &&
        rowSet &&
        rowSet.rows.length > 0 &&
        rowSet.rows.map((row, rowIndex) => {
          const displayTextColumnIndex = rowSet.headers.findIndex(
            (el) => el.name === 'displayText',
          )
          const ftsColumnIndex = rowSet.headers.findIndex(
            (el) => el.name === 'fullTextSearch',
          )
          const displayText = row.values[displayTextColumnIndex]
          const fullTextSearch = row.values[ftsColumnIndex] as string
          return (
            <Link
              key={rowIndex}
              onClick={() => gotoExploreToolsWithFullTextSearch(fullTextSearch)}
            >
              {displayText}
            </Link>
          )
        })}
    </div>
  )
}

export default PopularSearches
