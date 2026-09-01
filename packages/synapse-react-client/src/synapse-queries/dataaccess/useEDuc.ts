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
