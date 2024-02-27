import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError, useSynapseContext } from '../../utils'
import { CreateTeamRequest, Team } from '@sage-bionetworks/synapse-types'

export function useGetTeam(
  teamId: string,
  options?: Partial<UseQueryOptions<Team, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery<Team, SynapseClientError>({
    ...options,
    queryKey: keyFactory.getTeamQueryKey(teamId),
    queryFn: () => SynapseClient.getTeam(teamId, accessToken),
  })
}

export function useCreateTeam(
  options?: Partial<
    UseMutationOptions<Team, SynapseClientError, CreateTeamRequest>
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation<Team, SynapseClientError, CreateTeamRequest>({
    ...options,
    mutationFn: team => SynapseClient.createTeam(team, accessToken),
    onSuccess: async (data, variables, context) => {
      if (options?.onSuccess) {
        options.onSuccess(data, variables, context)
      }
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getAllUserTeamsQueryKey(),
      })
    },
  })
}
