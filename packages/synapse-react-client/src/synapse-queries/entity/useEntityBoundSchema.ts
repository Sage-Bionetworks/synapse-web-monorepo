import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { JsonSchemaObjectBinding } from '@sage-bionetworks/synapse-types'
import { ValidationResults } from '@sage-bionetworks/synapse-types'

export function useGetSchemaBinding(
  entityId: string,
  options?: UseQueryOptions<JsonSchemaObjectBinding | null, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<JsonSchemaObjectBinding | null, SynapseClientError>(
    keyFactory.getEntityBoundJsonSchemaQueryKey(entityId),
    () => SynapseClient.getSchemaBinding(entityId, accessToken),
    options,
  )
}

export function useGetValidationResults(
  entityId: string,
  options?: UseQueryOptions<ValidationResults, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery<ValidationResults, SynapseClientError>(
    keyFactory.getEntitySchemaValidationResultsQueryKey(entityId),
    () => SynapseClient.getSchemaValidationResults(entityId, accessToken),
    options,
  )
}
