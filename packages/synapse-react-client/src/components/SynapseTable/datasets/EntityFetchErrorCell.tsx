import { useGetEntity } from '@/synapse-queries/index'
import Tooltip from '@mui/material/Tooltip'
import { CellContext } from '@tanstack/react-table'
import { EntityIdAndVersionNumber } from '../../EntityFinder/details/view/table/TableCellTypes'
import IconSvg from '../../IconSvg/IconSvg'

export function EntityFetchErrorCell<T extends EntityIdAndVersionNumber>(
  props: CellContext<T, any>,
) {
  const { entityId, versionNumber } = props.row.original
  const { error, isError } = useGetEntity(entityId, versionNumber)

  let message = error?.reason

  if (error?.status === 403) {
    message = "You don't have permission to view this entity."
  } else if (error?.status === 404) {
    message = 'The entity or version does not exist. It may have been deleted.'
  }

  if (!isError) {
    return <></>
  } else {
    return (
      <Tooltip
        title={message ?? ''}
        placement="right"
        className="EntityBadgeTooltip"
      >
        <div className="EntityErrorRenderer">
          <IconSvg icon="warningOutlined" />
        </div>
      </Tooltip>
    )
  }
}
