/*
 * Hooks to access Chat Services in Synapse
 */
import SynapseClient from '@/synapse-client'
import { SynapseClientError, useSynapseContext } from '@/utils'
import {
  AgentChatRequest,
  AgentChatResponse,
  AgentSession,
  AsynchronousJobStatus,
  CreateAgentSessionRequest,
  SessionHistoryRequest,
  SessionHistoryResponse,
  TraceEventsRequest,
  TraceEventsResponse,
  UpdateAgentSessionRequest,
} from '@sage-bionetworks/synapse-types'
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query'

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

export function useUpdateAgentSession(
  options?: UseMutationOptions<
    AgentSession,
    SynapseClientError,
    UpdateAgentSessionRequest
  >,
) {
  const { accessToken } = useSynapseContext()

  return useMutation<
    AgentSession,
    SynapseClientError,
    UpdateAgentSessionRequest
  >({
    mutationFn: (request: UpdateAgentSessionRequest) =>
      SynapseClient.updateAgentSession(request, accessToken),
    onSuccess: async (session, variables, ctx) => {
      if (options?.onSuccess) {
        await options.onSuccess(session, variables, ctx)
      }
    },
    onError: async (err, variables, ctx) => {
      if (options?.onError) {
        await options.onError(err, variables, ctx)
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
    onError: (err, variables, ctx) => {
      if (options?.onError) {
        options.onError(err, variables, ctx)
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

export function useGetChatAgentTraceEvents(
  request: TraceEventsRequest,
  options?: Partial<UseQueryOptions<TraceEventsResponse, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getChatAgentTraceKey(request),

    queryFn: () => SynapseClient.getChatAgentTraceEvents(request, accessToken),
  })
}
