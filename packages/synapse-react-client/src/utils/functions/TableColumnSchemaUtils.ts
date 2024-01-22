import {
  ColumnChange,
  ColumnModel,
  TableUpdateTransactionRequest,
} from '@sage-bionetworks/synapse-types'
import { SetOptional } from 'type-fest'
import { createColumnModels } from '../../synapse-client'
import { isEqualTreatUndefinedAsMissing } from './IsEqualTreatUndefinedAsMissing'

/**
 * Creates the column models for a change request and returns the change request to be passed to the Synapse backend.
 *
 * Note that to update a column model and preserve table data, the ID of the
 * @param accessToken the Synapse access token
 * @param tableId the ID of the table to change
 * @param oldSchema the current schema of the table
 * @param proposedSchema the proposed schema of the table. For TableEntities, the IDs should be preserved for columns
 *                       that should maintain their data, even if the column model has changed
 */
export async function createTableUpdateTransactionRequest(
  accessToken: string,
  tableId: string,
  oldSchema: ColumnModel[],
  proposedSchema: SetOptional<ColumnModel, 'id'>[],
): Promise<TableUpdateTransactionRequest> {
  // Keep track of the old column models by ID
  const oldColumnModelId2Model: Map<string, ColumnModel> = new Map()
  for (const columnModel of oldSchema) {
    oldColumnModelId2Model.set(columnModel.id, columnModel)
  }

  // Create the new column models.
  // The newSchema will match the proposed schema, but column models that have been changed will end up getting a new ID
  let newSchema: SetOptional<ColumnModel, 'id'>[] = []
  for (const m of proposedSchema) {
    const copy: SetOptional<ColumnModel, 'id'> = {
      ...m,
    }
    if (copy.id != null) {
      // If there are any changes to the existing column model, remove the ID before we create the new one
      const oldColumnModel: ColumnModel | undefined =
        oldColumnModelId2Model.get(copy.id)
      if (
        oldColumnModel != undefined &&
        !isEqualTreatUndefinedAsMissing(oldColumnModel, copy)
      ) {
        delete copy.id
      }
    }
    newSchema.push(copy)
  }
  const createdColumnModels = (await createColumnModels(accessToken, newSchema))
    .list

  // now that all columns have been created, figure out the column changes (create, update, and no-op)
  const changes: ColumnChange[] = []
  const columnIdsThatWereChangedOrAdded: Set<string> = new Set()
  for (let i = 0; i < proposedSchema.length; i++) {
    const columnIdInProposedSchema: string | null = proposedSchema[i].id ?? null
    const newColumnId: string | null = createdColumnModels[i].id ?? null
    if (columnIdInProposedSchema)
      columnIdsThatWereChangedOrAdded.add(columnIdInProposedSchema)
    columnIdsThatWereChangedOrAdded.add(newColumnId)
    if (
      // The column has changed
      columnIdInProposedSchema != null &&
      columnIdInProposedSchema !== newColumnId
    ) {
      changes.push({ oldColumnId: columnIdInProposedSchema, newColumnId })
    } else if (
      // the column is new and is defined by the user
      columnIdInProposedSchema == null ||
      // the column is new but already has an ID (e.g. we are adding a default column to a view)
      !oldColumnModelId2Model.has(columnIdInProposedSchema)
    ) {
      changes.push({ oldColumnId: null, newColumnId })
    }
  }

  // delete columns that are not represented in the changes already (create or update)
  for (const oldColumnModel of oldSchema) {
    const oldColumnId: string | null = oldColumnModel.id
    if (!columnIdsThatWereChangedOrAdded.has(oldColumnId)) {
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
