import '@tanstack/react-table'
import { RowData } from '@tanstack/react-table'
import { RowSet } from '@sage-bionetworks/synapse-types'

// Type that represents an enumerated value that can be passed to a column to render a filter control
type ColumnFilterEnumValue<TValue = unknown> = {
  value: TValue
  displayText: string
  count?: number
}

declare module '@tanstack/react-table' {
  interface TableMeta<TData extends RowData> {
    rowSet?: RowSet
    hideAccessIconForExternalFileHandle?: boolean
    rowEntityIDColumnIndex?: number
    rowEntityVersionColumnIndex?: number
    getWrapInExpandableTd?: (cell: Cell<TData>) => boolean
    renderPlaceholderData?: boolean

    /** Can be used to dynamically add class names to the tr element */
    getRowClassNames?: (row: Row<TData>) => string
  }

  interface ColumnMeta<TData extends RowData, TValue> {
    textAlign?: React.CSSProperties['textAlign']

    /** The type of filter that this column may have */
    filterVariant?: 'enumeration' // could be extended to include 'range', 'freeText', etc.
    /** If the filterVariant is `enumeration`, determines whether the user can filter by multiple values. */
    enableMultipleSelect?: boolean
    /** Get the display text for a given value for this column, which may be used in non-cell UI such as the enumerated facet control. */
    getDisplayText?: (value: TValue) => string
  }
}
