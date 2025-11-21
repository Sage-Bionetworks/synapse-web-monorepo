'use no memo' // don't use react-compiler until MD5 test failure is resolved

import useGetEntityBundle from '@/synapse-queries/entity/useEntityBundle'
import { Skeleton, Tooltip } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { CellContext } from '@tanstack/react-table'
import { displayToast } from '../../../../ToastMessage/index'
import { EntityIdAndVersionNumber } from './TableCellTypes'
import { FileHandleWithPreview } from './TableCellTypes'
import { copyStringToClipboard } from '@/utils/functions/StringUtils'

export function FileEntityMD5Cell<T extends EntityIdAndVersionNumber>(
  props: CellContext<T, unknown>,
) {
  const { row } = props
  const { data: bundle, isLoading: isLoadingEntityBundle } = useGetEntityBundle(
    row.original.entityId,
    row.original.versionNumber,
  )
  const { mutate: copyMd5ToClipboard } = useMutation({
    mutationFn: (md5: string) => copyStringToClipboard(md5),
    onSuccess: () => displayToast('MD5 copied to the clipboard', 'success'),
  })
  if (isLoadingEntityBundle) {
    return <Skeleton width={100} />
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
