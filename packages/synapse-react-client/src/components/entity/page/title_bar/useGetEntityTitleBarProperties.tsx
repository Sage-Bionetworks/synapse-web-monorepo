import { useGetEntityChildren } from '@/synapse-queries'
import { useGetDOIAssociation } from '@/synapse-queries/doi/useDOI'
import { calculateFriendlyFileSize } from '@/utils/functions/calculateFriendlyFileSize'
import {
  isEntityRefCollectionView,
  isVersionableEntity,
} from '@/utils/functions/EntityTypeUtils'
import { Box, Link } from '@mui/material'
import {
  EntityRefCollectionView,
  EntityType,
} from '@sage-bionetworks/synapse-types'
import { ReactNode, useState } from 'react'
import CopyToClipboardString from '../../../CopyToClipboardString/CopyToClipboardString'
import { HasAccessV2 } from '../../../HasAccess/HasAccessV2'
import { DoiObjectType } from '@sage-bionetworks/synapse-client'
import useGetEntityMetadata from '@/utils/hooks/useGetEntityMetadata'
import { maxCitationCount, useDataCiteUsage } from './useDataCiteUsage'
import { CitationsDialog } from './CitationsDialog'
import { useGetMentions } from './useGetMentions'

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
  const [citationsDialogOpen, setCitationsDialogOpen] = useState(false)
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
  const isDoiUsage = !!dataCiteUsage && dataCiteUsage.citationCount > 0
  const containerItems = entityChildrenResponse?.totalChildCount

  const datasetItems =
    bundle?.entity && isEntityRefCollectionView(bundle.entity)
      ? ((bundle?.entity as EntityRefCollectionView).items ?? []).length
      : null

  const { data: mentions } = useGetMentions(entityId)
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
    isDoiUsage && {
      key: 'citations',
      title: 'Citations',
      value: (
        <>
          <Link onClick={() => setCitationsDialogOpen(true)}>
            {dataCiteUsage.citationCount}
            {dataCiteUsage.citationCount == maxCitationCount && '+'}
          </Link>
          <CitationsDialog
            open={citationsDialogOpen}
            onClose={() => setCitationsDialogOpen(false)}
            citations={dataCiteUsage.citations}
          />
        </>
      ),
    },
    mentions &&
      mentions.length > 0 && {
        key: 'mentions',
        title: 'Mentions',
        value: (
          <>
            <Link onClick={() => setCitationsDialogOpen(true)}>
              {mentions.length}
            </Link>
            <CitationsDialog
              open={citationsDialogOpen}
              onClose={() => setCitationsDialogOpen(false)}
              citations={mentions}
              title="Mentioned by"
            />
          </>
        ),
      },
  ].filter(item => !!item) as EntityProperty[]
}
