import { getFeatureFlagsOverride } from '@/mocks/msw/handlers/featureFlagHandlers'
import { server } from '@/mocks/msw/server'
import { mockUserBundle } from '@/mocks/user/mock_user_profile'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseContextType } from '@/utils/context/SynapseContext'
import { USER_BUNDLE } from '@/utils/APIConstants'
import { getEnabledExperimentalFeatures } from '@/utils/featureflag/experimentalFeatureCookies'
import { FeatureFlagEnum, FeatureFlags } from '@/utils/featureflag/FeatureFlags'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE } from '@/utils/SynapseConstants'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Cookies from 'js-cookie'
import { http, HttpResponse } from 'msw'
import ExperimentalFeatures from './ExperimentalFeatures'
import styles from './ExperimentalFeaturesButton.module.scss'

const NEW_TASK = FeatureFlagEnum.CURATION_TASK_PAGE_SHOW_NEW_TASK_BUTTON
const ACT = FeatureFlagEnum.ACT_DASHBOARD_FORM_TEMPLATES
const NEW_TASK_NAME = 'New Tasks Button'
const ACT_NAME = 'ACT Dashboard Form Templates'

function mockServerFlags(overrides: Partial<FeatureFlags> = {}) {
  server.use(
    getFeatureFlagsOverride({
      portalOrigin: getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT),
      overrides: { [NEW_TASK]: undefined, [ACT]: undefined, ...overrides },
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
  onSave = vi.fn(),
) {
  render(<ExperimentalFeatures scope="SYNAPSE" onSave={onSave} />, {
    wrapper: createWrapper(context),
  })
  return { onSave }
}

async function openDialog() {
  await userEvent.click(
    screen.getByRole('button', { name: /Experimental Features/ }),
  )
}

describe('ExperimentalFeatures', () => {
  afterEach(() => {
    Cookies.remove(SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE, { path: '/' })
  })

  it('hides flags the server pins', async () => {
    mockServerFlags({ [NEW_TASK]: false })
    mockIsACTMember(true)
    renderComponent()

    await openDialog()

    expect(await screen.findByText(ACT_NAME)).toBeInTheDocument()
    expect(screen.queryByText(NEW_TASK_NAME)).not.toBeInTheDocument()
  })

  it('hides ACT-only flags from users who are not ACT members', async () => {
    mockServerFlags()
    mockIsACTMember(false)
    renderComponent()

    await openDialog()

    expect(await screen.findByText(NEW_TASK_NAME)).toBeInTheDocument()
    expect(screen.queryByText(ACT_NAME)).not.toBeInTheDocument()
  })

  it('saves the choices and calls onSave when Done is clicked', async () => {
    mockServerFlags()
    const { onSave } = renderComponent()

    await openDialog()
    await userEvent.click(await screen.findByText(NEW_TASK_NAME))
    await userEvent.click(screen.getByRole('button', { name: 'Done' }))

    expect(getEnabledExperimentalFeatures()).toEqual([NEW_TASK])
    expect(onSave).toHaveBeenCalled()
  })

  it('saves nothing when Cancel is clicked', async () => {
    mockServerFlags()
    const { onSave } = renderComponent()

    await openDialog()
    await userEvent.click(await screen.findByText(NEW_TASK_NAME))
    await userEvent.click(screen.getByRole('button', { name: 'Cancel' }))

    expect(getEnabledExperimentalFeatures()).toEqual([])
    expect(onSave).not.toHaveBeenCalled()
  })

  it('shows the switch as on when Enable all is on, even with no features listed', async () => {
    mockServerFlags({ [NEW_TASK]: false, [ACT]: false })
    renderComponent({ isInExperimentalMode: true })

    expect(
      await screen.findByRole('button', { name: /Experimental Features/ }),
    ).toHaveClass(styles.active)
  })
})
