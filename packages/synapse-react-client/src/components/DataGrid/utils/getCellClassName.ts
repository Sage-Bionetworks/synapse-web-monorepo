import classNames from 'classnames'
import { DataGridRow } from '../DataGridTypes'
import { SelectionWithId } from '@sage-bionetworks/react-datasheet-grid'
import { Column } from '@sage-bionetworks/react-datasheet-grid'
import type { ReplicaUserInfo } from '../hooks/useGridReplicaUsers'
import { cellChangeKey } from '../hooks/useCellChangeTracker'
import type { RemoteSelection } from '../hooks/useRemoteSelections'

export function getCellClassName(params: {
  rowData: DataGridRow
  rowIndex: number
  columnId?: string
  selectedRowIndex: number | null
  lastSelection?: SelectionWithId | null
  colValues?: Column[]
  /** Map from "rowIndex:colName" → authorSid for cells changed since joining. */
  cellChanges?: ReadonlyMap<string, number>
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
    cellChanges,
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
  if (cellChanges && columnId) {
    const key = cellChangeKey(rowIndex, columnId)
    const authorSid = cellChanges.get(key)
    if (authorSid !== undefined) {
      const info = replicaUserMap?.get(authorSid)
      if (info) {
        classList.push(`cell-changed--${info.category}`)
      }
    }
  }
  // ── Remote selection tint ─────────────────────────────────────────────────
  if (remoteSelections && columnId) {
    for (const remote of remoteSelections) {
      const { minRow, maxRow, columnNames } = remote.range
      if (rowIndex < minRow || rowIndex > maxRow) continue
      if (columnNames !== undefined && !columnNames.has(columnId)) continue
      classList.push('cell-remote-selected')
      classList.push(`cell-remote-selected--color-${remote.colorIndex}`)
      break // apply the first matching remote selection only
    }
  }

  return classList.length ? classNames(classList) : undefined
}
