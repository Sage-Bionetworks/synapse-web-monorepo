import {
  EXPERIMENTAL_MODE_COOKIE,
  SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE,
} from '@/utils/SynapseConstants'
import { act, renderHook, waitFor } from '@testing-library/react'
import Cookies from 'js-cookie'
import { FeatureFlagEnum } from './FeatureFlags'
import { useExperimentalFeaturePreferences } from './useExperimentalFeaturePreferences'

const FLAG = FeatureFlagEnum.TEST_ONLY
const OTHER_FLAG = FeatureFlagEnum.TEST_ONLY_2
const NOT_SHOWN_FLAG = FeatureFlagEnum.TEST_ONLY_ACT_MEMBERS

async function renderPreferences() {
  const { result } = renderHook(() => useExperimentalFeaturePreferences())
  // The hook reads the cookies after mounting, so prerendered pages don't hydrate with a mismatch
  await waitFor(() =>
    expect(result.current.enabledFeatures).toEqual(
      getSavedFeaturesFromCookie(),
    ),
  )
  return result
}

function getSavedFeaturesFromCookie() {
  return Cookies.get(SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE)?.split(',') ?? []
}

describe('useExperimentalFeaturePreferences', () => {
  afterEach(() => {
    Cookies.remove(EXPERIMENTAL_MODE_COOKIE, { path: '/' })
    Cookies.remove(SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE, { path: '/' })
  })

  it('updates the returned preferences after saving', async () => {
    const result = await renderPreferences()

    act(() => result.current.savePreferences(true, [FLAG], [FLAG, OTHER_FLAG]))

    expect(result.current.isEnableAllOn).toBe(true)
    expect(result.current.enabledFeatures).toEqual([FLAG])
  })

  it('removes the Enable all cookie when Enable all is off', async () => {
    Cookies.set(EXPERIMENTAL_MODE_COOKIE, 'true')
    const result = await renderPreferences()

    act(() => result.current.savePreferences(false, [], [FLAG]))

    expect(Cookies.get(EXPERIMENTAL_MODE_COOKIE)).toBeUndefined()
  })

  it('saves only the flags the user turned on', async () => {
    const result = await renderPreferences()

    act(() => result.current.savePreferences(false, [FLAG], [FLAG, OTHER_FLAG]))

    expect(Cookies.get(SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE)).toBe(FLAG)
  })

  it('keeps saved flags that this menu did not show', async () => {
    Cookies.set(SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE, NOT_SHOWN_FLAG)
    const result = await renderPreferences()

    act(() => result.current.savePreferences(false, [FLAG], [FLAG, OTHER_FLAG]))

    expect(Cookies.get(SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE)).toBe(
      `${NOT_SHOWN_FLAG},${FLAG}`,
    )
  })

  it('does not save a flag twice', async () => {
    Cookies.set(SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE, FLAG)
    const result = await renderPreferences()

    act(() => result.current.savePreferences(false, [FLAG], [OTHER_FLAG]))

    expect(Cookies.get(SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE)).toBe(FLAG)
  })

  it('removes the features cookie when no flags are enabled', async () => {
    Cookies.set(SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE, FLAG)
    const result = await renderPreferences()

    act(() => result.current.savePreferences(false, [], [FLAG]))

    expect(Cookies.get(SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE)).toBeUndefined()
  })
})
