import SynapseClient from '../../synapse-client'
import { displayToast } from '../../components/ToastMessage/ToastMessage'
import { parseEntityIdFromSqlStatement } from '../../utils/functions/SqlFunctions'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import {
  DownloadFromTableRequest,
  QueryBundleRequest,
  SelectColumn,
} from '@sage-bionetworks/synapse-types'

export function useExportToCavatica(
  queryBundleRequest: QueryBundleRequest,
  selectColumns?: SelectColumn[],
  fileIdColumnName: string = 'id',
  fileNameColumnName: string = 'name',
  fileVersionColumnName: string = 'currentVersion',
) {
  const { accessToken } = useSynapseContext()
  const separator = ','
  const writeHeader = true
  const includeRowIdAndRowVersion = false
  const originalSql = queryBundleRequest.query.sql
  return async () => {
    try {
      // add drs_uri to select
      const selectColumnsList = selectColumns
        ?.map(col => `"${col.name}"`)
        .join(',')
      const sql = `SELECT CONCAT('drs://repo-prod.prod.sagebase.org/syn', ${fileIdColumnName}, '.', ${fileVersionColumnName}) AS drs_uri, ${fileNameColumnName} as file_name, ${selectColumnsList} FROM ${originalSql.slice(
        originalSql.toLowerCase().indexOf('from') + 'from'.length + 1,
      )}`
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
      const result = await SynapseClient.getDownloadFromTableRequest(
        downloadFromTableRequest,
        accessToken,
      )
      // Send this DRS URI to the CAVATICA landing page where it can be processed
      const cavaticaURL = `https://cavatica.sbgenomics.com/import-redirect/drs/csv?DRS_URI=${encodeURIComponent(
        `drs://repo-prod.prod.sagebase.org/fh${result.resultsFileHandleId}`,
      )}`
      window.open(cavaticaURL, '_blank')
    } catch (_err) {
      displayToast(_err.reason, 'danger')
    }
  }
}
