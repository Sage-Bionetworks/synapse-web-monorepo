// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/auth/OAuthIdentityProvider.html

export type OAuthProvider =
  | 'GOOGLE_OAUTH_2_0'
  | 'ORCID'
  | 'ARCUS_BIOSCIENCES'
  | 'SAGE_BIONETWORKS'
  | 'NIH_RESEARCHER_AUTH_SERVICE'

export type OAuthIdentityProvider = {
  concreteType: 'org.sagebionetworks.repo.model.auth.OAuthIdentityProvider'
  provider?: OAuthProvider
}

export type SynapseIdentityProvider = {
  concreteType: 'org.sagebionetworks.repo.model.auth.SynapseIdentityProvider'
}

export type IdentityProvider = OAuthIdentityProvider | SynapseIdentityProvider
