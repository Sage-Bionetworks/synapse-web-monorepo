import { EXTERNAL_FILE_HANDLE_CONCRETE_TYPE } from './ExternalFileHandle'
import { EXTERNAL_OBJECT_STORE_FILE_HANDLE_CONCRETE_TYPE } from './ExternalObjectStoreFileHandle'
import { FileHandle } from './FileHandle'
import { PROXY_FILE_HANDLE_CONCRETE_TYPE } from './ProxyFileHandle'

export type EXTERNAL_FILE_HANDLE_INTERFACE_CONCRETE_TYPE =
  | PROXY_FILE_HANDLE_CONCRETE_TYPE
  | EXTERNAL_OBJECT_STORE_FILE_HANDLE_CONCRETE_TYPE
  | EXTERNAL_FILE_HANDLE_CONCRETE_TYPE

/*
  Defines FileHandles for files that are stored externally and can not be controlled by Synapse.
  All file access authentication and download/upload/delete operations are delegated the client.
*/
export interface ExternalFileHandleInterface extends FileHandle {
  readonly concreteType: EXTERNAL_FILE_HANDLE_INTERFACE_CONCRETE_TYPE
}
