import {
  DownloadPFBRequest,
  QueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import { displayToast } from '../../components/ToastMessage/ToastMessage'
import { parseEntityIdFromSqlStatement } from '../../utils/functions/SqlFunctions'
import { useDownloadTableQueryResultAsPFB } from '../table/useDownloadTable'

export function useExportToTerra(queryBundleRequest: QueryBundleRequest) {
  const { mutateAsync: createPfb } = useDownloadTableQueryResultAsPFB()
  // TODO?: SQL may need to be modified (see CAVATICA example) to include fields such as ga4gh_drs_uri
  // Terra docs: https://support.terra.bio/hc/en-us/articles/360051722371-Data-table-column-names-imported-data#h_01ENT95G1B9JX40JJQPQFJ88Q7
  return async () => {
    try {
      const tableEntityId = parseEntityIdFromSqlStatement(
        queryBundleRequest.query.sql,
      )
      const downloadPfbRequest: DownloadPFBRequest = {
        concreteType: 'org.sagebionetworks.repo.model.table.DownloadPFBRequest',
        entityId: tableEntityId,
        sql: queryBundleRequest.query.sql,
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
