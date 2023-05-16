import { CLOUD_PROVIDER_FILE_HANDLE_INTERFACE_CONCRETE_TYPE } from './CloudProviderFileHandle'
import { EXTERNAL_FILE_HANDLE_INTERFACE_CONCRETE_TYPE } from './ExternalFileHandleInterface'

/**
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/FileHandle.html
 */
export interface FileHandle {
  /** The ID of this FileHandle. All references to this FileHandle will use this ID. Synapse will generate this ID when the FileHandle is created. */
  id: string
  /** FileHandles are immutable from the perspective of the API. The only field that can be change is the previewId. When a new previewId is set, the etag will change. */
  etag: string
  /** The ID Of the user that created this file. */
  createdBy: string
  /** The date when this file was uploaded. */
  createdOn: string
  /** This is used to indicate the implementation of this interface. For example, an S3FileHandle should be set to: org.sagebionetworks.repo.model.file.S3FileHandle */
  readonly concreteType:
    | EXTERNAL_FILE_HANDLE_INTERFACE_CONCRETE_TYPE
    | CLOUD_PROVIDER_FILE_HANDLE_INTERFACE_CONCRETE_TYPE
  /** Must be: http://en.wikipedia.org/wiki/Internet_media_type */
  contentType: string
  /** The file's content MD5. */
  contentMd5?: string
  /** The short, user visible name for this file. */
  fileName: string
  /** The optional storage location descriptor */
  storageLocationId: number
  /** The size of the file in bytes. */
  contentSize: number
}
