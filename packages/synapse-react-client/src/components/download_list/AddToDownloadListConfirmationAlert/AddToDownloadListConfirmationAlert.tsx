import { displayToast } from '@/components/index'
import { ErrorBanner } from '@/components/error/ErrorBanner'
import {
  useAddToDownloadList,
  useGetAddToDownloadListStats,
} from '@/synapse-queries/download/useDownloadList'
import { useSynapseContext } from '@/utils'
import { AddToDownloadListRequest } from '@sage-bionetworks/synapse-client'
import DownloadConfirmationUI from '../DownloadConfirmationUI'
import { displayFilesWereAddedToDownloadListSuccess } from '../DownloadConfirmationUtils'

export type AddToDownloadListConfirmationAlertProps = {
  /**
   * The "AddToDownloadListRequest" that would be used to add items to the download list.
   */
  addToDownloadListRequest: AddToDownloadListRequest
  /**
   * Invoked when the dialog is closed, either by cancelling or successfully adding to the download list.
   */
  onClose: () => void
}

/**
 * A component that displays a confirmation alert when adding multiple items to the download list though a container or
 * query.
 * @param props
 * @constructor
 */
function AddToDownloadListConfirmationAlert(
  props: AddToDownloadListConfirmationAlertProps,
) {
  const { addToDownloadListRequest, onClose } = props
  const { downloadCartPageUrl } = useSynapseContext()

  const {
    data,
    isLoading,
    error: statsError,
  } = useGetAddToDownloadListStats({
    concreteType:
      'org.sagebionetworks.repo.model.download.AddToDownloadListStatsRequest',
    request: addToDownloadListRequest,
  })

  const { mutate: addToDownloadList, isPending: isAddingToDownloadCart } =
    useAddToDownloadList({
      onSuccess: () => {
        displayFilesWereAddedToDownloadListSuccess(downloadCartPageUrl)
        onClose()
      },
      onError: error => {
        displayToast(error.reason, 'danger')
        onClose()
      },
    })

  const fileCount = data?.fileCount
  const fileSizeTotal = data?.fileSize

  if (statsError) {
    return <ErrorBanner error={statsError} />
  }

  return (
    <DownloadConfirmationUI
      onAddToDownloadCart={() => addToDownloadList(addToDownloadListRequest)}
      fileCount={fileCount}
      fileSize={fileSizeTotal}
      isAddingToDownloadCart={isAddingToDownloadCart}
      isLoadingStats={isLoading}
      onCancel={onClose}
    />
  )
}

export default AddToDownloadListConfirmationAlert
