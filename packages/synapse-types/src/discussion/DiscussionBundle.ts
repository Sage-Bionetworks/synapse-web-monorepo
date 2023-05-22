// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/discussion/DiscussionReplyBundle.html
export type DiscussionReplyBundle = {
  id: string
  threadId: string
  forumId: string
  projectId: string
  createdOn: string
  createdBy: string
  modifiedOn: string
  etag: string
  messageKey: string
  isEdited: boolean
  isDeleted: boolean
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/discussion/Forum.html
export type Forum = {
  id: string
  projectId: string
  etag: string
}

export type DiscussionThreadBundle = {
  id: string
  forumId: string
  projectId: string
  title: string
  createdOn: string
  createdBy: string
  modifiedOn: string
  etag: string
  messageKey: string
  numberOfViews: number
  numberOfReplies: number
  lastActivity: string
  activeAuthors: string[]
  isEdited: boolean
  isDeleted: boolean
  isPinned: boolean
}

export enum DiscussionThreadOrder {
  NUMBER_OF_REPLIES = 'NUMBER_OF_REPLIES',
  NUMBER_OF_VIEWS = 'NUMBER_OF_VIEWS',
  PINNED_AND_LAST_ACTIVITY = 'PINNED_AND_LAST_ACTIVITY',
  THREAD_TITLE = 'THREAD_TITLE',
}

export enum DiscussionReplyOrder {
  CREATED_ON = 'CREATED_ON',
}

export enum DiscussionFilter {
  NO_FILTER = 'NO_FILTER',
  DELETED_ONLY = 'DELETED_ONLY',
  EXCLUDE_DELETED = 'EXCLUDE_DELETED',
}

export type CreateDiscussionReply = {
  threadId: string
  messageMarkdown: string
}

export type UpdateDiscussionReply = {
  replyId: string
  messageMarkdown: string
}

export type CreateDiscussionThread = {
  forumId: string
  title: string
  messageMarkdown: string
}

export type UpdateThreadMessageRequest = {
  messageMarkdown: string
  threadId: string
}

export type UpdateThreadTitleRequest = {
  title: string
  threadId: string
}
