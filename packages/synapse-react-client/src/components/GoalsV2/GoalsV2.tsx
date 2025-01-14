import React, { useState } from 'react'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from '../../utils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { ErrorBanner } from '../error/ErrorBanner'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import useShowDesktop from '../../utils/hooks/useShowDesktop'
import GoalsV2Mobile from './GoalsV2.Mobile'
import GoalsV2Desktop from './GoalsV2.Desktop'
import { getFieldIndex } from '../../utils/functions/queryUtils'
import { Box, Typography, Button } from '@mui/material'
import useGetGoalData from '../../utils/hooks/useGetGoalData'

export type GoalsV2Props = {
  entityId: string
  dataLink: string
}

export type GoalsV2DataProps = {
  countSql?: string
  title: string
  summary: string
  link: string
  asset: string
}

enum ExpectedColumns {
  TABLEID = 'TableId', // Both TableId or CountSql are used to indicate what Table rows to count.
  COUNT_SQL = 'CountSql', // Code uses CountSql over TableId if defined (if the CountSql column is in the schema and filled in).
  TITLE = 'Title',
  SUMMARY = 'Summary',
  LINK = 'Link',
  ASSET = 'Asset',
}

// PORTALS-2367
const GOALSV2_DESKTOP_MIN_BREAKPOINT = 1200

export const GoalsV2: React.FC<GoalsV2Props> = (props: GoalsV2Props) => {
  const { entityId, dataLink } = props
  const [assets, setAssets] = useState<string[] | undefined>()
  const [error, setError] = useState<string | SynapseClientError | undefined>()
  const showDesktop = useShowDesktop(GOALSV2_DESKTOP_MIN_BREAKPOINT)
  const queryBundleRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId,
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: {
      sql: `select * from ${entityId} order by ItemOrder`,
    },
  }
  const { data: queryResultBundle } =
    useGetQueryResultBundle(queryBundleRequest)
  const { assets: goalAssets, error: goalError } = useGetGoalData(
    entityId,
    queryResultBundle,
  )
  if (goalError) {
    setError(goalError)
  }
  if (goalAssets) {
    setAssets(goalAssets)
  }

  const tableIdColumnIndex = getFieldIndex(
    ExpectedColumns.TABLEID,
    queryResultBundle,
  )
  const countSqlColumnIndex = getFieldIndex(
    ExpectedColumns.COUNT_SQL,
    queryResultBundle,
  )

  const titleColumnIndex = getFieldIndex(
    ExpectedColumns.TITLE,
    queryResultBundle,
  )
  const summaryColumnIndex = getFieldIndex(
    ExpectedColumns.SUMMARY,
    queryResultBundle,
  )
  const linkColumnIndex = getFieldIndex(ExpectedColumns.LINK, queryResultBundle)

  const goalsDataArray: GoalsV2DataProps[] =
    queryResultBundle?.queryResult!.queryResults.rows.map((el, index) => {
      const values = el.values as string[]
      if (values.some(value => value === null)) {
        console.warn('Row has null value(s) when no nulls expected')
      }
      const tableId =
        tableIdColumnIndex > -1 ? values[tableIdColumnIndex] : undefined
      let countSql
      if (countSqlColumnIndex > -1 && values[countSqlColumnIndex]) {
        countSql = values[countSqlColumnIndex]
      } else if (tableId) {
        countSql = `SELECT * FROM ${tableId}`
      }
      const title = values[titleColumnIndex]
      const summary = values[summaryColumnIndex]
      const link = values[linkColumnIndex]
      const asset = assets?.[index] ?? ''
      return {
        countSql,
        title,
        summary,
        link,
        asset,
      }
    }) ?? []

  return (
    <Box
      sx={{
        height: '560px',
        padding: '80px',
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          paddingBottom: '30px',
        }}
      >
        <Typography
          variant="headline1"
          sx={{
            pt: '30px',
            mb: '40px',
            mx: 'auto',
            width: 'max-content',
            borderTop: '3px solid rgba(128, 128, 128, 0.25)',
            color: 'grey.1000',
            fontSize: '32px',
          }}
        >
          What's in the Portal?
        </Typography>
        <Button
          href={dataLink}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
        >
          Start Exploring Data
        </Button>
      </Box>
      {error && <ErrorBanner error={error} />}
      <div className={`Goals${showDesktop ? '__Desktop' : ''}`}>
        {goalsDataArray.map((row, index) => {
          return showDesktop ? (
            <Box sx={{ display: 'grid' }}>
              <GoalsV2Desktop key={index} {...row} />
            </Box>
          ) : (
            <Box sx={{ display: 'grid' }}>
              <GoalsV2Mobile key={index} {...row} />
            </Box>
          )
        })}
      </div>
    </Box>
  )
}

export default GoalsV2
