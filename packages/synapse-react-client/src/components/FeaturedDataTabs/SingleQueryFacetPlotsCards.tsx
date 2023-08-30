import React from 'react'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { chunk } from 'lodash-es'
import { SynapseConstants } from '../../utils'
import { parseEntityIdFromSqlStatement } from '../../utils/functions'
import {
  QueryVisualizationContextType,
  QueryVisualizationWrapper,
} from '../QueryVisualizationWrapper'
import { QueryWrapper } from '../QueryWrapper'
import { QueryWrapperErrorBanner } from '../QueryWrapperErrorBanner'
import FacetPlotsCard from './FacetPlotsCard'
import { FacetPlotsCardGridContainer } from './FacetPlotsCardGrid'
import { CARDS_PER_ROW } from './FeaturedDataTabsUtils'

export type SingleQueryFacetPlotsCardsProps = {
  rgbIndex?: number
  facetsToPlot?: string[]
  columnAliases?: Record<string, string>
  sql?: string
} & Pick<QueryVisualizationContextType, 'unitDescription'>

export function getQueryRequest(sql: string): QueryBundleRequest {
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
      limit: 1,
    },
  }
}

const SingleQueryFacetPlotsCards: React.FunctionComponent<
  SingleQueryFacetPlotsCardsProps
> = props => {
  const { sql, facetsToPlot, rgbIndex, columnAliases, unitDescription } = props
  const initQueryRequest: QueryBundleRequest = getQueryRequest(sql!)
  return (
    <QueryWrapper initQueryRequest={initQueryRequest}>
      <QueryVisualizationWrapper
        rgbIndex={rgbIndex}
        columnAliases={columnAliases}
        unitDescription={unitDescription}
      >
        <QueryWrapperErrorBanner />
        {chunk(facetsToPlot, CARDS_PER_ROW).map((facets, rowIndex) => {
          return (
            <FacetPlotsCardGridContainer
              key={rowIndex}
              className={`FeaturedDataPlots__queryPerCard`}
              sx={{
                my: 4,
              }}
            >
              {facets?.map(facetName => {
                return (
                  <FacetPlotsCard key={facetName} facetsToPlot={[facetName]} />
                )
              })}
            </FacetPlotsCardGridContainer>
          )
        })}
      </QueryVisualizationWrapper>
    </QueryWrapper>
  )
}

export default SingleQueryFacetPlotsCards
