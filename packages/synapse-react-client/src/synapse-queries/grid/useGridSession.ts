import { KeyFactory } from '@/synapse-queries/index'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import startGridSession from '@/utils/functions/GridApiUtils'
import {
  CreateGridRequest,
  CreateGridResponse,
  CreateReplicaResponse,
  GridSession,
  ListGridSessionsRequest,
  ListGridSessionsResponse,
  PostRepoV1GridSessionSessionIdReplicaRequest,
  SynapseClient,
  SynchronizeGridRequest,
  SynchronizeGridResponse,
  waitForAsyncResult,
} from '@sage-bionetworks/synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  InfiniteData,
  QueryKey,
  queryOptions,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
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

/**
 * Get the queryOptions to request list of Grid sessions. For an infinite query, use `useGetGridSessionsInfinite`
 * @param request
 * @param context
 */
export const getGridSessionsQuery = (
  request: ListGridSessionsRequest,
  context: {
    keyFactory: KeyFactory
    synapseClient: SynapseClient
  },
) =>
  queryOptions({
    queryKey: context.keyFactory.getGridSessionListKey(request),
    queryFn: () =>
      context.synapseClient.gridServicesClient.postRepoV1GridSessionList({
        listGridSessionsRequest: request,
      }),
  })

export function useGetGridSessionsInfinite<
  TData = InfiniteData<ListGridSessionsResponse>,
>(
  request: Omit<ListGridSessionsRequest, 'nextPageToken'>,
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
    queryKey: keyFactory.getGridSessionListKey(request),
    queryFn: async context =>
      await synapseClient.gridServicesClient.postRepoV1GridSessionList({
        listGridSessionsRequest: {
          ...request,
          nextPageToken: context.pageParam,
        },
      }),
    initialPageParam: undefined,
    getNextPageParam: page => page.nextPageToken,
  })
}

export function useGetGridSession<TData = GridSession>(
  sessionId: string,
  options?: Partial<UseQueryOptions<GridSession, SynapseClientError, TData>>,
) {
  const { keyFactory, synapseClient } = useSynapseContext()

  return useQuery<GridSession, SynapseClientError, TData>({
    ...options,
    queryKey: keyFactory.getGridSessionKey(sessionId),
    queryFn: () =>
      synapseClient.gridServicesClient.getRepoV1GridSessionSessionId({
        sessionId: sessionId,
      }),
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

/**
 * Synchronization is a two-phase process that ensures consistency between the user's local
 * changes and external changes made to the source:
 *
 * Phase 1: Schema Synchronization
 * - Synchronizes column definitions between the grid copy and source
 * - Resolves schema conflicts
 *
 * Phase 2: Row Synchronization
 * - Synchronizes row data using the final schema from Phase 1
 * - Merges cell-level changes when rows conflict
 * - Pushes user changes from copy to source
 * - Pulls external changes from source to copy
 *
 * @see {@link https://rest-docs.synapse.org/rest/POST/grid/synchronize/async/start.html}
 * @see {@link https://rest-docs.synapse.org/rest/GET/grid/synchronize/async/get/asyncToken.html}
 */
export function useSynchronizeGridSession(
  options?: Omit<
    UseMutationOptions<
      SynchronizeGridResponse,
      SynapseClientError,
      Omit<SynchronizeGridRequest, 'concreteType'>
    >,
    'mutationFn'
  >,
) {
  const { synapseClient } = useSynapseContext()

  return useMutation<
    SynchronizeGridResponse,
    SynapseClientError,
    Omit<SynchronizeGridRequest, 'concreteType'>
  >({
    ...options,
    mutationFn: async request => {
      const synchronizeGridRequest: SynchronizeGridRequest = {
        ...request,
        concreteType:
          'org.sagebionetworks.repo.model.grid.SynchronizeGridRequest',
      }

      // Start the async export job
      const asyncJobId =
        await synapseClient.gridServicesClient.postRepoV1GridSynchronizeAsyncStart(
          { synchronizeGridRequest },
        )

      // Poll for the async job
      const asyncJobResponse = await waitForAsyncResult(() =>
        synapseClient.asynchronousJobServicesClient.getRepoV1AsynchronousJobJobId(
          {
            jobId: asyncJobId.token!,
          },
        ),
      )

      return asyncJobResponse.responseBody as SynchronizeGridResponse
    },
  })
}
