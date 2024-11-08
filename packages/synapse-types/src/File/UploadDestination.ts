/**
 * The upload destination contains information to start an upload of a file generated according to the underlying StorageLocationSetting.
 *
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/UploadDestination.html
 */
export interface UploadDestination {
  /* Indicates which implementation this object represents. */
  concreteType:
    | ExternalObjectStoreUploadDestination['concreteType']
    | ExternalUploadDestination['concreteType']
    | BaseKeyUploadDestination['concreteType']
  /* the unique id for the storage location, that points to the StorageLocationSetting */
  storageLocationId: number
  /* The enumeration of possible upload types. */
  uploadType: UploadType
  /* If set, the client should show this banner every time an upload is initiated */
  banner?: string
}

/**
 * The upload destination contains information necessary to start an upload to an S3 bucket not managed by Synapse.
 * This destination is mapped from an ExternalObjectStorageLocationSetting.
 *
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/ExternalObjectStoreUploadDestination.html
 */
export interface ExternalObjectStoreUploadDestination
  extends UploadDestination {
  concreteType: 'org.sagebionetworks.repo.model.file.ExternalObjectStoreUploadDestination'
  /* endpoint URL of the S3 service (for example: 'https://s3.amazonaws.com') */
  endpointUrl: string
  /* the bucket to use */
  bucket: string
  /* A UUID prefix used to identify the file to be uploaded. This field will have a new, unique value every time a new UploadDestination is retrieved. */
  keyPrefixUUID: string
}

/**
 * This upload destination contains information to start an upload to an SFTP or HTTPS destination. The destination is
 * mapped from an ExternalStorageLocationSetting.
 *
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/ExternalUploadDestination.html
 */
export interface ExternalUploadDestination extends UploadDestination {
  concreteType: 'org.sagebionetworks.repo.model.file.ExternalUploadDestination'
  /* the generated file URL for uploading to the external destination */
  url: string
}

/**
 * An upload destination with an optional base key.
 *
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/BaseKeyUploadDestination.html
 */
export interface BaseKeyUploadDestination extends UploadDestination {
  concreteType:
    | StsUploadDestination['concreteType']
    | ExternalGoogleCloudUploadDestination['concreteType']
  /* the optional base key, which acts as a prefix or a base folder */
  baseKey: string
}

const EXTERNAL_GOOGLE_CLOUD_UPLOAD_DESTINATION_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.file.ExternalGoogleCloudUploadDestination'
export type EXTERNAL_GOOGLE_CLOUD_UPLOAD_DESTINATION_CONCRETE_TYPE =
  typeof EXTERNAL_GOOGLE_CLOUD_UPLOAD_DESTINATION_CONCRETE_TYPE_VALUE

/**
 * This upload destination contains information to start an upload to an external Google Cloud Storage bucket connected
 * with synapse. The destination is mapped from an ExternalGoogleCloudStorageLocationSetting.
 *
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/ExternalGoogleCloudUploadDestination.html
 */
export interface ExternalGoogleCloudUploadDestination
  extends BaseKeyUploadDestination {
  concreteType: EXTERNAL_GOOGLE_CLOUD_UPLOAD_DESTINATION_CONCRETE_TYPE
  /* the bucket to use */
  bucket: string
}

/**
 * An StsUploadDestination provides settings to enable Synapse to call AWS Security Token Service (STS) to get temporary
 * AWS credentials
 *
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/StsUploadDestination.html
 */
export interface StsUploadDestination extends BaseKeyUploadDestination {
  concreteType:
    | S3_UPLOAD_DESTINATION_CONCRETE_TYPE
    | EXTERNAL_S3_UPLOAD_DESTINATION_CONCRETE_TYPE
  /* Enables STS on this Storage Location */
  stsEnabled: boolean
}

const EXTERNAL_S3_UPLOAD_DESTINATION_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.file.ExternalS3UploadDestination'
export type EXTERNAL_S3_UPLOAD_DESTINATION_CONCRETE_TYPE =
  typeof EXTERNAL_S3_UPLOAD_DESTINATION_CONCRETE_TYPE_VALUE

/**
 * This upload destination contains information to start an upload to an external external S3 bucket connected with
 * Synapse. The destination is mapped from an ExternalS3StorageLocationSetting.
 *
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/ExternalS3UploadDestination.html
 */
export interface ExternalS3UploadDestination extends StsUploadDestination {
  concreteType: EXTERNAL_S3_UPLOAD_DESTINATION_CONCRETE_TYPE
  /* the S3 endpoint url (default: https://s3.amazonaws.com) */
  endpointUrl: string
  /* the bucket to use */
  bucket: string
}

const S3_UPLOAD_DESTINATION_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.file.S3UploadDestination'
export type S3_UPLOAD_DESTINATION_CONCRETE_TYPE =
  typeof S3_UPLOAD_DESTINATION_CONCRETE_TYPE_VALUE

/**
 * The upload destination contains information to start an upload to the default Synapse storage location that exists on
 * Amazon S3. This destination is mapped from an S3StorageLocationSetting.
 *
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/S3UploadDestination.html
 */
export interface S3UploadDestination extends StsUploadDestination {
  concreteType: S3_UPLOAD_DESTINATION_CONCRETE_TYPE
}

/**
 * The enumeration of possible upload types.
 *
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/UploadType.html
 */
export enum UploadType {
  S3 = 'S3',
  GOOGLECLOUDSTORAGE = 'GOOGLECLOUDSTORAGE',
  SFTP = 'SFTP',
  HTTPS = 'HTTPS',
  PROXYLOCAL = 'PROXYLOCAL',
  NONE = 'NONE',
}
