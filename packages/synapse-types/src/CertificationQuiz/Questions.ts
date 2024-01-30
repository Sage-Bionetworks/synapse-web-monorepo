import { WikiPageKey } from '../WikiPageKey'

export const MULTICHOICE_RESPONSE_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.quiz.MultichoiceResponse'
export type MULTICHOICE_RESPONSE_CONCRETE_TYPE =
  typeof MULTICHOICE_RESPONSE_CONCRETE_TYPE_VALUE

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/quiz/Question.html
export interface Question {
  questionIndex: number // an index unique in the Quiz, used to refer to this question
  prompt: string // the user-readable prompt for this question
  reference: WikiPageKey // Reference to a WikiPage
  docLink: string // Link to the document that contains information for background reading related to the question.
  helpText: string // A short text that provides a snippet of help to answer the question.
  concreteType?: string
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/quiz/QuestionResponse.html
export interface QuestionResponse {
  questionIndex: number // an index unique in the Quiz, used to refer to this question
  concreteType: string
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/quiz/MultichoiceResponse.html
export interface MultichoiceResponse extends QuestionResponse {
  answerIndex: number[]
  concreteType: MULTICHOICE_RESPONSE_CONCRETE_TYPE
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/quiz/MultichoiceQuestion.html
export interface MultichoiceQuestion extends Question {
  exclusive: boolean // If true then only one response is correct
  answers: MultichoiceAnswer[] // The possible answers for this question
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/quiz/MultichoiceAnswer.html
export interface MultichoiceAnswer {
  answerIndex: number // An index unique within the scope the multiple choice question
  prompt: string // The user-readable prompt or label for this answer
  isCorrect: boolean // True if and only if this is a correct response
}
