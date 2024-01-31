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
import { IconButton, Tooltip } from '@mui/material'
import IconSvg from '../IconSvg'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'

export type QueryWrapperSynapsePlotProps = Pick<
  QueryWrapperPlotNavCustomPlotParams,
  'onCustomPlotClick'
> &
  Omit<SynapsePlotWidgetParams, 'selectedFacets' | 'additionalFilters'> & {
    // TODO: Split interfaces into external props and internal props,
    // onHide should not be externalized
    onHide?: () => void
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
  props: QueryWrapperSynapsePlotProps,
) {
  const queryContext = useQueryContext()
  const { currentQueryRequest } = queryContext
  const { title, onCustomPlotClick, onHide } = props // onhide() callback
  const { showPlotVisualization: showFacetVisualization } =
    useQueryVisualizationContext()

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
      {showFacetVisualization && (
        <>
          {title && (
            <div className="FacetNavPanel__title">
              <span className="FacetNavPanel__title__name">{title}</span>
              <div role="toolbar" className="FacetNavPanel__title__tools">
                <Tooltip title={'Hide graph under Show More'}>
                  <IconButton
                    onClick={() => {
                      if (onHide) {
                        onHide()
                      }
                    }}
                    size={'small'}
                  >
                    <IconSvg icon={'close'} wrap={false} fontSize={'inherit'} />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          )}
          <SynapsePlot
            synapsePlotWidgetParams={widgetParamsMapped}
            customPlotParams={customPlotParams}
          />
        </>
      )}
    </div>
  )
}
