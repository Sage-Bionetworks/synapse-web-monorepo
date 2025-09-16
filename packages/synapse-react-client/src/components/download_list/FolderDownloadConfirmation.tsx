import {
  useAddQueryToDownloadList,
  useGetEntityChildren,
} from '@/synapse-queries'
import { useSynapseContext } from '@/utils'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { displayToast } from '../ToastMessage'
import { DownloadConfirmationUI } from './DownloadConfirmationUI'
import { displayFilesWereAddedToDownloadListSuccess } from './DownloadConfirmationUtils'

export type FolderDownloadConfirmationProps = {
  folderId: string
  fnClose: () => void
}

export function FolderDownloadConfirmation(
  props: FolderDownloadConfirmationProps,
) {
  const { folderId, fnClose } = props
  const { downloadCartPageUrl } = useSynapseContext()

  const { data: entityChildrenData, isLoading: isLoadingStats } =
    useGetEntityChildren({
      parentId: folderId,
      includeSumFileSizes: true,
      includeTotalChildCount: true,
      includeTypes: [EntityType.file],
    })

  const fileCount = entityChildrenData?.totalChildCount ?? 0
  const fileSizeTotal = entityChildrenData?.sumFileSizesBytes

  const { mutate: addToDownloadList, isPending: isAddingToDownloadCart } =
    useAddQueryToDownloadList({
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
      onAddToDownloadCart={() =>
        addToDownloadList({
          parentId: folderId,
          concreteType:
            'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
        })
      }
      fileCount={fileCount}
      fileSize={fileSizeTotal}
      isAddingToDownloadCart={isAddingToDownloadCart}
      isLoadingStats={isLoadingStats}
      onCancel={fnClose}
    />
  )
}

export default FolderDownloadConfirmation
