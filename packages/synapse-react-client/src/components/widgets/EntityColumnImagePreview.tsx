import React from 'react'
import { useGetEntity } from '../../synapse-queries'
import { FileHandleAssociateType } from '@sage-bionetworks/synapse-types'
import { ImageFileHandle } from './ImageFileHandle'

type EntityColumnImagePreviewProps = {
  entityId: string
}

export const EntityColumnImagePreview = (
  props: EntityColumnImagePreviewProps,
) => {
  const { entityId } = props

  const { data: entity } = useGetEntity(entityId.toString())

  const isFileHandleDefined = entity && 'dataFileHandleId' in entity
  const fileHandleId = isFileHandleDefined
    ? (entity.dataFileHandleId as string)
    : undefined

  if (fileHandleId) {
    return (
      <ImageFileHandle
        fileHandleAssociation={{
          associateObjectId: entityId.toString(),
          associateObjectType: FileHandleAssociateType.FileEntity,
          fileHandleId: fileHandleId,
        }}
      />
    )
  } else {
    return <></>
  }
}
