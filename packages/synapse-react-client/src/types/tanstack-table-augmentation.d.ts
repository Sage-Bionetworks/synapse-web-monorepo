import '@tanstack/react-table'
import { RowData } from '@tanstack/react-table'
import { RowSet } from '@sage-bionetworks/synapse-types'
import { JsonSchemaVersionInfo } from '@sage-bionetworks/synapse-client'
import { VersionSelectionType } from '@/components/JsonSchema/JsonSchemaPicker/VersionSelectionType'

// Type that represents an enumerated value that can be passed to a column to render a filter control
type ColumnFilterEnumValue<TValue = unknown> = {
  value: TValue
  displayText: string
  count?: number
}

declare module '@tanstack/react-table' {
  interface TableMeta<TData extends RowData> {
    rowSet?: RowSet
    rowEntityIDColumnIndex?: number
    rowEntityVersionColumnIndex?: number
    getWrapInExpandableTd?: (cell: Cell<TData>) => boolean
    renderPlaceholderData?: boolean

    /** Can be used to dynamically add class names to the tr element */
    getRowClassNames?: (row: Row<TData>) => string

    /**
     * Used by JsonSchemaPicker's version column to read/report the currently selected schema
     * version without requiring the column definitions themselves to change identity (which would
     * cause the version cell to remount, losing in-progress version pagination).
     */
    jsonSchemaVersionSelection?: {
      versionSelectionType: VersionSelectionType
      selectedVersionInfo: JsonSchemaVersionInfo | undefined
      onVersionChange: (versionInfo: JsonSchemaVersionInfo | undefined) => void
    }
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
