import React from 'react'
import { useGetFullTableQueryResults } from '@/synapse-queries'
import { SynapseConstants } from '@/utils'
import { parseEntityIdFromSqlStatement } from '@/utils/functions/SqlFunctions'
import { Skeleton } from '@mui/material'
import {
  FacetColumnRequest,
  QueryBundleRequest,
  QueryFilter,
  Row,
} from '@sage-bionetworks/synapse-types'
import Plotly, { AxisType, PlotType } from 'plotly.js-basic-dist'
import { QueryContextType } from '../QueryContext'
import { QueryWrapperSynapsePlotRowClickEvent } from '../QueryWrapperPlotNav/QueryWrapperSynapsePlot'
import Plot from './Plot'
import './SynapsePlot.scss'

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
  hoverinfo?: Plotly.PlotData['hoverinfo'] // sets the hover info
  hideYAxisTickLabels?: boolean // hides the y-axis tick labels
  hideXAxisTickLabels?: boolean // hides the x-axis tick labels
  footnote?: string // optional text displayed below the plot
  fullWidth?: boolean // forces the plot to take up the full container width
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

export const SynapsePlot = (props: SynapsePlotProps): React.ReactNode => {
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
    hoverinfo,
    hideYAxisTickLabels,
    hideXAxisTickLabels,
    footnote,
  } = props.synapsePlotWidgetParams

  const config: Partial<Plotly.Config> = {
    displayModeBar,
  }
  const layout: Partial<Plotly.Layout> = {
    showlegend: showlegend,
    title,
    barmode: barmode,
    ...(footnote && { margin: { b: 40 } }),
  }
  if (xtitle || hideXAxisTickLabels) {
    layout.xaxis = {
      ...(xtitle && { title: xtitle }),
      ...(hideXAxisTickLabels && { showticklabels: false }),
    }
  }
  if (xaxistype) {
    layout.xaxis = {
      ...layout.xaxis,
      type: xaxistype,
    }
  }
  if (ytitle || hideYAxisTickLabels) {
    layout.yaxis = {
      ...(ytitle && { title: ytitle }),
      ...(hideYAxisTickLabels && { showticklabels: false }),
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
    const valueColumnName = headers[i + 1].name
    const hovertemplate =
      type === 'bar'
        ? horizontal
          ? `<b>%{y}</b><br>${valueColumnName}: %{x:,}<extra></extra>`
          : `<b>%{x}</b><br>${valueColumnName}: %{y:,}<extra></extra>`
        : undefined
    plotData[i] = {
      orientation,
      name: valueColumnName,
      type: type,
      x: [],
      y: [],
      customdata: [],
      ...(hovertemplate !== undefined && { hovertemplate }),
      ...(hoverinfo !== undefined && { hoverinfo }),
    }
  }
  // grab all the data
  for (const row of rows) {
    for (let j = 1; j < row.values.length; j += 1) {
      // create pairs of data
      const rowValues = row.values
      const xArray = plotData[j - 1].x as Plotly.Datum[]
      const yArray = plotData[j - 1].y as Plotly.Datum[]
      const customdata = plotData[j - 1].customdata as Plotly.Datum[]

      xArray.push(horizontal ? rowValues[j] : rowValues[0])
      yArray.push(horizontal ? rowValues[0] : rowValues[j])
      customdata.push(JSON.stringify(row))
    }
  }
  let onPlotClick:
    | ((event: Readonly<Plotly.PlotMouseEvent>) => void)
    | undefined
  if (onCustomPlotClick) {
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
      className={onPlotClick ? 'SynapsePlot--clickable' : undefined}
      layout={layout}
      data={plotData}
      config={config}
      onClick={onPlotClick}
      useResizeHandler={true}
    />
  )
}

export default SynapsePlot
