import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import {
  ChangePasswordWithCurrentPassword,
  ChangePasswordWithToken,
  ChangePasswordWithTwoFactorAuthToken,
} from '@sage-bionetworks/synapse-types'
import { SynapseClientError } from 'synapse-client/util/SynapseClientError'
import { TwoFactorAuthErrorResponse } from 'synapse-client/generated/models/TwoFactorAuthErrorResponse'
import SynapseClient from '../../synapse-client'

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
