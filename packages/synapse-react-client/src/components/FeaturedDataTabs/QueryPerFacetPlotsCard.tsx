import { SynapseConstants } from '../../utils'
import { parseEntityIdFromSqlStatement } from '../../utils/functions'
import { DEFAULT_PAGE_SIZE } from '../../utils/SynapseConstants'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import {
  QueryVisualizationContextType,
  QueryVisualizationWrapper,
} from '../QueryVisualizationWrapper'
import { QueryWrapper } from '../QueryWrapper'
import { QueryWrapperErrorBoundary } from '../QueryWrapperErrorBoundary'
import FacetPlotsCard from './FacetPlotsCard'

export type QueryPerFacetPlotsCardProps = {
  title?: string
  description?: string
  rgbIndex?: number
  facetsToPlot?: string[]
  selectFacetColumnName: string
  selectFacetColumnValue: string
  sql?: string
  detailsPagePath: string
} & Pick<QueryVisualizationContextType, 'unitDescription'>

function getQueryRequest(
  sql: string,
  selectFacetColumnName: string,
  selectFacetColumnValue: string,
): QueryBundleRequest {
  const entityId = parseEntityIdFromSqlStatement(sql)
  return {
    entityId,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
      SynapseConstants.BUNDLE_MASK_QUERY_FACETS,
    query: {
      sql,
      offset: 0,
      limit: DEFAULT_PAGE_SIZE,
      selectedFacets: [
        {
          columnName: selectFacetColumnName,
          facetValues: [selectFacetColumnValue],
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
        },
      ],
    },
  }
}
function QueryPerFacetPlotsCard(props: QueryPerFacetPlotsCardProps) {
  const {
    title,
    description,
    sql,
    facetsToPlot,
    rgbIndex,
    selectFacetColumnName,
    selectFacetColumnValue,
    detailsPagePath,
    ...rest
  } = props
  const initQueryRequest: QueryBundleRequest = getQueryRequest(
    sql!,
    selectFacetColumnName,
    selectFacetColumnValue,
  )

  /**
   * Fully re-render the uncontrolled QueryWrapper component when the initial query changes. This eliminates a class of
   * bugs where our 'derived' state (the current query), which should be reset, is out of sync with props.
   *
   * See https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key
   */
  const queryWrapperKey = JSON.stringify(initQueryRequest)

  return (
    <QueryWrapper
      {...rest}
      initQueryRequest={initQueryRequest}
      key={queryWrapperKey}
    >
      <QueryVisualizationWrapper rgbIndex={rgbIndex} {...rest}>
        <QueryWrapperErrorBoundary>
          <FacetPlotsCard
            title={title}
            description={description}
            facetsToPlot={facetsToPlot}
            detailsPagePath={detailsPagePath}
          />
        </QueryWrapperErrorBoundary>
      </QueryVisualizationWrapper>
    </QueryWrapper>
  )
}

export default QueryPerFacetPlotsCard
