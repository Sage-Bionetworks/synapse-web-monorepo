import React from 'react'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { TreeNode } from '../hooks/useEntityTreeState'

export type EntityTreeTableContextType = {
  expanded: Record<string, boolean>
  loadingIds: Set<string>
  handleToggleExpanded: (entityId: string) => void
  loadMoreChildren: (parentId: string, pageToken?: string) => void
  nextPageTokens: Record<string, string | undefined>
  onEntityIdClicked?: (entityId: string) => void
  selectedIds?: Set<string>
  onToggleSelection?: (
    entityId: string,
    entityType: EntityType,
    versionNumber: number | undefined,
  ) => void
  disableEntityLinks?: boolean
  tree?: Record<string, TreeNode>
}

export const EntityTreeTableContext = React.createContext<
  EntityTreeTableContextType | undefined
>(undefined)

export function useEntityTreeTableContext(): EntityTreeTableContextType {
  const ctx = React.useContext(EntityTreeTableContext)
  if (!ctx)
    throw new Error(
      'useEntityTreeTableContext must be used within EntityTreeTableContext.Provider',
    )
  return ctx
}

export default EntityTreeTableContext
