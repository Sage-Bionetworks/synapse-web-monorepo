import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { JsonSchemaObjectBinding } from '@sage-bionetworks/synapse-types'
import { ValidationResults } from '@sage-bionetworks/synapse-types'

export function useGetSchemaBinding(
  entityId: string,
  options?: Partial<
    UseQueryOptions<JsonSchemaObjectBinding | null, SynapseClientError>
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getEntityBoundJsonSchemaQueryKey(entityId),
    queryFn: () => SynapseClient.getSchemaBinding(entityId, accessToken),
  })
}

export function useGetValidationResults(
  entityId: string,
  options?: Partial<UseQueryOptions<ValidationResults, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getEntitySchemaValidationResultsQueryKey(entityId),
    queryFn: () =>
      SynapseClient.getSchemaValidationResults(entityId, accessToken),
  })
}
