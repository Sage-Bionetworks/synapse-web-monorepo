import { CloudProviderFileHandleInterface } from './CloudProviderFileHandle'

export const S3_FILE_HANDLE_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.file.S3FileHandle'
export type S3_FILE_HANDLE_CONCRETE_TYPE =
  typeof S3_FILE_HANDLE_CONCRETE_TYPE_VALUE

export interface S3FileHandle extends CloudProviderFileHandleInterface {
  readonly concreteType: S3_FILE_HANDLE_CONCRETE_TYPE
}
