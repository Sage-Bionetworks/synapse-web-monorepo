import { SelectColumn } from '@sage-bionetworks/synapse-types'
import { LabelLinkConfig } from '../CardContainerLogic'
import { StyledTableContainer } from '../styled/StyledTableContainer'
import { SynapseCardLabel } from '../GenericCard'

export type RowDataTableProps = {
  /** Array of string values corresponding to the data for a row */
  rowData: Array<string | null>
  /** The headers for the columns in the table */
  headers: SelectColumn[]
  /** List of column names to display as labels */
  labels: string[]
  /** Optional list of column names whose data should be displayed in the table. If not provided, all columns with data will be shown. */
  displayedColumns?: string[]
  /** Optional configuration for linking columns */
  columnLinks?: LabelLinkConfig
  /** key-value pair mapping to display in rows */
  labelValueArray?: [string, string][]
  /** Optional display value overrides for column names */
  columnAliases?: Record<string, string>
}

/**
 * Displays a table of column names and Synapse Table row data represented as key/value pairs
 */
const RowDataTable = (props: RowDataTableProps) => {
  const {
    columnAliases,
    columnLinks,
    labelValueArray,
    headers,
    rowData,
    labels,
  } = props

  const localLabelValueArray: [string, string][] = []

  if (!labelValueArray) {
    for (let i = 0; i < labels.length; i += 1) {
      const columnName = labels[i]
      const columnIndex = headers.findIndex(
        header => header.name === columnName,
      )
      const value = columnIndex !== -1 ? rowData[columnIndex] : undefined

      // value can be 'null' if column type is of type STRING or '[null]' if column type is of STRING_LIST
      if (value && value !== '[null]' && value !== 'null') {
        localLabelValueArray.push([columnName, value])
      }
    }
  }

  return (
    <StyledTableContainer sx={{ width: '100%' }}>
      <table style={{ width: '100%' }}>
        <tbody>
          {(labelValueArray ?? localLabelValueArray)?.map(
            ([columnName, value]) => (
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
            ),
          )}
        </tbody>
      </table>
    </StyledTableContainer>
  )
}

export default RowDataTable
