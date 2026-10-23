/*
 * Hooks for accessing services related to JSON Schemas in the Synapse REST API
 */

import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { JSONSchema7 } from 'json-schema'

export function useGetSchema(
  schema$id: string,
  options?: Partial<UseQueryOptions<JSONSchema7, SynapseClientError>>,
) {
  const { keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getValidationSchemaQueryKey(schema$id),

    queryFn: async () => {
      const response = await SynapseClient.getValidationSchema(schema$id)
      return response.validationSchema
    },
  })
}

/**
 * The schema as it was registered, with every `$ref` left intact. Use `useGetSchema` instead
 * when references need to be resolved.
 */
export function useGetRegisteredSchema(
  schema$id: string,
  options?: Partial<UseQueryOptions<JSONSchema7, SynapseClientError>>,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getRegisteredSchemaQueryKey(schema$id),
    queryFn: async () => {
      // The generated JsonSchema model adds every schema keyword to each nested schema, set to
      // undefined when absent. JSON Schema consumers treat a present `$ref` key as a reference
      // even when its value is undefined, so the body is read as-is instead.
      const response =
        await synapseClient.jsonSchemaServicesClient.getRepoV1SchemaTypeRegisteredIdRaw(
          { id: schema$id },
        )
      return (await response.raw.json()) as JSONSchema7
    },
  })
}
