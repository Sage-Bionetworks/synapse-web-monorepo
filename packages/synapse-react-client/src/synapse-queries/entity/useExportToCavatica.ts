import { displayToast } from '@/components/ToastMessage/ToastMessage'
import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { parseEntityIdFromSqlStatement } from '@/utils/functions/SqlFunctions'
import {
  DownloadFromTableRequest,
  QueryBundleRequest,
  SelectColumn,
} from '@sage-bionetworks/synapse-types'

export function addDrsUriToSql(
  originalSql: string,
  selectColumns?: SelectColumn[],
  fileIdColumnName?: string,
  fileNameColumnName?: string,
  fileVersionColumnName?: string,
  removeSpacesFromSelectColumns: boolean = false,
): string {
  const selectColumnsList = selectColumns
    ?.filter(col => col.name != 'name')
    .map(col => {
      if (removeSpacesFromSelectColumns) {
        return `"${col.name}" as "${col.name.replace(/\s/g, '')}"`
      }
      // else
      return `"${col.name}"`
    })
    .join(',')
  return `SELECT CONCAT('drs://repo-prod.prod.sagebase.org/syn', ${fileIdColumnName}, '.', ${fileVersionColumnName}) AS drs_uri, ${fileNameColumnName} as name, ${selectColumnsList} FROM ${originalSql.slice(
    originalSql.toLowerCase().indexOf('from') + 'from'.length + 1,
  )}`
}

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
