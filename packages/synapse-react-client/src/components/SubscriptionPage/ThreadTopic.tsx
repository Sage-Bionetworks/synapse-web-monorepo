import React from 'react'
import {
  Subscription,
  SubscriptionObjectType,
} from '@sage-bionetworks/synapse-types'
import { useSubscription } from '../../synapse-queries/subscription/useSubscription'
import Topic from './Topic'
import { useGetThread } from '../../synapse-queries/forum/useThread'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../utils/functions/getEndpoint'

export type SubscriptionItemProps = {
  subscription: Subscription
}

export default function SubscriptionItem(props: SubscriptionItemProps) {
  const { subscription } = props

  const { threadData } = useGetThread(subscription.objectId)
  const { isSubscribed, isLoading, toggleSubscribed } = useSubscription(
    subscription.objectId,
    SubscriptionObjectType.THREAD,
  )

  let href: string | undefined
  if (threadData) {
    href = `${getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT)}Synapse:${
      threadData.projectId
    }/discussion/threadId=${subscription.objectId}`
  }

  return (
    <Topic
      isLoading={isLoading}
      isSubscribed={isSubscribed}
      icon={'discussion'}
      name={threadData?.title}
      nameHref={href}
      onToggleSubscribe={toggleSubscribed}
    />
  )
}
