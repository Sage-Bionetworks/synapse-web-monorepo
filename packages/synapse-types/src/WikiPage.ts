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
  // get out jail free card
  [x: string]: string | string[]
}
