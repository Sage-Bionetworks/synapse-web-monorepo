import {
  MULTICHOICE_RESPONSE_CONCRETE_TYPE_VALUE,
  MultichoiceResponse,
} from '@sage-bionetworks/synapse-types'
import { ObjectType } from '@sage-bionetworks/synapse-types'
import { Quiz, PassingRecord } from '@sage-bionetworks/synapse-types'

const question1 = {
  questionIndex: 0,
  prompt: 'mock question 1',
  reference: {
    wikiPageId: '0',
    ownerObjectId: '0',
    ownerObjectType: 'ENTITY' as ObjectType,
  },
  docLink: 'mockDocLink',
  helpText: 'mock help text',
  exclusive: true,
  answers: [
    {
      answerIndex: 0,
      prompt: 'mockQuestion1AnswerIndex 0',
      isCorrect: true,
    },
    {
      answerIndex: 1,
      prompt: 'mockQuestion1AnswerIndex 1',
      isCorrect: false,
    },
  ],
}
const question2 = {
  questionIndex: 1,
  prompt: 'mock question 2',
  reference: {
    wikiPageId: '1',
    ownerObjectId: '1',
    ownerObjectType: 'ENTITY' as ObjectType,
  },
  docLink: 'mockDocLink',
  helpText: 'mock help text',
  exclusive: true,
  answers: [
    {
      answerIndex: 0,
      prompt: 'mockQuestion2AnswerIndex 0',
      isCorrect: true,
    },
    {
      answerIndex: 1,
      prompt: 'mockQuestion2AnswerIndex 1',
      isCorrect: false,
    },
  ],
}
export const mockQuiz: Quiz = {
  id: 123,
  header: 'Mock Certification Quiz',
  questions: [question1, question2],
}

const getResponse = (
  questionIndex: number,
  answerIndex: number,
): MultichoiceResponse => {
  return {
    concreteType: MULTICHOICE_RESPONSE_CONCRETE_TYPE_VALUE,
    questionIndex: questionIndex,
    answerIndex: [answerIndex],
  }
}

export const mockPassingRecordFailed: PassingRecord = {
  userId: 'abc123',
  quizId: 1,
  responseId: 123,
  score: 2,
  passed: false,
  passedOn: new Date().toDateString(),
  corrections: [
    {
      isCorrect: false,
      question: question1,
      response: getResponse(0, 1), //wrong
    },
    {
      isCorrect: false,
      question: question2,
      response: getResponse(0, 1), //wrong
    },
  ],
}
export const mockPassingRecordPassed: PassingRecord = {
  userId: 'abc123',
  quizId: 1,
  responseId: 123,
  score: 2,
  passed: true,
  passedOn: new Date().toDateString(),
  corrections: [
    {
      isCorrect: true,
      question: question1,
      response: getResponse(0, 0), //correct
    },
    {
      isCorrect: true,
      question: question2,
      response: getResponse(0, 0), //correct
    },
  ],
}
