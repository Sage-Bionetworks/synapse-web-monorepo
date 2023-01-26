import { isTypeViaConcreteTypeFactory } from '../../functions/TypeUtils'
import { FileHandle } from './FileHandle'
import {
  GOOGLE_CLOUD_FILE_HANDLE_CONCRETE_TYPE,
  GOOGLE_CLOUD_FILE_HANDLE_CONCRETE_TYPE_VALUE,
} from './GoogleCloudFileHandle'
import {
  S3_FILE_HANDLE_CONCRETE_TYPE,
  S3_FILE_HANDLE_CONCRETE_TYPE_VALUE,
} from './S3FileHandle'

/*
  https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/CloudProviderFileHandleInterface.html
  Defines the common fields of FileHandles that are uploaded to cloud providers such as AWS S3 and Google Cloud Storage.
 */
export type CLOUD_PROVIDER_FILE_HANDLE_INTERFACE_CONCRETE_TYPE =
  | S3_FILE_HANDLE_CONCRETE_TYPE
  | GOOGLE_CLOUD_FILE_HANDLE_CONCRETE_TYPE

export interface CloudProviderFileHandleInterface extends FileHandle {
  readonly concreteType: CLOUD_PROVIDER_FILE_HANDLE_INTERFACE_CONCRETE_TYPE
  readonly bucketName: string
  readonly key: string
  readonly previewId?: string
  readonly isPreview: boolean
}

export const implementsCloudProviderFileHandleInterface =
  isTypeViaConcreteTypeFactory<CloudProviderFileHandleInterface>(
    S3_FILE_HANDLE_CONCRETE_TYPE_VALUE,
    GOOGLE_CLOUD_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  )
