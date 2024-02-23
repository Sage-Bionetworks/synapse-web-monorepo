import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import {
  SubmissionInfoPage,
  SubmissionInfoPageRequest,
} from '@sage-bionetworks/synapse-types'

export function useGetApprovedSubmissionInfoInfinite<
  TData = InfiniteData<SubmissionInfoPage>,
>(
  accessRequirementId: string,
  options?: Partial<
    UseInfiniteQueryOptions<
      SubmissionInfoPage,
      SynapseClientError,
      TData,
      SubmissionInfoPage,
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
