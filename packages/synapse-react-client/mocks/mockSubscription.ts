import {
  Subscription,
  SubscriptionObjectType,
} from '@sage-bionetworks/synapse-types'
import {
  mockDiscussionThreadBundles,
  mockForums,
} from './discussion/mock_discussion'
import { generateSubscription } from './faker/generateSubscription'

const forumSubscriptions: Subscription[] = mockForums.map(
  (forum): Subscription =>
    generateSubscription({
      objectId: forum.id,
      objectType: SubscriptionObjectType.FORUM,
    }),
)

const threadSubscriptions: Subscription[] = mockDiscussionThreadBundles.map(
  (dtb): Subscription =>
    generateSubscription({
      objectType: SubscriptionObjectType.THREAD,
      objectId: dtb.id,
    }),
)

export { forumSubscriptions, threadSubscriptions }
