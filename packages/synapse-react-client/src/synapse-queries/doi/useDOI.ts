import { allowNotFoundError } from '@/synapse-client/SynapseClientUtils'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
import {
  V2Doi as Doi,
  DoiAssociation,
  DoiRequest,
  DoiResponse,
  GetRepoV1DoiRequest,
  waitForAsyncResult,
  GetRepoV1DoiAssociationRequest,
  DoiObjectType,
} from '@sage-bionetworks/synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'

export function useGetDOIAssociation(
  request: GetRepoV1DoiAssociationRequest,
  options?: Partial<UseQueryOptions<DoiAssociation | null, SynapseClientError>>,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getDOIAssociationQueryKey(request),

    queryFn: () =>
      allowNotFoundError(() =>
        synapseClient.doiServicesClient.getRepoV1DoiAssociation(request),
      ),
  })
}

export function useGetDOI(
  request: GetRepoV1DoiRequest,
  options?: Partial<UseQueryOptions<Doi | null, SynapseClientError>>,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getDOIQueryKey(request),

    queryFn: () =>
      allowNotFoundError(() =>
        synapseClient.doiServicesClient.getRepoV1Doi(request),
      ),
  })
}

/**
 * Mutation hook to create/update a DOI.
 * @param options
 */
export function useCreateOrUpdateDOI(
  options?: Omit<
    UseMutationOptions<DoiResponse, SynapseClientError, DoiRequest>,
    'mutationFn'
  >,
) {
  const queryClient = useQueryClient()
  const { synapseClient, keyFactory } = useSynapseContext()

  return useMutation<DoiResponse, SynapseClientError, DoiRequest>({
    ...options,
    mutationFn: async request => {
      const asyncJobId =
        await synapseClient.doiServicesClient.postRepoV1DoiAsyncStart({
          doiRequest: request,
        })

      const asyncJobResponse = await waitForAsyncResult(() =>
        synapseClient.asynchronousJobServicesClient.getRepoV1AsynchronousJobJobId(
          {
            jobId: asyncJobId.token!,
          },
        ),
      )
      return asyncJobResponse.responseBody as DoiResponse
    },
    onSuccess(...args) {
      if (options?.onSuccess) {
        options.onSuccess(...args)
      }
      const requestDoi = args[1].doi
      if (requestDoi) {
        const matchingRequestObject: GetRepoV1DoiAssociationRequest = {
          id: requestDoi.objectId!,
          type: requestDoi.objectType as DoiObjectType,
          portalId: requestDoi.portalId,
          version: requestDoi.objectVersion,
        }
        queryClient.invalidateQueries({
          queryKey: keyFactory.getDOIQueryKey(matchingRequestObject),
        })
      }
    },
  })
}
