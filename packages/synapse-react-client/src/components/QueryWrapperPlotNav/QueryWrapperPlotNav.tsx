import { Box } from '@mui/material'
import { Query, QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { useAtomValue } from 'jotai'
import React, { useState } from 'react'
import { useGetEntity } from '../../synapse-queries'
import { SynapseConstants } from '../../utils'
import {
  getAdditionalFilters,
  parseEntityIdFromSqlStatement,
  SQLOperator,
} from '../../utils/functions'
import { isTable } from '../../utils/functions/EntityTypeUtils'
import { DEFAULT_PAGE_SIZE } from '../../utils/SynapseConstants'
import { CardConfiguration } from '../CardContainerLogic'
import { TableQueryDownloadConfirmation } from '../download_list'
import { SynapseErrorBoundary } from '../error/ErrorBanner'
import FullTextSearch from '../FullTextSearch'
import ModalDownload from '../ModalDownload/ModalDownload'
import { QueryWrapperPlotNavCustomPlotParams } from '../Plot/SynapsePlot'
import { QueryContextType, useQueryContext } from '../QueryContext'
import {
  QueryVisualizationContextConsumer,
  QueryVisualizationWrapper,
  QueryVisualizationWrapperProps,
} from '../QueryVisualizationWrapper'
import { QueryWrapper, QueryWrapperProps } from '../QueryWrapper'
import { isLoadingNewBundleAtom } from '../QueryWrapper/QueryWrapper'
import { hasSelectedRowsAtom } from '../QueryWrapper/TableRowSelectionState'
import { QueryWrapperErrorBanner } from '../QueryWrapperErrorBanner'
import { SynapseTableProps } from '../SynapseTable'
import { NoContentPlaceholderType } from '../SynapseTable/NoContentPlaceholderType'
import SearchV2, { SearchV2Props } from '../SynapseTable/SearchV2'
import SqlEditor from '../SynapseTable/SqlEditor'
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
import FilterAndView from './FilterAndView'
import { QueryWrapperSynapsePlotProps } from './QueryWrapperSynapsePlot'

export const QUERY_FILTERS_EXPANDED_CSS: string = 'isShowingFacetFilters'
export const QUERY_FILTERS_COLLAPSED_CSS: string = 'isHidingFacetFilters'

export const HAS_SELECTED_ROWS_CSS: string = 'hasSelectedRows'

type QueryWrapperPlotNavOwnProps = {
  sql: string
  limit?: number
  shouldDeepLink?: boolean
  /** If onQueryChange is set, the callback will be invoked when the Query changes */
  onQueryChange?: (newQueryJson: string) => void
  /** If onQueryResultBundleChange is set, the callback will be invoked when the QueryResultBundle changes */
  onQueryResultBundleChange?: (newQueryResultBundleJson: string) => void
  /** If initQueryJson is set, it will be the Query used in the initial QueryBundleRequest */
  initQueryJson?: string
  tableConfiguration?: SynapseTableProps
  cardConfiguration?: CardConfiguration
  searchConfiguration?: Omit<
    SearchV2Props,
    'queryContext' | 'queryVisualizationContext'
  >
  facetsToPlot?: string[]
  availableFacets?: FacetFilterControlsProps['availableFacets']
  customPlots?: QueryWrapperSynapsePlotProps[]
  defaultColumn?: string
  defaultShowSearchBox?: boolean
  lockedColumn?: QueryWrapperProps['lockedColumn']
  onViewSharingSettingsClicked?: (benefactorId: string) => void
} & Omit<TopLevelControlsProps, 'entityId'> &
  Pick<QueryWrapperPlotNavCustomPlotParams, 'onCustomPlotClick'> &
  Pick<
    QueryWrapperProps,
    | 'isRowSelectionVisible'
    | 'rowSelectionPrimaryKey'
    | 'isRowSelectionUIFloating'
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
  > &
  Pick<QueryContextType, 'combineRangeFacetConfig'>

export type SearchParams = {
  searchParams?: {
    facetValue: string
  }
}
export type Operator = {
  sqlOperator?: SQLOperator
}

export type QueryWrapperPlotNavProps = SearchParams &
  PlotsContainerProps &
  Operator &
  QueryWrapperPlotNavOwnProps

type QueryWrapperPlotNavContentsProps = Pick<
  QueryWrapperPlotNavProps,
  | 'tableConfiguration'
  | 'name'
  | 'cardConfiguration'
  | 'facetsToPlot'
  | 'availableFacets'
  | 'hideDownload'
  | 'hideQueryCount'
  | 'hideSqlEditorControl'
  | 'searchConfiguration'
  | 'showExportToCavatica'
  | 'cavaticaConnectAccountURL'
  | 'customControls'
  | 'fileIdColumnName'
  | 'fileNameColumnName'
  | 'fileVersionColumnName'
  | 'customPlots'
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
    hideDownload,
    hideQueryCount,
    hideSqlEditorControl,
    searchConfiguration,
    showExportToCavatica = false,
    cavaticaConnectAccountURL,
    fileIdColumnName,
    fileNameColumnName,
    fileVersionColumnName,
    customControls,
    remount,
    isFullTextSearchEnabled,
    customPlots,
  } = props
  const queryContext = useQueryContext()
  const [showExportMetadata, setShowExportMetadata] = React.useState(false)

  const { isFacetsAvailable: isFaceted } = queryContext
  const isLoadingNewBundle = useAtomValue(isLoadingNewBundleAtom)

  const hasSelectedRows = useAtomValue(hasSelectedRowsAtom)

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
            className={`QueryWrapperPlotNav ${
              queryVisualizationContext.showFacetFilter
                ? QUERY_FILTERS_EXPANDED_CSS
                : QUERY_FILTERS_COLLAPSED_CSS
            } ${hasSelectedRows ? HAS_SELECTED_ROWS_CSS : ''}`}
            sx={{
              '*': {
                cursor: isLoadingNewBundle ? 'wait' : undefined,
              },
            }}
          >
            <div className={`ErrorBannerWrapper`}>
              <QueryWrapperErrorBanner />
            </div>
            {isFullTextSearchEnabled ? (
              <FullTextSearch
                helpUrl={searchConfiguration?.fullTextSearchHelpURL}
              />
            ) : (
              <SearchV2
                {...searchConfiguration}
                queryContext={queryContext}
                queryVisualizationContext={queryVisualizationContext}
              />
            )}
            <SqlEditor />
            {queryVisualizationContext.showDownloadConfirmation && (
              <TableQueryDownloadConfirmation />
            )}
            <SynapseErrorBoundary>
              <TopLevelControls
                showColumnSelection={tableConfiguration !== undefined}
                name={name}
                hideDownload={hideDownload}
                hideQueryCount={hideQueryCount}
                hideFacetFilterControl={!isFaceted}
                hideVisualizationsControl={!isFaceted}
                hideSqlEditorControl={hideSqlEditorControl}
                showExportToCavatica={showExportToCavatica}
                cavaticaConnectAccountURL={cavaticaConnectAccountURL}
                customControls={customControls}
                remount={remount}
                fileIdColumnName={fileIdColumnName}
                fileNameColumnName={fileNameColumnName}
                fileVersionColumnName={fileVersionColumnName}
              />
            </SynapseErrorBoundary>
            {isFaceted && (
              <>
                <FacetFilterControls availableFacets={availableFacets} />
              </>
            )}
            <TotalQueryResults
              frontText={''}
              endText={hasFacetsOrFilters ? 'filtered by' : ''}
              hideIfUnfiltered={true}
            />
            <PlotsContainer
              facetsToPlot={facetsToPlot}
              customPlots={customPlots}
            />
            <FilterAndView
              tableConfiguration={tableConfiguration}
              hideDownload={hideDownload}
              cardConfiguration={cardConfiguration}
            />
            {showExportMetadata && (
              <ModalDownload
                getLastQueryRequest={queryContext?.getCurrentQueryRequest}
                onClose={() => setShowExportMetadata(false)}
              />
            )}
          </Box>
        )
      }}
    </QueryVisualizationContextConsumer>
  )
}

const QueryWrapperPlotNav: React.FunctionComponent<QueryWrapperPlotNavProps> = (
  props: QueryWrapperPlotNavProps,
) => {
  const {
    searchParams,
    sql,
    sqlOperator,
    tableConfiguration,
    limit = DEFAULT_PAGE_SIZE,
    initQueryJson,
    showLastUpdatedOn,
    unitDescription,
    additionalFiltersSessionStorageKey,
    helpConfiguration,
    customPlots,
  } = props

  const entityId = parseEntityIdFromSqlStatement(sql)
  const additionalFilters = getAdditionalFilters(
    additionalFiltersSessionStorageKey,
    searchParams,
    sqlOperator,
  )
  // use initQuery if set, otherwise use sql
  const query: Query = initQueryJson
    ? (JSON.parse(initQueryJson) as Query)
    : {
        sql,
        additionalFilters,
        limit: limit,
        offset: 0,
      }

  const [componentKey, setComponentKey] = useState(1)
  const remount = () => {
    setComponentKey(componentKey + 1)
  }
  const { data: entity } = useGetEntity(entityId)
  const initQueryRequest: QueryBundleRequest = {
    entityId,
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

  return (
    <QueryWrapper
      {...props}
      initQueryRequest={initQueryRequest}
      key={componentKey}
      isInfinite={!tableConfiguration}
    >
      <QueryVisualizationWrapper
        unitDescription={unitDescription}
        rgbIndex={props.rgbIndex}
        columnAliases={props.columnAliases}
        helpConfiguration={helpConfiguration}
        visibleColumnCount={props.visibleColumnCount}
        defaultShowPlots={props.defaultShowPlots}
        defaultShowSearchBar={
          props.defaultShowSearchBox || isFullTextSearchEnabled
        }
        showLastUpdatedOn={showLastUpdatedOn}
        noContentPlaceholderType={NoContentPlaceholderType.INTERACTIVE}
        hasCustomPlots={Array.isArray(customPlots) && customPlots.length > 0}
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

export default QueryWrapperPlotNav
