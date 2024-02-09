import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'
import {
  TotpSecret,
  TotpSecretActivationRequest,
  TwoFactorAuthStatus,
} from '@sage-bionetworks/synapse-types'
import { SynapseClientError } from '../../utils/SynapseClientError'
import SynapseClient from '../../synapse-client'
import { useSynapseContext } from '../../utils/context/SynapseContext'

export function useStartTwoFactorEnrollment(
  options?: UseMutationOptions<TotpSecret, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  return useMutation({
    ...options,
    mutationFn: () => SynapseClient.start2FAEnrollment(accessToken),
  })
}

export function useFinishTwoFactorEnrollment(
  options?: UseMutationOptions<
    TwoFactorAuthStatus,
    SynapseClientError,
    TotpSecretActivationRequest
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation<
    TwoFactorAuthStatus,
    SynapseClientError,
    TotpSecretActivationRequest
  >({
    ...options,
    onSuccess: async (...args) => {
      if (options?.onSuccess) {
        options.onSuccess(...args)
      }
      await queryClient.invalidateQueries(
        keyFactory.getTwoFactorAuthStatusQueryKey(),
      )
    },
    mutationFn: request =>
      SynapseClient.complete2FAEnrollment(request, accessToken),
  })
}

export function useDisableTwoFactorAuth(
  options?: UseMutationOptions<void, SynapseClientError, void>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation<void, SynapseClientError, void>({
    ...options,
    onSuccess: async (...args) => {
      if (options?.onSuccess) {
        options.onSuccess(...args)
      }
      await queryClient.invalidateQueries(
        keyFactory.getTwoFactorAuthStatusQueryKey(),
      )
    },
    mutationFn: () =>
      SynapseClient.disableTwoFactorAuthForCurrentUser(accessToken),
  })
}

export function useGetTwoFactorEnrollmentStatus(
  options?: UseQueryOptions<TwoFactorAuthStatus, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery(
    keyFactory.getTwoFactorAuthStatusQueryKey(),
    () => SynapseClient.getCurrentUserTwoFactorEnrollmentStatus(accessToken),
    {
      ...options,
    },
  )
}
