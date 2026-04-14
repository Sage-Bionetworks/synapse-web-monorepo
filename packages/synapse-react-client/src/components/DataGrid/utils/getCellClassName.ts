import classNames from 'classnames'
import { DataGridRow, GridModel } from '../DataGridTypes'
import { SelectionWithId } from '@sage-bionetworks/react-datasheet-grid'
import { Column } from '@sage-bionetworks/react-datasheet-grid'
import type { ReplicaUserInfo } from '../hooks/useGridReplicaUsers'
import type { RemoteSelection } from '../hooks/useRemoteSelections'
import { getCellAuthorSid } from './getCellAuthorSid'

export function getCellClassName(params: {
  rowData: DataGridRow
  rowIndex: number
  columnId?: string
  selectedRowIndex: number | null
  lastSelection?: SelectionWithId | null
  colValues?: Column[]
  /**
   * Raw CRDT column names array (columnNames[i] = name of the column at data
   * index i). Required alongside `model` for change indicators.
   */
  columnNames?: string[]
  /** The CRDT model, used to derive per-cell authorship for change indicators. */
  model?: GridModel | null
  /** Map from replicaId → ReplicaUserInfo for attributing change indicators. */
  replicaUserMap?: ReadonlyMap<number, ReplicaUserInfo>
  /** Remote replica selection ranges to visualise as tinted backgrounds. */
  remoteSelections?: readonly RemoteSelection[]
}): string | undefined {
  const {
    rowData,
    rowIndex,
    columnId,
    selectedRowIndex,
    lastSelection,
    colValues,
    columnNames,
    model,
    replicaUserMap,
    remoteSelections,
  } = params

  const isSelected = selectedRowIndex === rowIndex
  const cellValidationResults = rowData.__cellValidationResults
  const isInvalid =
    cellValidationResults && columnId && cellValidationResults.has(columnId)

  const classList: string[] = []

  if (isSelected) {
    classList.push('cell-row-selected')
  }

  // Add selection styling based on lastSelection
  let isInSelection = false
  if (lastSelection && columnId && colValues) {
    isInSelection =
      rowIndex >= lastSelection.min.row &&
      rowIndex <= lastSelection.max.row &&
      colValues.findIndex(col => col.id === columnId) >=
        lastSelection.min.col &&
      colValues.findIndex(col => col.id === columnId) <= lastSelection.max.col

    if (isInSelection) {
      classList.push('cell-selected')
    }
  }

  if (isInvalid) {
    classList.push('cell-invalid')
  }

  // ── Cell change indicator ─────────────────────────────────────────────────
  if (model && columnId && columnNames) {
    const colIndex = columnNames.indexOf(columnId)
    if (colIndex !== -1) {
      const authorSid = getCellAuthorSid(model, rowIndex, colIndex)
      if (authorSid !== null) {
        const info = replicaUserMap?.get(authorSid)
        if (info) {
          classList.push(`cell-changed--${info.category}`)
        }
      }
    }
  }
  // ── Remote selection tint ─────────────────────────────────────────────────
  if (remoteSelections && columnId) {
    for (const remote of remoteSelections) {
      const { minRow, maxRow, columnNames: remoteColumnNames } = remote.range
      if (rowIndex < minRow || rowIndex > maxRow) continue
      if (remoteColumnNames !== undefined && !remoteColumnNames.has(columnId))
        continue
      classList.push('cell-remote-selected')
      classList.push(`cell-remote-selected--color-${remote.colorIndex}`)
      break // apply the first matching remote selection only
    }
  }

  return classList.length ? classNames(classList) : undefined
}
