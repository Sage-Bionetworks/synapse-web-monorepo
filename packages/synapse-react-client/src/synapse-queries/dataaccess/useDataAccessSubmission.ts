import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
import type {
  UserSubmissionSearchRequest,
  UserSubmissionSearchResponse,
} from '@sage-bionetworks/synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  ACTSubmissionStatus,
  CreateSubmissionRequest,
  Submission,
  SubmissionSearchRequest,
  SubmissionSearchResponse,
  SubmissionStateChangeRequest,
} from '@sage-bionetworks/synapse-types'
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'

export default function useGetDataAccessSubmission(
  submissionId: string | number,
  options?: Partial<UseQueryOptions<Submission, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getDataAccessSubmissionByIdQueryKey(
      String(submissionId.toString()),
    ),
    queryFn: () => SynapseClient.getSubmissionById(submissionId, accessToken),
  })
}

/**
 * Retrieve a list of submissions for a given access requirement ID, where the calling user is an accessor. Allows to
 * optionally filter by accessRequirement Ids, submission state and sort by the associated fields in the
 * SubmissionSearchSort.
 *
 * https://rest-docs.synapse.org/rest/POST/dataAccessSubmission/userRequests.html
 * @param params
 * @param options
 */
export function useSearchAccessSubmissionUserRequestsInfinite<
  TData = InfiniteData<UserSubmissionSearchResponse>,
>(
  params?: UserSubmissionSearchRequest,
  options?: Partial<
    UseInfiniteQueryOptions<
      UserSubmissionSearchResponse,
      SynapseClientError,
      TData,
      QueryKey,
      UserSubmissionSearchResponse['nextPageToken']
    >
  >,
) {
  const { keyFactory, synapseClient } = useSynapseContext()

  return useInfiniteQuery<
    UserSubmissionSearchResponse,
    SynapseClientError,
    TData,
    QueryKey,
    UserSubmissionSearchResponse['nextPageToken']
  >({
    ...options,
    queryKey: keyFactory.searchDataAccessSubmissionUserRequestsQueryKey(params),
    queryFn: context =>
      synapseClient.dataAccessServicesClient.postRepoV1DataAccessSubmissionUserRequests(
        {
          userSubmissionSearchRequest: {
            ...params,
            nextPageToken: context.pageParam,
          },
        },
      ),
    initialPageParam: undefined,
    getNextPageParam: page => page.nextPageToken,
  })
}

export function useSearchAccessSubmissionsInfinite<
  TData = InfiniteData<SubmissionSearchResponse>,
>(
  params: SubmissionSearchRequest,
  options?: Partial<
    UseInfiniteQueryOptions<
      SubmissionSearchResponse,
      SynapseClientError,
      TData,
      QueryKey,
      SubmissionSearchResponse['nextPageToken']
    >
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useInfiniteQuery<
    SubmissionSearchResponse,
    SynapseClientError,
    TData,
    QueryKey,
    SubmissionSearchResponse['nextPageToken']
  >({
    ...options,
    queryKey: keyFactory.searchDataAccessSubmissionQueryKey(params),
    queryFn: async context => {
      return await SynapseClient.searchAccessSubmission(
        {
          ...params,
          nextPageToken: context.pageParam,
        },
        accessToken,
      )
    },
    initialPageParam: undefined,
    getNextPageParam: page => page.nextPageToken,
  })
}

export function useUpdateDataAccessSubmissionState(
  options?: UseMutationOptions<
    Submission,
    SynapseClientError,
    SubmissionStateChangeRequest
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<
    Submission,
    SynapseClientError,
    SubmissionStateChangeRequest
  >({
    ...options,
    mutationFn: (request: SubmissionStateChangeRequest): Promise<Submission> =>
      SynapseClient.updateSubmissionStatus(request, accessToken),
    onSuccess: async (updatedSubmission, variables, ctx) => {
      // Invalidate all searches, since updating the status will affect filtered search results
      await queryClient.invalidateQueries({
        queryKey: keyFactory.searchDataAccessSubmissionQueryKey(),
      })
      // Update the query data for the updated submission
      queryClient.setQueryData(
        keyFactory.getDataAccessSubmissionByIdQueryKey(variables.submissionId),
        updatedSubmission,
      )

      if (options?.onSuccess) {
        await options.onSuccess(updatedSubmission, variables, ctx)
      }
    },
  })
}

export function useSubmitDataAccessRequest(
  options?: Partial<
    UseMutationOptions<
      ACTSubmissionStatus,
      SynapseClientError,
      { request: CreateSubmissionRequest; accessRequirementId: string }
    >
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<
    ACTSubmissionStatus,
    SynapseClientError,
    { request: CreateSubmissionRequest; accessRequirementId: string }
  >({
    ...options,
    mutationFn: async ({
      request,
      accessRequirementId,
    }): Promise<ACTSubmissionStatus> => {
      // The subjectId or subjectType may not be known, so pick an arbitrary one off of the AR (SWC-6490)
      if (request.subjectId == null || request.subjectType == null) {
        const { subjects } = await SynapseClient.getSubjects(
          accessToken,
          accessRequirementId,
        )
        request.subjectId = subjects[0].id
        request.subjectType = subjects[0].type
      }
      return SynapseClient.submitDataAccessRequest(request, accessToken!)
    },
    onSuccess: async (data, variables, ctx) => {
      await Promise.all([
        // Invalidate the status of the relevant AR
        queryClient.invalidateQueries({
          queryKey: keyFactory.getAccessRequirementStatusQueryKey(
            variables.accessRequirementId,
          ),
        }),
        // Invalidate all searches for AR submissions
        queryClient.invalidateQueries({
          queryKey: keyFactory.getDataAccessSubmissionQueryKey(),
        }),
      ])

      if (options?.onSuccess) {
        await options.onSuccess(data, variables, ctx)
      }
    },
  })
}
