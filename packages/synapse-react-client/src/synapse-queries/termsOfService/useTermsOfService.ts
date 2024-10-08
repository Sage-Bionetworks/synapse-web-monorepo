/*
 * Hooks to access Chat Services in Synapse
 */
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError, useSynapseContext } from '../../utils'
import {
  AccessToken,
  TermsOfServiceInfo,
  TermsOfServiceStatus,
} from '@sage-bionetworks/synapse-types'

export function useTermsOfServiceInfo(
  options?: Partial<UseQueryOptions<TermsOfServiceInfo, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getTermsOfServiceInfoKey(),

    queryFn: () => SynapseClient.getTermsOfServiceInfo(accessToken),
  })
}

export function useTermsOfServiceStatus(
  options?: Partial<UseQueryOptions<TermsOfServiceStatus, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getTermsOfServiceStatus(),

    queryFn: () => SynapseClient.getTermsOfServiceStatus(accessToken),
  })
}

export function useSignTermsOfService(
  options?: Partial<
    UseMutationOptions<unknown, SynapseClientError, AccessToken>
  >,
) {
  const { keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation<unknown, SynapseClientError, AccessToken>({
    ...options,
    mutationFn: (accessToken: AccessToken) =>
      SynapseClient.signSynapseTermsOfUse(accessToken),
    onSuccess: async (resp, variables, ctx) => {
      queryClient.invalidateQueries({
        queryKey: keyFactory.getTermsOfServiceStatus(),
      })
      if (options?.onSuccess) {
        await options.onSuccess(resp, variables, ctx)
      }
    },
  })
}
