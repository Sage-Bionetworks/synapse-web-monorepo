import React from 'react'
import CardContainer from '../CardContainer'
import SynapseTable, { SynapseTableProps } from '../SynapseTable'
import { CardConfiguration } from '../CardContainerLogic'
import { useQueryContext } from '../QueryContext'
import { useSynapseContext } from '../../utils'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'
import LastUpdatedOn from './LastUpdatedOn'

export type FilterAndViewProps = {
  tableConfiguration:
    | Omit<
        SynapseTableProps,
        'synapseContext' | 'queryContext' | 'queryVisualizationContext'
      >
    | undefined
  cardConfiguration: CardConfiguration | undefined
  hideDownload?: boolean
}

const FilterAndView = (props: FilterAndViewProps) => {
  const { tableConfiguration, cardConfiguration, hideDownload } = props
  const synapseContext = useSynapseContext()
  const queryContext = useQueryContext()
  const queryVisualizationContext = useQueryVisualizationContext()
  return (
    <div className={`FilterAndView`}>
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
