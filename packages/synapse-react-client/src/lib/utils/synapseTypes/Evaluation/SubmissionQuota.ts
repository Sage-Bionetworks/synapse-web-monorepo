// https://rest-docs.synapse.org/rest/org/sagebionetworks/evaluation/model/SubmissionQuota.html

/** @deprecated use EvaluationRound instead */
export type SubmissionQuota = {
  firstRoundStart: string
  roundDurationMillis: number
  numberOfRounds: number
  submissionLimit: number
}
