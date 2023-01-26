import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import ReviewerDashboard from '../../../../lib/containers/dataaccess/ReviewerDashboard'
import { createWrapper } from '../../../../lib/testutils/TestingLibraryUtils'
import { USER_BUNDLE } from '../../../../lib/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../lib/utils/functions/getEndpoint'
import { UserBundle } from '../../../../lib/utils/synapseTypes'
import { rest, server } from '../../../../mocks/msw/server'
import { MOCK_USER_ID } from '../../../../mocks/user/mock_user_profile'

const AR_DASHBOARD_TEST_ID = 'AccessRequirementDashboardTestId'
const SUBMISSION_DASHBOARD_TEST_ID = 'SubmissionDashboardTestId'

jest.mock(
  '../../../../lib/containers/dataaccess/AccessRequirementDashboard',
  () => ({
    AccessRequirementDashboard: jest.fn().mockImplementation(() => {
      return <div data-testid={AR_DASHBOARD_TEST_ID}></div>
    }),
  }),
)
jest.mock('../../../../lib/containers/AccessRequestSubmissionTable', () => ({
  AccessRequestSubmissionTable: jest.fn().mockImplementation(() => {
    return <div data-testid={SUBMISSION_DASHBOARD_TEST_ID}></div>
  }),
}))

function renderComponent() {
  return render(<ReviewerDashboard />, {
    wrapper: createWrapper(),
  })
}

describe('ReviewerDashboard tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  describe('Tabs render the correct content', () => {
    beforeEach(() => {
      // Ensure the user has permission to see all tabs before trying to render them

      const isACTMember = true
      const isARReviewer = true

      server.use(
        rest.get(
          `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${USER_BUNDLE}`,
          async (req, res, ctx) => {
            const response: UserBundle = {
              userId: MOCK_USER_ID.toString(),
              isACTMember: isACTMember,
              isARReviewer: isARReviewer,
            }
            return res(ctx.status(200), ctx.json(response))
          },
        ),
      )
    })

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

    // TODO
    it.skip('Renders the User Access History Dashboard', () => {})
  })

  it('Unauthorized user cannot see any tabs', async () => {
    const isACTMember = false
    const isARReviewer = false

    server.use(
      rest.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${USER_BUNDLE}`,
        async (req, res, ctx) => {
          const response: UserBundle = {
            userId: MOCK_USER_ID.toString(),
            isACTMember: isACTMember,
            isARReviewer: isARReviewer,
          }
          return res(ctx.status(200), ctx.json(response))
        },
      ),
    )

    renderComponent()

    await screen.findByRole('tablist')
    expect(screen.queryByRole('tab')).not.toBeInTheDocument()
  })

  it('ACT can see all tabs', async () => {
    const isACTMember = true
    const isARReviewer = false

    server.use(
      rest.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${USER_BUNDLE}`,
        async (req, res, ctx) => {
          const response: UserBundle = {
            userId: MOCK_USER_ID.toString(),
            isACTMember: isACTMember,
            isARReviewer: isARReviewer,
          }
          return res(ctx.status(200), ctx.json(response))
        },
      ),
    )

    renderComponent()

    await screen.findByRole('tablist')
    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(3)

    screen.getByRole('tab', { name: 'Access Requirements' })
    screen.getByRole('tab', { name: 'Submissions' })
    screen.getByRole('tab', { name: 'User Access History' })
  })

  it('AR Reviewer can only see Submissions tab', async () => {
    const isACTMember = false
    const isARReviewer = true

    server.use(
      rest.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${USER_BUNDLE}`,
        async (req, res, ctx) => {
          const response: UserBundle = {
            userId: MOCK_USER_ID.toString(),
            isACTMember: isACTMember,
            isARReviewer: isARReviewer,
          }
          return res(ctx.status(200), ctx.json(response))
        },
      ),
    )

    renderComponent()

    await screen.findByRole('tablist')
    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(1)

    expect(
      screen.queryByRole('tab', { name: 'Access Requirements' }),
    ).not.toBeInTheDocument()
    screen.getByRole('tab', { name: 'Submissions' })
    expect(
      screen.queryByRole('tab', { name: 'User Access History' }),
    ).not.toBeInTheDocument()
  })
})
