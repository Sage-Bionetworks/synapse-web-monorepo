import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { SynapseClientError } from 'synapse-client'
import SynapseClient from '../../synapse-client'

export function useResetPassword(
  options?: Partial<UseMutationOptions<'', SynapseClientError, string>>,
) {
  return useMutation({
    ...options,
    mutationFn: username => SynapseClient.resetPassword(username),
  })
}
