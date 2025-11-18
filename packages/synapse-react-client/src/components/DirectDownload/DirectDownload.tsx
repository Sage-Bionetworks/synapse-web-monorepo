import { getFiles } from '@/synapse-client/SynapseClient'
import { useGetFileBatch } from '@/synapse-queries/file/useFiles'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
import { implementsExternalFileHandleInterface } from '@/utils/types/IsType'
import { Tooltip } from '@mui/material'
import {
  BatchFileRequest,
  ExternalFileHandle,
  FileHandleAssociateType,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'
import { forwardRef } from 'react'
import { UAParser } from 'ua-parser-js'
import IconSvg, { IconSvgProps } from '../IconSvg/IconSvg'
import { TOOLTIP_DELAY_SHOW } from '../SynapseTable/SynapseTableConstants'

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
  const { accessToken } = useSynapseContext()
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

  const getDownloadLink = async () => {
    let preSignedURL
    // SWC-5907: opening in the file must be strictly done in the same click event process (Safari only).
    // https://stackoverflow.com/questions/6628949/window-open-popup-getting-blocked-during-click-event
    const parser = new UAParser()
    const isSafari = parser.getBrowser().name == 'Safari'
    let safariDownloadWindow: Window | null = null
    if (isSafari) {
      safariDownloadWindow = window.open(
        '',
        'Safari Download',
        'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,popup,width=600,height=200',
      )
      safariDownloadWindow!.document.body.innerHTML =
        'Downloading file on Safari...'
    }
    try {
      if (associatedObjectType === FileHandleAssociateType.TableEntity) {
        const files = await getTableEntityFileHandle(true)
        preSignedURL = files.requestedFiles[0].preSignedURL!
      } else {
        const file = (
          await getFiles(
            {
              requestedFiles: [fileHandleAssociation],
              includePreSignedURLs: true,
              includePreviewPreSignedURLs: false,
              includeFileHandles: false,
            },
            accessToken,
          )
        ).requestedFiles[0]
        preSignedURL = file.preSignedURL
      }
    } catch (e) {
      console.log('Fail to get file download link: ', e)
    }

    if (!preSignedURL) {
      safariDownloadWindow?.close()
      console.log('Fail to get file download link')
    } else {
      if (isSafari && safariDownloadWindow) {
        safariDownloadWindow.location = preSignedURL
        setTimeout(() => {
          if (safariDownloadWindow) {
            safariDownloadWindow.close()
          }
        }, 10000)
      } else {
        window.open(preSignedURL)
      }
      if (onClickCallback) {
        onClickCallback(isExternalFile!)
      }
    }
  }

  const getTableEntityFileHandle = (includePreSignedURLs: boolean = false) => {
    const fileHandleAssociationList: FileHandleAssociation[] = [
      {
        associateObjectId: associatedObjectId,
        associateObjectType: associatedObjectType,
        fileHandleId: fileHandleId,
      },
    ]
    const batchFileRequest: BatchFileRequest = {
      includeFileHandles: true,
      includePreSignedURLs: includePreSignedURLs,
      includePreviewPreSignedURLs: false,
      requestedFiles: fileHandleAssociationList,
    }
    return getFiles(batchFileRequest, accessToken)
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
