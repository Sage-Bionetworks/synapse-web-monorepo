import * as React from 'react'
import CardContainer from '../CardContainer'
import SynapseTable, { SynapseTableProps } from '../table/SynapseTable'
import { CardConfiguration } from '../CardContainerLogic'
import {
  QUERY_FILTERS_COLLAPSED_CSS,
  QUERY_FILTERS_EXPANDED_CSS,
  useQueryContext,
} from '../QueryContext'
import { useSynapseContext } from '../../utils/SynapseContext'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'
import LastUpdatedOn from './LastUpdatedOn'

export type OwnProps = {
  tableConfiguration:
    | Omit<
        SynapseTableProps,
        'synapseContext' | 'queryContext' | 'queryVisualizationContext'
      >
    | undefined
  cardConfiguration: CardConfiguration | undefined
  hideDownload?: boolean
}

const FilterAndView = (props: OwnProps) => {
  const { tableConfiguration, cardConfiguration, hideDownload } = props
  const synapseContext = useSynapseContext()
  const queryContext = useQueryContext()
  const queryVisualizationContext = useQueryVisualizationContext()
  return (
    <div
      className={`FilterAndView ${
        queryVisualizationContext.topLevelControlsState.showFacetFilter
          ? QUERY_FILTERS_EXPANDED_CSS
          : QUERY_FILTERS_COLLAPSED_CSS
      }`}
    >
      {tableConfiguration ? (
        <SynapseTable
          {...tableConfiguration}
          synapseContext={synapseContext}
          queryContext={queryContext}
          queryVisualizationContext={queryVisualizationContext}
          hideDownload={hideDownload}
        />
      ) : (
        <></>
      )}
      {cardConfiguration ? <CardContainer {...cardConfiguration} /> : <></>}
      <LastUpdatedOn />
    </div>
  )
}

export default FilterAndView
