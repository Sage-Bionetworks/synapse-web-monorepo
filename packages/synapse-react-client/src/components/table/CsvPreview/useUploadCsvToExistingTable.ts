import {
  CsvTableDescriptor,
  TableUpdateTransactionRequest,
  TableUpdateTransactionResponse,
} from '@sage-bionetworks/synapse-client'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { SynapseClientError } from '@/utils/index'
import { useTableUpdateTransaction } from '@/synapse-queries/table/useTableUpdateTransaction'

type UploadCsvToExistingTableProps = {
  tableId: string
  csvTableDescriptor: CsvTableDescriptor
  fileHandleId: string
}

/**
 * Mutation hook that uploads CSV rows to an existing Synapse Table.
 */
export default function useUploadCsvToExistingTable(
  options?: Omit<
    UseMutationOptions<
      TableUpdateTransactionResponse,
      SynapseClientError,
      UploadCsvToExistingTableProps
    >,
    'mutationFn'
  >,
) {
  const { mutateAsync: tableTransaction } = useTableUpdateTransaction()

  return useMutation<
    TableUpdateTransactionResponse,
    SynapseClientError,
    UploadCsvToExistingTableProps
  >({
    ...options,
    mutationFn: async ({ tableId, csvTableDescriptor, fileHandleId }) => {
      const tableUpdateRequest: TableUpdateTransactionRequest = {
        concreteType:
          'org.sagebionetworks.repo.model.table.TableUpdateTransactionRequest',
        entityId: tableId,
        changes: [
          {
            tableId: tableId,
            uploadFileHandleId: fileHandleId,
            csvTableDescriptor,
            concreteType:
              'org.sagebionetworks.repo.model.table.UploadToTableRequest',
          },
        ],
      }

      return tableTransaction(tableUpdateRequest)
    },
  })
}
