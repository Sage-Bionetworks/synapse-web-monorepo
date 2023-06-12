import { FileHandleAssociation } from './FileHandleAssociation'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/ZipFileFormat.html
export enum ZipFileFormat {
  CommandLineCache = 'CommandLineCache', // This is the default format. Zip file format structure is: (%1000)//
  Flat = 'Flat', // Files are writtent to the zip 'flat' with no directory structure.
  //Each file is named after the original file. Duplicate file names are appended with a number in parenthesis to ensure all names are unique.
}

// Request for a bulk file download.
// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/BulkFileDownloadRequest.html
export type BulkFileDownloadRequest = {
  concreteType: 'org.sagebionetworks.repo.model.file.BulkFileDownloadRequest'
  requestedFiles: FileHandleAssociation[] // The files to be included in the download.
  zipFileName: string // Optional parameter to set the name of the resulting zip file.
  zipFileFormat?: ZipFileFormat // Enumeration of all possible zip file formats produced by bulk file download worker
}
