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
  xtitle?: Plotly.LayoutAxis['title'] // x-axis title
  ytitle?: Plotly.LayoutAxis['title'] // y-axis title
  type: PlotType
  xaxistype?: AxisType
  showlegend?: Plotly.Layout['showlegend'] // sets the legend visibility
  horizontal?: boolean // sets the if a bar chart should be horizontal or vertical
  barmode?: Plotly.Layout['barmode'] // Plotly barmode
  displayModeBar?: Plotly.Config['displayModeBar'] // sets the modebar visibility
}

// QueryWrapperPlotNav customPlot parameters, undefined otherwise
export type QueryWrapperPlotNavCustomPlotParams = {
  selectedFacets: FacetColumnRequest[]
  additionalFilters: QueryFilter[]
  onCustomPlotClick?: (event: QueryWrapperSynapsePlotRowClickEvent) => void
  queryContext?: QueryContextType
}
export type SynapsePlotProps = {
  synapsePlotWidgetParams: SynapsePlotWidgetParams
  customPlotParams?: QueryWrapperPlotNavCustomPlotParams
}

export const SynapsePlot = (props: SynapsePlotProps) => {
  const { query } = props.synapsePlotWidgetParams
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
    displayModeBar,
  } = props.synapsePlotWidgetParams

  const config: Partial<Plotly.Config> = {
    displayModeBar,
  }
  const layout: Partial<Plotly.Layout> = {
    showlegend: showlegend,
    title,
    barmode: barmode,
  }
  if (xtitle) {
    layout.xaxis = {
      title: xtitle,
    }
  }
  if (xaxistype) {
    layout.xaxis = {
      ...layout.xaxis,
      type: xaxistype,
    }
  }
  if (ytitle) {
    layout.yaxis = {
      title: ytitle,
    }
  }
  // init plot_data
  const plotData: Partial<Plotly.PlotData>[] = []
  const orientation = horizontal ? 'h' : 'v'
  const headers = queryData.queryResult?.queryResults.headers ?? []
  const rows = queryData.queryResult?.queryResults.rows ?? []
  if (headers.length == 0 || rows.length == 0) {
    return <></>
  }
  for (let i = 0; i < headers.length - 1; i += 1) {
    // make an entry for each set of data points
    plotData[i] = {
      orientation,
      name: headers[i + 1].name,
      type: type,
      x: [],
      y: [],
      customdata: [],
    }
  }
  // grab all the data
  for (const row of rows) {
    for (let j = 1; j < row.values.length; j += 1) {
      // create pairs of data
      const rowValues = row.values
      const xArray = plotData[j - 1]!.x as Plotly.Datum[]
      const yArray = plotData[j - 1]!.y as Plotly.Datum[]
      const customdata = plotData[j - 1]!.customdata as Plotly.Datum[]

      xArray.push(horizontal ? rowValues[j] : rowValues[0])
      yArray.push(horizontal ? rowValues[0] : rowValues[j])
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
      // TODO: if we want to change the cursor to pointer on hovering over a point,
      // we could add a handler for onHover (if there's an onClick handler), and add/remove a class to the plot
    />
  )
}

export default SynapsePlot
