import {
  RestrictionInformationBatchRequest,
  RestrictionInformationBatchResponse,
  RestrictionInformationRequest,
  RestrictionInformationResponse,
} from '@sage-bionetworks/synapse-types'
import {
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import SynapseClient from '../../synapse-client'
import { chunk } from 'lodash-es'

// The maximum number of items allowed in a single request for restriction information
const MAX_RESTRICTION_INFORMATION_BATCH_SIZE = 50

export function useGetRestrictionInformation(
  request: RestrictionInformationRequest,
  options?: Partial<
    UseQueryOptions<RestrictionInformationResponse, SynapseClientError>
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getRestrictionInformationQueryKey(request),
    queryFn: () =>
      SynapseClient.getRestrictionInformation(request, accessToken),
  })
}

function mergeRestrictionInformationBatchResponses(
  responses: RestrictionInformationBatchResponse[],
): RestrictionInformationBatchResponse {
  return responses.reduce(
    (prev, curr) => {
      return {
        restrictionInformation: prev.restrictionInformation.concat(
          curr.restrictionInformation,
        ),
      }
    },
    {
      restrictionInformation: [],
    },
  )
}

export function useGetRestrictionInformationBatch(
  request: RestrictionInformationBatchRequest,
  options?: Partial<
    UseQueryOptions<RestrictionInformationBatchResponse, SynapseClientError>
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()

  const batchedQueryFn =
    async (): Promise<RestrictionInformationBatchResponse> => {
      // The maximum batch size for this call is 50, so split the query options into chunks based on objectId
      const batchedIds = chunk(
        request.objectIds,
        MAX_RESTRICTION_INFORMATION_BATCH_SIZE,
      )

      // Fire each batch of requests
      const requests = batchedIds.map(batchedIds => {
        const batchRequest: RestrictionInformationBatchRequest = {
          ...request,
          objectIds: batchedIds,
        }
        return SynapseClient.getRestrictionInformationBatch(
          batchRequest,
          accessToken,
        )
      })

      // Once the requests resolve, merge the results
      const results = await Promise.all(requests)
      const mergedResults = mergeRestrictionInformationBatchResponses(results)

      // Fill the QueryClient cache with the individual restriction information objects
      mergedResults.restrictionInformation.forEach(restrictionInformation => {
        queryClient.setQueryData(
          keyFactory.getRestrictionInformationQueryKey({
            objectId: String(restrictionInformation.objectId),
            restrictableObjectType: request.restrictableObjectType,
          }),
          restrictionInformation,
        )
      })

      // Return the merged results
      return mergedResults
    }

  return useQuery({
    ...options,
    queryKey: keyFactory.getRestrictionInformationBatchQueryKey(request),
    queryFn: batchedQueryFn,
  })
}
