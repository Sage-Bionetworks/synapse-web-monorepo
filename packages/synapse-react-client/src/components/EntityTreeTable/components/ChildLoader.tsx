import React, { useEffect } from 'react'
import { useGetEntityChildren } from '@/synapse-queries/entity/useGetEntityChildren'
import { EntityType } from '@sage-bionetworks/synapse-client'
import {
  EntityHeader,
  SortBy,
  Direction,
} from '@sage-bionetworks/synapse-types'
import { convertToEntityType } from '@/utils/functions/EntityTypeUtils'
import { TreeNode } from '../hooks/useTreeState'

const includeTypes: EntityType[] = [
  EntityType.folder,
  EntityType.file,
  EntityType.link,
  EntityType.recordset,
]

export const ChildLoader: React.FC<{
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
