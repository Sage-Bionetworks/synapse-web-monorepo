import { FileResult } from './FileResult'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/BatchFileResult.html
// Get a batch of pre-signed URLs and/or FileHandles for the given list of FileHandleAssociations
export type BatchFileResult = {
  requestedFiles: FileResult[]
}
