import {
  SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE,
  SelfSignAccessRequirement,
} from './SelfSignAccessRequirement'
import {
  TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE,
  TermsOfUseAccessRequirement,
} from './TermsOfUseAccessRequirement'

export type SELF_SIGN_ACCESS_REQUIREMENT_INTERFACE_CONCRETE_TYPE =
  | SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE
  | TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE

// This interface is not needed, but exists on synapse, keeping to maintain
// parity
export type SelfSignAccessRequirementInterface =
  | SelfSignAccessRequirement
  | TermsOfUseAccessRequirement
