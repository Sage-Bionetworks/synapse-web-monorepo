import { useGetFileBatch } from '@/synapse-queries/file/useFiles'
import { implementsExternalFileHandleInterface } from '@/utils/types/IsType'
import { Tooltip } from '@mui/material'
import {
  ExternalFileHandle,
  FileHandleAssociateType,
} from '@sage-bionetworks/synapse-types'
import { forwardRef } from 'react'
import IconSvg, { IconSvgProps } from '../IconSvg/IconSvg'
import { TOOLTIP_DELAY_SHOW } from '../SynapseTable/SynapseTableConstants'
import { useDirectDownloadHandler } from '@/utils/hooks/useDirectDownloadHandler'

export type DirectFileDownloadProps = {
  associatedObjectId: string
  associatedObjectType: FileHandleAssociateType
  fileHandleId: string
  displayFileName?: boolean
  onClickCallback?: (isExternalLink: boolean) => void // callback if you want to know when the link was clicked
  stopPropagation?: boolean
  iconSvgPropOverrides?: Partial<IconSvgProps>
}

type DirectDownloadIconProps = {
  isExternalFile?: boolean
  hasFileAccess: boolean
  onClick?: (isExternalFile: boolean) => void
  getDownloadLink: () => Promise<void>
  stopPropagation: boolean
  externalURL?: string
  displayFileName: boolean
  fileName?: string
  iconSvgPropOverrides?: Partial<IconSvgProps>
}

const DirectDownloadIcon = forwardRef<
  HTMLButtonElement,
  DirectDownloadIconProps
>(function DirectDownloadIcon(props: DirectDownloadIconProps, ref) {
  const {
    isExternalFile,
    onClick,
    getDownloadLink,
    stopPropagation,
    externalURL,
    hasFileAccess,
    displayFileName,
    fileName,
    iconSvgPropOverrides = {},
  } = props
  if (isExternalFile) {
    return (
      <button
        ref={ref}
        className={'btn-download-icon'}
        onClick={event => {
          if (onClick) {
            onClick(isExternalFile)
            if (stopPropagation) event.stopPropagation()
          }
        }}
      >
        <a
          className="ignoreLink"
          rel="noreferrer"
          href={externalURL}
          target="_blank"
        >
          <IconSvg icon="openInNewWindow" {...iconSvgPropOverrides} />
        </a>
      </button>
    )
  }
  if (hasFileAccess) {
    return (
      <button
        ref={ref}
        className={'btn-download-icon'}
        onClick={event => {
          getDownloadLink()
          if (stopPropagation) event.stopPropagation()
        }}
      >
        <IconSvg icon="download" {...iconSvgPropOverrides} />
        {displayFileName && fileName ? fileName : ''}
      </button>
    )
  }
  return <></>
})

function DirectDownload(props: DirectFileDownloadProps) {
  const {
    associatedObjectId,
    associatedObjectType,
    fileHandleId,
    displayFileName = false,
    onClickCallback,
    stopPropagation = false,
    iconSvgPropOverrides,
  } = props

  const fileHandleAssociation = {
    fileHandleId: fileHandleId,
    associateObjectId: associatedObjectId,
    associateObjectType: associatedObjectType,
  }

  // Get file handle data to ensure we have access / display information
  const { data } = useGetFileBatch({
    requestedFiles: [fileHandleAssociation],
    includeFileHandles: true,
    // don't get the presigned URL with this query, it may expire before the user clicks the download button
    includePreSignedURLs: false,
    includePreviewPreSignedURLs: false,
  })

  const fileHandle = data?.requestedFiles[0]?.fileHandle
  const hasFileAccess = Boolean(fileHandle)
  const fileName = fileHandle?.fileName
  const isExternalFile = fileHandle
    ? implementsExternalFileHandleInterface(fileHandle)
    : undefined
  const externalURL: string | undefined = fileHandle
    ? (fileHandle as ExternalFileHandle).externalURL
    : undefined

  const { downloadFile } = useDirectDownloadHandler()

  const getDownloadLink = async () => {
    await downloadFile({
      fileHandleId,
      associatedObjectId,
      associatedObjectType,
    })

    if (onClickCallback) {
      onClickCallback(isExternalFile!)
    }
  }

  return (
    <Tooltip
      title={
        isExternalFile
          ? 'Navigate to external link'
          : 'Download this file individually'
      }
      enterNextDelay={TOOLTIP_DELAY_SHOW}
      placement="left"
    >
      <DirectDownloadIcon
        isExternalFile={isExternalFile}
        hasFileAccess={hasFileAccess}
        onClick={onClickCallback}
        getDownloadLink={getDownloadLink}
        stopPropagation={stopPropagation}
        externalURL={externalURL}
        displayFileName={displayFileName}
        fileName={fileName}
        iconSvgPropOverrides={iconSvgPropOverrides}
      />
    </Tooltip>
  )
}

export default DirectDownload
