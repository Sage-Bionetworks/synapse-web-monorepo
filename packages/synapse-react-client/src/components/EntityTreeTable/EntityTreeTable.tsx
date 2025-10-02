import React, { useMemo } from 'react'
import styles from './EntityTreeTable.module.scss'
import { useReactTable, getCoreRowModel } from '@tanstack/react-table'
import { EntityHeader } from '@sage-bionetworks/synapse-types'
import { Box } from '@mui/material'
import { useEntityTreeState } from './hooks/useEntityTreeState'
import { useTreeOperationsWithDirectFetch } from './hooks/useTreeOperationsWithDirectFetch'
import { useTableColumns } from './hooks/useTableColumns'
import { useTableData } from './hooks/useTableData'
export { type TreeNode } from './hooks/useEntityTreeState'
import { EntityTreeTableView } from './components/EntityTreeTableView'
import { EntityTreeTableContext } from './components/EntityTreeTableContext'
import NoContentAvailable from '../SynapseTable/NoContentAvailable'

type EntityTreeTableProps = {
  /** The Synapse ID of the root entity to display */
  rootId: string
  /** Whether to expand the root node by default. Defaults to true */
  expandRootByDefault?: boolean
  /** Whether to show the root node in the tree. Defaults to true */
  showRootNode?: boolean
  /** Whether to enable column sorting. Defaults to true */
  enableSorting?: boolean
  /** Callback when an entity is clicked. If not provided, defaults to opening Synapse.org page. */
  onEntityIdClicked?: (entityId: string) => void
}

export type EntityBundleRow = {
  entityId: string
  entityHeader: EntityHeader
  depth: number
  isLeaf: boolean
  parentId?: string
  versionNumber?: number
  isLoadMore?: boolean
  pageToken?: string
}

export const EntityTreeTable: React.FC<EntityTreeTableProps> = ({
  rootId,
  expandRootByDefault = true,
  showRootNode = true,
  enableSorting = true,
  onEntityIdClicked,
}) => {
  // Use hook for state management and data initialization
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
    sortBy,
    sortDirection,
  } = useEntityTreeState(rootId, expandRootByDefault, showRootNode)

  // Use tree operations hook with direct fetch
  const { handleToggleExpanded, loadMoreChildren, flattenTree } =
    useTreeOperationsWithDirectFetch(
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

  // Check if there's no content to show
  const hasNoContent = useMemo(() => {
    const rootNode = tree[rootId]
    if (!rootNode) return false

    // If we're showing the root node, we always have content (at least the root)
    if (showRootNode) return false

    // If we're not showing root node, check if root has children loaded and they're empty
    if (loadedChildren.has(rootId)) {
      return !rootNode.children || rootNode.children.length === 0
    }

    // If children haven't been loaded yet, don't show no content
    return false
  }, [tree, rootId, showRootNode, loadedChildren])

  const table = useReactTable({
    data: rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: 'onChange',
    state: { expanded, sorting },
    // Make row ids robust: include parent/depth for normal rows so that the
    // same entity appearing in different places (or synthetic rows) won't
    // collide. For load-more rows, use parentId and depth to create unique identifier.
    getRowId: row =>
      row.isLoadMore
        ? `loadmore::${row.parentId}::${row.depth}::${
            row.pageToken || 'no-token'
          }`
        : `${row.entityId || row.entityHeader.id}::${row.parentId ?? 'root'}::${
            row.depth
          }`,
    manualExpanding: true,
    manualSorting: true,
    enableSorting,
    onSortingChange: setSorting,
    enableColumnFilters: false,
  })

  return (
    <Box>
      <EntityTreeTableContext.Provider
        value={{
          expanded,
          loadingIds,
          handleToggleExpanded: (entityId: string) => {
            void handleToggleExpanded(entityId)
          },
          loadMoreChildren: (entityId: string, pageToken?: string) => {
            void loadMoreChildren(entityId, pageToken)
          },
          nextPageTokens,
          onEntityIdClicked,
        }}
      >
        {hasNoContent ? (
          <NoContentAvailable />
        ) : (
          <EntityTreeTableView
            table={table}
            className={styles.entityTreeTable}
          />
        )}
      </EntityTreeTableContext.Provider>
    </Box>
  )
}

export default EntityTreeTable
