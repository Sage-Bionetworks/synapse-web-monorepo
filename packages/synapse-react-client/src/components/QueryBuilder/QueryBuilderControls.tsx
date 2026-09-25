import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { DragDropProvider } from '@dnd-kit/react'
import { useCallback, useMemo, useState } from 'react'
import { isFilterGroup } from '../../utils/types/IsType'
import { useQueryContext } from '../QueryContext'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'
import { FilterGroupNode } from './FilterGroupNode'
import { useQueryBuilderDrag } from './queryBuilderDnd'
import { qbNodeToApiFilter } from './queryBuilderTranslation'
import { qbTreeToReadable } from './qbTreeToReadable'
import { QueryBuilderInternalContextProvider } from './QueryBuilderInternalContext'
import styles from './QueryBuilderControls.module.scss'
import {
  addChildGroup,
  addConditionToGroup,
  clearGroup,
  defaultQBGroup,
  removeNode,
  updateCondition,
  updateGroup,
} from './queryBuilderOperations'
import { QBCondition, QBGroup } from './QueryBuilderTypes'
import { useQBCombinedSql } from './useQBCombinedSql'
import { useQBFacetSourceMetadata } from './useQBFacetSourceMetadata'
import { useQBValueDisplayName } from './useQBValueDisplayName'

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
  const getValueDisplayName = useQBValueDisplayName(columnModels, facetResults)

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
  const dragHandlers = useQueryBuilderDrag(activeTree, onTreeChange)

  const contextValue = useMemo(
    () => ({
      columnModels,
      facetResults,
      onlyFacetedColumns,
      getColumnDisplayName,
      getValueDisplayName,
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
      getValueDisplayName,
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
    () =>
      qbTreeToReadable(activeTree, getColumnDisplayName, getValueDisplayName),
    [activeTree, getColumnDisplayName, getValueDisplayName],
  )

  const {
    data: combinedSql,
    isPending: isSqlPending,
    error: sqlError,
  } = useQBCombinedSql(summaryMode === 'sql' ? activeTree : null)

  return (
    <QueryBuilderInternalContextProvider value={contextValue}>
      <DragDropProvider {...dragHandlers}>
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
