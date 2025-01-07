import { CellContext } from '@tanstack/react-table'
import FileEntityDirectDownload from '../../../../DirectDownload/FileEntityDirectDownload'
import { EntityFinderTableViewRowData } from '../DetailsView'

export function FileEntityDirectDownloadCell(
  props: CellContext<EntityFinderTableViewRowData, unknown>,
) {
  const { row } = props
  return (
    <FileEntityDirectDownload
      entityId={row.original.entityId}
      entityVersionNumber={row.original.versionNumber}
      stopPropagation={true}
    />
  )
}
