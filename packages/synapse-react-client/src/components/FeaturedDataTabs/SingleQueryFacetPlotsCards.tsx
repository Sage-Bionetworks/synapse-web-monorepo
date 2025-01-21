import { SynapseConstants } from '../../utils'
import { parseEntityIdFromSqlStatement } from '../../utils/functions'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import {
  QueryVisualizationContextType,
  QueryVisualizationWrapper,
} from '../QueryVisualizationWrapper'
import { QueryWrapper } from '../QueryWrapper'
import { QueryWrapperErrorBoundary } from '../QueryWrapperErrorBoundary'
import FacetPlotsCard, { FacetPlotsCardProps } from './FacetPlotsCard'
import { chunk } from 'lodash-es'
import { FacetPlotsCardGridContainer } from './FacetPlotsCardGrid'
import { CARDS_PER_ROW } from './FeaturedDataTabsUtils'

export type SingleQueryFacetPlotsCardsProps = {
  rgbIndex?: number
  facetsToPlot?: string[]
  columnAliases?: Record<string, string>
  sql?: string
} & Pick<QueryVisualizationContextType, 'unitDescription'> &
  Pick<FacetPlotsCardProps, 'plotType'>

function getQueryRequest(sql: string): QueryBundleRequest {
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

function SingleQueryFacetPlotsCards(props: SingleQueryFacetPlotsCardsProps) {
  const {
    sql,
    facetsToPlot,
    rgbIndex,
    columnAliases,
    unitDescription,
    plotType,
  } = props
  const initQueryRequest: QueryBundleRequest = getQueryRequest(sql!)

  /**
   * Fully re-render the uncontrolled QueryWrapper component when the initial query changes. This eliminates a class of
   * bugs where our 'derived' state (the current query), which should be reset, is out of sync with props.
   *
   * See https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key
   */
  const queryWrapperKey = JSON.stringify(initQueryRequest)

  return (
    <QueryWrapper initQueryRequest={initQueryRequest} key={queryWrapperKey}>
      <QueryVisualizationWrapper
        rgbIndex={rgbIndex}
        columnAliases={columnAliases}
        unitDescription={unitDescription}
      >
        <QueryWrapperErrorBoundary>
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
                    <FacetPlotsCard
                      key={facetName}
                      facetsToPlot={[facetName]}
                      plotType={plotType}
                    />
                  )
                })}
              </FacetPlotsCardGridContainer>
            )
          })}
        </QueryWrapperErrorBoundary>
      </QueryVisualizationWrapper>
    </QueryWrapper>
  )
}

export default SingleQueryFacetPlotsCards
