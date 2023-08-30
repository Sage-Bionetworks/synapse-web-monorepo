import { DiscussionThreadBundle, Forum } from '@sage-bionetworks/synapse-types'
import { faker } from '@faker-js/faker'
import { SetRequired } from 'type-fest'
import { mockUserData } from '../user/mock_user_profile'
import { pickRandomMockUser } from './fakerUtils'

export function generateForum(
  overrides: SetRequired<Partial<Forum>, 'projectId'>,
): Forum {
  return {
    id: String(faker.number.int()),
    etag: faker.string.uuid(),
    ...overrides,
  }
}

export function generateDiscussionThreadBundle(
  overrides: SetRequired<
    Partial<DiscussionThreadBundle>,
    'forumId' | 'projectId'
  >,
): DiscussionThreadBundle {
  return {
    id: String(faker.number.int()),
    activeAuthors: mockUserData.map(u => String(u.id)),
    createdBy: String(pickRandomMockUser().id),
    createdOn: faker.date.anytime().toISOString(),
    etag: faker.string.uuid(),
    isDeleted: false,
    isEdited: false,
    isPinned: false,
    lastActivity: faker.date.anytime().toISOString(),
    messageKey: `${faker.number.int()}/${faker.number.int()}/${faker.string.uuid()}`,
    modifiedOn: faker.date.anytime().toISOString(),
    numberOfReplies: faker.number.int({ max: 500 }),
    numberOfViews: faker.number.int({ max: 5000 }),
    title: faker.lorem.words({ min: 2, max: 8 }),
    ...overrides,
  }
}
