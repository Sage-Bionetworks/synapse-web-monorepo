import React from 'react'
import { Skeleton } from '@mui/material'
import { FileHandle } from '@sage-bionetworks/synapse-types'
import { calculateFriendlyFileSize } from '../../utils/functions/calculateFriendlyFileSize'
import { EntityIdAndVersionNumber } from '../EntityFinder/details/view/DetailsViewTableRenderers'
import { useGetEntityBundle } from '../../synapse-queries'
import FileEntityDirectDownload from '../DirectDownload/FileEntityDirectDownload'
import { CellRendererProps } from './types'

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
  return (
    <FileEntityDirectDownload
      entityId={props.rowData.entityId}
      entityVersionNumber={props.rowData.versionNumber}
      stopPropagation={true}
    />
  )
}
