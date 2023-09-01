import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
  QueryFunctionContext,
  QueryKey,
} from 'react-query'
import { AccessTokenRecordList } from '@sage-bionetworks/synapse-types'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'

export function useGetPersonalAccessTokensInfinite(
  options?: UseInfiniteQueryOptions<AccessTokenRecordList, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useInfiniteQuery<AccessTokenRecordList, SynapseClientError>(
    keyFactory.getPersonalAccessTokensQueryKey(),
    async (context: QueryFunctionContext<QueryKey, string | undefined>) => {
      return await SynapseClient.getPersonalAccessTokenRecords(
        accessToken,
        context.pageParam,
      )
    },
    {
      ...options,
      getNextPageParam: page => page.nextPageToken,
    },
  )
}
