import { ErrorBanner } from '@/components/index'
import ColumnHeader from '@/components/TanStackTable/ColumnHeader'
import StyledTanStackTable from '@/components/TanStackTable/StyledTanStackTable'
import { useGetCsvPreview } from '@/synapse-queries/table/useGetCsvPreview'
import Typography from '@mui/material/Typography'
import {
  ColumnModel,
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
  onCsvPreviewDataChange?: (data: UploadToTablePreviewResult) => void
  onIsLoadingChange?: (isLoading: boolean) => void
}

/**
 * Given a file handle ID and CSV Table Descriptor, fetches and displays a preview of the CSV file as it would be parsed into a table.
 */
export default function CsvPreview(props: CsvPreviewProps) {
  const {
    fileHandleId,
    csvTableDescriptor,
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

  useEffect(() => {
    if (csvPreviewData) {
      onCsvPreviewDataChange(csvPreviewData)
    }
  }, [csvPreviewData, onCsvPreviewDataChange])

  useEffect(() => {
    onIsLoadingChange(isLoading)
  }, [isLoading, onIsLoadingChange])

  const tableData = useMemo(
    () => csvPreviewData?.sampleRows ?? [],
    [csvPreviewData?.sampleRows],
  )

  const columns = useMemo(
    () => getPreviewColumns(csvPreviewData?.suggestedColumns ?? []),
    [csvPreviewData?.suggestedColumns],
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
          title={`${columnModel.name} (${columnModel.columnType})`}
        />
      ),
      enableColumnFilter: false,
      enableSorting: false,
    })
  })
}
