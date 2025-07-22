import { Table, TableRow, TableCell, TableBody, Box } from '@mui/material'
import { EntityBundle, FileEntity } from '@sage-bionetworks/synapse-types'
import dayjs from 'dayjs'
import React from 'react'
import CopyToClipboardIcon from 'synapse-react-client/components/CopyToClipboardIcon'
import { StyledTableContainer } from 'synapse-react-client/components/styled/StyledTableContainer'
import { UserBadge } from 'synapse-react-client/components/UserCard/UserBadge'
import { useGetUploadDestinationForStorageLocation } from 'synapse-react-client/synapse-queries'
import { calculateFriendlyFileSize } from 'synapse-react-client/utils/functions/calculateFriendlyFileSize'
import { formatDate } from 'synapse-react-client/utils/functions/DateFormatter'
import { getStorageLocationName } from 'synapse-react-client/utils/functions/FileHandleUtils'

type SynapseFileEntityPagePropertiesProps = {
  entityBundle: EntityBundle | undefined
}

type FilePropertyValueProps = {
  fileEntity: FileEntity
  fileHandle: EntityBundle['fileHandles'][number] | undefined
  keyName: string
  storageLocationName?: string
}

const FilePropertyValue: React.FC<FilePropertyValueProps> = ({
  fileEntity,
  fileHandle,
  keyName,
  storageLocationName,
}) => {
  switch (keyName) {
    case 'id':
    case 'parentId':
      return (
        <>
          {fileEntity[keyName]}{' '}
          <CopyToClipboardIcon
            value={fileEntity[keyName] ?? ''}
            sx={{ marginTop: '-4px' }}
          />
        </>
      )
    case 'createdBy':
      return (
        <>
          <UserBadge userId={fileEntity.createdBy} /> on{' '}
          {formatDate(dayjs(fileEntity.createdOn))}
        </>
      )
    case 'modifiedBy':
      return (
        <>
          <UserBadge userId={fileEntity.modifiedBy} /> on{' '}
          {formatDate(dayjs(fileEntity.modifiedOn))}
        </>
      )
    case 'contentMd5':
      return (
        <>
          {fileHandle?.contentMd5}{' '}
          <CopyToClipboardIcon
            value={fileHandle?.contentMd5 ?? ''}
            sx={{ marginTop: '-4px' }}
          />
        </>
      )
    case 'storageLocationId':
      return <>{storageLocationName}</>
    case 'contentSize':
      return <>{calculateFriendlyFileSize(fileHandle?.contentSize)}</>
    default:
      return <>{fileEntity[keyName] as React.ReactNode}</>
  }
}

const SynapseFileEntityPageProperties = ({
  entityBundle,
}: SynapseFileEntityPagePropertiesProps) => {
  const fileEntity = entityBundle?.entity as FileEntity | undefined
  const fileHandle = entityBundle?.fileHandles?.find(
    fileHandle => fileEntity && fileHandle.id === fileEntity.dataFileHandleId,
  )
  const parentId = fileEntity?.parentId
  const storageLocationId = fileHandle?.storageLocationId

  const { data: storageLocationUploadDestination } =
    useGetUploadDestinationForStorageLocation(
      parentId ?? '',
      storageLocationId ?? -1,
      {
        enabled: parentId !== undefined && storageLocationId != null,
      },
    )

  if (!entityBundle || !fileEntity) {
    return null
  }

  let fileLocationName: string | undefined = undefined
  if (fileHandle) {
    fileLocationName = getStorageLocationName(
      fileHandle,
      storageLocationUploadDestination,
    )
  }

  const selectedKeys = [
    { key: 'name', label: 'Filename' },
    { key: 'id', label: 'Synapse ID (SynID)' },
    { key: 'contentSize', label: 'Size' },
    { key: 'versionLabel', label: 'Version' },
    { key: 'contentMd5', label: 'MD5' },
    { key: 'storageLocationId', label: 'Storage Location' },
    { key: 'parentId', label: 'Contained in Project' },
    { key: 'createdBy', label: 'Created by' },
    { key: 'modifiedBy', label: 'Last Modified by' },
  ]

  return (
    <StyledTableContainer sx={{ width: '100%' }}>
      <table style={{ width: '100%' }}>
        <tbody>
          {selectedKeys?.map(({ key, label }) => (
            <tr key={key}>
              <td style={{ width: '256px' }}>
                <Box
                  style={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#333',
                  }}
                >
                  {label}
                </Box>
              </td>
              <td>
                <FilePropertyValue
                  keyName={key}
                  fileEntity={fileEntity}
                  fileHandle={fileHandle}
                  storageLocationName={fileLocationName}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledTableContainer>
  )
}

export default SynapseFileEntityPageProperties
