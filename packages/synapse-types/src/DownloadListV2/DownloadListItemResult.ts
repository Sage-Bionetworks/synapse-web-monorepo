// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/download/DownloadListItemResult.html

export type DownloadListItemResult = {
  fileName: string // The name of the file.
  addedOn: string // The date-time when this file was added to the user's download list.
  projectId: string // The ID of the project that contains this file.
  projectName: string // The name of the project that contains this file.
  createdBy: string // The ID of the user that created this file.
  createdOn: string //The date-time when this file was created.
  fileSizeBytes: number //The size of the file in bytes.
  fileEntityId: string //The 'syn' identifier of a file entity.
  versionNumber: number //When included, indicates that a specific version of a files was added to the user's download list. When excluded, the current version was added.
  isEligibleForPackaging: boolean //Only files that are managed by Synapse storage are eligible for packaging into a zip file. If true, then the file is eligible for packaging into a zip file.
}
