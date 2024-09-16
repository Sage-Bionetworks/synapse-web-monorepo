export type FeatureFlags = Record<FeatureFlagEnum, boolean>

export enum FeatureFlagEnum {
  // If enabled, allow viewing & editing the 'description' string field on entities
  DESCRIPTION_FIELD = 'DESCRIPTION_FIELD',

  // Allow creation of VirtualTable entities
  VIRTUALTABLE_SUPPORT = 'VIRTUALTABLE_SUPPORT',

  // If enabled, display the metadata validation status of entities with a bound JSON Schema
  JSONSCHEMA_VALIDATION_STATUS = 'JSONSCHEMA_VALIDATION_STATUS',

  // If enabled, use the re-implemented ACL Editor for entities
  REACT_ENTITY_ACL_EDITOR = 'REACT_ENTITY_ACL_EDITOR',

  // If enabled, show the chatbot entrypoint from the new Synapse Homepage
  HOMEPAGE_CHATBOT = 'HOMEPAGE_CHATBOT',
}
