import React, { useMemo } from 'react'
import { useGetFullTableQueryResults } from '@/synapse-queries'
import { SynapseConstants } from '@/utils'
import { parseEntityIdFromSqlStatement } from '@/utils/functions/SqlFunctions'
import { Box, Skeleton, Typography } from '@mui/material'
import {
  QueryBundleRequest,
  QueryFilter,
} from '@sage-bionetworks/synapse-types'
import type { Data } from 'plotly.js-basic-dist'
import Plot from './Plot'

// Fixed-slot fallback SQLs — hooks must always be called the same number of times
const NOOP_SQL = [
  'SELECT year FROM syn16857542 LIMIT 0',
  'SELECT yearProcessed FROM syn50913342 LIMIT 0',
  'SELECT studyName FROM syn51730943 LIMIT 0',
] as const

export type SeriesConfig = {
  /**
   * SQL returning either:
   *   - 2 columns: period label + count (aggregate query with GROUP BY), OR
   *   - 1 column: period label per row (raw query; rows are counted client-side)
   */
  sql: string
  label: string
  /** Bar fill colour */
  color: string
  additionalFilters?: QueryFilter[]
}

export type SynapseMultiSeriesTimeSeriesPlotProps = {
  /**
   * Up to 3 series — each rendered as its own facet column.
   * Slot 0 → publications SQL, 1 → datasets SQL, 2 → tools SQL.
   */
  series: SeriesConfig[]
  periodLabel?: string
  showCumulative?: boolean
  cumulativeColor?: string
  /** Height of each individual facet chart (px). */
  height?: number
  /**
   * 'faceted' (default): one column per series, per-year bars + cumulative line overlay.
   * 'cumulative': single combined chart, all series as cumulative lines only.
   */
  mode?: 'faceted' | 'cumulative'
}

function buildRequest(
  sql: string,
  additionalFilters?: QueryFilter[],
): QueryBundleRequest {
  return {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    entityId: parseEntityIdFromSqlStatement(sql),
    query: { sql, additionalFilters },
  }
}

function normalizePeriod(raw: unknown): string | null {
  const rawStr =
    raw == null
      ? ''
      : typeof raw === 'object'
      ? ''
      : String(raw as string | number | boolean)
  let s = rawStr.trim()
  // Unwrap Synapse multi-value list column format: ["2023"] → "2023"
  if (s.startsWith('[') && s.endsWith(']')) {
    try {
      const parsed = JSON.parse(s)
      if (Array.isArray(parsed) && parsed.length > 0)
        s = String(parsed[0]).trim()
      else return null
    } catch {
      s = s
        .replace(/^\[?"?/, '')
        .replace(/"?\]$/, '')
        .trim()
    }
  }
  if (!s || s === 'null') return null
  const asNum = Number(s)
  if (!isNaN(asNum)) {
    // Epoch milliseconds (Synapse DATE/TIMESTAMP columns) → extract year
    if (asNum > 1e11) return String(new Date(asNum).getFullYear())
    return String(Math.round(asNum))
  }
  // Date/datetime string: take the leading 4-digit year if present
  const yearMatch = s.match(/^(\d{4})/)
  return yearMatch ? yearMatch[1] : s
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseSeriesData(queryData: any): Map<string, number> {
  const map = new Map<string, number>()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(queryData?.queryResult?.queryResults?.rows ?? []).forEach((row: any) => {
    const period = normalizePeriod(row.values?.[0])
    if (!period) return
    const hasCount = (row.values?.length ?? 0) >= 2 && row.values[1] != null
    const rawCount = hasCount ? Number(row.values[1]) : NaN
    const count = isNaN(rawCount) ? 1 : rawCount
    map.set(period, (map.get(period) ?? 0) + count)
  })
  return map
}

/**
 * Faceted time-series grid: one column per research-output type.
 * Each facet shows per-year bars (left axis) and an optional per-type
 * cumulative line (right axis).  All columns share the same x-axis
 * domain so years align across facets.
 */
export const SynapseMultiSeriesTimeSeriesPlot = (
  props: SynapseMultiSeriesTimeSeriesPlotProps,
): React.ReactNode => {
  const {
    series,
    periodLabel = 'Year',
    showCumulative = true,
    cumulativeColor = '#E0473D',
    height = 280,
    mode = 'faceted',
  } = props

  // Always call exactly 3 hooks
  const s0 = series[0]
  const s1 = series[1]
  const s2 = series[2]

  const { data: d0, isLoading: l0 } = useGetFullTableQueryResults(
    buildRequest(s0?.sql ?? NOOP_SQL[0], s0?.additionalFilters),
    { enabled: !!s0?.sql },
  )
  const { data: d1, isLoading: l1 } = useGetFullTableQueryResults(
    buildRequest(s1?.sql ?? NOOP_SQL[1], s1?.additionalFilters),
    { enabled: !!s1?.sql },
  )
  const { data: d2, isLoading: l2 } = useGetFullTableQueryResults(
    buildRequest(s2?.sql ?? NOOP_SQL[2], s2?.additionalFilters),
    { enabled: !!s2?.sql },
  )

  const isLoading = (!!s0?.sql && l0) || (!!s1?.sql && l1) || (!!s2?.sql && l2)

  const plotData = useMemo(() => {
    const activeSeries = [s0, s1, s2].filter(Boolean)
    const maps = [
      s0?.sql ? parseSeriesData(d0) : new Map<string, number>(),
      s1?.sql ? parseSeriesData(d1) : new Map<string, number>(),
      s2?.sql ? parseSeriesData(d2) : new Map<string, number>(),
    ]

    // Union of all years, sorted chronologically
    const periodSet = new Set<string>()
    maps.forEach(m => m.forEach((_, k) => periodSet.add(k)))
    const periods = [...periodSet].sort((a, b) => {
      const na = Number(a),
        nb = Number(b)
      return !isNaN(na) && !isNaN(nb) ? na - nb : a.localeCompare(b)
    })

    return { activeSeries, maps, periods }
  }, [d0, d1, d2, s0, s1, s2])

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', gap: 2 }}>
        {series.map((_, i) => (
          <Skeleton
            key={i}
            variant="rectangular"
            height={height}
            sx={{ flex: 1 }}
          />
        ))}
      </Box>
    )
  }

  const { activeSeries, maps, periods } = plotData

  if (activeSeries.length === 0) {
    return (
      <Typography variant="body2" color="text.secondary">
        No time-series data available.
      </Typography>
    )
  }

  // Combined cumulative-only mode: single chart, all series as lines
  if (mode === 'cumulative') {
    const traces: Data[] = activeSeries.map((s, i) => {
      let running = 0
      const cumulative = periods.map(p => {
        running += maps[i].get(p) ?? 0
        return running
      })
      return {
        type: 'scatter' as const,
        mode: 'lines+markers' as const,
        name: s.label,
        x: periods,
        y: cumulative,
        line: { color: s.color, width: 2.5 },
        marker: { color: s.color, size: 5 },
        hovertemplate: `<b>%{x}</b>: %{y} total<extra>${s.label}</extra>`,
      }
    })
    const cumulativeLayout = {
      xaxis: {
        type: 'category' as const,
        categoryorder: 'array' as const,
        categoryarray: periods,
        title: { text: periodLabel, font: { size: 11 } },
        gridcolor: '#f0f4f8',
        automargin: true,
      },
      yaxis: {
        title: { text: 'Cumulative count', font: { size: 11 } },
        gridcolor: '#f0f4f8',
        rangemode: 'nonnegative' as const,
      },
      showlegend: true,
      legend: {
        orientation: 'h' as const,
        x: 0,
        y: 1.12,
        font: { color: '#1B2A41' },
      },
      margin: { t: 36, b: 52, l: 60, r: 20 },
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)',
      font: {
        family:
          '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif',
        size: 11,
      },
    }
    return (
      <Plot
        data={traces}
        layout={cumulativeLayout}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: '100%', height }}
      />
    )
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(${activeSeries.length}, 1fr)`,
        gap: 1,
      }}
    >
      {activeSeries.map((s, i) => {
        const counts = periods.map(p => maps[i].get(p) ?? 0)

        // Per-type cumulative line
        let running = 0
        const cumulative = periods.map(p => {
          running += maps[i].get(p) ?? 0
          return running
        })

        const traces: Data[] = [
          {
            type: 'bar',
            name: 'Per year',
            x: periods,
            y: counts,
            marker: { color: s.color },
            hovertemplate: `<b>%{x}</b>: %{y}<extra></extra>`,
          },
          ...(showCumulative
            ? [
                {
                  type: 'scatter' as const,
                  mode: 'lines+markers' as const,
                  name: 'Cumulative',
                  x: periods,
                  y: cumulative,
                  line: { color: cumulativeColor, width: 2 },
                  marker: { color: cumulativeColor, size: 4 },
                  yaxis: 'y2' as const,
                  hovertemplate: `<b>%{x}</b>: %{y} total<extra>Cumulative</extra>`,
                },
              ]
            : []),
        ]

        const layout = {
          title: {
            text: `<b>${s.label}</b>`,
            font: { size: 13, color: '#1B2A41' },
          },
          xaxis: {
            type: 'category' as const,
            // Enforce the shared domain so all facets show the same years
            categoryorder: 'array' as const,
            categoryarray: periods,
            title: { text: periodLabel, font: { size: 11 } },
            gridcolor: '#f0f4f8',
            automargin: true,
          },
          yaxis: {
            title: { text: 'Per year', font: { size: 11 } },
            gridcolor: '#f0f4f8',
            rangemode: 'nonnegative' as const,
          },
          ...(showCumulative
            ? {
                yaxis2: {
                  title: { text: 'Cumulative', font: { size: 11 } },
                  overlaying: 'y' as const,
                  side: 'right' as const,
                  showgrid: false,
                  rangemode: 'nonnegative' as const,
                },
              }
            : {}),
          showlegend: false,
          margin: { t: 40, b: 52, l: 48, r: showCumulative ? 52 : 12 },
          paper_bgcolor: 'rgba(0,0,0,0)',
          plot_bgcolor: 'rgba(0,0,0,0)',
          font: {
            family:
              '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif',
            size: 11,
            color: '#1B2A41',
          },
        }

        return (
          <Plot
            key={s.label}
            data={traces}
            layout={layout}
            config={{ displayModeBar: false, responsive: true }}
            style={{ width: '100%', height }}
          />
        )
      })}
    </Box>
  )
}
