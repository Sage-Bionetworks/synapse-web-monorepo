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
import type { Data } from 'plotly.js-basic-dist'
import { QueryContextType } from '../QueryContext'
import { QueryWrapperSynapsePlotRowClickEvent } from '../QueryWrapperPlotNav/QueryWrapperSynapsePlot'
import Plot from './Plot'
import './SynapsePlot.scss'

// ── Cross-tab helpers ──────────────────────────────────────────────────────

const CROSSTAB_DEFAULT_COLORS: Record<string, string> = {
  Available: '#125e81',
  'Under Embargo': '#E8B4C0',
  'Data Pending': '#C8B87A',
  'Not Expected': '#4A6276',
  Rolling: '#89A0B2',
  Partial: '#E0473D',
  Active: '#3FA9C9',
  Completed: '#5BB247',
}

const CROSSTAB_FALLBACK_PALETTE = [
  '#125e81',
  '#3FA9C9',
  '#5BB247',
  '#F2B718',
  '#E0473D',
  '#7B5EA7',
  '#E07B39',
  '#89A0B2',
  '#C0407A',
  '#4682B4',
]

function orderLabels(labels: string[], order?: string[]): string[] {
  if (!order?.length) return labels
  const ordered = order.filter(l => labels.includes(l))
  const rest = labels.filter(l => !order.includes(l))
  return [...ordered, ...rest]
}

// ── Types ──────────────────────────────────────────────────────────────────

/**
 * When set, the query must return exactly 3 columns:
 *   col 0 — row category (y-axis label for horizontal bars)
 *   col 1 — color group  (stack segment / legend entry)
 *   col 2 — numeric count
 * The component pivots these into one Plotly trace per group.
 */
export type CrossTabConfig = {
  rowOrder?: string[]
  groupOrder?: string[]
  /** Per-group color overrides keyed by group label. */
  groupColors?: Record<string, string>
  /** Chart height in px (default 280). */
  height?: number
  orientation?: 'h' | 'v'
}

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
  /** When set, enables cross-tab pivot mode (3-column SQL → stacked bar). */
  crossTabConfig?: CrossTabConfig
  /** Plot height; defaults to '450px' for standard mode, 280px for cross-tab mode. */
  height?: number | string
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
  const { query, crossTabConfig, height } = props.synapsePlotWidgetParams
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

  const skeletonHeight = height ?? (crossTabConfig ? 280 : 200)
  if (isLoading) {
    return <Skeleton width={'100%'} height={skeletonHeight} />
  }
  if (!queryData) {
    return <></>
  }

  // ── Cross-tab render (3-column SQL → stacked bar pivot) ───────────────
  if (crossTabConfig) {
    const {
      rowOrder,
      groupOrder,
      groupColors,
      orientation = 'h',
      height: ctHeight = 280,
    } = crossTabConfig
    const rows = queryData.queryResult?.queryResults?.rows ?? []
    const rowSet = new Set<string>()
    const groupSet = new Set<string>()
    const counts: Record<string, Record<string, number>> = {}
    rows.forEach(row => {
      const rowLabel = String(row.values?.[0] ?? '').trim()
      const group = String(row.values?.[1] ?? '').trim()
      const count = Number(row.values?.[2] ?? 0)
      if (!rowLabel || rowLabel === 'null' || !group || group === 'null') return
      rowSet.add(rowLabel)
      groupSet.add(group)
      if (!counts[rowLabel]) counts[rowLabel] = {}
      counts[rowLabel][group] = isNaN(count) ? 0 : count
    })
    const rowLabels = orderLabels([...rowSet], rowOrder)
    const groupLabels = orderLabels([...groupSet], groupOrder)
    const colorFor = (g: string, idx: number): string =>
      groupColors?.[g] ??
      CROSSTAB_DEFAULT_COLORS[g] ??
      CROSSTAB_FALLBACK_PALETTE[idx % CROSSTAB_FALLBACK_PALETTE.length]
    const traces: Data[] = groupLabels.map((group, gi) => {
      const groupCounts = rowLabels.map(row => counts[row]?.[group] ?? 0)
      return orientation === 'h'
        ? {
            type: 'bar' as const,
            orientation: 'h' as const,
            name: group,
            y: rowLabels,
            x: groupCounts,
            marker: { color: colorFor(group, gi) },
            hovertemplate: `<b>${group}</b>: %{x}<extra>%{y}</extra>`,
          }
        : {
            type: 'bar' as const,
            name: group,
            x: rowLabels,
            y: groupCounts,
            marker: { color: colorFor(group, gi) },
            hovertemplate: `<b>${group}</b>: %{y}<extra>%{x}</extra>`,
          }
    })
    const { title, xtitle, ytitle, displayModeBar } =
      props.synapsePlotWidgetParams
    const layout: Partial<Plotly.Layout> = {
      title: title ? { text: title, font: { size: 14 } } : undefined,
      barmode: 'stack',
      xaxis: {
        title: xtitle,
        gridcolor: '#f0f4f8',
        tickformat: 'd',
        automargin: true,
      },
      yaxis: { title: ytitle, automargin: true },
      margin: { t: title ? 40 : 16, b: 40, l: 120, r: 16 },
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)',
      legend: { x: 1.02, y: 1, xanchor: 'left' as const },
      font: {
        family:
          '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif',
        size: 12,
      },
    }
    return (
      <Plot
        data={traces}
        layout={layout}
        config={{ displayModeBar: displayModeBar ?? false, responsive: true }}
        style={{ width: '100%', height: height ?? ctHeight }}
      />
    )
  }

  // ── Standard column-to-trace render ────────────────────────────────────
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
      style={{ width: '100%', height: height ?? '450px' }}
      className={onPlotClick ? 'SynapsePlot--clickable' : undefined}
      layout={layout}
      data={plotData}
      config={config}
      onClick={onPlotClick}
    />
  )
}

export default SynapsePlot
