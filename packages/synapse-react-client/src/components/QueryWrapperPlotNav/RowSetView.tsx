import { Suspense, useState } from 'react'
import { CardContainer } from '../CardContainer/CardContainer'
import { SynapseTable, SynapseTableConfiguration } from '../SynapseTable'
import { CardConfiguration } from '../CardContainer/CardConfiguration'
import LastUpdatedOn from './LastUpdatedOn'
import { useDeepCompareMemoize } from 'use-deep-compare-effect'
import QueryWrapperLoadingScreen from '../QueryWrapper/QueryWrapperLoadingScreen'
import { ErrorBanner, SynapseErrorBoundary } from '../error'
import { useQueryContext } from '../QueryContext'
import { Box } from '@mui/material'
import { TablePagination } from '../SynapseTable/TablePagination'
import { ViewMoreQueryResultsButton } from '../QueryWrapper/ViewMoreQueryResultsButton'
import { getAggregateQueryError } from '../QueryWrapper/AggregateQueryErrorNotice'
import { useRowSet } from './UseRowSet'

export type RowSetViewProps = {
  tableConfiguration?: SynapseTableConfiguration
  cardConfiguration?: CardConfiguration
  initialLimit?: number
  hideDownload?: boolean
  multiCardList?: boolean
}

/**
 * Renders a table or cards representing the RowSet. Also displays appropriate pagination controls
 * depending on the value of QueryContext.isInfinite.
 * @param props
 * @constructor
 */
export function RowSetView(props: RowSetViewProps) {
  const { cardConfiguration, hideDownload, initialLimit, multiCardList } = props

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
    error,
  } = useRowSet(initialLimitIsApplied ? initialLimit : undefined)
  // Rows withheld from an aggregate-only caller are withheld from every page, so there is nothing to page through. Other
  // failures keep the paging controls, so the user can leave a page that failed to load.
  const areRowsWithheld = getAggregateQueryError(error) !== undefined

  return (
    <SynapseErrorBoundary>
      <div className={`RowSetView`}>
        {isLoading && (
          <QueryWrapperLoadingScreen progressMessage={progressMessage} />
        )}
        {error && <ErrorBanner error={error} />}
        {!isLoading && rowSet && (
          <>
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
          </>
        )}
        <Suspense fallback={<></>}>
          {!isInfinite && !areRowsWithheld && (
            <Box sx={{ mt: 2, textAlign: 'right' }}>
              <TablePagination />
            </Box>
          )}
          {isInfinite && !areRowsWithheld && (
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
      </div>
    </SynapseErrorBoundary>
  )
}
