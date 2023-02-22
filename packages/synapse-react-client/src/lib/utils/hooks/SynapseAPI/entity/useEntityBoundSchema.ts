import { UseQueryOptions, useQuery } from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { JsonSchemaObjectBinding } from '../../../synapseTypes/Schema/JsonSchemaObjectBinding'
import { ValidationResults } from '../../../synapseTypes/Schema/ValidationResults'
import useKeyFactory from '../useKeyFactory'

export function useGetSchemaBinding(
  entityId: string,
  options?: UseQueryOptions<JsonSchemaObjectBinding | null, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  const keyFactory = useKeyFactory()
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
  const { accessToken } = useSynapseContext()
  const keyFactory = useKeyFactory()

  return useQuery<ValidationResults, SynapseClientError>(
    keyFactory.getEntitySchemaValidationResultsQueryKey(entityId),
    () => SynapseClient.getSchemaValidationResults(entityId, accessToken),
    options,
  )
}
