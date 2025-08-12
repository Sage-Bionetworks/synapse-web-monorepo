import QueryPerFacetPlotsCard, {
  QueryPerFacetPlotsCardProps,
} from './QueryPerFacetPlotsCard'
import SingleQueryFacetPlotsCards, {
  SingleQueryFacetPlotsCardsProps,
} from './SingleQueryFacetPlotsCards'
import { chunk, times } from 'lodash-es'
import { FacetPlotsCardGridContainer } from './FacetPlotsCardGrid'
import { CARDS_PER_ROW } from './FeaturedDataTabsUtils'

export type QueryFacetPlotsCardsProps =
  | QueryPerFacetPlotsCardProps
  | SingleQueryFacetPlotsCardsProps

export type FeaturedDataPlotsProps = {
  configs: QueryFacetPlotsCardsProps[]
  rgbIndex?: number
  sql?: string
  explorePagePath?: string
}

function FeaturedDataPlots(props: FeaturedDataPlotsProps) {
  const { configs, rgbIndex, sql } = props
  // What mode are we in?  Either every card has a different selected facet (requiring a different query),
  // or we're showing the facet counts for a single query.  This controls the layout, and how the cards are populated.
  const isQueryPerCard = configs && 'selectFacetColumnName' in configs[0]
  if (!isQueryPerCard) {
    return (
      <>
        {(configs as SingleQueryFacetPlotsCardsProps[]).map((config, idx) => {
          return (
            !isQueryPerCard && (
              <SingleQueryFacetPlotsCards
                key={idx}
                {...config}
                rgbIndex={rgbIndex}
                sql={sql}
              />
            )
          )
        })}
      </>
    )
  } else if (isQueryPerCard) {
    return (
      <>
        {chunk(configs as QueryPerFacetPlotsCardProps[], CARDS_PER_ROW).map(
          (configRow, rowIndex) => {
            let cssGridTemplateRows = '[title] auto'

            // There may be more than one plot per card, so add a row for each one
            times(configRow[0].facetsToPlot?.length ?? 1).forEach(
              (value, index) => {
                cssGridTemplateRows += ` [plot${index}] auto`
              },
            )
            return (
              <FacetPlotsCardGridContainer
                key={rowIndex}
                sx={{
                  gridTemplateRows: cssGridTemplateRows,
                }}
              >
                {configRow.map(config => {
                  return (
                    <QueryPerFacetPlotsCard
                      key={config.selectFacetColumnName}
                      {...config}
                      rgbIndex={rgbIndex}
                      sql={sql}
                    />
                  )
                })}
              </FacetPlotsCardGridContainer>
            )
          },
        )}
      </>
    )
  }
  return <></>
}

export default FeaturedDataPlots
