import { server } from '@/mocks/msw/server'
import { MOCK_USER_ID } from '@/mocks/user/mock_user_profile'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { USER_BUNDLE } from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { UserBundle } from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import * as UserAccessHistoryDashboardModule from './AccessHistoryDashboard'
import * as AccessRequirementDashboardModule from './AccessRequirementDashboard'
import * as AccessRequestSubmissionDashboardModule from './AccessSubmissionDashboard'
import ReviewerDashboard from './ReviewerDashboard'

const AR_DASHBOARD_TEST_ID = 'AccessRequirementDashboardTestId'
const SUBMISSION_DASHBOARD_TEST_ID = 'SubmissionDashboardTestId'
const HISTORY_DASHBOARD_TEST_ID = 'HistoryDashboardTestId'

vi.spyOn(
  AccessRequirementDashboardModule,
  'AccessRequirementDashboard',
).mockImplementation(() => {
  return <div data-testid={AR_DASHBOARD_TEST_ID}></div>
})

vi.spyOn(
  AccessRequestSubmissionDashboardModule,
  'DataAccessSubmissionDashboard',
).mockImplementation(() => {
  return <div data-testid={SUBMISSION_DASHBOARD_TEST_ID}></div>
})

vi.spyOn(
  UserAccessHistoryDashboardModule,
  'UserHistoryDashboard',
).mockImplementation(() => {
  return <div data-testid={HISTORY_DASHBOARD_TEST_ID}></div>
})

// By default, ensure the user has permission to see all tabs before trying to render them
function renderComponent(
  isACTMember: boolean = true,
  isARReviewer: boolean = true,
) {
  server.use(
    http.get(
      `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${USER_BUNDLE}`,
      () => {
        const response: UserBundle = {
          userId: MOCK_USER_ID.toString(),
          isACTMember: isACTMember,
          isARReviewer: isARReviewer,
        }
        return HttpResponse.json(response, { status: 200 })
      },
    ),
  )

  return render(
    <ReviewerDashboard useMemoryRouter={true} routerBaseName={'/'} />,
    {
      wrapper: createWrapper(),
    },
  )
}

describe('ReviewerDashboard tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  describe('Tabs render the correct content', () => {
    it('Renders the AR Dashboard', async () => {
      renderComponent()

      const arTab = await screen.findByRole('tab', {
        name: 'Access Requirements',
      })

      await userEvent.click(arTab)

      await screen.findByTestId(AR_DASHBOARD_TEST_ID)
    })

    it('Renders the Submission Dashboard', async () => {
      renderComponent()

      const submissionsTab = await screen.findByRole('tab', {
        name: 'Submissions',
      })

      await userEvent.click(submissionsTab)

      await screen.findByTestId(SUBMISSION_DASHBOARD_TEST_ID)
    })

    it('Renders the User Access History Dashboard', async () => {
      renderComponent()

      const tab = await screen.findByRole('tab', {
        name: 'User Access History',
      })

      await userEvent.click(tab)

      await screen.findByTestId(HISTORY_DASHBOARD_TEST_ID)
    })
  })

  it('Unauthorized user cannot see any tabs', async () => {
    renderComponent(false, false)

    await screen.findByRole('tablist')
    expect(screen.queryByRole('tab')).not.toBeInTheDocument()
  })

  it('ACT can see all tabs', async () => {
    renderComponent(true, false)

    await screen.findByRole('tablist')
    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(3)

    screen.getByRole('tab', { name: 'Access Requirements' })
    screen.getByRole('tab', { name: 'Submissions' })
    screen.getByRole('tab', { name: 'User Access History' })
  })

  it('AR Reviewer can see Submissions and User Access History tabs', async () => {
    renderComponent(false, true)

    await screen.findByRole('tablist')
    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(2)

    expect(
      screen.queryByRole('tab', { name: 'Access Requirements' }),
    ).not.toBeInTheDocument()
    screen.getByRole('tab', { name: 'Submissions' })
    screen.getByRole('tab', { name: 'User Access History' })
  })

  it('Renders the OrientationBanner for non-ACT reviewers on the Submissions Dashboard', async () => {
    renderComponent(false, true)

    const submissionsTab = await screen.findByRole('tab', {
      name: 'Submissions',
    })

    await userEvent.click(submissionsTab)

    const alert = screen.getByRole('alert')
    expect(alert).toHaveTextContent(
      'Getting Started With Data Access Management',
    )
  })

  it('Does not render the OrientationBanner for ACT reviewers on the Submissions Dashboard', async () => {
    renderComponent(true, true)

    const submissionsTab = await screen.findByRole('tab', {
      name: 'Submissions',
    })

    await userEvent.click(submissionsTab)

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
