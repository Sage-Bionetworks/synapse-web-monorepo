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
      const sql = `SELECT CONCAT('drs://repo-prod.prod.sagebase.org/syn', id, '.', currentVersion) AS drs_uri, name as file_name, ${selectColumnsList} FROM ${originalSql.slice(
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
      // Send this presigned URL to the Cavatica landing page where it can be processed
      // NOTE: This dev environment redirect link only works if you are in the Seven Bridges VPN, so this cannot be tested by Sage
      const cavaticaURL = `https://synapse-vayu.sbgenomics.com/import-redirect/drs/csv/?URL=${encodeURIComponent(
        presignedURL,
      )}`
      // TODO: change to production redirect link after the changes have been validated and they have released to prod
      // const cavaticaURL = `https://cavatica.sbgenomics.com/import-redirect/drs/csv/?URL=${encodeURIComponent(
      //   presignedURL,
      // )}`
      window.open(cavaticaURL, '_blank')
    } catch (_err) {
      displayToast(_err.reason, 'danger')
    }
  }
}
