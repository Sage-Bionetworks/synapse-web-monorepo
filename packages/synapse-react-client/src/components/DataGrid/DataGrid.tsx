import React from 'react'
import { DataSheetGrid, Column } from 'react-datasheet-grid'
import 'react-datasheet-grid/dist/style.css'
import './DataGridExtra.css'

export interface DataGridProps {
  rows: any[]
  columns: Column[]
}

export const DataGrid: React.FC<DataGridProps> = props => {
  return (
    <div className="data-grid">
      <p>Data Grid Component</p>
      <DataSheetGrid
        value={props.rows}
        columns={props.columns}
        rowClassName={'row-class'}
        createRow={() => ({})}
        duplicateRow={() => ({})}
        onChange={() => {}}
      ></DataSheetGrid>
    </div>
  )
}

export default DataGrid
