import { renderHook, waitFor } from '@testing-library/react'
import { FeatureFlagEnum } from '@sage-bionetworks/synapse-types'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { useGetFeatureFlag } from './useGetFeatureFlag'
import {
  clearFeatureFlagOverrides,
  setFeatureFlagOverride,
} from '@/utils/hooks/useFeatureFlagOverrides'
import { server } from '@/mocks/msw/server'
import { getFeatureFlagsOverride } from '@/mocks/msw/handlers/featureFlagHandlers'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'

describe('useGetFeatureFlag', () => {
  beforeAll(() => {
    server.listen()
  })
  afterEach(() => {
    server.restoreHandlers()
    clearFeatureFlagOverrides()
  })
  afterAll(() => {
    server.close()
  })

  const portalOrigin = getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT)

  it('Returns false when flag is disabled globally and no overrides', async () => {
    server.use(
      getFeatureFlagsOverride({
        portalOrigin,
        overrides: {
          [FeatureFlagEnum.DESCRIPTION_FIELD]: false,
        },
      }),
    )

    const { result } = renderHook(
      () => useGetFeatureFlag(FeatureFlagEnum.DESCRIPTION_FIELD),
      {
        wrapper: createWrapper(),
      },
    )

    await waitFor(() => expect(result.current).toBe(false))
  })

  it('Returns true when flag is globally enabled', async () => {
    server.use(
      getFeatureFlagsOverride({
        portalOrigin,
        overrides: {
          [FeatureFlagEnum.DESCRIPTION_FIELD]: true,
        },
      }),
    )

    const { result } = renderHook(
      () => useGetFeatureFlag(FeatureFlagEnum.DESCRIPTION_FIELD),
      {
        wrapper: createWrapper(),
      },
    )

    await waitFor(() => expect(result.current).toBe(true))
  })

  it('Returns true when user override is set, even if globally disabled', async () => {
    server.use(
      getFeatureFlagsOverride({
        portalOrigin,
        overrides: {
          [FeatureFlagEnum.DESCRIPTION_FIELD]: false,
        },
      }),
    )

    setFeatureFlagOverride(FeatureFlagEnum.DESCRIPTION_FIELD, true)

    const { result } = renderHook(
      () => useGetFeatureFlag(FeatureFlagEnum.DESCRIPTION_FIELD),
      {
        wrapper: createWrapper(),
      },
    )

    await waitFor(() => expect(result.current).toBe(true))
  })

  it('Returns true when globally enabled, ignoring user override', async () => {
    server.use(
      getFeatureFlagsOverride({
        portalOrigin,
        overrides: {
          [FeatureFlagEnum.DESCRIPTION_FIELD]: true,
        },
      }),
    )

    // Try to set user override to false - should be ignored
    setFeatureFlagOverride(FeatureFlagEnum.DESCRIPTION_FIELD, false)

    const { result } = renderHook(
      () => useGetFeatureFlag(FeatureFlagEnum.DESCRIPTION_FIELD),
      {
        wrapper: createWrapper(),
      },
    )

    await waitFor(() => expect(result.current).toBe(true))
  })

  it('Returns true when experimental mode is on, even if flag is disabled', async () => {
    server.use(
      getFeatureFlagsOverride({
        portalOrigin,
        overrides: {
          [FeatureFlagEnum.DESCRIPTION_FIELD]: false,
        },
      }),
    )

    const { result } = renderHook(
      () => useGetFeatureFlag(FeatureFlagEnum.DESCRIPTION_FIELD),
      {
        wrapper: createWrapper({ isInExperimentalMode: true }),
      },
    )

    await waitFor(() => expect(result.current).toBe(true))
  })

  it('User override takes precedence over experimental mode', async () => {
    server.use(
      getFeatureFlagsOverride({
        portalOrigin,
        overrides: {
          [FeatureFlagEnum.DESCRIPTION_FIELD]: false,
        },
      }),
    )

    // Set user override to explicitly true
    setFeatureFlagOverride(FeatureFlagEnum.DESCRIPTION_FIELD, true)

    const { result } = renderHook(
      () => useGetFeatureFlag(FeatureFlagEnum.DESCRIPTION_FIELD),
      {
        wrapper: createWrapper({ isInExperimentalMode: false }),
      },
    )

    await waitFor(() => expect(result.current).toBe(true))
  })
})
