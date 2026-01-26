import { QueryOrDeprecatedSearchParams } from '@/components/CardContainerLogic/CardContainerLogic'
import AddToDownloadListConfirmationAlert from '@/components/download_list/AddToDownloadListConfirmationAlert/AddToDownloadListConfirmationAlert'
import { useGetAddToDownloadListRequestForCurrentQuery } from '@/components/QueryWrapper/useGetAddToDownloadListRequestForCurrentQuery'
import { NoContentPlaceholderType } from '@/components/SynapseTable/NoContentPlaceholderType'
import { useGetEntity } from '@/synapse-queries'
import { SynapseConstants } from '@/utils'
import {
  getAdditionalFilters,
  parseEntityIdAndVersionFromSqlStatement,
} from '@/utils/functions'
import { isTable } from '@/utils/functions/EntityTypeUtils'
import { DEFAULT_PAGE_SIZE } from '@/utils/SynapseConstants'
import { Box } from '@mui/material'
import { Query, QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { useQuery } from '@tanstack/react-query'
import { useAtomValue } from 'jotai'
import { useMemo, useState } from 'react'
import { CardConfiguration } from '../CardContainer/CardConfiguration'
import { SynapseErrorBoundary } from '../error'
import FullTextSearch from '../FullTextSearch/FullTextSearch'
import ModalDownload from '../ModalDownload/ModalDownload'
import { QueryWrapperPlotNavCustomPlotParams } from '../Plot/SynapsePlot'
import { QueryContextType, useQueryContext } from '../QueryContext'
import {
  QueryVisualizationContextConsumer,
  QueryVisualizationWrapper,
  QueryVisualizationWrapperProps,
} from '../QueryVisualizationWrapper'
import { QueryWrapper, QueryWrapperProps } from '../QueryWrapper'
import { isRowSelectionVisibleAtom } from '../QueryWrapper/TableRowSelectionState'
import { QueryWrapperErrorBoundary } from '../QueryWrapperErrorBoundary'
import { SynapseTableConfiguration } from '../SynapseTable'
import SearchV2, { SearchV2Props } from '../SynapseTable/SearchV2'
import SqlEditor from '../SynapseTable/SqlEditor'
import TopLevelControls, {
  TopLevelControlsProps,
  CustomControl,
} from '../SynapseTable/TopLevelControls/TopLevelControls'
import { CustomControls } from '../SynapseTable/CustomControls/CustomControls'
import TotalQueryResults from '../TotalQueryResults'
import PlotsContainer, {
  PlotsContainerProps,
} from '../widgets/facet-nav/PlotsContainer'
import FacetFilterControls, {
  FacetFilterControlsProps,
} from '../widgets/query-filter/FacetFilterControls'
import { QueryWrapperSynapsePlotProps } from './QueryWrapperSynapsePlot'
import { RowSetView } from './RowSetView'

export const QUERY_FILTERS_EXPANDED_CSS: string = 'isShowingFacetFilters'
export const QUERY_FILTERS_COLLAPSED_CSS: string = 'isHidingFacetFilters'

export const HAS_SELECTED_ROWS_CSS: string = 'hasSelectedRows'

type QueryWrapperPlotNavOwnProps = {
  /** Whether the displayed results should be paginated or infinite. Default for cards is true, default for table is false */
  isInfinite?: boolean
  /** Set to true when you want the query to be saved in the URL search parameters.  If you are controlling the view (such as in PortalSearch), you'll want to set this to false */
  shouldDeepLink?: boolean
  /** If onQueryChange is set, the callback will be invoked when the Query changes */
  onQueryChange?: (newQueryJson: string) => void
  /** If onQueryResultBundleChange is set, the callback will be invoked when the QueryResultBundle changes */
  onQueryResultBundleChange?: (newQueryResultBundleJson: string) => void
  /** If initQueryJson is set, it will be the Query used in the initial QueryBundleRequest */
  initQueryJson?: string
  tableConfiguration?: SynapseTableConfiguration
  cardConfiguration?: CardConfiguration
  searchConfiguration?: Omit<
    SearchV2Props,
    'queryContext' | 'queryVisualizationContext'
  >
  facetsToPlot?: string[]
  availableFacets?: FacetFilterControlsProps['availableFacets']
  initialExpandedFacetControls?: FacetFilterControlsProps['initialExpandedFacetControls']
  customPlots?: QueryWrapperSynapsePlotProps[]
  customControls?: CustomControl[]
  defaultColumn?: string
  defaultShowSearchBox?: boolean
  lockedColumn?: QueryWrapperProps['lockedColumn']
  onViewSharingSettingsClicked?: (benefactorId: string) => void
  initialLimit?: number
} & Omit<TopLevelControlsProps, 'entityId'> &
  Pick<QueryWrapperPlotNavCustomPlotParams, 'onCustomPlotClick'> &
  Pick<
    QueryWrapperProps,
    | 'isRowSelectionVisible'
    | 'rowSelectionPrimaryKey'
    | 'isRowSelectionUIFloating'
    | 'fileIdColumnName'
    | 'fileNameColumnName'
    | 'fileVersionColumnName'
  > &
  Pick<
    QueryVisualizationWrapperProps,
    | 'defaultShowPlots'
    | 'visibleColumnCount'
    | 'columnAliases'
    | 'rgbIndex'
    | 'showLastUpdatedOn'
    | 'noContentPlaceholderType'
    | 'unitDescription'
    | 'additionalFiltersSessionStorageKey'
    | 'helpConfiguration'
    | 'hideCopyToClipboard'
    | 'hideSearchBarControl'
    | 'hideVisualizationsControl'
    | 'enabledExternalAnalysisPlatforms'
  > &
  Pick<QueryContextType, 'combineRangeFacetConfig'>

export type QueryWrapperPlotNavProps = QueryOrDeprecatedSearchParams &
  PlotsContainerProps &
  QueryWrapperPlotNavOwnProps

type QueryWrapperPlotNavContentsProps = Pick<
  QueryWrapperPlotNavProps,
  | 'tableConfiguration'
  | 'name'
  | 'cardConfiguration'
  | 'facetsToPlot'
  | 'availableFacets'
  | 'initialExpandedFacetControls'
  | 'hideDownload'
  | 'hideQueryCount'
  | 'hideSqlEditorControl'
  | 'hideVisualizationsControl'
  | 'searchConfiguration'
  | 'enabledExternalAnalysisPlatforms'
  | 'cavaticaConnectAccountURL'
  | 'customControls'
  | 'customPlots'
  | 'fileIdColumnName'
  | 'fileNameColumnName'
  | 'fileVersionColumnName'
  | 'initialLimit'
  | 'initialPlotType'
> & {
  isFullTextSearchEnabled: boolean
  remount: () => void
}

function QueryWrapperPlotNavContents(props: QueryWrapperPlotNavContentsProps) {
  const {
    tableConfiguration,
    name,
    cardConfiguration,
    facetsToPlot,
    availableFacets,
    initialExpandedFacetControls,
    hideDownload,
    hideQueryCount,
    hideSqlEditorControl,
    hideVisualizationsControl,
    searchConfiguration,
    cavaticaConnectAccountURL,
    customControls,
    remount,
    isFullTextSearchEnabled,
    customPlots,
    initialLimit,
    initialPlotType,
  } = props
  const queryContext = useQueryContext()
  const [showExportMetadata, setShowExportMetadata] = useState(false)
  const { hasFacetedSelectColumn: isFaceted, queryMetadataQueryOptions } =
    queryContext
  const { isLoading: isLoadingQueryMetadata } = useQuery(
    queryMetadataQueryOptions,
  )

  const isRowSelectionVisible = useAtomValue(isRowSelectionVisibleAtom)

  const currentQueryRequest = queryContext.currentQueryRequest

  const hasFacetsOrFilters =
    (currentQueryRequest?.query.selectedFacets !== undefined &&
      currentQueryRequest.query.selectedFacets.length > 0) ||
    (currentQueryRequest?.query.additionalFilters !== undefined &&
      currentQueryRequest?.query.additionalFilters.length > 0)

  const addToDownloadListRequest =
    useGetAddToDownloadListRequestForCurrentQuery()

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
            className={`QueryWrapperPlotNav ${
              queryVisualizationContext.showFacetFilter
                ? QUERY_FILTERS_EXPANDED_CSS
                : QUERY_FILTERS_COLLAPSED_CSS
            } ${isRowSelectionVisible ? HAS_SELECTED_ROWS_CSS : ''}`}
            sx={{
              '*': {
                cursor: isLoadingQueryMetadata ? 'wait' : undefined,
              },
            }}
          >
            <QueryWrapperErrorBoundary>
              {isFullTextSearchEnabled ? (
                <FullTextSearch ftsConfig={searchConfiguration?.ftsConfig} />
              ) : (
                <SearchV2
                  {...searchConfiguration}
                  queryContext={queryContext}
                  queryVisualizationContext={queryVisualizationContext}
                />
              )}
              <SqlEditor />
              {queryVisualizationContext.showDownloadConfirmation && (
                <AddToDownloadListConfirmationAlert
                  addToDownloadListRequest={addToDownloadListRequest}
                  onClose={() =>
                    queryVisualizationContext.setShowDownloadConfirmation(false)
                  }
                />
              )}
              <SynapseErrorBoundary>
                <TopLevelControls
                  showColumnSelection={tableConfiguration !== undefined}
                  name={name}
                  hideDownload={hideDownload}
                  hideQueryCount={hideQueryCount}
                  hideFacetFilterControl={!isFaceted}
                  hideVisualizationsControl={
                    !isFaceted || hideVisualizationsControl
                  }
                  hideSqlEditorControl={hideSqlEditorControl}
                  cavaticaConnectAccountURL={cavaticaConnectAccountURL}
                  remount={remount}
                />
              </SynapseErrorBoundary>
              {isFaceted && (
                <>
                  <FacetFilterControls
                    availableFacets={availableFacets}
                    initialExpandedFacetControls={initialExpandedFacetControls}
                  />
                </>
              )}
              <TotalQueryResults
                frontText={''}
                endText={hasFacetsOrFilters ? 'filtered by' : ''}
                hideIfUnfiltered={true}
              />
              <CustomControls
                customControls={customControls}
                remount={remount}
              />
              <PlotsContainer
                facetsToPlot={facetsToPlot}
                customPlots={customPlots}
                initialPlotType={initialPlotType}
              />
              <RowSetView
                tableConfiguration={tableConfiguration}
                hideDownload={hideDownload}
                cardConfiguration={cardConfiguration}
                initialLimit={initialLimit}
              />
              {showExportMetadata && (
                <ModalDownload
                  getLastQueryRequest={queryContext?.getCurrentQueryRequest}
                  onClose={() => setShowExportMetadata(false)}
                />
              )}
            </QueryWrapperErrorBoundary>
          </Box>
        )
      }}
    </QueryVisualizationContextConsumer>
  )
}

export default function QueryWrapperPlotNav(props: QueryWrapperPlotNavProps) {
  const {
    sql: deprecatedSql,
    tableConfiguration,
    isInfinite = !tableConfiguration,
    limit = DEFAULT_PAGE_SIZE,
    showLastUpdatedOn,
    unitDescription,
    additionalFiltersSessionStorageKey,
    helpConfiguration,
    customPlots,
    enabledExternalAnalysisPlatforms,
  } = props

  const sql = props.query?.sql ?? deprecatedSql ?? ''
  const { entityId, versionNumber } =
    parseEntityIdAndVersionFromSqlStatement(sql)

  const query: Query = useMemo(() => {
    if (props.query) {
      // use query if set
      return props.query
    } else if (props.initQueryJson) {
      // Otherwise use initQueryJson
      return JSON.parse(props.initQueryJson) as Query
    } else {
      // use the deprecated sql, searchParams, and sqlOperator
      const additionalFilters = getAdditionalFilters(
        props.searchParams,
        props.sqlOperator,
        additionalFiltersSessionStorageKey,
      )
      return {
        sql: deprecatedSql!,
        additionalFilters,
        limit: limit,
        offset: 0,
      }
    }
  }, [
    props.query,
    props.initQueryJson,
    props.searchParams,
    props.sqlOperator,
    additionalFiltersSessionStorageKey,
    deprecatedSql,
    limit,
  ])

  const [componentKey, setComponentKey] = useState(1)
  const remount = () => {
    setComponentKey(componentKey + 1)
  }

  const { data: entity } = useGetEntity(entityId, versionNumber)
  const initQueryRequest: QueryBundleRequest = {
    entityId: entityId ?? '',
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
      SynapseConstants.BUNDLE_MASK_QUERY_COUNT |
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE |
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
      SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
      SynapseConstants.BUNDLE_MASK_SUM_FILES_SIZE_BYTES |
      SynapseConstants.BUNDLE_MASK_LAST_UPDATED_ON,
    query,
  }
  const isFullTextSearchEnabled =
    (entity && isTable(entity) && entity.isSearchEnabled) ?? false

  /**
   * Fully re-render the uncontrolled QueryWrapper component when the initial query changes. This eliminates a class of
   * bugs where our 'derived' state (the current query), which should be reset, is out of sync with props.
   *
   * See https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key
   */
  const queryWrapperKey = `${JSON.stringify(initQueryRequest)}-${componentKey}`

  return (
    <QueryWrapper
      {...props}
      initQueryRequest={initQueryRequest}
      key={queryWrapperKey}
      isInfinite={isInfinite}
    >
      <QueryVisualizationWrapper
        unitDescription={unitDescription}
        rgbIndex={props.rgbIndex}
        columnAliases={props.columnAliases}
        helpConfiguration={helpConfiguration}
        visibleColumnCount={props.visibleColumnCount}
        defaultShowPlots={props.defaultShowPlots}
        hideCopyToClipboard={props.hideCopyToClipboard}
        defaultShowSearchBar={
          (props.defaultShowSearchBox || isFullTextSearchEnabled) &&
          !props.hideSearchBarControl
        }
        hideSearchBarControl={props.hideSearchBarControl}
        showLastUpdatedOn={showLastUpdatedOn}
        noContentPlaceholderType={NoContentPlaceholderType.INTERACTIVE}
        hasCustomPlots={Array.isArray(customPlots) && customPlots.length > 0}
        enabledExternalAnalysisPlatforms={enabledExternalAnalysisPlatforms}
      >
        <QueryWrapperPlotNavContents
          {...props}
          isFullTextSearchEnabled={isFullTextSearchEnabled}
          remount={remount}
        />
      </QueryVisualizationWrapper>
    </QueryWrapper>
  )
}
