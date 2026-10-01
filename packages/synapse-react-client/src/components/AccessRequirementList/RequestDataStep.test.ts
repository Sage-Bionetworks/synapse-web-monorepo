import {
  JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
} from '@sage-bionetworks/synapse-types'
import {
  getFirstRequestStep,
  RequestableAccessRequirement,
  RequestDataStep,
} from './RequestDataStep'

describe('getFirstRequestStep', () => {
  const expectedFirstStep: Record<
    RequestableAccessRequirement['concreteType'],
    RequestDataStep
  > = {
    [MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE]:
      RequestDataStep.UPDATE_RESEARCH_PROJECT,
    [JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE]:
      RequestDataStep.SCHEMA_DRIVEN_REQUEST,
  }

  it.each(Object.entries(expectedFirstStep))(
    'starts a %s at the step of its own request flow',
    (concreteType, expectedStep) => {
      expect(
        getFirstRequestStep({
          concreteType,
        } as RequestableAccessRequirement),
      ).toBe(expectedStep)
    },
  )
})
