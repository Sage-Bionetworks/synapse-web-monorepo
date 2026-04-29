import classNames from 'classnames'
import { DataGridRow } from '../DataGridTypes'
import { SelectionWithId } from '@sage-bionetworks/react-datasheet-grid'
import { Column } from '@sage-bionetworks/react-datasheet-grid'
import type { RemoteSelection } from '../hooks/useRemoteSelections'

export function getCellClassName(params: {
  rowData: DataGridRow
  rowIndex: number
  columnId?: string
  selectedRowIndex: number | null
  lastSelection?: SelectionWithId | null
  colValues?: Column[]
  remoteSelections?: readonly RemoteSelection[]
}): string | undefined {
  const {
    rowData,
    rowIndex,
    columnId,
    selectedRowIndex,
    lastSelection,
    colValues,
    remoteSelections,
  } = params

  const isSelected = selectedRowIndex === rowIndex
  const cellValidationResults = rowData.__cellValidationResults
  const validationStatus = rowData.__validationStatus
  const hasCellError =
    cellValidationResults != null &&
    columnId != null &&
    cellValidationResults.has(columnId)

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

  if (hasCellError) {
    // Confirmed invalid — full red cell background
    if (validationStatus === 'invalid') {
      classList.push('cell-invalid')
    }
    // Pending revalidation — yellow cell background to signal the prior error is unconfirmed
    if (validationStatus === 'pending') {
      classList.push('cell-unknown')
    }
  }

  // ── Cell change indicator ─────────────────────────────────────────────────
  const cellChangeInfo = columnId
    ? rowData.__cellChangeInfo?.[columnId]
    : undefined
  if (cellChangeInfo) {
    classList.push(`cell-changed--${cellChangeInfo.category}`)
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
