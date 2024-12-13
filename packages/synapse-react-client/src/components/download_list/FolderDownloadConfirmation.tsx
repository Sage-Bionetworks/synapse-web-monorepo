import { useAddQueryToDownloadList } from '../../synapse-queries/download/useDownloadList'
import { useGetEntityChildren } from '../../synapse-queries/entity/useGetEntityChildren'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { displayToast } from '../ToastMessage'
import { DownloadConfirmationUI } from './DownloadConfirmationUI'
import { displayFilesWereAddedToDownloadListSuccess } from './DownloadConfirmationUtils'
import { EntityType } from '@sage-bionetworks/synapse-types'

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
      includeTypes: [EntityType.FILE],
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
