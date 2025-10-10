import { Box, SxProps } from '@mui/material'
import { EntityBundle, FileEntity } from '@sage-bionetworks/synapse-types'
import dayjs from 'dayjs'
import React from 'react'
import { SkeletonTable } from 'synapse-react-client'
import CopyToClipboardIcon from 'synapse-react-client/components/CopyToClipboardIcon'
import { EntityLink } from 'synapse-react-client/components/EntityLink'
import { StyledTableContainer } from 'synapse-react-client/components/styled/StyledTableContainer'
import { calculateFriendlyFileSize } from 'synapse-react-client/utils/functions/calculateFriendlyFileSize'
import { formatDate } from 'synapse-react-client/utils/functions/DateFormatter'
import { getStorageLocationName } from 'synapse-react-client/utils/functions/FileHandleUtils'
import useGetEntityMetadata from 'synapse-react-client/utils/hooks/useGetEntityMetadata'
import { usePortalContext } from '@/components/PortalContext'

type SynapseFileEntityPagePropertiesProps = {
  entityId: string
  versionNumber: number | undefined
}

type FilePropertyRowProps = {
  keyName: string
  label: string
  fileEntity: FileEntity
  fileHandle: EntityBundle['fileHandles'][number] | undefined
  storageLocationName?: string
}

const labelWidth = '256px'
const labelSxProps: SxProps = {
  fontSize: '14px',
  lineHeight: '20px',
  color: '#333',
}
const FilePropertyRow: React.FC<FilePropertyRowProps> = ({
  keyName,
  label,
  fileEntity,
  fileHandle,
  storageLocationName,
}) => {
  let content: React.ReactNode = null

  switch (keyName) {
    case 'id':
    case 'parentId':
      if (!fileEntity[keyName]) return null
      content = (
        <>
          {fileEntity[keyName]}{' '}
          <CopyToClipboardIcon
            value={fileEntity[keyName] ?? ''}
            sx={{ marginTop: '-4px' }}
          />
        </>
      )
      break
    case 'createdOn':
      if (!fileEntity.createdOn) return null
      content = <>{formatDate(dayjs(fileEntity.createdOn))}</>
      break
    case 'modifiedOn':
      if (!fileEntity.modifiedOn) return null
      content = <>{formatDate(dayjs(fileEntity.modifiedOn))}</>
      break
    case 'contentMd5':
      if (!fileHandle?.contentMd5) return null
      content = (
        <>
          {fileHandle.contentMd5}{' '}
          <CopyToClipboardIcon
            value={fileHandle.contentMd5}
            sx={{ marginTop: '-4px' }}
          />
        </>
      )
      break
    case 'storageLocationId':
      if (!storageLocationName) return null
      content = storageLocationName
      break
    case 'contentSize':
      if (!fileHandle?.contentSize) return null
      content = calculateFriendlyFileSize(fileHandle.contentSize)
      break
    default:
      if (!fileEntity[keyName]) return null
      content = fileEntity[keyName] as React.ReactNode
  }

  return (
    <tr key={keyName}>
      <td style={{ width: labelWidth }}>
        <Box sx={labelSxProps}>{label}</Box>
      </td>
      <td>{content}</td>
    </tr>
  )
}

const SynapseFileEntityPageProperties = ({
  entityId,
  versionNumber,
}: SynapseFileEntityPagePropertiesProps) => {
  const {
    fileHandle,
    storageLocationUploadDestination,
    entityBundle,
    projectEntity,
    isLoading,
  } = useGetEntityMetadata(entityId, versionNumber)

  const { fileEntityPageConfig } = usePortalContext()
  const {
    showContentSize = true,
    showContentMd5 = true,
    showStorageLocation = true,
    showModifiedOn = true,
  } = fileEntityPageConfig ?? {}

  const fileEntity = entityBundle?.entity as FileEntity | undefined

  const fileLocationName = fileHandle
    ? getStorageLocationName(fileHandle, storageLocationUploadDestination)
    : ''

  if (isLoading) {
    return <SkeletonTable numRows={9} />
  }

  if (!entityBundle || !fileEntity) {
    return null
  }

  const allKeys = [
    { key: 'name', label: 'Filename', show: true },
    { key: 'id', label: 'Synapse ID (SynID)', show: true },
    { key: 'contentSize', label: 'Size', show: showContentSize },
    { key: 'versionLabel', label: 'Version', show: true },
    { key: 'contentMd5', label: 'MD5', show: showContentMd5 },
    {
      key: 'storageLocationId',
      label: 'Storage Location',
      show: showStorageLocation,
    },
    { key: 'createdOn', label: 'Created on', show: true },
    { key: 'modifiedOn', label: 'Last modified on', show: showModifiedOn },
  ]

  const selectedKeys = allKeys.filter(({ show }) => show)

  return (
    <StyledTableContainer sx={{ width: '100%' }}>
      <table style={{ width: '100%' }}>
        <tbody>
          {selectedKeys.map(({ key, label }) => (
            <FilePropertyRow
              key={key}
              keyName={key}
              label={label}
              fileEntity={fileEntity}
              fileHandle={fileHandle}
              storageLocationName={fileLocationName}
            />
          ))}
          {projectEntity && (
            <tr>
              <td style={{ width: labelWidth }}>
                <Box sx={labelSxProps}>In Synapse Project</Box>
              </td>
              <td>
                <EntityLink entity={projectEntity} />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </StyledTableContainer>
  )
}

export default SynapseFileEntityPageProperties
