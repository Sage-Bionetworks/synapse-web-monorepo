import { ACTAccessRequirement } from './ACTAccessRequirement'
import { ManagedACTAccessRequirement } from './ManagedACTAccessRequirement'

export type ACTAccessRequirementInterface =
  | ACTAccessRequirement
  | ManagedACTAccessRequirement
