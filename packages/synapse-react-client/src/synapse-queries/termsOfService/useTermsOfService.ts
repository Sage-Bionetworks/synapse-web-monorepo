/*
 * Hooks to access Chat Services in Synapse
 */
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError, useSynapseContext } from '../../utils'
import {
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
