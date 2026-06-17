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
  /** Label for the left end node that links to every row returned by the query */
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
   * Noun for the left end total caption, e.g. "datasets" renders
   * "datasets total". Defaults to "items".
   */
  unitLabel?: string
  /**
   * Phrase describing the breakdown, used in the chart's accessible label,
   * e.g. "by source" renders "All Datasets broken down by source".
   */
  breakdownLabel?: string
  /**
   * Invoked with a category's label when its left flow, center node, or label
   * is clicked. When provided, those become interactive (pointer cursor).
   */
  onCategoryClick?: (categoryLabel: string) => void
  /** Invoked when the left end node (rootLabel) is clicked. */
  onRootClick?: () => void
  /**
   * Enables "butterfly" mode: a second value per category drawn as a mirrored
   * flow from each center node to a right end node. Either a column name or a
   * zero-based index (defaults to the third column when a right end is shown).
   */
  rightValueColumn?: string | number
  /** Label for the right end node (butterfly mode). Defaults to "Files". */
  rightLabel?: string
  /** Noun for the right end total caption, e.g. "files". Defaults to "items". */
  rightUnitLabel?: string
  /** Invoked with a category's label when its right flow is clicked. */
  onRightCategoryClick?: (categoryLabel: string) => void
  /** Invoked when the right end node (rightLabel) is clicked. */
  onRightEndClick?: () => void
}

// Datum shapes for the d3-sankey graph.
type NodeKind = 'leftEnd' | 'source' | 'rightEnd'
type NodeDatum = {
  name: string
  value: number
  color: string
  kind: NodeKind
  // Raw per-source counts, used by the butterfly center labels.
  leftValue?: number
  rightValue?: number
}
type LinkDatum = {
  value: number
  // Zero-based index of the center (source) node this link belongs to.
  sourceIndex: number
  side: 'left' | 'right'
}
type LaidOutNode = D3SankeyNode<NodeDatum, LinkDatum>
type InteractiveProps = { cursor?: 'pointer'; onClick?: () => void }

// Coordinate space of the SVG. The rendered width is capped at VIEW_W (see the
// wrapper's maxWidth) so one viewBox unit ≈ one CSS pixel and text renders at
// its intended size instead of being magnified on wide containers. Generous
// gutters leave unclipped room for the end figures and labels. The height grows
// with the number of categories so rows stay legible.
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
// Butterfly mode needs more vertical room per row for the center labels, which
// sit in the padding gap above each node, plus a wider right gutter for the
// second end figure.
const BUTTERFLY_ROW_HEIGHT = 64
const BUTTERFLY_NODE_PADDING = 56
const BUTTERFLY_GUTTER_TOP = 44
const BUTTERFLY_GUTTER_RIGHT = 200

const midY = (node: LaidOutNode) => ((node.y0 ?? 0) + (node.y1 ?? 0)) / 2
const midX = (node: LaidOutNode) => ((node.x0 ?? 0) + (node.x1 ?? 0)) / 2

// The editorial figure beside an end node: an eyebrow label, the total, and a
// caption (e.g. "datasets total"). Mirrored for the right end.
function SankeyEndFigure(props: {
  node: LaidOutNode
  total: number
  unitLabel: string
  align: 'left' | 'right'
  onMouseEnter: () => void
  interactiveProps: InteractiveProps
}): React.ReactNode {
  const { node, total, unitLabel, align, onMouseEnter, interactiveProps } =
    props
  const theme = useTheme()
  const cy = midY(node)
  const x =
    align === 'left' ? (node.x0 ?? 0) - LABEL_GAP : (node.x1 ?? 0) + LABEL_GAP
  const textAnchor = align === 'left' ? 'end' : 'start'
  return (
    <g onMouseEnter={onMouseEnter} {...interactiveProps}>
      <text
        x={x}
        y={cy - 22}
        textAnchor={textAnchor}
        fontSize={10}
        fontWeight={600}
        letterSpacing={1.2}
        fill={theme.palette.grey[700]}
      >
        {node.name.toUpperCase()}
      </text>
      <text
        x={x}
        y={cy + 6}
        textAnchor={textAnchor}
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
        textAnchor={textAnchor}
        fontSize={11}
        fontWeight={500}
        fill={theme.palette.text.secondary}
      >
        {`${unitLabel} total`}
      </text>
    </g>
  )
}

// Hub-and-spoke category label (single value): name, count, share bar, percent,
// placed to the right of the center node.
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
        fill={theme.palette.grey[700]}
        className={styles.tabularNums}
      >
        {(pct * 100).toFixed(1)}%
      </text>
    </g>
  )
}

// Butterfly center label: the source name and both counts, centered above the
// node (the only clear space between the left and right flows).
function SankeyCenterLabel(props: {
  node: LaidOutNode
  leftValue: number
  rightValue: number
  unitLabel: string
  rightUnitLabel: string
  opacity: number
  onMouseEnter: () => void
  interactiveProps: InteractiveProps
}): React.ReactNode {
  const {
    node,
    leftValue,
    rightValue,
    unitLabel,
    rightUnitLabel,
    opacity,
    onMouseEnter,
    interactiveProps,
  } = props
  const theme = useTheme()
  const cx = midX(node)
  const topY = node.y0 ?? 0
  return (
    <g
      opacity={opacity}
      className={styles.categoryLabel}
      onMouseEnter={onMouseEnter}
      {...interactiveProps}
    >
      <text
        x={cx}
        y={topY - 20}
        textAnchor="middle"
        fontSize={13}
        fontWeight={600}
        fill={theme.palette.text.primary}
        stroke={theme.palette.background.paper}
        className={styles.haloText}
      >
        {node.name}
      </text>
      <text
        x={cx}
        y={topY - 6}
        textAnchor="middle"
        fontSize={11}
        fontWeight={600}
        fill={theme.palette.text.secondary}
        stroke={theme.palette.background.paper}
        className={classNames(styles.tabularNums, styles.haloText)}
      >
        {`${leftValue.toLocaleString()} ${unitLabel} · ${rightValue.toLocaleString()} ${rightUnitLabel}`}
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
    onRootClick,
    rightValueColumn,
    rightLabel = 'Files',
    rightUnitLabel = 'items',
    onRightCategoryClick,
    onRightEndClick,
  } = props
  const theme = useTheme()
  const gradientPrefix = useId()

  const hasRightFlow = rightValueColumn !== undefined

  // Index of the center node currently focused (null = nothing focused). Drives
  // the focus/dim hover interaction; shared by both flows of a source.
  const [hovered, setHovered] = useState<number | null>(null)
  // Index of the center node that was clicked; briefly emphasized before the
  // handler fires.
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
  // headers, falling back to the first columns.
  const { labelIndex, valueIndex, rightValueIndex } = useMemo(() => {
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
      rightValueIndex: hasRightFlow ? resolve(rightValueColumn, 2) : -1,
    }
  }, [queryData, labelColumn, valueColumn, rightValueColumn, hasRightFlow])

  // Theme-derived palette: end nodes use the dark primary color; category nodes
  // step through a light-to-dark sweep of the primary color so they stay
  // on-brand while remaining distinguishable (even when a portal's primary and
  // secondary colors are identical).
  const fontFamily = theme.typography.fontFamily ?? 'inherit'
  const endColor = theme.palette.primary.dark
  const textColor = theme.palette.text.primary

  const rowHeight = hasRightFlow ? BUTTERFLY_ROW_HEIGHT : ROW_HEIGHT
  const nodePadding = hasRightFlow ? BUTTERFLY_NODE_PADDING : NODE_PADDING
  const gutterTop = hasRightFlow ? BUTTERFLY_GUTTER_TOP : GUTTER_Y
  const gutterRight = hasRightFlow ? BUTTERFLY_GUTTER_RIGHT : GUTTER_RIGHT
  const viewH = Math.max(320, gutterTop + GUTTER_Y + rows.length * rowHeight)

  // Build and lay out the graph. Memoized so hovering (which only changes
  // opacity) doesn't recompute the layout.
  const graphResult = useMemo(() => {
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

    const sources = rows.map((row, index) => ({
      name: String(row.values[labelIndex] ?? ''),
      leftValue: Number(row.values[valueIndex] ?? 0),
      rightValue: hasRightFlow ? Number(row.values[rightValueIndex] ?? 0) : 0,
      color: categoryColor(index),
    }))
    const totalLeft = sources.reduce((sum, s) => sum + s.leftValue, 0)
    const totalRight = sources.reduce((sum, s) => sum + s.rightValue, 0)
    const rightEndIndex = sources.length + 1

    // d3-sankey scales every ribbon by a single value→thickness factor. When the
    // two flows differ in magnitude (e.g. ~25 datasets vs thousands of files),
    // the smaller side collapses to hairlines. Scale the left flow so both
    // halves sum to the same total — ribbon widths then read as each side's
    // share. The real counts are preserved on the node data for the labels.
    const leftScale =
      hasRightFlow && totalLeft > 0 && totalRight > 0
        ? totalRight / totalLeft
        : 1
    const linkValue = (value: number, side: 'left' | 'right') =>
      side === 'left' ? value * leftScale : value

    const nodes: NodeDatum[] = [
      { name: rootLabel, value: totalLeft, color: endColor, kind: 'leftEnd' },
      ...sources.map(s => ({
        name: s.name,
        value: s.leftValue,
        color: s.color,
        kind: 'source' as const,
        leftValue: s.leftValue,
        rightValue: s.rightValue,
      })),
      ...(hasRightFlow
        ? [
            {
              name: rightLabel,
              value: totalRight,
              color: endColor,
              kind: 'rightEnd' as const,
            },
          ]
        : []),
    ]
    const links: ({ source: number; target: number } & LinkDatum)[] = [
      ...sources.map((s, index) => ({
        source: 0,
        target: index + 1,
        value: linkValue(s.leftValue, 'left'),
        sourceIndex: index,
        side: 'left' as const,
      })),
      ...(hasRightFlow
        ? sources.map((s, index) => ({
            source: index + 1,
            target: rightEndIndex,
            value: linkValue(s.rightValue, 'right'),
            sourceIndex: index,
            side: 'right' as const,
          }))
        : []),
    ]

    const layout = d3Sankey<NodeDatum, LinkDatum>()
      .nodeWidth(NODE_WIDTH)
      .nodePadding(nodePadding)
      .nodeSort(null) // preserve query order top-to-bottom
      .extent([
        [GUTTER_LEFT, gutterTop],
        [VIEW_W - gutterRight, viewH - GUTTER_Y],
      ])

    return {
      graph: layout({
        nodes: nodes.map(d => ({ ...d })),
        links: links.map(d => ({ ...d })),
      }),
      // Real (unscaled) totals for the end-node figures.
      totalLeft,
      totalRight,
    }
  }, [
    rows,
    labelIndex,
    valueIndex,
    rightValueIndex,
    hasRightFlow,
    rootLabel,
    rightLabel,
    endColor,
    theme.palette.primary.main,
    viewH,
    nodePadding,
    gutterTop,
    gutterRight,
  ])

  if (isLoading) {
    return <Skeleton width={'100%'} height={'500px'} />
  }
  if (!graphResult) {
    return <></>
  }

  const { graph, totalLeft, totalRight } = graphResult
  const linkPath = sankeyLinkHorizontal<NodeDatum, LinkDatum>()

  // The clicked flow takes precedence over the hovered one for emphasis.
  const focusIndex = clicked ?? hovered
  // Dim the rest harder once a selection has been committed.
  const dimLink = clicked !== null ? 0.05 : 0.07
  const dimNode = clicked !== null ? 0.1 : 0.16
  const dimLabel = clicked !== null ? 0.15 : 0.32

  // Opacity helpers for the focus/dim interaction. Both flows of a focused
  // source share its center-node index.
  const linkOpacity = (sourceIndex: number) =>
    focusIndex === null
      ? 0.6
      : sourceIndex === focusIndex
        ? clicked !== null
          ? 1
          : 0.95
        : dimLink
  const nodeOpacity = (node: LaidOutNode) =>
    focusIndex === null ||
    node.kind !== 'source' ||
    (node.index ?? 1) - 1 === focusIndex
      ? 1
      : dimNode
  const labelOpacity = (sourceIndex: number) =>
    focusIndex === null || focusIndex === sourceIndex ? 1 : dimLabel

  // Clicking a center flow briefly emphasizes it (a quick "swell") and then
  // fires the handler, so the navigation feels intentional. No tabIndex/role:
  // those make the browser draw a focus outline box around the SVG shape.
  const activate = (sourceIndex: number, fire: () => void) => {
    if (clickTimer.current !== undefined) {
      window.clearTimeout(clickTimer.current)
    }
    setClicked(sourceIndex)
    clickTimer.current = window.setTimeout(() => {
      clickTimer.current = undefined
      // Clear the transient emphasis before invoking the handler so the chart
      // returns to its resting state for consumers whose handler doesn't
      // navigate away (and unmount) the component.
      setClicked(null)
      fire()
    }, 320)
  }
  // Center flows swell on click; end nodes navigate immediately.
  const flowProps = (
    sourceIndex: number,
    fire: (() => void) | undefined,
  ): InteractiveProps =>
    fire
      ? { cursor: 'pointer', onClick: () => activate(sourceIndex, fire) }
      : {}
  const endProps = (fire: (() => void) | undefined): InteractiveProps =>
    fire ? { cursor: 'pointer', onClick: fire } : {}

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
            const sourceNode = (
              link.side === 'left' ? link.target : link.source
            ) as LaidOutNode
            const baseWidth = Math.max(1, link.width ?? 1)
            const handler =
              link.side === 'left' ? onCategoryClick : onRightCategoryClick
            const fire = handler ? () => handler(sourceNode.name) : undefined
            return (
              <path
                key={i}
                d={linkPath(link) ?? undefined}
                stroke={`url(#${gradientPrefix}-grad-${i})`}
                strokeWidth={
                  clicked === link.sourceIndex ? baseWidth * 1.25 : baseWidth
                }
                strokeOpacity={linkOpacity(link.sourceIndex)}
                className={styles.ribbon}
                onMouseEnter={() => setHovered(link.sourceIndex)}
                {...flowProps(link.sourceIndex, fire)}
              />
            )
          })}
        </g>

        {/* Nodes */}
        <g>
          {graph.nodes.map((node, i) => {
            const sourceIndex = (node.index ?? 1) - 1
            const props =
              node.kind === 'leftEnd'
                ? endProps(onRootClick)
                : node.kind === 'rightEnd'
                  ? endProps(onRightEndClick)
                  : flowProps(
                      sourceIndex,
                      onCategoryClick
                        ? () => onCategoryClick(node.name)
                        : undefined,
                    )
            return (
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
                  setHovered(node.kind === 'source' ? sourceIndex : null)
                }
                {...props}
              />
            )
          })}
        </g>

        {/* Labels */}
        {graph.nodes.map((node, i) => {
          if (node.kind === 'leftEnd') {
            return (
              <SankeyEndFigure
                key={`lab-${i}`}
                node={node}
                total={totalLeft}
                unitLabel={unitLabel}
                align="left"
                onMouseEnter={() => setHovered(null)}
                interactiveProps={endProps(onRootClick)}
              />
            )
          }
          if (node.kind === 'rightEnd') {
            return (
              <SankeyEndFigure
                key={`lab-${i}`}
                node={node}
                total={totalRight}
                unitLabel={rightUnitLabel}
                align="right"
                onMouseEnter={() => setHovered(null)}
                interactiveProps={endProps(onRightEndClick)}
              />
            )
          }
          const sourceIndex = (node.index ?? 1) - 1
          const fire = onCategoryClick
            ? () => onCategoryClick(node.name)
            : undefined
          if (hasRightFlow) {
            return (
              <SankeyCenterLabel
                key={`lab-${i}`}
                node={node}
                leftValue={node.leftValue ?? 0}
                rightValue={node.rightValue ?? 0}
                unitLabel={unitLabel}
                rightUnitLabel={rightUnitLabel}
                opacity={labelOpacity(sourceIndex)}
                onMouseEnter={() => setHovered(sourceIndex)}
                interactiveProps={flowProps(sourceIndex, fire)}
              />
            )
          }
          return (
            <SankeyCategoryLabel
              key={`lab-${i}`}
              node={node}
              total={totalLeft}
              opacity={labelOpacity(sourceIndex)}
              onMouseEnter={() => setHovered(sourceIndex)}
              interactiveProps={flowProps(sourceIndex, fire)}
            />
          )
        })}
      </svg>
    </div>
  )
}

export default SynapseSankeyPlot
