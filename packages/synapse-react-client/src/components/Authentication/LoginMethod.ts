import {
  LOGIN_METHOD_EMAIL,
  LOGIN_METHOD_OAUTH2_ARCUS,
  LOGIN_METHOD_OAUTH2_GOOGLE,
  LOGIN_METHOD_OAUTH2_ORCID,
  LOGIN_METHOD_OAUTH2_SAGE_BIONETWORKS,
} from '@/utils/SynapseConstants'

export const LoginMethods = [
  LOGIN_METHOD_OAUTH2_ARCUS,
  LOGIN_METHOD_OAUTH2_GOOGLE,
  LOGIN_METHOD_OAUTH2_ORCID,
  LOGIN_METHOD_EMAIL,
  LOGIN_METHOD_OAUTH2_SAGE_BIONETWORKS,
] as const
export type LoginMethod = (typeof LoginMethods)[number]

export function getLoginMethodFriendlyName(loginMethod: LoginMethod) {
  switch (loginMethod) {
    case LOGIN_METHOD_OAUTH2_ARCUS:
      return 'Arcus Biosciences'
    case LOGIN_METHOD_OAUTH2_GOOGLE:
      return 'Google'
    case LOGIN_METHOD_OAUTH2_ORCID:
      return 'ORCiD'
    case LOGIN_METHOD_EMAIL:
      return 'your email'
    case LOGIN_METHOD_OAUTH2_SAGE_BIONETWORKS:
      return 'Sage Bionetworks'
    default:
      return 'unknown login method'
  }
}
