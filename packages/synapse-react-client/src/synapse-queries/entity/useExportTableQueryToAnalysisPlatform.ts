import {
  QueryBundleRequest,
  SelectColumn,
} from '@sage-bionetworks/synapse-types'
import { useExportToCavatica } from './useExportToCavatica'
import { useExportToTerra } from './useExportToTerra'
import { useExportToPluto } from './useExportToPluto'

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

  const exportToTerra = useExportToTerra(
    queryBundleRequest,
    selectColumns,
    fileIdColumnName,
    fileNameColumnName,
    fileVersionColumnName,
  )
  const exportToPluto = useExportToPluto(
    queryBundleRequest,
    selectColumns,
    fileIdColumnName,
    fileNameColumnName,
    fileVersionColumnName,
  )
  const exportToPlutoDev = useExportToPluto(
    queryBundleRequest,
    selectColumns,
    fileIdColumnName,
    fileNameColumnName,
    fileVersionColumnName,
    true,
  )

  return {
    exportToCavatica,
    exportToTerra,
    exportToPluto,
    exportToPlutoDev,
  }
}
