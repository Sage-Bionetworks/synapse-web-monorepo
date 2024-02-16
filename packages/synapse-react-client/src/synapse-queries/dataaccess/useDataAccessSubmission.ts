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
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import {
  ACTSubmissionStatus,
  CreateSubmissionRequest,
  Submission,
  SubmissionSearchRequest,
  SubmissionSearchResponse,
  SubmissionStateChangeRequest,
} from '@sage-bionetworks/synapse-types'

export default function useGetDataAccessSubmission(
  submissionId: string | number,
  options?: Partial<UseQueryOptions<Submission, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getDataAccessSubmissionQueryKey(
      String(submissionId.toString()),
    ),
    queryFn: () => SynapseClient.getSubmissionById(submissionId, accessToken),
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
      SubmissionSearchResponse,
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
        keyFactory.getDataAccessSubmissionQueryKey(variables.submissionId),
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
      // Invalidate the status of the relevant AR
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getAccessRequirementStatusQueryKey(
          variables.accessRequirementId,
        ),
      })
      // Invalidate all searches, in case it was an AR reviewer who created this submission
      await queryClient.invalidateQueries({
        queryKey: keyFactory.searchDataAccessSubmissionQueryKey(),
      })
      if (options?.onSuccess) {
        await options.onSuccess(data, variables, ctx)
      }
    },
  })
}
