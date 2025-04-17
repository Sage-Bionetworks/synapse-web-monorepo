import {
  useAddQueryToDownloadList,
  useGetQueryResultBundleWithAsyncStatus,
} from '@/synapse-queries'
import { SynapseConstants, useSynapseContext } from '@/utils'
import { getPrimaryKeyINFilter } from '@/utils/functions/QueryFilterUtils'
import { useMemo } from 'react'
import { useQueryContext } from '../QueryContext'
import {
  useHasSelectedRowsAtomValue,
  useRowSelectionPrimaryKeyAtomValue,
  useSelectedRowsAtomValue,
} from '../QueryWrapper/TableRowSelectionState'
import { useSuspenseGetQueryMetadata } from '../QueryWrapper/useGetQueryMetadata'
import { getFileColumnModelId } from '../SynapseTable/SynapseTableUtils'
import { displayToast } from '../ToastMessage'
import { DownloadConfirmationUI } from './DownloadConfirmationUI'
import { displayFilesWereAddedToDownloadListSuccess } from './DownloadConfirmationUtils'

type TableQueryDownloadConfirmationProps = {
  onClose: () => void
}

export function TableQueryDownloadConfirmation(
  props: TableQueryDownloadConfirmationProps,
) {
  const { onClose } = props
  const { getCurrentQueryRequest, fileIdColumnName, fileVersionColumnName } =
    useQueryContext()
  const { data: originalQueryMetadata } = useSuspenseGetQueryMetadata()
  const hasSelectedRows = useHasSelectedRowsAtomValue()
  const selectedRows = useSelectedRowsAtomValue()
  const rowSelectionPrimaryKey = useRowSelectionPrimaryKeyAtomValue()

  const downloadStatsQueryBundleRequest = useMemo(() => {
    const requestCopy = getCurrentQueryRequest()
    requestCopy.partMask =
      SynapseConstants.BUNDLE_MASK_QUERY_COUNT |
      SynapseConstants.BUNDLE_MASK_SUM_FILES_SIZE_BYTES
    // set the query.selectFileColumn
    if (fileIdColumnName && fileVersionColumnName) {
      // find the column model ID and set the parameters
      const fileIdColumnModel = originalQueryMetadata.columnModels?.find(
        col => col.name == fileIdColumnName,
      )
      const fileVersionColumnModel = originalQueryMetadata.columnModels?.find(
        col => col.name == fileVersionColumnName,
      )

      requestCopy.query.selectFileColumn = fileIdColumnModel
        ? Number(fileIdColumnModel.id)
        : undefined
      requestCopy.query.selectFileVersionColumn = fileVersionColumnModel
        ? Number(fileVersionColumnModel.id)
        : undefined
    } else {
      const fileColumnId = getFileColumnModelId(
        originalQueryMetadata.columnModels,
      )
      if (fileColumnId) {
        requestCopy.query.selectFileColumn = Number(fileColumnId)
      }
    }

    if (
      hasSelectedRows &&
      rowSelectionPrimaryKey &&
      originalQueryMetadata.selectColumns
    ) {
      const primaryKeyINFilter = getPrimaryKeyINFilter(
        rowSelectionPrimaryKey,
        selectedRows,
        originalQueryMetadata.selectColumns,
      )
      requestCopy.query.additionalFilters = [
        ...(requestCopy.query.additionalFilters || []),
        primaryKeyINFilter,
      ]
    }
    return requestCopy
  }, [
    originalQueryMetadata.columnModels,
    originalQueryMetadata.selectColumns,
    getCurrentQueryRequest,
    hasSelectedRows,
    rowSelectionPrimaryKey,
    selectedRows,
    fileIdColumnName,
    fileVersionColumnName,
  ])

  const { downloadCartPageUrl } = useSynapseContext()

  const { mutate: addToDownloadList, isPending: isAddingToDownloadCart } =
    useAddQueryToDownloadList({
      onSuccess: () => {
        displayFilesWereAddedToDownloadListSuccess(downloadCartPageUrl)
        onClose()
      },
      onError: error => {
        displayToast(error.reason, 'danger')
        onClose()
      },
    })

  const { data: downloadStatsQueryData, isLoading: isLoadingStats } =
    useGetQueryResultBundleWithAsyncStatus(downloadStatsQueryBundleRequest)

  const fileCount = downloadStatsQueryData?.responseBody?.queryCount ?? 0
  const fileSizeTotal = downloadStatsQueryData?.responseBody?.sumFileSizes
    ?.greaterThan
    ? undefined
    : downloadStatsQueryData?.responseBody?.sumFileSizes?.sumFileSizesBytes

  return (
    <DownloadConfirmationUI
      onAddToDownloadCart={() => {
        addToDownloadList({
          query: downloadStatsQueryBundleRequest?.query,
          concreteType:
            'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
        })
      }}
      fileCount={fileCount}
      fileSize={fileSizeTotal}
      isAddingToDownloadCart={isAddingToDownloadCart}
      isLoadingStats={isLoadingStats}
      onCancel={onClose}
    />
  )
}
