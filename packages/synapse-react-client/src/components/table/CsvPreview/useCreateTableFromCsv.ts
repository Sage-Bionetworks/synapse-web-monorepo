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

type CreateTableFromCsvProps = {
  parentId: string
  tableName: string
  columnModels: SetOptional<SynapseTypesColumnModel, 'id'>[]
  csvTableDescriptor: CsvTableDescriptor
  fileHandleId: string
}

/**
 * Mutation hook that creates a new Synapse Table from a CSV.
 * Creates ColumnModels, creates the TableEntity, then uploads the CSV rows.
 */
export default function useCreateTableFromCsv(
  options?: Omit<
    UseMutationOptions<
      TableUpdateTransactionResponse,
      SynapseClientError,
      CreateTableFromCsvProps
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
    CreateTableFromCsvProps
  >({
    ...options,
    mutationFn: async ({
      parentId,
      tableName,
      columnModels,
      csvTableDescriptor,
      fileHandleId,
    }) => {
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

      const tableUpdateRequest: TableUpdateTransactionRequest = {
        concreteType:
          'org.sagebionetworks.repo.model.table.TableUpdateTransactionRequest',
        entityId: newEntity.id!,
        changes: [
          {
            tableId: newEntity.id!,
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
