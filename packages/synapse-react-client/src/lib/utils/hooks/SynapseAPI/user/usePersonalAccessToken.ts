import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
  QueryFunctionContext,
  QueryKey,
} from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { AccessTokenRecordList } from '../../../synapseTypes/AccessToken/AccessTokenRecord'
import { KeyFactory } from '../KeyFactory'

export function useGetPersonalAccessTokensInfinite(
  options?: UseInfiniteQueryOptions<AccessTokenRecordList, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  const keyFactory = new KeyFactory(accessToken)
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
