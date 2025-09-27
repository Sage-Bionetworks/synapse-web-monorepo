import useGetEntityBundle from '@/synapse-queries/entity/useEntityBundle'
import { useGetEntity } from '@/synapse-queries/index'
import { Skeleton } from '@mui/material'
import { CellContext } from '@tanstack/react-table'
import { EntityLink } from '../../../../EntityLink'
import { EntityIdAndVersionNumber } from './TableCellTypes'

export function ParentProjectCell<T extends EntityIdAndVersionNumber>(
  props: CellContext<T, any>,
) {
  const { data: entityBundle, isLoading: isLoadingBundle } = useGetEntityBundle(
    props.row.original.entityId,
    props.row.original.versionNumber,
  )
  const { data: project, isLoading: isLoadingProjectEntity } = useGetEntity(
    entityBundle?.path.path[1].id ?? '',
    undefined,
    { enabled: !!entityBundle },
  )

  if (isLoadingBundle || isLoadingProjectEntity) {
    return <Skeleton width={100} />
  }

  return project ? <EntityLink entity={project} /> : <></>
}
