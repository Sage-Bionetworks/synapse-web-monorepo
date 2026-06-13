import React, { useMemo } from 'react'
import { useGetFullTableQueryResults } from '@/synapse-queries'
import { SynapseConstants } from '@/utils'
import { parseEntityIdFromSqlStatement } from '@/utils/functions/SqlFunctions'
import { Skeleton } from '@mui/material'
import {
  QueryBundleRequest,
  QueryFilter,
} from '@sage-bionetworks/synapse-types'
import type { Data } from 'plotly.js-basic-dist'
import Plot from './Plot'

export type SynapseCrossTabBarPlotProps = {
  /**
   * SQL returning exactly 3 columns: yLabel (row category), colorGroup (stack segment), count.
   * e.g. SELECT studyStatus, dataStatus, COUNT(*) FROM syn52694652 GROUP BY 1, 2
   */
  sql: string
  additionalFilters?: QueryFilter[]
  title?: string
  xAxisTitle?: string
  yAxisTitle?: string
  /** Display order for y-axis (row) categories. Unlisted items appended at bottom. */
  rowOrder?: string[]
  /** Display order for color groups (stack segments). Unlisted items appended. */
  groupOrder?: string[]
  /** Per-group color overrides keyed by group label. */
  groupColors?: Record<string, string>
  height?: number
  orientation?: 'h' | 'v'
}

const DEFAULT_COLORS: Record<string, string> = {
  Available: '#125e81',
  'Under Embargo': '#E8B4C0',
  'Data Pending': '#C8B87A',
  'Not Expected': '#4A6276',
  Rolling: '#89A0B2',
  Partial: '#E0473D',
  Active: '#3FA9C9',
  Completed: '#5BB247',
}

const FALLBACK_PALETTE = [
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

/**
 * Stacked bar chart driven by a 3-column Synapse cross-tab query.
 * Default orientation is horizontal (rows on y-axis).
 */
export const SynapseCrossTabBarPlot = (
  props: SynapseCrossTabBarPlotProps,
): React.ReactNode => {
  const {
    sql,
    additionalFilters,
    title,
    xAxisTitle,
    yAxisTitle,
    rowOrder,
    groupOrder,
    groupColors,
    height = 280,
    orientation = 'h',
  } = props

  const queryRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    entityId: parseEntityIdFromSqlStatement(sql),
    query: { sql, additionalFilters },
  }

  const { data: queryData, isLoading } =
    useGetFullTableQueryResults(queryRequest)

  const { rowLabels, groupLabels, countMap } = useMemo(() => {
    const rows = queryData?.queryResult?.queryResults?.rows ?? []
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

    return {
      rowLabels: orderLabels([...rowSet], rowOrder),
      groupLabels: orderLabels([...groupSet], groupOrder),
      countMap: counts,
    }
  }, [queryData, rowOrder, groupOrder])

  if (isLoading) {
    return <Skeleton variant="rectangular" height={height} />
  }

  const colorFor = (group: string, idx: number): string =>
    groupColors?.[group] ??
    DEFAULT_COLORS[group] ??
    FALLBACK_PALETTE[idx % FALLBACK_PALETTE.length]

  const traces: Data[] = groupLabels.map((group, gi) => {
    const counts = rowLabels.map(row => countMap[row]?.[group] ?? 0)
    return orientation === 'h'
      ? {
          type: 'bar' as const,
          orientation: 'h' as const,
          name: group,
          y: rowLabels,
          x: counts,
          marker: { color: colorFor(group, gi) },
          hovertemplate: `<b>${group}</b>: %{x}<extra>%{y}</extra>`,
        }
      : {
          type: 'bar' as const,
          name: group,
          x: rowLabels,
          y: counts,
          marker: { color: colorFor(group, gi) },
          hovertemplate: `<b>${group}</b>: %{y}<extra>%{x}</extra>`,
        }
  })

  const layout = {
    title: title ? { text: title, font: { size: 14 } } : undefined,
    barmode: 'stack' as const,
    xaxis: {
      title: xAxisTitle ? { text: xAxisTitle } : undefined,
      gridcolor: '#f0f4f8',
      tickformat: 'd',
      automargin: true,
    },
    yaxis: {
      title: yAxisTitle ? { text: yAxisTitle } : undefined,
      automargin: true,
    },
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
      config={{ displayModeBar: false, responsive: true }}
      style={{ width: '100%', height }}
    />
  )
}
