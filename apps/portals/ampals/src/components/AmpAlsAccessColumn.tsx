import { Row } from '@sage-bionetworks/synapse-types/src/Table/QueryResult'
import { CellContext, ColumnDef } from '@tanstack/react-table'
import AccessIcon, {
  RestrictionUiType,
} from 'synapse-react-client/components/HasAccess/AccessIcon'
import HasAccessV2 from 'synapse-react-client/components/HasAccess/HasAccessV2'
import AridhiaAccessStatus from 'synapse-react-client/components/Aridhia/AridhiaAccessStatus'
import { getColumnIndex } from 'synapse-react-client/utils/functions'

type SourceValue = 'Synapse' | 'GEO' | 'Critical Path Institute' | null

const ID_COLUMN_NAME = 'id'
const SOURCE_COLUMN_NAME = 'source'
const URL_COLUMN_NAME = 'url'
const DATASET_CODE_COLUMN_NAME = 'dataset_code'

function AccessBySource(props: {
  source: SourceValue
  id: string
  datasetCode: string
  url?: string
}) {
  const { source, id, url, datasetCode } = props

  switch (source) {
    case 'GEO':
      return <AccessIcon restrictionUiType={RestrictionUiType.Accessible} />
    case 'Critical Path Institute':
      return <AridhiaAccessStatus url={url} datasetCode={datasetCode} />
    case 'Synapse':
    default:
      return <HasAccessV2 entityId={id} showButtonText={false} />
  }
}

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
  const urlColumnIndex = getColumnIndex(URL_COLUMN_NAME, selectColumns)
  const datasetCodeColumnIndex = getColumnIndex(
    DATASET_CODE_COLUMN_NAME,
    selectColumns,
  )
  if (
    idColumnIndex == null ||
    sourceColumnIndex == null ||
    urlColumnIndex == null ||
    datasetCodeColumnIndex == null
  ) {
    console.warn(
      "AmpAlsAccessColumn: 'id', 'source', 'url' or 'dataset_code' column not found",
    )
    return null
  }

  const id = row.original.values[idColumnIndex]!
  const sourceValue = row.original.values[sourceColumnIndex] as SourceValue
  const url = row.original.values[urlColumnIndex] ?? undefined
  const datasetCode = row.original.values[datasetCodeColumnIndex]!

  return (
    <AccessBySource
      source={sourceValue}
      id={id}
      url={url}
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
