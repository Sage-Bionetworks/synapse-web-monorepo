import { ColumnModel, FacetColumnResult } from '@sage-bionetworks/synapse-types'
import { createContext, PropsWithChildren, useContext } from 'react'
import { QBCondition, QBGroup } from './QueryBuilderTypes'
import { QBValueDisplayNameFn } from './useQBValueDisplayName'

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
  /**
   * Returns the user-facing label for a value of the given column — resolves
   * Synapse IDs to entity/user/evaluation names, and the backend's
   * `VALUE_NOT_SET` sentinel to `Not Assigned`.
   */
  getValueDisplayName: QBValueDisplayNameFn

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

const QueryBuilderInternalContext =
  createContext<QueryBuilderInternalContextType | null>(null)

export type QueryBuilderInternalContextProviderProps = PropsWithChildren<{
  value: QueryBuilderInternalContextType
}>

export function QueryBuilderInternalContextProvider(
  props: QueryBuilderInternalContextProviderProps,
) {
  return (
    <QueryBuilderInternalContext.Provider value={props.value}>
      {props.children}
    </QueryBuilderInternalContext.Provider>
  )
}

export function useQueryBuilderInternalContext(): QueryBuilderInternalContextType {
  const context = useContext(QueryBuilderInternalContext)
  if (context == null) {
    throw new Error(
      'QueryBuilderInternalContext missing — must be rendered inside QueryBuilderControls',
    )
  }
  return context
}
