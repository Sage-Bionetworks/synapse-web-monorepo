import React from 'react'
import { act, render, screen, waitFor } from '@testing-library/react'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import UnmanagedACTAccessRequirementItem, {
  UnmanagedACTAccessRequirementItemProps,
} from './UnmanagedACTAccessRequirementItem'
import { SynapseClient, SynapseContextType } from '../../../index'
import {
  AccessRequirementStatus,
  RestrictableObjectType,
} from '@sage-bionetworks/synapse-types'
import {
  mockACTAccessRequirement,
  mockManagedACTAccessRequirement,
} from '../../../mocks/mockAccessRequirements'
import { MOCK_FILE_ENTITY_ID } from '../../../mocks/entity/mockFileEntity'
import userEvent from '@testing-library/user-event'

function renderComponent(
  props: UnmanagedACTAccessRequirementItemProps,
  wrapperProps?: Partial<SynapseContextType>,
) {
  let renderReturn
  act(() => {
    renderReturn = render(<UnmanagedACTAccessRequirementItem {...props} />, {
      wrapper: createWrapper(wrapperProps),
    })
  })
  return renderReturn
}

const mockOnHide = jest.fn()

const defaultProps: UnmanagedACTAccessRequirementItemProps = {
  accessRequirement: mockACTAccessRequirement,
  subjectId: MOCK_FILE_ENTITY_ID,
  subjectType: RestrictableObjectType.ENTITY,
  onHide: mockOnHide,
}

const mockGetAccessRequirementStatus = jest.spyOn(
  SynapseClient,
  'getAccessRequirementStatus',
)

const unapprovedStatus: AccessRequirementStatus = {
  accessRequirementId: String(mockManagedACTAccessRequirement.id),
  concreteType:
    'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
  isApproved: false,
}

const approvedStatus: AccessRequirementStatus = {
  accessRequirementId: String(mockManagedACTAccessRequirement.id),
  concreteType:
    'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
  isApproved: true,
}

// The first 54 characters of the instructions map to the first sentence. This selection has no markdown formatting, so it's easy to query.
const mockInstructionsToQuery =
  mockACTAccessRequirement.actContactInfo!.substring(0, 54)

async function testInstructionsToggle() {
  await waitFor(() => {
    expect(
      screen.queryByText(mockInstructionsToQuery, { exact: false }),
    ).not.toBeInTheDocument()
  })

  let toggle = await screen.findByRole('button', { name: 'View Instructions' })
  await userEvent.click(toggle)

  await screen.findByText(mockInstructionsToQuery, { exact: false })

  toggle = await screen.findByRole('button', { name: 'Hide Instructions' })
  await userEvent.click(toggle)

  await waitFor(() =>
    expect(
      screen.queryByText(mockInstructionsToQuery, { exact: false }),
    ).not.toBeInTheDocument(),
  )
}

async function testInstructionsShownWithoutToggle() {
  await screen.findByText(mockInstructionsToQuery, {
    exact: false,
  })

  expect(
    screen.queryByRole('button', { name: /[View|Hide] Instructions/ }),
  ).not.toBeInTheDocument()
}

describe('UnmanagedACTAccessRequirement tests', () => {
  it('Opens the AR page on accept', async () => {
    mockGetAccessRequirementStatus.mockResolvedValue(unapprovedStatus)
    renderComponent(defaultProps)

    const requestAccessButton = await screen.findByRole('button', {
      name: 'Request access via Synapse.org',
    })

    await userEvent.click(requestAccessButton)

    expect(window.open).toHaveBeenLastCalledWith(
      expect.stringContaining(
        `#!AccessRequirement:AR_ID=${mockACTAccessRequirement.id}&TYPE=${RestrictableObjectType.ENTITY}&ID=${MOCK_FILE_ENTITY_ID}`,
      ),
    )

    expect(mockOnHide).toHaveBeenCalled()
  })

  it('calls onHide if the terms are not accepted', async () => {
    mockGetAccessRequirementStatus.mockResolvedValue(unapprovedStatus)
    renderComponent(defaultProps)

    const rejectTermsButton = await screen.findByRole('button', {
      name: 'I do not accept',
    })

    await userEvent.click(rejectTermsButton)

    expect(mockOnHide).toHaveBeenCalled()
  })
  it('Shows markdown contact info if not approved', async () => {
    mockGetAccessRequirementStatus.mockResolvedValue(unapprovedStatus)
    renderComponent(defaultProps)

    await testInstructionsShownWithoutToggle()
  })
  it('Contact info is not shown and toggleable if approved', async () => {
    mockGetAccessRequirementStatus.mockResolvedValue(approvedStatus)
    renderComponent(defaultProps)

    expect(
      screen.queryByRole('button', {
        name: 'Request access',
        exact: false,
      }),
    ).not.toBeInTheDocument()

    await testInstructionsToggle()
  })
})
