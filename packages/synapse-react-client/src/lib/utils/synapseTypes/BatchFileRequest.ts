import { FileHandleAssociation } from './FileHandleAssociation'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/BatchFileRequest.html
// Batch Request for file pre-signed-URLs and/or FileHandles.

export type BatchFileRequest = {
  requestedFiles: FileHandleAssociation[] // Defines the files to get.
  includePreSignedURLs: boolean //	Set to true to request a pre-signed URL for each file.
  includeFileHandles: boolean //	Set to true to request a FileHandle for each file.
  includePreviewPreSignedURLs: boolean //	Set to true to request a preview's pre-signed URL for each file.
}
