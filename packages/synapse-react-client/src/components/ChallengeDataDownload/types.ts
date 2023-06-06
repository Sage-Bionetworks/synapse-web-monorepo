import { EntityHeader, EntityType } from '@sage-bionetworks/synapse-types'
import BaseTable, { ColumnShape } from '@sage-bionetworks/react-base-table'
import { VersionSelectionType } from '../EntityFinder/VersionSelectionType'

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

export interface ChallengeDataTableProps {
  hasNextPage?: boolean
  isFetchingNextPage?: boolean
  isLoading?: boolean
  minTableWidth?: number
  tableData: EntityHeader[]
  tableHeight?: number
  versionSelection: VersionSelectionType
}

/**
 * Describes the shape of the data passed to the BaseTable
 */
export type ChallengeDataTableRowData = EntityHeader & {
  currentSelectedVersion?: number
  entityId: string
  entityType: EntityType
  isDisabled: boolean
  isSelected: boolean
  isVersionableEntity: boolean
  onChangeSelected: (newValue: boolean) => void
  size: number
  versionNumber?: number
}
