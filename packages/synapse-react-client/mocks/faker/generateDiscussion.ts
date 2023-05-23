import { DiscussionThreadBundle, Forum } from '@sage-bionetworks/synapse-types'
import { faker } from '@faker-js/faker'
import { mockUserData } from '../user/mock_user_profile'
import { pickRandomMockUser } from './fakerUtils'
import { max, min } from 'lodash-es'
import { mockProjects } from '../entity/mockProject'
import { removePrefixIfSynId } from '../../src/utils/functions/SqlFunctions'

export function generateForum(overrides?: Partial<Forum>): Forum {
  return {
    id: String(faker.number.int()),
    etag: faker.string.uuid(),
    projectId: `syn${faker.number.int({
      min: min(mockProjects.map(p => parseInt(removePrefixIfSynId(p.id)))),
      max: max(mockProjects.map(p => parseInt(removePrefixIfSynId(p.id)))),
    })}`,
    ...overrides,
  }
}

export function generateDiscussionThreadBundle(
  overrides?: Partial<DiscussionThreadBundle>,
): DiscussionThreadBundle {
  return {
    id: String(faker.number.int()),
    activeAuthors: mockUserData.map(u => String(u.id)),
    createdBy: String(pickRandomMockUser().id),
    createdOn: faker.date.anytime().toISOString(),
    etag: faker.string.uuid(),
    forumId: String(faker.number.int()),
    isDeleted: false,
    isEdited: false,
    isPinned: false,
    lastActivity: faker.date.anytime().toISOString(),
    messageKey: `${faker.number.int()}/${faker.number.int()}/${faker.string.uuid()}`,
    modifiedOn: faker.date.anytime().toISOString(),
    numberOfReplies: faker.number.int({ max: 500 }),
    numberOfViews: faker.number.int({ max: 5000 }),
    projectId: `syn${faker.number.int({
      min: min(mockProjects.map(p => parseInt(removePrefixIfSynId(p.id)))),
      max: max(mockProjects.map(p => parseInt(removePrefixIfSynId(p.id)))),
    })}`,
    title: faker.lorem.words({ min: 2, max: 8 }),
    ...overrides,
  }
}
