import { useGetEntityChildren } from '@/synapse-queries'
import { useGetDOIAssociation } from '@/synapse-queries/doi/useDOI'
import { calculateFriendlyFileSize } from '@/utils/functions/calculateFriendlyFileSize'
import {
  isDataset,
  isEntityRefCollectionView,
  isVersionableEntity,
} from '@/utils/functions/EntityTypeUtils'
import useGetEntityMetadata from '@/utils/hooks/useGetEntityMetadata'
import { Box, Link, Tooltip } from '@mui/material'
import { DoiObjectType, EntityType } from '@sage-bionetworks/synapse-client'
import { EntityRefCollectionView } from '@sage-bionetworks/synapse-types'
import { ReactNode, useState, useMemo } from 'react'
import CopyToClipboardString from '../../../CopyToClipboardString/CopyToClipboardString'
import { CitationsDialog } from './CitationsDialog'
import { maxCitationCount, useDataCiteUsage } from './useDataCiteUsage'
import { useGetMentions } from './useGetMentions'
import Linkify from '@/components/GenericCard/Linkify'
import { isTable } from '@/utils/functions/EntityTypeUtils'
import { BUNDLE_MASK_LAST_UPDATED_ON } from '@/utils/SynapseConstants'
import { useGetQueryResultBundleWithAsyncStatus } from '@/synapse-queries'
import { entityTypeToFriendlyName } from '@/utils/functions/EntityTypeUtils'
import { UserBadge } from '@/components/UserCard/UserBadge'
import { formatDate } from '@/utils/functions/DateFormatter'
import { InfoTwoTone } from '@mui/icons-material'
import dayjs from 'dayjs'
import {
  DATASET_CREATED_BY_TOOLTIP,
  INFO_ICON_SX,
  getTableModifiedOnTooltip,
  getTableModifiedOnAccessibleLabel,
  getTableLastRebuiltTooltip,
} from '../createdByModifiedByTooltips'

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
  const [dataCiteCitationsDialogOpen, setDataCiteCitationsDialogOpen] =
    useState(false)
  const [mentionsDialogOpen, setMentionsDialogOpen] = useState(false)
  const { data: entityChildrenResponse } = useGetEntityChildren(
    {
      parentId: entityId,
      includeTypes: Object.values(EntityType),
      includeTotalChildCount: true,
    },
    { enabled: isContainer },
  )

  const entity = bundle?.entity
  const isTableLike = !!entity && isTable(entity)
  const friendlyName = bundle ? entityTypeToFriendlyName(bundle.entityType) : ''

  // const queryBundleRequest = useMemo(
  //   () => ({
  //     entityId,
  //     query: {
  //       sql: `SELECT * FROM ${entityId}${versionNumber ? `.${versionNumber}` : ''} LIMIT 0`,
  //     },
  //     partMask: BUNDLE_MASK_LAST_UPDATED_ON,
  //     concreteType:
  //       'org.sagebionetworks.repo.model.table.QueryBundleRequest' as const,
  //   }),
  //   [entityId, versionNumber],
  // )
  // const { data: tableQueryResult } = useGetQueryResultBundleWithAsyncStatus(
  //   queryBundleRequest,
  //   { enabled: isTableLike },
  // )

  const { data: tableQueryResult } = useGetQueryResultBundleWithAsyncStatus(
    {
      entityId,
      query: {
        sql: `SELECT * FROM ${entityId}${versionNumber ? `.${versionNumber}` : ''} LIMIT 0`,
      },
      partMask: BUNDLE_MASK_LAST_UPDATED_ON,
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    },
    { enabled: !!(entity && isTable(entity)) },
  )

  const tableLastRebuilt = tableQueryResult?.responseBody?.lastUpdatedOn

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
      ? ((bundle.entity as EntityRefCollectionView).items ?? []).length
      : null

  const { data: mentions } = useGetMentions(entityId)
  const isMentions = !!mentions && mentions.length > 0
  return [
    {
      key: 'id',
      title: 'SynID',
      value: <CopyToClipboardString value={entityId} />,
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
      value: <CopyToClipboardString value={doi} href={doi} icon="rounded" />,
    },
    isDoiUsage && {
      key: 'citations',
      title: 'Citations',
      value: (
        <>
          <Link onClick={() => setDataCiteCitationsDialogOpen(true)}>
            {dataCiteUsage.citationCount.toLocaleString()}
            {dataCiteUsage.citationCount == maxCitationCount && '+'}
          </Link>
          <CitationsDialog
            open={dataCiteCitationsDialogOpen}
            onClose={() => setDataCiteCitationsDialogOpen(false)}
            citations={dataCiteUsage.citations}
          />
        </>
      ),
    },
    isMentions && {
      key: 'mentions',
      title: 'Mentions',
      value: (
        <>
          <Link onClick={() => setMentionsDialogOpen(true)}>
            {mentions.length.toLocaleString()}
          </Link>
          <CitationsDialog
            open={mentionsDialogOpen}
            onClose={() => setMentionsDialogOpen(false)}
            citations={mentions}
            title="Mentioned in"
          />
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
      value: <Linkify text={externalUrl} />,
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
    entity && {
      key: 'createdBy',
      title: 'Created By',
      value: (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <UserBadge userId={entity.createdBy} />
          <span>on {formatDate(dayjs(entity.createdOn))}</span>
          {isDataset(entity) && (
            <Tooltip title={DATASET_CREATED_BY_TOOLTIP}>
              <InfoTwoTone sx={INFO_ICON_SX} />
            </Tooltip>
          )}
        </Box>
      ),
    },
    entity && {
      key: 'modifiedBy',
      title: isTableLike ? 'Configuration Last Modified' : 'Modified By',
      value: (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <UserBadge userId={entity.modifiedBy} />
          <span>on {formatDate(dayjs(entity.modifiedOn))}</span>
          {isTableLike && (
            <Tooltip
              title={getTableModifiedOnTooltip(friendlyName)}
              aria-label={getTableModifiedOnAccessibleLabel(friendlyName)}
            >
              <InfoTwoTone sx={INFO_ICON_SX} />
            </Tooltip>
          )}
        </Box>
      ),
    },
    tableLastRebuilt && {
      key: 'lastRebuilt',
      title: 'Last Rebuilt',
      value: (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {formatDate(dayjs(tableLastRebuilt))}
          <Tooltip title={getTableLastRebuiltTooltip(friendlyName)}>
            <InfoTwoTone sx={INFO_ICON_SX} />
          </Tooltip>
        </Box>
      ),
    },
  ].filter(item => !!item) as EntityProperty[]
}
