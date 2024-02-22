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
} from 'react-query'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils'
import SynapseClient from '../../synapse-client'
import { useCallback } from 'react'

export function useGetSubscribers(
  topic: Topic,
  options?: UseQueryOptions<SubscriberPagedResults, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<SubscriberPagedResults, SynapseClientError>(
    keyFactory.getSubscribersQueryKey(topic.objectId, topic.objectType),
    () => SynapseClient.getSubscribers(accessToken, topic),
    options,
  )
}

export function useGetSubscription(
  objectId: string,
  objectType: SubscriptionObjectType,
  options?: UseQueryOptions<Subscription, SynapseClientError>,
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
    return subscriptionList.results[0]
  }
  return useQuery<Subscription, SynapseClientError>(
    keyFactory.getSubscriptionQueryKey(objectId, objectType),
    queryFn,
    options,
  )
}

export function useGetAllSubscriptions(
  query: SubscriptionQuery,
  options?: UseInfiniteQueryOptions<
    SubscriptionPagedResults,
    SynapseClientError,
    Subscription
  >,
  queryKeyOverride?: QueryKey,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()

  return useInfiniteQuery<
    SubscriptionPagedResults,
    SynapseClientError,
    Subscription
  >(
    queryKeyOverride ?? keyFactory.getAllSubscriptionsQueryKey(query),
    async context => {
      const offset = context.pageParam as number | undefined
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
    {
      ...options,
      select: data =>
        ({
          pages: data.pages.flatMap(page => page.results),
          pageParams: data.pageParams,
        } as InfiniteData<Subscription>),
      getNextPageParam: (page, allPages) => {
        const totalNumberOfFetchedResults = allPages.flatMap(
          page => page.results,
        ).length
        if (page.totalNumberOfResults > totalNumberOfFetchedResults) {
          return totalNumberOfFetchedResults
        }
        return undefined
      },
    },
  )
}

export function usePostSubscription(
  options?: UseMutationOptions<Subscription, SynapseClientError, Topic>,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<Subscription, SynapseClientError, Topic>(
    (topic: Topic) => SynapseClient.postSubscription(accessToken, topic),
    {
      ...options,
      onSuccess: async (updatedSubscription, variables, ctx) => {
        await Promise.all([
          queryClient.invalidateQueries(
            keyFactory.getAllSubscriptionsQueryKey(),
          ),
          queryClient.invalidateQueries(
            keyFactory.getSubscriptionQueryKey(
              variables.objectId,
              variables.objectType,
            ),
          ),
          queryClient.invalidateQueries(
            keyFactory.getSubscribersQueryKey(
              variables.objectId,
              variables.objectType,
            ),
          ),
        ])

        if (options?.onSuccess) {
          await options.onSuccess(updatedSubscription, variables, ctx)
        }
      },
    },
  )
}

export function useDeleteSubscription(
  options?: UseMutationOptions<void, SynapseClientError, Subscription>,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<void, SynapseClientError, Subscription>(
    (subscription: Subscription) =>
      SynapseClient.deleteSubscription(
        accessToken,
        subscription.subscriptionId,
      ),
    {
      ...options,
      onSuccess: async (updatedSubscription, variables, ctx) => {
        await Promise.all([
          queryClient.invalidateQueries(
            keyFactory.getAllSubscriptionsQueryKey(),
          ),
          queryClient.invalidateQueries(
            keyFactory.getSubscriptionQueryKey(
              variables.objectId,
              variables.objectType,
            ),
          ),
          queryClient.invalidateQueries(
            keyFactory.getSubscribersQueryKey(
              variables.objectId,
              variables.objectType,
            ),
          ),
        ])

        if (options?.onSuccess) {
          await options.onSuccess(updatedSubscription, variables, ctx)
        }
      },
    },
  )
}

export const useSubscription = (
  objectId: string,
  objectType: SubscriptionObjectType,
) => {
  const { data: subscription, isLoading: isLoadingGet } = useGetSubscription(
    objectId,
    objectType,
  )
  const { mutate: postSubscription, isLoading: isLoadingPost } =
    usePostSubscription()
  const { mutate: deleteSubscription, isLoading: isLoadingDelete } =
    useDeleteSubscription()

  const isLoading: boolean = isLoadingGet || isLoadingPost || isLoadingDelete
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
