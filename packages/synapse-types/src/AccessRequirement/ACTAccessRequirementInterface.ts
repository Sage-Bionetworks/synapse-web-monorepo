import {
  ACTAccessRequirement,
  ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE,
} from './ACTAccessRequirement'
import {
  MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE,
  ManagedACTAccessRequirement,
} from './ManagedACTAccessRequirement'

export type ACT_ACCESS_REQUIREMENT_INTERFACE_CONCRETE_TYPE =
  | ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE
  | MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE

export type ACTAccessRequirementInterface =
  | ACTAccessRequirement
  | ManagedACTAccessRequirement
