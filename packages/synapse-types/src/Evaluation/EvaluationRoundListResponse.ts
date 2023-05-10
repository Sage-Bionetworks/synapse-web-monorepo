import { EvaluationRound } from './EvaluationRound'

export type EvaluationRoundListResponse = {
  page: EvaluationRound[]
  nextPageToken?: string
}
