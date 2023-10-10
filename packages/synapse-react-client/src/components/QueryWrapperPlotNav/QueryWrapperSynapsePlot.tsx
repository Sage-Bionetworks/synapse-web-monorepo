import React, { useMemo } from 'react'
import { SynapsePlot } from '../Plot'
import { useQueryContext } from '../QueryContext'
import { SynapsePlotWidgetParams } from '../Plot/SynapsePlot'
import {
  FacetColumnRequest,
  QueryFilter,
} from '@sage-bionetworks/synapse-types'
import { Typography } from '@mui/material'

export type QueryWrapperSynapsePlotProps = Omit<
  SynapsePlotWidgetParams,
  'selectedFacets'
>

export default function QueryWrapperSynapsePlot(
  props: QueryWrapperSynapsePlotProps,
) {
  const { currentQueryRequest } = useQueryContext()
  const { title } = props
  const widgetParamsMapped: SynapsePlotWidgetParams = useMemo(() => {
    const { selectedFacets, additionalFilters } = currentQueryRequest.query
    return {
      ...props,
      title: undefined, // we are handling the plot title here in this component
      selectedFacets: selectedFacets as FacetColumnRequest[],
      additionalFilters: additionalFilters as QueryFilter[],
      displayModebar: 'false',
    }
  }, [currentQueryRequest, props])

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
      <SynapsePlot widgetparamsMapped={widgetParamsMapped} />
    </div>
  )
}
