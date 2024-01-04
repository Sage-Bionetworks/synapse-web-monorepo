import React, { useState } from 'react'
import {
  getAdditionalFilters,
  parseEntityIdFromSqlStatement,
} from '../../utils/functions/SqlFunctions'
import SynapseTable, { SynapseTableProps } from '../SynapseTable/SynapseTable'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from '../../utils'
import { QueryWrapper } from '../QueryWrapper/QueryWrapper'
import { QueryContextConsumer } from '../QueryContext/QueryContext'
import TopLevelControls, {
  TopLevelControlsProps,
} from '../SynapseTable/TopLevelControls/TopLevelControls'
import FullTextSearch from '../FullTextSearch'
import SearchV2, { SearchV2Props } from '../SynapseTable/SearchV2'
import { useGetEntity } from '../../synapse-queries/entity/useEntity'
import TotalQueryResults from '../TotalQueryResults'
import SqlEditor from '../SynapseTable/SqlEditor'
import {
  QueryVisualizationContextConsumer,
  QueryVisualizationWrapper,
  QueryVisualizationWrapperProps,
} from '../QueryVisualizationWrapper'
import { isTable } from '../../utils/functions/EntityTypeUtils'
import LastUpdatedOn from '../QueryWrapperPlotNav/LastUpdatedOn'
import { NoContentPlaceholderType } from '../SynapseTable/NoContentPlaceholderType'
import { DEFAULT_PAGE_SIZE } from '../../utils/SynapseConstants'
import {
  Operator,
  SearchParams,
} from '../QueryWrapperPlotNav/QueryWrapperPlotNav'
import QueryWrapperLoadingScreen from '../QueryWrapper/QueryWrapperLoadingScreen'

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
  >

export type StandaloneQueryWrapperProps = SynapseTableProps &
  SearchParams &
  Operator &
  StandaloneQueryWrapperOwnProps

const generateInitQueryRequest = (sql: string): QueryBundleRequest => {
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
const StandaloneQueryWrapper: React.FunctionComponent<
  StandaloneQueryWrapperProps
> = (props: StandaloneQueryWrapperProps) => {
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
  return (
    <QueryWrapper
      {...rest}
      initQueryRequest={derivedQueryRequestFromSearchParams}
      key={componentKey}
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
                      <QueryWrapperLoadingScreen />
                      <SynapseTable
                        showAccessColumn={showAccessColumn}
                        data-testid="SynapseTable"
                        hideAddToDownloadListColumn={
                          hideAddToDownloadListColumn
                        }
                        {...rest}
                      />
                      <LastUpdatedOn />
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
