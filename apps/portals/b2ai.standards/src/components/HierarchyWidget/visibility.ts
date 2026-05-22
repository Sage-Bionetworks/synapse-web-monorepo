import type { Graph, UnfoldingRow } from './graph'
import type { RailKind, ToggleState } from '../TopicHierarchyShared'

// State:
//   forceVisible: posIndexes pinned visible (chosen + ancestors clicked in the
//                 chosen-path breadcrumb header).
//   expanded:     posIndexes whose children should be shown.
//
// Visibility: a position is visible iff
//   - it's in forceVisible, OR
//   - it's a bridge ancestor between two forceVisibles (path-protection), OR
//   - its parent position is visible AND parent ∈ expanded.
//
// Toggle state is derived purely from the rendered picture — see
// computeToggleState.

export type ForceVisibleSet = ReadonlySet<number>
export type ExpandedSet = ReadonlySet<number>

// Index of each position's parent position in the unfolding. -1 for roots.
// Computed once for the unfolding; passed into visibility-compute functions.
export function buildParentIndex(unfolding: UnfoldingRow[]): number[] {
  const out: number[] = new Array(unfolding.length).fill(-1)
  // Build a Map keyed by full posKey ([...pathToParent, nodeId].join('|'))
  // mapping to that row's index, so we can look up a row's parent's index.
  const byKey = new Map<string, number>()
  for (let i = 0; i < unfolding.length; i++) {
    const r = unfolding[i]
    byKey.set([...r.pathToParent, r.nodeId].join('|'), i)
  }
  for (let i = 0; i < unfolding.length; i++) {
    const r = unfolding[i]
    if (r.pathToParent.length === 0) continue
    const parentKey = r.pathToParent.join('|')
    const pi = byKey.get(parentKey)
    if (pi !== undefined) out[i] = pi
  }
  return out
}

// Path-protection set: walking up from each forceVisible to its nearest
// forceVisible ancestor (or root), collecting every position along the way
// (not including the starting fv, but including the ancestor fv if found).
// These are the bridge positions that must be visible even though they're
// not in `expanded`, so the FV ancestors connect to FV descendants on screen.
function pathProtectionSet(
  forceVisible: ForceVisibleSet,
  parentIndex: number[],
): Set<number> {
  const out = new Set<number>()
  for (const idx of forceVisible) {
    let cursor = parentIndex[idx]
    while (cursor >= 0) {
      out.add(cursor)
      if (forceVisible.has(cursor)) break // stop at next FV ancestor (inclusive)
      cursor = parentIndex[cursor]
    }
  }
  return out
}

// Compute the set of visible positions. Iterates expanded-children to a
// fixed point.
export function computeVisible(
  unfolding: UnfoldingRow[],
  forceVisible: ForceVisibleSet,
  expanded: ExpandedSet,
  parentIndex: number[],
): Set<number> {
  // Seed: forceVisible + path-protection (ancestors up to nearest FV).
  const visible = new Set<number>(forceVisible)
  for (const a of pathProtectionSet(forceVisible, parentIndex)) {
    visible.add(a)
  }

  // Forward sweep: rows whose parent is visible AND in expanded become
  // visible too. Since unfolding is DFS pre-order, a single forward pass
  // captures the transitive closure: by the time we visit row i, its parent
  // (at index < i, except for roots which have no parent) has already been
  // settled.
  for (let i = 0; i < unfolding.length; i++) {
    const pi = parentIndex[i]
    if (pi < 0) continue // root row: visible only if forced or pre-seeded
    if (visible.has(pi) && expanded.has(pi)) visible.add(i)
  }

  return visible
}

// Toggle state per visible row — derived purely from what's currently shown:
//   leaf      = no children at all
//   expanded  = all children visible
//   collapsed = no children visible
//   partial   = some-but-not-all children visible
//
// This is independent of whether posIdx is in `expanded` or `forceVisible` —
// the state describes the displayed picture, not the underlying mechanism.
export function computeToggleState(
  childCount: number,
  visibleChildCount: number,
): ToggleState {
  if (childCount === 0) return 'leaf'
  if (visibleChildCount === 0) return 'collapsed'
  if (visibleChildCount >= childCount) return 'expanded'
  return 'partial'
}

// ----------------------------------------------------------------------------
// decorateRows
// ----------------------------------------------------------------------------

export type DecoratedRow = {
  posIndex: number
  posKey: string
  nodeId: string
  renderDepth: number
  toggleState: ToggleState
  childCount: number
  isChosen: boolean
  alsoUnderPaths: string[]
  rails: RailKind[]
}

export function decorateRows(
  unfolding: UnfoldingRow[],
  visible: ReadonlySet<number>,
  graph: Graph,
  chosenNodeId: string,
  parentIndex: number[],
): DecoratedRow[] {
  if (visible.size === 0) return []

  // Iterate visible positions in unfolding (DFS pre-order) for stable order.
  const visibleOrdered: number[] = []
  for (let i = 0; i < unfolding.length; i++) {
    if (visible.has(i)) visibleOrdered.push(i)
  }

  // Map posIdx -> row position in visibleOrdered (for subtree-range lookups).
  const rowAt = new Map<number, number>()
  for (let r = 0; r < visibleOrdered.length; r++) {
    rowAt.set(visibleOrdered[r], r)
  }

  // visibleChildren[parentPosIdx] = ordered list of that parent's visible
  // direct child posIdxs (in DFS / visibleOrdered order).
  const visibleChildren = new Map<number, number[]>()
  for (const i of visibleOrdered) {
    const pi = parentIndex[i]
    const arr = visibleChildren.get(pi)
    if (arr) arr.push(i)
    else visibleChildren.set(pi, [i])
  }

  // Each visible row's rails accumulate one cell per visible ancestor as we
  // process parents from outermost (depth 0) to innermost. We process parents
  // in DFS / visibleOrdered order, which naturally goes outermost-first.
  const railsByRow: RailKind[][] = visibleOrdered.map(() => [])

  for (const parentPosIdx of visibleOrdered) {
    const kids = visibleChildren.get(parentPosIdx)
    if (!kids || kids.length === 0) continue
    const lastKid = kids[kids.length - 1]
    const kidSet = new Set(kids)

    // Walk the parent's visible subtree: from the row just after the parent,
    // up to (but not including) the next visible row that is NOT in this
    // subtree. We can detect end-of-subtree by tracking renderDepth, but
    // simpler: walk while the current row's path passes through parentPosIdx.
    // Equivalently: walk while we haven't yet found a row whose parent chain
    // doesn't include parentPosIdx. Since the unfolding is DFS pre-order and
    // visibleOrdered preserves that order, the subtree is contiguous starting
    // right after the parent row.
    const parentRow = rowAt.get(parentPosIdx)
    if (parentRow === undefined) continue

    let sawLastKid = false
    for (let r = parentRow + 1; r < visibleOrdered.length; r++) {
      const d = visibleOrdered[r]
      // End-of-subtree check: is parentPosIdx an ancestor of d?
      if (!isAncestor(parentPosIdx, d, parentIndex)) break

      if (kidSet.has(d)) {
        if (d === lastKid) {
          railsByRow[r].push('corner')
          sawLastKid = true
        } else {
          railsByRow[r].push('tee')
        }
      } else {
        railsByRow[r].push(sawLastKid ? 'empty' : 'vline')
      }
    }
  }

  // Build decorated rows.
  const decorated: DecoratedRow[] = []
  for (let r = 0; r < visibleOrdered.length; r++) {
    const posIdx = visibleOrdered[r]
    const row = unfolding[posIdx]
    const rails = railsByRow[r]
    const renderDepth = rails.length

    // alsoUnderPaths
    const allParents = graph.parents(row.nodeId)
    const positionParent =
      row.pathToParent.length > 0
        ? row.pathToParent[row.pathToParent.length - 1]
        : null
    const otherParents =
      allParents.length > 1 ? allParents.filter(p => p !== positionParent) : []
    const alsoUnderPaths = otherParents.map(p => fullNamePathTo(p, graph))

    const childCount = graph.children(row.nodeId).length
    const visibleChildCount = (visibleChildren.get(posIdx) ?? []).length
    const isChosen = row.nodeId === chosenNodeId
    const toggleState = computeToggleState(childCount, visibleChildCount)

    decorated.push({
      posIndex: posIdx,
      posKey: String(posIdx),
      nodeId: row.nodeId,
      renderDepth,
      toggleState,
      childCount,
      isChosen,
      alsoUnderPaths,
      rails,
    })
  }

  return decorated
}

function isAncestor(
  ancestor: number,
  descendant: number,
  parentIndex: number[],
): boolean {
  let cursor = parentIndex[descendant]
  while (cursor >= 0) {
    if (cursor === ancestor) return true
    cursor = parentIndex[cursor]
  }
  return false
}

function fullNamePathTo(nodeId: string, graph: Graph): string {
  const segs: string[] = []
  const seen = new Set<string>()
  let cursor: string | undefined = nodeId
  while (cursor && !seen.has(cursor)) {
    seen.add(cursor)
    segs.unshift(graph.node(cursor)?.name ?? cursor)
    const parents = graph.parents(cursor)
    if (parents.length === 0) {
      cursor = undefined
    } else {
      let best = parents[0]
      let bestDepth = graph.depth(best)
      for (let i = 1; i < parents.length; i++) {
        const d = graph.depth(parents[i])
        if (d > bestDepth) {
          best = parents[i]
          bestDepth = d
        }
      }
      cursor = best
    }
  }
  return segs.join('/')
}
