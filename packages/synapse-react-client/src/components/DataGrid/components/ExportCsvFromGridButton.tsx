import GridMenuButton from '@/components/DataGrid/components/GridMenuButton/GridMenuButton'
import { useExportDataGridToCsv } from '@/components/DataGrid/hooks/useExportDataGridToCsv'
import { DownloadTwoTone } from '@mui/icons-material'

export type ExportCsvFromGridButtonProps = {
  gridSessionId: string
  filename: string
  includeEtag?: boolean
}

export default function ExportCsvFromGridButton(
  props: ExportCsvFromGridButtonProps,
) {
  const { gridSessionId, filename, includeEtag } = props

  const { exportToCsv, isExporting } = useExportDataGridToCsv({
    gridSessionId,
    filename,
    includeEtag,
  })

  return (
    <GridMenuButton
      onClick={exportToCsv}
      variant="outlined"
      startIcon={<DownloadTwoTone />}
      loading={isExporting}
    >
      Export CSV
    </GridMenuButton>
  )
}
