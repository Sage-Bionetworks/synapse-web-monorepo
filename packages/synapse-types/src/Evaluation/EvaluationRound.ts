import { EvaluationRoundLimit } from './EvaluationRoundLimit'
//https://rest-docs.synapse.org/rest/org/sagebionetworks/evaluation/model/EvaluationRound.html
export type EvaluationRound = {
  id?: string
  etag?: string
  evaluationId: string // id of the Evaluation to which this round belongs
  roundStart: string // datetime string
  roundEnd: string //datetime string
  limits?: EvaluationRoundLimit[]
}
