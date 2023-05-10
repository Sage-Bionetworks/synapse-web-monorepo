// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/download/DownloadListItem.html
export type DownloadListItem = {
  fileEntityId: string //	The 'syn' identifier of a file entity.
  versionNumber?: number //	When included, indicates that a specific version of a files was added to the user's download list. When excluded, the current version was added.
}
