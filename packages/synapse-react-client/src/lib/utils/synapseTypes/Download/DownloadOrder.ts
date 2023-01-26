import { FileHandleAssociation } from '../FileHandleAssociation'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/DownloadOrder.html
export interface DownloadOrder {
  files: FileHandleAssociation[] //	The list of files included in this order.
  orderId: string //	The ID of this order.
  createdBy: string //	The ID of the user that created this order.
  createdOn: string //	The date-time when the order was created.
  zipFileName: string //	The name of the file containing this order.
  totalSizeBytes: number // The total size of all files in this order in bytes (uncompressed).
  totalNumberOfFiles: number //	The total number of files in this download order.
}
