import { ObjectType } from '../src/lib/utils/synapseTypes'
import {
  Quiz,
  PassingRecord,
} from '../src/lib/utils/synapseTypes/CertificationQuiz/Quiz'

export const mockQuiz: Quiz = {
  id: 123,
  header: 'Mock Certification Quiz',
  questions: [
    {
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
    },
    {
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
    },
  ],
}

export const mockPassingRecord: PassingRecord = {
  userId: 'abc123',
  quizId: 1,
  responseId: 123,
  score: 2,
  passed: false,
  passedOn: new Date().toDateString(),
  corrections: [],
}
