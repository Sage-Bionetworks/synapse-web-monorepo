// https://rest-docs.synapse.org/rest/GET/entity/id/evaluation.html

import ACCESS_TYPE from '../ACCESS_TYPE'

export type GetEvaluationParameters = {
  accessType?: ACCESS_TYPE
  activeOnly?: boolean
  evaluationIds?: string[]
  nextPageToken?: string | null
}
