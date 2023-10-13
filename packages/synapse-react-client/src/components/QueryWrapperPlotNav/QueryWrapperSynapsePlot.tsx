import React, { useMemo } from 'react'
import { SynapsePlot } from '../Plot'
import { QueryContextType, useQueryContext } from '../QueryContext'
import {
  QueryWrapperPlotNavCustomPlotParams,
  SynapsePlotWidgetParams,
} from '../Plot/SynapsePlot'
import {
  FacetColumnRequest,
  QueryFilter,
  Row,
} from '@sage-bionetworks/synapse-types'
import { FacetFilterHeader } from '../widgets/query-filter/FacetFilterHeader'

export type QueryWrapperSynapsePlotProps = Pick<
  QueryWrapperPlotNavCustomPlotParams,
  'onCustomPlotClick'
> &
  Omit<SynapsePlotWidgetParams, 'selectedFacets' | 'additionalFilters'>

export type QueryWrapperSynapsePlotRowClickEvent = {
  row: Row
  queryContext: QueryContextType
}

/**
 * This component wraps a SynapsePlot.  It passes in the current query context, and has a custom
 * "title" style so that it looks like it belongs in the QueryWrapperPlotNav plots.
 * @param props
 * @returns
 */
export default function QueryWrapperSynapsePlot(
  props: QueryWrapperSynapsePlotProps,
) {
  const queryContext = useQueryContext()
  const { currentQueryRequest } = queryContext
  const { title, onCustomPlotClick } = props

  const widgetParamsMapped: SynapsePlotWidgetParams = useMemo(() => {
    return {
      ...props,
      title: undefined, // we are handling the plot title here in this component
      showlegend: false,
      displayModebar: false,
    }
  }, [props])

  const customPlotParams: QueryWrapperPlotNavCustomPlotParams = useMemo(() => {
    const { selectedFacets, additionalFilters } = currentQueryRequest.query
    return {
      selectedFacets: selectedFacets as FacetColumnRequest[],
      additionalFilters: additionalFilters as QueryFilter[],
      onCustomPlotClick,
      queryContext,
    }
  }, [currentQueryRequest.query, onCustomPlotClick, queryContext])
  return (
    <div className="SynapsePlot">
      {title && (
        <FacetFilterHeader
          hideCollapsible={true}
          label={title}
          isCollapsed={false}
          onClick={() => {}}
        />
      )}
      <SynapsePlot
        synapsePlotWidgetParams={widgetParamsMapped}
        customPlotParams={customPlotParams}
      />
    </div>
  )
}
