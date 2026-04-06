import { NoContentPlaceholderType } from '@/components/SynapseTable/NoContentPlaceholderType'
import { SynapseConstants } from '@/utils'
import { DEFAULT_PAGE_SIZE } from '@/utils/SynapseConstants'
import { Box } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { Suspense, useMemo } from 'react'
import { CardConfiguration } from '../CardContainer/CardConfiguration'
import { SynapseErrorBoundary } from '../error'
import { useQueryContext } from '../QueryContext'
import {
  QueryVisualizationContextConsumer,
  QueryVisualizationWrapper,
  QueryVisualizationWrapperProps,
} from '../QueryVisualizationWrapper'
import QueryWrapperLoadingScreen from '../QueryWrapper/QueryWrapperLoadingScreen'
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
  /** Whether the displayed results should be paginated or infinite. Default for cards is true, default for table is false */
  isInfinite?: boolean
  tableConfiguration?: SynapseTableConfiguration
  cardConfiguration?: CardConfiguration
  facetsToPlot?: string[]
  availableFacets?: FacetFilterControlsProps['availableFacets']
  initialExpandedFacetControls?: FacetFilterControlsProps['initialExpandedFacetControls']
  initialLimit?: number
  hideTopLevelControls?: boolean
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
            <SynapseErrorBoundary>
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
            </SynapseErrorBoundary>
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
          </Box>
        )
      }}
    </QueryVisualizationContextConsumer>
  )
}

const DEFAULT_PART_MASK =
  SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
  SynapseConstants.BUNDLE_MASK_QUERY_COUNT |
  SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
  SynapseConstants.BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE |
  SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
  SynapseConstants.BUNDLE_MASK_QUERY_FACETS

/**
 * A component similar to QueryWrapperPlotNav that sources its data from the SearchQueryServicesApi
 * rather than the standard Synapse Table Services. Facets, table/card rendering, and plots are
 * all reused from the existing component library.
 *
 * Note: The SearchQueryServicesApi is not yet functional; a mock implementation is used in
 * development and tests.
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
  } = props

  const initQueryRequest: SearchQueryWrapperProps['initQueryRequest'] = useMemo(
    () => ({
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      partMask: initQueryRequestFromProps?.partMask ?? DEFAULT_PART_MASK,
      query: {
        selectedFacets: initQueryRequestFromProps?.query?.selectedFacets,
        limit: initQueryRequestFromProps?.query?.limit ?? DEFAULT_PAGE_SIZE,
        offset: initQueryRequestFromProps?.query?.offset ?? 0,
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(initQueryRequestFromProps)],
  )

  return (
    <SearchQueryWrapper
      key={JSON.stringify(initQueryRequest)}
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
