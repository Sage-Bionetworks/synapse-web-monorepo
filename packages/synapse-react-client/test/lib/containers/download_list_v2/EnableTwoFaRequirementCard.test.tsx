import { act, render, screen } from '@testing-library/react'
import React from 'react'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import userEvent from '@testing-library/user-event'
import { SynapseClient } from '../../../../src/lib'
import {
  EnableTwoFaRequirementCard,
  EnableTwoFaRequirementCardProps,
  REQUIRES_2FA_CARD_TITLE,
} from '../../../../src/lib/containers/download_list_v2/EnableTwoFaRequirementCard'
import { mockManagedACTAccessRequirement } from '../../../../mocks/mockAccessRequirements'
import * as AccessRequirementListModule from '../../../../src/lib/containers/AccessRequirementList/AccessRequirementList'

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
