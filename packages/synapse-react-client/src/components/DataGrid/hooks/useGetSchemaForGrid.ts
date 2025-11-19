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

const { compareSchemaDefinitions, compareSchemaValues } = createComparator()

const { mergeArrayOfSchemaDefinitions } = createMerger({
  intersectJson: createIntersector(compareSchemaValues),
  deduplicateJsonSchemaDef: createDeduplicator(compareSchemaDefinitions),
})

const shallowAllOfMerge = createShallowAllOfMerge(mergeArrayOfSchemaDefinitions)

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
