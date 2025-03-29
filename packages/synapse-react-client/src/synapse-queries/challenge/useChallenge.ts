import SynapseClient from '@/synapse-client'
import { SynapseClientError, useSynapseContext } from '@/utils'
import {
  ChallengeTeam,
  CreateChallengeTeamRequest,
} from '@sage-bionetworks/synapse-types'
import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from '@tanstack/react-query'

export function useRegisterTeamForChallenge(
  options?: Partial<
    UseMutationOptions<
      ChallengeTeam,
      SynapseClientError,
      CreateChallengeTeamRequest
    >
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()

  return useMutation<
    ChallengeTeam,
    SynapseClientError,
    CreateChallengeTeamRequest
  >({
    ...options,
    mutationFn: request =>
      SynapseClient.registerChallengeTeam(request, accessToken),
    onSuccess: async (data, request, context) => {
      if (options?.onSuccess) {
        return options.onSuccess(data, request, context)
      }
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getChallengeTeamListQueryKey(request.challengeId),
      })
      return
    },
  })
}
