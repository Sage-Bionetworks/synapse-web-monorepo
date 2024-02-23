import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError, useSynapseContext } from '../../utils'
import { PassingRecord, QuizResponse } from '@sage-bionetworks/synapse-types'
import { useGetCurrentUserProfile } from './useUserBundle'
import { USER_BUNDLE_MASK_IS_CERTIFIED } from '../../utils/SynapseConstants'

export function useGetPassingRecord(
  userId: string = '',
  options?: Partial<UseQueryOptions<PassingRecord, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getPassingRecordQueryKey(userId),
    queryFn: () => SynapseClient.getPassingRecord(userId, accessToken),
  })
}

export function usePostCertifiedUserTestResponse(
  options?: Partial<
    UseMutationOptions<PassingRecord, SynapseClientError, QuizResponse>
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()
  const { data: userProfile } = useGetCurrentUserProfile()

  return useMutation<PassingRecord, SynapseClientError, QuizResponse>({
    ...options,
    mutationFn: (quizResponse: QuizResponse) =>
      SynapseClient.postCertifiedUserTestResponse(accessToken, quizResponse),
    onSuccess: async (updatedPassingRecord, variables, ctx) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: keyFactory.getPassingRecordQueryKey(userProfile?.ownerId!),
        }),
        queryClient.invalidateQueries({
          queryKey: keyFactory.getUserBundleQueryKey(
            'current',
            USER_BUNDLE_MASK_IS_CERTIFIED,
          ),
        }),
      ])

      if (options?.onSuccess) {
        await options.onSuccess(updatedPassingRecord, variables, ctx)
      }
    },
  })
}
