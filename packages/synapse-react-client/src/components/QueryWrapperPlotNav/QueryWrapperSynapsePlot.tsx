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
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'
import PlotPanelHeader from '../Plot/PlotPanelHeader'
export type QueryWrapperSynapsePlotProps = Pick<
  QueryWrapperPlotNavCustomPlotParams,
  'onCustomPlotClick'
> &
  Omit<SynapsePlotWidgetParams, 'selectedFacets' | 'additionalFilters'>
type QueryWrapperSynapsePlotInternalProps = {
  onHide: () => void
}
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
  props: QueryWrapperSynapsePlotProps & QueryWrapperSynapsePlotInternalProps,
) {
  const queryContext = useQueryContext()
  const { currentQueryRequest } = queryContext
  const { title, onCustomPlotClick, onHide } = props
  const { showPlots } = useQueryVisualizationContext()

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
    <div role="figure" className="SynapsePlot">
      {showPlots && (
        <>
          {title && <PlotPanelHeader title={title} onHide={onHide} />}
          <SynapsePlot
            synapsePlotWidgetParams={widgetParamsMapped}
            customPlotParams={customPlotParams}
          />
        </>
      )}
    </div>
  )
}
