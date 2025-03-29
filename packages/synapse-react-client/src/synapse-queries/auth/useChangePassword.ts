import SynapseClient from '@/synapse-client'
import { TwoFactorAuthErrorResponse } from '@sage-bionetworks/synapse-client/generated/models/TwoFactorAuthErrorResponse'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  ChangePasswordWithCurrentPassword,
  ChangePasswordWithToken,
  ChangePasswordWithTwoFactorAuthToken,
} from '@sage-bionetworks/synapse-types'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'

export function useChangePassword(
  options?: Partial<
    UseMutationOptions<
      '' | TwoFactorAuthErrorResponse,
      SynapseClientError,
      | ChangePasswordWithToken
      | ChangePasswordWithCurrentPassword
      | ChangePasswordWithTwoFactorAuthToken
    >
  >,
) {
  return useMutation({
    ...options,
    mutationFn: request => SynapseClient.changePassword(request),
  })
}
