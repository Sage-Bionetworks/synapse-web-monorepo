import React from 'react'
import { useGetQueryResultBundleWithAsyncStatus } from '../../synapse-queries'
import { BUNDLE_MASK_QUERY_RESULTS } from '../../utils/SynapseConstants'
import { Box } from '@mui/material'
import { ReactComponent as TotalDataPlot } from '../../assets/homepage/total-data-static-plot.svg'
import { ReactComponent as TotalDownloadsPlot } from '../../assets/homepage/total-downloads-static-plot.svg'
import { ReactComponent as ActiveUsersPlot } from '../../assets/homepage/active-users-static-plot.svg'
import { SynapseByTheNumbersItem } from './SynapseByTheNumbersItem'

export type SynapseByTheNumbersProps = {
  metricsTable: string
}
const formatter = Intl.NumberFormat('en')

export const SynapseByTheNumbers: React.FunctionComponent<
  SynapseByTheNumbersProps
> = ({ metricsTable }) => {
  const { data } = useGetQueryResultBundleWithAsyncStatus({
    entityId: metricsTable,
    query: {
      sql: `SELECT * FROM ${metricsTable}`,
      limit: 1,
      sort: [{ column: 'last_updated', direction: 'DESC' }],
    },
    partMask: BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  })

  const rowSet = data?.responseBody?.queryResult?.queryResults
  const headers = rowSet?.headers
  const totalSizeInPetaBytesColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'total_data_size_in_pib',
  )!
  const activeUsersLastMonthColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'active_users_last_month',
  )!
  const totalDownloadsLastMonthColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'total_downloads_last_month',
  )!

  if (!rowSet || rowSet.rows.length != 1) {
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
        plot={<TotalDataPlot />}
      />
      <SynapseByTheNumbersItem
        title={values[activeUsersLastMonthColIndex] ?? '-'}
        description={'Active users per month'}
        plot={<ActiveUsersPlot />}
      />
      <SynapseByTheNumbersItem
        title={totalDownloadsPerMonth}
        description={'Total downloads per month'}
        plot={<TotalDownloadsPlot />}
      />
    </Box>
  )
}
