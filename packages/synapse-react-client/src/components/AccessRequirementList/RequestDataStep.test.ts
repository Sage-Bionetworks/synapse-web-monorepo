import {
  JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
} from '@sage-bionetworks/synapse-types'
import {
  getFirstRequestStep,
  getNextRequestStep,
  getPreviousRequestStep,
  RequestableAccessRequirement,
  RequestDataStep,
} from './RequestDataStep'

const expectedStepOrder: Record<
  RequestableAccessRequirement['concreteType'],
  RequestDataStep[]
> = {
  [MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE]: [
    RequestDataStep.UPDATE_RESEARCH_PROJECT,
    RequestDataStep.UPDATE_ACCESSORS_AND_FILES,
    RequestDataStep.REVIEW_DUC,
    RequestDataStep.EDUC_PREVIEW,
    RequestDataStep.MANUAL_UPLOAD_DUC,
  ],
  [JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE]: [
    RequestDataStep.SCHEMA_DRIVEN_REQUEST,
    RequestDataStep.REVIEW_DUC,
    RequestDataStep.EDUC_PREVIEW,
    RequestDataStep.MANUAL_UPLOAD_DUC,
  ],
}

describe.each(
  Object.entries(expectedStepOrder) as [
    RequestableAccessRequirement['concreteType'],
    RequestDataStep[],
  ][],
)('the request wizard of a %s', (concreteType, stepOrder) => {
  const accessRequirement = { concreteType }

  it('starts at the first step of its own request flow', () => {
    expect(getFirstRequestStep(accessRequirement)).toBe(stepOrder[0])
  })

  it('moves forward and back through its steps in order', () => {
    const visitedForward = [stepOrder[0]]
    while (visitedForward.length < stepOrder.length) {
      visitedForward.push(
        getNextRequestStep(accessRequirement, visitedForward.at(-1)!),
      )
    }
    expect(visitedForward).toEqual(stepOrder)

    const visitedBackward = [stepOrder.at(-1)!]
    while (visitedBackward.length < stepOrder.length) {
      visitedBackward.push(
        getPreviousRequestStep(accessRequirement, visitedBackward.at(-1)!),
      )
    }
    expect(visitedBackward).toEqual([...stepOrder].reverse())
  })

  it('has no step before the first or after the last', () => {
    expect(() =>
      getPreviousRequestStep(accessRequirement, stepOrder[0]),
    ).toThrow()
    expect(() =>
      getNextRequestStep(accessRequirement, stepOrder.at(-1)!),
    ).toThrow()
  })

  it('throws for a step outside its request flow', () => {
    const stepsOutsideFlow = Object.values(RequestDataStep).filter(
      (step): step is RequestDataStep =>
        typeof step === 'number' && !stepOrder.includes(step),
    )
    for (const step of stepsOutsideFlow) {
      expect(() => getNextRequestStep(accessRequirement, step)).toThrow()
      expect(() => getPreviousRequestStep(accessRequirement, step)).toThrow()
    }
  })
})
