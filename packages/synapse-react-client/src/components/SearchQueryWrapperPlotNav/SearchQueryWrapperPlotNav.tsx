import { NoContentPlaceholderType } from '@/components/SynapseTable/NoContentPlaceholderType'
import { DEFAULT_PAGE_SIZE } from '@/utils/SynapseConstants'
import { Box } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { Suspense } from 'react'
import { useDeepCompareMemoize } from 'use-deep-compare-effect'
import { CardConfiguration } from '../CardContainer/CardConfiguration'
import { useQueryContext } from '../QueryContext'
import {
  QueryVisualizationContextConsumer,
  QueryVisualizationWrapper,
  QueryVisualizationWrapperProps,
} from '../QueryVisualizationWrapper'
import QueryWrapperLoadingScreen from '../QueryWrapper/QueryWrapperLoadingScreen'
import { QueryWrapperErrorBoundary } from '../QueryWrapperErrorBoundary'
import { SynapseTableConfiguration } from '../SynapseTable'
import TopLevelControls, {
  TopLevelControlsProps,
} from '../SynapseTable/TopLevelControls/TopLevelControls'
import TotalQueryResults from '../TotalQueryResults'
import PlotsContainer, {
  PlotsContainerProps,
} from '../widgets/facet-nav/PlotsContainer'
import FacetFilterControls, {
  FacetFilterControlsProps,
} from '../widgets/query-filter/FacetFilterControls'
import { RowSetView } from '../QueryWrapperPlotNav/RowSetView'
import {
  SearchQueryWrapper,
  SearchQueryWrapperProps,
} from '../SearchQueryWrapper/SearchQueryWrapper'
import {
  QUERY_FILTERS_COLLAPSED_CSS,
  QUERY_FILTERS_EXPANDED_CSS,
} from '../QueryWrapperPlotNav/QueryWrapperPlotNav'

type SearchQueryWrapperPlotNavOwnProps = {
  /** The ID of the SearchIndex entity to query. */
  searchIndexId: string
  /** Whether the displayed results should be paginated or infinite. Default for cards is true, default for table is false */
  isInfinite?: boolean
  tableConfiguration?: SynapseTableConfiguration
  cardConfiguration?: CardConfiguration
  facetsToPlot?: string[]
  availableFacets?: FacetFilterControlsProps['availableFacets']
  initialExpandedFacetControls?: FacetFilterControlsProps['initialExpandedFacetControls']
  initialLimit?: number
  hideTopLevelControls?: boolean
  // Note: hideDownload, hideSqlEditorControl, and hideSearchBarControl are intentionally
  // excluded — they are hardcoded to true because these controls are not applicable to the
  // SearchQueryServicesApi (no file download, no SQL editing, no text search).
}

export type SearchQueryWrapperPlotNavProps = SearchQueryWrapperPlotNavOwnProps &
  PlotsContainerProps &
  Pick<
    QueryVisualizationWrapperProps,
    | 'defaultShowPlots'
    | 'visibleColumnCount'
    | 'columnAliases'
    | 'rgbIndex'
    | 'showLastUpdatedOn'
    | 'noContentPlaceholderType'
    | 'unitDescription'
    | 'helpConfiguration'
    | 'hideCopyToClipboard'
    | 'hideVisualizationsControl'
  > &
  Pick<TopLevelControlsProps, 'name' | 'hideQueryCount'> & {
    /** Optional initial query parameters. Only selectedFacets, limit, and offset are used. */
    initQueryRequest?: SearchQueryWrapperProps['initQueryRequest']
  }

type SearchQueryWrapperPlotNavContentsProps = Pick<
  SearchQueryWrapperPlotNavProps,
  | 'tableConfiguration'
  | 'name'
  | 'cardConfiguration'
  | 'facetsToPlot'
  | 'availableFacets'
  | 'initialExpandedFacetControls'
  | 'hideQueryCount'
  | 'hideVisualizationsControl'
  | 'initialLimit'
  | 'initialPlotTypeByFacetColumnName'
  | 'hideTopLevelControls'
>

function SearchQueryWrapperPlotNavContents(
  props: SearchQueryWrapperPlotNavContentsProps,
) {
  const {
    tableConfiguration,
    name,
    cardConfiguration,
    facetsToPlot,
    availableFacets,
    initialExpandedFacetControls,
    hideQueryCount,
    hideVisualizationsControl,
    initialLimit,
    initialPlotTypeByFacetColumnName,
    hideTopLevelControls,
  } = props

  const queryContext = useQueryContext()
  const { hasFacetedSelectColumn: isFaceted, queryMetadataQueryOptions } =
    queryContext
  const { isLoading: isLoadingQueryMetadata } = useQuery(
    queryMetadataQueryOptions,
  )

  const currentQueryRequest = queryContext.currentQueryRequest
  const hasFacetsOrFilters =
    (currentQueryRequest?.query.selectedFacets !== undefined &&
      currentQueryRequest.query.selectedFacets.length > 0) ||
    (currentQueryRequest?.query.additionalFilters !== undefined &&
      currentQueryRequest?.query.additionalFilters.length > 0)

  return (
    <QueryVisualizationContextConsumer>
      {queryVisualizationContext => {
        if (queryVisualizationContext === undefined) {
          throw new Error(
            'No queryVisualizationContext found when using QueryVisualizationContextConsumer',
          )
        }

        return (
          <Box
            className={`SearchQueryWrapperPlotNav ${
              queryVisualizationContext.showFacetFilter
                ? QUERY_FILTERS_EXPANDED_CSS
                : QUERY_FILTERS_COLLAPSED_CSS
            } ${hideTopLevelControls ? 'isHidingTopLevelControls' : ''}`}
            sx={{
              '*': {
                cursor: isLoadingQueryMetadata ? 'wait' : undefined,
              },
            }}
          >
            <QueryWrapperErrorBoundary>
              {!hideTopLevelControls && (
                <TopLevelControls
                  showColumnSelection={tableConfiguration !== undefined}
                  name={name}
                  hideDownload={true}
                  hideQueryCount={hideQueryCount}
                  hideFacetFilterControl={!isFaceted}
                  hideVisualizationsControl={
                    !isFaceted || hideVisualizationsControl
                  }
                  hideSqlEditorControl={true}
                />
              )}
              {isFaceted && (
                <FacetFilterControls
                  availableFacets={availableFacets}
                  initialExpandedFacetControls={initialExpandedFacetControls}
                />
              )}
              <TotalQueryResults
                frontText={''}
                endText={hasFacetsOrFilters ? 'filtered by' : ''}
                hideIfUnfiltered={true}
              />
              <PlotsContainer
                facetsToPlot={facetsToPlot}
                initialPlotTypeByFacetColumnName={
                  initialPlotTypeByFacetColumnName
                }
              />
              <RowSetView
                tableConfiguration={tableConfiguration}
                hideDownload={true}
                cardConfiguration={cardConfiguration}
                initialLimit={initialLimit}
              />
            </QueryWrapperErrorBoundary>
          </Box>
        )
      }}
    </QueryVisualizationContextConsumer>
  )
}

/**
 * A component similar to QueryWrapperPlotNav that sources its data from the SearchQueryServicesApi
 * rather than the standard Synapse Table Services. Facets, table/card rendering, and plots are
 * all reused from the existing component library.
 */
export default function SearchQueryWrapperPlotNav(
  props: SearchQueryWrapperPlotNavProps,
) {
  const {
    tableConfiguration,
    isInfinite = !tableConfiguration,
    unitDescription,
    helpConfiguration,
    initQueryRequest: initQueryRequestFromProps,
    searchIndexId,
  } = props

  const initQueryRequest: SearchQueryWrapperProps['initQueryRequest'] =
    useDeepCompareMemoize({
      partMask: initQueryRequestFromProps?.partMask ?? 0,
      query: {
        selectedFacets: initQueryRequestFromProps?.query?.selectedFacets,
        limit: initQueryRequestFromProps?.query?.limit ?? DEFAULT_PAGE_SIZE,
        offset: initQueryRequestFromProps?.query?.offset ?? 0,
      },
    })

  return (
    <SearchQueryWrapper
      key={JSON.stringify(initQueryRequest)}
      searchIndexId={searchIndexId}
      initQueryRequest={initQueryRequest}
      isInfinite={isInfinite}
    >
      <Suspense fallback={<QueryWrapperLoadingScreen />}>
        <QueryVisualizationWrapper
          unitDescription={unitDescription}
          rgbIndex={props.rgbIndex}
          columnAliases={props.columnAliases}
          helpConfiguration={helpConfiguration}
          visibleColumnCount={props.visibleColumnCount}
          defaultShowPlots={props.defaultShowPlots}
          hideCopyToClipboard={props.hideCopyToClipboard}
          hideSearchBarControl={true}
          showLastUpdatedOn={props.showLastUpdatedOn}
          noContentPlaceholderType={
            props.noContentPlaceholderType ??
            NoContentPlaceholderType.INTERACTIVE
          }
        >
          <SearchQueryWrapperPlotNavContents
            tableConfiguration={tableConfiguration}
            name={props.name}
            cardConfiguration={props.cardConfiguration}
            facetsToPlot={props.facetsToPlot}
            availableFacets={props.availableFacets}
            initialExpandedFacetControls={props.initialExpandedFacetControls}
            hideQueryCount={props.hideQueryCount}
            hideVisualizationsControl={props.hideVisualizationsControl}
            initialLimit={props.initialLimit}
            initialPlotTypeByFacetColumnName={
              props.initialPlotTypeByFacetColumnName
            }
            hideTopLevelControls={props.hideTopLevelControls}
          />
        </QueryVisualizationWrapper>
      </Suspense>
    </SearchQueryWrapper>
  )
}
