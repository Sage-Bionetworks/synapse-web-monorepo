import SynapseClient from '@/synapse-client'
import {
  FileEntity,
  BatchFileRequest,
  FileHandleAssociateType,
} from '@sage-bionetworks/synapse-types'
import { useState, useEffect } from 'react'
import { useSynapseContext } from '../context'
import { isFileEntity, isExternalFileHandle } from '../types'

export type useIsExternalFileEntityProps = {
  entityId: string
}

export const useIsExternalFileEntity = ({
  entityId,
}: useIsExternalFileEntityProps) => {
  const { accessToken } = useSynapseContext()
  const [isExternal, setIsExternal] = useState<boolean>(false)
  useEffect(() => {
    const getEntity = async () => {
      try {
        const fileEntity = await SynapseClient.getEntity<FileEntity>(
          accessToken,
          entityId,
        )
        if (!isFileEntity(fileEntity)) {
          throw new Error(`File Entity expected but found ${fileEntity}`)
        }
        const batchFileRequest: BatchFileRequest = {
          requestedFiles: [
            {
              associateObjectId: entityId,
              associateObjectType: FileHandleAssociateType.FileEntity,
              fileHandleId: fileEntity.dataFileHandleId,
            },
          ],
          includeFileHandles: true,
          includePreSignedURLs: false,
          includePreviewPreSignedURLs: false,
        }
        const file = await SynapseClient.getFiles(batchFileRequest, accessToken)
        const externalFileHandle = file.requestedFiles[0].fileHandle
        if (externalFileHandle && isExternalFileHandle(externalFileHandle)) {
          setIsExternal(true)
        }
      } catch (e) {
        console.error('Error on getting external file handle = ', e)
      }
    }
    getEntity()
  }, [entityId, accessToken])

  return isExternal
}
