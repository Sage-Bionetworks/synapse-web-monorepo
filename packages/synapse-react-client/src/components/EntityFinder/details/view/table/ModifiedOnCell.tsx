import useGetEntityBundle from '@/synapse-queries/entity/useEntityBundle'
import { Skeleton } from '@mui/material'
import { CellContext } from '@tanstack/react-table'
import { DateCell } from './DateCell'
import { EntityIdAndVersionNumber } from './TableCellTypes'

/**
 * Renders 'modifiedOn' from the entity bundle.
 * @param props
 * @returns
 */
export function ModifiedOnCell<T extends EntityIdAndVersionNumber>(
  props: CellContext<T, any>,
) {
  const { row } = props
  const { data: bundle, isLoading } = useGetEntityBundle(
    row.original.entityId,
    row.original.versionNumber,
  )

  if (isLoading) {
    return <Skeleton width={200} />
  }

  return <DateCell {...props} cellData={bundle?.entity.modifiedOn} />
}
