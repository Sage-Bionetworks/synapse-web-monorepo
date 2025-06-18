import { useGetQueryResultBundleWithAsyncStatus } from '@/synapse-queries'
import { BUNDLE_MASK_QUERY_RESULTS } from '@/utils/SynapseConstants'
import Box from '@mui/material/Box'
import { SynapseByTheNumbersItem } from './SynapseByTheNumbersItem'

export type SynapseByTheNumbersProps = {
  metricsTable: string
}
const formatter = Intl.NumberFormat('en')

export function SynapseByTheNumbers({
  metricsTable,
}: SynapseByTheNumbersProps) {
  const { data } = useGetQueryResultBundleWithAsyncStatus({
    entityId: metricsTable,
    query: {
      sql: `SELECT * FROM ${metricsTable}`,
      limit: 12, // past year
      sort: [{ column: 'export_date', direction: 'DESC' }],
    },
    partMask: BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  })

  const rowSet = data?.responseBody?.queryResult?.queryResults
  const headers = rowSet?.headers
  const exportDateColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'export_date',
  )!
  const totalSizeInPetaBytesColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'total_data_size_in_pib',
  )!
  const activeUsersLastMonthColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'active_users_last_month',
  )!
  const totalDownloadsLastMonthColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'total_downloads_last_month',
  )!

  if (!rowSet || rowSet.rows.length == 0) {
    return <></>
  }
  const values = rowSet.rows[0].values

  const totalSizeRawValue = values[totalSizeInPetaBytesColIndex]
  const totalSize =
    totalSizeRawValue != null ? Number(totalSizeRawValue).toFixed(2) : '-'
  const totalDownloadsRawValue = values[totalDownloadsLastMonthColIndex]
  const totalDownloadsPerMonth =
    totalDownloadsRawValue != null
      ? formatter.format(parseInt(totalDownloadsRawValue))
      : '-'
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}
    >
      <SynapseByTheNumbersItem
        title={`${totalSize} Petabytes`}
        description={'Total data'}
        rows={rowSet.rows}
        plotXColIndex={exportDateColIndex}
        plotYColIndex={totalSizeInPetaBytesColIndex}
      />
      <SynapseByTheNumbersItem
        title={values[activeUsersLastMonthColIndex] ?? '-'}
        description={'Active users per month'}
        rows={rowSet.rows}
        plotXColIndex={exportDateColIndex}
        plotYColIndex={activeUsersLastMonthColIndex}
      />
      <SynapseByTheNumbersItem
        title={totalDownloadsPerMonth}
        description={'Total downloads per month'}
        rows={rowSet.rows}
        plotXColIndex={exportDateColIndex}
        plotYColIndex={totalDownloadsLastMonthColIndex}
      />
    </Box>
  )
}
