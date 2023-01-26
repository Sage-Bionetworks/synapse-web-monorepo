import {
  EvaluationRound,
  EvaluationRoundLimit,
  EvaluationRoundLimitType,
} from '../../../utils/synapseTypes/Evaluation'
import shortid from 'shortid'

export type EvaluationRoundLimitInput = {
  readonly type: EvaluationRoundLimitType
  readonly maxSubmissionString: string
}
export type EvaluationRoundInput = {
  // must be present
  evaluationId: string

  //used for React's "key" identifier when used inside a list.
  reactListKey: string

  //may not exist if newly crated
  id?: string
  etag?: string

  //may be empty string, but not undefined
  roundStart: string
  roundEnd: string
  totalSubmissionLimit: string

  //may be an empty list, but not undefined
  otherLimits: EvaluationRoundLimitInput[]
}

export const convertEvaluationRoundToInput = (
  evaluationRound: EvaluationRound,
  reactListKey?: string,
): EvaluationRoundInput => {
  return {
    reactListKey: reactListKey ?? shortid.generate(),
    evaluationId: evaluationRound.evaluationId,
    id: evaluationRound.id,
    etag: evaluationRound.etag,
    roundStart: evaluationRound.roundStart,
    roundEnd: evaluationRound.roundEnd,
    totalSubmissionLimit: extractTotalLimit(evaluationRound.limits),
    otherLimits: convertRoundLimitsToInput(evaluationRound.limits),
  }
}

const extractTotalLimit = (
  limits: EvaluationRoundLimit[] | undefined,
): string =>
  (limits || [])
    .filter(evaluationLimit => evaluationLimit.limitType === 'TOTAL')
    .reduce((ignorePrevValue, evaluationLimit) => {
      //after filtering there should exist at most one evaluationLimit
      return evaluationLimit.maximumSubmissions.toString()
    }, '')

const convertRoundLimitsToInput = (
  evaluationRoundLimits: EvaluationRoundLimit[] | undefined,
): EvaluationRoundLimitInput[] => {
  return (evaluationRoundLimits || [])
    .filter(evaluationLimit => evaluationLimit.limitType !== 'TOTAL')
    .reduce<EvaluationRoundLimitInput[]>((limitInputList, evaluationLimit) => {
      limitInputList.push({
        type: evaluationLimit.limitType,
        maxSubmissionString: evaluationLimit.maximumSubmissions.toString(),
      })
      //after filtering there should exist at most one evaluationLimit
      return limitInputList
    }, [])
}
