import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/utils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { EvaluationRoundListResponse } from '@sage-bionetworks/synapse-client'
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

export function useGetEvaluationRoundsInfinite<
  TData = InfiniteData<EvaluationRoundListResponse>,
>(
  evaluationId: string,
  options?: Partial<
    UseInfiniteQueryOptions<
      EvaluationRoundListResponse,
      SynapseClientError,
      TData,
      EvaluationRoundListResponse,
      QueryKey,
      EvaluationRoundListResponse['nextPageToken']
    >
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()

  return useInfiniteQuery<
    EvaluationRoundListResponse,
    SynapseClientError,
    TData,
    QueryKey,
    EvaluationRoundListResponse['nextPageToken']
  >({
    ...options,
    queryKey: keyFactory.getEvaluationRoundsQueryKey(evaluationId),
    queryFn: context =>
      synapseClient.evaluationServicesClient.postRepoV1EvaluationEvalIdRoundList(
        {
          evalId: evaluationId,
          evaluationRoundListRequest: {
            nextPageToken: context.pageParam,
          },
        },
      ),
    initialPageParam: undefined,
    getNextPageParam: page => page.nextPageToken,
  })
}
