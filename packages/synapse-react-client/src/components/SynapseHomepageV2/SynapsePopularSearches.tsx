import React from 'react'

import { SynapseConstants } from 'src/utils'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { useGetQueryResultBundleWithAsyncStatus } from '../../synapse-queries'
import { Box } from '@mui/material'
import { Chip } from '@mui/material'

export const onSearch = (value: string) => {
  window.location.assign(`/Search:${encodeURIComponent(value)}`)
}

export type SynapsePopularSearchesProps = {
  sourceTable: string
}

export const SynapsePopularSearches: React.FunctionComponent<
  SynapsePopularSearchesProps
> = ({ sourceTable }) => {
  const partMask = SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
  const request: QueryBundleRequest = {
    partMask,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: sourceTable,
    query: {
      sql: `SELECT * FROM ${sourceTable}`,
      limit: 10,
    },
  }
  const { data: queryResultResponse } =
    useGetQueryResultBundleWithAsyncStatus(request)

  const rowSet = queryResultResponse?.responseBody?.queryResult?.queryResults
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30px',
        flexWrap: 'wrap',
      }}
    >
      {/* TODO: Do the popular searches match the autocomplete from the search box?  Maybe move these to SynapseHomepage Search */}
      {rowSet &&
        rowSet.rows.map(row => {
          const value = row.values[0]
          return value ? (
            <Chip
              key={value}
              label={value}
              onClick={() => onSearch(value)}
              variant="outlined"
              // by default, on hover the background color changes to mostly transparent (4%), which looks terrible on top of the header splash image
              sx={{
                color: '#2A5850',
                backgroundColor: '#DAE9E7',
                '&:hover': { backgroundColor: '#f5f5f3 !important' },
              }}
            />
          ) : (
            <></>
          )
        })}
    </Box>
  )
}
