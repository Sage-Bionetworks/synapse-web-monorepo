import {
  Subscription,
  SubscriptionObjectType,
} from '@sage-bionetworks/synapse-types'
import Topic from './Topic'
import { useGetForumMetadata } from '../../synapse-queries/forum/useForum'
import { useGetEntity } from '../../synapse-queries'
import { useSubscription } from '../../synapse-queries/subscription/useSubscription'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../utils/functions/getEndpoint'

export type SubscriptionItemProps = {
  subscription: Subscription
}

export default function ForumTopic(props: SubscriptionItemProps) {
  const { subscription } = props

  const { data: forum } = useGetForumMetadata(subscription.objectId)
  const { data: project } = useGetEntity(forum?.projectId!, undefined, {
    enabled: !!forum,
  })
  const { isSubscribed, isLoading, toggleSubscribed } = useSubscription(
    subscription.objectId,
    SubscriptionObjectType.FORUM,
  )

  let href: string | undefined
  if (forum) {
    href = `${getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT)}Synapse:${
      forum.projectId
    }/discussion`
  }

  return (
    <Topic
      isLoading={isLoading}
      isSubscribed={isSubscribed}
      icon={'dashboard'}
      name={project?.name}
      nameHref={href}
      onToggleSubscribe={toggleSubscribed}
    />
  )
}
