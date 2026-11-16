import { Row } from '@sage-bionetworks/synapse-types/src/Table/QueryResult'
import { CellContext, ColumnDef } from '@tanstack/react-table'
import { getColumnIndex } from 'synapse-react-client/utils/functions/index'
import { DatasetAccessStatus } from './DatasetAccessStatus'

const ID_COLUMN_NAME = 'id'
const SOURCE_COLUMN_NAME = 'source'
const DATASET_CODE_COLUMN_NAME = 'dataset_code'

/**
 * Given the (tanstack react) Table CellContext, return an access column that changes based on the value of the 'source' column.
 */
function AmpAlsAccessColumnCell<TValue = unknown>(
  props: CellContext<Row, TValue>,
) {
  const { row, table } = props

  const selectColumns = table.options.meta?.rowSet?.headers ?? []

  const idColumnIndex = getColumnIndex(ID_COLUMN_NAME, selectColumns)
  const sourceColumnIndex = getColumnIndex(SOURCE_COLUMN_NAME, selectColumns)
  const datasetCodeColumnIndex = getColumnIndex(
    DATASET_CODE_COLUMN_NAME,
    selectColumns,
  )
  if (
    idColumnIndex == null ||
    sourceColumnIndex == null ||
    datasetCodeColumnIndex == null
  ) {
    console.warn(
      "AmpAlsAccessColumn: 'id', 'source' or 'dataset_code' column not found",
    )
    return null
  }

  const id = row.original.values[idColumnIndex]!
  const sourceValue = row.original.values[sourceColumnIndex]
  const datasetCode = row.original.values[datasetCodeColumnIndex]!

  return (
    <DatasetAccessStatus
      source={sourceValue}
      id={id}
      datasetCode={datasetCode}
    />
  )
}

const ampAlsAccessColumn: ColumnDef<Row, any> = {
  id: 'ampAlsAccess',
  cell: AmpAlsAccessColumnCell,
  enableResizing: false,
  maxSize: 50,
  meta: {
    textAlign: 'center',
  },
}

export default ampAlsAccessColumn
