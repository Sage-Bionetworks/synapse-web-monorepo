import {
  instanceOfOAuthIdentityProvider,
  OAuthIdentityProviderProviderEnum,
  Realm,
} from '@sage-bionetworks/synapse-client'

/**
 * Check if a realm has the ARCUS_BIOSCIENCES identity provider
 */
export function hasArcusProvider(realm?: Realm): boolean {
  if (!realm?.identityProvider) return false
  return realm.identityProvider.some(
    (provider: any) =>
      instanceOfOAuthIdentityProvider(provider) &&
      provider.provider === OAuthIdentityProviderProviderEnum.ARCUS_BIOSCIENCES,
  )
}
