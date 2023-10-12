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
import { Typography } from '@mui/material'

export type QueryWrapperSynapsePlotProps = Pick<
  QueryWrapperPlotNavCustomPlotParams,
  'onCustomPlotClick'
> &
  Omit<SynapsePlotWidgetParams, 'selectedFacets' | 'additionalFilters'>

export type QueryWrapperSynapsePlotRowClickEvent = {
  row: Row
} & Pick<QueryContextType, 'getCurrentQueryRequest' | 'executeQueryRequest'>

export default function QueryWrapperSynapsePlot(
  props: QueryWrapperSynapsePlotProps,
) {
  const { currentQueryRequest, getCurrentQueryRequest, executeQueryRequest } =
    useQueryContext()
  const { title, onCustomPlotClick } = props

  const widgetParamsMapped: SynapsePlotWidgetParams = useMemo(() => {
    return {
      ...props,
      title: undefined, // we are handling the plot title here in this component
      displayModebar: 'false',
    }
  }, [props])

  const customPlotParams: QueryWrapperPlotNavCustomPlotParams = useMemo(() => {
    const { selectedFacets, additionalFilters } = currentQueryRequest.query
    return {
      selectedFacets: selectedFacets as FacetColumnRequest[],
      additionalFilters: additionalFilters as QueryFilter[],
      executeQueryRequest,
      getCurrentQueryRequest,
      onCustomPlotClick,
    }
  }, [
    currentQueryRequest.query,
    executeQueryRequest,
    getCurrentQueryRequest,
    onCustomPlotClick,
  ])
  return (
    <div className="SynapsePlot">
      {title && (
        <Typography
          variant="smallText1"
          sx={{
            fontWeight: 700,
            borderBottom: '1px solid #dcdcdc',
            paddingBottom: '8px',
          }}
        >
          {title}
        </Typography>
      )}
      <SynapsePlot
        widgetparamsMapped={widgetParamsMapped}
        customPlotParams={customPlotParams}
      />
    </div>
  )
}
