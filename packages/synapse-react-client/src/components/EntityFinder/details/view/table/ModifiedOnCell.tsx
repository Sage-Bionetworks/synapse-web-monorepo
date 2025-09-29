import useGetEntityBundle from '@/synapse-queries/entity/useEntityBundle'
import { Skeleton } from '@mui/material'
import { CellContext } from '@tanstack/react-table'
import { DateCell } from './DateCell'
import { EntityIdAndVersionNumber } from './TableCellTypes'
import { OPTIMIZED_ENTITY_BUNDLE_QUERY_OPTIONS } from './optimizedBundleConfig'
import { ALL_ENTITY_BUNDLE_FIELDS } from '@sage-bionetworks/synapse-types'

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
    ALL_ENTITY_BUNDLE_FIELDS,
    OPTIMIZED_ENTITY_BUNDLE_QUERY_OPTIONS,
  )

  if (isLoading) {
    return <Skeleton width={100} />
  }

  return <DateCell {...props} cellData={bundle?.entity.modifiedOn} />
}
