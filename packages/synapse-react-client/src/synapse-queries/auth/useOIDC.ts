import {
  UseMutationOptions,
  useMutation,
  useQuery,
  UseQueryOptions,
  useQueryClient,
} from '@tanstack/react-query'
import { SynapseClientError, useSynapseContext } from '../../utils'
import SynapseClient from '../../synapse-client'
import {
  AccessCodeResponse,
  OAuthClientPublic,
  OAuthConsentGrantedResponse,
  OIDCAuthorizationRequest,
  OIDCAuthorizationRequestDescription,
} from '@sage-bionetworks/synapse-types'

export function useGetOAuth2RequestDescription(
  request: OIDCAuthorizationRequest,
  options?: Partial<
    UseQueryOptions<OIDCAuthorizationRequestDescription, SynapseClientError>
  >,
) {
  // const { keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: ['useGetOAuth2RequestDescription', request],
    queryFn: () => SynapseClient.getOAuth2RequestDescription(request),
  })
}

export function useGetOAuth2Client(
  clientId: string,
  options?: Partial<UseQueryOptions<OAuthClientPublic, SynapseClientError>>,
) {
  return useQuery({
    ...options,
    queryKey: ['useGetOAuth2Client', clientId],
    queryFn: () => SynapseClient.getOAuth2Client(clientId),
  })
}

export function useGetHasUserAuthorizedOAuthClient(
  request: OIDCAuthorizationRequest,
  options?: Partial<
    UseQueryOptions<OAuthConsentGrantedResponse, SynapseClientError>
  >,
) {
  const { accessToken } = useSynapseContext()
  return useQuery({
    queryKey: ['hasAuthorizedClient', request],
    queryFn: () =>
      SynapseClient.hasUserAuthorizedOAuthClient(request, accessToken!),
  })
}

export function useConsentToOAuth2Request(
  options?: Partial<
    UseMutationOptions<
      AccessCodeResponse,
      SynapseClientError,
      OIDCAuthorizationRequest
    >
  >,
) {
  // TODO: use keyfactory
  const { accessToken } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation<
    AccessCodeResponse,
    SynapseClientError,
    OIDCAuthorizationRequest
  >({
    ...options,
    mutationFn: request =>
      SynapseClient.consentToOAuth2Request(request, accessToken),
    onSuccess: async (data, vars, ctx) => {
      await queryClient.invalidateQueries({ queryKey: ['hasAuthorizedClient'] })
      if (options?.onSuccess) {
        options.onSuccess(data, vars, ctx)
      }
    },
  })
}
