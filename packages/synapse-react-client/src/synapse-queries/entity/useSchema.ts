/*
 * Hooks for accessing services related to JSON Schemas in the Synapse REST API
 */

import { JSONSchema7 } from 'json-schema'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'

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
