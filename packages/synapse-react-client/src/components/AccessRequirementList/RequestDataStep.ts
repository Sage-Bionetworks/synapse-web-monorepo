import {
  AccessRequirement,
  JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  JsonSchemaAccessRequirement,
  MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  ManagedACTAccessRequirement,
} from '@sage-bionetworks/synapse-types'

/** The access requirement types that a user can request access to through the request wizard */
export type RequestableAccessRequirement =
  | ManagedACTAccessRequirement
  | JsonSchemaAccessRequirement

export function isRequestableAccessRequirement(
  accessRequirement: AccessRequirement,
): accessRequirement is RequestableAccessRequirement {
  return (
    accessRequirement.concreteType ===
      MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE ||
    accessRequirement.concreteType ===
      JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE
  )
}

/**
 * Represents a distinct screen in the wizard used to request access to a {@link RequestableAccessRequirement}
 */
export enum RequestDataStep {
  SHOW_ALL_ARS,
  UPDATE_RESEARCH_PROJECT,
  UPDATE_ACCESSORS_AND_FILES,
  PROMPT_CANCEL,
  PROMPT_LOGIN,
  COMPLETE,
  REVIEW_DUC,
  EDUC_PREVIEW,
  MANUAL_UPLOAD_DUC,
  SIGNATURE_STATUS,
  /** The request wizard of a JsonSchemaAccessRequirement, which owns its own sequence of steps */
  SCHEMA_DRIVEN_REQUEST,
}

// Only ARs with an eDUC template continue to these steps; others submit from the last step before them.
// MANUAL_UPLOAD_DUC is the alternative to sending the eDUC for signature from EDUC_PREVIEW.
const EDUC_STEPS = [
  RequestDataStep.REVIEW_DUC,
  RequestDataStep.EDUC_PREVIEW,
  RequestDataStep.MANUAL_UPLOAD_DUC,
] as const

const REQUEST_STEP_ORDER: Record<
  RequestableAccessRequirement['concreteType'],
  readonly RequestDataStep[]
> = {
  [MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE]: [
    RequestDataStep.UPDATE_RESEARCH_PROJECT,
    RequestDataStep.UPDATE_ACCESSORS_AND_FILES,
    ...EDUC_STEPS,
  ],
  [JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE]: [
    RequestDataStep.SCHEMA_DRIVEN_REQUEST,
    ...EDUC_STEPS,
  ],
}

/** The first step of the wizard in which a user requests access to the given access requirement */
export function getFirstRequestStep(
  accessRequirement: Pick<RequestableAccessRequirement, 'concreteType'>,
): RequestDataStep {
  return REQUEST_STEP_ORDER[accessRequirement.concreteType][0]
}

/**
 * The step that follows `currentStep` in the request wizard of the given access requirement.
 * @throws if `currentStep` is the last step of, or not a step of, the access requirement's request wizard
 */
export function getNextRequestStep(
  accessRequirement: Pick<RequestableAccessRequirement, 'concreteType'>,
  currentStep: RequestDataStep,
): RequestDataStep {
  return getAdjacentRequestStep(accessRequirement, currentStep, 1)
}

/**
 * The step that precedes `currentStep` in the request wizard of the given access requirement.
 * @throws if `currentStep` is the first step of, or not a step of, the access requirement's request wizard
 */
export function getPreviousRequestStep(
  accessRequirement: Pick<RequestableAccessRequirement, 'concreteType'>,
  currentStep: RequestDataStep,
): RequestDataStep {
  return getAdjacentRequestStep(accessRequirement, currentStep, -1)
}

function getAdjacentRequestStep(
  accessRequirement: Pick<RequestableAccessRequirement, 'concreteType'>,
  currentStep: RequestDataStep,
  offset: 1 | -1,
): RequestDataStep {
  const stepOrder = REQUEST_STEP_ORDER[accessRequirement.concreteType]
  const currentIndex = stepOrder.indexOf(currentStep)
  const adjacentStep =
    currentIndex === -1 ? undefined : stepOrder[currentIndex + offset]
  if (adjacentStep === undefined) {
    throw new Error(
      `There is no ${offset === 1 ? 'next' : 'previous'} step for ${RequestDataStep[currentStep]} in the request wizard of ${accessRequirement.concreteType}`,
    )
  }
  return adjacentStep
}
