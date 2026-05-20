import SynapseClient from '@/synapse-client'
import useGetQueryResultBundle, {
  tableQueryUseQueryDefaults,
} from '@/synapse-queries/entity/useGetQueryResultBundle'
import { KeyFactory } from '@/synapse-queries/KeyFactory'
import { SynapseConstants } from '@/utils'
import { getFieldIndex } from '@/utils/functions/queryUtils'
import useGetGoalData from '@/utils/hooks/useGetGoalData'
import useShowDesktop from '@/utils/hooks/useShowDesktop'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { QueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import { ErrorBanner } from '../error/ErrorBanner'
import GoalsDesktop from './Goals.Desktop'
import GoalsMobile from './Goals.Mobile'
import { Box } from '@mui/material'

export type GoalsProps = {
  entityId: string
  isAssetIcon?: boolean // If true, the asset will be used as an icon instead of a background image.
  linkText?: string
  itemsPerRow?: number
}

export type GoalsDataProps = {
  countSql?: string
  title: string
  summary: string
  link: string
  asset: string
  isAssetIcon: boolean
  linkText?: string
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
const GOALS_DESKTOP_MIN_BREAKPOINT = 1200

function buildGoalsQueryBundleRequest(entityId: string): QueryBundleRequest {
  return {
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
}

export function Goals(props: GoalsProps) {
  const { entityId, isAssetIcon = false, linkText, itemsPerRow = 3 } = props
  const showDesktop = useShowDesktop(GOALS_DESKTOP_MIN_BREAKPOINT)
  const queryBundleRequest = buildGoalsQueryBundleRequest(entityId)
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

  const goalsDataProps = useMemo(() => {
    return queryResultBundle?.queryResult!.queryResults.rows.map(
      (el, index): GoalsDataProps => {
        const values = el.values as string[]
        if (values.some(value => value === null)) {
          // We cast values above assuming there are no null values, emit a warning just in case.
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
        // assume that we recieve assets in order of rows and there is an asset for each item
        // can revisit if this isn't the case.
        const asset = goalAssets?.[index] ?? ''
        return {
          countSql,
          title,
          summary,
          link,
          asset,
          isAssetIcon,
        }
      },
    )
  }, [
    countSqlColumnIndex,
    goalAssets,
    linkColumnIndex,
    queryResultBundle?.queryResult,
    summaryColumnIndex,
    tableIdColumnIndex,
    titleColumnIndex,
  ])

  if (goalError) {
    return <ErrorBanner error={goalError} />
  }

  if (!goalsDataProps) {
    return <></>
  }

  if (showDesktop) {
    // Each card has margin:10px (20px horizontal) from .Goals__Card CSS.
    // flex-basis must be the content width only; total row = N*(flex-basis+20) + (N-1)*gap.
    // Subtract 0.5px epsilon to absorb sub-pixel rounding and prevent wrapping.
    const horizontalMarginPerCard = 20
    const cardWidth = `calc((100% - ${
      itemsPerRow * horizontalMarginPerCard + (itemsPerRow - 1) * 7
    }px) / ${itemsPerRow} - 0.5px)`
    return (
      <Box
        className={`Goals`}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '7px',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}
      >
        {goalsDataProps.map((props, index) => (
          <GoalsDesktop
            key={index}
            {...props}
            linkText={linkText}
            cardWidth={cardWidth}
          />
        ))}
      </Box>
    )
  } else {
    return (
      <div className={`Goals`}>
        {goalsDataProps.map((props, index) => (
          <GoalsMobile key={index} {...props} linkText={linkText} />
        ))}
      </div>
    )
  }
}
export default Goals

/**
 * Prefetches the Goals table query into a QueryClient for use with HydrationBoundary.
 * Uses anonymous access; warm-caches for unauthenticated users.
 */
export async function prefetchGoals(
  queryClient: QueryClient,
  entityId: string,
): Promise<void> {
  const keyFactory = new KeyFactory(undefined)
  const queryBundleRequest = buildGoalsQueryBundleRequest(entityId)
  await queryClient.prefetchQuery({
    ...tableQueryUseQueryDefaults,
    queryKey: keyFactory.getEntityTableQueryResultQueryKey(
      queryBundleRequest,
      false,
    ),
    queryFn: () =>
      SynapseClient.getQueryTableResults(queryBundleRequest, undefined),
  })
}
