import Plotly, { AxisType, PlotType } from 'plotly.js-basic-dist'
import React from 'react'
import createPlotlyComponent from 'react-plotly.js/factory'
import { SynapseConstants } from '../../utils'
import {
  FacetColumnRequest,
  QueryBundleRequest,
  QueryFilter,
  Row,
} from '@sage-bionetworks/synapse-types'
import { parseEntityIdFromSqlStatement } from '../../utils/functions/SqlFunctions'
import { useGetFullTableQueryResults } from '../../synapse-queries'
import { Skeleton } from '@mui/material'
import { QueryWrapperSynapsePlotRowClickEvent } from '../QueryWrapperPlotNav/QueryWrapperSynapsePlot'
import { QueryContextType } from '../QueryContext'
const Plot = createPlotlyComponent(Plotly)

export type SynapsePlotWidgetParams = {
  query: string //sql string
  title?: string //plot title
  xtitle?: string // x-axis title
  ytitle?: string // y-axis title
  type: string // Plotly PlotType
  xaxistype?: string // Plotly AxisType
  showlegend?: string // sets the legend visibility ('true' | 'false')
  horizontal?: string // sets the if a bar chart should be horizontal or vertical ('true' | 'false')
  barmode?: string // Plotly barmode ('stack' | 'group' | 'overlay' | 'relative')
  displayModebar?: string // sets the modebar visibility ('true' | 'false')
}

// QueryWrapperPlotNav customPlot parameters, undefined otherwise
export type QueryWrapperPlotNavCustomPlotParams = {
  selectedFacets: FacetColumnRequest[]
  additionalFilters: QueryFilter[]
  onCustomPlotClick?: (event: QueryWrapperSynapsePlotRowClickEvent) => void
  queryContext?: QueryContextType
}
export type SynapsePlotProps = {
  widgetparamsMapped: SynapsePlotWidgetParams
  customPlotParams?: QueryWrapperPlotNavCustomPlotParams
}

const toBoolean = (v?: string, fallbackValue?: boolean) => {
  return v ? v.toLowerCase() == 'true' : fallbackValue ?? false
}
export const SynapsePlot = (props: SynapsePlotProps) => {
  const { query } = props.widgetparamsMapped
  const { selectedFacets, additionalFilters, onCustomPlotClick, queryContext } =
    props.customPlotParams ?? {}
  const queryRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    entityId: parseEntityIdFromSqlStatement(query),
    query: {
      sql: query,
      selectedFacets,
      additionalFilters,
    },
  }
  const { data: queryData, isLoading } =
    useGetFullTableQueryResults(queryRequest)
  if (isLoading) {
    return <Skeleton width={'100%'} height={'200px'} />
  }
  if (!queryData) {
    return <></>
  }

  const {
    title,
    xtitle,
    ytitle,
    type,
    xaxistype,
    showlegend,
    barmode,
    horizontal,
    displayModebar,
  } = props.widgetparamsMapped
  const isShowLegend = toBoolean(showlegend, true)
  const isHorizontal = toBoolean(horizontal, false)
  const isDisplayModebar = toBoolean(displayModebar, false)
  const config: Partial<Plotly.Config> = {
    displayModeBar: isDisplayModebar,
  }
  const layout: Partial<Plotly.Layout> = {
    showlegend: isShowLegend,
    title,
    barmode: barmode
      ? (barmode.toLowerCase() as 'stack' | 'group' | 'overlay' | 'relative')
      : undefined,
  }
  if (xtitle) {
    layout.xaxis = {
      title: xtitle,
    }
  }
  if (xaxistype) {
    layout.xaxis = {
      ...layout.xaxis,
      type: xaxistype.toLowerCase() as AxisType,
    }
  }
  if (ytitle) {
    layout.yaxis = {
      title: ytitle,
    }
  }
  // init plot_data
  const plotData: Partial<Plotly.PlotData>[] = []
  const orientation = isHorizontal ? 'h' : 'v'
  const headers = queryData.queryResult?.queryResults.headers ?? []
  for (let i = 0; i < headers.length - 1; i += 1) {
    // make an entry for each set of data points
    plotData[i] = {
      orientation,
      name: headers[i + 1].name,
      type: type.toLowerCase() as PlotType,
      x: [],
      y: [],
      customdata: [],
    }
  }
  // grab all the data
  for (const row of queryData.queryResult?.queryResults.rows ?? []) {
    for (let j = 1; j < row.values.length; j += 1) {
      // create pairs of data
      const rowValues = row.values
      const xArray = plotData[j - 1]!.x as Plotly.Datum[]
      const yArray = plotData[j - 1]!.y as Plotly.Datum[]
      const customdata = plotData[j - 1]!.customdata as Plotly.Datum[]
      xArray.push(rowValues[0])
      yArray.push(rowValues[j])
      customdata.push(JSON.stringify(row))
    }
  }
  let onPlotClick:
    | ((event: Readonly<Plotly.PlotMouseEvent>) => void)
    | undefined
  if (onCustomPlotClick && queryContext) {
    onPlotClick = eventData => {
      const selectedRow = JSON.parse(
        eventData.points[0].customdata as string,
      ) as Row
      onCustomPlotClick({
        row: selectedRow,
        queryContext,
      })
    }
  }

  return (
    <Plot
      style={{ width: '100%', height: '450px' }}
      layout={layout}
      data={plotData}
      config={config}
      onClick={onPlotClick}
    />
  )
}

export default SynapsePlot
