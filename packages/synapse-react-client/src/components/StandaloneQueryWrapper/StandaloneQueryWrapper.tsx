import React from 'react'
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
} from '../SynapseTable/TopLevelControls'
import FullTextSearch from '../FullTextSearch'
import SearchV2, { SearchV2Props } from '../SearchV2'
import { useGetEntity } from '../../synapse-queries/entity/useEntity'
import TotalQueryResults from '../TotalQueryResults'
import SqlEditor from '../SqlEditor'
import { useSynapseContext } from '../../utils/context/SynapseContext'
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

type StandaloneQueryWrapperOwnProps = {
  sql: string
  showTopLevelControls?: boolean
  searchConfiguration?: Omit<
    SearchV2Props,
    'queryContext' | 'queryVisualizationContext'
  >
} & Omit<TopLevelControlsProps, 'entityId'> &
  Pick<
    QueryVisualizationWrapperProps,
    | 'rgbIndex'
    | 'unitDescription'
    | 'columnAliases'
    | 'noContentPlaceholderType'
    | 'showLastUpdatedOn'
  >

export type StandaloneQueryWrapperProps = Partial<
  Omit<
    SynapseTableProps,
    'synapseContext' | 'queryContext' | 'queryVisualizationContext'
  >
> &
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
  const {
    title,
    searchParams,
    sqlOperator,
    showAccessColumn,
    sql,
    hideDownload,
    hideQueryCount,
    name,
    showTopLevelControls = false,
    searchConfiguration,
    unitDescription = 'Results',
    rgbIndex,
    showLastUpdatedOn,
    noContentPlaceholderType = showTopLevelControls
      ? NoContentPlaceholderType.INTERACTIVE
      : NoContentPlaceholderType.STATIC,
    ...rest
  } = props

  const derivedQueryRequestFromSearchParams = generateInitQueryRequest(sql)
  const entityId = parseEntityIdFromSqlStatement(sql)
  derivedQueryRequestFromSearchParams.query.additionalFilters =
    getAdditionalFilters(entityId, searchParams, sqlOperator)

  const synapseContext = useSynapseContext()

  const { data: entity } = useGetEntity(entityId)
  return (
    <QueryWrapper
      {...rest}
      initQueryRequest={derivedQueryRequestFromSearchParams}
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
                          hideDownload={hideDownload}
                          hideQueryCount={hideQueryCount}
                          hideFacetFilterControl={true}
                          hideVisualizationsControl={true}
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
                      <SynapseTable
                        synapseContext={synapseContext}
                        queryContext={queryContext}
                        queryVisualizationContext={queryVisualizationContext}
                        showAccessColumn={showAccessColumn}
                        title={title}
                        data-testid="SynapseTable"
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
