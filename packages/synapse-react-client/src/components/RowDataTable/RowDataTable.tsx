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

  const labelValueArray: [string, string][] = []

  for (let i = 0; i < columns.length; i += 1) {
    const columnName = columns[i]
    const columnIndex = headers.findIndex(header => header.name === columnName)
    const value = columnIndex !== -1 ? rowData[columnIndex] : undefined

    // value can be 'null' if column type is of type STRING or '[null]' if column type is of STRING_LIST
    const column = headers[columnIndex]
    const isNullValue = value === 'null'
    const isListType = column.columnType.endsWith('_LIST')

    const isEmptyListOrListOfNull = value === '[]' || value === '[null]'
    if (
      typeof value === 'string' &&
      !(isNullValue || (isListType && isEmptyListOrListOfNull))
    ) {
      labelValueArray.push([columnName, value])
    }
  }

  return (
    <StyledTableContainer sx={{ width: '100%' }}>
      <table style={{ width: '100%' }}>
        <tbody>
          {labelValueArray?.map(([columnName, value]) => (
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

export default RowDataTable
