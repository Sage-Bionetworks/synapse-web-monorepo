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
        // including for entities and the download list
        queryClient.invalidateQueries({
          queryKey: keyFactory.getAllEntityActionsRequiredQueryKey(),
        }),
        queryClient.invalidateQueries({
          queryKey: keyFactory.getDownloadListBaseQueryKey(),
        }),
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
        // including for entities and the download list
        queryClient.invalidateQueries({
          queryKey: keyFactory.getAllEntityActionsRequiredQueryKey(),
        }),
        queryClient.invalidateQueries({
          queryKey: keyFactory.getDownloadListBaseQueryKey(),
        }),
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
