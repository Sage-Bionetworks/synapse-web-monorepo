import {
  QueryFunctionContext,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import {
  AccessTokenGenerationRequest,
  AccessTokenGenerationResponse,
  AccessTokenRecordList,
} from '@sage-bionetworks/synapse-types'

export function useGetPersonalAccessTokensInfinite(
  options?: UseInfiniteQueryOptions<AccessTokenRecordList, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useInfiniteQuery<AccessTokenRecordList, SynapseClientError>(
    keyFactory.getPersonalAccessTokensQueryKey(),
    async (context: QueryFunctionContext<QueryKey, string | undefined>) => {
      return await SynapseClient.getPersonalAccessTokenRecords(
        accessToken,
        context.pageParam,
      )
    },
    {
      ...options,
      getNextPageParam: page => page.nextPageToken,
    },
  )
}

export function useCreatePersonalAccessToken(
  options?: UseMutationOptions<
    AccessTokenGenerationResponse,
    SynapseClientError,
    AccessTokenGenerationRequest
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation<
    AccessTokenGenerationResponse,
    SynapseClientError,
    AccessTokenGenerationRequest
  >({
    ...options,
    onSuccess: async (...args) => {
      if (options?.onSuccess) {
        options.onSuccess(...args)
      }
      await queryClient.invalidateQueries(
        keyFactory.getPersonalAccessTokensQueryKey(),
      )
    },
    mutationFn: request =>
      SynapseClient.createPersonalAccessToken(request, accessToken),
  })
}

export function useDeletePersonalAccessToken(
  options?: UseMutationOptions<void, SynapseClientError, string>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation<void, SynapseClientError, string>({
    ...options,
    onSuccess: async (...args) => {
      if (options?.onSuccess) {
        options.onSuccess(...args)
      }
      await queryClient.invalidateQueries(
        keyFactory.getPersonalAccessTokensQueryKey(),
      )
    },
    mutationFn: tokenId =>
      SynapseClient.deletePersonalAccessToken(tokenId, accessToken),
  })
}
