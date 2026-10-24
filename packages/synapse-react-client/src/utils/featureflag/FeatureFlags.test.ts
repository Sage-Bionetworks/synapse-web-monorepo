import {
  FEATURE_FLAG_CONFIG,
  FeatureFlagEnum,
  getFeatureFlagDisplayName,
} from './FeatureFlags'

describe('FEATURE_FLAG_CONFIG', () => {
  it('declares scopes for every feature flag', () => {
    Object.values(FeatureFlagEnum).forEach(flag => {
      expect(Array.isArray(FEATURE_FLAG_CONFIG[flag].scopes)).toBe(true)
    })
  })
})

describe('getFeatureFlagDisplayName', () => {
  it('uses the displayName override when one is set', () => {
    const flagWithOverride = Object.values(FeatureFlagEnum).find(
      flag => FEATURE_FLAG_CONFIG[flag].displayName,
    )!

    expect(getFeatureFlagDisplayName(flagWithOverride)).toBe(
      FEATURE_FLAG_CONFIG[flagWithOverride].displayName,
    )
  })

  it('derives the name from the flag key when there is no override', () => {
    expect(getFeatureFlagDisplayName(FeatureFlagEnum.TEST_ONLY)).toBe(
      'Test Only',
    )
  })
})
