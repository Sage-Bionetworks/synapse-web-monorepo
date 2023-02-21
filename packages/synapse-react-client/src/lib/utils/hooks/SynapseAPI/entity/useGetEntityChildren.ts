import {
  QueryFunctionContext,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import {
  EntityChildrenRequest,
  EntityChildrenResponse,
} from '../../../synapseTypes'
import { KeyFactory } from '../KeyFactory'

export function useGetEntityChildren(
  request: EntityChildrenRequest,
  options?: UseQueryOptions<
    EntityChildrenResponse,
    SynapseClientError,
    EntityChildrenResponse
  >,
) {
  const { accessToken } = useSynapseContext()
  const keyFactory = new KeyFactory(accessToken)
  return useQuery<EntityChildrenResponse, SynapseClientError>(
    keyFactory.getEntityChildrenQueryKey(request, false),
    () => SynapseClient.getEntityChildren(request, accessToken),
    options,
  )
}

export function useGetEntityChildrenInfinite(
  request: EntityChildrenRequest,
  options?: UseInfiniteQueryOptions<
    EntityChildrenResponse,
    SynapseClientError,
    EntityChildrenResponse
  >,
) {
  const { accessToken } = useSynapseContext()
  const keyFactory = new KeyFactory(accessToken)
  return useInfiniteQuery<EntityChildrenResponse, SynapseClientError>(
    keyFactory.getEntityChildrenQueryKey(request, true),
    async (context: QueryFunctionContext<QueryKey, string>) => {
      return await SynapseClient.getEntityChildren(
        {
          ...request,
          includeTotalChildCount: context.pageParam
            ? false
            : request.includeTotalChildCount, // only ask for the count when requesting the first page
          nextPageToken: context.pageParam,
        },
        accessToken,
        context.signal,
      )
    },
    {
      ...options,
      getNextPageParam: page => page.nextPageToken,
    },
  )
}
