import {
  ACTAccessRequirement,
  ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE,
} from './ACTAccessRequirement'
import {
  JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE,
  JsonSchemaAccessRequirement,
} from './JsonSchemaAccessRequirement'
import {
  MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE,
  ManagedACTAccessRequirement,
} from './ManagedACTAccessRequirement'

export type ACT_ACCESS_REQUIREMENT_INTERFACE_CONCRETE_TYPE =
  | ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE
  | JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE
  | MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE

export type ACTAccessRequirementInterface =
  | ACTAccessRequirement
  | JsonSchemaAccessRequirement
  | ManagedACTAccessRequirement
