import React, { useEffect, useId, useMemo, useRef, useState } from 'react'
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
import classNames from 'classnames'
import styles from './SynapseSankeyPlot.module.scss'

export type SynapseSankeyPlotProps = {
  /** SQL query providing the node labels and link values (see labelColumn/valueColumn) */
  sql: string
  /** Label for the root node that links to every row returned by the query */
  rootLabel: string
  /** Optional plot title */
  title?: string
  /**
   * Column supplying each category's label. Either a column name (matched
   * against the query result headers) or a zero-based index. Defaults to the
   * first column.
   */
  labelColumn?: string | number
  /**
   * Column supplying each link's value. Either a column name or a zero-based
   * index. Defaults to the second column.
   */
  valueColumn?: string | number
  /**
   * Noun for the root total caption, e.g. "datasets" renders "datasets total".
   * Defaults to "items".
   */
  unitLabel?: string
  /**
   * Phrase describing the breakdown, used in the chart's accessible label,
   * e.g. "by source" renders "All Datasets broken down by source".
   */
  breakdownLabel?: string
  /**
   * Invoked with a category's label when its flow, node, or label is clicked.
   * When provided, categories become interactive (pointer cursor). Use it to
   * deep-link to a filtered view of that category.
   */
  onCategoryClick?: (categoryLabel: string) => void
}

// Datum shapes for the d3-sankey graph.
type NodeDatum = { name: string; value: number; color: string; isRoot: boolean }
type LinkDatum = { value: number }
type LaidOutNode = D3SankeyNode<NodeDatum, LinkDatum>
type InteractiveProps = { cursor?: 'pointer'; onClick?: () => void }

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
// Horizontal gap between a node and its adjacent label/figure.
const LABEL_GAP = 14
// Category row: a fixed-width column reserved for the count, so the share
// micro-bar always starts at the same x regardless of the number's length.
const COUNT_COLUMN_W = 70
const BAR_TRACK_W = 64
const BAR_HEIGHT = 4.5

const viewHeightFor = (categoryCount: number) =>
  Math.max(320, 2 * GUTTER_Y + categoryCount * ROW_HEIGHT)
const midY = (node: LaidOutNode) => ((node.y0 ?? 0) + (node.y1 ?? 0)) / 2

// The editorial figure beside the root node: an eyebrow label, the total, and a
// caption (e.g. "datasets total").
function SankeyRootFigure(props: {
  node: LaidOutNode
  total: number
  unitLabel: string
}): React.ReactNode {
  const { node, total, unitLabel } = props
  const theme = useTheme()
  const cy = midY(node)
  const x = (node.x0 ?? 0) - LABEL_GAP
  return (
    <g>
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
        className={styles.tabularNums}
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
        {`${unitLabel} total`}
      </text>
    </g>
  )
}

// A category row's label: name, count, share micro-bar, and percentage.
function SankeyCategoryLabel(props: {
  node: LaidOutNode
  total: number
  opacity: number
  onMouseEnter: () => void
  interactiveProps: InteractiveProps
}): React.ReactNode {
  const { node, total, opacity, onMouseEnter, interactiveProps } = props
  const theme = useTheme()
  const cy = midY(node)
  const x = (node.x1 ?? 0) + LABEL_GAP
  const value = node.value ?? 0
  const pct = total > 0 ? value / total : 0
  const barX = x + COUNT_COLUMN_W
  const barY = cy + 6
  return (
    <g
      opacity={opacity}
      className={styles.categoryLabel}
      onMouseEnter={onMouseEnter}
      {...interactiveProps}
    >
      <text
        x={x}
        y={cy - 4}
        fontSize={13}
        fontWeight={600}
        fill={theme.palette.text.primary}
      >
        {node.name}
      </text>
      <text
        x={x}
        y={cy + 14}
        fontSize={13}
        fontWeight={600}
        fill={node.color}
        className={styles.tabularNums}
      >
        {value.toLocaleString()}
      </text>
      <rect
        x={barX}
        y={barY}
        width={BAR_TRACK_W}
        height={BAR_HEIGHT}
        rx={BAR_HEIGHT / 2}
        fill={theme.palette.grey[300]}
      />
      <rect
        x={barX}
        y={barY}
        width={BAR_TRACK_W * pct}
        height={BAR_HEIGHT}
        rx={BAR_HEIGHT / 2}
        fill={node.color}
      />
      <text
        x={barX + BAR_TRACK_W + 7}
        y={cy + 13}
        fontSize={11}
        fontWeight={500}
        fill={theme.palette.grey[600]}
        className={styles.tabularNums}
      >
        {(pct * 100).toFixed(1)}%
      </text>
    </g>
  )
}

export const SynapseSankeyPlot = (
  props: SynapseSankeyPlotProps,
): React.ReactNode => {
  const {
    sql,
    rootLabel,
    title,
    labelColumn,
    valueColumn,
    unitLabel = 'items',
    breakdownLabel,
    onCategoryClick,
  } = props
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
  // Timer that briefly emphasizes a clicked flow before invoking the handler.
  // Held in a ref so it can be cleared on unmount and replaced on rapid clicks.
  const clickTimer = useRef<number | undefined>(undefined)
  useEffect(() => {
    return () => {
      if (clickTimer.current !== undefined) {
        window.clearTimeout(clickTimer.current)
      }
    }
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

  // Resolve the label/value columns (by name or index) against the result
  // headers, falling back to the first two columns.
  const { labelIndex, valueIndex } = useMemo(() => {
    const headers = queryData?.queryResult?.queryResults.headers ?? []
    const resolve = (col: string | number | undefined, fallback: number) => {
      if (typeof col === 'number') {
        return col
      }
      if (typeof col === 'string') {
        const idx = headers.findIndex(h => h.name === col)
        return idx >= 0 ? idx : fallback
      }
      return fallback
    }
    return {
      labelIndex: resolve(labelColumn, 0),
      valueIndex: resolve(valueColumn, 1),
    }
  }, [queryData, labelColumn, valueColumn])

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

    const total = rows.reduce(
      (sum, row) => sum + Number(row.values[valueIndex] ?? 0),
      0,
    )
    const nodes: NodeDatum[] = [
      { name: rootLabel, value: total, color: rootColor, isRoot: true },
      ...rows.map((row, index) => ({
        name: String(row.values[labelIndex] ?? ''),
        value: Number(row.values[valueIndex] ?? 0),
        color: categoryColor(index),
        isRoot: false,
      })),
    ]
    const links: ({ source: number; target: number } & LinkDatum)[] = rows.map(
      (row, index) => ({
        source: 0,
        target: index + 1,
        value: Number(row.values[valueIndex] ?? 0),
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
  }, [
    rows,
    labelIndex,
    valueIndex,
    rootLabel,
    rootColor,
    theme.palette.primary.main,
    viewH,
  ])

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
    if (clickTimer.current !== undefined) {
      window.clearTimeout(clickTimer.current)
    }
    setClicked(categoryIndex)
    clickTimer.current = window.setTimeout(() => {
      clickTimer.current = undefined
      // Clear the transient emphasis before invoking the handler so the chart
      // returns to its resting state for consumers whose handler doesn't
      // navigate away (and unmount) the component.
      setClicked(null)
      onCategoryClick(label)
    }, 320)
  }
  const interactiveProps = (
    categoryIndex: number,
    label: string,
  ): InteractiveProps =>
    onCategoryClick
      ? {
          cursor: 'pointer',
          onClick: () => handleActivate(categoryIndex, label),
        }
      : {}

  return (
    <div className={classNames(styles.root, { [styles.rootVisible]: visible })}>
      {title && (
        <div className={styles.title} style={{ fontFamily, color: textColor }}>
          {title}
        </div>
      )}
      <svg
        viewBox={`0 0 ${VIEW_W} ${viewH}`}
        role="img"
        aria-label={
          breakdownLabel
            ? `${rootLabel} broken down ${breakdownLabel}`
            : `${rootLabel} breakdown`
        }
        className={styles.svg}
        style={{ fontFamily, maxWidth: VIEW_W }}
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
                className={styles.ribbon}
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
              className={styles.node}
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
          if (node.isRoot) {
            return (
              <SankeyRootFigure
                key={`lab-${i}`}
                node={node}
                total={total}
                unitLabel={unitLabel}
              />
            )
          }
          const categoryIndex = (node.index ?? 1) - 1
          return (
            <SankeyCategoryLabel
              key={`lab-${i}`}
              node={node}
              total={total}
              opacity={labelOpacity(categoryIndex)}
              onMouseEnter={() => setHovered(categoryIndex)}
              interactiveProps={interactiveProps(categoryIndex, node.name)}
            />
          )
        })}
      </svg>
    </div>
  )
}

export default SynapseSankeyPlot
