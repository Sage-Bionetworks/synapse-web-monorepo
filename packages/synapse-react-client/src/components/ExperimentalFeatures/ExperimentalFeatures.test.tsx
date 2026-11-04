import { getFeatureFlagsOverride } from '@/mocks/msw/handlers/featureFlagHandlers'
import { server } from '@/mocks/msw/server'
import { mockUserBundle } from '@/mocks/user/mock_user_profile'
import { createWrapperAndQueryClient } from '@/testutils/TestingLibraryUtils'
import { SynapseContextType } from '@/utils/context/SynapseContext'
import { USER_BUNDLE } from '@/utils/APIConstants'
import { getEnabledExperimentalFeatures } from '@/utils/featureflag/experimentalFeatureCookies'
import {
  FeatureFlagEnum,
  FeatureFlags,
  getFeatureFlagDisplayName,
} from '@/utils/featureflag/FeatureFlags'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import {
  EXPERIMENTAL_MODE_COOKIE,
  SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE,
} from '@/utils/SynapseConstants'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Cookies from 'js-cookie'
import { delay, http, HttpResponse } from 'msw'
import ExperimentalFeatures from './ExperimentalFeatures'
import styles from './ExperimentalFeaturesButton.module.scss'

const FLAG = FeatureFlagEnum.TEST_ONLY_2
const ACT_ONLY_FLAG = FeatureFlagEnum.TEST_ONLY_ACT_MEMBERS
const FLAG_NAME = getFeatureFlagDisplayName(FLAG)
const ACT_ONLY_FLAG_NAME = getFeatureFlagDisplayName(ACT_ONLY_FLAG)
const FEATURE_FLAGS_URL = `${getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT)}/Portal/featureflags`

function mockServerFlags(overrides: Partial<FeatureFlags> = {}) {
  server.use(
    getFeatureFlagsOverride({
      portalOrigin: getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT),
      overrides: {
        [FLAG]: undefined,
        [ACT_ONLY_FLAG]: undefined,
        ...overrides,
      },
    }),
  )
}

function mockIsACTMember(isACTMember: boolean) {
  server.use(
    http.get(
      `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${USER_BUNDLE}`,
      () => HttpResponse.json({ ...mockUserBundle, isACTMember }),
    ),
  )
}

function renderComponent(
  context: Partial<SynapseContextType> = {},
  onPreferencesSaved = vi.fn(),
) {
  const { wrapperFn, queryClient } = createWrapperAndQueryClient(context)
  render(
    <ExperimentalFeatures
      scopes={['TEST']}
      onPreferencesSaved={onPreferencesSaved}
    />,
    {
      wrapper: wrapperFn,
    },
  )
  return { onPreferencesSaved, queryClient }
}

async function openDialog() {
  const button = screen.getByRole('button', { name: /Experimental Features/ })
  await waitFor(() => expect(button).toBeEnabled())
  await userEvent.click(button)
}

describe('ExperimentalFeatures', () => {
  afterEach(() => {
    Cookies.remove(EXPERIMENTAL_MODE_COOKIE, { path: '/' })
    Cookies.remove(SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE, { path: '/' })
  })

  it('hides flags the server pins', async () => {
    mockServerFlags({ [FLAG]: false })
    mockIsACTMember(true)
    renderComponent()

    await openDialog()

    expect(await screen.findByText(ACT_ONLY_FLAG_NAME)).toBeInTheDocument()
    expect(screen.queryByText(FLAG_NAME)).not.toBeInTheDocument()
  })

  it('hides ACT-only flags from users who are not ACT members', async () => {
    mockServerFlags()
    mockIsACTMember(false)
    renderComponent()

    await openDialog()

    expect(await screen.findByText(FLAG_NAME)).toBeInTheDocument()
    expect(screen.queryByText(ACT_ONLY_FLAG_NAME)).not.toBeInTheDocument()
  })

  it("lists only flags in the menu's scopes", async () => {
    const UNSCOPED_FLAG = FeatureFlagEnum.TEST_ONLY
    mockServerFlags({ [UNSCOPED_FLAG]: undefined })
    renderComponent()

    await openDialog()

    expect(await screen.findByText(FLAG_NAME)).toBeInTheDocument()
    expect(
      screen.queryByText(getFeatureFlagDisplayName(UNSCOPED_FLAG)),
    ).not.toBeInTheDocument()
  })

  it("lists a flag that matches any one of the menu's scopes", async () => {
    mockServerFlags()
    render(
      <ExperimentalFeatures
        scopes={['ACCOUNTS', 'TEST']}
        onPreferencesSaved={vi.fn()}
      />,
      { wrapper: createWrapperAndQueryClient().wrapperFn },
    )

    await openDialog()

    expect(await screen.findByText(FLAG_NAME)).toBeInTheDocument()
  })

  it('saves the choices and calls onPreferencesSaved when Done is clicked', async () => {
    mockServerFlags()
    const { onPreferencesSaved } = renderComponent()

    await openDialog()
    await userEvent.click(await screen.findByText(FLAG_NAME))
    await userEvent.click(screen.getByRole('button', { name: 'Done' }))

    expect(getEnabledExperimentalFeatures()).toEqual([FLAG])
    expect(onPreferencesSaved).toHaveBeenCalled()
  })

  it('saves nothing when Cancel is clicked', async () => {
    mockServerFlags()
    const { onPreferencesSaved } = renderComponent()

    await openDialog()
    await userEvent.click(await screen.findByText(FLAG_NAME))
    await userEvent.click(screen.getByRole('button', { name: 'Cancel' }))

    expect(getEnabledExperimentalFeatures()).toEqual([])
    expect(onPreferencesSaved).not.toHaveBeenCalled()
  })

  it('shows the button as on when Enable all is on, even with no features listed', async () => {
    mockServerFlags({ [FLAG]: false, [ACT_ONLY_FLAG]: false })
    Cookies.set(EXPERIMENTAL_MODE_COOKIE, 'true')
    renderComponent()

    expect(
      await screen.findByRole('button', { name: /Experimental Features/ }),
    ).toHaveClass(styles.active)
  })

  it('counts opted-in features, leaving out flags the server pins', async () => {
    mockServerFlags({ [FLAG]: true })
    mockIsACTMember(true)
    Cookies.set(
      SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE,
      `${FLAG},${ACT_ONLY_FLAG}`,
    )
    const { queryClient } = renderComponent()
    await waitFor(() => expect(queryClient.isFetching()).toBe(0))

    expect(
      screen.getByRole('button', { name: 'Experimental Features (1 enabled)' }),
    ).toBeInTheDocument()
  })

  it('counts every listed feature and shows as active when Enable all is on', async () => {
    mockServerFlags()
    mockIsACTMember(true)
    Cookies.set(EXPERIMENTAL_MODE_COOKIE, 'true')
    const { queryClient } = renderComponent()
    await waitFor(() => expect(queryClient.isFetching()).toBe(0))

    expect(
      screen.getByRole('button', { name: 'Experimental Features (2 enabled)' }),
    ).toHaveClass(styles.active)
  })

  it('lists and counts nothing when the server flags fail to load', async () => {
    server.use(
      http.get(FEATURE_FLAGS_URL, () =>
        HttpResponse.json({ reason: 'error' }, { status: 403 }),
      ),
    )
    Cookies.set(SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE, FLAG)
    const { queryClient } = renderComponent()
    await waitFor(() => expect(queryClient.isFetching()).toBe(0))

    expect(
      screen.getByRole('button', { name: 'Experimental Features (0 enabled)' }),
    ).toBeInTheDocument()
  })

  it('disables the switch until the flags load', async () => {
    mockServerFlags()
    // Holds the response briefly, then falls through to the handler above
    server.use(
      http.get(FEATURE_FLAGS_URL, async () => {
        await delay(100)
      }),
    )
    renderComponent()
    const button = screen.getByRole('button', { name: /Experimental Features/ })

    expect(button).toBeDisabled()
    await waitFor(() => expect(button).toBeEnabled())
  })

  it('turns Enable all on without opening the dialog when no features are listed', async () => {
    mockServerFlags({ [FLAG]: false, [ACT_ONLY_FLAG]: false })
    Cookies.set(SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE, FLAG)
    const { onPreferencesSaved, queryClient } = renderComponent()
    await waitFor(() => expect(queryClient.isFetching()).toBe(0))

    await userEvent.click(
      screen.getByRole('button', { name: /Experimental Features/ }),
    )

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(Cookies.get(EXPERIMENTAL_MODE_COOKIE)).toBe('true')
    expect(getEnabledExperimentalFeatures()).toEqual([FLAG])
    expect(onPreferencesSaved).toHaveBeenCalled()
  })

  it('turns Enable all off without opening the dialog when no features are listed', async () => {
    mockServerFlags({ [FLAG]: false, [ACT_ONLY_FLAG]: false })
    Cookies.set(EXPERIMENTAL_MODE_COOKIE, 'true')
    const { onPreferencesSaved, queryClient } = renderComponent()
    await waitFor(() => expect(queryClient.isFetching()).toBe(0))

    await userEvent.click(
      screen.getByRole('button', { name: /Experimental Features/ }),
    )

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(Cookies.get(EXPERIMENTAL_MODE_COOKIE)).toBeUndefined()
    expect(onPreferencesSaved).toHaveBeenCalled()
  })

  it('disables the switch after it toggles Enable all so it cannot flip again before the reload', async () => {
    mockServerFlags({ [FLAG]: false, [ACT_ONLY_FLAG]: false })
    const { queryClient } = renderComponent()
    await waitFor(() => expect(queryClient.isFetching()).toBe(0))
    const button = screen.getByRole('button', { name: /Experimental Features/ })

    await userEvent.click(button)

    expect(button).toBeDisabled()
  })
})
