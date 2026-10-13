import {
  AccessRequirement,
  JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  JsonSchemaAccessRequirement,
  MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  ManagedACTAccessRequirement,
} from '@sage-bionetworks/synapse-types'

/**
 * The access requirement types that a user requests access to in Synapse, and that ACT reviews
 * and configures with the shared accessor, DUC, and expiration settings.
 */
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
