import { Skeleton, Tooltip } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { CellContext } from '@tanstack/react-table'
import useGetEntityBundle from '../../../../../synapse-queries/entity/useEntityBundle'
import { displayToast } from '../../../../ToastMessage/index'
import { EntityFinderTableViewRowData } from '../DetailsView'
import { FileHandleWithPreview } from './TableCellTypes'

export function FileEntityMD5Cell(
  props: CellContext<EntityFinderTableViewRowData, unknown>,
) {
  const { row } = props
  const { data: bundle, isLoading: isLoadingEntityBundle } = useGetEntityBundle(
    row.original.entityId,
    row.original.versionNumber,
  )
  const { mutate: copyMd5ToClipboard } = useMutation({
    mutationFn: (md5: string) => navigator.clipboard.writeText(md5),
    onSuccess: () => displayToast('MD5 copied to the clipboard', 'success'),
  })
  if (isLoadingEntityBundle) {
    return <Skeleton width={200} />
  }
  const file = bundle?.fileHandles.find(
    (file: FileHandleWithPreview) => file.isPreview !== true,
  )
  if (file?.contentMd5 == undefined) {
    return <></>
  }

  return (
    <Tooltip title="Click to copy MD5 to your clipboard" placement="right">
      <button
        className="md5Button"
        aria-label="MD5"
        onClick={event => {
          event.stopPropagation()
          copyMd5ToClipboard(file?.contentMd5 ?? '')
        }}
      >
        {file?.contentMd5}
      </button>
    </Tooltip>
  )
}
