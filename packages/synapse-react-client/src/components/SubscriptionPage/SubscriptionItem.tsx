import {
  Subscription,
  SubscriptionObjectType,
} from '@sage-bionetworks/synapse-types'
import ForumTopic from './ForumTopic'
import ThreadTopic from './ThreadTopic'

export type SubscriptionItemProps = {
  subscription: Subscription
}

/**
 * Simple discriminator component that maps a {@link Subscription} rendered on the {@link SubscriptionPage} to
 * a {@link Topic} component
 * @param props
 * @constructor
 */
export default function SubscriptionItem(props: SubscriptionItemProps) {
  const { subscription } = props

  switch (subscription.objectType) {
    case SubscriptionObjectType.FORUM:
      return <ForumTopic subscription={subscription} />
    case SubscriptionObjectType.THREAD:
      return <ThreadTopic subscription={subscription} />
    default:
      console.warn(
        `Subscription type ${props.subscription.objectType} not supported in UI`,
      )
      return <></>
  }
}
