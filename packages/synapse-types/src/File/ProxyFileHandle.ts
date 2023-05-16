import { ExternalFileHandleInterface } from './ExternalFileHandleInterface'

export const PROXY_FILE_HANDLE_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.file.ProxyFileHandle'
export type PROXY_FILE_HANDLE_CONCRETE_TYPE =
  typeof PROXY_FILE_HANDLE_CONCRETE_TYPE_VALUE

/**
 * Reference to a file that accessible via a proxy server. Each ProxyFileHandle must reference a ProxyStorageLocationSettings that defines how the files are accessed.
 *
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/ProxyFileHandle.html
 */
export interface ProxyFileHandle extends ExternalFileHandleInterface {
  /** The relative path of this file within the proxy. */
  readonly filePath: string
  readonly concreteType: PROXY_FILE_HANDLE_CONCRETE_TYPE
}
