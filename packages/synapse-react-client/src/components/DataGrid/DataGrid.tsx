import { modelColsToGrid } from '@/components/DataGrid/utils/modelColsToGrid'
import { SchemaPropertiesMap } from '@/utils/jsonschema/getSchemaPropertyInfo'
import classNames from 'classnames'
import { JSONSchema7 } from 'json-schema'
import { useEffect, useMemo, useState, useRef, useCallback } from 'react'
import { DynamicDataSheetGrid, DataSheetGridRef } from 'react-datasheet-grid'
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
import { useColumnResizeHandles } from './hooks/useColumnResizeHandles'
import { calculateDefaultColumnWidth } from './utils/calculateColumnWidth'

type DataGridProps = {
  gridRef: React.RefObject<DataSheetGridRef | null>
  columnNames: string[]
  columnOrder: number[]
  schemaPropertiesInfo: SchemaPropertiesMap
  rowValues: DataGridRow[]
  entityIsView: boolean
  jsonSchema: JSONSchema7 | undefined
  lastSelection: SelectionWithId | null
  handleChange: (newValue: DataGridRow[], operations: Operation[]) => void
  handleSelectionChange: (opts: { selection: SelectionWithId | null }) => void
  onSelectedRowChange?: (
    rowIndex: number | null,
    row: DataGridRow | null,
  ) => void
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
    lastSelection,
    handleChange,
    handleSelectionChange,
    onSelectedRowChange,
  } = props

  // Move columnWidths state into DataGrid
  const [columnWidths, setColumnWidths] = useState<Record<string, number>>({})

  // Initialize column widths with defaults when columns first become available
  useEffect(() => {
    if (!columnNames || !columnOrder) {
      return
    }

    // Initialize widths for any columns that don't have them yet
    setColumnWidths(prev => {
      const modelColumnNames = columnOrder.map(idx => columnNames[idx])

      // Check if any columns need initialization
      const needsUpdate = modelColumnNames.some(name => !prev[name])

      if (!needsUpdate) {
        return prev // Return same reference to avoid triggering updates
      }

      const newWidths = { ...prev }
      modelColumnNames.forEach(columnName => {
        if (!newWidths[columnName]) {
          // Calculate default width using centralized function
          const propertyInfo = schemaPropertiesInfo[columnName]
          newWidths[columnName] = calculateDefaultColumnWidth(
            columnName,
            propertyInfo,
          )
        }
      })
      return newWidths
    })
  }, [columnNames, columnOrder, schemaPropertiesInfo])

  const colValues = useMemo(
    () =>
      modelColsToGrid(
        columnNames,
        columnOrder,
        schemaPropertiesInfo,
        columnWidths,
      ),
    [columnNames, columnOrder, schemaPropertiesInfo, columnWidths],
  )
  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null)

  // Memoize contextMenuComponent
  const contextMenuComponent = useMemo(
    () => (entityIsView ? renderViewContextMenu : renderRecordSetContextMenu),
    [entityIsView],
  )

  // Memoize addRowsComponent
  const addRowsComponent = useMemo(
    () => (entityIsView ? false : renderAddRowsComponent),
    [entityIsView],
  )

  // Wrap rowClassName in useCallback
  const rowClassNameCallback = useCallback(
    ({ rowData, rowIndex }: { rowData: DataGridRow; rowIndex: number }) =>
      classNames({
        'row-valid': !!jsonSchema && rowData.__validationStatus === 'valid',
        'row-invalid': !!jsonSchema && rowData.__validationStatus === 'invalid',
        'row-unknown': !!jsonSchema && rowData.__validationStatus === 'pending',
        'row-selected': selectedRowIndex === rowIndex,
      }),
    [jsonSchema, selectedRowIndex],
  )

  // Wrap cellClassName in useCallback
  const cellClassNameCallback = useCallback(
    ({
      rowData,
      rowIndex,
      columnId,
    }: {
      rowData: unknown
      rowIndex: number
      columnId?: string
    }) => {
      return getCellClassName({
        rowData: rowData as DataGridRow,
        rowIndex,
        columnId: columnId || '',
        selectedRowIndex,
        lastSelection,
        colValues,
      })
    },
    [selectedRowIndex, lastSelection, colValues],
  )

  // Wrap duplicateRow in useCallback
  const duplicateRowCallback = useCallback(
    ({ rowData }: { rowData: DataGridRow }) => ({
      ...rowData,
    }),
    [],
  )

  // Wrap onActiveCellChange in useCallback
  const handleActiveCellChange = useCallback(
    ({ cell }: { cell: { row: number; col: number } | null }) => {
      if (cell) {
        setSelectedRowIndex(cell.row)
        onSelectedRowChange?.(cell.row, rowValues[cell.row])
      } else {
        setSelectedRowIndex(null)
        onSelectedRowChange?.(null, null)
      }
    },
    [onSelectedRowChange, rowValues],
  )

  // Wrapper ref for the grid container
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  // Store the active cell before column resize so we can restore it
  const activeCellBeforeResizeRef = useRef<{ col: number; row: number } | null>(
    null,
  )

  // Store the scroll position and resized column to navigate to it after remount
  const scrollStateRef = useRef<{
    scrollLeft: number
    scrollTop: number
    resizedColumnName: string
  } | null>(null)

  // Handle column resize callback
  const handleColumnResize = useCallback(
    (columnName: string, newWidth: number) => {
      // Save the current active cell before updating widths (which will trigger remount)
      if (gridRef.current) {
        const activeCell = gridRef.current.activeCell
        if (activeCell) {
          activeCellBeforeResizeRef.current = {
            col: activeCell.col,
            row: activeCell.row,
          }
        } else {
          // Explicitly clear the ref if there's no active cell
          activeCellBeforeResizeRef.current = null
        }
      }

      // Save scroll position to restore it after remount
      const gridContainer = wrapperRef.current?.querySelector(
        '.dsg-container',
      ) as HTMLElement
      if (gridContainer) {
        scrollStateRef.current = {
          scrollLeft: gridContainer.scrollLeft,
          scrollTop: gridContainer.scrollTop,
          resizedColumnName: columnName,
        }
      }

      setColumnWidths(prev => ({
        ...prev,
        [columnName]: newWidth,
      }))
    },
    [gridRef],
  )

  // Setup column resize handles
  useColumnResizeHandles({
    wrapperRef,
    colValues,
    onColumnResize: handleColumnResize,
  })

  return (
    <div ref={wrapperRef} style={{ position: 'relative', width: '100%' }}>
      <DynamicDataSheetGrid
        ref={gridRef}
        value={rowValues}
        columns={colValues}
        autoAddRow={!entityIsView}
        disableSmartDelete
        addRowsComponent={addRowsComponent}
        contextMenuComponent={contextMenuComponent}
        rowKey={GRID_ROW_REACT_KEY_PROPERTY}
        rowClassName={rowClassNameCallback}
        cellClassName={cellClassNameCallback}
        duplicateRow={duplicateRowCallback}
        onChange={handleChange}
        onActiveCellChange={handleActiveCellChange}
        onSelectionChange={handleSelectionChange}
      />
    </div>
  )
}
