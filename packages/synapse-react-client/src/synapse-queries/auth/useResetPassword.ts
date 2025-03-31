import SynapseClient from '@/synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'

export function useResetPassword(
  options?: Partial<UseMutationOptions<'', SynapseClientError, string>>,
) {
  return useMutation({
    ...options,
    mutationFn: username => SynapseClient.resetPassword(username),
  })
}
