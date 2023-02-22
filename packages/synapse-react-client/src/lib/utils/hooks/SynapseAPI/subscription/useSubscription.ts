import {
  SubscriptionObjectType,
  Subscription,
  SortByType,
  SubscriptionRequest,
  Topic,
  SubscriberPagedResults,
} from '../../../synapseTypes/Subscription'
import {
  useMutation,
  useQuery,
  UseMutationOptions,
  UseQueryOptions,
  useQueryClient,
} from 'react-query'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { Direction } from '../../../synapseTypes'
import { SynapseClient } from '../../..'
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
        await queryClient.invalidateQueries(
          keyFactory.getAllSubscriptionsQueryKey(),
        )

        await queryClient.invalidateQueries(
          keyFactory.getSubscribersQueryKey(
            variables.objectId,
            variables.objectType,
          ),
        )
        if (options?.onSuccess) {
          await options.onSuccess(updatedSubscription, variables, ctx)
        }
      },
    },
  )
}

export function useDeleteSubscription(
  options?: UseMutationOptions<void, SynapseClientError, string>,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<void, SynapseClientError, string>(
    (subscriptionId: string) =>
      SynapseClient.deleteSubscription(accessToken, subscriptionId),
    {
      ...options,
      onSuccess: async (updatedSubscription, variables, ctx) => {
        await queryClient.invalidateQueries(
          keyFactory.getAllSubscriptionsQueryKey(),
        )

        await queryClient.invalidateQueries(
          keyFactory.getAllSubscribersQueryKey(),
        )
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
  const { data: subscribers } = useGetSubscribers({ objectId, objectType })
  const { mutate: postSubscription, isLoading: isLoadingPost } =
    usePostSubscription()
  const { mutate: deleteSubscription, isLoading: isLoadingDelete } =
    useDeleteSubscription()

  const isLoading: boolean = isLoadingGet || isLoadingPost || isLoadingDelete
  const toggleSubscribed = useCallback(() => {
    if (subscription) {
      deleteSubscription(subscription.subscriptionId)
    } else {
      postSubscription({ objectId, objectType })
    }
  }, [deleteSubscription, objectId, objectType, postSubscription, subscription])

  return { isLoading, subscription, toggleSubscribed, subscribers }
}
