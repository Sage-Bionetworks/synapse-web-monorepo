import SynapseClient from '@/synapse-client'
import { SynapseClientError, useSynapseContext } from '@/utils'
import {
  AccessCodeResponse,
  OAuthClientPublic,
  OAuthConsentGrantedResponse,
  OIDCAuthorizationRequest,
  OIDCAuthorizationRequestDescription,
} from '@sage-bionetworks/synapse-types'
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
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey:
      keyFactory.getHasCurrentUserAuthorizedOAuthClientQueryKey(request),
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
  const { accessToken, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation<
    AccessCodeResponse,
    SynapseClientError,
    OIDCAuthorizationRequest
  >({
    ...options,
    mutationFn: request =>
      SynapseClient.consentToOAuth2Request(request, accessToken),
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
