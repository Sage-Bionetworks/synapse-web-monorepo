import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import {
  CreateGridResponse,
  CreateGridRequest,
} from '@sage-bionetworks/synapse-types'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import SynapseClient from '@/synapse-client/index'
import { useSynapseContext } from '@/utils/context/SynapseContext'

/**
 * useMutation wrapper for POST/grid/session/async/start and GET/grid/session/async/get/asyncToken
 * @param options
 */
export const useCreateGridSession = (
  options?: Partial<
    UseMutationOptions<
      CreateGridResponse,
      SynapseClientError,
      CreateGridRequest
    >
  >,
) => {
  const { accessToken } = useSynapseContext()

  return useMutation<CreateGridResponse, SynapseClientError, CreateGridRequest>(
    {
      ...options,
      mutationFn: async (request: CreateGridRequest) => {
        return await SynapseClient.GridSessionAsyncStart(request, accessToken)
      },
      onError: error => {
        console.error('Grid session creation failed:', error)
      },
      onSuccess: data => {
        console.log('Grid session created successfully:', data)
      },
    },
  )
}
