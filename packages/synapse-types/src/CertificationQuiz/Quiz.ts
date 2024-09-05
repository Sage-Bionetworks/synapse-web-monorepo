import { MultichoiceQuestion, Question, QuestionResponse } from './Questions'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/quiz/Quiz.html
export interface Quiz {
  id: number // the ID of this Quiz
  header: string // Content preceding the series of questions
  questions: MultichoiceQuestion[] // The questions in the Quiz
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/quiz/QuizResponse.html
export interface QuizResponse {
  id?: number // The unique ID for this response
  quizId: number // The ID of the Quiz to which this is a response
  createdBy?: string // The unique identifier of the one creating the response
  createdOn?: string // When this response was created
  questionResponses: QuestionResponse[] // The list of responses to the questions in the Quiz
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/quiz/ResponseCorrectness.html
export interface ResponseCorrectness {
  question: Question // a single question in a Quiz
  response: QuestionResponse // The response to a question
  isCorrect: boolean // 	Is the response correct?
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/quiz/PassingRecord.html
export interface PassingRecord {
  userId: string // The principal id of the user
  quizId: number // The ID of the Quiz to which this is a response
  responseId: number // The id of the user's response
  score: number // The score the user received on the test
  passed: boolean // Whether the user passed the given test
  passedOn: string // Date/time when the user passed the test (omitted if the user has not passed)
  corrections?: ResponseCorrectness[] // For each response, whether it was correct
  revokedOn?: string // Date/time when the passing record was revoked (omitted if the record was not revoked)
}
