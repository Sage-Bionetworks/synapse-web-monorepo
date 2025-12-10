import { displayToast } from '@/components/ToastMessage/ToastMessage'
import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { parseEntityIdFromSqlStatement } from '@/utils/functions/SqlFunctions'
import {
  DownloadFromTableRequest,
  QueryBundleRequest,
  SelectColumn,
} from '@sage-bionetworks/synapse-types'
import { addDrsUriToSql } from './useExportToCavatica'

export function useExportToADWorkbench(
  queryBundleRequest: QueryBundleRequest,
  selectColumns?: SelectColumn[],
  fileIdColumnName: string = 'id',
  fileNameColumnName: string = 'name',
  fileVersionColumnName: string = 'currentVersion',
  isDev: boolean = false,
) {
  const { accessToken } = useSynapseContext()
  const separator = ','
  const writeHeader = true
  const includeRowIdAndRowVersion = false
  const originalSql = queryBundleRequest.query.sql
  const adwbUrl = isDev
    ? 'https://victorious-stone-0fe9de30f.3.azurestaticapps.net/'
    : 'https://adwb-ws-transfer.alzheimersdata.org/'
  return async () => {
    try {
      const sql = addDrsUriToSql(
        originalSql,
        selectColumns,
        fileIdColumnName,
        fileNameColumnName,
        fileVersionColumnName,
      )
      const downloadFromTableRequest: DownloadFromTableRequest = {
        sql,
        entityId: parseEntityIdFromSqlStatement(sql),
        selectedFacets: queryBundleRequest.query.selectedFacets,
        concreteType:
          'org.sagebionetworks.repo.model.table.DownloadFromTableRequest',
        writeHeader,
        includeRowIdAndRowVersion,
        csvTableDescriptor: { separator },
        additionalFilters: queryBundleRequest.query.additionalFilters,
      }
      const result = await SynapseClient.createTableCsvForDownload(
        downloadFromTableRequest,
        accessToken,
      )
      // Send this DRS URI to the Pluto landing page where it can be processed
      const url = `${adwbUrl}?DRS_URI=${encodeURIComponent(
        `drs://repo-prod.prod.sagebase.org/fh${result.resultsFileHandleId}`,
      )}`
      window.open(url, '_blank')
    } catch (_err) {
      displayToast(_err.reason, 'danger')
    }
  }
}
