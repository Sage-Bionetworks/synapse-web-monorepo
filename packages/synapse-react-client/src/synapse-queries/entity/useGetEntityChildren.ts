import {
  QueryFunctionContext,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import {
  EntityChildrenRequest,
  EntityChildrenResponse,
} from '@sage-bionetworks/synapse-types'

export function useGetEntityChildren(
  request: EntityChildrenRequest,
  options?: UseQueryOptions<
    EntityChildrenResponse,
    SynapseClientError,
    EntityChildrenResponse
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
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
  const { accessToken, keyFactory } = useSynapseContext()
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
