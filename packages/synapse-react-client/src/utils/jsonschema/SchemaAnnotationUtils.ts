/**
 * Utilities for retrieving annotation fields (e.g. "title", "description") from JSON Schemas
 */

import { hasSchema, SchemaObject } from '@hyperjump/json-schema'
import { registerSchema } from '@hyperjump/json-schema/draft-07'
import * as AnnotatedInstance from '@hyperjump/json-schema/annotated-instance/experimental'
import { annotate } from '@hyperjump/json-schema/annotations/experimental'
import { JsonNode } from '@hyperjump/json-schema/instance/experimental'
import { Json } from '@sage-bionetworks/synapse-client'
import { useQuery } from '@tanstack/react-query'
import { JSONSchema7 } from 'json-schema'
import { useEffect, useState } from 'react'

/**
 * Get the value of a specified annotation for a specified key described in the JsonNode
 * @param key - the property key for which the description should be retrieved.
 * @param instance - a JsonNode resolved by the `annotate` API provided by @hyperjump/json-schema/annotations/experimental
 * @param annotationKey - the value that corresponds to the annotation to retrieve, e.g. "title", "description"
 */
export function getSchemaAnnotationForProperty(
  key: string,
  instance: JsonNode,
  annotationKey: string,
): string | undefined {
  if (instance) {
    // Get the title of each of the properties in the object
    for (const [
      propertyNameNode,
      propertyInstance,
    ] of AnnotatedInstance.entries(instance)) {
      const propertyName = AnnotatedInstance.value(propertyNameNode)
      if (propertyName === key) {
        const annotationValue = AnnotatedInstance.annotation(
          propertyInstance,
          annotationKey,
        )[0] as string | undefined
        return annotationValue
      }
    }
  }

  return undefined
}

/**
 * Get the "title" for a specific key described in the JsonNode
 * @param key - the property key for which the description should be retrieved.
 * @param instance - a JsonNode resolved by the `annotate` API provided by @hyperjump/json-schema/annotations/experimental
 */
export function getDisplayedAnnotationTitle(
  key: string,
  instance?: JsonNode | null,
): string {
  if (instance) {
    const titleFromSchema = getSchemaAnnotationForProperty(
      key,
      instance,
      'title',
    )
    if (titleFromSchema) {
      return titleFromSchema
    }
  }

  return key
}

/**
 * Get the "description" for a specific key described in the JsonNode
 * @param key - the property key for which the description should be retrieved.
 * @param instance - a JsonNode resolved by the `annotate` API provided by @hyperjump/json-schema/annotations/experimental
 */
export function getDisplayedAnnotationDescription(
  key: string,
  instance?: JsonNode | null,
): string | undefined {
  if (instance) {
    return getSchemaAnnotationForProperty(key, instance, 'description')
  }

  return undefined
}

/**
 * Registers a schema with @hyperjump/json-schema.
 * @param schema
 * @return boolean indicating if the schema is registered.
 */
export function useRegisterSchema(schema?: JSONSchema7) {
  const [isRegistered, setIsRegistered] = useState(false)

  useEffect(() => {
    if (schema && schema.$id) {
      // The schema can be registered
      if (!hasSchema(schema.$id)) {
        try {
          registerSchema(schema as SchemaObject)
          setIsRegistered(true)
        } catch (e) {
          console.error(
            'Unable to register JSON Schema in @hyperjump/json-schema:',
            e,
          )
        }
      } else {
        // Already registered, update local state.
        setIsRegistered(true)
      }
    }
    // TODO: Unregister the schema to avoid memory bloat
    // This would require syncing with the current state of schemas being used to make sure that we don't unregister a
    // schema being used by multiple hook instances
  }, [schema])

  return isRegistered
}

/**
 * Given a JSON document and a schema that describes it, return a query result that
 * resolves a JsonNode that can be used to retrieve schema annotations. Uses the `annotate` API provided
 * by @hyperjump/json-schema/annotations/experimental
 * @param json - a JSON document
 * @param schema - a JSON Schema that describes the JSON document
 */
export function useGetAnnotatedJsonInstance(json?: Json, schema?: JSONSchema7) {
  const schemaIsRegistered = useRegisterSchema(schema)

  return useQuery<JsonNode | null>({
    queryKey: ['getAnnotatedInstance', { json, schema, schemaIsRegistered }],
    queryFn: () => {
      if (json && schema && schemaIsRegistered) {
        try {
          return annotate(schema.$id!, json)
        } catch (e) {
          console.error('Could not create annotated schema instance:', e)
        }
      }
      return null
    },
    enabled: Boolean(schema && json),
  })
}
