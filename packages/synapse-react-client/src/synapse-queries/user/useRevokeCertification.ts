import SynapseClient from '@/synapse-client'
import { SynapseClientError, useSynapseContext } from '@/utils'
import { USER_BUNDLE_MASK_IS_CERTIFIED } from '@/utils/SynapseConstants'
import { PassingRecord } from '@sage-bionetworks/synapse-types'
import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from '@tanstack/react-query'

export function useRevokeCertification(
  options?: Partial<
    UseMutationOptions<PassingRecord, SynapseClientError, string>
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<PassingRecord, SynapseClientError, string>({
    ...options,
    mutationFn: (userId: string) =>
      SynapseClient.revokeCertification(userId, accessToken!),
    onSuccess: async (updatedPassingRecord, userId, ctx) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: keyFactory.getUserBundleQueryKey(
            userId,
            USER_BUNDLE_MASK_IS_CERTIFIED,
          ),
        }),
      ])

      if (options?.onSuccess) {
        await options.onSuccess(updatedPassingRecord, userId, ctx)
      }
    },
  })
}
