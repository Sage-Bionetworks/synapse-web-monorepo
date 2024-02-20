import { Evaluation } from '@sage-bionetworks/synapse-types'
import { times } from 'lodash-es'
import { generateEvaluation } from '../faker/generateEvaluation'

export const MOCK_EVALUATION_ID = '9614712'
export const MOCK_EVALUATION_ETAG = 'a2b871cb-faa4-471a-8c23-b917c77fecb2'
export const MOCK_EVALUATION_NAME = 'My mock evaluation queue name'
export const MOCK_EVALUATION_DESCRIPTION = 'Description for mock eval queue'
export const MOCK_EVALUATION_OWNER_ID = '1131050'
export const MOCK_EVALUATION_CREATED_ON = '2021-03-02T22:16:14.552Z'
export const MOCK_EVALUATION_CONTENT_SOURCE = 'syn5585645'
export const MOCK_EVALUATION_SUBMISSION_INSTRUCTIONS =
  'Mock submission instructions'
export const MOCK_EVALUATION_RECEIPT_MESSAGE = 'Mock thanks for submitting'

export const mockEvaluationQueue: Evaluation = {
  id: MOCK_EVALUATION_ID,
  etag: MOCK_EVALUATION_ETAG,
  name: MOCK_EVALUATION_NAME,
  description: MOCK_EVALUATION_DESCRIPTION,
  ownerId: MOCK_EVALUATION_OWNER_ID,
  createdOn: MOCK_EVALUATION_CREATED_ON,
  contentSource: MOCK_EVALUATION_CONTENT_SOURCE,
  submissionInstructionsMessage: MOCK_EVALUATION_SUBMISSION_INSTRUCTIONS,
  submissionReceiptMessage: MOCK_EVALUATION_RECEIPT_MESSAGE,
}

export const mockEvaluations: Evaluation[] = [mockEvaluationQueue]

export const generatedEvaulations: Evaluation[] = times(10, () =>
  generateEvaluation(),
)
