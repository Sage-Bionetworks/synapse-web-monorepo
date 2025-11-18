import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  SubmissionInfoPage,
  SubmissionInfoPageRequest,
} from '@sage-bionetworks/synapse-types'
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query'

export function useGetApprovedSubmissionInfoInfinite<
  TData = InfiniteData<SubmissionInfoPage>,
>(
  accessRequirementId: string,
  options?: Partial<
    UseInfiniteQueryOptions<
      SubmissionInfoPage,
      SynapseClientError,
      TData,
      QueryKey,
      SubmissionInfoPage['nextPageToken']
    >
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const request: SubmissionInfoPageRequest = {
    accessRequirementId,
  }
  return useInfiniteQuery<
    SubmissionInfoPage,
    SynapseClientError,
    TData,
    QueryKey,
    SubmissionInfoPage['nextPageToken']
  >({
    ...options,
    queryKey: keyFactory.getApprovedSubmissionInfoQueryKey(request),
    queryFn: async context => {
      return await SynapseClient.getApprovedSubmissionInfo(
        { ...request, nextPageToken: context.pageParam },
        accessToken,
      )
    },
    initialPageParam: undefined,
    getNextPageParam: page => page.nextPageToken,
  })
}
