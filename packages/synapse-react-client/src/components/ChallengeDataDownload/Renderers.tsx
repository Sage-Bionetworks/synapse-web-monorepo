import React from 'react'
import { CellRendererProps } from './types'
import { calculateFriendlyFileSize } from '../../utils/functions/calculateFriendlyFileSize'
import { EntityIdAndVersionNumber } from '../EntityFinder/details/view/DetailsViewTableRenderers'
import { Skeleton } from '@mui/material'
import { useGetEntity, useGetEntityBundle } from '../../synapse-queries'
import {
  FileEntity,
  FileHandle,
  FileHandleAssociateType,
} from '@sage-bionetworks/synapse-types'
import DirectDownload from '../DirectDownload/DirectDownload'

type FileHandleWithPreview = FileHandle & {
  isPreview?: boolean
}

export function SizeRenderer<T extends EntityIdAndVersionNumber>(
  props: CellRendererProps<T>,
) {
  const { data: bundle, isLoading } = useGetEntityBundle(
    props.rowData.entityId,
    props.rowData.versionNumber,
  )

  if (isLoading) {
    return <Skeleton width={200} />
  }
  const file = bundle?.fileHandles.find(
    (file: FileHandleWithPreview) => file.isPreview !== true,
  )
  const friendlySize = file?.contentSize
    ? calculateFriendlyFileSize(file?.contentSize)
    : ''
  return <span>{friendlySize}</span>
}

export function DownloadRenderer<T extends EntityIdAndVersionNumber>(
  props: CellRendererProps<T>,
) {
  const { data: entity } = useGetEntity<FileEntity>(
    props.rowData.entityId,
    props.rowData.versionNumber,
  )
  if (!entity) {
    return <></>
  }
  return (
    <DirectDownload
      fileHandleId={entity?.dataFileHandleId}
      associatedObjectId={props.rowData.entityId}
      associatedObjectType={FileHandleAssociateType.FileEntity}
      stopPropagation={true}
    />
  )
}
