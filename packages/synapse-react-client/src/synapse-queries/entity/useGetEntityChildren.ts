import {
  InfiniteData,
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
  options?: Partial<
    UseQueryOptions<
      EntityChildrenResponse,
      SynapseClientError,
      EntityChildrenResponse
    >
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getEntityChildrenQueryKey(request, false),
    queryFn: () => SynapseClient.getEntityChildren(request, accessToken),
  })
}

export function useGetEntityChildrenInfinite<
  TData = InfiniteData<EntityChildrenResponse>,
>(
  request: EntityChildrenRequest,
  options?: Partial<
    UseInfiniteQueryOptions<
      EntityChildrenResponse,
      SynapseClientError,
      TData,
      EntityChildrenResponse,
      QueryKey,
      EntityChildrenResponse['nextPageToken']
    >
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useInfiniteQuery<
    EntityChildrenResponse,
    SynapseClientError,
    TData,
    QueryKey,
    EntityChildrenResponse['nextPageToken']
  >({
    ...options,
    queryKey: keyFactory.getEntityChildrenQueryKey(request, true),
    queryFn: async context => {
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
    initialPageParam: undefined,
    getNextPageParam: page => page.nextPageToken,
  })
}
