import { useGridPresignedUrl } from '@/synapse-queries/grid/useGridPresignedUrl'
import { DataGridWebSocket } from '@/components/DataGrid/DataGridWebSocket'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { GridModel } from '@/components/DataGrid/DataGridTypes'
import { useState } from 'react'

interface EstablishWebsocketParams {
  replicaId: number
  sessionId: string
  websocketOptions?: {
    onGridReady?: () => void
    onStatusChange?: (open: boolean) => void
    onModelCreate?: (model: GridModel) => void
  }
}

/**
 * Hook to establish a DataGrid WebSocket using a presigned URL.
 * Assumes the WebSocket will connect successfully once a presigned URL is retrieved.
 */
export function useEstablishWebsocketConnection(
  options?: Partial<
    UseMutationOptions<DataGridWebSocket, unknown, EstablishWebsocketParams>
  >,
) {
  const { mutateAsync: fetchPresignedUrl } = useGridPresignedUrl()
  const [presignedUrl, setPresignedUrl] = useState<string | null>(null)

  const mutation = useMutation({
    retry: 5,
    retryDelay: attempt =>
      Math.min(attempt > 1 ? 2 ** attempt * 1000 : 1000, 30 * 1000),
    mutationFn: async ({
      replicaId,
      sessionId,
      websocketOptions,
    }: EstablishWebsocketParams) => {
      if (!replicaId) throw new Error('replicaId is required')
      const url = await fetchPresignedUrl({ replicaId, sessionId })
      setPresignedUrl(url)

      return new DataGridWebSocket({
        replicaId,
        url,
        ...(websocketOptions || {}),
      })
    },
    ...options,
  })

  return { ...mutation, presignedUrl }
}
