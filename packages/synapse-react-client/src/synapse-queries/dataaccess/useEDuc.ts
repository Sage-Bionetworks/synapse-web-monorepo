import { getAllOfNextPageTokenPaginatedService } from '@/synapse-client/SynapseClient'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  AccessRequestList,
  AccessRequestListRequest,
  AccessRequestSummary,
  EDucFileHandleId,
  EDucSignatureQuota,
  EDucSignatureStatus,
  EDucTemplateListRequest,
  EDucTemplatePage,
  EDucTemplateValidationResult,
} from '@sage-bionetworks/synapse-client'
import { SynapseClient } from '@sage-bionetworks/synapse-client/SynapseClient'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'

/**
 * List the eDUC templates registered in DocuSign (all pages).
 * @see POST /repo/v1/eDuc/template
 */
export function useListEDucTemplates<TData = InfiniteData<EDucTemplatePage>>(
  request: Omit<EDucTemplateListRequest, 'nextPageToken'> = {},
  options?: Partial<
    UseInfiniteQueryOptions<
      EDucTemplatePage,
      SynapseClientError,
      TData,
      QueryKey,
      EDucTemplatePage['nextPageToken']
    >
  >,
) {
  const { keyFactory, synapseClient } = useSynapseContext()

  return useInfiniteQuery<
    EDucTemplatePage,
    SynapseClientError,
    TData,
    QueryKey,
    EDucTemplatePage['nextPageToken']
  >({
    ...options,
    queryKey: keyFactory.listEDucTemplatesQueryKey(request),
    queryFn: context =>
      synapseClient.dataAccessServicesClient.postRepoV1EDucTemplate({
        eDucTemplateListRequest: {
          ...request,
          nextPageToken: context.pageParam,
        },
      }),
    initialPageParam: undefined,
    getNextPageParam: page => page.nextPageToken,
  })
}

/**
 * Validate a single eDUC template by ID (ACT-only).
 * @see GET /repo/v1/eDuc/template/{templateId}/validation
 */
export function useGetEDucTemplateValidation(
  templateId: string,
  options?: Partial<
    UseQueryOptions<EDucTemplateValidationResult, SynapseClientError>
  >,
) {
  const { keyFactory, synapseClient } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getEDucTemplateValidationQueryKey(templateId),
    queryFn: () =>
      synapseClient.dataAccessServicesClient.getRepoV1EDucTemplateTemplateIdValidation(
        { templateId },
      ),
  })
}

/**
 * List the data access requests that the calling user created or participates in.
 * @see POST /repo/v1/dataAccessRequest/list
 */
export function useListUserDataAccessRequests(
  request: AccessRequestListRequest = {},
  options?: Partial<UseQueryOptions<AccessRequestList, SynapseClientError>>,
) {
  const { keyFactory, synapseClient } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.listDataAccessRequestsQueryKey(request),
    queryFn: () =>
      synapseClient.dataAccessServicesClient.postRepoV1DataAccessRequestList({
        accessRequestListRequest: request,
      }),
  })
}

/**
 * List _all_ data access requests that the calling user created or participates in, walking every
 * page of `POST /repo/v1/dataAccessRequest/list` via `nextPageToken` inside the queryFn. Returns
 * the flattened list of {@link AccessRequestSummary}.
 *
 * Prefer this hook over {@link useListUserDataAccessRequests} when the caller needs the complete
 * list (for example, to filter results client-side). This avoids the render-per-page cascade of
 * `useInfiniteQuery` at the cost of a slightly longer initial load.
 *
 * @see POST /repo/v1/dataAccessRequest/list
 */
export function useListAllUserDataAccessRequests(
  request: Omit<AccessRequestListRequest, 'nextPageToken'> = {},
  options?: Partial<
    UseQueryOptions<AccessRequestSummary[], SynapseClientError>
  >,
) {
  const { keyFactory, synapseClient } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.listAllDataAccessRequestsQueryKey(request),
    queryFn: () =>
      getAllOfNextPageTokenPaginatedService<AccessRequestSummary>(
        async nextPageToken => {
          const response =
            await synapseClient.dataAccessServicesClient.postRepoV1DataAccessRequestList(
              {
                accessRequestListRequest: {
                  ...request,
                  nextPageToken: nextPageToken ?? undefined,
                },
              },
            )
          return {
            results: response.results ?? [],
            nextPageToken: response.nextPageToken,
          }
        },
      ),
  })
}

/**
 * Retrieve the pre-signing preview of the eDUC for a data access request.
 * @see GET /repo/v1/dataAccessRequest/{requestId}/preview
 */
export function useGetDataAccessRequestPreview(
  requestId: string,
  options?: Partial<UseQueryOptions<EDucFileHandleId, SynapseClientError>>,
) {
  const { keyFactory, synapseClient } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getDataAccessRequestPreviewQueryKey(requestId),
    queryFn: () =>
      synapseClient.dataAccessServicesClient.getRepoV1DataAccessRequestRequestIdPreview(
        { requestId },
      ),
  })
}

/**
 * Retrieve the current signature status of a data access request's routed eDUC.
 * @see GET /repo/v1/dataAccessRequest/{requestId}/signature/status
 */
export function useGetDataAccessRequestSignatureStatus(
  requestId: string,
  options?: Partial<UseQueryOptions<EDucSignatureStatus, SynapseClientError>>,
) {
  const { keyFactory, synapseClient } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getDataAccessRequestSignatureStatusQueryKey(requestId),
    queryFn: () =>
      synapseClient.dataAccessServicesClient.getRepoV1DataAccessRequestRequestIdSignatureStatus(
        { requestId },
      ),
  })
}

/**
 * Retrieve the file handle ID of the signed eDUC document for a data access request.
 * @see GET /repo/v1/dataAccessRequest/{requestId}/signature/filehandleId
 */
export function useGetDataAccessRequestSignedFileHandleId(
  requestId: string,
  options?: Partial<UseQueryOptions<EDucFileHandleId, SynapseClientError>>,
) {
  const { keyFactory, synapseClient } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey:
      keyFactory.getDataAccessRequestSignatureFileHandleIdQueryKey(requestId),
    queryFn: () =>
      synapseClient.dataAccessServicesClient.getRepoV1DataAccessRequestRequestIdSignatureFilehandleId(
        { requestId },
      ),
  })
}

/**
 * Retrieve the current eDUC signature quota (total allowed and remaining) for a data access
 * request. Used to preflight the "send for signature" action so it can be disabled when the
 * user is at or over quota.
 * @see GET /repo/v1/dataAccessRequest/{requestId}/signature/quota
 */
export function useGetDataAccessRequestSignatureQuota(
  requestId: string,
  options?: Partial<UseQueryOptions<EDucSignatureQuota, SynapseClientError>>,
) {
  const { keyFactory, synapseClient } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getDataAccessRequestSignatureQuotaQueryKey(requestId),
    queryFn: () =>
      synapseClient.dataAccessServicesClient.getRepoV1DataAccessRequestRequestIdSignatureQuota(
        { requestId },
      ),
  })
}

/**
 * Initiate the DocuSign routing for a data access request's eDUC.
 * @see POST /repo/v1/dataAccessRequest/{requestId}/signature
 */
export function useInitiateDataAccessRequestSignature(
  options?: UseMutationOptions<EDucSignatureQuota, SynapseClientError, string>,
) {
  const { synapseClient } = useSynapseContext()
  const queryClient = useQueryClient()
  const { keyFactory } = useSynapseContext()

  return useMutation<EDucSignatureQuota, SynapseClientError, string>({
    ...options,
    mutationFn: (requestId: string) =>
      synapseClient.dataAccessServicesClient.postRepoV1DataAccessRequestRequestIdSignature(
        { requestId },
      ),
    onSuccess: async (data, requestId, ctx) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: keyFactory.getDataAccessRequestSignatureQueryKey(requestId),
        }),
        queryClient.invalidateQueries({
          queryKey: keyFactory.getDataAccessRequestQueryKey(),
        }),
      ])
      if (options?.onSuccess) {
        return options.onSuccess(data, requestId, ctx)
      }
      return
    },
  })
}

/**
 * Reads the precheck's answer out of whichever shape it arrives in. The generated client types this
 * endpoint as a bare `boolean` because that is what the OpenAPI spec declares, but neither the
 * declared type nor the runtime value can be trusted directly: the deployed service answers with a
 * `{ result }` wrapper, and the client falls back to handing back the raw response text whenever
 * the content type isn't JSON. Every shape is therefore compared explicitly -- a truthiness check
 * would read both the object `{ result: false }` and the string `"false"` as `true`.
 */
function parseSignaturePrecheckResponse(response: unknown): boolean {
  const answer =
    typeof response === 'object' && response !== null && 'result' in response
      ? (response as { result: unknown }).result
      : response
  return answer === true || answer === 'true'
}

/**
 * Ask the server whether the data access request's pending changes can be applied to the envelope
 * that is already in flight. The service owns every reason an envelope might be uncorrectable --
 * completed, voided, cancelled, declined -- so the answer is never inferred from its status here.
 *
 * @see GET /repo/v1/dataAccessRequest/{requestId}/signature/precheck
 */
async function fetchSignaturePrecheck(
  synapseClient: SynapseClient,
  requestId: string,
): Promise<boolean> {
  const response: unknown =
    await synapseClient.dataAccessServicesClient.getRepoV1DataAccessRequestRequestIdSignaturePrecheck(
      { requestId },
    )
  return parseSignaturePrecheckResponse(response)
}

/**
 * {@link fetchSignaturePrecheck} as a mutation, for the moment a user commits to sending. Modeled
 * as a mutation despite being a GET because the answer decides which irreversible call follows, so
 * it must never be served from cache.
 */
export function useCheckDataAccessRequestSignatureUpdatable(
  options?: UseMutationOptions<boolean, SynapseClientError, string>,
) {
  const { synapseClient } = useSynapseContext()

  return useMutation<boolean, SynapseClientError, string>({
    ...options,
    mutationFn: (requestId: string) =>
      fetchSignaturePrecheck(synapseClient, requestId),
  })
}

/**
 * {@link fetchSignaturePrecheck} as a query, for screens that describe what sending *would* do
 * rather than acting on it. Use {@link useCheckDataAccessRequestSignatureUpdatable} at the point
 * of action, where a cached answer would be unsafe.
 */
export function useGetDataAccessRequestSignatureUpdatable(
  requestId: string,
  options?: Partial<UseQueryOptions<boolean, SynapseClientError>>,
) {
  const { keyFactory, synapseClient } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey:
      keyFactory.getDataAccessRequestSignaturePrecheckQueryKey(requestId),
    queryFn: () => fetchSignaturePrecheck(synapseClient, requestId),
  })
}

/**
 * Apply the data access request's pending changes to its in-flight eDUC envelope, preserving the
 * signatures that have already been collected.
 * @see PUT /repo/v1/dataAccessRequest/{requestId}/signature
 */
export function useUpdateDataAccessRequestSignature(
  options?: UseMutationOptions<EDucSignatureStatus, SynapseClientError, string>,
) {
  const { keyFactory, synapseClient } = useSynapseContext()
  const queryClient = useQueryClient()

  return useMutation<EDucSignatureStatus, SynapseClientError, string>({
    ...options,
    mutationFn: (requestId: string) =>
      synapseClient.dataAccessServicesClient.putRepoV1DataAccessRequestRequestIdSignature(
        { requestId },
      ),
    onSuccess: async (data, requestId, ctx) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: keyFactory.getDataAccessRequestSignatureQueryKey(requestId),
        }),
        queryClient.invalidateQueries({
          queryKey: keyFactory.getDataAccessRequestQueryKey(),
        }),
      ])
      if (options?.onSuccess) {
        return options.onSuccess(data, requestId, ctx)
      }
      return
    },
  })
}

/**
 * Void the eDUC routing for a data access request, reverting the DAR to trad-DUC mode.
 * @see DELETE /repo/v1/dataAccessRequest/{requestId}/signature
 */
export function useVoidDataAccessRequestSignature(
  options?: UseMutationOptions<void, SynapseClientError, string>,
) {
  const { synapseClient } = useSynapseContext()
  const queryClient = useQueryClient()
  const { keyFactory } = useSynapseContext()

  return useMutation<void, SynapseClientError, string>({
    ...options,
    mutationFn: (requestId: string) =>
      synapseClient.dataAccessServicesClient.deleteRepoV1DataAccessRequestRequestIdSignature(
        { requestId },
      ),
    onSuccess: async (data, requestId, ctx) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: keyFactory.getDataAccessRequestSignatureQueryKey(requestId),
        }),
        queryClient.invalidateQueries({
          queryKey: keyFactory.getDataAccessRequestQueryKey(),
        }),
      ])
      if (options?.onSuccess) {
        return options.onSuccess(data, requestId, ctx)
      }
      return
    },
  })
}
