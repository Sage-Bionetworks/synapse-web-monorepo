import useGetEntityBundle from '@/synapse-queries/entity/useEntityBundle'
import { Skeleton } from '@mui/material'
import { CellContext } from '@tanstack/react-table'
import { EntityIdAndVersionNumber } from './TableCellTypes'
import { UserBadgeCell } from './UserBadgeCell'

/**
 * Renders 'modifiedBy' from the entity bundle.
 * @param props
 * @returns
 */
export function ModifiedByCell<T extends EntityIdAndVersionNumber>(
  props: CellContext<T, any>,
) {
  const { row } = props
  const { data: bundle, isLoading } = useGetEntityBundle(
    row.original.entityId,
    row.original.versionNumber,
  )

  if (isLoading) {
    return <Skeleton width={100} />
  }

  return <UserBadgeCell {...props} cellData={bundle?.entity.modifiedBy} />
}
