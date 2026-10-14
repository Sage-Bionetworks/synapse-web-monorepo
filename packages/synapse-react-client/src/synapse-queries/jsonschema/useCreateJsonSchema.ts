/*
 * Hook for registering a new JSON Schema version with the schema registry.
 */
import { useSynapseContext } from '@/utils'
import { RJSFSchema } from '@rjsf/utils'
import {
  CreateSchemaResponse,
  JsonSchema,
  waitForAsyncResult,
} from '@sage-bionetworks/synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { JSONSchema7Definition } from 'json-schema'
import mapValues from 'lodash-es/mapValues'

/**
 * The generated `JsonSchema` model exposes the JSON Schema keywords that collide with reserved
 * words under underscored property names (`_enum`, `_const`, `_default`, `_if`, `_else`), and its
 * serializer only reads those names. A schema authored with the standard keywords must be mapped
 * to the model's names, or the serializer silently drops those keywords from the request.
 */
function toJsonSchemaModel(definition: JSONSchema7Definition): JsonSchema
function toJsonSchemaModel(
  definition: JSONSchema7Definition | undefined,
): JsonSchema | undefined
function toJsonSchemaModel(
  definition: JSONSchema7Definition | undefined,
): JsonSchema | undefined {
  if (definition === undefined || typeof definition === 'boolean') {
    return definition as JsonSchema | undefined
  }
  const {
    enum: _enum,
    const: _const,
    default: _default,
    if: _if,
    else: _else,
    then,
    not,
    contains,
    additionalProperties,
    items,
    properties,
    definitions,
    allOf,
    anyOf,
    oneOf,
    ...unrenamed
  } = definition

  return {
    ...unrenamed,
    _enum,
    _const,
    _default,
    _if: toJsonSchemaModel(_if),
    _else: toJsonSchemaModel(_else),
    then: toJsonSchemaModel(then),
    not: toJsonSchemaModel(not),
    contains: toJsonSchemaModel(contains),
    additionalProperties: toJsonSchemaModel(additionalProperties),
    // The model only represents a single `items` schema, not the tuple form.
    items: Array.isArray(items) ? undefined : toJsonSchemaModel(items),
    properties: properties && mapValues(properties, toJsonSchemaModel),
    definitions: definitions && mapValues(definitions, toJsonSchemaModel),
    allOf: allOf?.map(toJsonSchemaModel),
    anyOf: anyOf?.map(toJsonSchemaModel),
    oneOf: oneOf?.map(toJsonSchemaModel),
  } as JsonSchema
}

/**
 * Register a new JSON Schema version. The schema is given as a standard JSON Schema document.
 * @see POST /repo/v1/asynchronous/job
 */
export function useCreateJsonSchema(
  options?: Omit<
    UseMutationOptions<CreateSchemaResponse, SynapseClientError, RJSFSchema>,
    'mutationFn'
  >,
) {
  const { synapseClient } = useSynapseContext()

  return useMutation<CreateSchemaResponse, SynapseClientError, RJSFSchema>({
    ...options,
    mutationFn: async schema => {
      const jobStatus =
        await synapseClient.asynchronousJobServicesClient.postRepoV1AsynchronousJob(
          {
            asynchronousRequestBody: {
              concreteType:
                'org.sagebionetworks.repo.model.schema.CreateSchemaRequest',
              schema: toJsonSchemaModel(schema),
            },
          },
        )

      const jobResult = await waitForAsyncResult(() =>
        synapseClient.asynchronousJobServicesClient.getRepoV1AsynchronousJobJobId(
          { jobId: jobStatus.jobId! },
        ),
      )
      return jobResult.responseBody as CreateSchemaResponse
    },
  })
}
