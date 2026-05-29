import { CloudProviderFileHandleInterface } from './CloudProviderFileHandle'

export const GOOGLE_CLOUD_FILE_HANDLE_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.file.GoogleCloudFileHandle'
export type GOOGLE_CLOUD_FILE_HANDLE_CONCRETE_TYPE =
  typeof GOOGLE_CLOUD_FILE_HANDLE_CONCRETE_TYPE_VALUE

export interface GoogleCloudFileHandle
  extends CloudProviderFileHandleInterface {
  readonly concreteType: GOOGLE_CLOUD_FILE_HANDLE_CONCRETE_TYPE
}
