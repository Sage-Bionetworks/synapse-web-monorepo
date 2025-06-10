import {
  mockLockAccessRequirement,
  mockManagedACTAccessRequirement,
  mockSelfSignAccessRequirement,
  mockToUAccessRequirement,
} from '@/mocks/accessRequirement/mockAccessRequirements'
import { rest, server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseContextType } from '@/utils'
import {
  ACCESS_REQUIREMENT_BY_ID,
  ACCESS_REQUIREMENT_STATUS,
} from '@/utils/APIConstants'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import {
  AccessRequirement,
  AccessRequirementStatus,
} from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import {
  ACT_TITLE,
  LOCK_TITLE,
  MeetAccessRequirementCard,
  MeetAccessRequirementCardProps,
  SELF_SIGN_TITLE,
  TERMS_OF_USE_TITLE,
} from './MeetAccessRequirementCard'

const ACCESS_REQUIREMENT_ID = 1111
const defaultProps: MeetAccessRequirementCardProps = {
  accessRequirementId: ACCESS_REQUIREMENT_ID,
  count: 10,
}

function setupAccessRequirementResponse(accessRequirement: AccessRequirement) {
  server.use(
    rest.get(
      `${getEndpoint(
        BackendDestinationEnum.REPO_ENDPOINT,
      )}${ACCESS_REQUIREMENT_BY_ID(ACCESS_REQUIREMENT_ID)}`,

      async (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(accessRequirement))
      },
    ),
  )
}

function setUpAccessRequirementStatus(isApproved: boolean) {
  server.use(
    rest.get(
      `${getEndpoint(
        BackendDestinationEnum.REPO_ENDPOINT,
      )}${ACCESS_REQUIREMENT_STATUS(':id')}`,
      async (req, res, ctx) => {
        const response: AccessRequirementStatus = {
          accessRequirementId: req.params.id as string,
          concreteType:
            'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
          isApproved: isApproved,
        }
        return res(ctx.status(200), ctx.json(response))
      },
    ),
  )
}

function renderComponent(wrapperProps?: SynapseContextType) {
  render(<MeetAccessRequirementCard {...defaultProps} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

describe('MeetAccessRequirementCard tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Indicates the action is complete if the user is approved in the AR', async () => {
    setupAccessRequirementResponse(mockToUAccessRequirement)
    setUpAccessRequirementStatus(true)
    renderComponent()

    const completeButton = await screen.findByRole('button', {
      name: 'Complete',
    })
    expect(completeButton).toBeDisabled()
  })

  it('Show a ToU AR', async () => {
    setupAccessRequirementResponse(mockToUAccessRequirement)
    setUpAccessRequirementStatus(false)

    renderComponent()

    await screen.findByText(TERMS_OF_USE_TITLE)
    await screen.findByRole('button', { name: 'Start' })
  })

  it('Show a Self-sign AR', async () => {
    setupAccessRequirementResponse(mockSelfSignAccessRequirement)
    setUpAccessRequirementStatus(false)

    renderComponent()

    await screen.findByText(SELF_SIGN_TITLE)
    await screen.findByRole('button', { name: 'Start' })
  })

  it('Show am ACT AR', async () => {
    setupAccessRequirementResponse(mockManagedACTAccessRequirement)
    setUpAccessRequirementStatus(false)

    renderComponent()

    await screen.findByText(ACT_TITLE)
    await screen.findByRole('button', { name: 'Start' })
  })

  it('Show a Lock AR', async () => {
    setupAccessRequirementResponse(mockLockAccessRequirement)
    setUpAccessRequirementStatus(false)

    renderComponent()

    await screen.findByText(LOCK_TITLE)
    await screen.findByRole('button', { name: 'Start' })
  })
})
