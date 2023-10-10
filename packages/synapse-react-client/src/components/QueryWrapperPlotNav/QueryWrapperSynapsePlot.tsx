import React, { useMemo } from 'react'
import { SynapsePlot } from '../Plot'
import { useQueryContext } from '../QueryContext'
import { SynapsePlotWidgetParams } from '../Plot/SynapsePlot'
import { QueryFilter } from '@sage-bionetworks/synapse-types'

export type QueryWrapperSynapsePlotProps = Omit<
  SynapsePlotWidgetParams,
  'additionalFilters'
>

export default function QueryWrapperSynapsePlot(
  props: QueryWrapperSynapsePlotProps,
) {
  const { currentQueryRequest } = useQueryContext()

  const widgetParamsMapped: SynapsePlotWidgetParams = useMemo(() => {
    const { additionalFilters } = currentQueryRequest.query
    return {
      ...props,
      additionalFilters: additionalFilters as QueryFilter[],
    }
  }, [currentQueryRequest, props])

  return <SynapsePlot widgetparamsMapped={widgetParamsMapped} />
}
