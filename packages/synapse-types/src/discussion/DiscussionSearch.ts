// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/discussion/DiscussionSearchRequest.html
export type DiscussionSearchRequest = {
  searchString: string | undefined
  nextPageToken: string | undefined
}

export type Match = {
  forumId: string
  threadId: string
  replyId: string
}

export type DiscussionSearchResponse = {
  matches: Match[]
  nextPageToken: string
}
