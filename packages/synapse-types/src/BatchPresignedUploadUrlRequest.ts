// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/BatchPresignedUploadUrlRequest.html

export type BatchPresignedUploadUrlRequest = {
  uploadId: string
  partNumbers: number[]
  contentType: string
}
