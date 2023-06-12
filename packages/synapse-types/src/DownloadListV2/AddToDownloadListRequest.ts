import { Query } from '../Table'

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/download/AddToDownloadListRequest.html
export type AddToDownloadListRequest = {
  concreteType: 'org.sagebionetworks.repo.model.download.AddToDownloadListRequest'
  query?: Query
  parentId?: string //The synID of a folder or project to add all of the children files to the user's download list. This parameter should be excluded when adding files from a query. Note: This is not recursive.
  useVersionNumber?: boolean //When true (default), the version number will be included for each file added to the user's download list. When set to false, the version number will be excluded, indicating that the 'current' version should always be downloaded.
}
