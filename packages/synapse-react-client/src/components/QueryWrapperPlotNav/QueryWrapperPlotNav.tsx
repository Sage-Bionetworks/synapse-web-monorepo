import React from 'react'
import { SynapseConstants } from '../../utils'
import { isTable } from '../../utils/functions/EntityTypeUtils'
import {
  getAdditionalFilters,
  parseEntityIdFromSqlStatement,
  SQLOperator,
} from '../../utils/functions'
import { useGetEntity } from '../../synapse-queries'
import { DEFAULT_PAGE_SIZE } from '../../utils/SynapseConstants'
import { Query, QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { CardConfiguration } from '../CardContainerLogic'
import { DownloadConfirmation } from '../download_list'
import FullTextSearch from '../FullTextSearch'
import ModalDownload from '../ModalDownload/ModalDownload'
import {
  QueryVisualizationContextConsumer,
  QueryVisualizationWrapper,
  QueryVisualizationWrapperProps,
} from '../QueryVisualizationWrapper'
import {
  QueryWrapper as PaginatedQueryWrapper,
  QueryWrapperProps,
} from '../QueryWrapper/QueryWrapper'
import { InfiniteQueryWrapper } from '../InfiniteQueryWrapper'
import { QueryContextConsumer } from '../QueryContext'
import { QueryWrapperErrorBanner } from '../QueryWrapperErrorBanner'
import SearchV2, { SearchV2Props } from '../SearchV2'
import SqlEditor from '../SqlEditor'
import { SynapseTableProps } from '../SynapseTable'
import TopLevelControls, {
  TopLevelControlsProps,
} from '../SynapseTable/TopLevelControls/TopLevelControls'
import FacetNav, { FacetNavProps } from '../widgets/facet-nav/FacetNav'
import FacetFilterControls, {
  FacetFilterControlsProps,
} from '../widgets/query-filter/FacetFilterControls'
import FilterAndView from './FilterAndView'
import { NoContentPlaceholderType } from '../SynapseTable/NoContentPlaceholderType'
import { Box } from '@mui/material'
import { SynapseErrorBoundary } from '../error/ErrorBanner'

export const QUERY_FILTERS_EXPANDED_CSS: string = 'isShowingFacetFilters'
export const QUERY_FILTERS_COLLAPSED_CSS: string = 'isHidingFacetFilters'

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
  tableConfiguration?: Omit<
    SynapseTableProps,
    'synapseContext' | 'queryContext' | 'queryVisualizationContext'
  >
  cardConfiguration?: CardConfiguration
  searchConfiguration?: Omit<
    SearchV2Props,
    'queryContext' | 'queryVisualizationContext'
  >
  facetsToPlot?: string[]
  availableFacets?: FacetFilterControlsProps['availableFacets']
  defaultColumn?: string
  defaultShowSearchBox?: boolean
  lockedColumn?: QueryWrapperProps['lockedColumn']
  onViewSharingSettingsClicked?: (benefactorId: string) => void
} & Omit<TopLevelControlsProps, 'entityId'> &
  Pick<
    QueryVisualizationWrapperProps,
    | 'defaultShowFacetVisualization'
    | 'visibleColumnCount'
    | 'columnAliases'
    | 'rgbIndex'
    | 'showLastUpdatedOn'
    | 'noContentPlaceholderType'
    | 'isRowSelectionVisible'
    | 'unitDescription'
    | 'rowSelectionPrimaryKey'
  >

export type SearchParams = {
  searchParams?: {
    facetValue: string
  }
}
export type Operator = {
  sqlOperator?: SQLOperator
}

export type QueryWrapperPlotNavProps = SearchParams &
  FacetNavProps &
  Operator &
  QueryWrapperPlotNavOwnProps

const QueryWrapperPlotNav: React.FunctionComponent<QueryWrapperPlotNavProps> = (
  props: QueryWrapperPlotNavProps,
) => {
  const [showExportMetadata, setShowExportMetadata] = React.useState(false)
  const {
    searchParams,
    sql,
    sqlOperator,
    tableConfiguration,
    name,
    cardConfiguration,
    facetsToPlot,
    availableFacets,
    hideDownload,
    hideQueryCount,
    hideSqlEditorControl,
    searchConfiguration,
    limit = DEFAULT_PAGE_SIZE,
    initQueryJson,
    showLastUpdatedOn,
    showExportToCavatica = false,
    cavaticaHelpURL,
    customControls,
    isRowSelectionVisible,
    unitDescription,
    rowSelectionPrimaryKey,
  } = props

  const entityId = parseEntityIdFromSqlStatement(sql)
  const additionalFilters = getAdditionalFilters(
    entityId,
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

  const { data: entity } = useGetEntity(entityId)
  const isFullTextSearchEnabled =
    entity && isTable(entity) && entity.isSearchEnabled
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
  const QueryWrapper = tableConfiguration
    ? PaginatedQueryWrapper
    : InfiniteQueryWrapper

  return (
    <QueryWrapper {...props} initQueryRequest={initQueryRequest}>
      <QueryVisualizationWrapper
        unitDescription={unitDescription}
        rowSelectionPrimaryKey={rowSelectionPrimaryKey}
        rgbIndex={props.rgbIndex}
        columnAliases={props.columnAliases}
        visibleColumnCount={props.visibleColumnCount}
        defaultShowFacetVisualization={props.defaultShowFacetVisualization}
        defaultShowSearchBar={
          props.defaultShowSearchBox || isFullTextSearchEnabled
        }
        showLastUpdatedOn={showLastUpdatedOn}
        noContentPlaceholderType={NoContentPlaceholderType.INTERACTIVE}
        isRowSelectionVisible={isRowSelectionVisible}
      >
        <QueryContextConsumer>
          {queryContext => {
            if (queryContext === undefined) {
              throw new Error(
                'No queryContext found when using QueryContextConsumer',
              )
            }

            const { isFacetsAvailable: isFaceted, isLoadingNewBundle } =
              queryContext

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
                      }`}
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
                        <DownloadConfirmation
                          getLastQueryRequest={queryContext.getLastQueryRequest}
                          setShowDownloadConfirmation={
                            queryVisualizationContext.setShowDownloadConfirmation
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
                          hideVisualizationsControl={!isFaceted}
                          hideSqlEditorControl={hideSqlEditorControl}
                          showExportToCavatica={showExportToCavatica}
                          cavaticaHelpURL={cavaticaHelpURL}
                          customControls={customControls}
                        />
                      </SynapseErrorBoundary>
                      {isFaceted && (
                        <>
                          <FacetFilterControls
                            availableFacets={availableFacets}
                          />
                        </>
                      )}
                      <FacetNav facetsToPlot={facetsToPlot} />
                      <FilterAndView
                        tableConfiguration={tableConfiguration}
                        hideDownload={hideDownload}
                        cardConfiguration={cardConfiguration}
                      />
                      {showExportMetadata && (
                        <ModalDownload
                          getLastQueryRequest={queryContext.getLastQueryRequest}
                          onClose={() => setShowExportMetadata(false)}
                        />
                      )}
                    </Box>
                  )
                }}
              </QueryVisualizationContextConsumer>
            )
          }}
        </QueryContextConsumer>
      </QueryVisualizationWrapper>
    </QueryWrapper>
  )
}

export default QueryWrapperPlotNav
