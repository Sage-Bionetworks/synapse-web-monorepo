/*
 * Hooks to access Chat Services in Synapse
 */
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
} from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError, useSynapseContext } from '../../utils'
import {
  AgentChatRequest,
  AgentChatResponse,
  AgentSession,
  AsynchronousJobStatus,
  CreateAgentSessionRequest,
  SessionHistoryRequest,
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

export function useGetAgentChatSessionHistoryInfinite<
  TData = InfiniteData<SessionHistoryResponse>,
>(
  params: SessionHistoryRequest,
  options?: Partial<
    UseInfiniteQueryOptions<
      SessionHistoryResponse,
      SynapseClientError,
      TData,
      SessionHistoryResponse,
      QueryKey,
      SessionHistoryResponse['nextPageToken']
    >
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useInfiniteQuery<
    SessionHistoryResponse,
    SynapseClientError,
    TData,
    QueryKey,
    SessionHistoryResponse['nextPageToken']
  >({
    ...options,
    queryKey: keyFactory.chatAgentSessionHistoryQueryKey(params),
    queryFn: context =>
      SynapseClient.getSessionHistory({ ...params }, accessToken),
    initialPageParam: undefined,
    getNextPageParam: page => page.nextPageToken,
  })
}
