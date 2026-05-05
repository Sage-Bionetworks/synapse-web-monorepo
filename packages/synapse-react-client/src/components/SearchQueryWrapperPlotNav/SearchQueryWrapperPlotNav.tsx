import { NoContentPlaceholderType } from '@/components/SynapseTable/NoContentPlaceholderType'
import { DEFAULT_PAGE_SIZE } from '@/utils/SynapseConstants'
import { Suspense } from 'react'
import { useDeepCompareMemoize } from 'use-deep-compare-effect'
import { CardConfiguration } from '../CardContainer/CardConfiguration'
import {
  QueryVisualizationWrapper,
  QueryVisualizationWrapperProps,
} from '../QueryVisualizationWrapper'
import QueryWrapperLoadingScreen from '../QueryWrapper/QueryWrapperLoadingScreen'
import { SynapseTableConfiguration } from '../SynapseTable'
import { TopLevelControlsProps } from '../SynapseTable/TopLevelControls/TopLevelControls'
import { PlotsContainerProps } from '../widgets/facet-nav/PlotsContainer'
import { FacetFilterControlsProps } from '../widgets/query-filter/FacetFilterControls'
import {
  SearchQueryWrapper,
  SearchQueryWrapperProps,
} from '../SearchQueryWrapper/SearchQueryWrapper'
import { QueryWrapperPlotNavContents } from '../QueryWrapperPlotNav/QueryWrapperPlotNav'

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
  // Note: hideDownload, hideSqlEditorControl are intentionally
  // excluded — they are hardcoded to true because these controls are not applicable to the
  // SearchQueryServicesApi (no file download, no SQL editing).
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
    /** Optional initial query parameters. Only selectedFacets, additionalFilters, limit, and offset are used. */
    initQueryRequest?: SearchQueryWrapperProps['initQueryRequest']
    /** Called when the query result bundle changes (e.g. to report result counts to a parent). */
    onQueryResultBundleChange?: SearchQueryWrapperProps['onQueryResultBundleChange']
  }

/**
 * Type guard that identifies a SearchQueryWrapperPlotNavProps from the union
 * `QueryWrapperPlotNavProps | SearchQueryWrapperPlotNavProps`.
 *
 * Two conditions are checked to be robust against future API changes:
 *  1. The config has `searchIndexId` (present only on SearchQueryWrapperPlotNavProps).
 *  2. The config does NOT have `sql` (always present on QueryWrapperPlotNavProps via
 *     QueryOrDeprecatedSearchParams), so that if QueryWrapperPlotNavProps ever gains a
 *     `searchIndexId` field the guard remains correct.
 */
export function isSearchQueryWrapperPlotNavProps(config: {
  searchIndexId?: unknown
  sql?: unknown
}): config is SearchQueryWrapperPlotNavProps {
  return 'searchIndexId' in config && !('sql' in config)
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
    onQueryResultBundleChange,
    searchIndexId,
  } = props

  const initQueryRequest: SearchQueryWrapperProps['initQueryRequest'] =
    useDeepCompareMemoize({
      partMask: initQueryRequestFromProps?.partMask ?? 0,
      query: {
        selectedFacets: initQueryRequestFromProps?.query?.selectedFacets,
        additionalFilters: initQueryRequestFromProps?.query?.additionalFilters,
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
      onQueryResultBundleChange={onQueryResultBundleChange}
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
          hideSearchBarControl={false}
          defaultShowSearchBar={false}
          showLastUpdatedOn={props.showLastUpdatedOn}
          noContentPlaceholderType={
            props.noContentPlaceholderType ??
            NoContentPlaceholderType.INTERACTIVE
          }
        >
          <QueryWrapperPlotNavContents
            tableConfiguration={tableConfiguration}
            name={props.name}
            cardConfiguration={props.cardConfiguration}
            facetsToPlot={props.facetsToPlot}
            availableFacets={props.availableFacets}
            initialExpandedFacetControls={props.initialExpandedFacetControls}
            hideDownload={true}
            hideQueryCount={props.hideQueryCount ?? false}
            hideSqlEditorControl={true}
            hideVisualizationsControl={props.hideVisualizationsControl}
            initialLimit={props.initialLimit}
            initialPlotTypeByFacetColumnName={
              props.initialPlotTypeByFacetColumnName
            }
            hideTopLevelControls={props.hideTopLevelControls}
            isFullTextSearchEnabled={true}
          />
        </QueryVisualizationWrapper>
      </Suspense>
    </SearchQueryWrapper>
  )
}
