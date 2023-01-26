import { ExternalFileHandleInterface } from './ExternalFileHandleInterface'

export const EXTERNAL_OBJECT_STORE_FILE_HANDLE_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.file.ExternalObjectStoreFileHandle'
export type EXTERNAL_OBJECT_STORE_FILE_HANDLE_CONCRETE_TYPE =
  typeof EXTERNAL_OBJECT_STORE_FILE_HANDLE_CONCRETE_TYPE_VALUE

/**
 * Represents a file stored in an S3 Bucket to which Synapse cannot access. Together with ExternalObjectStorageLocationSetting, this object provides the information the client requires to access the S3 file.
 *
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/ExternalObjectStoreFileHandle.html
 */
export interface ExternalObjectStoreFileHandle
  extends ExternalFileHandleInterface {
  readonly concreteType: EXTERNAL_OBJECT_STORE_FILE_HANDLE_CONCRETE_TYPE
  /** endpoint URL of the S3 service. Do NOT set this value when creating a ExternalObjectStoreFileHandle since it will be overwritten with the value defined in the ExternalObjectStorageLocationSetting it references. */
  readonly endpointUrl: string
  /** the bucket to use. Do NOT set this value when creating a ExternalObjectStoreFileHandle since it will be it will be overwritten with the value defined in the ExternalObjectStorageLocationSetting it references. */
  readonly bucket: string
  /** The unique S3 key for this object */
  readonly fileKey: string
}
