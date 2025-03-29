import { mockManagedACTAccessRequirement } from '@/mocks/accessRequirement/mockAccessRequirements'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as AccessRequirementListModule from '../AccessRequirementList/AccessRequirementList'
import {
  EnableTwoFaRequirementCard,
  EnableTwoFaRequirementCardProps,
  REQUIRES_2FA_CARD_TITLE,
} from './EnableTwoFaRequirementCard'

const MOCK_ACCESS_REQUIREMENT_LIST_COMPONENT =
  'mock-access-requirement-list-component'
jest
  .spyOn(AccessRequirementListModule, 'default')
  .mockImplementation(() => (
    <div data-testid={MOCK_ACCESS_REQUIREMENT_LIST_COMPONENT}></div>
  ))
jest
  .spyOn(SynapseClient, 'getAccessRequirementById')
  .mockResolvedValue(mockManagedACTAccessRequirement)
const mockGetCurrent2FAStatus = jest.spyOn(
  SynapseClient,
  'getCurrentUserTwoFactorEnrollmentStatus',
)

const defaultProps: EnableTwoFaRequirementCardProps = {
  accessRequirementId: mockManagedACTAccessRequirement.id,
  count: 10,
}
function renderComponent() {
  render(<EnableTwoFaRequirementCard {...defaultProps} />, {
    wrapper: createWrapper(),
  })
}

describe('EnableTwoFaRequirementCard tests', () => {
  beforeEach(() => {
    mockGetCurrent2FAStatus.mockResolvedValue({
      status: 'DISABLED',
    })
  })

  it('Shows the card', async () => {
    renderComponent()
    await screen.findByText(REQUIRES_2FA_CARD_TITLE)
    expect(
      screen.queryByTestId(MOCK_ACCESS_REQUIREMENT_LIST_COMPONENT),
    ).not.toBeInTheDocument()
    const button = await screen.findByRole('button', { name: 'Start' })
    await userEvent.click(button)

    await screen.findByTestId(MOCK_ACCESS_REQUIREMENT_LIST_COMPONENT)
  })

  it('Indicates the action is complete if the user has enabled 2FA', async () => {
    mockGetCurrent2FAStatus.mockResolvedValue({
      status: 'ENABLED',
    })

    renderComponent()

    const completeButton = await screen.findByRole('button', {
      name: 'Complete',
    })
    expect(completeButton).toBeDisabled()
  })
})
