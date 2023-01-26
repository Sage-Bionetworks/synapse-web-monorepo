import { EvaluationRound } from '../../../../../lib/utils/synapseTypes/Evaluation'
import {
  convertEvaluationRoundToInput,
  EvaluationRoundInput,
} from '../../../../../lib/containers/evaluation_queues/input_models/models'
import shortid from 'shortid'

describe('test conversion from EvaluaitonRound to EvaluationRoundInput', () => {
  let evaluationRound!: EvaluationRound
  let expectedInput!: EvaluationRoundInput

  const fakeShortId = 'Q8DBYmVW1'
  let spyOnShortIdGenerate!: jest.SpyInstance

  beforeEach(() => {
    evaluationRound = {
      id: '999',
      etag: '1234',
      evaluationId: '123',
      roundEnd: '2020-10-1T01:14:00.000Z',
      roundStart: '2020-10-31T01:14:00.000Z',
      limits: [
        { limitType: 'MONTHLY', maximumSubmissions: 12 },
        { limitType: 'DAILY', maximumSubmissions: 42 },
        { limitType: 'TOTAL', maximumSubmissions: 67 },
      ],
    }

    expectedInput = {
      etag: '1234',
      evaluationId: '123',
      id: '999',
      otherLimits: [
        { type: 'MONTHLY', maxSubmissionString: '12' },
        { type: 'DAILY', maxSubmissionString: '42' },
      ],
      reactListKey: fakeShortId,
      roundEnd: '2020-10-1T01:14:00.000Z',
      roundStart: '2020-10-31T01:14:00.000Z',
      totalSubmissionLimit: '67',
    }

    spyOnShortIdGenerate = jest.spyOn(shortid, 'generate')
    spyOnShortIdGenerate.mockReturnValue(fakeShortId)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('general case', () => {
    const result = convertEvaluationRoundToInput(evaluationRound)
    expect(result).toEqual(expectedInput)
    expect(spyOnShortIdGenerate).toBeCalled()
  })

  test('reuse old reactListKey', () => {
    const oldReactListKey = 'some old key'

    const result = convertEvaluationRoundToInput(
      evaluationRound,
      oldReactListKey,
    )

    //the expected reactListKey should now be the old key
    expectedInput = { ...expectedInput, reactListKey: oldReactListKey }

    expect(result).toEqual(expectedInput)
    expect(spyOnShortIdGenerate).not.toBeCalled()
  })

  test('no total limit', () => {
    // TOTAL limit does not exist
    evaluationRound.limits = [
      { limitType: 'MONTHLY', maximumSubmissions: 12 },
      { limitType: 'DAILY', maximumSubmissions: 42 },
    ]

    const result = convertEvaluationRoundToInput(evaluationRound)

    expectedInput = { ...expectedInput, totalSubmissionLimit: '' }

    expect(result).toEqual(expectedInput)
    expect(spyOnShortIdGenerate).toBeCalled()
  })

  test('only total limit', () => {
    // no other limts exist
    evaluationRound.limits = [{ limitType: 'TOTAL', maximumSubmissions: 67 }]

    const result = convertEvaluationRoundToInput(evaluationRound)

    expectedInput = { ...expectedInput, otherLimits: [] }

    expect(result).toEqual(expectedInput)
    expect(spyOnShortIdGenerate).toBeCalled()
  })

  test('limits key does not exist', () => {
    // no other limits exist
    delete evaluationRound.limits

    const result = convertEvaluationRoundToInput(evaluationRound)

    expectedInput = {
      ...expectedInput,
      otherLimits: [],
      totalSubmissionLimit: '',
    }

    expect(result).toEqual(expectedInput)
    expect(spyOnShortIdGenerate).toBeCalled()
  })

  test('limits are undefined', () => {
    // no other limits exist
    evaluationRound.limits = undefined

    const result = convertEvaluationRoundToInput(evaluationRound)

    expectedInput = {
      ...expectedInput,
      otherLimits: [],
      totalSubmissionLimit: '',
    }

    expect(result).toEqual(expectedInput)
    expect(spyOnShortIdGenerate).toBeCalled()
  })
})
