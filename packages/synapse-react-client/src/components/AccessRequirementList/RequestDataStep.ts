import {
  JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  JsonSchemaAccessRequirement,
  ManagedACTAccessRequirement,
} from '@sage-bionetworks/synapse-types'

/** The access requirement types that a user can request access to through the request wizard */
export type RequestableAccessRequirement =
  | ManagedACTAccessRequirement
  | JsonSchemaAccessRequirement

/**
 * Represents a distinct screen in the wizard used to apply to a ManagedACTAccessRequirement
 */
export enum RequestDataStep {
  SHOW_ALL_ARS = 0,
  UPDATE_RESEARCH_PROJECT = 1,
  UPDATE_ACCESSORS_AND_FILES = 2,
  PROMPT_CANCEL = 3,
  PROMPT_LOGIN = 4,
  COMPLETE = 5,
  REVIEW_DUC = 6,
  EDUC_PREVIEW = 7,
  MANUAL_UPLOAD_DUC = 8,
  SIGNATURE_STATUS = 9,
  /** The request wizard of a JsonSchemaAccessRequirement, which owns its own sequence of steps */
  SCHEMA_DRIVEN_REQUEST = 10,
}

/** The first step of the wizard in which a user requests access to the given access requirement */
export function getFirstRequestStep(
  accessRequirement: RequestableAccessRequirement,
): RequestDataStep {
  return accessRequirement.concreteType ===
    JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE
    ? RequestDataStep.SCHEMA_DRIVEN_REQUEST
    : RequestDataStep.UPDATE_RESEARCH_PROJECT
}
