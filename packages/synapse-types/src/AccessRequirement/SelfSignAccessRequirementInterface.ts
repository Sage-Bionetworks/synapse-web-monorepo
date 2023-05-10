import { TermsOfUseAccessRequirement } from './TermsOfUseAccessRequirement'
import { SelfSignAccessRequirement } from './SelfSignAccessRequirement'

// This interface is not needed, but exists on synapse, keeping to maintain
// parity
export type SelfSignAccessRequirementInterface =
  | SelfSignAccessRequirement
  | TermsOfUseAccessRequirement
