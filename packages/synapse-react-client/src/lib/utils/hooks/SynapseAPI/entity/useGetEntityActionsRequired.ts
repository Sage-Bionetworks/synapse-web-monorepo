import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { ActionRequiredList } from '../../../synapseTypes/DownloadListV2/ActionRequired'

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
