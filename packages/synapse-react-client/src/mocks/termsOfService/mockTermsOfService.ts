import {
  TermsOfServiceInfo,
  TermsOfServiceState,
  TermsOfServiceStatus,
} from '@sage-bionetworks/synapse-types'

export const termsOfServiceInfo: TermsOfServiceInfo = {
  termsOfServiceUrl: 'https://gh.com/tos.md',
  latestTermsOfServiceVersion: '1.0.0',
  currentRequirement: {
    requirementDate: '2024-11-01T00:00:00Z',
    minimumTermsOfServiceVersion: '0.0.0',
  },
}

export const termsOfServiceNewUserStatus: TermsOfServiceStatus = {
  userId: '12345',
  lastAgreementDate: null,
  lastAgreementVersion: null,
  userCurrentTermsOfServiceState: TermsOfServiceState.MUST_AGREE_NOW,
}

export const termsOfServiceUpdatedMustAgreeNowStatus: TermsOfServiceStatus = {
  userId: '12345',
  lastAgreementDate: '2024-09-15T12:34:56Z',
  lastAgreementVersion: '2.0.0',
  userCurrentTermsOfServiceState: TermsOfServiceState.MUST_AGREE_NOW,
}

export const termsOfServiceUpdatedMustAgreeSoonStatus: TermsOfServiceStatus = {
  userId: '12345',
  lastAgreementDate: '2024-09-15T12:34:56Z',
  lastAgreementVersion: '2.0.0',
  userCurrentTermsOfServiceState: TermsOfServiceState.MUST_AGREE_SOON,
}

export const termsOfServiceUpToDateStatus: TermsOfServiceStatus = {
  userId: '12345',
  lastAgreementDate: '2024-09-15T12:34:56Z',
  lastAgreementVersion: '2.0.0',
  userCurrentTermsOfServiceState: TermsOfServiceState.UP_TO_DATE,
}
