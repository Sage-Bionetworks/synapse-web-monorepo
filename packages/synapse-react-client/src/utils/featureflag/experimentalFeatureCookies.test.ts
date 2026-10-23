import {
  EXPERIMENTAL_MODE_COOKIE,
  SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE,
} from '@/utils/SynapseConstants'
import Cookies from 'js-cookie'
import {
  getEnabledExperimentalFeatures,
  saveExperimentalFeaturePreferences,
} from './experimentalFeatureCookies'
import { FeatureFlagEnum } from './FeatureFlags'

const NEW_TASK = FeatureFlagEnum.CURATION_TASK_PAGE_SHOW_NEW_TASK_BUTTON
const ACT = FeatureFlagEnum.ACT_DASHBOARD_FORM_TEMPLATES
const OTHER_MENU_FLAG = FeatureFlagEnum.TEST_ONLY

describe('experimentalFeatureCookies', () => {
  afterEach(() => {
    Cookies.remove(EXPERIMENTAL_MODE_COOKIE, { path: '/' })
    Cookies.remove(SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE, { path: '/' })
  })

  describe('getEnabledExperimentalFeatures', () => {
    it('returns an empty list when the cookie is not set', () => {
      expect(getEnabledExperimentalFeatures()).toEqual([])
    })

    it('returns the flags stored in the cookie', () => {
      Cookies.set(SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE, `${NEW_TASK},${ACT}`)

      expect(getEnabledExperimentalFeatures()).toEqual([NEW_TASK, ACT])
    })

    it('ignores keys that are not feature flags', () => {
      Cookies.set(
        SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE,
        `${NEW_TASK},NOT_A_FLAG`,
      )

      expect(getEnabledExperimentalFeatures()).toEqual([NEW_TASK])
    })
  })

  describe('saveExperimentalFeaturePreferences', () => {
    it('sets the experimental mode cookie when enable all is on', () => {
      saveExperimentalFeaturePreferences(true, [], [NEW_TASK, ACT])

      expect(Cookies.get(EXPERIMENTAL_MODE_COOKIE)).toBe('true')
    })

    it('removes the experimental mode cookie when enable all is off', () => {
      Cookies.set(EXPERIMENTAL_MODE_COOKIE, 'true')

      saveExperimentalFeaturePreferences(false, [], [NEW_TASK, ACT])

      expect(Cookies.get(EXPERIMENTAL_MODE_COOKIE)).toBeUndefined()
    })

    it('keeps flags that were not shown in this menu', () => {
      Cookies.set(SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE, OTHER_MENU_FLAG)

      saveExperimentalFeaturePreferences(false, [NEW_TASK], [NEW_TASK, ACT])

      expect(getEnabledExperimentalFeatures()).toEqual([
        OTHER_MENU_FLAG,
        NEW_TASK,
      ])
    })

    it('does not save a flag twice', () => {
      Cookies.set(SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE, NEW_TASK)

      saveExperimentalFeaturePreferences(false, [NEW_TASK], [ACT])

      expect(getEnabledExperimentalFeatures()).toEqual([NEW_TASK])
    })

    it('removes the cookie when no flags are enabled', () => {
      Cookies.set(SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE, NEW_TASK)

      saveExperimentalFeaturePreferences(false, [], [NEW_TASK, ACT])

      expect(Cookies.get(SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE)).toBeUndefined()
    })
  })
})
