import { useQueryContext } from '@/components/QueryContext'
import { useSuspenseGetQueryMetadata } from '@/components/QueryWrapper/useGetQueryMetadata'
import { getFileColumnModelId } from '@/components/SynapseTable/SynapseTableUtils'
import { useGetEntity } from '@/synapse-queries'
import { isDataset, isEntityView } from '@/utils/functions/EntityTypeUtils'
import {
  AddToDownloadListRequest,
  TableQuery,
} from '@sage-bionetworks/synapse-client'
import { Table } from '@sage-bionetworks/synapse-types'
import { useMemo } from 'react'

/**
 * Returns an AddToDownloadListRequest object configured to add the current fileview/dataset result set to the download list
 * (loads data using QueryWrapper). Selected rows are not considered; see `useAddSelectedRowsToDownloadList`.
 *
 * Files are added at the version in `fileVersionColumnName`, else at the row version for views and datasets, else at
 * their current version.
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
    // set the query.selectFileColumn
    if (fileIdColumnName && fileVersionColumnName) {
      // find the column model ID and set the parameters
      const fileIdColumnModel = originalQueryMetadata.columnModels?.find(
        col => col.name == fileIdColumnName,
      )
      const fileVersionColumnModel = originalQueryMetadata.columnModels?.find(
        col => col.name == fileVersionColumnName,
      )

      query.selectFileColumn = fileIdColumnModel
        ? Number(fileIdColumnModel.id)
        : undefined
      query.selectFileVersionColumn = fileVersionColumnModel
        ? Number(fileVersionColumnModel.id)
        : undefined
    } else {
      const fileColumnId = getFileColumnModelId(
        originalQueryMetadata.columnModels,
      )
      if (fileColumnId) {
        query.selectFileColumn = Number(fileColumnId)
      }
    }

    // The server infers the file version only for views and datasets (from the row version); other tables must name
    // a version column or add the current version.
    const addsCurrentVersion =
      query.selectFileVersionColumn === undefined &&
      entity !== undefined &&
      !isEntityView(entity) &&
      !isDataset(entity)

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
