import { getIdentityProviderDisplayName } from '@/utils/functions/IdentityProviderNameUtils'
import { IdentityProviderName } from '@sage-bionetworks/synapse-client'
import {
  LOGIN_METHOD_EMAIL,
  LOGIN_METHOD_OAUTH2_ARCUS,
  LOGIN_METHOD_OAUTH2_GOOGLE,
  LOGIN_METHOD_OAUTH2_NIH_RESEARCHER_AUTH_SERVICE,
  LOGIN_METHOD_OAUTH2_ORCID,
  LOGIN_METHOD_OAUTH2_SAGE_BIONETWORKS,
} from '@/utils/SynapseConstants'

export const LoginMethods = [
  LOGIN_METHOD_OAUTH2_ARCUS,
  LOGIN_METHOD_OAUTH2_GOOGLE,
  LOGIN_METHOD_OAUTH2_NIH_RESEARCHER_AUTH_SERVICE,
  LOGIN_METHOD_OAUTH2_ORCID,
  LOGIN_METHOD_EMAIL,
  LOGIN_METHOD_OAUTH2_SAGE_BIONETWORKS,
] as const
export type LoginMethod = (typeof LoginMethods)[number]

export function getLoginMethodFriendlyName(loginMethod: LoginMethod) {
  switch (loginMethod) {
    case LOGIN_METHOD_OAUTH2_ARCUS:
      return getIdentityProviderDisplayName(
        IdentityProviderName.ARCUS_BIOSCIENCES,
      )
    case LOGIN_METHOD_OAUTH2_GOOGLE:
      return getIdentityProviderDisplayName(
        IdentityProviderName.GOOGLE_OAUTH_2_0,
      )
    case LOGIN_METHOD_OAUTH2_NIH_RESEARCHER_AUTH_SERVICE:
      return getIdentityProviderDisplayName(
        IdentityProviderName.NIH_RESEARCHER_AUTH_SERVICE,
      )
    case LOGIN_METHOD_OAUTH2_ORCID:
      return getIdentityProviderDisplayName(IdentityProviderName.ORCID)
    case LOGIN_METHOD_EMAIL:
      return 'your email'
    case LOGIN_METHOD_OAUTH2_SAGE_BIONETWORKS:
      return getIdentityProviderDisplayName(
        IdentityProviderName.SAGE_BIONETWORKS,
      )
    default:
      return 'unknown login method'
  }
}
