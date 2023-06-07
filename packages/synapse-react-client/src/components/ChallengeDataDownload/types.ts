import BaseTable, { ColumnShape } from '@sage-bionetworks/react-base-table'

export type CellRendererProps<T> = {
  cellData: any
  columns: ColumnShape<T>[]
  column: ColumnShape<T>
  columnIndex: number
  rowData: T
  rowIndex: number
  container: BaseTable<T>
  isScrolling?: boolean
}
