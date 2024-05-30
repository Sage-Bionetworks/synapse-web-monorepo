export type FeatureFlags = Record<FeatureFlagEnum, boolean>

export enum FeatureFlagEnum {
  DESCRIPTION_FIELD = 'Description field',
  CHANGE_PASSWORD_2FA_CHECK = 'Change password 2FA check',
  VIRTUALTABLE_SUPPORT = 'VirtualTable support',
  JSONSCHEMA_VALIDATION_STATUS = 'JSON Schema validation status',
  JSONSCHEMA_ANNOTATION_VALIDATION_STATUS = 'JSON Schema-aware annotation editor',
}
