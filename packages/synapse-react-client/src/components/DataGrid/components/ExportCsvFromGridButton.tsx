import GridMenuButton from '@/components/DataGrid/components/GridMenuButton/GridMenuButton'
import { useExportDataGridToCsv } from '@/components/DataGrid/hooks/useExportDataGridToCsv'
import { GridModelSnapshot } from '@/components/DataGrid/DataGridTypes'
import { DownloadTwoTone } from '@mui/icons-material'
import { CircularProgress } from '@mui/material'

export type ExportCsvFromGridButtonProps = {
  modelSnapshot: GridModelSnapshot | null
  filename: string
}

export default function ExportCsvFromGridButton(
  props: ExportCsvFromGridButtonProps,
) {
  const { modelSnapshot, filename } = props

  const { exportToCsv, isExporting } = useExportDataGridToCsv({
    filename,
  })

  const handleExport = () => {
    if (modelSnapshot) {
      exportToCsv(modelSnapshot)
    }
  }

  return (
    <GridMenuButton
      onClick={handleExport}
      variant="outlined"
      startIcon={
        isExporting ? <CircularProgress size={20} /> : <DownloadTwoTone />
      }
      disabled={isExporting || !modelSnapshot}
    >
      {isExporting ? 'Exporting...' : 'Export CSV'}
    </GridMenuButton>
  )
}
