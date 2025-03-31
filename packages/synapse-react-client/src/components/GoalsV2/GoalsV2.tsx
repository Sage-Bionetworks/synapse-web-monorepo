import useGetQueryResultBundle from '@/synapse-queries/entity/useGetQueryResultBundle'
import { SynapseConstants } from '@/utils'
import { getFieldIndex } from '@/utils/functions/queryUtils'
import useGetGoalData from '@/utils/hooks/useGetGoalData'
import useShowDesktop from '@/utils/hooks/useShowDesktop'
import { alpha, Box } from '@mui/material'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { ErrorBanner } from '../error/ErrorBanner'
import PortalSectionHeader from '../PortalSectionHeader'
import GoalsV2Desktop from './GoalsV2.Desktop'
import GoalsV2Mobile from './GoalsV2.Mobile'

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
      const asset = goalAssets?.[index] ?? ''
      return {
        countSql,
        title,
        summary,
        link,
        asset,
      }
    }) ?? []

  const ContentComponent = showDesktop ? GoalsV2Desktop : GoalsV2Mobile

  return (
    <Box
      sx={{
        minHeight: '560px',
        padding: { xs: '40px', lg: '80px' },
      }}
    >
      <PortalSectionHeader
        centered
        title="What's in the Portal?"
        buttonText="Start Exploring Data"
        link={dataLink}
        sx={theme => ({
          h2: { borderColor: alpha(theme.palette.primary.main, 0.2) },
          a: { marginTop: '24px', marginBottom: '30px' },
        })}
      />
      {goalError && <ErrorBanner error={goalError} />}
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

export default GoalsV2
