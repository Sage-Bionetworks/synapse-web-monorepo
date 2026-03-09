import {
  useAddToDownloadList,
  useGetAddToDownloadListStats,
} from '@/synapse-queries'
import { useSynapseContext } from '@/utils'
import { AddToDownloadListRequest } from '@sage-bionetworks/synapse-client'
import { useMemo } from 'react'
import { displayToast } from '../ToastMessage'
import { DownloadConfirmationUI } from './DownloadConfirmationUI'
import { displayFilesWereAddedToDownloadListSuccess } from './DownloadConfirmationUtils'

export type FolderDownloadConfirmationProps = {
  folderId: string
  fnClose: () => void
}

/**
 * @deprecated use AddToDownloadListConfirmationAlert instead
 */
export function FolderDownloadConfirmation(
  props: FolderDownloadConfirmationProps,
) {
  const { folderId, fnClose } = props
  const { downloadCartPageUrl } = useSynapseContext()

  const addToDownloadListRequest: AddToDownloadListRequest = useMemo(
    () => ({
      parentId: folderId,
      concreteType:
        'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
      recursive: true,
    }),
    [folderId],
  )

  const { data: statsData, isLoading: isLoadingStats } =
    useGetAddToDownloadListStats({
      concreteType:
        'org.sagebionetworks.repo.model.download.AddToDownloadListStatsRequest',
      request: addToDownloadListRequest,
    })

  const fileCount = statsData?.fileCount
  const fileSizeTotal = statsData?.fileSize

  const { mutate: addToDownloadList, isPending: isAddingToDownloadCart } =
    useAddToDownloadList({
      onSuccess: () => {
        displayFilesWereAddedToDownloadListSuccess(downloadCartPageUrl)
        fnClose()
      },
      onError: error => {
        displayToast(error.reason, 'danger')
        fnClose()
      },
    })

  return (
    <DownloadConfirmationUI
      onAddToDownloadCart={() => addToDownloadList(addToDownloadListRequest)}
      fileCount={fileCount}
      fileSize={fileSizeTotal}
      isAddingToDownloadCart={isAddingToDownloadCart}
      isLoadingStats={isLoadingStats}
      onCancel={fnClose}
    />
  )
}

export default FolderDownloadConfirmation
