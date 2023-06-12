import { SetRequired } from 'type-fest'
import { Subscription } from '@sage-bionetworks/synapse-types'
import { faker } from '@faker-js/faker'
import { MOCK_USER_ID } from '../user/mock_user_profile'

export function generateSubscription(
  overrides: SetRequired<Partial<Subscription>, 'objectId' | 'objectType'>,
): Subscription {
  return {
    subscriptionId: String(faker.number.int({ min: 1000, max: 9999 })),
    subscriberId: String(MOCK_USER_ID),
    createdOn: faker.date.anytime().toISOString(),
    ...overrides,
  }
}
