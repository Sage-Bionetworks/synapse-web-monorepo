import { useQuery, UseQueryOptions } from 'react-query'
import { ActionRequiredList } from '@sage-bionetworks/synapse-types'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context'

export function useGetEntityActionsRequired(
  entityId: string,
  options?: UseQueryOptions<ActionRequiredList, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<ActionRequiredList, SynapseClientError>(
    keyFactory.getEntityActionsRequiredQueryKey(entityId),
    () => SynapseClient.getEntityDownloadActionsRequired(entityId, accessToken),
    options,
  )
}
