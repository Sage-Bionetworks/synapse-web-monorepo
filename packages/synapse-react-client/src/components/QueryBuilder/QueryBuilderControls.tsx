import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { DragDropProvider, DragEndEvent } from '@dnd-kit/react'
import { isSortable } from '@dnd-kit/react/sortable'
import { useCallback, useMemo, useState } from 'react'
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
  moveNode,
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
  const moveNodeAt = useCallback(
    (sourceId: string, targetGroupId: string, targetIndex: number) => {
      onTreeChange(moveNode(activeTree, sourceId, targetGroupId, targetIndex))
    },
    [activeTree, onTreeChange],
  )

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { source, target, canceled } = event.operation
      if (canceled || !source || !target) return

      // A group's empty-state region is a plain droppable rather than a
      // sortable, so dnd-kit never projects a position into it. It names its
      // group explicitly and there is only one slot to land in.
      const dropGroupId = target.data?.groupId
      if (typeof dropGroupId === 'string') {
        moveNodeAt(String(source.id), dropGroupId, 0)
        return
      }

      // Otherwise commit the position dnd-kit projected onto the sortable
      // while the drag was in flight — `group` and `index` describe exactly
      // the arrangement that was on screen when the user let go. Deriving the
      // destination from `target` instead does not work: once the optimistic
      // sorting plugin reorders the DOM it re-points the operation at the
      // source, so at drop time `target` is usually the dragged node itself.
      if (!isSortable(source) || source.group == null) return
      moveNodeAt(String(source.id), String(source.group), source.index)
    },
    [moveNodeAt],
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
      moveNodeAt,
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
      moveNodeAt,
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
      <DragDropProvider onDragEnd={handleDragEnd}>
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
