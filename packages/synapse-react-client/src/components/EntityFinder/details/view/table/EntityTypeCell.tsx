import { EntityType } from '@sage-bionetworks/synapse-client'
import { CellContext } from '@tanstack/react-table'
import { EntityTypeIcon } from '../../../../EntityIcon'
import { EntityFinderTableViewRowData } from '../DetailsView'

export function EntityTypeCell(
  props: CellContext<EntityFinderTableViewRowData, EntityType>,
) {
  const { getValue } = props
  return (
    <EntityTypeIcon
      className="EntityFinderTableCellEntityIcon"
      type={getValue()}
    />
  )
}
