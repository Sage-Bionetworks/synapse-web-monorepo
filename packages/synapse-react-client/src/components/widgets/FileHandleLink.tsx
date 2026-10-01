import React from 'react'
import SynapseClient from '@/synapse-client'
import { SynapseConstants } from '@/utils'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  BatchFileRequest,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'
import { useEffect, useState } from 'react'
import IconSvg from '../IconSvg/IconSvg'

type FileHandleLinkProps = {
  redirect?: boolean
  showDownloadIcon: boolean
  displayValue?: string
} & (
  | {
      /** Downloads the file handle as it is associated with a Synapse object. */
      fileHandleAssociation: FileHandleAssociation
      creatorFileHandleId?: never
    }
  | {
      fileHandleAssociation?: never
      /**
       * Downloads a file handle that is not associated with any object yet. Synapse only serves
       * such a file handle to the user that created it.
       */
      creatorFileHandleId: string
    }
)

export const FileHandleLink = (props: FileHandleLinkProps): React.ReactNode => {
  const {
    fileHandleAssociation,
    creatorFileHandleId,
    showDownloadIcon,
    redirect = false,
    displayValue,
  } = props
  const { accessToken } = useSynapseContext()
  const fileHandleId =
    fileHandleAssociation?.fileHandleId ?? creatorFileHandleId

  const [fileName, setFileName] = useState<string | undefined>()

  useEffect(() => {
    if (displayValue !== undefined) {
      return
    }
    const getFileName = async () => {
      if (fileHandleAssociation) {
        const batchFileRequest: BatchFileRequest = {
          requestedFiles: [fileHandleAssociation],
          includeFileHandles: true,
          includePreSignedURLs: false,
          includePreviewPreSignedURLs: false,
        }
        const batchFileResult = await SynapseClient.getFiles(
          batchFileRequest,
          accessToken,
        )
        setFileName(batchFileResult.requestedFiles[0].fileHandle?.fileName)
      } else {
        const fileHandle = await SynapseClient.getFileHandleById(
          creatorFileHandleId,
          accessToken,
        )
        setFileName(fileHandle.fileName)
      }
    }
    getFileName()
  }, [accessToken, displayValue, fileHandleAssociation, creatorFileHandleId])

  const getDownloadUrl = (): Promise<string> =>
    fileHandleAssociation
      ? SynapseClient.getActualFileHandleByIdURL(
          fileHandleAssociation.fileHandleId,
          accessToken,
          fileHandleAssociation.associateObjectType,
          fileHandleAssociation.associateObjectId,
          redirect,
        )
      : SynapseClient.getFileHandleByIdURL(creatorFileHandleId, accessToken)

  return (
    <button
      onClick={() => {
        if (accessToken) {
          getDownloadUrl()
            .then(url => {
              window.open(url, '_blank')
            })
            .catch(err => {
              console.error('Error on retrieving file handle url ', err)
            })
        }
      }}
      className={`SRC-primary-text-color ${SynapseConstants.SRC_SIGN_IN_CLASS}`}
      type="button"
      style={{ padding: 0 }}
    >
      {displayValue ?? fileName ?? fileHandleId}
      {showDownloadIcon && <IconSvg icon="download" />}
    </button>
  )
}
