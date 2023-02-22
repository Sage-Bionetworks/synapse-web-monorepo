import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import {
  NotificationEmail,
  UserBundle,
  UserProfile,
} from '../../../synapseTypes'
import {
  USER_BUNDLE_MASK_IS_ACT_MEMBER,
  USER_BUNDLE_MASK_IS_AR_REVIEWER,
  USER_BUNDLE_MASK_IS_CERTIFIED,
  USER_BUNDLE_MASK_IS_VERIFIED,
  USER_BUNDLE_MASK_ORCID,
  USER_BUNDLE_MASK_USER_PROFILE,
  USER_BUNDLE_MASK_VERIFICATION_SUBMISSION,
} from '../../../SynapseConstants'
import {
  PrincipalAliasRequest,
  PrincipalAliasResponse,
} from '../../../synapseTypes/Principal/PrincipalServices'

export function useGetNotificationEmail(
  options?: UseQueryOptions<NotificationEmail, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<NotificationEmail, SynapseClientError>(
    keyFactory.getNotificationEmailQueryKey(),
    () => SynapseClient.getNotificationEmail(accessToken),
    options,
  )
}

export function useGetCurrentUserProfile(
  options?: UseQueryOptions<UserProfile, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryKey = keyFactory.getCurrentUserProfileQueryKey()

  return useQuery<UserProfile, SynapseClientError>(
    queryKey,
    () => SynapseClient.getUserProfile(accessToken),
    options,
  )
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
  options?: UseQueryOptions<UserBundle, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryKey = keyFactory.getUserBundleQueryKey(userId, mask)

  return useQuery<UserBundle, SynapseClientError>(
    queryKey,
    () => SynapseClient.getUserBundle(userId, mask, accessToken),
    options,
  )
}

export function useGetCurrentUserBundle<TData = UserBundle>(
  mask: number = ALL_USER_BUNDLE_FIELDS,
  options?: UseQueryOptions<UserBundle, SynapseClientError, TData>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  const queryKey = keyFactory.getUserBundleQueryKey('current', mask)

  return useQuery<UserBundle, SynapseClientError, TData>(
    queryKey,
    () => SynapseClient.getMyUserBundle(mask, accessToken),
    options,
  )
}

export function useGetUserProfile(
  principalId: string,
  options?: UseQueryOptions<UserProfile, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryKey = keyFactory.getUserProfileQueryKey(principalId)
  // We store the profile in a session storage cache used by SWC
  const sessionStorageCacheKey = `${principalId}_USER_PROFILE`
  const cachedValue = sessionStorage.getItem(sessionStorageCacheKey)

  return useQuery<UserProfile, SynapseClientError>(
    queryKey,
    () => SynapseClient.getUserProfileById(accessToken, principalId),
    {
      ...options,

      // Use the sessionStorage cache to pre-populate profile data.
      initialData: cachedValue
        ? (JSON.parse(cachedValue) as UserProfile)
        : undefined,

      // If the profile is re-fetched, save it to sessionStorage
      onSuccess: profile => {
        sessionStorage.setItem(sessionStorageCacheKey, JSON.stringify(profile))
      },
    },
  )
}

export function useGetPrincipalIdForAlias(
  request: PrincipalAliasRequest,
  options?: UseQueryOptions<
    PrincipalAliasResponse['principalId'],
    SynapseClientError
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  const queryKey = keyFactory.getPrincipalAliasQueryKey(request)

  return useQuery<PrincipalAliasResponse['principalId'], SynapseClientError>(
    queryKey,
    async () => {
      return (
        await SynapseClient.getPrincipalAliasRequest(accessToken, request)
      ).principalId
    },
    options,
  )
}

export function useIsCurrentUserACTMember() {
  return useGetCurrentUserBundle<boolean>(undefined, {
    select: data => data.isACTMember!,
  })
}
