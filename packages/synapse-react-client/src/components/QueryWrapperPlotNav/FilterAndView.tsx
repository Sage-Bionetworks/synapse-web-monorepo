import React from 'react'
import CardContainer from '../CardContainer'
import SynapseTable, { SynapseTableProps } from '../SynapseTable'
import { CardConfiguration } from '../CardContainerLogic'
import LastUpdatedOn from './LastUpdatedOn'
import { useDeepCompareMemoize } from 'use-deep-compare-effect'
import QueryWrapperLoadingScreen from '../QueryWrapper/QueryWrapperLoadingScreen'

export type FilterAndViewProps = {
  tableConfiguration?: SynapseTableProps
  cardConfiguration: CardConfiguration | undefined
  hideDownload?: boolean
}

const FilterAndView = (props: FilterAndViewProps) => {
  const { cardConfiguration, hideDownload } = props
  const tableConfiguration = useDeepCompareMemoize(
    props.tableConfiguration
      ? {
          ...props.tableConfiguration,
          hideDownload,
        }
      : undefined,
  )

  return (
    <div className={`FilterAndView`}>
      <QueryWrapperLoadingScreen />
      {tableConfiguration ? <SynapseTable {...tableConfiguration} /> : <></>}
      {cardConfiguration ? <CardContainer {...cardConfiguration} /> : <></>}
      <LastUpdatedOn />
    </div>
  )
}

export default FilterAndView
