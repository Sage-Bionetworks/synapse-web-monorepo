import React from 'react'
import {
  useGetEntityBundle,
  useGetEntityChildren,
} from '../../../../utils/hooks/SynapseAPI'
import {
  EntityRefCollectionView,
  EntityType,
} from '../../../../utils/synapseTypes'
import {
  isContainerType,
  isEntityRefCollectionView,
  isVersionableEntity,
} from '../../../../utils/functions/EntityTypeUtils'
import { useGetDefaultUploadDestination } from '../../../../utils/hooks/SynapseAPI/file/useUploadDestination'
import {
  getDataFileHandle,
  getFileHandleStorageInfo,
  getUploadDestinationString,
} from '../../../../utils/functions/FileHandleUtils'
import { calculateFriendlyFileSize } from '../../../../utils/functions/calculateFriendlyFileSize'
import { Box, Link } from '@mui/material'
import { HasAccessV2 } from '../../../access_requirements/HasAccessV2'
import CopyToClipboardString from '../../../CopyToClipboardString'
import { useGetDOIAssociation } from '../../../../utils/hooks/SynapseAPI/doi/useDOI'

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

  const { data: entityChildrenResponse } = useGetEntityChildren(
    {
      parentId: entityId,
      includeTypes: Object.values(EntityType),
      includeTotalChildCount: true,
    },
    { enabled: !!(bundle?.entityType && isContainerType(bundle.entityType)) },
  )

  const { data: uploadDestination } = useGetDefaultUploadDestination(entityId, {
    enabled: !!(bundle?.entityType && isContainerType(bundle.entityType)),
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

  const dataFileHandle = bundle && getDataFileHandle(bundle)

  const size =
    dataFileHandle?.contentSize &&
    calculateFriendlyFileSize(dataFileHandle.contentSize)
  const fileHandleStorageInfo =
    dataFileHandle && getFileHandleStorageInfo(dataFileHandle)
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
    uploadDestination && getUploadDestinationString(uploadDestination)

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
