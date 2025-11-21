import { modelColsToGrid } from '@/components/DataGrid/utils/modelColsToGrid'
import { SchemaPropertiesMap } from '@/utils/jsonschema/getSchemaPropertyInfo'
import classNames from 'classnames'
import { JSONSchema7 } from 'json-schema'
import { useMemo } from 'react'
import { DataSheetGrid, DataSheetGridRef } from 'react-datasheet-grid'
import 'react-datasheet-grid/dist/style.css'
import '../../style/components/_data-grid-extra.scss'
import { SelectionWithId } from 'react-datasheet-grid/dist/types'
import {
  renderAddRowsComponent,
  renderRecordSetContextMenu,
  renderViewContextMenu,
} from './components/contextMenu'
import { DataGridRow, Operation } from './DataGridTypes'
import { GRID_ROW_REACT_KEY_PROPERTY } from './utils/DataGridUtils'
import { getCellClassName } from './utils/getCellClassName'

type DataGridProps = {
  gridRef: React.RefObject<DataSheetGridRef | null>
  columnNames: string[]
  columnOrder: number[]
  schemaPropertiesInfo: SchemaPropertiesMap
  rowValues: DataGridRow[]
  entityIsView: boolean
  jsonSchema: JSONSchema7 | undefined
  selectedRowIndex: number | null
  lastSelection: SelectionWithId | null
  handleChange: (newValue: DataGridRow[], operations: Operation[]) => void
  setSelectedRowIndex: (
    value: ((prevState: number | null) => number | null) | number | null,
  ) => void
  handleSelectionChange: (opts: { selection: SelectionWithId | null }) => void
}

/**
 * Component that renders a data grid/spreadsheet using react-datasheet-grid.
 * @param props
 * @constructor
 */
export default function DataGrid(props: DataGridProps) {
  const {
    gridRef,
    rowValues,
    columnNames,
    columnOrder,
    schemaPropertiesInfo,
    entityIsView,
    jsonSchema,
    selectedRowIndex,
    lastSelection,
    handleChange,
    setSelectedRowIndex,
    handleSelectionChange,
  } = props

  const colValues = useMemo(
    () => modelColsToGrid(columnNames, columnOrder, schemaPropertiesInfo),
    [columnNames, columnOrder, schemaPropertiesInfo],
  )

  return (
    <DataSheetGrid
      ref={gridRef}
      value={rowValues}
      columns={colValues}
      autoAddRow={!entityIsView}
      disableSmartDelete
      addRowsComponent={entityIsView ? false : renderAddRowsComponent}
      contextMenuComponent={
        entityIsView ? renderViewContextMenu : renderRecordSetContextMenu
      }
      rowKey={GRID_ROW_REACT_KEY_PROPERTY}
      rowClassName={({ rowData, rowIndex }) =>
        classNames({
          'row-valid': !!jsonSchema && rowData.__validationStatus === 'valid',
          'row-invalid':
            !!jsonSchema && rowData.__validationStatus === 'invalid',
          'row-unknown':
            !!jsonSchema && rowData.__validationStatus === 'pending',
          'row-selected': selectedRowIndex === rowIndex,
        })
      }
      cellClassName={({ rowData, rowIndex, columnId }) => {
        return getCellClassName({
          rowData: rowData as DataGridRow,
          rowIndex,
          columnId,
          selectedRowIndex,
          lastSelection,
          colValues,
        })
      }}
      duplicateRow={({ rowData }) => ({
        ...rowData,
      })}
      onChange={handleChange}
      onActiveCellChange={({ cell }) => {
        if (cell) {
          setSelectedRowIndex(cell.row)
        }
      }}
      onSelectionChange={handleSelectionChange}
    />
  )
}
