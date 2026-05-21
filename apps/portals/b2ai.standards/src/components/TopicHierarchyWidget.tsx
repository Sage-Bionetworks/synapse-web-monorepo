import { useMemo, useState } from 'react'
import { Link as RouterLink } from 'react-router'
import { Box } from '@mui/material'
import { TOPIC_TABLE_COLUMN_CONSTS as T } from '@/config/resources'

export type TopicRow = Record<string, string | null>

type LinkedItem = { id: string; name?: string }

function parseJsonArray(value: string | null | undefined): LinkedItem[] {
  if (!value) return []
  try {
    const parsed = JSON.parse(value)
    return Array.isArray(parsed) ? (parsed as LinkedItem[]) : []
  } catch {
    return []
  }
}

// ============================================================================
// DAG analysis (for unfolding-mode rendering).
// ============================================================================

type Index = {
  byId: Record<string, TopicRow>
  // All parents of each topic (from parentTopicsJson).
  parentsOf: Record<string, string[]>
  // ALL children edges (each parent → child). Unfolding mode renders a topic
  // under every parent that has it as a child, so this covers all positions.
  childrenOf: Record<string, string[]>
  // Longest path from root to each topic. Used to pick the "canonical" copy
  // of a polyhierarchy topic — that's the copy whose children expand.
  depthOf: Record<string, number>
  // For each topic, which of its parents gives the canonical position
  // (the parent with the greatest depth).
  canonicalParentOf: Record<string, string | null>
  // True roots (no parents).
  roots: string[]
}

function topicIdNum(id: string): number {
  const m = id.match(/(\d+)$/)
  return m ? Number(m[1]) : 0
}

function buildIndex(topics: TopicRow[]): Index {
  const byId: Record<string, TopicRow> = {}
  const parentsOf: Record<string, string[]> = {}
  const childrenOf: Record<string, string[]> = {}
  const roots: string[] = []

  for (const t of topics) {
    const id = t[T.ID]
    if (!id) continue
    byId[id] = t
  }

  for (const t of topics) {
    const id = t[T.ID]
    if (!id) continue
    const parents = parseJsonArray(t[T.PARENT_TOPICS_JSON])
      .map(p => p.id)
      .filter(p => byId[p])
    parentsOf[id] = parents
    if (parents.length === 0) {
      roots.push(id)
    }
    for (const p of parents) {
      ;(childrenOf[p] ??= []).push(id)
    }
  }

  // Depth via longest path from root.
  const depthOf: Record<string, number> = {}
  const computingDepth = new Set<string>()
  function depth(id: string): number {
    if (depthOf[id] !== undefined) return depthOf[id]
    if (computingDepth.has(id)) return 0 // cycle guard
    computingDepth.add(id)
    const parents = parentsOf[id] ?? []
    const d = parents.length === 0 ? 0 : 1 + Math.max(...parents.map(depth))
    computingDepth.delete(id)
    depthOf[id] = d
    return d
  }
  for (const id in byId) depth(id)

  // Canonical parent = the parent on the longest path from root.
  const canonicalParentOf: Record<string, string | null> = {}
  for (const id in parentsOf) {
    const parents = parentsOf[id]
    if (parents.length === 0) {
      canonicalParentOf[id] = null
    } else if (parents.length === 1) {
      canonicalParentOf[id] = parents[0]
    } else {
      const sorted = [...parents].sort((a, b) => depthOf[b] - depthOf[a])
      canonicalParentOf[id] = sorted[0]
    }
  }

  // Sort each parent's children by topic id ascending.
  for (const p in childrenOf) {
    childrenOf[p].sort((a, b) => topicIdNum(a) - topicIdNum(b))
  }

  return { byId, parentsOf, childrenOf, depthOf, canonicalParentOf, roots }
}

// ============================================================================
// Visible-row computation (unfolding mode).
// ============================================================================
//
// In unfolding mode, a topic can appear multiple times — once per path
// reaching it from any visible root. Each rendered copy is identified by its
// path from its render-root (the ancestor at indent 0 in the widget).
//
// Positions are keyed by their "position path": a sequence of topic ids
// starting from the render-root and ending with the topic itself.
//
//   ["B2AI_TOPIC:5"]                                         — render-root Data
//   ["B2AI_TOPIC:5", "B2AI_TOPIC:15"]                        — Image under Data
//   ["B2AI_TOPIC:5", "B2AI_TOPIC:15", "B2AI_TOPIC:22"]       — Neurologic Imaging under Image
//
// Position keys are the joined path: "5|15|22".

type PosKey = string

function posKey(path: string[]): PosKey {
  return path.join('|')
}

type VisibleRow = {
  posKey: PosKey
  topicId: string
  // depth in the rendered tree (= path.length - 1)
  renderDepth: number
  // path of hidden canonical ancestors above the render-root, shown as breadcrumb
  breadcrumb: string[]
  // toggle state for the ↓ direction
  toggleState: 'expanded' | 'partial' | 'collapsed' | 'disabled' | 'leaf'
  childCount: number
  isChosen: boolean
  // True if this is the canonical-position copy of a polyhierarchy topic
  // (and therefore expands its children). False on non-canonical copies of
  // multi-parent topics — those render as leaves regardless of childCount.
  isCanonicalPosition: boolean
  // Full canonical-path strings for each of the topic's OTHER parents
  // (those not represented by this rendering position). Empty for single-parent
  // topics. Used to render the "★ also under <path>" symmetric polyhierarchy note.
  // Each entry is a slash-joined path like "Data/Waveform/Voice".
  alsoUnderPaths: string[]
  // Rail cells, left-to-right; length === renderDepth + 1 (depth-0 rows have
  // zero rail cells).
  rails: Array<'vline' | 'tee' | 'corner' | 'empty'>
}

function computeVisibleRows(
  index: Index,
  chosenId: string,
  expanded: ReadonlySet<PosKey>,
): VisibleRow[] {
  const { byId, parentsOf, childrenOf, canonicalParentOf } = index

  // ---- Step 1: Determine render-roots ----
  //
  // The render-roots are the topics that anchor each visible subtree at
  // indent 0 of the widget. By default these are the immediate parents of
  // the chosen topic; if the chosen has no parents (it IS root), the chosen
  // itself is the render-root.
  //
  // The user can later "raise" a render-root by clicking its breadcrumb to
  // reveal an ancestor — at that point the ancestor becomes the new
  // render-root. For now we just take the chosen's immediate parents.

  const chosenParents = parentsOf[chosenId] ?? []
  let renderRoots: string[]
  if (chosenParents.length === 0) {
    // Chosen is a root of the DAG.
    renderRoots = [chosenId]
  } else {
    renderRoots = [...chosenParents].sort(
      (a, b) => topicIdNum(a) - topicIdNum(b),
    )
  }

  // ---- Step 2: Walk down from each render-root, emitting rows. ----
  //
  // Visibility rule: a child is rendered if either
  //   (a) the parent is in `expanded`, or
  //   (b) the parent IS the chosen topic at its canonical position
  //       (the chosen's children are pre-expanded by default), or
  //   (c) the child is the chosen topic (path-connectivity from the
  //       render-root must reach the chosen).

  const rows: VisibleRow[] = []

  // The first chosen-copy encountered in render order is the "primary" — it
  // auto-expands children. Subsequent copies render as leaves. Captured by
  // posKey so the same chosen-copy reliably wins across re-renders.
  let chosenPrimaryPosKey: PosKey | null = null

  // For each render-root, compute its breadcrumb (the path from a true root
  // down to but not including the render-root). Since render-roots are
  // immediate parents of the chosen and don't have visible ancestors in the
  // widget, we show their canonical-parent path here.
  function breadcrumbForRenderRoot(id: string): string[] {
    const path: string[] = []
    let cursor = canonicalParentOf[id]
    while (cursor) {
      path.unshift(byId[cursor]?.[T.NAME] ?? cursor)
      cursor = canonicalParentOf[cursor]
    }
    return path
  }

  // Walk the unfolded tree from a render-root, emitting each visible row.
  function walk(
    topicId: string,
    path: string[],
    parentRails: Array<'vline' | 'empty'>,
    isLastSibling: boolean,
  ): void {
    const renderDepth = path.length - 1
    const key = posKey(path)

    // Rails for this row.
    const rails: Array<'vline' | 'tee' | 'corner' | 'empty'> = []
    if (renderDepth > 0) {
      for (const c of parentRails) rails.push(c)
      rails.push(isLastSibling ? 'corner' : 'tee')
    }

    // Polyhierarchy "also under" — the topic's OTHER parents besides the one
    // appearing in this rendering position. List as full slash-joined paths
    // (e.g. "Data/Waveform/Voice") so the user sees where else the topic lives.
    // Skipped for single-parent topics. At depth 0 (render-root) we use the
    // breadcrumb's longest-path parent as "the" position parent, so other
    // parents are anything not on the breadcrumb chain.
    const parents = parentsOf[topicId] ?? []
    const positionParent: string | null =
      renderDepth === 0
        ? canonicalParentOf[topicId] ?? null
        : path[renderDepth - 1]
    const otherParents =
      parents.length > 1 && positionParent
        ? parents.filter(p => p !== positionParent)
        : []
    const alsoUnderPaths = otherParents.map(p => fullPathTo(p, index))

    // Determine which children to render under this position.
    //
    // Rule: the chosen topic auto-expands children at its FIRST rendered
    // copy only. Other copies of the chosen render as leaves (no children).
    // Non-chosen rows expand only if the user has explicitly expanded them,
    // or if path-connectivity to the chosen forces a partial expansion.
    //
    // "First copy" = the first one encountered in render order, which (given
    // we walk render-roots in sort order and visit children depth-first by
    // child-id) is the chosen's appearance under its first-in-order parent.
    const allChildren = childrenOf[topicId] ?? []
    const childCount = allChildren.length
    const isChosen = topicId === chosenId
    const isExpandedByUser = expanded.has(key)

    let isPrimaryChosenCopy = false
    if (isChosen) {
      if (!chosenPrimaryPosKey) {
        chosenPrimaryPosKey = key
        isPrimaryChosenCopy = true
      } else if (chosenPrimaryPosKey === key) {
        isPrimaryChosenCopy = true
      }
    }
    const chosenAutoExpanded = isPrimaryChosenCopy

    // Other-copy chosen rows are leaves (don't show their children).
    const canExpand = (!isChosen || isPrimaryChosenCopy) && childCount > 0

    let renderChildren: string[] = []
    let toggleState: VisibleRow['toggleState'] = 'leaf'

    if (!canExpand) {
      toggleState = 'leaf'
      renderChildren = []
    } else if (isExpandedByUser || chosenAutoExpanded) {
      toggleState = 'expanded'
      renderChildren = allChildren
    } else {
      // Collapsed by default. Check if path-connectivity to the chosen
      // forces a partial expand (chosen reachable through one of our children
      // via the canonical-parent chain we'd walk back UP from chosen).
      const pathToChosen = childOnCanonicalPathToChosen(
        topicId,
        chosenId,
        index,
      )
      if (pathToChosen) {
        toggleState = 'partial'
        renderChildren = [pathToChosen]
      } else {
        toggleState = 'collapsed'
        renderChildren = []
      }
    }

    rows.push({
      posKey: key,
      topicId,
      renderDepth,
      breadcrumb: renderDepth === 0 ? breadcrumbForRenderRoot(topicId) : [],
      toggleState,
      childCount,
      isChosen,
      isCanonicalPosition: isPrimaryChosenCopy || !isChosen,
      alsoUnderPaths,
      rails,
    })

    if (renderChildren.length === 0) return

    // Determine the rails passed down to each child.
    // The current row's gutter column gets either 'vline' (we have a sibling
    // below at our depth) or 'empty' (we're the last sibling at our depth).
    const nextParentRails: Array<'vline' | 'empty'> = [
      ...parentRails,
      isLastSibling ? 'empty' : 'vline',
    ]
    // At renderDepth === 0, there's no incoming parent rail and the row is
    // a render-root, so its children's rails start fresh.
    if (renderDepth === 0) nextParentRails.length = 0

    renderChildren.forEach((c, i) => {
      const last = i === renderChildren.length - 1
      walk(c, [...path, c], nextParentRails, last)
    })
  }

  renderRoots.forEach((id, i) => {
    const isLast = i === renderRoots.length - 1
    walk(id, [id], [], isLast)
  })

  return rows
}

// Build the canonical full path from a true root down to and including the
// given topic, slash-joined for inline display (e.g. "Data/Waveform/Voice").
function fullPathTo(topicId: string, index: Index): string {
  const segs: string[] = []
  let cursor: string | null = topicId
  const seen = new Set<string>()
  while (cursor && !seen.has(cursor)) {
    seen.add(cursor)
    segs.unshift(index.byId[cursor]?.[T.NAME] ?? cursor)
    cursor = index.canonicalParentOf[cursor] ?? null
  }
  return segs.join('/')
}

// Returns the child of `parentId` (via canonicalParentOf edges) that lies on
// the canonical path from `chosenId` up to `parentId`, or null if `parentId`
// is not a canonical ancestor of `chosenId`.
function childOnCanonicalPathToChosen(
  parentId: string,
  chosenId: string,
  index: Index,
): string | null {
  // Walk up from chosenId via canonical parents until we hit parentId or root.
  let cursor: string | null = chosenId
  let prev: string | null = null
  while (cursor) {
    if (cursor === parentId) {
      return prev
    }
    const next: string | null = index.canonicalParentOf[cursor] ?? null
    prev = cursor
    cursor = next
  }
  return null
}

// ============================================================================
// React rendering.
// ============================================================================

const RAIL_CELL_WIDTH = 18

const COLORS = {
  rail: '#9ca3af',
  anchorBg: '#fef3c7',
  partial: 'rgba(217, 119, 6, 0.18)',
  partialBorder: 'rgba(217, 119, 6, 0.5)',
  partialText: '#92400e',
  toggleBg: 'rgba(255, 255, 255, 0.65)',
  toggleText: '#1f2937',
  toggleBorder: 'rgba(0,0,0,0.15)',
  breadcrumb: '#6b7280',
  breadcrumbSeg: '#1d4ed8',
  link: '#1d4ed8',
}

function depthTint(depth: number): string {
  const alpha = Math.min(0.08 + depth * 0.05, 0.33)
  return `rgba(59, 130, 246, ${alpha})`
}

function topicHref(id: string): string {
  return `/Explore/DataTopic/DetailsPage?id=${encodeURIComponent(id)}`
}

type RailCellProps = { kind: 'vline' | 'tee' | 'corner' | 'empty' }
function RailCell({ kind }: RailCellProps) {
  if (kind === 'empty') {
    return <Box sx={{ width: RAIL_CELL_WIDTH, flexShrink: 0 }} />
  }
  const vert =
    kind === 'corner'
      ? { top: -2, height: 'calc(50% + 2px)' }
      : { top: -2, bottom: -2 }
  const showHoriz = kind === 'tee' || kind === 'corner'
  return (
    <Box
      sx={{
        width: RAIL_CELL_WIDTH,
        flexShrink: 0,
        position: 'relative',
        alignSelf: 'stretch',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-0.5px)',
          width: '1px',
          background: COLORS.rail,
          ...vert,
        }}
      />
      {showHoriz && (
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            right: 0,
            height: '1px',
            background: COLORS.rail,
          }}
        />
      )}
    </Box>
  )
}

type TogglePillProps = {
  state: VisibleRow['toggleState']
  count: number
  title: string
}
function TogglePill({ state, count, title }: TogglePillProps) {
  if (state === 'leaf') return null
  const arrow = state === 'expanded' ? '▼' : state === 'partial' ? '◐' : '▶'
  const isPartial = state === 'partial'
  const isExpanded = state === 'expanded'
  const isDisabled = state === 'disabled'
  return (
    <Box
      component="span"
      title={title}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '3px',
        minWidth: 28,
        height: 18,
        px: '5px',
        border: '1px solid',
        borderColor: isPartial
          ? COLORS.partialBorder
          : isExpanded
          ? 'rgba(0,0,0,0.25)'
          : COLORS.toggleBorder,
        borderRadius: '3px',
        background: isPartial
          ? COLORS.partial
          : isExpanded
          ? 'rgba(255,255,255,0.9)'
          : COLORS.toggleBg,
        color: isPartial ? COLORS.partialText : COLORS.toggleText,
        fontSize: '10px',
        lineHeight: 1,
        fontFamily: 'ui-monospace, monospace',
        userSelect: 'none',
        opacity: isDisabled ? 0.35 : 1,
        cursor: isDisabled ? 'default' : 'pointer',
        flexShrink: 0,
      }}
    >
      <span style={{ fontSize: 9 }}>{arrow}</span>
      <span>{count}</span>
    </Box>
  )
}

type Props = {
  topics: TopicRow[]
  currentTopicId: string
}

export default function TopicHierarchyWidget({
  topics,
  currentTopicId,
}: Props) {
  const index = useMemo(() => buildIndex(topics), [topics])
  // Per-position expand state. Empty initially — defaults kick in via path
  // logic (chosen at canonical position auto-expands its children;
  // ancestors on the canonical path show partial state).

  const [expanded, _setExpanded] = useState<ReadonlySet<PosKey>>(
    () => new Set(),
  )

  const visibleRows = useMemo(
    () => computeVisibleRows(index, currentTopicId, expanded),
    [index, currentTopicId, expanded],
  )

  if (!index.byId[currentTopicId]) {
    return (
      <Box sx={{ color: 'text.secondary' }}>
        Topic <code>{currentTopicId}</code> not found.
      </Box>
    )
  }

  return (
    <Box
      sx={{
        fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
        fontSize: 13,
        lineHeight: 1.7,
        color: '#1f2937',
        background: '#fff',
        padding: '8px 12px',
        borderRadius: 1,
        border: '1px solid #e5e7eb',
      }}
    >
      {visibleRows.map(row => {
        const topic = index.byId[row.topicId]
        const name = topic?.[T.NAME] ?? row.topicId
        return (
          <Box
            key={row.posKey}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '1px 0',
              minHeight: 22,
              whiteSpace: 'nowrap',
              background: row.isChosen
                ? COLORS.anchorBg
                : depthTint(row.renderDepth),
            }}
          >
            {row.rails.map((kind, idx) => (
              <RailCell key={idx} kind={kind} />
            ))}
            {row.breadcrumb.length > 0 && (
              <Box
                component="span"
                sx={{
                  fontSize: 11,
                  color: COLORS.breadcrumb,
                  pr: '4px',
                  flexShrink: 0,
                }}
              >
                {row.breadcrumb.map((seg, idx) => (
                  <span key={idx}>
                    <Box
                      component="span"
                      sx={{
                        color: COLORS.breadcrumbSeg,
                        cursor: 'pointer',
                        '&:hover': { textDecoration: 'underline' },
                      }}
                    >
                      {seg}
                    </Box>
                    <span style={{ color: '#9ca3af', padding: '0 1px' }}>
                      /
                    </span>
                  </span>
                ))}
              </Box>
            )}
            <TogglePill
              state={row.toggleState}
              count={row.childCount}
              title={toggleTooltip(row, name)}
            />
            {row.isChosen ? (
              <Box
                component="span"
                sx={{
                  background: '#fef3c7',
                  fontWeight: 600,
                  padding: '1px 6px',
                  borderRadius: '3px',
                }}
              >
                {name}
              </Box>
            ) : (
              <Box
                component={RouterLink}
                to={topicHref(row.topicId)}
                sx={{
                  color: COLORS.link,
                  textDecoration: 'none',
                  borderRadius: '3px',
                  padding: '1px 4px',
                  '&:hover': {
                    background: 'rgba(59, 130, 246, 0.12)',
                    textDecoration: 'underline',
                  },
                }}
              >
                {name}
              </Box>
            )}
            {row.alsoUnderPaths.length > 0 && (
              <Box
                component="span"
                sx={{
                  fontSize: 11,
                  color: '#92400e',
                  fontStyle: 'italic',
                  ml: '6px',
                }}
              >
                ★ also under {row.alsoUnderPaths.join(', ')}
              </Box>
            )}
          </Box>
        )
      })}
    </Box>
  )
}

function toggleTooltip(row: VisibleRow, name: string): string {
  switch (row.toggleState) {
    case 'leaf':
      return ''
    case 'disabled':
      return 'No children'
    case 'collapsed':
      return `Click to show ${name}'s ${row.childCount} child${
        row.childCount === 1 ? '' : 'ren'
      }`
    case 'expanded':
      return 'Children expanded. Click to hide them'
    case 'partial':
      return `Showing only the path to the chosen topic. Click to expand all ${row.childCount} children`
  }
}
