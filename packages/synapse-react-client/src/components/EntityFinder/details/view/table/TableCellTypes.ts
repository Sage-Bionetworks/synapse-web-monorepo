import { FileHandle } from '@sage-bionetworks/synapse-types'

export type FileHandleWithPreview = FileHandle & {
  isPreview?: boolean
}

/**
 * The data across tables may differ, but it has entity ID and version, then it can use many of these renderers
 */
export type EntityIdAndVersionNumber = {
  entityId: string
  versionNumber?: number
}
