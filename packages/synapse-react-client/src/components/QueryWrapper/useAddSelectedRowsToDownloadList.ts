import { useQueryContext } from '@/components/QueryContext'
import { useSelectedRowsAtomValue } from '@/components/QueryWrapper/TableRowSelectionState'
import { useGetQueryMetadata } from '@/components/QueryWrapper/useGetQueryMetadata'
import { getFileColumnModelId } from '@/components/SynapseTable/SynapseTableUtils'
import { displayFilesWereAddedToDownloadListSuccess } from '@/components/download_list/DownloadConfirmationUtils'
import { displayToast } from '@/components/ToastMessage/ToastMessage'
import { useGetEntity } from '@/synapse-queries'
import { useAddFileBatchToDownloadList } from '@/synapse-queries/download/useDownloadList'
import { useSynapseContext } from '@/utils'
import { isDataset, isEntityView } from '@/utils/functions/EntityTypeUtils'
import { DownloadListItem, Row, Table } from '@sage-bionetworks/synapse-types'
import { useCallback } from 'react'

type ItemColumns = {
  fileColumnIndex: number
  versionColumnIndex: number
  rowsAreEntities: boolean
}

function getDownloadListItem(
  row: Row,
  columns: ItemColumns,
): DownloadListItem | undefined {
  const { fileColumnIndex, versionColumnIndex, rowsAreEntities } = columns
  // As on the server, a view or dataset row is itself the file when no file column is selected, and its row version
  // is the file version when no version column is named.
  const fileEntityId =
    fileColumnIndex >= 0
      ? row.values[fileColumnIndex]
      : rowsAreEntities && row.rowId != null
        ? `syn${row.rowId}`
        : null
  if (!fileEntityId) {
    return undefined
  }
  if (versionColumnIndex >= 0) {
    const version = row.values[versionColumnIndex]
    return {
      fileEntityId,
      versionNumber: version == null ? undefined : Number(version),
    }
  }
  return {
    fileEntityId,
    versionNumber: rowsAreEntities ? row.versionNumber : undefined,
  }
}

/**
 * Adds the files and datasets of the selected rows of the current query to the Download List, without a confirmation
 * step, and reports the outcome in a toast.
 *
 * Each item is the entity in the row's file column (`fileIdColumnName`, else the table's file column), at the version
 * in `fileVersionColumnName`. Without a version column, rows of views and datasets keep their row version and other
 * tables' rows get no version, which adds the current version. Rows without a file are skipped, and an item selected
 * in several rows is added once.
 */
export function useAddSelectedRowsToDownloadList() {
  const { entityId, versionNumber, fileIdColumnName, fileVersionColumnName } =
    useQueryContext()
  const { downloadCartPageUrl } = useSynapseContext()
  const { data: entity } = useGetEntity<Table>(entityId, versionNumber)
  const { data: queryMetadata } = useGetQueryMetadata()
  const selectedRows = useSelectedRowsAtomValue()

  const { mutate, isPending } = useAddFileBatchToDownloadList({
    onSuccess: () =>
      displayFilesWereAddedToDownloadListSuccess(downloadCartPageUrl),
    onError: error => displayToast(error.reason, 'danger'),
  })

  const addSelectedRowsToDownloadList = useCallback(() => {
    const columnModels = queryMetadata?.columnModels
    const selectColumns = queryMetadata?.selectColumns ?? []
    const fileColumnId = getFileColumnModelId(columnModels)
    const fileColumnName =
      fileIdColumnName ??
      columnModels?.find(column => column.id === fileColumnId)?.name
    const columns: ItemColumns = {
      fileColumnIndex: selectColumns.findIndex(
        column =>
          fileColumnName !== undefined && column.name === fileColumnName,
      ),
      versionColumnIndex: selectColumns.findIndex(
        column =>
          fileVersionColumnName !== undefined &&
          column.name === fileVersionColumnName,
      ),
      rowsAreEntities:
        entity !== undefined && (isEntityView(entity) || isDataset(entity)),
    }
    const items = new Map<string, DownloadListItem>()
    for (const row of selectedRows) {
      const item = getDownloadListItem(row, columns)
      if (item) {
        items.set(`${item.fileEntityId}.${item.versionNumber ?? ''}`, item)
      }
    }
    mutate([...items.values()])
  }, [
    entity,
    fileIdColumnName,
    fileVersionColumnName,
    mutate,
    queryMetadata?.columnModels,
    queryMetadata?.selectColumns,
    selectedRows,
  ])

  return { addSelectedRowsToDownloadList, isPending }
}
