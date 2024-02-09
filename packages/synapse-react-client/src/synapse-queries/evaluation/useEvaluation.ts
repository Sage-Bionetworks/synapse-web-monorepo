import {
  Evaluation,
  GetEvaluationParameters,
  PaginatedResults,
} from '@sage-bionetworks/synapse-types'
import {
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
  options?: UseQueryOptions<Evaluation, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<Evaluation, SynapseClientError>(
    keyFactory.getEvaluationByIdQueryKey(evaluationId),
    () => SynapseClient.getEvaluation(evaluationId, accessToken),
    options,
  )
}

export function useGetEvaluationsInfinite(
  request: GetEvaluationParameters = {},
  options?: UseInfiniteQueryOptions<
    PaginatedResults<Evaluation>,
    SynapseClientError
  >,
) {
  const LIMIT = 20
  const { accessToken, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()

  return useInfiniteQuery<PaginatedResults<Evaluation>, SynapseClientError>(
    keyFactory.getEvaluationsQueryKey(request),
    async context => {
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

    {
      ...options,
      getNextPageParam: getNextPageParamForPaginatedResults,
    },
  )
}
