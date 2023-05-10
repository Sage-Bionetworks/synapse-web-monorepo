import { DownloadListItem } from './DownloadListItem'

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/download/RemoveBatchOfFilesFromDownloadListRequest.html
export type RemoveBatchOfFilesFromDownloadListRequest = {
  batchToRemove: DownloadListItem[] // The batch of files to remove from the user's download list. Note: There is a limit of 1000 files per batch.
}
