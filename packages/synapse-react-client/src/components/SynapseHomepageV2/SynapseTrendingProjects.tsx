import { useGetQueryResultBundleWithAsyncStatus } from '@/synapse-queries'
import { getColumnIndex } from '@/utils/functions/index'
import { BUNDLE_MASK_QUERY_RESULTS } from '@/utils/SynapseConstants'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import {
  SynapseTrendingProjectItem,
  trendingProjectsGridTemplateColumns,
} from './SynapseTrendingProjectsItem'

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
  const entityIdColIndex = getColumnIndex('PROJECT_ID', headers)!
  const nUniqueUsersColIndex = getColumnIndex('N_UNIQUE_USERS', headers)!
  const altLinkColIndex = getColumnIndex('ALTERNATE_LINK', headers)!
  const egressSizeColIndex = getColumnIndex(
    'ESTIMATED_PROJECT_SIZE_IN_GIB',
    headers,
  )!
  const projectDescriptionColumnIndex = getColumnIndex(
    'PROJECT_DESCRIPTION',
    headers,
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
          projectDescriptionColumnIndex={projectDescriptionColumnIndex}
          altLinkColIndex={altLinkColIndex}
          isMobileView={isMobileView}
        />
      ))}
    </>
  )
}
