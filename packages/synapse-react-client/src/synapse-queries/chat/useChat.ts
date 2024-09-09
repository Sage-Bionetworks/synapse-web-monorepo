/*
 * Hooks to access Chat Services in Synapse
 */
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError, useSynapseContext } from '../../utils'
import {
  AgentChatRequest,
  AgentChatResponse,
  AgentSession,
  AsynchronousJobStatus,
  CreateAgentSessionRequest,
  SessionHistoryResponse,
} from '@sage-bionetworks/synapse-types'

export function useCreateAgentSession(
  options?: UseMutationOptions<
    AgentSession,
    SynapseClientError,
    CreateAgentSessionRequest
  >,
) {
  const { accessToken } = useSynapseContext()

  return useMutation<
    AgentSession,
    SynapseClientError,
    CreateAgentSessionRequest
  >({
    mutationFn: (request: CreateAgentSessionRequest) =>
      SynapseClient.createAgentSession(request, accessToken),
    onSuccess: async (newAgentSession, variables, ctx) => {
      if (options?.onSuccess) {
        await options.onSuccess(newAgentSession, variables, ctx)
      }
    },
  })
}

export function useSendChatMessageToAgent(
  options?: UseMutationOptions<
    AgentChatResponse,
    SynapseClientError,
    AgentChatRequest
  >,
  setCurrentAsyncStatus?: (
    status: AsynchronousJobStatus<AgentChatRequest, AgentChatResponse>,
  ) => void,
) {
  const { accessToken } = useSynapseContext()
  return useMutation<
    AsynchronousJobStatus<AgentChatRequest, AgentChatResponse>,
    SynapseClientError,
    AgentChatRequest
  >({
    mutationFn: (request: AgentChatRequest) => {
      return SynapseClient.getAgentChatAsyncJobResults(
        request,
        accessToken,
        setCurrentAsyncStatus,
      )
    },
    onSuccess: (data, variables, ctx) => {
      if (options?.onSuccess && data.responseBody) {
        options.onSuccess(data.responseBody, variables, ctx)
      }
    },
  })
}

export function useGetAgentChatSessionHistory(
  options?: UseMutationOptions<
    SessionHistoryResponse,
    SynapseClientError,
    string
  >,
) {
  const { accessToken } = useSynapseContext()

  return useMutation<SessionHistoryResponse, SynapseClientError, string>({
    mutationFn: (sessionId: string) =>
      SynapseClient.getSessionHistory(sessionId, accessToken),
    onSuccess: async (history, variables, ctx) => {
      if (options?.onSuccess) {
        await options.onSuccess(history, variables, ctx)
      }
    },
  })
}
