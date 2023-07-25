import { isFileViewOrDataset } from '../SynapseTable/SynapseTableUtils'
import { ColumnModel, Row, Table } from '@sage-bionetworks/synapse-types'
import { useState } from 'react'

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

  return {
    isRowSelectionVisible,
    rowSelectionPrimaryKey,
    selectedRows,
    setSelectedRows,
    hasSelectedRows: isRowSelectionVisible && selectedRows.length > 0,
  }
}
