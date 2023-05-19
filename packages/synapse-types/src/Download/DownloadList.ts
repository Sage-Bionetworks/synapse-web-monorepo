// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/DownloadList.html
import { FileHandleAssociation } from '../FileHandleAssociation'

// User's list of files they wish to download.
export type DownloadList = {
  ownerId: string //	The ID of the user that owns this download list.
  updatedOn: string //	The date-time when the list was last updated.
  etag: string //	The UUID assigned to a user's download list upon each change to the list.
  filesToDownload: FileHandleAssociation[] //	The list of files to download.
}
