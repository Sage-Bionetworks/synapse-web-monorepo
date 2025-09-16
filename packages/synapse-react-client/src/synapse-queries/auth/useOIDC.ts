import SynapseClient from '@/synapse-client'
import { SynapseClientError, useSynapseContext } from '@/utils'
import {
  type OAuthAuthorizationResponse,
  OAuthConsentGrantedResponse,
  OIDCAuthorizationRequest,
  OIDCAuthorizationRequestDescription,
} from '@sage-bionetworks/synapse-client'
import { OAuthClientPublic } from '@sage-bionetworks/synapse-types'
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'

export function useGetOAuth2RequestDescription(
  request: OIDCAuthorizationRequest,
  options?: Partial<
    UseQueryOptions<OIDCAuthorizationRequestDescription, SynapseClientError>
  >,
) {
  const { synapseClient } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: ['useGetOAuth2RequestDescription', request],
    queryFn: () =>
      synapseClient.openIDConnectServicesClient.postAuthV1Oauth2Description({
        oIDCAuthorizationRequest: request,
      }),
  })
}

export function useGetOAuth2Client(
  clientId: string,
  options?: Partial<UseQueryOptions<OAuthClientPublic, SynapseClientError>>,
) {
  const { keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getOAuthClientQueryKey(clientId),
    queryFn: () => SynapseClient.getOAuth2Client(clientId),
  })
}

export function useGetHasUserAuthorizedOAuthClient(
  request: OIDCAuthorizationRequest,
  options?: Partial<
    UseQueryOptions<OAuthConsentGrantedResponse, SynapseClientError>
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey:
      keyFactory.getHasCurrentUserAuthorizedOAuthClientQueryKey(request),
    queryFn: () =>
      synapseClient.openIDConnectServicesClient.postAuthV1Oauth2Consentcheck({
        oIDCAuthorizationRequest: request,
      }),
  })
}

export function useConsentToOAuth2Request(
  options?: Partial<
    UseMutationOptions<
      OAuthAuthorizationResponse,
      SynapseClientError,
      OIDCAuthorizationRequest
    >
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation<
    OAuthAuthorizationResponse,
    SynapseClientError,
    OIDCAuthorizationRequest
  >({
    ...options,
    mutationFn: request =>
      synapseClient.openIDConnectServicesClient.postAuthV1Oauth2Consent({
        oIDCAuthorizationRequest: request,
      }),
    onSuccess: async (data, request, ctx) => {
      await queryClient.invalidateQueries({
        queryKey:
          keyFactory.getHasCurrentUserAuthorizedOAuthClientQueryKey(request),
      })
      if (options?.onSuccess) {
        options.onSuccess(data, request, ctx)
      }
    },
  })
}
