import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { useState } from 'react'
import { useGetEntity } from '../../synapse-queries/entity/useEntity'
import { SynapseConstants } from '../../utils'
import { isTable } from '../../utils/functions/EntityTypeUtils'
import {
  getAdditionalFilters,
  parseEntityIdFromSqlStatement,
} from '../../utils/functions/SqlFunctions'
import { DEFAULT_PAGE_SIZE } from '../../utils/SynapseConstants'
import FullTextSearch from '../FullTextSearch/FullTextSearch'
import { QueryContextConsumer } from '../QueryContext/QueryContext'
import {
  QueryVisualizationContextConsumer,
  QueryVisualizationWrapper,
  QueryVisualizationWrapperProps,
} from '../QueryVisualizationWrapper'
import { QueryWrapper, QueryWrapperProps } from '../QueryWrapper/QueryWrapper'
import {
  Operator,
  QueryWrapperPlotNavProps,
  SearchParams,
} from '../QueryWrapperPlotNav/QueryWrapperPlotNav'
import { RowSetView } from '../QueryWrapperPlotNav/RowSetView'
import { NoContentPlaceholderType } from '../SynapseTable/NoContentPlaceholderType'
import SearchV2, { SearchV2Props } from '../SynapseTable/SearchV2'
import SqlEditor from '../SynapseTable/SqlEditor'
import { SynapseTableConfiguration } from '../SynapseTable/SynapseTable'
import TopLevelControls, {
  TopLevelControlsProps,
} from '../SynapseTable/TopLevelControls/TopLevelControls'
import TotalQueryResults from '../TotalQueryResults'

type StandaloneQueryWrapperOwnProps = {
  sql: string
  showTopLevelControls?: boolean
  searchConfiguration?: Omit<
    SearchV2Props,
    'queryContext' | 'queryVisualizationContext'
  >
} & TopLevelControlsProps &
  Pick<
    QueryVisualizationWrapperProps,
    | 'rgbIndex'
    | 'unitDescription'
    | 'columnAliases'
    | 'noContentPlaceholderType'
    | 'showLastUpdatedOn'
    | 'visibleColumnCount'
    | 'additionalFiltersSessionStorageKey'
  > &
  Pick<
    QueryWrapperProps,
    | 'fileIdColumnName'
    | 'fileNameColumnName'
    | 'fileVersionColumnName'
    | 'onQueryResultBundleChange'
  > &
  Pick<QueryWrapperPlotNavProps, 'cardConfiguration' | 'tableConfiguration'>

export type StandaloneQueryWrapperProps = SynapseTableConfiguration &
  SearchParams &
  Operator &
  StandaloneQueryWrapperOwnProps

export const generateInitQueryRequest = (sql: string): QueryBundleRequest => {
  return {
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
      SynapseConstants.BUNDLE_MASK_QUERY_COUNT |
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
      SynapseConstants.BUNDLE_MASK_LAST_UPDATED_ON,
    entityId: parseEntityIdFromSqlStatement(sql),
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    query: {
      sql,
      limit: DEFAULT_PAGE_SIZE,
      offset: 0,
    },
  }
}
/**
 * This component was initially implemented on the portal side. It renders a SynapseTable if a title is provided.
 * If showTopLevelControls is set to true, then the SynapseTable will also include the TopLevelControls (search, export table, column selection).
 */
function StandaloneQueryWrapper(props: StandaloneQueryWrapperProps) {
  /** @deprecated property inherited from SynapseTableProps */
  const { hideDownload } = props
  const {
    searchParams,
    sqlOperator,
    showAccessColumn,
    sql,
    hideAddToDownloadListColumn = hideDownload,
    hideQueryCount,
    name,
    showTopLevelControls = false,
    searchConfiguration,
    unitDescription = 'Results',
    rgbIndex,
    showLastUpdatedOn,
    additionalFiltersSessionStorageKey,
    noContentPlaceholderType = showTopLevelControls
      ? NoContentPlaceholderType.INTERACTIVE
      : NoContentPlaceholderType.STATIC,
    cardConfiguration,
    tableConfiguration,
    ...rest
  } = props

  const [componentKey, setComponentKey] = useState(1)
  const remount = () => {
    setComponentKey(componentKey + 1)
  }
  const derivedQueryRequestFromSearchParams = generateInitQueryRequest(sql)
  const entityId = parseEntityIdFromSqlStatement(sql)
  derivedQueryRequestFromSearchParams.query.additionalFilters =
    getAdditionalFilters(
      additionalFiltersSessionStorageKey,
      searchParams,
      sqlOperator,
    )

  const { data: entity } = useGetEntity(entityId)

  /**
   * Fully re-render the uncontrolled QueryWrapper component when the initial query changes. This eliminates a class of
   * bugs where our 'derived' state (the current query), which should be reset, is out of sync with props.
   *
   * See https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key
   */
  const queryWrapperKey =
    JSON.stringify(derivedQueryRequestFromSearchParams) + componentKey

  return (
    <QueryWrapper
      {...rest}
      initQueryRequest={derivedQueryRequestFromSearchParams}
      key={queryWrapperKey}
    >
      <QueryVisualizationWrapper
        rgbIndex={rgbIndex}
        unitDescription={unitDescription}
        showLastUpdatedOn={showLastUpdatedOn}
        noContentPlaceholderType={noContentPlaceholderType}
        {...rest}
      >
        <QueryContextConsumer>
          {queryContext => {
            if (queryContext === undefined) {
              throw new Error(
                'No queryContext found when calling QueryContextConsumer',
              )
            }
            return (
              <QueryVisualizationContextConsumer>
                {queryVisualizationContext => {
                  if (queryVisualizationContext === undefined) {
                    throw new Error(
                      'No queryVisualizationContext found when calling QueryVisualizationContextConsumer',
                    )
                  }

                  return (
                    <>
                      {showTopLevelControls && (
                        <TopLevelControls
                          showColumnSelection={true}
                          name={name}
                          hideDownload={hideAddToDownloadListColumn}
                          hideQueryCount={hideQueryCount}
                          hideFacetFilterControl={true}
                          hideVisualizationsControl={true}
                          remount={remount}
                        />
                      )}
                      {entity && isTable(entity) && entity.isSearchEnabled ? (
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
                      {showTopLevelControls && (
                        <TotalQueryResults frontText={''} />
                      )}

                      <RowSetView
                        tableConfiguration={
                          cardConfiguration
                            ? undefined
                            : {
                                ...tableConfiguration, // if exist, use tableConfiguration property
                                showAccessColumn: showAccessColumn,
                                hideAddToDownloadListColumn,
                                ...rest,
                              }
                        }
                        cardConfiguration={cardConfiguration} // if exist, use the cardConfiguration property
                      />
                    </>
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

export default StandaloneQueryWrapper
