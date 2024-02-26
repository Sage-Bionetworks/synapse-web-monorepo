import {
  Direction,
  SortByType,
  SubscriberPagedResults,
  Subscription,
  SubscriptionObjectType,
  SubscriptionPagedResults,
  SubscriptionQuery,
  SubscriptionRequest,
  Topic,
} from '@sage-bionetworks/synapse-types'
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
import { SynapseClientError, useSynapseContext } from '../../utils'
import SynapseClient from '../../synapse-client'
import { useCallback } from 'react'
import { isEmpty } from 'lodash-es'

export function useGetSubscribers(
  topic: Topic,
  options?: Partial<
    UseQueryOptions<SubscriberPagedResults, SynapseClientError>
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getSubscribersQueryKey(
      topic.objectId,
      topic.objectType,
    ),
    queryFn: () => SynapseClient.getSubscribers(accessToken, topic),
  })
}

export function useGetSubscription(
  objectId: string,
  objectType: SubscriptionObjectType,
  options?: Partial<UseQueryOptions<Subscription | null, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryFn = async () => {
    const subscriptionRequest: SubscriptionRequest = {
      objectType: objectType,
      idList: [objectId],
      sortByType: SortByType.OBJECT_ID,
      sortDirection: Direction.ASC,
    }
    const subscriptionList = await SynapseClient.postSubscriptionList(
      accessToken,
      subscriptionRequest,
    )

    if (isEmpty(subscriptionList.results)) {
      return null
    }
    return subscriptionList.results[0]
  }
  return useQuery<Subscription | null, SynapseClientError>({
    ...options,
    queryKey: keyFactory.getSubscriptionQueryKey(objectId, objectType),
    queryFn,
  })
}

export function useGetAllSubscriptions<
  TData = InfiniteData<SubscriptionPagedResults>,
>(
  query: SubscriptionQuery,
  options?: Partial<
    UseInfiniteQueryOptions<
      SubscriptionPagedResults,
      SynapseClientError,
      TData,
      SubscriptionPagedResults,
      QueryKey,
      number | undefined
    >
  >,
  queryKeyOverride?: QueryKey,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()

  return useInfiniteQuery<
    SubscriptionPagedResults,
    SynapseClientError,
    TData,
    QueryKey,
    number | undefined
  >({
    ...options,
    queryKey: queryKeyOverride ?? keyFactory.getAllSubscriptionsQueryKey(query),
    queryFn: async context => {
      const offset = context.pageParam
      const subscriptions = await SynapseClient.getAllSubscriptions(
        accessToken,
        10,
        offset,
        query,
      )
      subscriptions.results.forEach(subscription => {
        queryClient.setQueryData(
          keyFactory.getSubscriptionQueryKey(
            subscription.objectId,
            subscription.objectType,
          ),
          subscription,
        )
      })
      return subscriptions
    },
    initialPageParam: undefined,
    getNextPageParam: (page, allPages) => {
      const totalNumberOfFetchedResults = allPages.flatMap(
        page => page.results,
      ).length
      if (page.totalNumberOfResults > totalNumberOfFetchedResults) {
        return totalNumberOfFetchedResults
      }
      return undefined
    },
  })
}

export function usePostSubscription(
  options?: Partial<
    UseMutationOptions<Subscription, SynapseClientError, Topic>
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<Subscription, SynapseClientError, Topic>({
    ...options,
    mutationFn: (topic: Topic) =>
      SynapseClient.postSubscription(accessToken, topic),
    onSuccess: async (updatedSubscription, variables, ctx) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: keyFactory.getAllSubscriptionsQueryKey(),
        }),
        queryClient.invalidateQueries({
          queryKey: keyFactory.getSubscriptionQueryKey(
            variables.objectId,
            variables.objectType,
          ),
        }),
        queryClient.invalidateQueries({
          queryKey: keyFactory.getSubscribersQueryKey(
            variables.objectId,
            variables.objectType,
          ),
        }),
      ])

      if (options?.onSuccess) {
        await options.onSuccess(updatedSubscription, variables, ctx)
      }
    },
  })
}

export function useDeleteSubscription(
  options?: Partial<UseMutationOptions<void, SynapseClientError, Subscription>>,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<void, SynapseClientError, Subscription>({
    ...options,
    mutationFn: (subscription: Subscription) =>
      SynapseClient.deleteSubscription(
        accessToken,
        subscription.subscriptionId,
      ),
    onSuccess: async (updatedSubscription, variables, ctx) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: keyFactory.getAllSubscriptionsQueryKey(),
        }),
        queryClient.invalidateQueries({
          queryKey: keyFactory.getSubscriptionQueryKey(
            variables.objectId,
            variables.objectType,
          ),
        }),
        queryClient.invalidateQueries({
          queryKey: keyFactory.getSubscribersQueryKey(
            variables.objectId,
            variables.objectType,
          ),
        }),
      ])

      if (options?.onSuccess) {
        await options.onSuccess(updatedSubscription, variables, ctx)
      }
    },
  })
}

export const useSubscription = (
  objectId: string,
  objectType: SubscriptionObjectType,
) => {
  const { data: subscription, isLoading: isLoadingGet } = useGetSubscription(
    objectId,
    objectType,
  )
  const { mutate: postSubscription, isPending: isPendingCreate } =
    usePostSubscription()
  const { mutate: deleteSubscription, isPending: isPendingDelete } =
    useDeleteSubscription()

  const isLoading: boolean = isLoadingGet || isPendingCreate || isPendingDelete
  const toggleSubscribed = useCallback(() => {
    if (subscription) {
      deleteSubscription(subscription)
    } else {
      postSubscription({ objectId, objectType })
    }
  }, [deleteSubscription, objectId, objectType, postSubscription, subscription])

  return {
    isLoading,
    subscription,
    toggleSubscribed,
    isSubscribed: Boolean(subscription),
  }
}
