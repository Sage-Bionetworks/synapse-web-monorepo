import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import {
  CreateGridResponse,
  CreateGridRequest,
} from '@sage-bionetworks/synapse-client'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
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
  const { synapseClient } = useSynapseContext()

  return useMutation<CreateGridResponse, SynapseClientError, CreateGridRequest>(
    {
      ...options,
      mutationFn: async (request: CreateGridRequest) =>
        await startGridSession(synapseClient, request),
    },
  )
}
