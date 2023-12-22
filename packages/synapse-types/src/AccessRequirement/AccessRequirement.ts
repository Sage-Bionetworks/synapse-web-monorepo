import {
  ACT_ACCESS_REQUIREMENT_INTERFACE_CONCRETE_TYPE,
  ACTAccessRequirementInterface,
} from './ACTAccessRequirementInterface'
import {
  LOCK_ACCESS_REQUIREMENT_CONCRETE_TYPE,
  LockAccessRequirement,
} from './LockAccessRequirement'
import {
  SELF_SIGN_ACCESS_REQUIREMENT_INTERFACE_CONCRETE_TYPE,
  SelfSignAccessRequirementInterface,
} from './SelfSignAccessRequirementInterface'

export type ACCESS_REQUIREMENT_CONCRETE_TYPE =
  | LOCK_ACCESS_REQUIREMENT_CONCRETE_TYPE
  | SELF_SIGN_ACCESS_REQUIREMENT_INTERFACE_CONCRETE_TYPE
  | ACT_ACCESS_REQUIREMENT_INTERFACE_CONCRETE_TYPE

export type AccessRequirement =
  | LockAccessRequirement
  | SelfSignAccessRequirementInterface
  | ACTAccessRequirementInterface
