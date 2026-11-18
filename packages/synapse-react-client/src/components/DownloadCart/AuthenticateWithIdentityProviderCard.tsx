import { getIdentityProviderAlternativesText } from '@/utils/functions/IdentityProviderNameUtils'
import { IdentityProviderName } from '@sage-bionetworks/synapse-client'
import { AccessRequirementActionCard } from './AccessRequirementActionCard'

export type AuthenticateWithIdentityProviderCardProps = {
  accessRequirementId: number
  /* The identity providers the access requirement accepts, as reported by the backend */
  identityProviders: IdentityProviderName[]
  count?: number
}

export function getAuthenticateWithIdentityProviderCardTitle(
  identityProviders: IdentityProviderName[],
) {
  if (identityProviders.length === 0) {
    return 'Requires Sign-in with an Accepted Identity Provider'
  }
  return `Requires Sign-in with ${getIdentityProviderAlternativesText(identityProviders)}`
}

export function AuthenticateWithIdentityProviderCard(
  props: AuthenticateWithIdentityProviderCardProps,
) {
  const { identityProviders, ...cardProps } = props
  return (
    <AccessRequirementActionCard
      {...cardProps}
      title={getAuthenticateWithIdentityProviderCardTitle(identityProviders)}
    />
  )
}
