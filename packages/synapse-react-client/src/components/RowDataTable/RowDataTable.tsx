import { SelectColumn } from '@sage-bionetworks/synapse-types'
import { LabelLinkConfig } from '../CardContainerLogic'
import { StyledTableContainer } from '../styled/StyledTableContainer'
import { SynapseCardLabel } from '../GenericCard'

export type RowDataTableProps = {
  /** Array of string values corresponding to the data for a row */
  rowData: string[]
  /** Optional configuration for linking columns */
  columnLinks?: LabelLinkConfig
  /** key-value pair mapping to display in rows */
  labelValueArray: [string, string][]
  /** Optional display value overrides for column names */
  columnAliases?: Record<string, string>
  /** The headers for the columns in the table */
  headers: SelectColumn[]
}

const RowDataTable = (props: RowDataTableProps) => {
  const { columnAliases, columnLinks, labelValueArray, headers, rowData } =
    props

  return (
    <StyledTableContainer sx={{ width: '100%' }}>
      <table style={{ width: '100%' }}>
        <tbody>
          {labelValueArray.map(([columnName, value], index) => (
            <tr
              key={columnName}
              style={{
                backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'transparent',
              }}
            >
              <td style={{ padding: '7px 20px 7px 10px', width: '256px' }}>
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
              <td style={{ padding: '7px 20px 7px 10px' }}>
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
