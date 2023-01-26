// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/MultipartUploadRequest.html

export type MultipartUploadRequest = {
  contentMD5Hex?: string
  contentType: string
  fileSizeBytes: number
  partSizeBytes: number
  fileName: string
  storageLocationId: number
  generatePreview?: boolean
}
