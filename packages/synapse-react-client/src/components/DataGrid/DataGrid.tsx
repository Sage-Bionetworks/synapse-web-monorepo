import React, { useMemo, useState } from 'react'
import { DataSheetGrid, Column } from 'react-datasheet-grid'
import 'react-datasheet-grid/dist/style.css'

export type DataGridRow = { [key: string]: string | number }

export interface DataGridProps {
  rows: DataGridRow[]
  columns: Column[]
}

// Function to generate a random ID for new rows.
// This is needed for the `createRow` and `duplicateRow` methods.
const genId = (): number => {
  return Math.floor(Math.random() * 1000000)
}

export const DataGrid: React.FC<DataGridProps> = props => {
  const [gridRows, setGridRows] = useState(props.rows)

  const createdRowIds = useMemo(() => new Set(), [])
  const deletedRowIds = useMemo(() => new Set(), [])
  const updatedRowIds = useMemo(() => new Set(), [])

  const createRow = (): DataGridRow => {
    return { id: genId() }
  }

  const duplicateRow = (rowData: DataGridRow): DataGridRow => {
    return { ...rowData, id: genId() }
  }

  const onChange = (newValue: DataGridRow[], operations: any[]) => {
    for (const operation of operations) {
      if (operation.type === 'CREATE') {
        newValue
          .slice(operation.fromRowIndex, operation.toRowIndex)
          .forEach(({ id }) => createdRowIds.add(id))
      }

      if (operation.type === 'UPDATE') {
        newValue
          .slice(operation.fromRowIndex, operation.toRowIndex)
          .forEach(({ id }) => {
            if (!createdRowIds.has(id) && !deletedRowIds.has(id)) {
              updatedRowIds.add(id)
            }
          })
      }

      if (operation.type === 'DELETE') {
        let keptRows = 0

        gridRows
          .slice(operation.fromRowIndex, operation.toRowIndex)
          .forEach(({ id }, i) => {
            updatedRowIds.delete(id)

            if (createdRowIds.has(id)) {
              createdRowIds.delete(id)
            } else {
              deletedRowIds.add(id)
              newValue.splice(
                operation.fromRowIndex + keptRows++,
                0,
                gridRows[operation.fromRowIndex + i],
              )
            }
          })
        setGridRows(newValue)
      }
    }
  }

  return (
    <div className="data-grid-container">
      <DataSheetGrid
        value={props.rows}
        columns={props.columns}
        duplicateRow={duplicateRow}
        onChange={onChange}
      ></DataSheetGrid>
    </div>
  )
}

export default DataGrid
