import {
  Evaluation,
  GetEvaluationParameters,
  PaginatedResults,
} from '@sage-bionetworks/synapse-types'
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'
import { SynapseClientError, useSynapseContext } from '../../utils'
import SynapseClient from '../../synapse-client'
import { getNextPageParamForPaginatedResults } from '../InfiniteQueryUtils'

export function useGetEvaluation(
  evaluationId: string,
  options?: Partial<UseQueryOptions<Evaluation, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getEvaluationByIdQueryKey(evaluationId),
    queryFn: () => SynapseClient.getEvaluation(evaluationId, accessToken),
  })
}

export function useGetEvaluationsInfinite<
  TData = InfiniteData<PaginatedResults<Evaluation>>,
>(
  request: GetEvaluationParameters = {},
  options?: Partial<
    UseInfiniteQueryOptions<
      PaginatedResults<Evaluation>,
      SynapseClientError,
      TData,
      PaginatedResults<Evaluation>,
      QueryKey,
      number | undefined
    >
  >,
) {
  const LIMIT = 20
  const { accessToken, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()

  return useInfiniteQuery<
    PaginatedResults<Evaluation>,
    SynapseClientError,
    TData,
    QueryKey,
    number | undefined
  >({
    ...options,
    queryKey: keyFactory.getEvaluationsQueryKey(request),
    queryFn: async context => {
      const responsePage = await SynapseClient.getEvaluations(
        { ...request, limit: LIMIT, offset: context.pageParam },
        accessToken,
      )

      // Update the cache with each individual evaluation
      responsePage.results.forEach(evaluation => {
        queryClient.setQueryData(
          keyFactory.getEvaluationByIdQueryKey(evaluation.id!),
          evaluation,
        )
      })

      return responsePage
    },
    initialPageParam: undefined,
    getNextPageParam: getNextPageParamForPaginatedResults,
  })
}
