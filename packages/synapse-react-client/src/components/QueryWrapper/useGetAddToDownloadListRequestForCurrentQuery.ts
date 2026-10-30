import { useQueryContext } from '@/components/QueryContext'
import { useSuspenseGetQueryMetadata } from '@/components/QueryWrapper/useGetQueryMetadata'
import { useGetEntity } from '@/synapse-queries'
import {
  AddToDownloadListRequest,
  TableQuery,
} from '@sage-bionetworks/synapse-client'
import { Table } from '@sage-bionetworks/synapse-types'
import { useMemo } from 'react'
import { getDownloadListFileColumns } from './downloadListFiles'

/**
 * Returns an AddToDownloadListRequest object configured to add the current fileview/dataset result set to the download list
 * (loads data using QueryWrapper). Selected rows are not considered; see `useAddSelectedRowsToDownloadList`.
 *
 * Files are read from `fileIdColumnName` (else the table's file column) at the version in `fileVersionColumnName`, else
 * at the row version for views and datasets, else at their current version.
 */
export function useGetAddToDownloadListRequestForCurrentQuery(): AddToDownloadListRequest {
  const {
    entityId,
    versionNumber,
    getCurrentQueryRequest,
    fileIdColumnName,
    fileVersionColumnName,
  } = useQueryContext()
  const { data: entity } = useGetEntity<Table>(entityId, versionNumber)
  const { data: originalQueryMetadata } = useSuspenseGetQueryMetadata()

  return useMemo(() => {
    const query = getCurrentQueryRequest().query
    const { fileColumn, fileVersionColumn, rowsAreEntities } =
      getDownloadListFileColumns(
        entity,
        originalQueryMetadata.columnModels,
        fileIdColumnName,
        fileVersionColumnName,
      )
    if (fileColumn) {
      query.selectFileColumn = Number(fileColumn.id)
    }
    if (fileVersionColumn) {
      query.selectFileVersionColumn = Number(fileVersionColumn.id)
    }

    // The server infers the file version only for views and datasets (from the row version); other tables must name
    // a version column or add the current version.
    const addsCurrentVersion =
      fileVersionColumn === undefined &&
      entity !== undefined &&
      !rowsAreEntities

    return {
      concreteType:
        'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
      query: query as TableQuery,
      ...(addsCurrentVersion ? { useVersionNumber: false } : {}),
    }
  }, [
    entity,
    originalQueryMetadata.columnModels,
    getCurrentQueryRequest,
    fileIdColumnName,
    fileVersionColumnName,
  ])
}
