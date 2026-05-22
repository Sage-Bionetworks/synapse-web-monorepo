import { useEffect, useMemo, useState } from 'react'
import { Link as RouterLink } from 'react-router'
import { Box } from '@mui/material'
import {
  COLORS,
  RailCell,
  TogglePill,
  depthTint,
} from '../TopicHierarchyShared'
import { buildGraph, fullUnfolding, type Node } from './graph'
import {
  ancestorPath,
  buildParentIndex,
  computeVisible,
  decorateRows,
  type DecoratedRow,
  type ExpandedSet,
  type ForceVisibleSet,
} from './visibility'

export type { Node } from './graph'

type Props = {
  nodes: Node[]
  chosenNodeId: string
  getHref: (nodeId: string) => string
}

export default function HierarchyWidget({
  nodes,
  chosenNodeId,
  getHref,
}: Props) {
  const graph = useMemo(() => buildGraph(nodes), [nodes])
  const unfolding = useMemo(() => fullUnfolding(graph), [graph])
  const parentIndex = useMemo(() => buildParentIndex(unfolding), [unfolding])

  // Initial state: pin chosen + the root above it (so the full path from
  // root to chosen is visible via path-protection). User can collapse from
  // there.
  const initState = useMemo(() => {
    const chosenPos = unfolding.findIndex(r => r.nodeId === chosenNodeId)
    if (chosenPos < 0) {
      return { forceVisible: new Set<number>(), expanded: new Set<number>() }
    }
    const rootPos = ancestorPath(chosenPos, parentIndex)[0]
    const forceVisible = new Set<number>([chosenPos, rootPos])
    const expanded = new Set<number>([chosenPos])
    return { forceVisible, expanded }
  }, [unfolding, parentIndex, chosenNodeId])

  const [forceVisible, setForceVisible] = useState<ForceVisibleSet>(
    () => initState.forceVisible,
  )
  const [expanded, setExpanded] = useState<ExpandedSet>(
    () => initState.expanded,
  )

  // Reset on chosen change.
  useEffect(() => {
    setForceVisible(initState.forceVisible)
    setExpanded(initState.expanded)
  }, [initState])

  const visible = useMemo(
    () => computeVisible(unfolding, forceVisible, expanded, parentIndex),
    [unfolding, forceVisible, expanded, parentIndex],
  )

  const decorated = useMemo(
    () => decorateRows(unfolding, visible, graph, chosenNodeId, parentIndex),
    [unfolding, visible, graph, chosenNodeId, parentIndex],
  )

  // Chosen-path breadcrumbs: one entry per copy of chosen in the unfolding.
  // Each entry is the full ancestor chain (posIndexes + names) from root to
  // chosen. Used by the breadcrumb header so the user can always re-anchor.
  const chosenPaths = useMemo(() => {
    const out: Array<Array<{ posIdx: number; name: string }>> = []
    for (let i = 0; i < unfolding.length; i++) {
      if (unfolding[i].nodeId !== chosenNodeId) continue
      const chain = ancestorPath(i, parentIndex).map(posIdx => ({
        posIdx,
        name:
          graph.node(unfolding[posIdx].nodeId)?.name ??
          unfolding[posIdx].nodeId,
      }))
      out.push(chain)
    }
    return out
  }, [unfolding, parentIndex, graph, chosenNodeId])

  if (!graph.node(chosenNodeId)) {
    return (
      <Box sx={{ color: 'text.secondary' }}>
        Node <code>{chosenNodeId}</code> not found.
      </Box>
    )
  }

  function handleToggle(posIndex: number, state: DecoratedRow['toggleState']) {
    if (state === 'partial' || state === 'collapsed') {
      setExpanded(prev => addTo(prev, posIndex))
      return
    }
    if (state === 'expanded') {
      // If any forceVisible descends from posIndex, collapsing posIndex must
      // drop those FV descendants and promote posIndex into forceVisible so
      // path-protection still shows it.
      const fvDescendants: number[] = []
      for (const fv of forceVisible) {
        if (fv === posIndex) continue
        let cursor = parentIndex[fv]
        while (cursor >= 0) {
          if (cursor === posIndex) {
            fvDescendants.push(fv)
            break
          }
          cursor = parentIndex[cursor]
        }
      }
      if (fvDescendants.length > 0) {
        setForceVisible(prev => {
          const next = new Set(prev)
          for (const d of fvDescendants) next.delete(d)
          next.add(posIndex)
          return next
        })
      }
      setExpanded(prev => removeFrom(prev, posIndex))
      return
    }
    // leaf, disabled: no-op
  }

  function handleBreadcrumbClick(posIdx: number) {
    setForceVisible(prev => addTo(prev, posIdx))
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
      {chosenPaths.length > 0 && (
        <Box
          sx={{
            fontSize: 11,
            color: COLORS.breadcrumb,
            pb: '6px',
            mb: '6px',
            borderBottom: '1px dashed #e5e7eb',
          }}
        >
          {chosenPaths.map((chain, lineIdx) => (
            <Box key={lineIdx} sx={{ whiteSpace: 'nowrap' }}>
              {chain.map((seg, segIdx) => {
                const isLast = segIdx === chain.length - 1
                return (
                  <span key={segIdx}>
                    <Box
                      component="span"
                      onClick={() => handleBreadcrumbClick(seg.posIdx)}
                      sx={{
                        color: isLast ? '#92400e' : COLORS.breadcrumbSeg,
                        fontWeight: isLast ? 600 : 400,
                        cursor: 'pointer',
                        '&:hover': { textDecoration: 'underline' },
                      }}
                    >
                      {seg.name}
                    </Box>
                    {!isLast && (
                      <span style={{ color: '#9ca3af', padding: '0 3px' }}>
                        /
                      </span>
                    )}
                  </span>
                )
              })}
            </Box>
          ))}
        </Box>
      )}
      {decorated.map(row => (
        <Row
          key={row.posKey}
          row={row}
          name={graph.node(row.nodeId)?.name ?? row.nodeId}
          getHref={getHref}
          onToggle={() => handleToggle(row.posIndex, row.toggleState)}
          onAlsoUnderClick={handleBreadcrumbClick}
        />
      ))}
    </Box>
  )
}

function addTo(prev: ReadonlySet<number>, i: number): Set<number> {
  const next = new Set(prev)
  next.add(i)
  return next
}
function removeFrom(prev: ReadonlySet<number>, i: number): Set<number> {
  const next = new Set(prev)
  next.delete(i)
  return next
}

type RowProps = {
  row: DecoratedRow
  name: string
  getHref: (nodeId: string) => string
  onToggle: () => void
  onAlsoUnderClick: (posIdx: number) => void
}

function Row({ row, name, getHref, onToggle, onAlsoUnderClick }: RowProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        padding: '1px 0',
        minHeight: 22,
        whiteSpace: 'nowrap',
        background: row.isChosen ? COLORS.anchorBg : depthTint(row.renderDepth),
      }}
    >
      {row.rails.map((kind, idx) => (
        <RailCell key={idx} kind={kind} />
      ))}
      <TogglePill
        state={row.toggleState}
        count={row.childCount}
        title={toggleTooltip(row, name)}
        onClick={onToggle}
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
          to={getHref(row.nodeId)}
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
          ★ also under{' '}
          {row.alsoUnderPaths.map((link, idx) => (
            <span key={idx}>
              {idx > 0 && ', '}
              <Box
                component="span"
                onClick={() => onAlsoUnderClick(link.targetPosIdx)}
                title="Click to reveal this copy in the tree"
                sx={{
                  cursor: 'pointer',
                  textDecoration: 'underline dotted',
                  '&:hover': {
                    textDecoration: 'underline',
                    color: '#7c2d12',
                  },
                }}
              >
                {link.path}
              </Box>
            </span>
          ))}
        </Box>
      )}
    </Box>
  )
}

function toggleTooltip(row: DecoratedRow, name: string): string {
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
      return 'Click to collapse'
    case 'partial':
      return `Showing only path to chosen. Click to expand all ${row.childCount} children`
  }
}
