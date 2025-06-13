import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import {
  CreateGridResponse,
  CreateGridRequest,
} from '@sage-bionetworks/synapse-types'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
//import SynapseClient from '@/synapse-client/index'
//import { SynapseClient } from '@sage-bionetworks/synapse-client/SynapseClient'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import startGridSession from '../../utils/functions/GridApiUtils'

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
  const SynapseClient = useSynapseContext().synapseClient

  return useMutation<CreateGridResponse, SynapseClientError, CreateGridRequest>(
    {
      mutationFn: async (request: CreateGridRequest) => {
        console.log('=== MUTATION FUNCTION START ===')
        console.log('Request:', request)
        console.log('Access Token exists:', !!accessToken)

        try {
          console.log('Calling GridSessionAsyncStart...', request)
          const result = await startGridSession(SynapseClient, {
            ...request,
            concreteType:
              'org.sagebionetworks.repo.model.grid.CreateGridRequest',
          })
          console.log('GridSessionAsyncStart completed:', result)

          // Adapt the result to match the expected CreateGridResponse type
          if (
            !result.gridSession ||
            typeof result.gridSession.sessionId !== 'string'
          ) {
            throw new Error('Invalid gridSession: expected a string')
          }
          return {
            ...result,
            gridSession: result.gridSession,
          }
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
