import { useExportGridAsCsv } from '@/synapse-queries/grid/useExportGrid'
import { useGetEntityQueryOptions } from '@/synapse-queries/entity/useEntity'
import { useTableUpdateTransaction } from '@/synapse-queries/table/useTableUpdateTransaction'
import { SynapseClientError } from '@/utils/index'
import {
  DownloadFromGridRequest,
  Entity,
  instanceOfTableEntity,
  TableUpdateTransactionRequest,
  TableUpdateTransactionResponse,
} from '@sage-bionetworks/synapse-client'
import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from '@tanstack/react-query'

export default function useMergeGridWithSource(
  options?: Omit<
    UseMutationOptions<
      TableUpdateTransactionResponse,
      SynapseClientError,
      { gridSessionId: string; sourceEntityId: string }
    >,
    'mutationFn'
  >,
) {
  const queryClient = useQueryClient()
  const { mutateAsync: exportGridToCsv } = useExportGridAsCsv()
  const { mutateAsync: updateTable } = useTableUpdateTransaction()
  const getEntityQueryOptions = useGetEntityQueryOptions()
  return useMutation<
    TableUpdateTransactionResponse,
    SynapseClientError,
    { gridSessionId: string; sourceEntityId: string }
  >({
    ...options,
    mutationFn: async ({ gridSessionId, sourceEntityId }) => {
      // First, get the type of the source entity. The request body for the export varies based on the entity type.
      const entity = await queryClient.fetchQuery(
        getEntityQueryOptions(sourceEntityId),
      )

      const gridExportRequest: DownloadFromGridRequest = {
        ...getDownloadFromGridRequestParamsForEntity(entity),
        sessionId: gridSessionId,
      }

      const gridExportResult = await exportGridToCsv(gridExportRequest)

      const tableUpdateRequest: TableUpdateTransactionRequest = {
        concreteType:
          'org.sagebionetworks.repo.model.table.TableUpdateTransactionRequest',
        entityId: sourceEntityId,
        changes: [
          {
            uploadFileHandleId: gridExportResult.resultsFileHandleId,
            tableId: sourceEntityId,
            concreteType:
              'org.sagebionetworks.repo.model.table.UploadToTableRequest',
          },
        ],
      }
      return updateTable(tableUpdateRequest)
    },
  })
}

export function getDownloadFromGridRequestParamsForEntity(
  entity: Entity,
): Omit<DownloadFromGridRequest, 'sessionId'> {
  if (instanceOfTableEntity(entity)) {
    return {
      includeRowIdAndRowVersion: true,
      includeEtag: false,
      concreteType:
        'org.sagebionetworks.repo.model.grid.DownloadFromGridRequest',
    }
  } else {
    return {
      includeRowIdAndRowVersion: true,
      includeEtag: true,
      concreteType:
        'org.sagebionetworks.repo.model.grid.DownloadFromGridRequest',
    }
  }
}
