import GridMenuButton from '@/components/DataGrid/components/GridMenuButton/GridMenuButton'
import { useExportDataGridToCsv } from '@/components/DataGrid/hooks/useExportDataGridToCsv'
import { DownloadTwoTone } from '@mui/icons-material'
import { CircularProgress } from '@mui/material'

export type ExportCsvFromGridButtonProps = {
  gridSessionId: string
  filename: string
}

export default function ExportCsvFromGridButton(
  props: ExportCsvFromGridButtonProps,
) {
  const { gridSessionId, filename } = props

  const { exportToCsv, isExporting } = useExportDataGridToCsv({
    gridSessionId,
    filename,
  })

  return (
    <GridMenuButton
      onClick={exportToCsv}
      variant="outlined"
      startIcon={
        isExporting ? <CircularProgress size={20} /> : <DownloadTwoTone />
      }
      disabled={isExporting}
    >
      {isExporting ? 'Exporting...' : 'Export CSV'}
    </GridMenuButton>
  )
}
