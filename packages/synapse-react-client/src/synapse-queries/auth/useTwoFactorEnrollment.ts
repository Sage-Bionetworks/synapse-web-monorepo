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
  TwoFactorAuthDisableRequest,
  TwoFactorAuthResetRequest,
  TwoFactorAuthStatus,
} from '@sage-bionetworks/synapse-types'
import { SynapseClientError } from 'synapse-client'
import SynapseClient from '../../synapse-client'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { getAllActionsRequiredQueryFilters } from '../QueryFilterUtils'

export function useStartTwoFactorEnrollment(
  options?: Partial<UseMutationOptions<TotpSecret, SynapseClientError>>,
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
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: keyFactory.getTwoFactorAuthStatusQueryKey(),
        }),
        // Changing 2FA status may impact access requirement status
        queryClient.invalidateQueries({
          queryKey: keyFactory.getAllAccessRequirementStatusesQueryKey(),
        }),
        // ...and any change to access requirement eligibility will impact actions required
        ...getAllActionsRequiredQueryFilters(keyFactory).map(filter =>
          queryClient.invalidateQueries(filter),
        ),
      ])
    },
    mutationFn: request =>
      SynapseClient.complete2FAEnrollment(request, accessToken),
  })
}

export function useDisableTwoFactorAuth(
  options?: Partial<UseMutationOptions<void, SynapseClientError, void>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation<void, SynapseClientError, void>({
    ...options,
    onSuccess: async (...args) => {
      if (options?.onSuccess) {
        options.onSuccess(...args)
      }
      return Promise.all([
        queryClient.invalidateQueries({
          queryKey: keyFactory.getTwoFactorAuthStatusQueryKey(),
        }),
        // Changing 2FA status may impact access requirement status
        queryClient.invalidateQueries({
          queryKey: keyFactory.getAllAccessRequirementStatusesQueryKey(),
        }),
        // ...and any change to access requirement eligibility will impact actions required
        ...getAllActionsRequiredQueryFilters(keyFactory).map(filter =>
          queryClient.invalidateQueries(filter),
        ),
      ])
    },
    mutationFn: () =>
      SynapseClient.disableTwoFactorAuthForCurrentUser(accessToken),
  })
}

export function useGetTwoFactorEnrollmentStatus(
  options?: Partial<UseQueryOptions<TwoFactorAuthStatus, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    queryKey: keyFactory.getTwoFactorAuthStatusQueryKey(),
    queryFn: () =>
      SynapseClient.getCurrentUserTwoFactorEnrollmentStatus(accessToken),
    ...options,
  })
}

export function useResetTwoFactorAuth(
  options?: Partial<
    UseMutationOptions<void, SynapseClientError, TwoFactorAuthResetRequest>
  >,
) {
  return useMutation<void, SynapseClientError, TwoFactorAuthResetRequest>({
    ...options,
    mutationFn: request => SynapseClient.resetTwoFactorAuth(request),
  })
}

export function useDisableTwoFactorAuthWithResetToken(
  options?: Partial<
    UseMutationOptions<void, SynapseClientError, TwoFactorAuthDisableRequest>
  >,
) {
  return useMutation<void, SynapseClientError, TwoFactorAuthDisableRequest>({
    ...options,
    // Invalidating query data isn't needed, since the user is not authenticated in this case
    mutationFn: request => SynapseClient.disableTwoFactorAuth(request),
  })
}
