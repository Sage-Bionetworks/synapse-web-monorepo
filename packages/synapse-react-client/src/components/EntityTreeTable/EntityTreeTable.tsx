import React, { useCallback, useMemo, useState, useEffect, useRef } from 'react'
import './EntityTreeTable.css'
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  flexRender,
  SortingState,
  HeaderContext,
} from '@tanstack/react-table'
import { useGetEntityChildren } from '@/synapse-queries/entity/useGetEntityChildren'
import { EntityType } from '@sage-bionetworks/synapse-client'
import {
  EntityHeader,
  SortBy,
  Direction,
} from '@sage-bionetworks/synapse-types'
import { Box, useTheme, useMediaQuery } from '@mui/material'
import { convertToEntityType } from '@/utils/functions/EntityTypeUtils'
import { useGetEntityHeader } from '@/synapse-queries'
import { EntityBadgeIconsCell } from '../EntityFinder/details/view/table/EntityBadgeIconsCell'
import { NameCell } from './components/EntityNameCell'
import { IdCell } from './components/IdCell'
import { IdColumnHeader } from './components/IdColumnHeader'
import { ModifiedOnCell } from '../EntityFinder/details/view/table/ModifiedOnCell'
import { ModifiedByCell } from '../EntityFinder/details/view/table/ModifiedByCell'
import { CreatedOnCell } from '../EntityFinder/details/view/table/CreatedOnCell'
import { FileEntitySizeCell } from '../EntityFinder/details/view/table/FileEntitySizeCell'
import { FileEntityMD5Cell } from '../EntityFinder/details/view/table/FileEntityMD5Cell'
import { AddFileToDownloadListCell } from '../EntityFinder/details/view/table/AddToDownloadListCell'
import EntityTreeTableContext from './components/EntityTreeTableContext'
import { AutoLoadMore } from './components/AutoLoadMore'
import ColumnHeader from '../TanStackTable/ColumnHeader'

type EntityTreeTableProps = {
  rootId: string
  expandRootByDefault?: boolean
  showRootNode?: boolean
  enableSorting?: boolean
}

type TreeNode = {
  entityHeader: EntityHeader
  parentId?: string
  depth: number
  isLeaf: boolean
  children?: TreeNode[]
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

const includeTypes: EntityType[] = [
  EntityType.folder,
  EntityType.file,
  EntityType.link,
  EntityType.recordset,
]

// Extracted header components to avoid inline component definitions
const NameColumnHeader = (props: HeaderContext<EntityBundleRow, unknown>) => (
  <ColumnHeader {...props} title={'Name'} />
)
const CreatedOnColumnHeader = (
  props: HeaderContext<EntityBundleRow, unknown>,
) => <ColumnHeader {...props} title={'Created On'} />
const ModifiedOnColumnHeader = (
  props: HeaderContext<EntityBundleRow, unknown>,
) => <ColumnHeader {...props} title={'Modified On'} />

const ChildLoader: React.FC<{
  entityId: string
  isLoading: boolean
  isLoaded: boolean
  pageToken?: string
  sortBy?: SortBy
  sortDirection?: Direction
  onChildrenLoaded: (
    entityId: string,
    children: TreeNode[],
    nextPageToken?: string,
  ) => void
}> = ({
  entityId,
  isLoading,
  isLoaded,
  pageToken,
  sortBy,
  sortDirection,
  onChildrenLoaded,
}) => {
  const { data: children } = useGetEntityChildren(
    {
      parentId: entityId,
      includeTypes,
      nextPageToken: pageToken,
      sortBy,
      sortDirection,
    },
    { enabled: isLoading && !isLoaded },
  )

  useEffect(() => {
    if (children && isLoading && !isLoaded) {
      const childNodes: TreeNode[] = children.page.map((eh: EntityHeader) => ({
        entityHeader: eh,
        parentId: entityId,
        depth: 0, // Will be set correctly by the parent
        isLeaf: !(
          convertToEntityType(eh.type) === EntityType.project ||
          convertToEntityType(eh.type) === EntityType.folder
        ),
      }))
      const nextToken = children.nextPageToken
      onChildrenLoaded(entityId, childNodes, nextToken)
    }
  }, [children, entityId, isLoading, isLoaded, onChildrenLoaded])

  return null
}

export const EntityTreeTable: React.FC<EntityTreeTableProps> = ({
  rootId,
  expandRootByDefault = true,
  showRootNode = true,
  enableSorting = true,
}) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})
  const [tree, setTree] = useState<Record<string, TreeNode>>({})
  const [loadingIds, setLoadingIds] = useState<Set<string>>(new Set())
  const [loadedChildren, setLoadedChildren] = useState<Set<string>>(new Set())
  const [nextPageTokens, setNextPageTokens] = useState<
    Record<string, string | undefined>
  >({})
  const [loadingPageTokens, setLoadingPageTokens] = useState<
    Record<string, string | undefined>
  >({})
  const [sorting, setSorting] = useState<SortingState>([])

  // Responsive design hooks
  const theme = useTheme()
  const isLargeAndDown = useMediaQuery(theme.breakpoints.down('lg'))
  const isSmallAndDown = useMediaQuery(theme.breakpoints.down('sm'))

  // Convert TanStack Table sorting to API sorting parameters
  const getSortingParams = useCallback(() => {
    if (!sorting.length) return {}

    const firstSort = sorting[0]
    let sortBy: SortBy | undefined

    switch (firstSort.id) {
      case 'name':
        sortBy = SortBy.NAME
        break
      case 'createdOn':
        sortBy = SortBy.CREATED_ON
        break
      case 'modifiedOn':
        sortBy = SortBy.MODIFIED_ON
        break
      default:
        return {}
    }

    return {
      sortBy,
      sortDirection: firstSort.desc ? Direction.DESC : Direction.ASC,
    }
  }, [sorting])

  const { sortBy, sortDirection } = getSortingParams()

  // Track previous sorting to detect changes
  const prevSortingRef = useRef<SortingState>([])
  const isInitialMount = useRef(true)

  // Reset tree when sorting changes (but not on initial mount)
  useEffect(() => {
    const sortingChanged =
      JSON.stringify(prevSortingRef.current) !== JSON.stringify(sorting)

    if (sortingChanged && !isInitialMount.current) {
      // Reset tree state when sorting changes to force re-fetch with new sort order
      setTree({})
      setLoadedChildren(new Set())
      setExpanded({})
      setNextPageTokens({})
      setLoadingPageTokens({})
      setLoadingIds(new Set())
    }

    prevSortingRef.current = sorting
    isInitialMount.current = false
  }, [sorting])

  // Get root entity header
  const { data: rootHeader } = useGetEntityHeader(rootId)

  // Get root children
  const { data: rootChildren } = useGetEntityChildren(
    {
      parentId: rootId,
      includeTypes,
      sortBy,
      sortDirection,
    },
    { enabled: !!rootHeader },
  )

  // Initialize root node and its children
  useEffect(() => {
    if (rootHeader && rootChildren && !loadedChildren.has(rootId)) {
      // Build the children nodes from the response
      const children: TreeNode[] = rootChildren.page.map(
        (eh: EntityHeader) => ({
          entityHeader: eh,
          parentId: rootId,
          depth: showRootNode ? 1 : 0,
          isLeaf: !(
            convertToEntityType(eh.type) === EntityType.project ||
            convertToEntityType(eh.type) === EntityType.folder
          ),
        }),
      )

      // Initialize root and merge children into the tree
      setTree(prev => {
        // If we already have data for this root, replace it completely to avoid duplicates
        const existingRoot = prev[rootId]
        if (
          existingRoot &&
          existingRoot.children &&
          existingRoot.children.length > 0
        ) {
          // Only skip if we have the same sort parameters (check if this is truly the same data)
          return prev
        }

        const childEntries = Object.fromEntries(
          children.map(child => {
            const existing = prev[child.entityHeader.id]
            const merged = existing
              ? {
                  ...existing,
                  ...child,
                  depth: child.depth,
                  parentId: child.parentId,
                  isLeaf: child.isLeaf,
                }
              : child
            return [child.entityHeader.id, merged]
          }),
        )

        return {
          ...prev,
          [rootId]: {
            entityHeader: rootHeader,
            depth: showRootNode ? 0 : -1,
            isLeaf: false,
            children,
          },
          ...childEntries,
        }
      })

      // store nextPageToken for root (if any)
      const rootNext = rootChildren.nextPageToken
      setNextPageTokens(prev => ({ ...prev, [rootId]: rootNext }))

      // mark as loaded only if there is no next page token
      if (!rootNext) {
        setLoadedChildren(prev => new Set(prev).add(rootId))
      }

      // Expand root node by default if the flag is set
      if (expandRootByDefault) {
        setExpanded(prev => ({ ...prev, [rootId]: true }))
      }
    }
  }, [
    rootHeader,
    rootChildren,
    rootId,
    expandRootByDefault,
    showRootNode,
    sortBy,
    sortDirection,
  ])

  // Handler for expanding nodes
  const handleToggleExpanded = useCallback(
    (entityId: string) => {
      const isCurrentlyExpanded = expanded[entityId]
      setExpanded(prev => ({
        ...prev,
        [entityId]: !prev[entityId],
      }))

      // If expanding and children haven't been loaded yet, mark for loading
      if (!isCurrentlyExpanded && !loadedChildren.has(entityId)) {
        const node = tree[entityId]
        if (node && !node.isLeaf) {
          setLoadingIds(prev => new Set(prev).add(entityId))
        }
      }
    },
    [expanded, loadedChildren, tree],
  )

  // Get the list of nodes that need their children loaded
  const nodesToLoad = Array.from(loadingIds)

  // Callback to handle when children are loaded
  const handleChildrenLoaded = useCallback(
    (entityId: string, childNodes: TreeNode[], nextPageToken?: string) => {
      setTree(prev => {
        const node = prev[entityId]
        if (node) {
          // Set correct depth for child nodes
          const childNodesWithDepth = childNodes.map(child => ({
            ...child,
            depth: node.depth + 1,
          }))

          // Check if this is the first load (loading the first page) or pagination (loading more pages)
          // If we're loading a page token, it means we're paginating and should append
          // If no page token is being loaded, it's the first load and we should replace
          const isFirstLoad = !loadingPageTokens[entityId]
          const mergedChildren =
            isFirstLoad || !node.children
              ? childNodesWithDepth // Replace children on first load
              : [...node.children, ...childNodesWithDepth] // Append for pagination

          // Merge children into the tree mapping while preserving existing
          // subtree entries for those children (so expanding deeper nodes
          // isn't lost when siblings are added).
          const mergedChildEntries = Object.fromEntries(
            mergedChildren.map(child => {
              const existing = prev[child.entityHeader.id]
              const merged = existing
                ? {
                    ...existing,
                    ...child,
                    depth: child.depth,
                    parentId: child.parentId,
                    isLeaf: child.isLeaf,
                  }
                : child
              return [child.entityHeader.id, merged]
            }),
          )

          return {
            ...prev,
            [entityId]: {
              ...node,
              children: mergedChildren,
            },
            ...mergedChildEntries,
          }
        }
        return prev
      })

      // store nextPageToken for this parent (if any)
      setNextPageTokens(prev => ({ ...prev, [entityId]: nextPageToken }))
      // clear the loading page token entry for this parent since the
      // requested page has completed (this prevents the ChildLoader
      // from remaining mounted/considered "loading")
      setLoadingPageTokens(prev => {
        const next = { ...prev }
        delete next[entityId]
        return next
      })

      setLoadingIds(prev => {
        const next = new Set(prev)
        next.delete(entityId)
        return next
      })

      // mark as loaded only if there is no next page token (i.e., fully loaded)
      if (!nextPageToken) {
        setLoadedChildren(prev => new Set(prev).add(entityId))
      }
    },
    [loadingPageTokens],
  )

  const loadMoreChildren = useCallback(
    (parentId: string, pageToken?: string) => {
      // set which page token is being requested for this parent and mark loading
      setLoadingPageTokens(prev => ({ ...prev, [parentId]: pageToken }))
      setLoadingIds(prev => new Set(prev).add(parentId))
    },
    [],
  )

  // Flatten tree for table rows. Track visited node ids to avoid cycles and
  // duplicate rows when the same entity appears multiple times in the
  // traversal (links, cycles, or bad/multiple parent relationships).
  const flattenTree = useCallback(
    (nodeId: string, visited = new Set<string>()): EntityBundleRow[] => {
      // Prevent revisiting the same node and producing duplicate rows
      if (visited.has(nodeId)) return []
      visited.add(nodeId)

      const node = tree[nodeId]
      if (!node) return []

      const rows: EntityBundleRow[] = [
        {
          entityId: node.entityHeader.id,
          entityHeader: node.entityHeader,
          depth: node.depth,
          isLeaf: node.isLeaf,
          parentId: node.parentId,
          versionNumber: node.entityHeader.versionNumber,
        },
      ]
      if (expanded[node.entityHeader.id] && node.children) {
        node.children.forEach(child => {
          rows.push(...flattenTree(child.entityHeader.id, visited))
        })
        // If there is a next page token for this node, add a synthetic 'Load more' row
        const nextToken = nextPageTokens[node.entityHeader.id]

        if (nextToken) {
          rows.push({
            entityId: `${node.entityHeader.id}::loadmore::${nextToken}`,
            entityHeader: node.entityHeader,
            depth: node.depth + 1,
            isLeaf: true,
            parentId: node.entityHeader.id,
            versionNumber: node.entityHeader.versionNumber,
            isLoadMore: true,
          })
        }
      }
      return rows
    },
    [expanded, tree, nextPageTokens],
  )

  const rows: EntityBundleRow[] = useMemo(() => {
    const rootNode = tree[rootId]
    if (!rootNode) return []

    if (showRootNode) {
      return flattenTree(rootId, new Set<string>())
    } else {
      // If root node is not shown, start with its children
      const rows: EntityBundleRow[] = []
      if (expanded[rootId] && rootNode.children) {
        rootNode.children.forEach(child => {
          rows.push(...flattenTree(child.entityHeader.id, new Set<string>()))
        })
        // If there is a next page token for the root, add a synthetic 'Load more' row
        const nextToken = nextPageTokens[rootId]
        if (nextToken) {
          rows.push({
            entityId: `${rootId}::loadmore::${nextToken}`,
            entityHeader: rootNode.entityHeader,
            depth: 0,
            isLeaf: true,
            parentId: rootId,
            versionNumber: rootNode.entityHeader.versionNumber,
            isLoadMore: true,
          })
        }
      }
      return rows
    }
  }, [tree, rootId, flattenTree, showRootNode, expanded, nextPageTokens])

  // Table columns
  const columns = useMemo<ColumnDef<EntityBundleRow>[]>(() => {
    const baseColumns: ColumnDef<EntityBundleRow>[] = [
      {
        accessorKey: 'entityHeader.name',
        id: 'name',
        header: NameColumnHeader,
        cell: NameCell,
        enableSorting: enableSorting,
      },
    ]
    if (!isSmallAndDown) {
      baseColumns.push({
        id: 'badges',
        header: 'Badges',
        cell: EntityBadgeIconsCell,
        enableSorting: false,
      })
      baseColumns.push({
        id: 'id',
        header: IdColumnHeader,
        cell: IdCell,
        enableSorting: false,
      })
    }
    if (!isLargeAndDown) {
      baseColumns.push({
        accessorKey: 'entityHeader.createdOn',
        id: 'createdOn',
        header: CreatedOnColumnHeader,
        cell: CreatedOnCell,
        enableSorting: enableSorting,
      })
    }

    if (!isSmallAndDown) {
      baseColumns.push({
        accessorKey: 'entityHeader.modifiedOn',
        id: 'modifiedOn',
        header: ModifiedOnColumnHeader,
        cell: ModifiedOnCell,
        enableSorting: enableSorting,
      })
    }

    if (!isLargeAndDown) {
      baseColumns.push({
        id: 'modifiedBy',
        header: 'Modified By',
        cell: ModifiedByCell,
        enableSorting: false,
      })
    }

    if (!isSmallAndDown) {
      baseColumns.push({
        id: 'size',
        header: 'Size',
        cell: FileEntitySizeCell,
        enableSorting: false,
      })
    }
    if (!isLargeAndDown) {
      baseColumns.push({
        id: 'md5',
        header: 'MD5',
        cell: FileEntityMD5Cell,
        enableSorting: false,
      })
    }

    baseColumns.push({
      id: 'download',
      header: 'Download',
      cell: AddFileToDownloadListCell,
      enableSorting: false,
    })

    return baseColumns
  }, [enableSorting, isLargeAndDown, isSmallAndDown])

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

        <div style={{ overflowX: 'auto' }}>
          <table className="entity-tree-table">
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map(row => {
                const original = row.original
                if (original.isLoadMore) {
                  const colCount = table.getAllColumns().length
                  const isLoading = loadingIds.has(original.parentId!)

                  return (
                    <tr key={row.id}>
                      <td colSpan={colCount}>
                        <AutoLoadMore
                          depth={original.depth}
                          isLoading={isLoading}
                          onLoadMore={() => {
                            loadMoreChildren(
                              original.parentId!,
                              nextPageTokens[original.parentId!],
                            )
                          }}
                        />
                      </td>
                    </tr>
                  )
                }
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </EntityTreeTableContext.Provider>
    </Box>
  )
}

export default EntityTreeTable
