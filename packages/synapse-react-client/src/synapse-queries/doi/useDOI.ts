import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  DoiRequest,
  DoiResponse,
  waitForAsyncResult,
} from '@sage-bionetworks/synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { Doi, DoiAssociation } from '@sage-bionetworks/synapse-types'
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'

export function useGetDOIAssociation(
  objectId: string,
  versionNumber?: number,
  objectType = 'ENTITY',
  options?: Partial<UseQueryOptions<DoiAssociation | null, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getDOIAssociationQueryKey(
      objectType,
      objectId,
      versionNumber,
    ),

    queryFn: () =>
      SynapseClient.getDOIAssociation(
        accessToken,
        objectId,
        versionNumber,
        objectType,
      ),
  })
}

export function useGetDOI(
  objectId: string,
  versionNumber?: number,
  objectType = 'ENTITY',
  options?: Partial<UseQueryOptions<Doi | null, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getDOIQueryKey(objectType, objectId, versionNumber),

    queryFn: () =>
      SynapseClient.getDOI(accessToken, objectId, versionNumber, objectType),
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

      return waitForAsyncResult(() =>
        synapseClient.doiServicesClient.getRepoV1DoiAsyncGetAsyncToken({
          asyncToken: asyncJobId.token!,
        }),
      )
    },
    onSuccess(...args) {
      if (options?.onSuccess) {
        options.onSuccess(...args)
      }
      const requestDoi = args[1].doi
      if (requestDoi) {
        queryClient.invalidateQueries({
          queryKey: keyFactory.getDOIAssociationQueryKey(
            requestDoi.objectType!,
            requestDoi.objectId!,
            requestDoi.objectVersion,
          ),
        })
        queryClient.invalidateQueries({
          queryKey: keyFactory.getDOIQueryKey(
            requestDoi.objectType!,
            requestDoi.objectId!,
            requestDoi.objectVersion,
          ),
        })
      }
    },
  })
}
