import { useGetQueryResultBundleWithAsyncStatus } from '../../synapse-queries'
import { BUNDLE_MASK_QUERY_RESULTS } from '../../utils/SynapseConstants'
import {
  SynapseTrendingProjectItem,
  trendingProjectsGridTemplateColumns,
} from './SynapseTrendingProjectsItem'
import { Box, useTheme, useMediaQuery } from '@mui/material'
import { Typography } from '@mui/material'

export type SynapseTrendingProjectsProps = {
  past30DaysDownloadMetricsTable: string
}

export function SynapseTrendingProjects({
  past30DaysDownloadMetricsTable,
}: SynapseTrendingProjectsProps) {
  const { data: past30DaysDownloadData } =
    useGetQueryResultBundleWithAsyncStatus({
      entityId: past30DaysDownloadMetricsTable,
      query: {
        sql: `SELECT * FROM ${past30DaysDownloadMetricsTable}`,
        limit: 10,
        sort: [
          { column: 'last_updated', direction: 'DESC' }, // likely unnecessary (I think this MV always contains only the most recent snapshot)
          { column: 'N_UNIQUE_USERS', direction: 'DESC' },
        ],
      },
      partMask: BUNDLE_MASK_QUERY_RESULTS,
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    })
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'))

  const rowSet = past30DaysDownloadData?.responseBody?.queryResult?.queryResults
  const headers = rowSet?.headers
  const entityIdColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'PROJECT_ID',
  )!
  const nUniqueUsersColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'N_UNIQUE_USERS',
  )!
  const egressSizeColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'ESTIMATED_PROJECT_SIZE_IN_GIB',
  )!

  if (!rowSet || rowSet.rows.length == 0) {
    return <></>
  }
  return (
    <>
      <Box
        sx={{
          color: 'primary.100',
          display: isMobileView ? 'none' : 'grid',
          ...trendingProjectsGridTemplateColumns,
          justifyItems: 'start',
        }}
      >
        <Typography variant="body1" sx={{ ml: '15px' }}>
          Rank
        </Typography>
        <Typography variant="body1">Project</Typography>
        <Typography variant="body1">Project Data</Typography>
        {/* This is really Unique Users - Sage LT requested this be changed to Unique Teams on 7/18/2024 */}
        <Typography variant="body1">Unique Teams</Typography>
        <Box></Box>
      </Box>
      {rowSet.rows.map((row, index) => (
        <SynapseTrendingProjectItem
          key={row.rowId}
          rank={index + 1}
          rowValues={row.values}
          entityIdColIndex={entityIdColIndex}
          egressSizeGbColIndex={egressSizeColIndex}
          nUniqueUsersColIndex={nUniqueUsersColIndex}
          isMobileView={isMobileView}
        />
      ))}
    </>
  )
}
