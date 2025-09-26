import React from 'react'
export type EntityTreeTableContextType = {
  expanded: Record<string, boolean>
  loadingIds: Set<string>
  handleToggleExpanded: (entityId: string) => void
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
