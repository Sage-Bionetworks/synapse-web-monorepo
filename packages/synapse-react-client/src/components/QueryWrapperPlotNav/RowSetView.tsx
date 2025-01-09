import { Suspense, useState } from 'react'
import { CardContainer } from '../CardContainer/CardContainer'
import { SynapseTable, SynapseTableConfiguration } from '../SynapseTable'
import { CardConfiguration } from '../CardContainerLogic'
import LastUpdatedOn from './LastUpdatedOn'
import { useDeepCompareMemoize } from 'use-deep-compare-effect'
import QueryWrapperLoadingScreen from '../QueryWrapper/QueryWrapperLoadingScreen'
import { SynapseErrorBoundary } from '../error'
import { useQueryContext } from '../QueryContext'
import { Box } from '@mui/material'
import { TablePagination } from '../SynapseTable/TablePagination'
import { ViewMoreQueryResultsButton } from '../QueryWrapper/ViewMoreQueryResultsButton'
import { useRowSet } from './UseRowSet'

export type RowSetViewProps = {
  tableConfiguration?: SynapseTableConfiguration
  cardConfiguration?: CardConfiguration
  initialLimit?: number
  hideDownload?: boolean
  multiCardList?: boolean
  compact?: boolean
}

/**
 * Renders a table or cards representing the RowSet. Also displays appropriate pagination controls
 * depending on the value of QueryContext.isInfinite.
 * @param props
 * @constructor
 */
export function RowSetView(props: RowSetViewProps) {
  const {
    cardConfiguration,
    hideDownload,
    initialLimit,
    multiCardList,
    compact,
  } = props

  const [initialLimitIsApplied, setInitialLimitIsApplied] = useState(
    initialLimit != null,
  )

  const { isInfinite } = useQueryContext()
  const tableConfiguration = useDeepCompareMemoize(
    props.tableConfiguration
      ? {
          ...props.tableConfiguration,
          hideDownload,
        }
      : undefined,
  )

  const {
    rowSet,
    progressMessage,
    isLoading,
    isLoadingNewPage,
    fetchNextPageOfInfiniteData,
    hasNextPageOfInfiniteData,
  } = useRowSet(initialLimitIsApplied ? initialLimit : undefined)

  return (
    <SynapseErrorBoundary>
      <Box
        className={`RowSetView`}
        sx={theme => ({
          ...(compact && {
            '& .SRC-imageThumbnail': {
              display: 'flex',
              alignItems: 'center',
              maxWidth: '80px',
            },
            [theme.breakpoints.up('md')]: {
              '& > div': {
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '30px',
                marginTop: '30px',
              },
              '& .SRC-portalCard': {
                margin: '0',
              },
            },
            [theme.breakpoints.up('xl')]: {
              '& > div': {
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
              },
            },
          }),
        })}
      >
        {isLoading && (
          <QueryWrapperLoadingScreen progressMessage={progressMessage} />
        )}
        {!isLoading && rowSet && (
          // even after the rowSet is loaded, a child component may suspend
          <Suspense
            fallback={
              <QueryWrapperLoadingScreen progressMessage={progressMessage} />
            }
          >
            {tableConfiguration && (
              <SynapseTable
                {...tableConfiguration}
                rowSet={rowSet}
                isLoadingNewPage={isLoadingNewPage}
              />
            )}
            {cardConfiguration && (
              <CardContainer
                {...cardConfiguration}
                rowSet={rowSet}
                multiCardList={multiCardList}
              />
            )}
          </Suspense>
        )}
        <Suspense fallback={<></>}>
          {!isInfinite && (
            <Box sx={{ mt: 2, textAlign: 'right' }}>
              <TablePagination />
            </Box>
          )}
          {isInfinite && (
            <ViewMoreQueryResultsButton
              initialLimit={initialLimit}
              initialLimitIsApplied={initialLimitIsApplied}
              onRemoveInitialLimit={() => {
                setInitialLimitIsApplied(false)
              }}
              fetchNextPage={() => {
                void fetchNextPageOfInfiniteData()
              }}
              hasNextPage={hasNextPageOfInfiniteData}
              isFetchingNextPage={isLoadingNewPage}
            />
          )}
        </Suspense>
        <LastUpdatedOn />
      </Box>
    </SynapseErrorBoundary>
  )
}
