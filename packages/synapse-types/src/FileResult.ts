import { FileHandle } from './File'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/FileResult.html
export type FileResult = {
  fileHandleId: string // The ID of the requested FileHandle.
  fileHandle?: FileHandle // The FileHandle interface defines all
  // of the fields that are common to all implementations.
  preSignedURL?: string // A pre-signed URL to download the requested file.
  // Null if the request.includePreSignedURLs=false.
  previewPreSignedURL?: string // A pre-signed URL to download the preview of requested file.
  // Null if the request.includePreviewPreSignedURLs=false.
  failureCode?: 'NOT_FOUND' | 'UNAUTHORIZED' // Failure code for a files that cannot be downloaded.
}
