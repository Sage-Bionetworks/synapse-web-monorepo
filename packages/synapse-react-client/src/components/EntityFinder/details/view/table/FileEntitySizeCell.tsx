import useGetEntityBundle from '@/synapse-queries/entity/useEntityBundle'
import { calculateFriendlyFileSize } from '@/utils/functions/calculateFriendlyFileSize'
import Skeleton from '@mui/material/Skeleton'
import { CellContext } from '@tanstack/react-table'
import { EntityFinderTableViewRowData } from '../DetailsView'
import { FileHandleWithPreview } from './TableCellTypes'

export function FileEntitySizeCell(
  props: CellContext<EntityFinderTableViewRowData, unknown>,
) {
  const { row } = props
  const { data: bundle, isLoading } = useGetEntityBundle(
    row.original.entityId,
    row.original.versionNumber,
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
