import { useMutation, UseMutationOptions } from 'react-query'
import {
  TotpSecret,
  TotpSecretActivationRequest,
  TwoFactorAuthStatus,
} from '../../../synapseTypes/TotpSecret'
import { SynapseClientError } from '../../../SynapseClientError'
import { SynapseClient } from '../../../index'
import { useSynapseContext } from '../../../SynapseContext'

export function useStartTwoFactorEnrollment(
  options?: UseMutationOptions<TotpSecret, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  return useMutation({
    ...options,
    mutationFn: () => SynapseClient.start2FAEnrollment(accessToken!),
  })
}

export function useFinishTwoFactorEnrollment(
  options?: UseMutationOptions<
    TwoFactorAuthStatus,
    SynapseClientError,
    TotpSecretActivationRequest
  >,
) {
  const { accessToken } = useSynapseContext()
  return useMutation<
    TwoFactorAuthStatus,
    SynapseClientError,
    TotpSecretActivationRequest
  >({
    ...options,
    mutationFn: request =>
      SynapseClient.complete2FAEnrollment(request, accessToken),
  })
}
