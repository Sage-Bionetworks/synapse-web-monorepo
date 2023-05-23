import {
  Subscription,
  SubscriptionObjectType,
} from '@sage-bionetworks/synapse-types'
import { MOCK_USER_ID } from './user/mock_user_profile'
import { times } from 'lodash-es'
import { faker } from '@faker-js/faker'
import {
  mockDiscussionThreadBundles,
  mockForums,
} from './discussion/mock_discussion'

const forumSubscriptions: Subscription[] = mockForums.map(
  (forum): Subscription => {
    return {
      subscriptionId: String(parseInt(forum.id) * 10),
      subscriberId: String(MOCK_USER_ID),
      createdOn: faker.date.anytime().toISOString(),
      objectId: forum.id,
      objectType: SubscriptionObjectType.FORUM,
    }
  },
)

const threadSubscriptions: Subscription[] = mockDiscussionThreadBundles.map(
  (dtb): Subscription => {
    return {
      subscriptionId: String(faker.number.int()),
      subscriberId: String(MOCK_USER_ID),
      objectType: SubscriptionObjectType.THREAD,
      objectId: dtb.id,
      createdOn: faker.date.anytime().toISOString(),
    }
  },
)

export { forumSubscriptions, threadSubscriptions }
