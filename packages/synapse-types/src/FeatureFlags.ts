export type FeatureFlags = Record<FeatureFlagEnum, boolean>

export enum FeatureFlagEnum {
  DESCRIPTION_FIELD = 'Description field',
  PROVENANCE_V2_VISUALIZATION = 'Provenance v2 visualization',
}
