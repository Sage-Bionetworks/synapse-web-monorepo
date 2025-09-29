import useGetEntityBundle from '@/synapse-queries/entity/useEntityBundle'
import { calculateFriendlyFileSize } from '@/utils/functions/calculateFriendlyFileSize'
import { Skeleton } from '@mui/material'
import { CellContext } from '@tanstack/react-table'
import { EntityIdAndVersionNumber } from './TableCellTypes'
import { FileHandleWithPreview } from './TableCellTypes'
import { OPTIMIZED_ENTITY_BUNDLE_QUERY_OPTIONS } from './optimizedBundleConfig'
import { ALL_ENTITY_BUNDLE_FIELDS } from '@sage-bionetworks/synapse-types'

export function FileEntitySizeCell<T extends EntityIdAndVersionNumber>(
  props: CellContext<T, unknown>,
) {
  const { row } = props
  const { data: bundle, isLoading } = useGetEntityBundle(
    row.original.entityId,
    row.original.versionNumber,
    ALL_ENTITY_BUNDLE_FIELDS,
    OPTIMIZED_ENTITY_BUNDLE_QUERY_OPTIONS,
  )

  if (isLoading) {
    return <Skeleton width={100} />
  }
  const file = bundle?.fileHandles.find(
    (file: FileHandleWithPreview) => file.isPreview !== true,
  )
  const friendlySize = file?.contentSize
    ? calculateFriendlyFileSize(file?.contentSize)
    : ''
  return <span>{friendlySize}</span>
}
