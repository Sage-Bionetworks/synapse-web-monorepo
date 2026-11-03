import { getFileColumnModelId } from '@/components/SynapseTable/SynapseTableUtils'
import { isDataset, isEntityView } from '@/utils/functions/EntityTypeUtils'
import {
  ColumnModel,
  DownloadListItem,
  Row,
  SelectColumn,
  Table,
} from '@sage-bionetworks/synapse-types'

/** Where the files of a query's rows are, for adding them to the Download List. */
export type DownloadListFileColumns = {
  /** The column with each row's file or dataset: `fileIdColumnName`, else the table's file column. */
  fileColumn?: ColumnModel
  /** The column with each row's file version, when `fileVersionColumnName` names one. */
  fileVersionColumn?: ColumnModel
  /**
   * True for views and datasets, whose rows are the entities themselves. Without a file column a row's ID is its file,
   * and without a version column its row version is the file version. The server reads other tables' files at their
   * current version unless a version column is named.
   */
  rowsAreEntities: boolean
}

/**
 * Finds the file and version columns of a query, so that adding the whole result and adding selected rows pick the
 * same files.
 */
export function getDownloadListFileColumns(
  table: Table | undefined,
  columnModels: ColumnModel[] | undefined,
  fileIdColumnName: string | undefined,
  fileVersionColumnName: string | undefined,
): DownloadListFileColumns {
  const defaultFileColumnId = getFileColumnModelId(columnModels)
  return {
    fileColumn: columnModels?.find(column =>
      fileIdColumnName === undefined
        ? column.id === defaultFileColumnId
        : column.name === fileIdColumnName,
    ),
    fileVersionColumn:
      fileVersionColumnName === undefined
        ? undefined
        : columnModels?.find(column => column.name === fileVersionColumnName),
    rowsAreEntities:
      table !== undefined && (isEntityView(table) || isDataset(table)),
  }
}

function getDownloadListItem(
  row: Row,
  fileColumnIndex: number,
  versionColumnIndex: number,
  rowsAreEntities: boolean,
): DownloadListItem | undefined {
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
 * The Download List items for some rows of a query: each row's file or dataset at its version (see
 * DownloadListFileColumns). Rows without a file are skipped, and an item in several rows is listed once.
 */
export function getDownloadListItems(
  rows: readonly Row[],
  selectColumns: readonly SelectColumn[] | undefined,
  columns: DownloadListFileColumns,
): DownloadListItem[] {
  const columnIndex = (column: ColumnModel | undefined) =>
    column === undefined
      ? -1
      : (selectColumns ?? []).findIndex(
          selectColumn => selectColumn.name === column.name,
        )
  const fileColumnIndex = columnIndex(columns.fileColumn)
  const versionColumnIndex = columnIndex(columns.fileVersionColumn)
  const items = new Map<string, DownloadListItem>()
  for (const row of rows) {
    const item = getDownloadListItem(
      row,
      fileColumnIndex,
      versionColumnIndex,
      columns.rowsAreEntities,
    )
    if (item) {
      items.set(`${item.fileEntityId}.${item.versionNumber ?? ''}`, item)
    }
  }
  return [...items.values()]
}
