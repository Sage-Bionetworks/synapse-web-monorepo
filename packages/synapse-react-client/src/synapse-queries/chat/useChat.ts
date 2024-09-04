/*
 * Hooks to access Chat Services in Synapse
 */

import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError, useSynapseContext } from '../../utils'
import {
  AgentChatRequest,
  AgentChatResponse,
  AgentSession,
  AsynchronousJobStatus,
  CreateAgentSessionRequest,
} from '@sage-bionetworks/synapse-types'

export function useCreateAgentSession(
  options?: UseMutationOptions<
    AgentSession,
    SynapseClientError,
    CreateAgentSessionRequest
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<
    AgentSession,
    SynapseClientError,
    CreateAgentSessionRequest
  >({
    mutationFn: (request: CreateAgentSessionRequest) =>
      SynapseClient.createAgentSession(request, accessToken),
    onSuccess: async (newAgentSession, variables, ctx) => {
      const queryKey = keyFactory.getAgentSessionQueryKey(
        newAgentSession.sessionId,
      )
      queryClient.invalidateQueries({
        queryKey: queryKey,
      })

      if (options?.onSuccess) {
        await options.onSuccess(newAgentSession, variables, ctx)
      }
    },
  })
}

export function useGetAgentChatWithAsyncStatus<
  TData = AsynchronousJobStatus<AgentChatRequest, AgentChatResponse>,
>(
  request: AgentChatRequest,
  options?: Partial<
    UseQueryOptions<
      AsynchronousJobStatus<AgentChatRequest, AgentChatResponse>,
      SynapseClientError,
      TData
    >
  >,
  setCurrentAsyncStatus?: (
    status: AsynchronousJobStatus<AgentChatRequest, AgentChatResponse>,
  ) => void,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getAgentChatWithAsyncStatusQueryKey(request),

    queryFn: () =>
      SynapseClient.getAgentChatAsyncJobResults(
        request,
        accessToken,
        setCurrentAsyncStatus,
      ),
  })
}
