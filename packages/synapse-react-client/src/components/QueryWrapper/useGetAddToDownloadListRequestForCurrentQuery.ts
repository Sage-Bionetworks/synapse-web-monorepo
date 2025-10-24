import { useQueryContext } from '@/components/QueryContext'
import {
  useHasSelectedRowsAtomValue,
  useRowSelectionPrimaryKeyAtomValue,
  useSelectedRowsAtomValue,
} from '@/components/QueryWrapper/TableRowSelectionState'
import { useSuspenseGetQueryMetadata } from '@/components/QueryWrapper/useGetQueryMetadata'
import { getFileColumnModelId } from '@/components/SynapseTable/SynapseTableUtils'
import { getPrimaryKeyINFilter } from '@/utils/functions/QueryFilterUtils'
import {
  AddToDownloadListRequest,
  TableQuery,
} from '@sage-bionetworks/synapse-client'
import { useMemo } from 'react'

/**
 * Returns an AddToDownloadListRequest object configured to add the current fileview/dataset result set to the download list
 * (loads data using QueryWrapper)
 */
export function useGetAddToDownloadListRequestForCurrentQuery(): AddToDownloadListRequest {
  const { getCurrentQueryRequest, fileIdColumnName, fileVersionColumnName } =
    useQueryContext()
  const { data: originalQueryMetadata } = useSuspenseGetQueryMetadata()

  const hasSelectedRows = useHasSelectedRowsAtomValue()
  const selectedRows = useSelectedRowsAtomValue()
  const rowSelectionPrimaryKey = useRowSelectionPrimaryKeyAtomValue()

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

    if (
      hasSelectedRows &&
      rowSelectionPrimaryKey &&
      originalQueryMetadata.selectColumns
    ) {
      const primaryKeyINFilter = getPrimaryKeyINFilter(
        rowSelectionPrimaryKey,
        selectedRows,
        originalQueryMetadata.selectColumns,
      )
      query.additionalFilters = [
        ...(query.additionalFilters || []),
        primaryKeyINFilter,
      ]
    }
    return {
      concreteType:
        'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
      query: query as TableQuery,
    }
  }, [
    originalQueryMetadata.columnModels,
    originalQueryMetadata.selectColumns,
    getCurrentQueryRequest,
    hasSelectedRows,
    rowSelectionPrimaryKey,
    selectedRows,
    fileIdColumnName,
    fileVersionColumnName,
  ])
}
