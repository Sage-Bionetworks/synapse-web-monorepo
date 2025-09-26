import React from 'react'
import './EntityTreeTable.css'
import { useReactTable, getCoreRowModel } from '@tanstack/react-table'
import { EntityHeader } from '@sage-bionetworks/synapse-types'
import { Box } from '@mui/material'
import { useTreeState } from './hooks/useTreeState'
import { useSorting } from './hooks/useSorting'
import { useTreeOperations } from './hooks/useTreeOperations'
import { useTableColumns } from './hooks/useTableColumns'
import { useDataInitialization } from './hooks/useDataInitialization'
import { useTableData } from './hooks/useTableData'
export { type TreeNode } from './hooks/useTreeState'
import { ChildLoader } from './components/ChildLoader'
import { EntityTreeTableView } from './components/EntityTreeTableView'
import { EntityTreeTableContext } from './components/EntityTreeTableContext'

type EntityTreeTableProps = {
  rootId: string
  expandRootByDefault?: boolean
  showRootNode?: boolean
  enableSorting?: boolean
}

export type EntityBundleRow = {
  entityId: string
  entityHeader: EntityHeader
  depth: number
  isLeaf: boolean
  parentId?: string
  versionNumber?: number
  isLoadMore?: boolean
}

export const EntityTreeTable: React.FC<EntityTreeTableProps> = ({
  rootId,
  expandRootByDefault = true,
  showRootNode = true,
  enableSorting = true,
}) => {
  // Use custom hooks for state management
  const {
    expanded,
    setExpanded,
    tree,
    setTree,
    loadingIds,
    setLoadingIds,
    loadedChildren,
    setLoadedChildren,
    nextPageTokens,
    setNextPageTokens,
    loadingPageTokens,
    setLoadingPageTokens,
    sorting,
    setSorting,
    resetTreeState,
  } = useTreeState()

  // Use sorting hook
  const { sortBy, sortDirection } = useSorting(sorting, resetTreeState)

  // Use tree operations hook
  const {
    handleToggleExpanded,
    handleChildrenLoaded,
    loadMoreChildren,
    flattenTree,
  } = useTreeOperations(
    expanded,
    setExpanded,
    tree,
    setTree,
    loadedChildren,
    setLoadedChildren,
    loadingIds,
    setLoadingIds,
    setNextPageTokens,
    setLoadingPageTokens,
    loadingPageTokens,
    nextPageTokens,
  )

  // Initialize data
  useDataInitialization(
    rootId,
    expandRootByDefault,
    showRootNode,
    loadedChildren,
    setTree,
    setNextPageTokens,
    setLoadedChildren,
    setExpanded,
    sortBy,
    sortDirection,
  )

  // Get table columns
  const columns = useTableColumns(enableSorting)

  // Get table data
  const rows = useTableData(
    tree,
    rootId,
    showRootNode,
    expanded,
    nextPageTokens,
    flattenTree,
  )

  // Get the list of nodes that need their children loaded
  const nodesToLoad = Array.from(loadingIds)

  const table = useReactTable({
    data: rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: { expanded, sorting },
    // Make row ids robust: include parent/depth for normal rows so that the
    // same entity appearing in different places (or synthetic rows) won't
    // collide. Keep load-more rows as-is since they are already unique.
    getRowId: row =>
      row.isLoadMore
        ? row.entityId
        : `${row.entityId}::${row.parentId ?? 'root'}::${row.depth}`,
    manualExpanding: true,
    manualSorting: true,
    enableSorting,
    onSortingChange: setSorting,
  })

  return (
    <Box>
      <EntityTreeTableContext.Provider
        value={{
          expanded,
          loadingIds,
          handleToggleExpanded,
          loadMoreChildren,
          nextPageTokens,
        }}
      >
        {/* Render child loaders for nodes that need children loaded */}
        {nodesToLoad.map(entityId => (
          <ChildLoader
            key={entityId}
            entityId={entityId}
            isLoading={loadingIds.has(entityId)}
            isLoaded={loadedChildren.has(entityId)}
            pageToken={loadingPageTokens[entityId]}
            sortBy={sortBy}
            sortDirection={sortDirection}
            onChildrenLoaded={handleChildrenLoaded}
          />
        ))}

        <EntityTreeTableView table={table} />
      </EntityTreeTableContext.Provider>
    </Box>
  )
}

export default EntityTreeTable
