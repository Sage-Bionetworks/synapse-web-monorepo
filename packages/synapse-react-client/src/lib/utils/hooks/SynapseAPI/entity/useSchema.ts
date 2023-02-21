/*
 * Hooks for accessing services related to JSON Schemas in the Synapse REST API
 */

import { JSONSchema7 } from 'json-schema'
import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { KeyFactory } from '../KeyFactory'
import { useSynapseContext } from '../../../SynapseContext'

export function useGetSchema(
  schema$id: string,
  options?: UseQueryOptions<JSONSchema7, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  const keyFactory = new KeyFactory(accessToken)
  return useQuery<JSONSchema7, SynapseClientError>(
    keyFactory.getValidationSchemaQueryKey(schema$id),
    async () => {
      const response = await SynapseClient.getValidationSchema(schema$id)
      return response.validationSchema
    },
    options,
  )
}
