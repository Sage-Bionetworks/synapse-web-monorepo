import {
  FEATURE_FLAG_CONFIG,
  FeatureFlagEnum,
  getFeatureFlagDisplayName,
  NON_TEST_FEATURE_FLAGS,
} from './FeatureFlags'

describe('FEATURE_FLAG_CONFIG', () => {
  it('only uses the TEST scope for test-only flags', () => {
    Object.values(FeatureFlagEnum).forEach(flag => {
      const { scopes } = FEATURE_FLAG_CONFIG[flag]
      if (flag.startsWith('TEST_ONLY')) {
        expect(scopes.every(scope => scope === 'TEST')).toBe(true)
      } else {
        expect(scopes).not.toContain('TEST')
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

describe('NON_TEST_FEATURE_FLAGS', () => {
  it('only includes flags some menu can show', () => {
    NON_TEST_FEATURE_FLAGS.forEach(flag => {
      expect(FEATURE_FLAG_CONFIG[flag].scopes.length).toBeGreaterThan(0)
    })
  })

  it('includes every non-test flag some menu can show', () => {
    Object.values(FeatureFlagEnum)
      .filter(
        flag =>
          !flag.startsWith('TEST_ONLY') &&
          FEATURE_FLAG_CONFIG[flag].scopes.length > 0,
      )
      .forEach(flag => {
        expect(NON_TEST_FEATURE_FLAGS).toContain(flag)
      })
  })
})
