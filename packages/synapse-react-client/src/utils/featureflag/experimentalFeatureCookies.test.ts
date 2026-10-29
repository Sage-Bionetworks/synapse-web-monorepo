import { SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE } from '@/utils/SynapseConstants'
import Cookies from 'js-cookie'
import { getEnabledExperimentalFeatures } from './experimentalFeatureCookies'
import { FeatureFlagEnum } from './FeatureFlags'

const FLAG = FeatureFlagEnum.TEST_ONLY
const OTHER_FLAG = FeatureFlagEnum.TEST_ONLY_2

describe('experimentalFeatureCookies', () => {
  afterEach(() => {
    Cookies.remove(SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE, { path: '/' })
  })

  describe('getEnabledExperimentalFeatures', () => {
    it('returns an empty list when the cookie is not set', () => {
      expect(getEnabledExperimentalFeatures()).toEqual([])
    })

    it('returns the flags stored in the cookie', () => {
      Cookies.set(SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE, `${FLAG},${OTHER_FLAG}`)

      expect(getEnabledExperimentalFeatures()).toEqual([FLAG, OTHER_FLAG])
    })

    it('ignores keys that are not feature flags', () => {
      Cookies.set(SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE, `${FLAG},NOT_A_FLAG`)

      expect(getEnabledExperimentalFeatures()).toEqual([FLAG])
    })
  })
})
