// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/wiki/WikiPage.html

export type WikiPage = {
  attachmentFileHandleIds: string[]
  createdBy: string
  createdOn: string
  etag: string
  id: string
  markdown: string
  modifiedBy: string
  modifiedOn: string
  title: string
  parentWikiId?: string // When set, the WikiPage is a sub-page of the indicated parent WikiPage.
}
