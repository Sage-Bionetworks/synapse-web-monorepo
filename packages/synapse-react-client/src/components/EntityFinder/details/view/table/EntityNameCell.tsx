import useGetEntityBundle from '@/synapse-queries/entity/useEntityBundle'
import { Skeleton } from '@mui/material'
import { CellContext } from '@tanstack/react-table'
import { EntityLink } from '../../../../EntityLink'
import { EntityIdAndVersionNumber } from './TableCellTypes'

export function EntityNameCell<T extends EntityIdAndVersionNumber>(
  props: CellContext<T, any>,
) {
  const { data: bundle, isLoading } = useGetEntityBundle(
    props.row.original.entityId,
    props.row.original.versionNumber,
  )
  if (isLoading) {
    return <Skeleton width={100} />
  }

  return bundle ? (
    <EntityLink
      className="EntityNameWithIconRenderer"
      entity={bundle.entity}
      link={false}
    />
  ) : (
    <></>
  )
}
