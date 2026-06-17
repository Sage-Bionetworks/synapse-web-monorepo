import React, { useEffect, useId, useMemo, useState } from 'react'
import { useGetFullTableQueryResults } from '@/synapse-queries'
import { SynapseConstants } from '@/utils'
import { parseEntityIdFromSqlStatement } from '@/utils/functions/SqlFunctions'
import { Skeleton, useTheme } from '@mui/material'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import {
  sankey as d3Sankey,
  sankeyLinkHorizontal,
  type SankeyNode as D3SankeyNode,
} from 'd3-sankey'
import tinycolor from 'tinycolor2'

export type SynapseSankeyPlotProps = {
  /** SQL query whose first column provides node labels and second column provides link values */
  sql: string
  /** Label for the root node that links to every row returned by the query */
  rootLabel: string
  /** Optional plot title */
  title?: string
  /**
   * Invoked with a category's label when its flow, node, or label is clicked.
   * When provided, categories become interactive (pointer cursor, keyboard
   * focusable). Use it to deep-link to a filtered view of that category.
   */
  onCategoryClick?: (categoryLabel: string) => void
}

// Datum shapes for the d3-sankey graph.
type NodeDatum = { name: string; value: number; color: string; isRoot: boolean }
type LinkDatum = { value: number }
type LaidOutNode = D3SankeyNode<NodeDatum, LinkDatum>

// Coordinate space of the SVG. The rendered width is capped at VIEW_W (see the
// wrapper's maxWidth) so one viewBox unit ≈ one CSS pixel and text renders at
// its intended size instead of being magnified on wide containers. Generous
// left/right gutters leave unclipped room for the root figure and category
// labels. The height grows with the number of categories so rows stay legible.
const VIEW_W = 920
const GUTTER_LEFT = 124
const GUTTER_RIGHT = 286
const GUTTER_Y = 22
const NODE_WIDTH = 13
const NODE_PADDING = 34
const ROW_HEIGHT = 46
const viewHeightFor = (categoryCount: number) =>
  Math.max(320, 2 * GUTTER_Y + categoryCount * ROW_HEIGHT)

export const SynapseSankeyPlot = (
  props: SynapseSankeyPlotProps,
): React.ReactNode => {
  const { sql, rootLabel, title, onCategoryClick } = props
  const theme = useTheme()
  const gradientPrefix = useId()

  // Index of the flow currently focused (null = nothing focused). Drives the
  // focus/dim hover interaction.
  const [hovered, setHovered] = useState<number | null>(null)
  // Index of the flow that was clicked; briefly emphasized before redirecting.
  const [clicked, setClicked] = useState<number | null>(null)
  // One-time gentle fade-in on mount.
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const queryRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    entityId: parseEntityIdFromSqlStatement(sql),
    query: {
      sql,
    },
  }

  const { data: queryData, isLoading } =
    useGetFullTableQueryResults(queryRequest)

  const rows = useMemo(
    () => queryData?.queryResult?.queryResults.rows ?? [],
    [queryData],
  )

  // Theme-derived palette: the root node uses the dark primary color; category
  // nodes step through a light-to-dark sweep of the primary color so they stay
  // on-brand while remaining distinguishable (even when a portal's primary and
  // secondary colors are identical).
  const fontFamily = theme.typography.fontFamily ?? 'inherit'
  const rootColor = theme.palette.primary.dark
  const textColor = theme.palette.text.primary

  const viewH = viewHeightFor(rows.length)

  // Build and lay out the graph. Memoized so hovering (which only changes
  // opacity) doesn't recompute the layout.
  const graph = useMemo(() => {
    if (rows.length === 0) {
      return null
    }
    const gradientStart = tinycolor(theme.palette.primary.main).lighten(18)
    const gradientEnd = tinycolor(theme.palette.primary.main).darken(12)
    const categoryColor = (index: number) =>
      rows.length <= 1
        ? theme.palette.primary.main
        : tinycolor
            .mix(gradientStart, gradientEnd, (index / (rows.length - 1)) * 100)
            .toHexString()

    const total = rows.reduce((sum, row) => sum + Number(row.values[1] ?? 0), 0)
    const nodes: NodeDatum[] = [
      { name: rootLabel, value: total, color: rootColor, isRoot: true },
      ...rows.map((row, index) => ({
        name: String(row.values[0] ?? ''),
        value: Number(row.values[1] ?? 0),
        color: categoryColor(index),
        isRoot: false,
      })),
    ]
    const links: ({ source: number; target: number } & LinkDatum)[] = rows.map(
      (row, index) => ({
        source: 0,
        target: index + 1,
        value: Number(row.values[1] ?? 0),
      }),
    )

    const layout = d3Sankey<NodeDatum, LinkDatum>()
      .nodeWidth(NODE_WIDTH)
      .nodePadding(NODE_PADDING)
      .nodeSort(null) // preserve query order top-to-bottom
      .extent([
        [GUTTER_LEFT, GUTTER_Y],
        [VIEW_W - GUTTER_RIGHT, viewH - GUTTER_Y],
      ])

    return layout({
      nodes: nodes.map(d => ({ ...d })),
      links: links.map(d => ({ ...d })),
    })
  }, [rows, rootLabel, rootColor, theme.palette.primary.main, viewH])

  if (isLoading) {
    return <Skeleton width={'100%'} height={'500px'} />
  }
  if (!graph) {
    return <></>
  }

  const linkPath = sankeyLinkHorizontal<NodeDatum, LinkDatum>()
  const total = graph.nodes.find(n => n.isRoot)?.value ?? 0

  // The clicked flow takes precedence over the hovered one for emphasis.
  const focusIndex = clicked ?? hovered
  // Dim the rest harder once a selection has been committed.
  const dimLink = clicked !== null ? 0.05 : 0.07
  const dimNode = clicked !== null ? 0.1 : 0.16
  const dimLabel = clicked !== null ? 0.15 : 0.32

  // Opacity helpers for the focus/dim interaction.
  const linkOpacity = (linkIndex: number) =>
    focusIndex === null
      ? 0.6
      : linkIndex === focusIndex
        ? clicked !== null
          ? 1
          : 0.95
        : dimLink
  const nodeOpacity = (node: LaidOutNode) =>
    focusIndex === null || node.isRoot || node.index === focusIndex + 1
      ? 1
      : dimNode
  const labelOpacity = (categoryIndex: number) =>
    focusIndex === null || focusIndex === categoryIndex ? 1 : dimLabel

  // When a click handler is supplied, categories become interactive. Clicking
  // briefly emphasizes the chosen flow (a quick "swell") and then redirects, so
  // the navigation feels intentional. No tabIndex/role here: those make the
  // browser draw a focus outline box around the SVG shape on click.
  const handleActivate = (categoryIndex: number, label: string) => {
    if (!onCategoryClick) {
      return
    }
    setClicked(categoryIndex)
    window.setTimeout(() => onCategoryClick(label), 320)
  }
  const interactiveProps = (categoryIndex: number, label: string) =>
    onCategoryClick
      ? {
          cursor: 'pointer',
          onClick: () => handleActivate(categoryIndex, label),
        }
      : {}

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.6s ease',
        width: '100%',
        marginTop: 48,
      }}
    >
      {title && (
        <div
          style={{
            fontFamily,
            fontWeight: 600,
            fontSize: 20,
            textAlign: 'center',
            color: textColor,
            marginBottom: 12,
          }}
        >
          {title}
        </div>
      )}
      <svg
        viewBox={`0 0 ${VIEW_W} ${viewH}`}
        role="img"
        aria-label={`${rootLabel} broken down by source`}
        style={{
          fontFamily,
          display: 'block',
          overflow: 'visible',
          width: '100%',
          maxWidth: VIEW_W,
          height: 'auto',
          margin: '0 auto',
          outline: 'none',
        }}
        onMouseLeave={() => setHovered(null)}
      >
        <defs>
          {graph.links.map((link, i) => {
            const source = link.source as LaidOutNode
            const target = link.target as LaidOutNode
            return (
              <linearGradient
                key={i}
                id={`${gradientPrefix}-grad-${i}`}
                gradientUnits="userSpaceOnUse"
                x1={source.x1}
                x2={target.x0}
              >
                <stop offset="0%" stopColor={source.color} />
                <stop offset="100%" stopColor={target.color} />
              </linearGradient>
            )
          })}
        </defs>

        {/* Ribbons */}
        <g fill="none">
          {graph.links.map((link, i) => {
            const target = link.target as LaidOutNode
            const baseWidth = Math.max(1, link.width ?? 1)
            return (
              <path
                key={i}
                d={linkPath(link) ?? undefined}
                stroke={`url(#${gradientPrefix}-grad-${i})`}
                strokeWidth={clicked === i ? baseWidth * 1.25 : baseWidth}
                strokeOpacity={linkOpacity(i)}
                style={{
                  transition:
                    'stroke-opacity 0.25s ease, stroke-width 0.25s ease',
                }}
                onMouseEnter={() => setHovered(i)}
                {...interactiveProps(i, target.name)}
              />
            )
          })}
        </g>

        {/* Nodes */}
        <g>
          {graph.nodes.map((node, i) => (
            <rect
              key={i}
              x={node.x0}
              y={node.y0}
              width={(node.x1 ?? 0) - (node.x0 ?? 0)}
              height={Math.max(1, (node.y1 ?? 0) - (node.y0 ?? 0))}
              rx={4}
              fill={node.color}
              fillOpacity={nodeOpacity(node)}
              stroke={theme.palette.background.paper}
              strokeWidth={1}
              style={{ transition: 'fill-opacity 0.25s ease' }}
              onMouseEnter={() =>
                setHovered(node.isRoot ? null : (node.index ?? 1) - 1)
              }
              {...(node.isRoot
                ? {}
                : interactiveProps((node.index ?? 1) - 1, node.name))}
            />
          ))}
        </g>

        {/* Labels */}
        {graph.nodes.map((node, i) => {
          const cy = ((node.y0 ?? 0) + (node.y1 ?? 0)) / 2
          if (node.isRoot) {
            const x = (node.x0 ?? 0) - 14
            return (
              <g key={`lab-${i}`}>
                <text
                  x={x}
                  y={cy - 22}
                  textAnchor="end"
                  fontSize={10}
                  fontWeight={600}
                  letterSpacing={1.2}
                  fill={theme.palette.grey[600]}
                >
                  {node.name.toUpperCase()}
                </text>
                <text
                  x={x}
                  y={cy + 6}
                  textAnchor="end"
                  fontSize={26}
                  fontWeight={600}
                  fill={theme.palette.primary.dark}
                  style={{ fontVariantNumeric: 'tabular-nums' }}
                >
                  {total.toLocaleString()}
                </text>
                <text
                  x={x}
                  y={cy + 23}
                  textAnchor="end"
                  fontSize={11}
                  fontWeight={500}
                  fill={theme.palette.text.secondary}
                >
                  datasets total
                </text>
              </g>
            )
          }
          const categoryIndex = (node.index ?? 1) - 1
          const x = (node.x1 ?? 0) + 14
          const pct = total > 0 ? (node.value ?? 0) / total : 0
          const numStr = (node.value ?? 0).toLocaleString()
          const trackW = 64
          const barX = x + numStr.length * 7.5 + 10
          const barY = cy + 6
          return (
            <g
              key={`lab-${i}`}
              opacity={labelOpacity(categoryIndex)}
              style={{ transition: 'opacity 0.2s ease' }}
              onMouseEnter={() => setHovered(categoryIndex)}
              {...interactiveProps(categoryIndex, node.name)}
            >
              <text
                x={x}
                y={cy - 4}
                fontSize={13}
                fontWeight={600}
                fill={textColor}
              >
                {node.name}
              </text>
              <text
                x={x}
                y={cy + 14}
                fontSize={13}
                fontWeight={600}
                fill={node.color}
                style={{ fontVariantNumeric: 'tabular-nums' }}
              >
                {numStr}
              </text>
              <rect
                x={barX}
                y={barY}
                width={trackW}
                height={4.5}
                rx={2.25}
                fill={theme.palette.grey[300]}
              />
              <rect
                x={barX}
                y={barY}
                width={trackW * pct}
                height={4.5}
                rx={2.25}
                fill={node.color}
              />
              <text
                x={barX + trackW + 7}
                y={cy + 13}
                fontSize={11}
                fontWeight={500}
                fill={theme.palette.grey[600]}
                style={{ fontVariantNumeric: 'tabular-nums' }}
              >
                {(pct * 100).toFixed(1)}%
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

export default SynapseSankeyPlot
