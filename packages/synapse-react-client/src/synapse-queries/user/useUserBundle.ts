import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import {
  NotificationEmail,
  UserBundle,
  UserProfile,
} from '@sage-bionetworks/synapse-types'
import {
  USER_BUNDLE_MASK_IS_ACT_MEMBER,
  USER_BUNDLE_MASK_IS_AR_REVIEWER,
  USER_BUNDLE_MASK_IS_CERTIFIED,
  USER_BUNDLE_MASK_IS_VERIFIED,
  USER_BUNDLE_MASK_ORCID,
  USER_BUNDLE_MASK_USER_PROFILE,
  USER_BUNDLE_MASK_VERIFICATION_SUBMISSION,
} from '../../utils/SynapseConstants'
import {
  PrincipalAliasRequest,
  PrincipalAliasResponse,
} from '@sage-bionetworks/synapse-types'

export function useGetNotificationEmail(
  options?: Partial<UseQueryOptions<NotificationEmail, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getNotificationEmailQueryKey(),
    queryFn: () => SynapseClient.getNotificationEmail(accessToken),
  })
}

export function useGetCurrentUserProfile(
  options?: Partial<UseQueryOptions<UserProfile, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryKey = keyFactory.getCurrentUserProfileQueryKey()

  return useQuery({
    ...options,
    queryKey: queryKey,
    queryFn: () => SynapseClient.getUserProfile(accessToken),
  })
}

const ALL_USER_BUNDLE_FIELDS =
  USER_BUNDLE_MASK_USER_PROFILE |
  USER_BUNDLE_MASK_ORCID |
  USER_BUNDLE_MASK_VERIFICATION_SUBMISSION |
  USER_BUNDLE_MASK_IS_CERTIFIED |
  USER_BUNDLE_MASK_IS_VERIFIED |
  USER_BUNDLE_MASK_IS_ACT_MEMBER |
  USER_BUNDLE_MASK_IS_AR_REVIEWER

export function useGetUserBundle(
  userId: string,
  mask: number = ALL_USER_BUNDLE_FIELDS,
  options?: Partial<UseQueryOptions<UserBundle, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryKey = keyFactory.getUserBundleQueryKey(userId, mask)

  return useQuery({
    ...options,
    queryKey: queryKey,
    queryFn: () => SynapseClient.getUserBundle(userId, mask, accessToken),
  })
}

export function useGetCurrentUserBundle<TData = UserBundle>(
  mask: number = ALL_USER_BUNDLE_FIELDS,
  options?: Partial<UseQueryOptions<UserBundle, SynapseClientError, TData>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  const queryKey = keyFactory.getUserBundleQueryKey('current', mask)

  return useQuery({
    ...options,
    queryKey: queryKey,
    queryFn: () => SynapseClient.getMyUserBundle(mask, accessToken),
  })
}

export function useGetUserProfile(
  principalId: string,
  options?: Partial<UseQueryOptions<UserProfile, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryKey = keyFactory.getUserProfileQueryKey(principalId)
  // We store the profile in a session storage cache used by SWC
  const sessionStorageCacheKey = `${principalId}_USER_PROFILE`
  const cachedValue = sessionStorage.getItem(sessionStorageCacheKey)

  return useQuery({
    ...options,
    queryKey: queryKey,
    queryFn: async () => {
      const userProfile = await SynapseClient.getUserProfileById(
        principalId,
        accessToken,
      )
      // If the profile is re-fetched, save it to sessionStorage
      sessionStorage.setItem(
        sessionStorageCacheKey,
        JSON.stringify(userProfile),
      )
      return userProfile
    },
    // Use the sessionStorage cache to pre-populate profile data.
    placeholderData: cachedValue
      ? (JSON.parse(cachedValue) as UserProfile)
      : options?.placeholderData,
  })
}

export function useGetPrincipalIdForAlias(
  request: PrincipalAliasRequest,
  options?: Partial<
    UseQueryOptions<PrincipalAliasResponse['principalId'], SynapseClientError>
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  const queryKey = keyFactory.getPrincipalAliasQueryKey(request)

  return useQuery({
    ...options,
    queryKey: queryKey,
    queryFn: async () => {
      return (
        await SynapseClient.getPrincipalAliasRequest(accessToken, request)
      ).principalId
    },
  })
}

export function useIsCurrentUserACTMember() {
  return useGetCurrentUserBundle<boolean>(undefined, {
    select: data => data.isACTMember!,
  })
}
