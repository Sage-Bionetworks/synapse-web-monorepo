import { useGetEntity, useGetSchema } from '@/synapse-queries/index'
import {
  GridSession,
  instanceOfEntityView,
} from '@sage-bionetworks/synapse-client'
import {
  createComparator,
  createMerger,
  createShallowAllOfMerge,
} from '@x0k/json-schema-merge'
import {
  createDeduplicator,
  createIntersector,
} from '@x0k/json-schema-merge/lib/array'
import { JSONSchema7 } from 'json-schema'
import isObject from 'lodash-es/isObject'

const { compareSchemaDefinitions, compareSchemaValues } = createComparator()
const { mergeArrayOfSchemaDefinitions } = createMerger({
  intersectJson: createIntersector(compareSchemaValues),
  deduplicateJsonSchemaDef: createDeduplicator(compareSchemaDefinitions),
})
const shallowAllOfMerge = createShallowAllOfMerge(mergeArrayOfSchemaDefinitions)

const GRID_ENTITY_READONLY_PROPERTIES = [
  'id',
  'createdBy',
  'createdOn',
  'modifiedBy',
  'modifiedOn',
  'etag',
  'concreteType',
  'parentId',
  'path',
  'type',
  'currentVersion',
  'benefactorId',
]

/**
 * The Synapse JSON Schemas for entities do not indicate which properties should be readOnly.
 * Amend the schema to mark certain properties as readOnly so they cannot be edited in the grid.
 */
function addReadonlyToEntityProperties(jsonSchema: JSONSchema7): JSONSchema7 {
  if (!jsonSchema.properties) {
    return jsonSchema
  }

  const updatedProperties = { ...jsonSchema.properties }

  // List of properties to mark as read-only
  const propertiesToMakeReadonly = GRID_ENTITY_READONLY_PROPERTIES

  propertiesToMakeReadonly.forEach(prop => {
    if (updatedProperties[prop]) {
      updatedProperties[prop] = {
        ...(isObject(updatedProperties[prop]) ? updatedProperties[prop] : {}),
        readOnly: true,
      }
    } else {
      updatedProperties[prop] = { readOnly: true }
    }
  })

  return {
    ...jsonSchema,
    properties: updatedProperties,
  }
}

/**
 * Hook to get the JSON schema for a Data Grid, merging in the base Entity schema if the source entity is an EntityView.
 * @param session - The GridSession object.
 */
export default function useGetSchemaForGrid(session: GridSession | null) {
  const { data: jsonSchema } = useGetSchema(session?.gridJsonSchema$Id ?? '', {
    enabled: !!session?.gridJsonSchema$Id,
  })

  const { data: entityData } = useGetEntity(
    session?.sourceEntityId,
    undefined,
    {
      enabled: !!session?.sourceEntityId,
    },
  )

  let includeBaseEntitySchema = false
  if (entityData && instanceOfEntityView(entityData)) {
    includeBaseEntitySchema = true
  }

  const { data: entityJsonSchema } = useGetSchema(
    'org.sagebionetworks-repo.model.Entity',
    {
      enabled: includeBaseEntitySchema,
      select: addReadonlyToEntityProperties,
    },
  )

  if (jsonSchema && entityJsonSchema) {
    return shallowAllOfMerge({
      allOf: [entityJsonSchema, jsonSchema],
    }) as JSONSchema7
  } else {
    return jsonSchema
  }
}
