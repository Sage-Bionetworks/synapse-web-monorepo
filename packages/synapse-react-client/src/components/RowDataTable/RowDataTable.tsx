import React from 'react'
import { StyledTableContainer } from '@/components/styled/StyledTableContainer'
import { SelectColumn } from '@sage-bionetworks/synapse-types'
import { LabelLinkConfig } from '../CardContainerLogic'
import { SynapseCardLabel } from '../GenericCard'

export type RowDataTableProps = {
  /** Array of string values corresponding to the data for a row */
  rowData: Array<string | null>
  /** The headers for the columns in the table */
  headers: SelectColumn[]
  /** Optional list of column names whose data should be displayed in the table. If not provided, all columns with data will be shown. */
  displayedColumns?: string[]
  /** Optional configuration for linking columns */
  columnLinks?: LabelLinkConfig
  /** Optional display value overrides for column names */
  columnAliases?: Record<string, string>
}

export type RowDataEntriesTableProps = Pick<
  RowDataTableProps,
  'rowData' | 'headers' | 'columnLinks' | 'columnAliases'
> & {
  /** The [columnName, value] pairs to display, in display order */
  entries: [string, string][]
}

function hasDisplayableValue(
  value: string | null | undefined,
  column: SelectColumn,
): value is string {
  // value can be 'null' if column type is of type STRING or '[null]' if column type is of STRING_LIST
  if (typeof value !== 'string' || value === 'null') {
    return false
  }
  const isListType = column.columnType.endsWith('_LIST')
  const isEmptyListOrListOfNull = value === '[]' || value === '[null]'
  return !(isListType && isEmptyListOrListOfNull)
}

/**
 * Returns the [columnName, value] pairs for the given columns, in the order of `columns`.
 * Columns that are not in `headers` or that have no value in `rowData` are omitted.
 */
export function getDisplayedRowDataEntries(
  columns: string[],
  headers: SelectColumn[],
  rowData: Array<string | null>,
): [string, string][] {
  return columns.flatMap((columnName): [string, string][] => {
    const columnIndex = headers.findIndex(header => header.name === columnName)
    if (columnIndex === -1) {
      return []
    }
    const value = rowData[columnIndex]
    return hasDisplayableValue(value, headers[columnIndex])
      ? [[columnName, value]]
      : []
  })
}

/**
 * Displays the given column name/value pairs of a Synapse Table row as a key/value table
 */
export function RowDataEntriesTable(
  props: RowDataEntriesTableProps,
): React.ReactNode {
  const { columnAliases, columnLinks, headers, rowData, entries } = props
  return (
    <StyledTableContainer sx={{ width: '100%' }}>
      <table style={{ width: '100%' }}>
        <tbody>
          {entries.map(([columnName, value]) => (
            <tr key={columnName}>
              <td style={{ width: '256px' }}>
                <span
                  style={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#333',
                  }}
                >
                  {columnAliases?.[columnName] ?? columnName}
                </span>
              </td>
              <td>
                <SynapseCardLabel
                  value={value}
                  columnName={columnName}
                  labelLink={columnLinks?.find(
                    link => link.matchColumnName === columnName,
                  )}
                  selectColumns={headers}
                  columnModels={undefined}
                  isHeader={false}
                  rowData={rowData}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledTableContainer>
  )
}

/**
 * Displays a table of column names and Synapse Table row data represented as key/value pairs
 */
const RowDataTable = (props: RowDataTableProps): React.ReactNode => {
  const { columnAliases, columnLinks, headers, rowData, displayedColumns } =
    props

  const columns = displayedColumns
    ? headers
        .filter(header => displayedColumns.includes(header.name))
        .map(header => header.name)
    : headers.map(header => header.name)

  return (
    <RowDataEntriesTable
      entries={getDisplayedRowDataEntries(columns, headers, rowData)}
      headers={headers}
      rowData={rowData}
      columnLinks={columnLinks}
      columnAliases={columnAliases}
    />
  )
}

export default RowDataTable
