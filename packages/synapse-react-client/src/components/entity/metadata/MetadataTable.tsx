import dayjs from 'dayjs'
import React from 'react'
import { formatDate } from '../../../utils/functions/DateFormatter'
import {
  entityTypeToFriendlyName,
  getVersionDisplay,
  isVersionableEntity,
} from '../../../utils/functions/EntityTypeUtils'
import {
  getDataFileHandle,
  getStorageLocationName,
} from '../../../utils/functions/FileHandleUtils'
import useGetEntityBundle from '../../../synapse-queries/entity/useEntityBundle'
import { UserBadge } from '../../UserCard/UserBadge'
import { useGetUploadDestinationForStorageLocation } from '../../../synapse-queries/file/useUploadDestination'

export type MetadataTableProps = {
  readonly entityId: string
  readonly versionNumber?: number
}

export const MetadataTable = ({
  entityId,
  versionNumber,
}: MetadataTableProps) => {
  const { data: entityBundle } = useGetEntityBundle(entityId, versionNumber)

  const isVersionable = entityBundle && isVersionableEntity(entityBundle.entity)

  const dataFileHandle = entityBundle
    ? getDataFileHandle(entityBundle)
    : undefined
  const parentId = entityBundle?.entity?.parentId
  const storageLocationId = dataFileHandle?.storageLocationId
  const { data: storageLocationUploadDestination } =
    useGetUploadDestinationForStorageLocation(parentId!, storageLocationId!, {
      enabled:
        parentId !== undefined &&
        storageLocationId != null,
    })

  let fileLocationName = undefined
  if (dataFileHandle) {
    fileLocationName = getStorageLocationName(
      dataFileHandle,
      storageLocationUploadDestination,
    )
  }

  return entityBundle ? (
    <table className="MetadataTable">
      <tbody>
        <tr className="MetadataTable__Row">
          <td className="MetadataTable__Row__Key">Name</td>
          <td className="MetadataTable__Row__Value">
            {entityBundle.entity?.name}
          </td>
        </tr>
        <tr className="MetadataTable__Row">
          <td className="MetadataTable__Row__Key">Type</td>
          <td className="MetadataTable__Row__Value">
            {entityTypeToFriendlyName(entityBundle.entityType)}
          </td>
        </tr>
        <tr className="MetadataTable__Row">
          <td className="MetadataTable__Row__Key">Synapse ID</td>
          <td className="MetadataTable__Row__Value">
            {entityBundle.entity?.id}
          </td>
        </tr>
        {isVersionable && (
          <tr className="MetadataTable__Row">
            <td className="MetadataTable__Row__Key">Version</td>
            <td className="MetadataTable__Row__Value">
              {getVersionDisplay(entityBundle.entity)}
            </td>
          </tr>
        )}
        {fileLocationName && (
          <tr className="MetadataTable__Row">
            <td className="MetadataTable__Row__Key">Storage</td>
            <td className="MetadataTable__Row__Value">{fileLocationName}</td>
          </tr>
        )}
        <tr className="MetadataTable__Row">
          <td className="MetadataTable__Row__Key"> Last Modified By</td>
          <td className="MetadataTable__Row__Value">
            <UserBadge userId={entityBundle.entity?.modifiedBy!} /> at{' '}
            {formatDate(dayjs(entityBundle.entity?.modifiedOn))}
          </td>
        </tr>
        <tr className="MetadataTable__Row">
          <td className="MetadataTable__Row__Key">Created By</td>
          <td className="MetadataTable__Row__Value">
            <UserBadge userId={entityBundle.entity?.createdBy!} /> at{' '}
            {formatDate(dayjs(entityBundle.entity?.createdOn))}
          </td>
        </tr>
      </tbody>
    </table>
  ) : null
}
