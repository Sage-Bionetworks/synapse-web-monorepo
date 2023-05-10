import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { Submission } from '../../../synapseTypes/AccessRequirement/Submission'
import { SubmissionStateChangeRequest } from '../../../synapseTypes/AccessRequirement/SubmissionStateChangeRequest'
import {
  SubmissionSearchRequest,
  SubmissionSearchResponse,
} from '../../../synapseTypes/AccessSubmission'
import {
  ACTSubmissionStatus,
  CreateSubmissionRequest,
} from '../../../synapseTypes'

export default function useGetDataAccessSubmission(
  submissionId: string | number,
  options?: UseQueryOptions<Submission, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery<Submission, SynapseClientError>(
    keyFactory.getDataAccessSubmissionQueryKey(String(submissionId.toString())),
    () => SynapseClient.getSubmissionById(submissionId, accessToken),
    options,
  )
}

export function useSearchAccessSubmissionsInfinite(
  params: SubmissionSearchRequest,
  options?: UseInfiniteQueryOptions<
    SubmissionSearchResponse,
    SynapseClientError
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useInfiniteQuery<SubmissionSearchResponse, SynapseClientError>(
    keyFactory.searchDataAccessSubmissionQueryKey(params),
    async context => {
      return await SynapseClient.searchAccessSubmission(
        {
          ...params,
          nextPageToken: context.pageParam,
        },
        accessToken,
      )
    },
    {
      ...options,
      getNextPageParam: page => page.nextPageToken,
    },
  )
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
  >(
    (request: SubmissionStateChangeRequest): Promise<Submission> =>
      SynapseClient.updateSubmissionStatus(request, accessToken),
    {
      ...options,
      onSuccess: async (updatedSubmission, variables, ctx) => {
        // Invalidate all searches, since updating the status will affect filtered search results
        await queryClient.invalidateQueries(
          keyFactory.searchDataAccessSubmissionQueryKey(),
        )
        // Update the query data for the updated submission
        queryClient.setQueryData(
          keyFactory.getDataAccessSubmissionQueryKey(variables.submissionId),
          updatedSubmission,
        )

        if (options?.onSuccess) {
          await options.onSuccess(updatedSubmission, variables, ctx)
        }
      },
    },
  )
}

export function useSubmitDataAccessRequest(
  options?: UseMutationOptions<
    ACTSubmissionStatus,
    SynapseClientError,
    { request: CreateSubmissionRequest; accessRequirementId: string }
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<
    ACTSubmissionStatus,
    SynapseClientError,
    { request: CreateSubmissionRequest; accessRequirementId: string }
  >(
    ({ request }): Promise<ACTSubmissionStatus> =>
      SynapseClient.submitDataAccessRequest(request, accessToken!),
    {
      ...options,
      onSuccess: async (data, variables, ctx) => {
        // Invalidate the status of the relevant AR
        await queryClient.invalidateQueries(
          keyFactory.getAccessRequirementStatusQueryKey(
            variables.accessRequirementId,
          ),
        )
        // Invalidate all searches, in case it was an AR reviewer who created this submission
        await queryClient.invalidateQueries(
          keyFactory.searchDataAccessSubmissionQueryKey(),
        )
        if (options?.onSuccess) {
          await options.onSuccess(data, variables, ctx)
        }
      },
    },
  )
}
