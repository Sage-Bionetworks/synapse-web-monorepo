// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/MultipartUploadStatus.html
export type MultipartUploadStatus = {
  uploadId: string
  startedBy: string
  startedOn: string
  updatedOn: string
  partsState: string
  state: 'UPLOADING' | 'COMPLETED' // The state of this file upload
  resultFileHandleId: string
}
