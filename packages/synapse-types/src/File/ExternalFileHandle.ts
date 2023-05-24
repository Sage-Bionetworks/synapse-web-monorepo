import { ExternalFileHandleInterface } from './ExternalFileHandleInterface'

export const EXTERNAL_FILE_HANDLE_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.file.ExternalFileHandle'
export type EXTERNAL_FILE_HANDLE_CONCRETE_TYPE =
  typeof EXTERNAL_FILE_HANDLE_CONCRETE_TYPE_VALUE

/**
 * An ExternalFileHandle represents a file that is not stored in Synapse. Instead, ExternalFileHandles reside somewhere accessible via a URL. Synapse will attempt to generate a preview for any external URL that can be publicly read.
 *
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/ExternalFileHandle.html
 */
export interface ExternalFileHandle extends ExternalFileHandleInterface {
  /** The external URL of this file. */
  readonly externalURL: string
  readonly concreteType: EXTERNAL_FILE_HANDLE_CONCRETE_TYPE
}
