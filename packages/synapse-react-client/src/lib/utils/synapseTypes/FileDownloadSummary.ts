import { FileHandleAssociateType } from './FileHandleAssociation'

// The download status of this file.
export enum FileDownloadStatus {
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

// If the download status of this file is set to 'FAILURE', then this will be the failure code. Null for 'SUCCESS'.
export enum FileDownloadCode {
  NOT_FOUND = 'NOT_FOUND',
  UNAUTHORIZED = 'UNAUTHORIZED',
  DUPLICATE = 'DUPLICATE',
  EXCEEDS_SIZE_LIMIT = 'EXCEEDS_SIZE_LIMIT',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/FileDownloadSummary.html
export type FileDownloadSummary = {
  fileHandleId: string //	The file handle id of a requested file.
  associateObjectId: string //	The ID of the object associated with the file
  associateObjectType: FileHandleAssociateType //	Enumeration of all possible objects types that can be associated with a file.
  zipEntryName: string //	The zip entry name used for this file. This entry includes both the path and file name. The value will only be set if the status is set to 'SUCCESS'
  status: FileDownloadStatus //	The download status of this file.
  failureMessage: string //	If the download status of this file is set to 'FAILURE', then this will be the failure message. Null for 'SUCCESS'.
  failureCode: FileDownloadCode | null // If the download status of this file is set to 'FAILURE', then this will be the failure code. Null for 'SUCCESS'.
}
