import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import {
  DownloadPFBRequest,
  DownloadPFBResult,
} from '@sage-bionetworks/synapse-types'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import SynapseClient from '../../synapse-client/index'
import { useSynapseContext } from '../../stores/SynapseContext/SynapseContext'

/**
 * useMutation wrapper for POST /entity/:id/table/download/pfb/async/start and GET /entity/:id/table/download/pfb/async/get/asyncToken
 * @param options
 */
export function useDownloadTableQueryResultAsPFB(
  options?: Partial<
    UseMutationOptions<
      DownloadPFBResult,
      SynapseClientError,
      DownloadPFBRequest
    >
  >,
) {
  const { accessToken } = useSynapseContext()
  return useMutation<DownloadPFBResult, SynapseClientError, DownloadPFBRequest>(
    {
      ...options,
      mutationFn: request =>
        SynapseClient.createTablePfbForDownload(request, accessToken),
    },
  )
}
