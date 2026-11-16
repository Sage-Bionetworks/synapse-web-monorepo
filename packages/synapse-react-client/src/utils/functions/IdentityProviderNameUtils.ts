import { IdentityProviderName } from '@sage-bionetworks/synapse-client'

const IDENTITY_PROVIDER_DISPLAY_NAMES: Record<IdentityProviderName, string> = {
  [IdentityProviderName.SYNAPSE]: 'Synapse',
  [IdentityProviderName.GOOGLE_OAUTH_2_0]: 'Google',
  [IdentityProviderName.ORCID]: 'ORCiD',
  [IdentityProviderName.ARCUS_BIOSCIENCES]: 'Arcus Biosciences',
  [IdentityProviderName.SAGE_BIONETWORKS]: 'Sage Bionetworks (Realm)',
  [IdentityProviderName.NIH_RESEARCHER_AUTH_SERVICE]: 'Researcher Auth Service',
}

export const IDENTITY_PROVIDER_NAMES = Object.values(IdentityProviderName)

export function getIdentityProviderDisplayName(
  identityProvider: IdentityProviderName,
): string {
  return IDENTITY_PROVIDER_DISPLAY_NAMES[identityProvider]
}
