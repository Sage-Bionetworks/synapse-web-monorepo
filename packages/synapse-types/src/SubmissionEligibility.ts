// https://rest-docs.synapse.org/rest/org/sagebionetworks/evaluation/model/SubmissionEligibility.html
export type SubmissionEligibility = {
  isEligible: boolean
  isRegistered: boolean
  isQuotaFilled: boolean
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/evaluation/model/MemberSubmissionEligibility.html
export type MemberSubmissionEligibility = SubmissionEligibility & {
  principalId: number
  hasConflictingSubmission: boolean
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/evaluation/model/TeamSubmissionEligibility.html
export type TeamSubmissionEligibility = {
  teamId: string
  evaluationId: string
  teamEligibility: SubmissionEligibility
  membersEligibility: MemberSubmissionEligibility[]
  eligibilityStateHash: number
}
