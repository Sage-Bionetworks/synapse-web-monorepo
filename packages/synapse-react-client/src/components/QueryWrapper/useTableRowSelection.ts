import React from 'react'
import { isFileViewOrDataset } from '../SynapseTable/SynapseTableUtils'
import { ColumnModel, Row, Table } from '@sage-bionetworks/synapse-types'
import { useCallback, useState } from 'react'
import { isEqual } from 'lodash-es'

type UseTableRowSelectionOptions = {
  entity?: Table
  columnModels?: ColumnModel[]
  isRowSelectionVisible?: boolean
  /** The set of columns that defines a uniqueness constraint on the table for the purposes of filtering based on row selection.
   * Note that Synapse tables have no internal concept of a primary key.
   */
  rowSelectionPrimaryKey?: string[]
}

type UseTableRowSelectionReturn = {
  isRowSelectionVisible: boolean
  rowSelectionPrimaryKey?: string[]
  selectedRows: Row[]
  setSelectedRows: React.Dispatch<React.SetStateAction<Row[]>>
  hasSelectedRows: boolean
  getIsRowSelected: (row: Row) => boolean
}

function getRowSelectionEqualityComparator(
  row: Row,
  columnModels?: ColumnModel[],
  rowSelectionPrimaryKey?: string[],
): (r1: Row, r2: Row) => boolean {
  // Worst-case scenario, use deep equality to compare rows
  // This will fail from the user's perspective if any data changes in the rows since the last time the selection was updated.
  let comparator: (r1: Row, r2: Row) => boolean = isEqual
  if (rowSelectionPrimaryKey && columnModels) {
    // If the `rowSelectionPrimaryKey` is defined, a row is selected if we have a PK match
    // Even this selection is not guaranteed to persist if data changes, e.g. if column order changes and the PK now has a different column index
    comparator = (r1: Row, r2: Row) => {
      const r1PrimaryKeyValues = rowSelectionPrimaryKey.map(
        key => r1.values[columnModels.findIndex(cm => cm.name === key)]!,
      )
      const r2PrimaryKeyValues = rowSelectionPrimaryKey.map(
        key => r2.values[columnModels.findIndex(cm => cm.name === key)]!,
      )
      return isEqual(r1PrimaryKeyValues, r2PrimaryKeyValues)
    }
  } else if (row.rowId) {
    // If there's a rowId, we can use that as a fallback
    comparator = (r1: Row, r2: Row) => r1.rowId === r2.rowId
  }

  return comparator
}

function isRowSelected(
  row: Row,
  selectedRows: Row[],
  columnModels?: ColumnModel[],
  rowSelectionPrimaryKey?: string[],
): boolean {
  const comparator = getRowSelectionEqualityComparator(
    row,
    columnModels,
    rowSelectionPrimaryKey,
  )
  return selectedRows.some(selectedRow => comparator(selectedRow, row))
}

export default function useTableRowSelection(
  options: UseTableRowSelectionOptions,
): UseTableRowSelectionReturn {
  const { isRowSelectionVisible = false, entity, columnModels } = options
  let { rowSelectionPrimaryKey } = options

  const [selectedRows, setSelectedRows] = useState<Row[]>([])

  if (
    !rowSelectionPrimaryKey &&
    isFileViewOrDataset(entity) &&
    columnModels?.find(cm => cm.name === 'id')
  ) {
    // If the primary key isn't specified via props, and this is a file view/dataset, we can safely use the 'id' column as primary key, if it is present
    // Note: Synapse tables don't have an internal concept of a primary key
    rowSelectionPrimaryKey = ['id']
  }

  const getIsRowSelected = useCallback(
    (row: Row) => {
      return isRowSelected(
        row,
        selectedRows,
        columnModels,
        rowSelectionPrimaryKey,
      )
    },
    [columnModels, rowSelectionPrimaryKey, selectedRows],
  )

  return {
    isRowSelectionVisible,
    rowSelectionPrimaryKey,
    selectedRows,
    setSelectedRows,
    hasSelectedRows: isRowSelectionVisible && selectedRows.length > 0,
    getIsRowSelected,
  }
}
