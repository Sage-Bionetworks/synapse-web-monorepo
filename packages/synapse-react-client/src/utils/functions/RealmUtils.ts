import {
  instanceOfOAuthIdentityProvider,
  OAuthIdentityProviderProviderEnum,
  Realm,
} from '@sage-bionetworks/synapse-client'

/**
 * Check if a realm has the ARCUS_BIOSCIENCES identity provider
 */
export function hasArcusProvider(realm?: Realm): boolean {
  return hasProvider(realm, OAuthIdentityProviderProviderEnum.ARCUS_BIOSCIENCES)
}

/**
 * Check if a realm has the SAGE_BIONETWORKS identity provider
 */
export function hasSageBionetworksProvider(realm?: Realm): boolean {
  return hasProvider(realm, OAuthIdentityProviderProviderEnum.SAGE_BIONETWORKS)
}

function hasProvider(
  realm?: Realm,
  providerEnum?: OAuthIdentityProviderProviderEnum,
): boolean {
  if (!realm?.identityProvider) return false
  return realm.identityProvider.some(
    (provider: any) =>
      instanceOfOAuthIdentityProvider(provider) &&
      provider.provider === providerEnum,
  )
}
