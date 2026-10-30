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

  it('keeps test-only flags out of every real menu', () => {
    Object.values(FeatureFlagEnum).forEach(flag => {
      const isTestOnlyFlag = flag.startsWith('TEST_ONLY')
      const isInTestScope = FEATURE_FLAG_CONFIG[flag].scopes.includes('TEST')
      expect(isInTestScope).toBe(
        isTestOnlyFlag && FEATURE_FLAG_CONFIG[flag].scopes.length > 0,
      )
      if (isTestOnlyFlag) {
        expect(
          FEATURE_FLAG_CONFIG[flag].scopes.every(scope => scope === 'TEST'),
        ).toBe(true)
      }
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
