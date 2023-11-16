import { act, render, screen } from '@testing-library/react'
import React from 'react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import userEvent from '@testing-library/user-event'
import SynapseClient from '../../synapse-client'
import {
  EnableTwoFaRequirementCard,
  EnableTwoFaRequirementCardProps,
  REQUIRES_2FA_CARD_TITLE,
} from './EnableTwoFaRequirementCard'
import { mockManagedACTAccessRequirement } from '../../mocks/mockAccessRequirements'
import * as AccessRequirementListModule from '../AccessRequirementList/AccessRequirementList'

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
  // We must await asynchronous events for our assertions to pass
  // eslint-disable-next-line @typescript-eslint/require-await
  await act(async () => {
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
