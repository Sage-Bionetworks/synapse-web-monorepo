// TermsOfServiceInfo
export type TermsOfServiceInfo = {
  termsOfServiceUrl: string // The URL that can be used to fetch the latest ToS
  latestTermsOfServiceVersion: string // The semantic version of the latest ToS
  currentRequirement: TermsOfServiceRequirement // Information about the global ToS Synapse requirements
}

// TermsOfServiceRequirement
export type TermsOfServiceRequirement = {
  requirementDate: string // The date/time when the new ToS requirement will go into effect
  minimumTermsOfServiceVersion: string // The minimum semantic version of the ToS that all users must agree to
}

export type TermsOfServiceStatus = {
  userId: string // The ID of the user
  lastAgreementDate?: string | null // The date/time when the user last agreed to the ToS, or null if never agreed
  lastAgreementVersion?: string | null // The version of ToS the user last agreed to, or null if never agreed
  userCurrentTermsOfServiceState: TermsOfServiceState // Defines the user's current ToS state. Used to guide the UI in what the user needs to do with their ToS agreements.  This will always be provided.
}

export enum TermsOfServiceState {
  MUST_AGREE_NOW = 'MUST_AGREE_NOW',
  MUST_AGREE_SOON = 'MUST_AGREE_SOON',
  UP_TO_DATE = 'UP_TO_DATE',
}
