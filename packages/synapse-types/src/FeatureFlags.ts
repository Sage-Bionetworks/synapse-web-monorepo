export type FeatureFlags = Record<FeatureFlagEnum, boolean>

export enum FeatureFlagEnum {
  DESCRIPTION_FIELD = 'DESCRIPTION_FIELD',
  VIRTUALTABLE_SUPPORT = 'VIRTUALTABLE_SUPPORT',
  JSONSCHEMA_VALIDATION_STATUS = 'JSONSCHEMA_VALIDATION_STATUS',
}
