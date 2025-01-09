import { CellContext } from '@tanstack/react-table'
import { EntityBadgeIcons } from '../../../../EntityBadgeIcons/index'
import { EntityIdAndVersionNumber } from './TableCellTypes'

/**
 * Renders Entity Badges using the entity bundle.
 * @param props
 * @returns
 */
export function EntityBadgeIconsCell<T extends EntityIdAndVersionNumber>(
  props: CellContext<T, any>,
) {
  const { row } = props

  return (
    <EntityBadgeIcons
      entityId={row.original.entityId}
      versionNumber={row.original.versionNumber}
      showHasDiscussionThread={false}
      showHasWiki={false}
      showUnlink={false}
      canOpenModal={false}
    />
  )
}
