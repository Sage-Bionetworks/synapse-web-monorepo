import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { DragDropProvider, DragEndEvent, DragOverEvent } from '@dnd-kit/react'
import { useCallback, useMemo, useRef, useState } from 'react'
import { isFilterGroup } from '../../utils/types/IsType'
import { useQueryContext } from '../QueryContext'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'
import { FilterGroupNode } from './FilterGroupNode'
import { qbNodeToApiFilter } from './queryBuilderTranslation'
import { qbTreeToReadable } from './qbTreeToReadable'
import { QueryBuilderInternalContextProvider } from './QueryBuilderInternalContext'
import styles from './QueryBuilderControls.module.scss'
import {
  addChildGroup,
  addConditionToGroup,
  clearGroup,
  defaultQBGroup,
  moveNodeIntoGroup,
  removeNode,
  updateCondition,
  updateGroup,
} from './queryBuilderOperations'
import { QBCondition, QBGroup } from './QueryBuilderTypes'
import { useQBCombinedSql } from './useQBCombinedSql'
import { useQBFacetSourceMetadata } from './useQBFacetSourceMetadata'

export type QueryBuilderControlsProps = {
  /** The QB tree. When null, an empty default tree is rendered. */
  tree: QBGroup | null
  /** Called with the next tree after any dispatched edit. */
  onTreeChange: (next: QBGroup) => void
  /**
   * When true, the property picker only offers columns that have facet
   * metadata (Cohort Builder mode). Defaults to false.
   */
  onlyFacetedColumns?: boolean
}

type SummaryMode = 'plain-english' | 'sql'

/**
 * Where a drag currently sits: the group under the pointer and which end of
 * its children the dragged node would join.
 *
 * Null when the pointer is not over a group's drop zone. Groups register the
 * only drop zones in the tree, each naming itself in `data.groupId`.
 */
function resolveDrop(operation: DragEndEvent['operation']) {
  const { source, target, position, shape } = operation
  if (source == null || target == null) return null

  const groupId: unknown = target.data?.groupId
  if (typeof groupId !== 'string') return null

  // Which end of the group the node joins is the only positional choice
  // left, so take it from the half of the group the pointer is over.
  const pointer = shape?.current.center ?? position.current
  const isPastMidpoint =
    target.shape != null && pointer.y > target.shape.center.y
  return {
    sourceId: String(source.id),
    groupId,
    position: isPastMidpoint ? ('end' as const) : ('start' as const),
  }
}

/**
 * Top-level Query Builder panel. Uses `useQBFacetSourceMetadata()` — must be
 * rendered inside the Suspense boundary that already wraps
 * `QueryVisualizationWrapper` in `QueryWrapperPlotNav`. Facet metadata is
 * pulled from a companion query that strips the QB's own `FilterGroup` out
 * of `additionalFilters` so pill values remain stable while the user builds.
 */
export function QueryBuilderControls(props: QueryBuilderControlsProps) {
  const { tree, onTreeChange, onlyFacetedColumns = false } = props
  const { columnModels, facetResults } = useQBFacetSourceMetadata()
  const { executeQueryRequest } = useQueryContext()

  const activeTree = tree ?? defaultQBGroup()

  const onApply = useCallback(() => {
    const filterGroup = qbNodeToApiFilter(activeTree)
    executeQueryRequest(prev => {
      // Preserve any non-QB additionalFilters (e.g. lockedColumn constraints
      // introduced by portal detail pages) — Update Results only owns the
      // FilterGroup slot.
      const preserved = (prev.query.additionalFilters ?? []).filter(
        f => !isFilterGroup(f),
      )
      const next = filterGroup ? [...preserved, filterGroup] : preserved
      return {
        ...prev,
        query: {
          ...prev.query,
          additionalFilters: next.length > 0 ? next : undefined,
        },
      }
    })
  }, [activeTree, executeQueryRequest])

  const { getColumnDisplayName } = useQueryVisualizationContext()

  const [summaryMode, setSummaryMode] = useState<SummaryMode>('plain-english')

  const addConditionAt = useCallback(
    (groupId: string) => {
      onTreeChange(addConditionToGroup(activeTree, groupId, null, null))
    },
    [activeTree, onTreeChange],
  )
  const addChildGroupAt = useCallback(
    (groupId: string) => {
      onTreeChange(addChildGroup(activeTree, groupId))
    },
    [activeTree, onTreeChange],
  )
  const clearGroupAt = useCallback(
    (groupId: string) => {
      onTreeChange(clearGroup(activeTree, groupId))
    },
    [activeTree, onTreeChange],
  )
  const updateGroupAt = useCallback(
    (
      groupId: string,
      patch: Partial<Omit<QBGroup, 'kind' | 'id' | 'children'>>,
    ) => {
      onTreeChange(updateGroup(activeTree, groupId, patch))
    },
    [activeTree, onTreeChange],
  )
  const removeGroupAt = useCallback(
    (groupId: string) => {
      onTreeChange(removeNode(activeTree, groupId))
    },
    [activeTree, onTreeChange],
  )
  const updateConditionAt = useCallback(
    (conditionId: string, patch: Partial<Omit<QBCondition, 'kind' | 'id'>>) => {
      onTreeChange(updateCondition(activeTree, conditionId, patch))
    },
    [activeTree, onTreeChange],
  )
  const removeConditionAt = useCallback(
    (conditionId: string) => {
      onTreeChange(removeNode(activeTree, conditionId))
    },
    [activeTree, onTreeChange],
  )
  const applyDrop = useCallback(
    (operation: DragEndEvent['operation']) => {
      const drop = resolveDrop(operation)
      if (drop == null) return
      onTreeChange(
        moveNodeIntoGroup(
          activeTree,
          drop.sourceId,
          drop.groupId,
          drop.position,
        ),
      )
    },
    [activeTree, onTreeChange],
  )

  // The tree as it stood before the in-flight drag. `onDragOver` rewrites the
  // tree as the pointer moves, so this snapshot is the only way back if the
  // gesture is canceled — dnd-kit reverts its own state, never ours.
  const treeBeforeDrag = useRef<QBGroup | null>(null)

  const handleDragStart = useCallback(() => {
    treeBeforeDrag.current = activeTree
  }, [activeTree])

  // Moving the node as the pointer crosses into a group is what keeps React
  // state and the DOM in step within the gesture, which is the contract
  // dnd-kit's sortables expect: rows animate to their new positions, and any
  // optimistic sorting would stand down on seeing the indices already
  // updated rather than reordering the DOM behind React's back.
  const handleDragOver = useCallback(
    (event: DragOverEvent) => applyDrop(event.operation),
    [applyDrop],
  )

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const snapshot = treeBeforeDrag.current
      treeBeforeDrag.current = null

      if (event.operation.canceled) {
        if (snapshot != null) onTreeChange(snapshot)
        return
      }
      // `dragover` only fires when the drop target changes, so the pointer
      // can cross a group's midpoint without one. Re-resolving here makes
      // the release authoritative; when it agrees with what is already on
      // screen `moveNodeIntoGroup` returns the tree by reference and React
      // bails out of the re-render.
      applyDrop(event.operation)
    },
    [applyDrop, onTreeChange],
  )

  const contextValue = useMemo(
    () => ({
      columnModels,
      facetResults,
      onlyFacetedColumns,
      getColumnDisplayName,
      addConditionAt,
      addChildGroupAt,
      clearGroupAt,
      updateGroupAt,
      removeGroupAt,
      updateConditionAt,
      removeConditionAt,
    }),
    [
      columnModels,
      facetResults,
      onlyFacetedColumns,
      getColumnDisplayName,
      addConditionAt,
      addChildGroupAt,
      clearGroupAt,
      updateGroupAt,
      removeGroupAt,
      updateConditionAt,
      removeConditionAt,
    ],
  )

  const readable = useMemo(
    () => qbTreeToReadable(activeTree, getColumnDisplayName),
    [activeTree, getColumnDisplayName],
  )

  const {
    data: combinedSql,
    isPending: isSqlPending,
    error: sqlError,
  } = useQBCombinedSql(summaryMode === 'sql' ? activeTree : null)

  return (
    <QueryBuilderInternalContextProvider value={contextValue}>
      <DragDropProvider
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className={styles.root}>
          <div className={styles.summaryBar}>
            <div className={styles.summaryHeader}>
              <span className={styles.summaryLabel}>Query Summary</span>
              <ToggleButtonGroup
                className={styles.summaryModeToggle}
                size="small"
                exclusive
                value={summaryMode}
                onChange={(_event, next: SummaryMode | null) => {
                  if (next != null) setSummaryMode(next)
                }}
                aria-label="Query summary display mode"
              >
                <ToggleButton value="plain-english" aria-label="Show summary">
                  Summary
                </ToggleButton>
                <ToggleButton value="sql" aria-label="Show SQL">
                  SQL
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div
              className={styles.summaryContent}
              aria-live="polite"
              aria-atomic="true"
            >
              {summaryMode === 'plain-english' ? (
                readable
              ) : sqlError ? (
                <span className={styles.sqlError}>
                  Could not load SQL preview: {sqlError.message}
                </span>
              ) : isSqlPending ? (
                <span className={styles.sqlPlaceholder}>Loading SQL…</span>
              ) : (
                <code className={styles.sqlText}>{combinedSql}</code>
              )}
            </div>
          </div>

          <FilterGroupNode group={activeTree} isRoot />

          <div className={styles.applyRow}>
            <Button
              variant="contained"
              color="primary"
              onClick={onApply}
              className={styles.applyButton}
            >
              Update Results
            </Button>
          </div>
        </div>
      </DragDropProvider>
    </QueryBuilderInternalContextProvider>
  )
}
