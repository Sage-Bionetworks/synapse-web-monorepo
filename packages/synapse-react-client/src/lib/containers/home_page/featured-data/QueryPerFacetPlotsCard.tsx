import * as React from 'react'
import { SynapseConstants } from '../../../utils'
import { parseEntityIdFromSqlStatement } from '../../../utils/functions/sqlFunctions'
import { DEFAULT_PAGE_SIZE } from '../../../utils/SynapseConstants'
import { QueryBundleRequest } from '../../../utils/synapseTypes'
import { QueryVisualizationWrapper } from '../../QueryVisualizationWrapper'
import { QueryWrapper } from '../../QueryWrapper'
import { QueryWrapperErrorBanner } from '../../QueryWrapperErrorBanner'
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
}
export function getQueryRequest(
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
      SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
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
const QueryPerFacetPlotsCard: React.FunctionComponent<
  QueryPerFacetPlotsCardProps
> = props => {
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
  return (
    <div className="QueryPerFacetPlotsCard">
      <QueryWrapper {...rest} initQueryRequest={initQueryRequest}>
        <QueryVisualizationWrapper rgbIndex={rgbIndex} {...rest}>
          <QueryWrapperErrorBanner />
          <FacetPlotsCard
            title={title}
            description={description}
            facetsToPlot={facetsToPlot}
            detailsPagePath={detailsPagePath}
          />
        </QueryVisualizationWrapper>
      </QueryWrapper>
    </div>
  )
}

export default QueryPerFacetPlotsCard
