import React, { useCallback, useMemo, useState, useEffect } from 'react'
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table'
import { useGetEntityChildren } from '@/synapse-queries/entity/useGetEntityChildren'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { EntityHeader } from '@sage-bionetworks/synapse-types'
import { Box } from '@mui/material'
import { convertToEntityType } from '@/utils/functions/EntityTypeUtils'
import { useGetEntityHeader } from '@/synapse-queries'
import { EntityBadgeIconsCell } from '../EntityFinder/details/view/table/EntityBadgeIconsCell'
import {
  AddFileToDownloadListCell,
  CreatedOnCell,
  FileEntityMD5Cell,
  FileEntitySizeCell,
  ModifiedByCell,
  ModifiedOnCell,
} from './components/CellWrappers'
import { NameCell } from './components/EntityNameCell'
import { IdCell } from './components/IdCell'
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
  onChildrenLoaded: (entityId: string, children: TreeNode[]) => void
}> = ({ entityId, isLoading, isLoaded, onChildrenLoaded }) => {
  const { data: children } = useGetEntityChildren(
    {
      parentId: entityId,
      includeTypes,
    },
    { enabled: isLoading && !isLoaded },
  )

  useEffect(() => {
    if (children && isLoading && !isLoaded) {
      const childNodes: TreeNode[] = children.page.map(eh => ({
        entityHeader: eh,
        parentId: entityId,
        depth: 0, // Will be set correctly by the parent
        isLeaf: !(
          convertToEntityType(eh.type) === EntityType.project ||
          convertToEntityType(eh.type) === EntityType.folder
        ),
      }))
      onChildrenLoaded(entityId, childNodes)
    }
  }, [children, entityId, isLoading, isLoaded, onChildrenLoaded])

  return null
}

export const EntityTreeTable: React.FC<EntityTreeTableProps> = ({ rootId }) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})
  const [tree, setTree] = useState<Record<string, TreeNode>>({})
  const [loadingIds, setLoadingIds] = useState<Set<string>>(new Set())
  const [loadedChildren, setLoadedChildren] = useState<Set<string>>(new Set())

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
      const children: TreeNode[] = rootChildren.page.map(eh => ({
        entityHeader: eh,
        parentId: rootId,
        depth: 1,
        isLeaf: !(
          convertToEntityType(eh.type) === EntityType.project ||
          convertToEntityType(eh.type) === EntityType.folder
        ),
      }))

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
      setLoadedChildren(prev => new Set(prev).add(rootId))
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
    (entityId: string, childNodes: TreeNode[]) => {
      setTree(prev => {
        const node = prev[entityId]
        if (node) {
          // Set correct depth for child nodes
          const childNodesWithDepth = childNodes.map(child => ({
            ...child,
            depth: node.depth + 1,
          }))

          return {
            ...prev,
            [entityId]: {
              ...node,
              children: childNodesWithDepth,
            },
            ...Object.fromEntries(
              childNodesWithDepth.map(child => [child.entityHeader.id, child]),
            ),
          }
        }
        return prev
      })
      setLoadingIds(prev => {
        const next = new Set(prev)
        next.delete(entityId)
        return next
      })
      setLoadedChildren(prev => new Set(prev).add(entityId))
    },
    [],
  )

  // Flatten tree for table rows
  const flattenTree = useCallback(
    (nodeId: string): EntityBundleRow[] => {
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
          rows.push(...flattenTree(child.entityHeader.id))
        })
      }
      return rows
    },
    [expanded, tree],
  )

  const rows: EntityBundleRow[] = useMemo(() => {
    const rootNode = tree[rootId]
    return rootNode ? flattenTree(rootId) : []
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
    getRowId: row => row.entityId,
    manualExpanding: true,
  })

  return (
    <Box>
      <EntityTreeTableContext.Provider
        value={{ expanded, loadingIds, handleToggleExpanded }}
      >
        {/* Render child loaders for nodes that need children loaded */}
        {nodesToLoad.map(entityId => (
          <ChildLoader
            key={entityId}
            entityId={entityId}
            isLoading={loadingIds.has(entityId)}
            isLoaded={loadedChildren.has(entityId)}
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
              {table.getRowModel().rows.map(row => (
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
              ))}
            </tbody>
          </table>
        </div>
      </EntityTreeTableContext.Provider>
    </Box>
  )
}

export default EntityTreeTable
