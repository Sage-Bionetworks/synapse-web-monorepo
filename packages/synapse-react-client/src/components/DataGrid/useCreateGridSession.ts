import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import {
  CreateGridResponse,
  CreateGridRequest,
} from '@sage-bionetworks/synapse-types'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import SynapseClient from '@/synapse-client/index'
import { useSynapseContext } from '@/utils/context/SynapseContext'

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
      mutationFn: async (request: CreateGridRequest) => {
        console.log('=== MUTATION FUNCTION START ===')
        console.log('Request:', request)
        console.log('Access Token exists:', !!accessToken)

        try {
          console.log('Calling GridSessionAsyncStart...')
          const result = await SynapseClient.GridSessionAsyncStart(
            request,
            accessToken,
          )
          console.log('GridSessionAsyncStart completed:', result)

          // IMPORTANT: Make sure we return the result so React Query can store it
          return result
        } catch (error) {
          console.error('GridSessionAsyncStart failed:', error)
          throw error
        }
      },
      // Don't spread options first - let our callbacks take precedence
      onError: (error, variables, context) => {
        console.error('Mutation error:', error)
        options?.onError?.(error, variables, context)
      },
      onSuccess: (data, variables, context) => {
        options?.onSuccess?.(data, variables, context)
      },
      onSettled: (data, error, variables, context) => {
        options?.onSettled?.(data, error, variables, context)
      },
      // Spread user options after our callbacks so they can override if needed
      ...options,
    },
  )
}
