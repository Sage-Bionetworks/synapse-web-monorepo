import {
  CsvTableDescriptor,
  TableUpdateTransactionRequest,
  TableUpdateTransactionResponse,
} from '@sage-bionetworks/synapse-client'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import {
  Entity,
  ColumnModel as SynapseTypesColumnModel,
  Table,
} from '@sage-bionetworks/synapse-types'
import { SetOptional } from 'type-fest'
import { SynapseClientError } from '@/utils/index'
import { useCreateEntity } from '@/synapse-queries'
import { useCreateColumnModels } from '@/synapse-queries/table/useColumnModel'
import { useTableUpdateTransaction } from '@/synapse-queries/table/useTableUpdateTransaction'

type CreateTableProps = {
  parentId: string
  tableName: string
  columnModels: SetOptional<SynapseTypesColumnModel, 'id'>[]
}

type UploadCsvToTableProps = {
  tableId?: string
  csvTableDescriptor: CsvTableDescriptor
  fileHandleId: string
  createTableProps?: CreateTableProps
}

/**
 * Mutation hook that applies a CSV to a Synapse Table.
 * - If `tableId` is provided, uploads the CSV rows to the existing table.
 * - Otherwise, creates ColumnModels, creates a new TableEntity under `parentId`,
 *   then uploads the CSV rows.
 */
export default function useUploadCsvToTable(
  options?: Omit<
    UseMutationOptions<
      TableUpdateTransactionResponse,
      SynapseClientError,
      UploadCsvToTableProps
    >,
    'mutationFn'
  >,
) {
  const { mutateAsync: createColumnModels } = useCreateColumnModels()
  const { mutateAsync: createEntity } = useCreateEntity()
  const { mutateAsync: tableTransaction } = useTableUpdateTransaction()

  return useMutation<
    TableUpdateTransactionResponse,
    SynapseClientError,
    UploadCsvToTableProps
  >({
    ...options,
    mutationFn: async ({
      csvTableDescriptor,
      fileHandleId,
      tableId,
      createTableProps,
    }) => {
      let resolvedTableId: string

      if (tableId) {
        resolvedTableId = tableId
      } else {
        const { parentId, tableName, columnModels } = createTableProps!
        const createdColumnModelResults = await createColumnModels(columnModels)

        const entityToCreate: Entity = {
          name: tableName,
          parentId: parentId,
          concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
        }
        ;(entityToCreate as Table)['columnIds'] = createdColumnModelResults.map(
          cm => cm.id,
        )

        const newEntity = await createEntity(entityToCreate)

        resolvedTableId = newEntity.id!
      }

      const tableUpdateRequest: TableUpdateTransactionRequest = {
        concreteType:
          'org.sagebionetworks.repo.model.table.TableUpdateTransactionRequest',
        entityId: resolvedTableId,
        changes: [
          {
            tableId: resolvedTableId,
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
