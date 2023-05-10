import { PartPresignedUrl } from './PartPresignedUrl'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/BatchPresignedUploadUrlResponse.html

export type BatchPresignedUploadUrlResponse = {
  partPresignedUrls: PartPresignedUrl[]
}
