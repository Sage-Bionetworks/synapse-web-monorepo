import {
  DownloadPFBRequest,
  QueryBundleRequest,
  SelectColumn,
} from '@sage-bionetworks/synapse-types'
import { displayToast } from '../../components/ToastMessage/ToastMessage'
import { parseEntityIdFromSqlStatement } from '../../utils/functions/SqlFunctions'
import { useDownloadTableQueryResultAsPFB } from '../table/useDownloadTable'
import { addDrsUriToSql } from './useExportToCavatica'

export function useExportToTerra(
  queryBundleRequest: QueryBundleRequest,
  selectColumns?: SelectColumn[],
  fileIdColumnName: string = 'id',
  fileNameColumnName: string = 'name',
  fileVersionColumnName: string = 'currentVersion',
) {
  const { mutateAsync: createPfb } = useDownloadTableQueryResultAsPFB()
  return async () => {
    const originalSql = queryBundleRequest.query.sql
    try {
      const tableEntityId = parseEntityIdFromSqlStatement(
        queryBundleRequest.query.sql,
      )
      const sql = addDrsUriToSql(
        originalSql,
        selectColumns,
        fileIdColumnName,
        fileNameColumnName,
        fileVersionColumnName,
        true, // remove spaces from select columns
      )
      const downloadPfbRequest: DownloadPFBRequest = {
        sql,
        concreteType: 'org.sagebionetworks.repo.model.table.DownloadPFBRequest',
        entityId: tableEntityId,
        selectedFacets: queryBundleRequest.query.selectedFacets,
        additionalFilters: queryBundleRequest.query.additionalFilters,
        // Note - backend will respond with a 500 if illegal characters found in pfbEntityName (such as '-')
        pfbEntityName: `SynapseExport${tableEntityId}`,
      }
      const result = await createPfb(downloadPfbRequest)
      // Send the user to Terra with the DRS URI that can be used to download the PFB result
      const terraImportURL = `https://app.terra.bio/#import-data?format=pfb&url=${encodeURIComponent(
        `drs://repo-prod.prod.sagebase.org/fh${result.resultsFileHandleId}`,
      )}`
      window.open(terraImportURL, '_blank')
    } catch (_err) {
      displayToast(_err.reason, 'danger')
    }
  }
}
