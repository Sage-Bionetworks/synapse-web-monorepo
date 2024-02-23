import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError, useSynapseContext } from '../../utils'
import {
  AccessApprovalSearchRequest,
  AccessApprovalSearchResponse,
} from '@sage-bionetworks/synapse-types'

export function useSearchAccessApprovalsInfinite<
  TData = InfiniteData<AccessApprovalSearchResponse>,
>(
  params: AccessApprovalSearchRequest,
  options?: UseInfiniteQueryOptions<
    AccessApprovalSearchResponse,
    SynapseClientError,
    TData,
    AccessApprovalSearchResponse,
    QueryKey,
    AccessApprovalSearchResponse['nextPageToken']
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useInfiniteQuery<
    AccessApprovalSearchResponse,
    SynapseClientError,
    TData,
    QueryKey,
    AccessApprovalSearchResponse['nextPageToken']
  >({
    ...options,
    queryKey: keyFactory.searchAccessApprovalsQueryKey(params),
    queryFn: context =>
      SynapseClient.searchAccessApprovals(
        {
          ...params,
          nextPageToken: context.pageParam,
        },
        accessToken,
      ),
    initialPageParam: undefined,
    getNextPageParam: page => page.nextPageToken,
  })
}
