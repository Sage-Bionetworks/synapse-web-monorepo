import { useGetEntityChildren } from '@/synapse-queries'
import { useGetDOIAssociation } from '@/synapse-queries/doi/useDOI'
import { calculateFriendlyFileSize } from '@/utils/functions/calculateFriendlyFileSize'
import {
  isEntityRefCollectionView,
  isVersionableEntity,
} from '@/utils/functions/EntityTypeUtils'
import { Badge, Box, Link } from '@mui/material'
import {
  EntityRefCollectionView,
  EntityType,
} from '@sage-bionetworks/synapse-types'
import { ReactNode } from 'react'
import CopyToClipboardString from '../../../CopyToClipboardString/CopyToClipboardString'
import { HasAccessV2 } from '../../../HasAccess/HasAccessV2'
import { DoiObjectType } from '@sage-bionetworks/synapse-client'
import useGetEntityMetadata from '@/utils/hooks/useGetEntityMetadata'
import { useDataCiteUsage } from './useDataCiteUsage'
import { FileDownload, FormatQuote, Visibility } from '@mui/icons-material'

export type EntityProperty = {
  key: string
  title: string
  value: ReactNode
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
  const {
    entityBundle: bundle,
    fileHandle: dataFileHandle,
    downloadAlias,
    isContainer,
    fileHandleStorageInfo,
    uploadDestinationString,
  } = useGetEntityMetadata(entityId, versionNumber)

  const { data: entityChildrenResponse } = useGetEntityChildren(
    {
      parentId: entityId,
      includeTypes: Object.values(EntityType),
      includeTotalChildCount: true,
    },
    { enabled: isContainer },
  )

  // If this is the latest entity version, show the "versionless" DOI if it exists.
  const useFallbackVersionlessDOI =
    bundle &&
    !bundle.doiAssociation &&
    isVersionableEntity(bundle.entity) &&
    bundle.entity.isLatestVersion
  const { data: versionlessDOIAssociation } = useGetDOIAssociation(
    { id: entityId, version: undefined, type: DoiObjectType.ENTITY },
    {
      enabled: useFallbackVersionlessDOI,
    },
  )

  const size =
    dataFileHandle?.contentSize &&
    calculateFriendlyFileSize(dataFileHandle.contentSize)
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

  // If there is no version-specific DOI, fall back to the versionless DOI
  const doiAssociation = useFallbackVersionlessDOI
    ? versionlessDOIAssociation
    : bundle?.doiAssociation
  const { data: dataCiteUsage } = useDataCiteUsage(doiAssociation?.doiUri)
  const doi = doiAssociation && `https://doi.org/${doiAssociation?.doiUri}`
  const isDoiUsage =
    !!dataCiteUsage &&
    (dataCiteUsage.viewCount > 0 ||
      dataCiteUsage.downloadCount > 0 ||
      dataCiteUsage.citationCount > 0)
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
    isDoiUsage && {
      key: 'dataCiteUsage',
      title: 'DOI Usage',
      value: (
        <>
          {dataCiteUsage.citationCount > 0 && (
            <Badge
              badgeContent={dataCiteUsage.citationCount}
              color="primary"
              title="Citation Count"
            >
              <FormatQuote />
            </Badge>
          )}
          {dataCiteUsage.viewCount > 0 && (
            <Badge
              badgeContent={dataCiteUsage.viewCount}
              color="primary"
              title="View Count"
            >
              <Visibility />
            </Badge>
          )}
          {dataCiteUsage.downloadCount > 0 && (
            <Badge
              badgeContent={dataCiteUsage.downloadCount}
              color="primary"
              title="Download Count"
            >
              <FileDownload />
            </Badge>
          )}
        </>
      ),
    },
    md5 && {
      key: 'fileMd5',
      title: 'MD5',
      value: <CopyToClipboardString value={md5} />,
    },
    !isContainer &&
      storageLocation && {
        key: 'fileStorageLocation',
        title: 'Storage Location',
        value: storageLocation,
      },
    isContainer &&
      uploadDestinationString && {
        key: 'uploadDestination',
        title: 'Upload Destination',
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
