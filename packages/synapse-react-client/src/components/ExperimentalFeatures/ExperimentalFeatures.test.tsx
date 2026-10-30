import { getFeatureFlagsOverride } from '@/mocks/msw/handlers/featureFlagHandlers'
import { server } from '@/mocks/msw/server'
import { mockUserBundle } from '@/mocks/user/mock_user_profile'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
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
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Cookies from 'js-cookie'
import { http, HttpResponse } from 'msw'
import ExperimentalFeatures from './ExperimentalFeatures'
import styles from './ExperimentalFeaturesButton.module.scss'

const FLAG = FeatureFlagEnum.TEST_ONLY_2
const ACT_ONLY_FLAG = FeatureFlagEnum.TEST_ONLY_ACT_MEMBERS
const FLAG_NAME = getFeatureFlagDisplayName(FLAG)
const ACT_ONLY_FLAG_NAME = getFeatureFlagDisplayName(ACT_ONLY_FLAG)

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
  render(
    <ExperimentalFeatures
      scopes={['TEST']}
      onPreferencesSaved={onPreferencesSaved}
    />,
    {
      wrapper: createWrapper(context),
    },
  )
  return { onPreferencesSaved }
}

async function openDialog() {
  await userEvent.click(
    screen.getByRole('button', { name: /Experimental Features/ }),
  )
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

  it('hides ACT_ONLY_FLAG-only flags from users who are not ACT_ONLY_FLAG members', async () => {
    mockServerFlags()
    mockIsACTMember(false)
    renderComponent()

    await openDialog()

    expect(await screen.findByText(FLAG_NAME)).toBeInTheDocument()
    expect(screen.queryByText(ACT_ONLY_FLAG_NAME)).not.toBeInTheDocument()
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

  it('shows the switch as on when Enable all is on, even with no features listed', async () => {
    mockServerFlags({ [FLAG]: false, [ACT_ONLY_FLAG]: false })
    Cookies.set(EXPERIMENTAL_MODE_COOKIE, 'true')
    renderComponent()

    expect(
      await screen.findByRole('button', { name: /Experimental Features/ }),
    ).toHaveClass(styles.active)
  })
})
