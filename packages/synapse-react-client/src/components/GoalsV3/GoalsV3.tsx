import useGetQueryResultBundle from '@/synapse-queries/entity/useGetQueryResultBundle'
import { SynapseConstants } from '@/utils'
import { getFieldIndex } from '@/utils/functions/queryUtils'
import useGetGoalData from '@/utils/hooks/useGetGoalData'
import useShowDesktop from '@/utils/hooks/useShowDesktop'
import { Box, Typography } from '@mui/material'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { ErrorBanner } from '../error'
import GoalsV3Desktop from './GoalsV3.Desktop'
import GoalsV3Mobile from './GoalsV3.Mobile'

export type GoalsV3Props = {
  title: string
  entityId: string
}

export type GoalsV3DataProps = {
  countSql?: string
  title: string
  summary: string
  link: string
  asset: string
}

enum ExpectedColumns {
  TABLEID = 'TableId',
  COUNT_SQL = 'CountSql',
  TITLE = 'Title',
  SUMMARY = 'Summary',
  LINK = 'Link',
  ASSET = 'Asset',
}

// PORTALS-2367
const GOALSV2_DESKTOP_MIN_BREAKPOINT = 1200

const GoalsV3 = ({ entityId, title }: GoalsV3Props) => {
  const showDesktop = useShowDesktop(GOALSV2_DESKTOP_MIN_BREAKPOINT)
  const queryBundleRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId,
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: {
      sql: `select *
                from ${entityId}
                order by ItemOrder`,
    },
  }
  const { data: queryResultBundle } =
    useGetQueryResultBundle(queryBundleRequest)

  const { assets: goalAssets, error } = useGetGoalData(
    entityId,
    queryResultBundle,
  )

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

  const goalsDataArray: GoalsV3DataProps[] =
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
      const asset = goalAssets?.[index] ?? ''
      console.log('a', asset)
      return {
        countSql,
        title,
        summary,
        link,
        asset,
      }
    }) ?? []

  const ContentComponent = showDesktop ? GoalsV3Desktop : GoalsV3Mobile

  return (
    <Box>
      <Typography
        sx={{
          color: 'grey.900',
          fontSize: '24px',
          fontWeight: 700,
          lineHeight: 'normal',
        }}
      >
        {title}
      </Typography>
      {error && <ErrorBanner error={error} />}
      <div className={`Goals`}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: showDesktop ? 'row' : 'column',
          }}
        >
          {goalsDataArray.map((row, index) => (
            <ContentComponent key={index} {...row} />
          ))}
        </Box>
      </div>
    </Box>
  )
}

export default GoalsV3
