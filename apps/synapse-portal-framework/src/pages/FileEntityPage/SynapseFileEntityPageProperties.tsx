import { Box, SxProps } from '@mui/material'
import { EntityBundle, FileEntity } from '@sage-bionetworks/synapse-types'
import dayjs from 'dayjs'
import React from 'react'
import { SkeletonTable } from 'synapse-react-client'
import CopyToClipboardIcon from 'synapse-react-client/components/CopyToClipboardIcon'
import { EntityLink } from 'synapse-react-client/components/EntityLink'
import { StyledTableContainer } from 'synapse-react-client/components/styled/StyledTableContainer'
import { UserBadge } from 'synapse-react-client/components/UserCard/UserBadge'
import { calculateFriendlyFileSize } from 'synapse-react-client/utils/functions/calculateFriendlyFileSize'
import { formatDate } from 'synapse-react-client/utils/functions/DateFormatter'
import { getStorageLocationName } from 'synapse-react-client/utils/functions/FileHandleUtils'
import useGetEntityMetadata from 'synapse-react-client/utils/hooks/useGetEntityMetadata'

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
    case 'createdBy':
      if (!fileEntity.createdBy) return null
      content = (
        <>
          <UserBadge userId={fileEntity.createdBy} /> on{' '}
          {formatDate(dayjs(fileEntity.createdOn))}
        </>
      )
      break
    case 'modifiedBy':
      if (!fileEntity.modifiedBy) return null
      content = (
        <>
          <UserBadge userId={fileEntity.modifiedBy} /> on{' '}
          {formatDate(dayjs(fileEntity.modifiedOn))}
        </>
      )
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

  const selectedKeys = [
    { key: 'name', label: 'Filename' },
    { key: 'id', label: 'Synapse ID (SynID)' },
    { key: 'contentSize', label: 'Size' },
    { key: 'versionLabel', label: 'Version' },
    { key: 'contentMd5', label: 'MD5' },
    { key: 'storageLocationId', label: 'Storage Location' },
    { key: 'createdBy', label: 'Created by' },
    { key: 'modifiedBy', label: 'Last Modified by' },
  ]

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
