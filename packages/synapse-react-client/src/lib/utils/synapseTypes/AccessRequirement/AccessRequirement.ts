import { SelfSignAccessRequirementInterface } from './SelfSignAccessRequirementInterface'
import { ACTAccessRequirementInterface } from './ACTAccessRequirementInterface'
import { LockAccessRequirement } from './LockAccessRequirement'

export type AccessRequirement =
  | LockAccessRequirement
  | SelfSignAccessRequirementInterface
  | ACTAccessRequirementInterface
