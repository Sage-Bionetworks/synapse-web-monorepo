import React, { useMemo } from 'react'
import { SynapseConstants, useSynapseContext } from '../../utils'
import {
  useAddQueryToDownloadList,
  useGetQueryResultBundleWithAsyncStatus,
} from '../../synapse-queries'
import { displayToast } from '../ToastMessage'
import { DownloadConfirmationUI } from './DownloadConfirmationUI'
import { useQueryContext } from '../QueryContext'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'
import { displayFilesWereAddedToDownloadListSuccess } from './DownloadConfirmationUtils'
import { getPrimaryKeyINFilter } from '../../utils/functions/QueryFilterUtils'
import { getFileColumnModelId } from '../SynapseTable/SynapseTableUtils'

export function TableQueryDownloadConfirmation() {
  const {
    data,
    getCurrentQueryRequest,
    hasSelectedRows,
    selectedRows,
    rowSelectionPrimaryKey,
  } = useQueryContext()
  const { setShowDownloadConfirmation } = useQueryVisualizationContext()
  const queryBundleRequest = useMemo(() => {
    const requestCopy = getCurrentQueryRequest()
    requestCopy.partMask =
      SynapseConstants.BUNDLE_MASK_QUERY_COUNT |
      SynapseConstants.BUNDLE_MASK_SUM_FILES_SIZE_BYTES

    const fileColumnId = getFileColumnModelId(data?.columnModels)
    if (fileColumnId) {
      requestCopy.query.selectFileColumn = Number(fileColumnId)
    }
    if (hasSelectedRows && rowSelectionPrimaryKey && data?.columnModels) {
      requestCopy.query.additionalFilters = [
        ...(requestCopy.query.additionalFilters || []),
        getPrimaryKeyINFilter(
          rowSelectionPrimaryKey,
          selectedRows,
          data.columnModels,
        ),
      ]
    }
    return requestCopy
  }, [
    data?.columnModels,
    getCurrentQueryRequest,
    hasSelectedRows,
    rowSelectionPrimaryKey,
    selectedRows,
  ])
  const { downloadCartPageUrl } = useSynapseContext()

  function onClose() {
    setShowDownloadConfirmation(false)
  }

  const { mutate: addToDownloadList, isLoading: isAddingToDownloadCart } =
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

  const { data: queryResultResponse, isLoading: isLoadingStats } =
    useGetQueryResultBundleWithAsyncStatus(queryBundleRequest)

  const fileCount = queryResultResponse?.responseBody?.queryCount ?? 0
  const fileSizeTotal = queryResultResponse?.responseBody?.sumFileSizes
    ?.greaterThan
    ? undefined
    : queryResultResponse?.responseBody?.sumFileSizes?.sumFileSizesBytes

  return (
    <DownloadConfirmationUI
      onAddToDownloadCart={() =>
        addToDownloadList({
          query: queryBundleRequest?.query,
          concreteType:
            'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
        })
      }
      fileCount={fileCount}
      fileSize={fileSizeTotal}
      isAddingToDownloadCart={isAddingToDownloadCart}
      isLoadingStats={isLoadingStats}
      onCancel={onClose}
    />
  )
}
