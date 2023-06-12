import React, { useEffect, useState } from 'react'
import {
  SynapseClient,
  SynapseConstants,
  SynapseContextUtils,
  SynapseUtilityFunctions,
} from 'synapse-react-client'
import { QueryBundleRequest, RowSet } from '@sage-bionetworks/synapse-types'
import { gotoExploreToolsWithFullTextSearch } from './BrowseToolsPage'
import { Link } from '@mui/material'

export type PopularSearchesProps = {
  sql: string
}

/**
 * Expects table/view column "displayText", and "fullTextSearch".  Create links using this information.
 */
const PopularSearches: React.FunctionComponent<PopularSearchesProps> = ({
  sql,
}) => {
  const { accessToken } = SynapseContextUtils.useSynapseContext()
  const [rowSet, setRowSet] = useState<RowSet>()
  const [isLoading, setIsLoading] = useState<boolean>()
  let mounted = true
  useEffect(() => {
    const fetchData = async function () {
      setIsLoading(true)
      const entityId =
        SynapseUtilityFunctions.parseEntityIdFromSqlStatement(sql)
      const partMask = SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
      const request: QueryBundleRequest = {
        partMask,
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        entityId,
        query: {
          sql,
          limit: 4,
        },
      }

      const queryResultBundle = await SynapseClient.getQueryTableResults(
        request,
        accessToken,
      )
      setIsLoading(false)
      const { queryResult } = queryResultBundle
      const queryResults = queryResult?.queryResults
      if (queryResults) {
        if (mounted) {
          setRowSet(queryResults)
        }
      } else {
        console.log('PopularSearches: Error getting data')
      }
    }
    fetchData()

    return () => {
      mounted = false
    }
  }, [sql, accessToken])

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
