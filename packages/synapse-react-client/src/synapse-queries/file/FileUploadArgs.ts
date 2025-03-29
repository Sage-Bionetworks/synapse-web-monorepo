import { ProgressCallback } from '@/synapse-client/SynapseClient'

export type FileUploadArgs = {
  readonly blob: Blob
  readonly fileName: string
  readonly contentType: string
  readonly progressCallback?: (progress: ProgressCallback) => void
  readonly abortController: AbortController | undefined
  readonly storageLocationId: number
  readonly onMd5Computed?: (() => void) | undefined
}
