import {
  ColumnChange,
  ColumnModel,
  TableUpdateTransactionRequest,
} from '@sage-bionetworks/synapse-types'
import { SetOptional } from 'type-fest'
import { createColumnModels } from '../../synapse-client'
import { isEqualTreatUndefinedAsMissing } from './IsEqualTreatUndefinedAsMissing'

function validateProposedSchema(
  oldSchema: ColumnModel[],
  proposedSchema: SetOptional<ColumnModel, 'id'>[],
): void {
  // If the proposed schema contains any IDs that are not in the old schema, throw an error
  // We do this so we can accurately track updates to existing columns by using the ID that is already present
  const oldColumnModelIds: Set<string> = new Set()
  for (const columnModel of oldSchema) {
    oldColumnModelIds.add(columnModel.id)
  }
  for (const columnModel of proposedSchema) {
    if (columnModel.id != null && !oldColumnModelIds.has(columnModel.id)) {
      throw new Error(
        `Proposed schema contains a new column model with ID ${columnModel.id} that is not in the old schema.`,
      )
    }
  }
}

/**
 * Creates the column models for a change request and returns the change request to be passed to the Synapse backend.
 *
 * Note that to update a column model and preserve table data, the ID of the column in the oldSchema should be the same as the column ID in the proposedSchema.
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
  validateProposedSchema(oldSchema, proposedSchema)

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
  // We have to provide the backend with the set of columns to remove from the table schema.
  // Keep track of the column IDs that were modified or added to make it easier to determine this set.
  const columnIdsThatShouldNotBeRemovedFromSchema: Set<string> = new Set()
  for (let i = 0; i < proposedSchema.length; i++) {
    const columnIdInProposedSchema: string | null = proposedSchema[i].id ?? null
    const newColumnId: string = createdColumnModels[i].id
    if (columnIdInProposedSchema != null) {
      // This column was modified, so it should not be removed from the schema
      columnIdsThatShouldNotBeRemovedFromSchema.add(columnIdInProposedSchema)
    }
    columnIdsThatShouldNotBeRemovedFromSchema.add(newColumnId)
    if (
      columnIdInProposedSchema != null &&
      columnIdInProposedSchema !== newColumnId
    ) {
      // The column has changed
      changes.push({ oldColumnId: columnIdInProposedSchema, newColumnId })
    } else if (columnIdInProposedSchema == null) {
      // the column is new to the table
      changes.push({ oldColumnId: null, newColumnId })
    }
    // Otherwise, the column was in the old schema and was not modified. No change is needed.
  }

  // delete columns that were not updated, added, or unchanged in the table schema
  for (const oldColumnModel of oldSchema) {
    const oldColumnId: string | null = oldColumnModel.id
    if (!columnIdsThatShouldNotBeRemovedFromSchema.has(oldColumnId)) {
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
