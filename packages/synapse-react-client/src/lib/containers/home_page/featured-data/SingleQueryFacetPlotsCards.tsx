import * as React from 'react'
import { SynapseConstants } from '../../../utils'
import { parseEntityIdFromSqlStatement } from '../../../utils/functions/sqlFunctions'
import { QueryBundleRequest } from '../../../utils/synapseTypes'
import { QueryVisualizationWrapper } from '../../QueryVisualizationWrapper'
import { QueryWrapper } from '../../QueryWrapper'
import { QueryWrapperErrorBanner } from '../../QueryWrapperErrorBanner'
import FacetPlotsCard from './FacetPlotsCard'

export type SingleQueryFacetPlotsCardsProps = {
  rgbIndex?: number
  facetsToPlot?: string[]
  columnAliases?: Record<string, string>
  sql?: string
}
export function getQueryRequest(sql: string): QueryBundleRequest {
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
      limit: 1,
    },
  }
}
const SingleQueryFacetPlotsCards: React.FunctionComponent<
  SingleQueryFacetPlotsCardsProps
> = props => {
  const { sql, facetsToPlot, rgbIndex, columnAliases } = props
  const initQueryRequest: QueryBundleRequest = getQueryRequest(sql!)
  return (
    <div className="SingleQueryFacetPlotsCards">
      <QueryWrapper initQueryRequest={initQueryRequest}>
        <QueryVisualizationWrapper
          rgbIndex={rgbIndex}
          columnAliases={columnAliases}
        >
          <QueryWrapperErrorBanner />
          {facetsToPlot?.map(facetName => {
            return (
              <FacetPlotsCard
                key={`FacetPlotCard-${facetName}`}
                facetsToPlot={[facetName]}
              />
            )
          })}
        </QueryVisualizationWrapper>
      </QueryWrapper>
    </div>
  )
}

export default SingleQueryFacetPlotsCards
