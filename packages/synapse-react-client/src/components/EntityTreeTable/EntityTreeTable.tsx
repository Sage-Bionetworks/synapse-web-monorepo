import React, { useCallback, useMemo, useState, useEffect } from 'react'
import './EntityTreeTable.css'
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table'
import { useGetEntityChildren } from '@/synapse-queries/entity/useGetEntityChildren'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { EntityHeader } from '@sage-bionetworks/synapse-types'
import { Box, Button, CircularProgress } from '@mui/material'
import { convertToEntityType } from '@/utils/functions/EntityTypeUtils'
import { useGetEntityHeader } from '@/synapse-queries'
import { EntityBadgeIconsCell } from '../EntityFinder/details/view/table/EntityBadgeIconsCell'
import { NameCell } from './components/EntityNameCell'
import { IdCell } from './components/IdCell'
import { ModifiedOnCell } from '../EntityFinder/details/view/table/ModifiedOnCell'
import { ModifiedByCell } from '../EntityFinder/details/view/table/ModifiedByCell'
import { CreatedOnCell } from '../EntityFinder/details/view/table/CreatedOnCell'
import { FileEntitySizeCell } from '../EntityFinder/details/view/table/FileEntitySizeCell'
import { FileEntityMD5Cell } from '../EntityFinder/details/view/table/FileEntityMD5Cell'
import { AddFileToDownloadListCell } from '../EntityFinder/details/view/table/AddToDownloadListCell'
import EntityTreeTableContext from './components/EntityTreeTableContext'

type EntityTreeTableProps = {
  rootId: string
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

const ChildLoader: React.FC<{
  entityId: string
  isLoading: boolean
  isLoaded: boolean
  pageToken?: string
  onChildrenLoaded: (
    entityId: string,
    children: TreeNode[],
    nextPageToken?: string,
  ) => void
}> = ({ entityId, isLoading, isLoaded, pageToken, onChildrenLoaded }) => {
  const { data: children } = useGetEntityChildren(
    {
      parentId: entityId,
      includeTypes,
      nextPageToken: pageToken,
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

export const EntityTreeTable: React.FC<EntityTreeTableProps> = ({ rootId }) => {
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

  // Get root entity header
  const { data: rootHeader } = useGetEntityHeader(rootId)

  // Get root children
  const { data: rootChildren } = useGetEntityChildren(
    {
      parentId: rootId,
      includeTypes,
    },
    { enabled: !!rootHeader },
  )

  // Initialize root node and its children - only run once per rootId
  useEffect(() => {
    if (rootHeader && rootChildren && !loadedChildren.has(rootId)) {
      const children: TreeNode[] = rootChildren.page.map(
        (eh: EntityHeader) => ({
          entityHeader: eh,
          parentId: rootId,
          depth: 1,
          isLeaf: !(
            convertToEntityType(eh.type) === EntityType.project ||
            convertToEntityType(eh.type) === EntityType.folder
          ),
        }),
      )

      setTree({
        [rootId]: {
          entityHeader: rootHeader,
          depth: 0,
          isLeaf: false,
          children,
        },
        ...Object.fromEntries(
          children.map(child => [child.entityHeader.id, child]),
        ),
      })
      // store nextPageToken for root (if any)
      const rootNext = rootChildren.nextPageToken
      setNextPageTokens(prev => ({ ...prev, [rootId]: rootNext }))

      // mark as loaded only if there is no next page token
      if (!rootNext) {
        setLoadedChildren(prev => new Set(prev).add(rootId))
      }
    }
  }, [rootHeader, rootChildren, rootId, loadedChildren])

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

          const mergedChildren = node.children
            ? [...node.children, ...childNodesWithDepth]
            : childNodesWithDepth

          return {
            ...prev,
            [entityId]: {
              ...node,
              children: mergedChildren,
            },
            ...Object.fromEntries(
              mergedChildren.map(child => [child.entityHeader.id, child]),
            ),
          }
        }
        return prev
      })

      // store nextPageToken for this parent (if any)
      setNextPageTokens(prev => ({ ...prev, [entityId]: nextPageToken }))

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
    [],
  )

  const loadMoreChildren = useCallback(
    (parentId: string, pageToken?: string) => {
      // set which page token is being requested for this parent and mark loading
      setLoadingPageTokens(prev => ({ ...prev, [parentId]: pageToken }))
      setLoadingIds(prev => new Set(prev).add(parentId))
    },
    [],
  )

  // Flatten tree for table rows
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
          versionNumber: undefined, // Could be enhanced to get version info if needed
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
            versionNumber: undefined,
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
    return rootNode ? flattenTree(rootId, new Set<string>()) : []
  }, [tree, rootId, flattenTree])

  // Table columns
  const columns = useMemo<ColumnDef<EntityBundleRow>[]>(
    () => [
      {
        id: 'name',
        header: 'Name',
        cell: NameCell,
      },
      {
        id: 'badges',
        header: 'Badges',
        cell: EntityBadgeIconsCell,
      },
      {
        id: 'id',
        header: 'ID',
        cell: IdCell,
      },
      {
        id: 'createdOn',
        header: 'Created On',
        cell: CreatedOnCell,
      },
      {
        id: 'modifiedOn',
        header: 'Modified On',
        cell: ModifiedOnCell,
      },
      {
        id: 'modifiedBy',
        header: 'Modified By',
        cell: ModifiedByCell,
      },
      {
        id: 'size',
        header: 'Size',
        cell: FileEntitySizeCell,
      },
      {
        id: 'md5',
        header: 'MD5',
        cell: FileEntityMD5Cell,
      },
      {
        id: 'download',
        header: 'Download',
        cell: AddFileToDownloadListCell,
      },
    ],
    [expanded, loadingIds, handleToggleExpanded],
  )

  const table = useReactTable({
    data: rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: { expanded },
    // Make row ids robust: include parent/depth for normal rows so that the
    // same entity appearing in different places (or synthetic rows) won't
    // collide. Keep load-more rows as-is since they are already unique.
    getRowId: row =>
      row.isLoadMore
        ? row.entityId
        : `${row.entityId}::${row.parentId ?? 'root'}::${row.depth}`,
    manualExpanding: true,
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
                  return (
                    <tr key={row.id}>
                      <td colSpan={colCount}>
                        {/* Render a simple load more action aligned to depth */}
                        <div style={{ paddingLeft: original.depth * 16 + 32 }}>
                          {loadingIds.has(original.parentId!) ? (
                            <>
                              <CircularProgress size={14} />
                              <span>Loading...</span>
                            </>
                          ) : (
                            <Button
                              variant="outlined"
                              size="small"
                              onClick={() => {
                                loadMoreChildren(
                                  original.parentId!,
                                  nextPageTokens[original.parentId!],
                                )
                              }}
                            >
                              Show more...
                            </Button>
                          )}
                        </div>
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
