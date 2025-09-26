import useGetEntityBundle from '@/synapse-queries/entity/useEntityBundle'
import { useAddFileToDownloadList } from '@/synapse-queries/index'
import { useSynapseContext } from '@/utils/index'
import { IconButton, Tooltip } from '@mui/material'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { CellContext } from '@tanstack/react-table'
import { EntityIdAndVersionNumber } from './TableCellTypes'
import { displayFilesWereAddedToDownloadListSuccess } from '../../../../download_list/DownloadConfirmationUtils'
import IconSvg from '../../../../IconSvg/IconSvg'
import { displayToast } from '../../../../ToastMessage/index'

export function AddFileToDownloadListCell<T extends EntityIdAndVersionNumber>(
  props: CellContext<T, unknown>,
) {
  const { row } = props
  const { entityId, versionNumber } = row.original
  const { data: bundle } = useGetEntityBundle(entityId, versionNumber)

  const { downloadCartPageUrl } = useSynapseContext()

  const { mutate: addToDownloadList } = useAddFileToDownloadList({
    onSuccess: () => {
      displayFilesWereAddedToDownloadListSuccess(downloadCartPageUrl)
    },
    onError: error => {
      displayToast(error.reason, 'danger')
    },
  })
  if (bundle?.entityType !== EntityType.file) {
    return <></>
  }
  return (
    <Tooltip title="Add to Download Cart" placement="right">
      <IconButton
        sx={{ height: '35px', width: '35px' }}
        onClick={event => {
          addToDownloadList({ entityId, entityVersionNumber: versionNumber })
          event.stopPropagation()
        }}
      >
        <IconSvg icon="download" />
      </IconButton>
    </Tooltip>
  )
}
