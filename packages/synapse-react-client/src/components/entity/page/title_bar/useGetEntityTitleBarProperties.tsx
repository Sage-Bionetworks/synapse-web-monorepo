import React from 'react'
import {
  useGetEntityBundle,
  useGetEntityChildren,
} from '../../../../synapse-queries'
import {
  EntityRefCollectionView,
  EntityType,
} from '@sage-bionetworks/synapse-types'
import {
  isContainerType,
  isEntityRefCollectionView,
  isVersionableEntity,
} from '../../../../utils/functions/EntityTypeUtils'
import {
  useGetDefaultUploadDestination,
  useGetUploadDestinationForStorageLocation,
} from '../../../../synapse-queries/file/useUploadDestination'
import {
  getDataFileHandle,
  getFileHandleStorageInfo,
  getUploadDestinationString,
} from '../../../../utils/functions/FileHandleUtils'
import { calculateFriendlyFileSize } from '../../../../utils/functions/calculateFriendlyFileSize'
import { Box, Link } from '@mui/material'
import { HasAccessV2 } from '../../../HasAccess/HasAccessV2'
import CopyToClipboardString from '../../../CopyToClipboardString/CopyToClipboardString'
import { useGetDOIAssociation } from '../../../../synapse-queries/doi/useDOI'

export type EntityProperty = {
  key: string
  title: string
  value: React.ReactNode
}

/**
 * This hook fetches all the entity metadata shown on the Entity page, and transforms the data into an ordered list of
 * render-able key-value pairs.
 * @param entityId
 * @param versionNumber
 */
export function useGetEntityTitleBarProperties(
  entityId: string,
  versionNumber?: number,
): EntityProperty[] {
  const { data: bundle } = useGetEntityBundle(entityId, versionNumber)

  const isContainer = !!(
    bundle?.entityType && isContainerType(bundle.entityType)
  )
  const dataFileHandle = bundle && getDataFileHandle(bundle)
  const parentId = bundle?.entity?.parentId
  const storageLocationId = dataFileHandle?.storageLocationId

  const { data: entityChildrenResponse } = useGetEntityChildren(
    {
      parentId: entityId,
      includeTypes: Object.values(EntityType),
      includeTotalChildCount: true,
    },
    { enabled: isContainer },
  )

  const { data: defaultUploadDestination } = useGetDefaultUploadDestination(
    entityId,
    { enabled: isContainer },
  )

  // Note: defaultUploadDestination can't be used for non-container entities
  // since the service checks that any entity in the path to the root has some
  // project setting with a storage location, but does not look at the file entity's
  // storage location id. Since a user can upload a file in any storage location
  // and put it anywhere in the hierarchy, the file entity storage location id
  // is where the file handle was actually uploaded. We must use a service that
  // takes the storage location id in the input to get the storage location for a
  // file entity.
  const { data: storageLocationUploadDestination } =
    useGetUploadDestinationForStorageLocation(parentId!, storageLocationId!, {
      enabled:
        !isContainer && parentId !== undefined && storageLocationId != null,
    })

  // If this is the latest entity version, show the "versionless" DOI if it exists.
  const useFallbackVersionlessDOI =
    bundle &&
    !bundle.doiAssociation &&
    isVersionableEntity(bundle.entity) &&
    bundle.entity.isLatestVersion
  const { data: versionlessDOIAssociation } = useGetDOIAssociation(
    entityId,
    undefined,
    'ENTITY',
    {
      enabled: useFallbackVersionlessDOI,
    },
  )

  const size =
    dataFileHandle?.contentSize &&
    calculateFriendlyFileSize(dataFileHandle.contentSize)
  const fileHandleStorageInfo =
    dataFileHandle &&
    getFileHandleStorageInfo(dataFileHandle, storageLocationUploadDestination)
  const storageLocation =
    fileHandleStorageInfo &&
    'location' in fileHandleStorageInfo &&
    fileHandleStorageInfo.location
  const endpoint =
    fileHandleStorageInfo &&
    'endpoint' in fileHandleStorageInfo &&
    fileHandleStorageInfo.endpoint
  const bucket =
    fileHandleStorageInfo &&
    'bucket' in fileHandleStorageInfo &&
    fileHandleStorageInfo.bucket
  const fileKey =
    fileHandleStorageInfo &&
    'fileKey' in fileHandleStorageInfo &&
    fileHandleStorageInfo.fileKey
  const externalUrl =
    fileHandleStorageInfo &&
    'url' in fileHandleStorageInfo &&
    fileHandleStorageInfo.url

  const md5 = dataFileHandle?.contentMd5
  const downloadAlias =
    bundle?.entity.name != bundle?.fileName && bundle?.fileName

  const uploadDestinationString =
    defaultUploadDestination &&
    getUploadDestinationString(defaultUploadDestination)

  // If there is no version-specific DOI, fall back to the versionless DOI
  const doiAssociation = useFallbackVersionlessDOI
    ? versionlessDOIAssociation
    : bundle?.doiAssociation
  const doi = doiAssociation && `https://doi.org/${doiAssociation?.doiUri}`

  const containerItems = entityChildrenResponse?.totalChildCount

  const datasetItems =
    bundle?.entity && isEntityRefCollectionView(bundle.entity)
      ? ((bundle?.entity as EntityRefCollectionView).items ?? []).length
      : null

  return [
    {
      key: 'id',
      title: 'SynID',
      value: <CopyToClipboardString value={entityId} />,
    },
    {
      key: 'access',
      title: 'Access',
      value: <HasAccessV2 entityId={entityId} />,
    },
    size && { key: 'fileSize', title: 'Size', value: size },
    containerItems != null && {
      key: 'containerItems',
      title: 'Items',
      value: containerItems.toLocaleString(),
    },
    datasetItems != null && {
      key: 'entityRefCollectionItems',
      title: 'Items',
      value: datasetItems.toLocaleString(),
    },
    doi && {
      key: 'doi',
      title: 'DOI',
      value: (
        <Link href={doi} rel={'noopener noreferrer'} target={'_blank'}>
          {doi}
        </Link>
      ),
    },
    md5 && {
      key: 'fileMd5',
      title: 'MD5',
      value: <CopyToClipboardString value={md5} />,
    },
    storageLocation && {
      key: 'fileStorageLocation',
      title: 'Storage Location',
      value: storageLocation,
    },
    uploadDestinationString && {
      key: 'uploadDestination',
      title: 'Storage Location',
      value: uploadDestinationString,
    },
    endpoint && {
      key: 'externalFileEndpoint',
      title: 'Endpoint',
      value: endpoint,
    },
    externalUrl && {
      key: 'externalUrl',
      title: 'URL',
      value: externalUrl,
    },
    bucket && { key: 'externalFileBucket', title: 'Bucket', value: bucket },
    fileKey && { key: 'externalFileKey', title: 'File Key', value: fileKey },
    downloadAlias && {
      key: 'fileAlias',
      title: 'Alias',
      value: (
        <>
          {'Name when downloaded will be: '}
          <Box sx={{ display: 'inline', fontFamily: 'monospace' }}>
            {downloadAlias}
          </Box>
        </>
      ),
    },
  ].filter(item => !!item) as EntityProperty[]
}
