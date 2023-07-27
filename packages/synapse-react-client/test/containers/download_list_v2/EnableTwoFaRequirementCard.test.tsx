import { act, render, screen } from '@testing-library/react'
import React from 'react'
import { createWrapper } from '../../../src/testutils/TestingLibraryUtils'
import userEvent from '@testing-library/user-event'
import SynapseClient from '../../../src/synapse-client'
import {
  EnableTwoFaRequirementCard,
  EnableTwoFaRequirementCardProps,
  REQUIRES_2FA_CARD_TITLE,
} from '../../../src/components/DownloadCart/EnableTwoFaRequirementCard'
import { mockManagedACTAccessRequirement } from '../../../src/mocks/mockAccessRequirements'
import * as AccessRequirementListModule from '../../../src/components/AccessRequirementList/AccessRequirementList'

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

const defaultProps: EnableTwoFaRequirementCardProps = {
  accessRequirementId: mockManagedACTAccessRequirement.id,
  count: 10,
}
async function renderComponent() {
  await act(() => {
    render(<EnableTwoFaRequirementCard {...defaultProps} />, {
      wrapper: createWrapper(),
    })
  })
}

describe('EnableTwoFaRequirementCard tests', () => {
  it('Shows the card', async () => {
    await renderComponent()
    await screen.findByText(REQUIRES_2FA_CARD_TITLE)
    expect(
      screen.queryByTestId(MOCK_ACCESS_REQUIREMENT_LIST_COMPONENT),
    ).not.toBeInTheDocument()
    const button = await screen.findByRole('button', { name: 'Start' })
    await userEvent.click(button)

    await screen.findByTestId(MOCK_ACCESS_REQUIREMENT_LIST_COMPONENT)
  })
})
