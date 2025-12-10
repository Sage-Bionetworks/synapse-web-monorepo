import React from 'react'
import { useGetEntity } from '@/synapse-queries'
import { Box } from '@mui/system'
import { FileHandleAssociateType } from '@sage-bionetworks/synapse-types'
import { useState } from 'react'
import { ImageFileHandle } from './ImageFileHandle'

type EntityColumnImageProps = {
  entityId: string
}

export const EntityColumnImage = (
  props: EntityColumnImageProps,
): React.ReactNode => {
  const { entityId } = props
  const [isExpanded, setIsExpanded] = useState(false)

  const { data: entity } = useGetEntity(entityId.toString())

  const isFileHandleDefined = entity && 'dataFileHandleId' in entity
  const fileHandleId = isFileHandleDefined
    ? (entity.dataFileHandleId as string)
    : undefined

  if (fileHandleId) {
    return (
      <Box
        sx={{
          img: {
            height: isExpanded ? 'auto' : '100px',
          },
          display: 'grid',
          gridTemplateColumns: 'auto 15px',
        }}
      >
        <button onClick={() => setIsExpanded(!isExpanded)}>
          <ImageFileHandle
            fileHandleAssociation={{
              associateObjectId: entityId.toString(),
              associateObjectType: FileHandleAssociateType.FileEntity,
              fileHandleId: fileHandleId,
            }}
          />
        </button>
      </Box>
    )
  } else {
    return <></>
  }
}
