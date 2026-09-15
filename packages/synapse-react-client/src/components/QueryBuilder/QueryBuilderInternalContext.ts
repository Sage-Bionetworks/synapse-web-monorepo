import { ColumnModel, FacetColumnResult } from '@sage-bionetworks/synapse-types'
import { createContext, useContext } from 'react'
import { QBCondition, QBGroup } from './QueryBuilderTypes'

/**
 * Internal-only context shared between `QueryBuilderControls`,
 * `FilterGroupNode`, and `FilterConditionRow`. Exposes the dispatch surface
 * for tree edits + the query metadata each row needs (column models, facet
 * results, and the Cohort Builder `onlyFacetedColumns` toggle).
 */
export type QueryBuilderInternalContextType = {
  /** All columns available in the query (unfiltered by faceting). */
  columnModels: ColumnModel[]
  /** Facet results keyed by column name (used to populate pill choices). */
  facetResults: readonly FacetColumnResult[]
  /**
   * When true, the property picker only offers columns that have facet
   * metadata. Cohort Builder sets this true.
   */
  onlyFacetedColumns: boolean
  /**
   * Returns the user-facing label for a column — resolves `columnAliases`
   * first, then falls back to `unCamelCase(name)`. Wired from
   * `QueryVisualizationContext.getColumnDisplayName` when available.
   */
  getColumnDisplayName: (columnName: string) => string

  // -- Group operations --
  addConditionAt: (groupId: string) => void
  addChildGroupAt: (groupId: string) => void
  clearGroupAt: (groupId: string) => void
  updateGroupAt: (
    groupId: string,
    patch: Partial<Omit<QBGroup, 'kind' | 'id' | 'children'>>,
  ) => void
  removeGroupAt: (groupId: string) => void

  // -- Condition operations --
  updateConditionAt: (
    conditionId: string,
    patch: Partial<Omit<QBCondition, 'kind' | 'id'>>,
  ) => void
  removeConditionAt: (conditionId: string) => void
}

export const QueryBuilderInternalContext =
  createContext<QueryBuilderInternalContextType | null>(null)

export function useQueryBuilderInternalContext(): QueryBuilderInternalContextType {
  const context = useContext(QueryBuilderInternalContext)
  if (context == null) {
    throw new Error(
      'QueryBuilderInternalContext missing — must be rendered inside QueryBuilderControls',
    )
  }
  return context
}
