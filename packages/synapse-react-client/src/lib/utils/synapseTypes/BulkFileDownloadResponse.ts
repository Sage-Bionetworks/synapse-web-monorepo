import { FileDownloadSummary } from './FileDownloadSummary'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/BulkFileDownloadResponse.html
export type BulkFileDownloadResponse = {
  concreteType: 'org.sagebionetworks.repo.model.file.BulkFileDownloadResponse'
  resultZipFileHandleId: string // The FileHandle.id of the resulting zip file. This zip file will contain all of the requested files that the caller was authorized to download.
  fileSummary: FileDownloadSummary[] // The summary of each requested file.
  userId: string // The ID of the user that made this request.
}
