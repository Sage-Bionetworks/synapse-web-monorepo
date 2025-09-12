import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav'
import { useGetVersions } from 'synapse-react-client/synapse-queries'
import { Row } from '@sage-bionetworks/synapse-types'
import columnAliases from '../config/columnAliases'

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

  // PORTALS-3698: Show files for the latest released version rather than the draft (unless this is the first version)
  // This is because the Datasets are from an EntityView rather than a Dataset Collection or Table.

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
      columnAliases={columnAliases}
      defaultShowPlots={false}
    />
  )
}
