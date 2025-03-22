import {
  QueryBundleRequest,
  SelectColumn,
} from '@sage-bionetworks/synapse-types'
import { useExportToCavatica } from './useExportToCavatica'
import { useExportToTerra } from './useExportToTerra'

/**
 * Provides functions to export data from a Synapse table query to an external analysis platform.
 */
export function useExportTableQueryToAnalysisPlatform(options: {
  queryBundleRequest: QueryBundleRequest
  selectColumns?: SelectColumn[]
  fileIdColumnName?: string
  fileVersionColumnName?: string
  fileNameColumnName?: string
}) {
  const {
    queryBundleRequest,
    selectColumns,
    fileIdColumnName,
    fileVersionColumnName,
    fileNameColumnName,
  } = options

  const exportToCavatica = useExportToCavatica(
    queryBundleRequest,
    selectColumns,
    fileIdColumnName,
    fileNameColumnName,
    fileVersionColumnName,
  )

  const exportToTerra = useExportToTerra(queryBundleRequest)

  return {
    exportToCavatica,
    exportToTerra,
  }
}
