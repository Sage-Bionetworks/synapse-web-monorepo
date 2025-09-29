import EntityBadgeIcons from '@/components/EntityBadgeIcons'
import { EntityIdAndVersionNumber } from '@/components/EntityFinder/details/view/table/TableCellTypes'
import { CellContext } from '@tanstack/react-table'

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
      showHasWiki={true}
      showUnlink={true}
      canOpenModal={false}
    />
  )
}
