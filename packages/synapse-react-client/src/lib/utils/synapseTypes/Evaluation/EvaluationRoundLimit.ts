//https://rest-docs.synapse.org/rest/org/sagebionetworks/evaluation/model/EvaluationRoundLimit.html
export type EvaluationRoundLimitType = 'TOTAL' | 'DAILY' | 'WEEKLY' | 'MONTHLY'

export type EvaluationRoundLimit = {
  limitType: EvaluationRoundLimitType
  maximumSubmissions: number // integer
}
