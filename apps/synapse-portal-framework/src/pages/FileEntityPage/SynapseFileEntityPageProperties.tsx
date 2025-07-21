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

  function renderValue(key: string): React.ReactNode {
    switch (key) {
      case 'id':
      case 'parentId':
        return (
          <>
            {fileEntity?.[key]}{' '}
            <CopyToClipboardIcon
              value={fileEntity?.[key] ?? ''}
              sx={{ marginTop: '-4px' }}
            />
          </>
        )
      case 'createdBy':
        return (
          <>
            <UserBadge userId={fileEntity?.createdBy} /> on{' '}
            {formatDate(dayjs(fileEntity?.createdOn))}
          </>
        )
      case 'modifiedBy':
        return (
          <>
            <UserBadge userId={fileEntity?.modifiedBy} /> on{' '}
            {formatDate(dayjs(fileEntity?.modifiedOn))}
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
        return <>{fileLocationName}</>

      case 'contentSize':
        return <>{calculateFriendlyFileSize(fileHandle?.contentSize)}</>

      default:
        return fileEntity?.[key] as React.ReactNode
    }
  }

  return (
    <StyledTableContainer sx={{ width: '100%' }}>
      <Table sx={{ width: '100%' }}>
        <TableBody>
          {selectedKeys?.map(({ key, label }) => (
            <TableRow
              key={key}
              sx={{ '.MuiTableCell-root': { borderBottom: 'none' } }}
            >
              <TableCell sx={{ width: '256px' }}>
                <Box
                  style={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#333',
                  }}
                >
                  {label}
                </Box>
              </TableCell>
              <TableCell>{renderValue(key)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}

export default SynapseFileEntityPageProperties
