import React, { useMemo } from 'react'
import SynapseClient from '@/synapse-client'
import { useGetCreatorFileHandle } from '@/synapse-queries/file/useFileHandle'
import { useGetFileBatch } from '@/synapse-queries/file/useFiles'
import { SynapseConstants } from '@/utils'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  BatchFileRequest,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'
import { useMutation } from '@tanstack/react-query'
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
  const shouldLookUpFileName = displayValue === undefined

  const batchFileRequest = useMemo<BatchFileRequest>(
    () => ({
      requestedFiles: fileHandleAssociation ? [fileHandleAssociation] : [],
      includeFileHandles: true,
      includePreSignedURLs: false,
      includePreviewPreSignedURLs: false,
    }),
    [fileHandleAssociation],
  )
  const { data: batchFileResult } = useGetFileBatch(batchFileRequest, {
    enabled: shouldLookUpFileName && !!fileHandleAssociation,
  })
  const { data: creatorFileHandle } = useGetCreatorFileHandle(
    creatorFileHandleId ?? '',
    { enabled: shouldLookUpFileName && !!creatorFileHandleId },
  )
  const fileName = fileHandleAssociation
    ? batchFileResult?.requestedFiles[0].fileHandle?.fileName
    : creatorFileHandle?.fileName

  const { mutate: openFile } = useMutation({
    mutationFn: (): Promise<string> =>
      fileHandleAssociation
        ? SynapseClient.getActualFileHandleByIdURL(
            fileHandleAssociation.fileHandleId,
            accessToken,
            fileHandleAssociation.associateObjectType,
            fileHandleAssociation.associateObjectId,
            redirect,
          )
        : SynapseClient.getFileHandleByIdURL(creatorFileHandleId, accessToken),
    onSuccess: url => {
      window.open(url, '_blank')
    },
    onError: err => {
      console.error('Error on retrieving file handle url ', err)
    },
  })

  return (
    <button
      onClick={() => {
        if (accessToken) {
          openFile()
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
