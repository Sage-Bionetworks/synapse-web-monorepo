import {
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import {
  EntityHeader,
  PaginatedResults,
  Reference,
  ReferenceList,
} from '@sage-bionetworks/synapse-types'
import { normalizeSynPrefix } from '../../utils/functions/EntityTypeUtils'

export function useGetEntityHeaders(
  references: ReferenceList,
  options?: Partial<
    UseQueryOptions<PaginatedResults<EntityHeader>, SynapseClientError>
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  references = references.map(ref => ({
    ...ref,
    targetId: normalizeSynPrefix(ref.targetId),
  }))

  const queryFn = async () => {
    const response = await SynapseClient.getEntityHeaders(
      references,
      accessToken,
    )

    // Update the cache with the individual header, in case this was a batch
    response.results.forEach(header => {
      const requestedItem = references.find(ref => {
        if (ref.targetVersionNumber) {
          return (
            ref.targetId === header.id &&
            ref.targetVersionNumber === header.versionNumber
          )
        } else {
          return ref.targetId === header.id
        }
      })
      if (requestedItem) {
        queryClient.setQueryData<PaginatedResults<EntityHeader>>(
          keyFactory.getEntityHeadersQueryKey([requestedItem]),
          { results: [header], totalNumberOfResults: 1 },
        )

        queryClient.setQueryData(
          keyFactory.getEntityHeaderQueryKey(
            requestedItem.targetId,
            requestedItem.targetVersionNumber,
          ),
          header,
        )
        // If the request item had a version and was the latest version, we can also hydrate the cache
        // for the 'unversioned' request
        if (requestedItem.targetVersionNumber && header.isLatestVersion) {
          const requestWithoutVersionNumber: Reference = { targetId: header.id }
          queryClient.setQueryData<PaginatedResults<EntityHeader>>(
            keyFactory.getEntityHeadersQueryKey([requestWithoutVersionNumber]),
            { results: [header], totalNumberOfResults: 1 },
          )

          queryClient.setQueryData(
            keyFactory.getEntityHeaderQueryKey(requestedItem.targetId),
            header,
          )
        }
      }
    })

    return response
  }

  return useQuery<PaginatedResults<EntityHeader>, SynapseClientError>({
    ...options,
    queryKey: keyFactory.getEntityHeadersQueryKey(references),
    queryFn,
  })
}

export function useGetEntityHeader(
  entityId: string = '',
  versionNumber?: number,
  options?: Partial<
    UseQueryOptions<EntityHeader | undefined, SynapseClientError>
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  if (entityId) {
    entityId = normalizeSynPrefix(entityId)
  }

  return useQuery({
    enabled: Boolean(entityId),
    ...options,
    queryKey: keyFactory.getEntityHeaderQueryKey(entityId, versionNumber),
    queryFn: () =>
      SynapseClient.getEntityHeader(entityId, versionNumber, accessToken),
  })
}
