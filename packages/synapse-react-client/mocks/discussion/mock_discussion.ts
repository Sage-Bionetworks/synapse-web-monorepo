import {
  DiscussionReplyBundle,
  DiscussionThreadBundle,
} from '../../src/lib/utils/synapseTypes/DiscussionBundle'
import {
  mockUserProfileData,
  mockUserProfileData2,
} from '../user/mock_user_profile'

export const MOCK_FORUM_ID = 'syn123'
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
