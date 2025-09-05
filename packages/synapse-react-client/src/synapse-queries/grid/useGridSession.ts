import { useSynapseContext } from '@/utils/context/SynapseContext'
import startGridSession from '@/utils/functions/GridApiUtils'
import {
  CreateGridRequest,
  CreateGridResponse,
  CreateReplicaResponse,
  ListGridSessionsResponse,
  PostRepoV1GridSessionSessionIdReplicaRequest,
} from '@sage-bionetworks/synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from '@tanstack/react-query'

export function useCreateGridReplica(
  options?: Partial<
    UseMutationOptions<CreateReplicaResponse, SynapseClientError, string>
  >,
) {
  const queryClient = useQueryClient()
  const { keyFactory, synapseClient } = useSynapseContext()

  return useMutation<CreateReplicaResponse, SynapseClientError, string>({
    ...options,
    mutationFn: (sessionId: string) =>
      synapseClient.gridServicesClient.postRepoV1GridSessionSessionIdReplica({
        sessionId,
        createReplicaRequest: {
          gridSessionId: sessionId,
        },
      } as PostRepoV1GridSessionSessionIdReplicaRequest),
    onSuccess: async (replicaId, sessionId, ctx) => {
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getGridSessionListKey(),
      })
      if (options?.onSuccess) {
        await options.onSuccess(replicaId, sessionId, ctx)
      }
    },
  })
}

export function useDeleteGridSession(
  options?: Partial<UseMutationOptions<void, SynapseClientError, string>>,
) {
  const queryClient = useQueryClient()
  const { keyFactory, synapseClient } = useSynapseContext()

  return useMutation<void, SynapseClientError, string>({
    ...options,
    mutationFn: (sessionId: string) =>
      synapseClient.gridServicesClient.deleteRepoV1GridSessionSessionId({
        sessionId,
      }),
    onSuccess: async (updatedClient, sessionId, ctx) => {
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getGridSessionListKey(),
      })
      if (options?.onSuccess) {
        await options.onSuccess(updatedClient, sessionId, ctx)
      }
    },
  })
}

export function useGetGridSessionsInfinite<
  TData = InfiniteData<ListGridSessionsResponse>,
>(
  options?: Partial<
    UseInfiniteQueryOptions<
      ListGridSessionsResponse,
      SynapseClientError,
      TData,
      QueryKey,
      ListGridSessionsResponse['nextPageToken']
    >
  >,
) {
  const { keyFactory, synapseClient } = useSynapseContext()

  return useInfiniteQuery<
    ListGridSessionsResponse,
    SynapseClientError,
    TData,
    QueryKey,
    ListGridSessionsResponse['nextPageToken']
  >({
    ...options,
    queryKey: keyFactory.getGridSessionListKey(),
    queryFn: async context =>
      await synapseClient.gridServicesClient.postRepoV1GridSessionList({
        listGridSessionsRequest: { nextPageToken: context.pageParam },
      }),
    initialPageParam: undefined,
    getNextPageParam: page => page.nextPageToken,
  })
}

export const useCreateGridSession = (
  options?: Partial<
    UseMutationOptions<
      CreateGridResponse,
      SynapseClientError,
      CreateGridRequest
    >
  >,
) => {
  const { synapseClient } = useSynapseContext()

  return useMutation<CreateGridResponse, SynapseClientError, CreateGridRequest>(
    {
      ...options,
      mutationFn: async (request: CreateGridRequest) =>
        await startGridSession(synapseClient, request),
    },
  )
}
