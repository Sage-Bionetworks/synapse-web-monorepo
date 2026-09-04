import { ErrorBanner } from '@/components/index'
import ColumnHeader from '@/components/TanStackTable/ColumnHeader'
import StyledTanStackTable from '@/components/TanStackTable/StyledTanStackTable'
import { reconcileCsvImportSchema } from '@/components/table/CsvPreview/reconcileCsvImportSchema'
import { useGetCsvPreview } from '@/synapse-queries/table/useGetCsvPreview'
import { SchemaPropertiesMap } from '@/utils/jsonschema/getSchemaPropertyInfo'
import Typography from '@mui/material/Typography'
import {
  ColumnModel,
  ColumnType,
  CsvTableDescriptor,
  TableRow,
  UploadToTablePreviewResult,
} from '@sage-bionetworks/synapse-client'
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import noop from 'lodash-es/noop'
import { useEffect, useMemo } from 'react'

export type CsvPreviewProps = {
  fileHandleId: string
  csvTableDescriptor: CsvTableDescriptor
  /** Known column types (e.g. from an existing grid or table schema), keyed by column name, that
   * take precedence over the CSV-content-based type suggestion for columns that already exist. */
  existingColumnSchema?: SchemaPropertiesMap
  /** Names of columns that already exist (e.g. in the target grid or table), even if they aren't
   * declared in existingColumnSchema (such as a RecordSet's system columns). These are treated as
   * strings rather than trusting the CSV-content-based type suggestion. */
  existingColumnNames?: readonly string[]
  /** Exact known ColumnTypes for columns that already exist (e.g. in a real Synapse Table), keyed
   * by column name. Takes precedence over existingColumnSchema/existingColumnNames since the type
   * is known exactly rather than inferred. */
  existingColumnTypesByName?: Readonly<Record<string, ColumnType>>
  onCsvPreviewDataChange?: (data: UploadToTablePreviewResult) => void
  onIsLoadingChange?: (isLoading: boolean) => void
}

// Stable references so omitting existingColumnSchema/existingColumnNames/existingColumnTypesByName
// doesn't create a new object/array every render, which would otherwise retrigger the memoized
// reconciliation (and its onCsvPreviewDataChange effect) on every render.
const EMPTY_SCHEMA_PROPERTIES_MAP: SchemaPropertiesMap = {}
const EMPTY_COLUMN_NAMES: readonly string[] = []
const EMPTY_COLUMN_TYPES_BY_NAME: Readonly<Record<string, ColumnType>> = {}

/**
 * Given a file handle ID and CSV Table Descriptor, fetches and displays a preview of the CSV file as it would be parsed into a table.
 */
export default function CsvPreview(props: CsvPreviewProps) {
  const {
    fileHandleId,
    csvTableDescriptor,
    existingColumnSchema = EMPTY_SCHEMA_PROPERTIES_MAP,
    existingColumnNames = EMPTY_COLUMN_NAMES,
    existingColumnTypesByName = EMPTY_COLUMN_TYPES_BY_NAME,
    onCsvPreviewDataChange = noop,
    onIsLoadingChange = noop,
  } = props

  const {
    data: csvPreviewData,
    isLoading,
    error,
  } = useGetCsvPreview({
    concreteType:
      'org.sagebionetworks.repo.model.table.UploadToTablePreviewRequest',
    uploadFileHandleId: fileHandleId,
    csvTableDescriptor,
  })

  const reconciledSuggestedColumns = useMemo(
    () =>
      reconcileCsvImportSchema(
        csvPreviewData?.suggestedColumns ?? [],
        existingColumnSchema,
        existingColumnNames,
        existingColumnTypesByName,
      ),
    [
      csvPreviewData?.suggestedColumns,
      existingColumnSchema,
      existingColumnNames,
      existingColumnTypesByName,
    ],
  )

  useEffect(() => {
    if (csvPreviewData) {
      onCsvPreviewDataChange({
        ...csvPreviewData,
        suggestedColumns: reconciledSuggestedColumns,
      })
    }
  }, [csvPreviewData, reconciledSuggestedColumns, onCsvPreviewDataChange])

  useEffect(() => {
    onIsLoadingChange(isLoading)
  }, [isLoading, onIsLoadingChange])

  const tableData = useMemo(
    () => csvPreviewData?.sampleRows ?? [],
    [csvPreviewData?.sampleRows],
  )

  const columns = useMemo(
    () => getPreviewColumns(reconciledSuggestedColumns),
    [reconciledSuggestedColumns],
  )

  const table = useReactTable({
    getCoreRowModel: getCoreRowModel(),
    data: tableData,
    columns: columns,
  })

  if (error) {
    return <ErrorBanner error={error} />
  }

  return (
    <>
      {isLoading && <div>Loading preview...</div>}
      {!isLoading && csvPreviewData && table && (
        <>
          <Typography variant={'body1'}>
            Scanned {csvPreviewData?.rowsScanned?.toLocaleString()} rows to
            generate preview:
          </Typography>
          <StyledTanStackTable table={table} />
        </>
      )}
    </>
  )
}

function getPreviewColumns(columnModels: ColumnModel[]) {
  const columnHelper = createColumnHelper<TableRow>()
  return columnModels.map((columnModel, index) => {
    return columnHelper.accessor(tr => tr.values![index], {
      id: `column-${index}`,
      header: props => (
        <ColumnHeader
          {...props}
          wrap={true}
          title={`${columnModel.name}\n(${columnModel.columnType})`}
        />
      ),
      enableColumnFilter: false,
      enableSorting: false,
    })
  })
}
