import { SubmissionQuota } from './SubmissionQuota'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/evaluation/model/Evaluation.html
export type Evaluation = {
  id?: string
  etag?: string
  name?: string
  description?: string
  ownerId?: string
  createdOn?: string
  contentSource?: string
  submissionInstructionsMessage?: string
  submissionReceiptMessage?: string
  /** @deprecated use REST APIs for EvaluationRound instead */
  quota?: SubmissionQuota
}
