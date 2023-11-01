import {
  ColumnChange,
  ColumnModel,
  TableUpdateTransactionRequest,
} from '@sage-bionetworks/synapse-types'
import { SetOptional } from 'type-fest'
import { isEqual } from 'lodash-es'
import { createColumnModels } from '../../synapse-client'

/**
 * Creates the column models for a change request and returns
 * the change request to be passed to the Synapse backend.
 * @param accessToken
 * @param tableId
 * @param oldSchema
 * @param proposedSchema
 */
export async function createTableUpdateTransactionRequest(
  accessToken: string,
  tableId: string,
  oldSchema: ColumnModel[],
  proposedSchema: SetOptional<ColumnModel, 'id'>[],
): Promise<TableUpdateTransactionRequest> {
  // Create any models that do not have an ID, or that have changed
  const oldColumnModelId2Model: Map<string, ColumnModel> = new Map()
  for (const columnModel of oldSchema) {
    oldColumnModelId2Model.set(columnModel.id, columnModel)
  }

  // The newSchema will match the proposed schema, but column models that have been changed will have the ID stripped
  let newSchema: SetOptional<ColumnModel, 'id'>[] = []
  for (const m of proposedSchema) {
    const copy: SetOptional<ColumnModel, 'id'> = {
      ...m,
    }
    if (copy.id != null) {
      // any changes to the existing column model?
      const oldColumnModel: ColumnModel | undefined =
        oldColumnModelId2Model.get(copy.id)
      if (oldColumnModel != undefined && !isEqual(oldColumnModel, copy)) {
        delete copy.id
      }
    }
    newSchema.push(copy)
  }
  const createdColumnModels = (await createColumnModels(accessToken, newSchema))
    .list

  // now that all columns have been created, figure out the column changes (create, update, and no-op)
  // keep track of column ids to figure out what columns were deleted.
  const changes: ColumnChange[] = []
  const columnIds: Set<string | null> = new Set()
  for (let i = 0; i < proposedSchema.length; i++) {
    const oldColumnId: string | null = proposedSchema[i].id ?? null
    const newColumnId: string | null = createdColumnModels[i].id ?? null
    columnIds.add(oldColumnId)
    columnIds.add(newColumnId)
    if (oldColumnId !== newColumnId) {
      changes.push({ oldColumnId, newColumnId })
    }
  }

  // delete columns that are not represented in the changes already (create or update)
  for (const oldColumnModel of oldSchema) {
    const oldColumnId: string | null = oldColumnModel.id
    if (!columnIds.has(oldColumnId)) {
      changes.push({ oldColumnId, newColumnId: null })
    }
  }

  return {
    concreteType:
      'org.sagebionetworks.repo.model.table.TableUpdateTransactionRequest',
    entityId: tableId,
    changes: [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.TableSchemaChangeRequest',
        entityId: tableId,
        changes: changes,
        orderedColumnIds: createdColumnModels.map(cm => cm.id),
      },
    ],
  }
}
