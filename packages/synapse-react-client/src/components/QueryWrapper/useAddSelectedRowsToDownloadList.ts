import { useQueryContext } from '@/components/QueryContext'
import { useSelectedRowsAtomValue } from '@/components/QueryWrapper/TableRowSelectionState'
import { displayFilesWereAddedToDownloadListSuccess } from '@/components/download_list/DownloadConfirmationUtils'
import { displayToast } from '@/components/ToastMessage/ToastMessage'
import { useGetEntityQueryOptions } from '@/synapse-queries'
import {
  MAX_DOWNLOAD_LIST_BATCH_SIZE,
  useAddFileBatchToDownloadList,
} from '@/synapse-queries/download/useDownloadList'
import { useSynapseContext } from '@/utils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { Table } from '@sage-bionetworks/synapse-types'
import { useQueryClient } from '@tanstack/react-query'
import { useCallback } from 'react'
import {
  getDownloadListFileColumns,
  getDownloadListItems,
} from './downloadListFiles'

export const NO_FILES_IN_SELECTED_ROWS_MESSAGE =
  'The selected rows have no files to add to your Download List.'
export const TOO_MANY_SELECTED_ROWS_MESSAGE = `Select at most ${MAX_DOWNLOAD_LIST_BATCH_SIZE.toLocaleString()} files and datasets to add to your Download List at once.`
export const NO_NEW_FILES_ADDED_MESSAGE =
  'No new files were added to your Download List.'

/**
 * Adds the files and datasets of the selected rows of the current query to the Download List in one request, without
 * a confirmation step, and reports how many files the server added in a toast. The request is all or nothing, so at
 * most MAX_DOWNLOAD_LIST_BATCH_SIZE items can be added at once.
 *
 * Each row's item is chosen as for adding the whole result; see `getDownloadListFileColumns` and
 * `getDownloadListItems`.
 */
export function useAddSelectedRowsToDownloadList() {
  const {
    entityId,
    versionNumber,
    fileIdColumnName,
    fileVersionColumnName,
    queryMetadataQueryOptions,
  } = useQueryContext()
  const { downloadCartPageUrl } = useSynapseContext()
  const queryClient = useQueryClient()
  const getEntityQueryOptions = useGetEntityQueryOptions<Table>()
  const selectedRows = useSelectedRowsAtomValue()

  const { mutate, isPending } = useAddFileBatchToDownloadList({
    onSuccess: ({ numberOfFilesAdded }) =>
      numberOfFilesAdded > 0
        ? displayFilesWereAddedToDownloadListSuccess(
            downloadCartPageUrl,
            numberOfFilesAdded,
          )
        : displayToast(NO_NEW_FILES_ADDED_MESSAGE, 'warning'),
    onError: error => displayToast(error.reason, 'danger'),
  })

  const addSelectedRowsToDownloadList = useCallback(async () => {
    let items
    try {
      // The table and its columns decide which file each row holds, so they are loaded if not already cached.
      const [table, queryMetadata] = await Promise.all([
        queryClient.ensureQueryData(
          getEntityQueryOptions(entityId, versionNumber),
        ),
        queryClient.ensureQueryData(queryMetadataQueryOptions),
      ])
      const { columnModels, selectColumns } = queryMetadata.responseBody ?? {}
      items = getDownloadListItems(
        selectedRows,
        selectColumns,
        getDownloadListFileColumns(
          table,
          columnModels,
          fileIdColumnName,
          fileVersionColumnName,
        ),
      )
    } catch (error) {
      displayToast(
        error instanceof SynapseClientError ? error.reason : String(error),
        'danger',
      )
      return
    }
    if (items.length === 0) {
      displayToast(NO_FILES_IN_SELECTED_ROWS_MESSAGE, 'warning')
    } else if (items.length > MAX_DOWNLOAD_LIST_BATCH_SIZE) {
      displayToast(TOO_MANY_SELECTED_ROWS_MESSAGE, 'warning')
    } else {
      mutate(items)
    }
  }, [
    entityId,
    fileIdColumnName,
    fileVersionColumnName,
    getEntityQueryOptions,
    mutate,
    queryClient,
    queryMetadataQueryOptions,
    selectedRows,
    versionNumber,
  ])

  return { addSelectedRowsToDownloadList, isPending }
}
