import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context'
import { PassingRecord } from '@sage-bionetworks/synapse-types'
import { QuizResponse } from '@sage-bionetworks/synapse-types'
import { useGetCurrentUserProfile } from './useUserBundle'
import { USER_BUNDLE_MASK_IS_CERTIFIED } from '../../utils/SynapseConstants'

export function useGetPassingRecord(
  userId: string = '',
  options?: UseQueryOptions<PassingRecord, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<PassingRecord, SynapseClientError>(
    keyFactory.getPassingRecordQueryKey(userId),
    () => SynapseClient.getPassingRecord(userId, accessToken),
    options,
  )
}

export function usePostCertifiedUserTestResponse(
  options?: UseMutationOptions<PassingRecord, SynapseClientError, QuizResponse>,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()
  const { data: userProfile } = useGetCurrentUserProfile()

  return useMutation<PassingRecord, SynapseClientError, QuizResponse>(
    (quizResponse: QuizResponse) =>
      SynapseClient.postCertifiedUserTestResponse(accessToken, quizResponse),
    {
      ...options,
      onSuccess: async (updatedPassingRecord, variables, ctx) => {
        await Promise.all([
          queryClient.invalidateQueries(
            keyFactory.getPassingRecordQueryKey(userProfile?.ownerId!),
          ),
          queryClient.invalidateQueries(
            keyFactory.getUserBundleQueryKey(
              'current',
              USER_BUNDLE_MASK_IS_CERTIFIED,
            ),
          ),
        ])

        if (options?.onSuccess) {
          await options.onSuccess(updatedPassingRecord, variables, ctx)
        }
      },
    },
  )
}
