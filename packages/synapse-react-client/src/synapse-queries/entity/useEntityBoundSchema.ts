import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  JsonSchemaObjectBinding,
  ValidationResults,
} from '@sage-bionetworks/synapse-types'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

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
