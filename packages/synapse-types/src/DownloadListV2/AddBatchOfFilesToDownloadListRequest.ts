import { DownloadListItem } from './DownloadListItem'

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/download/AddBatchOfFilesToDownloadListRequest.html
export type AddBatchOfFilesToDownloadListRequest = {
  batchToAdd: DownloadListItem[] //	The batch of files to add to the user's download list. Note: There is a limit of 1000 files per batch.
}
