import {
  DiscussionReplyBundle,
  DiscussionThreadBundle,
} from '@sage-bionetworks/synapse-types'
import {
  mockUserProfileData,
  mockUserProfileData2,
} from '../user/mock_user_profile'
import { times } from 'lodash-es'
import {
  generateDiscussionThreadBundle,
  generateForum,
} from '../faker/generateDiscussion'
import { mockProjects } from '../entity/mockProject'

export const MOCK_FORUM_ID = '984321189'

export const mockForums = mockProjects.map(project =>
  generateForum({
    projectId: project.id,
  }),
)
const generatedDiscussionThreadBundles = mockForums.flatMap(forum => {
  return times(10).map(i =>
    generateDiscussionThreadBundle({
      forumId: forum.id,
      projectId: forum.projectId,
    }),
  )
})

export const MOCK_SUBSCRIPTION_ID = '123'

export const mockDiscussionThreadBundle: DiscussionThreadBundle = {
  id: '999',
  forumId: MOCK_FORUM_ID,
  projectId: '123',
  title: 'mockTitle1',
  createdOn: '2022-09-28',
  createdBy: mockUserProfileData.ownerId,
  modifiedOn: '2022-09-28',
  etag: 'xxx',
  messageKey: 'xxx',
  numberOfViews: 2,
  numberOfReplies: 3,
  lastActivity: '2022-09-28',
  activeAuthors: [mockUserProfileData.ownerId, mockUserProfileData2.ownerId],
  isEdited: false,
  isDeleted: false,
  isPinned: false,
}

export const mockDiscussionThreadBundle2: DiscussionThreadBundle = {
  ...mockDiscussionThreadBundle,
  id: '888',
  projectId: '12',
  title: 'mockTitle2',
  createdBy: mockUserProfileData2.ownerId,
  numberOfViews: 14,
  numberOfReplies: 3,
}

export const mockDiscussionReplyBundle: DiscussionReplyBundle = {
  ...mockDiscussionThreadBundle,
  id: '123',
  createdBy: mockUserProfileData2.ownerId,
  threadId: mockDiscussionThreadBundle.id,
}

export const mockDiscussionThreadBundles = [
  ...generatedDiscussionThreadBundles,
  mockDiscussionThreadBundle,
  mockDiscussionThreadBundle2,
]
