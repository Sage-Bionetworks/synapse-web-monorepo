import {
  ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  AccessRequirement,
  LOCK_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  ManagedACTAccessRequirement,
  SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  SelfSignAccessRequirement,
  TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
} from '@sage-bionetworks/synapse-types'

export const LOCK_ACCESS_REQUIREMENT_TEXT =
  'Access restricted pending review by Synapse Access and Compliance Team.'

export const getOldAccessRequirementInstructions = (ar: AccessRequirement) => {
  switch (ar.concreteType) {
    case MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE:
    case SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE:
      // uses wiki to store instructions
      return ''
    case TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE:
      return ar.termsOfUse
    case ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE:
      return ar.actContactInfo
    case LOCK_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE:
      return LOCK_ACCESS_REQUIREMENT_TEXT
  }
}

/**
 * Returns true iff the access requirement can apply restrictions based on
 * accessor qualities, such as certification or validation status
 */
export const hasAccessorRequirement = (
  ar: AccessRequirement,
): ar is SelfSignAccessRequirement | ManagedACTAccessRequirement => {
  return (
    ar.concreteType === SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE ||
    ar.concreteType == MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE
  )
}
