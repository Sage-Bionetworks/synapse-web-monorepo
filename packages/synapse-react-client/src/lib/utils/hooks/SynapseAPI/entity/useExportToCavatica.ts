import { SynapseClient } from '../../..'
import { displayToast } from '../../../../containers/ToastMessage'
import { parseEntityIdFromSqlStatement } from '../../../functions/sqlFunctions'
import { useSynapseContext } from '../../../SynapseContext'
import {
  DownloadFromTableRequest,
  QueryBundleRequest,
  SelectColumn,
} from '../../../synapseTypes'

export function useExportToCavatica(
  queryBundleRequest: QueryBundleRequest,
  selectColumns?: SelectColumn[],
) {
  const { accessToken } = useSynapseContext()
  const separator = ','
  const writeHeader = true
  const includeRowIdAndRowVersion = false
  const originalSql = queryBundleRequest.query.sql
  return async () => {
    try {
      // add drs_uri to select
      const selectColumnsList = selectColumns?.map(col => col.name).join(',')
      const sql = `SELECT CONCAT('drs://repo-prod.prod.sagebase.org/syn', id, '.', currentVersion) AS drs_uri, ${selectColumnsList} FROM ${originalSql.slice(
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
      const presignedURL = await SynapseClient.getFileHandleByIdURL(
        result.resultsFileHandleId,
        accessToken,
      )
      window.open(presignedURL, '_blank')
    } catch (_err) {
      displayToast(_err, 'danger')
    }
  }
}
