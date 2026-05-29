import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/index'
import { useGetVersions } from 'synapse-react-client/synapse-queries/index'
import { Row } from '@sage-bionetworks/synapse-types'
import { enabledAnalysisPlatforms } from '@/config/resources'

export type DatasetDetailsFilesTableProps = {
  rowData?: Row
}

export default function DatasetDetailsFilesTable(
  props: DatasetDetailsFilesTableProps,
) {
  const { rowData } = props
  const { data: entityVersions } = useGetVersions(
    rowData!.rowId!.toString(),
    0, //offset
    1, //limit
    {
      enabled: Boolean(rowData?.rowId),
    },
  )
  if (!entityVersions) {
    return null
  }
  const hasStableVersion = Boolean(
    entityVersions && entityVersions?.results.length > 0,
  )
  const versionNumber = hasStableVersion
    ? entityVersions?.results[0]?.versionNumber
    : undefined

  const sql = `SELECT * FROM syn${rowData?.rowId}${
    hasStableVersion ? `.${versionNumber}` : ''
  }`
  return (
    <QueryWrapperPlotNav
      rgbIndex={0}
      sql={sql}
      visibleColumnCount={7}
      tableConfiguration={{
        showAccessColumn: true,
        showDownloadColumn: true,
      }}
      shouldDeepLink={false}
      defaultShowPlots={false}
      isRowSelectionVisible={true}
      enabledExternalAnalysisPlatforms={enabledAnalysisPlatforms}
    />
  )
}
