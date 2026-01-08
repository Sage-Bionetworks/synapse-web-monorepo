/*
 * Hooks for accessing services related to JSON Schemas in the Synapse REST API
 */

import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
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
