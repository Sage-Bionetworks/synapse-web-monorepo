import { getFeatureFlagsOverride } from '@/mocks/msw/handlers/featureFlagHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { FeatureFlagEnum } from '@/utils/featureflag/FeatureFlags'
import { renderHook, waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { useGetFeatureFlag } from './useGetFeatureFlag'

const PORTAL_ENDPOINT = getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT)

describe('useGetFeatureFlag', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  describe('when the flag value is true', () => {
    it('is enabled when not in experimental mode', async () => {
      server.use(
        getFeatureFlagsOverride({
          portalOrigin: PORTAL_ENDPOINT,
          overrides: { [FeatureFlagEnum.DESCRIPTION_FIELD]: true },
        }),
      )
      const { result } = renderHook(
        () => useGetFeatureFlag(FeatureFlagEnum.DESCRIPTION_FIELD),
        { wrapper: createWrapper({ isInExperimentalMode: false }) },
      )
      await waitFor(() => {
        expect(result.current).toBe(true)
      })
    })

    it('is enabled even when in experimental mode', async () => {
      server.use(
        getFeatureFlagsOverride({
          portalOrigin: PORTAL_ENDPOINT,
          overrides: { [FeatureFlagEnum.DESCRIPTION_FIELD]: true },
        }),
      )
      const { result } = renderHook(
        () => useGetFeatureFlag(FeatureFlagEnum.DESCRIPTION_FIELD),
        { wrapper: createWrapper({ isInExperimentalMode: true }) },
      )
      await waitFor(() => {
        expect(result.current).toBe(true)
      })
    })
  })

  describe('when the flag value is false', () => {
    it('is disabled when not in experimental mode', async () => {
      server.use(
        getFeatureFlagsOverride({
          portalOrigin: PORTAL_ENDPOINT,
          overrides: { [FeatureFlagEnum.DESCRIPTION_FIELD]: false },
        }),
      )
      const { result } = renderHook(
        () => useGetFeatureFlag(FeatureFlagEnum.DESCRIPTION_FIELD),
        { wrapper: createWrapper({ isInExperimentalMode: false }) },
      )
      await waitFor(() => {
        expect(result.current).toBe(false)
      })
    })

    it('is disabled even when in experimental mode', async () => {
      server.use(
        getFeatureFlagsOverride({
          portalOrigin: PORTAL_ENDPOINT,
          overrides: { [FeatureFlagEnum.DESCRIPTION_FIELD]: false },
        }),
      )
      const { result } = renderHook(
        () => useGetFeatureFlag(FeatureFlagEnum.DESCRIPTION_FIELD),
        { wrapper: createWrapper({ isInExperimentalMode: true }) },
      )
      await waitFor(() => {
        expect(result.current).toBe(false)
      })
    })
  })

  describe('when the flag value is null/undefined (not set by the server)', () => {
    function setupHandlerWithoutFlag() {
      // Return a flags object that omits DESCRIPTION_FIELD entirely
      server.use(
        http.get(`${PORTAL_ENDPOINT}/Portal/featureflags`, () => {
          return HttpResponse.json({}, { status: 200 })
        }),
      )
    }

    it('is disabled when not in experimental mode', async () => {
      setupHandlerWithoutFlag()
      const { result } = renderHook(
        () => useGetFeatureFlag(FeatureFlagEnum.DESCRIPTION_FIELD),
        { wrapper: createWrapper({ isInExperimentalMode: false }) },
      )
      await waitFor(() => {
        expect(result.current).toBe(false)
      })
    })

    it('is enabled when in experimental mode', async () => {
      setupHandlerWithoutFlag()
      const { result } = renderHook(
        () => useGetFeatureFlag(FeatureFlagEnum.DESCRIPTION_FIELD),
        { wrapper: createWrapper({ isInExperimentalMode: true }) },
      )
      await waitFor(() => {
        expect(result.current).toBe(true)
      })
    })
  })
})
