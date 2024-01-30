import { useQuery, UseQueryOptions } from 'react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context'
import { PassingRecord } from '@sage-bionetworks/synapse-types'

export function useGetPassingRecord(
  userId: string = '',
  options?: UseQueryOptions<PassingRecord, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<PassingRecord, SynapseClientError>(
    keyFactory.getPassingRecordQueryKey(userId),
    () => SynapseClient.getPassingRecord(userId, accessToken),
    options,
  )
}
