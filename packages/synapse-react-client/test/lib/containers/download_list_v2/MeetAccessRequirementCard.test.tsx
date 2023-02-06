import { render, screen } from '@testing-library/react'
import React from 'react'
import {
  MeetAccessRequirementCard,
  MeetAccessRequirementCardProps,
  TERMS_OF_USE_TITLE,
  SELF_SIGN_TITLE,
  ACT_TITLE,
  LOCK_TITLE,
} from '../../../../src/lib/containers/download_list_v2/MeetAccessRequirementCard'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import { SynapseContextType } from '../../../../src/lib/utils/SynapseContext'
import { rest, server } from '../../../../mocks/msw/server'
import {
  mockToUAccessRequirement,
  // mockACTAccessRequirement,
  mockLockAccessRequirement,
  mockManagedACTAccessRequirement,
  mockSelfSignAccessRequirement,
} from '../../../../mocks/mockAccessRequirements'
import { ACCESS_REQUIREMENT_BY_ID } from '../../../../src/lib/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../src/lib/utils/functions/getEndpoint'

const ACCESS_REQUIREMENT_ID = 1111
const defaultProps: MeetAccessRequirementCardProps = {
  accessRequirementId: ACCESS_REQUIREMENT_ID,
  count: 10,
}

const setupAccessRequirementResponse = (accessRequirement: any) => {
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
function renderComponent(wrapperProps?: SynapseContextType) {
  render(<MeetAccessRequirementCard {...defaultProps} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

describe('MeetAccessRequirementCard tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Show a ToU AR', async () => {
    setupAccessRequirementResponse(mockToUAccessRequirement)
    renderComponent()
    await screen.findByText(TERMS_OF_USE_TITLE)
  })

  it('Show a Self-sign AR', async () => {
    setupAccessRequirementResponse(mockSelfSignAccessRequirement)
    renderComponent()
    await screen.findByText(SELF_SIGN_TITLE)
  })

  it('Show am ACT AR', async () => {
    setupAccessRequirementResponse(mockManagedACTAccessRequirement)
    renderComponent()
    await screen.findByText(ACT_TITLE)
  })

  it('Show a Lock AR', async () => {
    setupAccessRequirementResponse(mockLockAccessRequirement)
    renderComponent()
    await screen.findByText(LOCK_TITLE)
  })
})
