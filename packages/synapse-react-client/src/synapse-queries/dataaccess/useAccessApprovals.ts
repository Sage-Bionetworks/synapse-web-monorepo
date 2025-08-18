import SynapseClient from '@/synapse-client'
import { SynapseClientError, useSynapseContext } from '@/utils'
import { AccessApproval as OpenApiAccessApproval } from '@sage-bionetworks/synapse-client/generated/models/AccessApproval'
import {
  AccessApprovalSearchRequest,
  AccessApprovalSearchResponse,
} from '@sage-bionetworks/synapse-types'
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query'

/**
 * Allows a user to fetch their own access approval information specific to a submission, as long as the user is an accessor in the submission.
 * @param submissionId
 * @param options
 */
export function useGetUserAccessApproval(
  submissionId: string,
  options?: Partial<UseQueryOptions<OpenApiAccessApproval, SynapseClientError>>,
) {
  const { keyFactory, synapseClient } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getUserAccessApprovalQueryKey(submissionId),
    queryFn: () =>
      synapseClient.dataAccessServicesClient.getRepoV1DataAccessSubmissionSubmissionIdUserAccessApproval(
        { submissionId },
      ),
  })
}

export function useSearchAccessApprovalsInfinite<
  TData = InfiniteData<AccessApprovalSearchResponse>,
>(
  params: AccessApprovalSearchRequest,
  options?: UseInfiniteQueryOptions<
    AccessApprovalSearchResponse,
    SynapseClientError,
    TData,
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
