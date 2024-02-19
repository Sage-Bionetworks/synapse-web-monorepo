import {
  CloudProviderFileHandleInterface,
  EntityBundle,
  EntityType,
  EXTERNAL_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  EXTERNAL_OBJECT_STORE_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  ExternalFileHandle,
  ExternalGoogleCloudUploadDestination,
  ExternalObjectStoreFileHandle,
  ExternalObjectStoreUploadDestination,
  ExternalS3UploadDestination,
  ExternalUploadDestination,
  FileEntity,
  FileHandle,
  GOOGLE_CLOUD_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  PROXY_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  ProxyFileHandle,
  S3_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  UploadDestination,
  UploadType,
} from '@sage-bionetworks/synapse-types'

const SYNAPSE_STORAGE = 'Synapse Storage'

type FileHandleStorageInfo =
  | {
      endpoint: string
      bucket: string
      fileKey: string
    }
  | { url: string }
  | { location: string }

/**
 * Returns storage location information for a particular file handle, where the format of the information depends on the type of file handle.
 * @param fileHandle
 */
export function getFileHandleStorageInfo(
  fileHandle: FileHandle,
  storageLocationUploadDestination: UploadDestination | undefined,
): FileHandleStorageInfo {
  switch (fileHandle.concreteType) {
    case EXTERNAL_OBJECT_STORE_FILE_HANDLE_CONCRETE_TYPE_VALUE:
      return {
        endpoint: (fileHandle as ExternalObjectStoreFileHandle).endpointUrl,
        bucket: (fileHandle as ExternalObjectStoreFileHandle).bucket,
        fileKey: (fileHandle as ExternalObjectStoreFileHandle).fileKey,
      }
    case PROXY_FILE_HANDLE_CONCRETE_TYPE_VALUE:
    case EXTERNAL_FILE_HANDLE_CONCRETE_TYPE_VALUE:
      return {
        url: getStorageLocationName(
          fileHandle,
          storageLocationUploadDestination,
        ),
      }
    case S3_FILE_HANDLE_CONCRETE_TYPE_VALUE:
    case GOOGLE_CLOUD_FILE_HANDLE_CONCRETE_TYPE_VALUE:
      return {
        location: getStorageLocationName(
          fileHandle,
          storageLocationUploadDestination,
        ),
      }
    default:
      throw new Error(
        `Couldn't determine location name for file handle: ${JSON.stringify(
          fileHandle,
        )}`,
      )
  }
}

/**
 * Gets the friendly name of a bucket/storage location using the file handle.
 *
 * @param fileHandle
 * @returns
 */
export function getStorageLocationName(
  fileHandle: FileHandle,
  storageLocationUploadDestination: UploadDestination | undefined,
) {
  switch (fileHandle.concreteType) {
    case PROXY_FILE_HANDLE_CONCRETE_TYPE_VALUE:
      return (fileHandle as ProxyFileHandle).filePath
    case EXTERNAL_OBJECT_STORE_FILE_HANDLE_CONCRETE_TYPE_VALUE:
    case S3_FILE_HANDLE_CONCRETE_TYPE_VALUE:
    case GOOGLE_CLOUD_FILE_HANDLE_CONCRETE_TYPE_VALUE:
      if (storageLocationUploadDestination) {
        return getUploadDestinationString(storageLocationUploadDestination)
      }
      return fileHandle.concreteType ===
        EXTERNAL_OBJECT_STORE_FILE_HANDLE_CONCRETE_TYPE_VALUE
        ? (fileHandle as ExternalObjectStoreFileHandle).bucket
        : (fileHandle as CloudProviderFileHandleInterface).bucketName
    case EXTERNAL_FILE_HANDLE_CONCRETE_TYPE_VALUE:
      return (fileHandle as ExternalFileHandle).externalURL
    default:
      throw new Error(
        `Couldn't determine location name for file handle: ${JSON.stringify(
          fileHandle,
        )}`,
      )
  }
}

/**
 * Gets the data file handle from an entity bundle.
 * Returns undefined if the entity does not have a data file handle that is visible to the caller.
 * @param entityBundle
 */
export function getDataFileHandle(
  entityBundle: EntityBundle,
): FileHandle | undefined {
  let dataFileHandle = undefined
  if (entityBundle.entityType === EntityType.FILE) {
    dataFileHandle = entityBundle.fileHandles.filter(
      fh => fh.id === (entityBundle.entity as FileEntity).dataFileHandleId,
    )[0]
  }
  return dataFileHandle
}

export function getUploadDestinationString(
  uploadDestination: UploadDestination,
) {
  let uploadDestinationString = ''
  if (uploadDestination) {
    switch (uploadDestination.concreteType) {
      case 'org.sagebionetworks.repo.model.file.S3UploadDestination':
        uploadDestinationString = SYNAPSE_STORAGE
        break
      case 'org.sagebionetworks.repo.model.file.ExternalUploadDestination':
        uploadDestinationString = (
          uploadDestination as ExternalUploadDestination
        ).url
        if (uploadDestination.uploadType === UploadType.SFTP) {
          const indexOfLastSlash = uploadDestinationString.lastIndexOf('/')
          if (indexOfLastSlash) {
            uploadDestinationString = uploadDestinationString.substring(
              0,
              indexOfLastSlash,
            )
          }
        }
        break
      case 'org.sagebionetworks.repo.model.file.ExternalS3UploadDestination':
        uploadDestinationString =
          's3://' +
          (uploadDestination as ExternalS3UploadDestination).bucket +
          '/'
        if (
          (uploadDestination as ExternalS3UploadDestination).baseKey != null
        ) {
          uploadDestinationString += (
            uploadDestination as ExternalS3UploadDestination
          ).baseKey
        }
        break
      case 'org.sagebionetworks.repo.model.file.ExternalGoogleCloudUploadDestination':
        uploadDestinationString =
          'gs://' +
          (uploadDestination as ExternalGoogleCloudUploadDestination).bucket +
          '/'
        if (
          (uploadDestination as ExternalGoogleCloudUploadDestination).baseKey !=
          null
        ) {
          uploadDestinationString += (
            uploadDestination as ExternalGoogleCloudUploadDestination
          ).baseKey
        }
        break
      case 'org.sagebionetworks.repo.model.file.ExternalObjectStoreUploadDestination':
        uploadDestinationString =
          (uploadDestination as ExternalObjectStoreUploadDestination)
            .endpointUrl +
          '/' +
          (uploadDestination as ExternalObjectStoreUploadDestination).bucket
        break
    }
  }
  return uploadDestinationString
}
