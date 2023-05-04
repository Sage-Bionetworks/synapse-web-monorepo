import { act, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import ManagedACTAccessRequirementItem, {
  ManagedACTAccessRequirementItemProps,
} from '../../../../src/lib/containers/AccessRequirementList/ManagedACTAccessRequirementRequestFlow/ManagedACTAccessRequirementItem'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import {
  AccessRequirementStatus,
  SubmissionState,
} from '../../../../src/lib/utils/synapseTypes'
import { FullContextProviderProps } from '../../../../src/lib/utils/FullContextProvider'
import { MOCK_FILE_ENTITY_ID } from '../../../../mocks/entity/mockFileEntity'
import {
  mockManagedACTAccessRequirement,
  mockManagedACTAccessRequirementWikiPageKey,
} from '../../../../mocks/mockAccessRequirements'
import { SynapseClient } from '../../../../src/lib'
import { MOCK_USER_ID } from '../../../../mocks/user/mock_user_profile'
import userEvent from '@testing-library/user-event'
import * as MarkdownSynapseModule from '../../../../src/lib/containers/markdown/MarkdownSynapse'
import { MOCK_ACCESS_TOKEN } from '../../../../mocks/MockSynapseContext'

async function renderComponent(
  props: ManagedACTAccessRequirementItemProps,
  wrapperProps?: FullContextProviderProps,
) {
  let renderReturn
  await act(async () => {
    renderReturn = render(<ManagedACTAccessRequirementItem {...props} />, {
      wrapper: createWrapper(wrapperProps),
    })
  })
  return renderReturn
}

const mockGetAccessRequirementStatus = jest.spyOn(
  SynapseClient,
  'getAccessRequirementStatus',
)

const mockGetWikiPageKey = jest
  .spyOn(SynapseClient, 'getWikiPageKeyForAccessRequirement')
  .mockResolvedValue(mockManagedACTAccessRequirementWikiPageKey)

const mockCancelSubmission = jest
  .spyOn(SynapseClient, 'cancelDataAccessRequest')
  .mockImplementation(submissionId =>
    Promise.resolve({
      submissionId: submissionId,
      submittedBy: String(MOCK_USER_ID),
      state: SubmissionState.CANCELLED,
      modifiedOn: '2023-04-21T14:52:18+00:00',
    }),
  )

const mockRenderedMarkdown =
  'These are the AR instructions presented to the user.'

const mockMarkdownSynapse = jest
  .spyOn(MarkdownSynapseModule, 'default')
  .mockReturnValue(mockRenderedMarkdown)

const mockOnRequestAccess = jest.fn()
const mockOnHide = jest.fn()

const rejectedReason = 'You incorrectly filled out your IDU Statement.'

const defaultProps: ManagedACTAccessRequirementItemProps = {
  entityId: MOCK_FILE_ENTITY_ID,
  accessRequirement: mockManagedACTAccessRequirement,
  onRequestAccess: mockOnRequestAccess,
  onHide: mockOnHide,
}

const noSubmissionStatus: AccessRequirementStatus = {
  accessRequirementId: String(mockManagedACTAccessRequirement.id),
  concreteType:
    'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
  isApproved: false,
}

const submittedStatus: AccessRequirementStatus = {
  ...noSubmissionStatus,
  isApproved: false,
  currentSubmissionStatus: {
    submissionId: '1234',
    submittedBy: String(MOCK_USER_ID),
    state: SubmissionState.SUBMITTED,
    modifiedOn: '2023-04-21T14:52:18+00:00',
  },
}

const cancelledStatus: AccessRequirementStatus = {
  ...noSubmissionStatus,
  isApproved: false,
  currentSubmissionStatus: {
    submissionId: '1234',
    submittedBy: String(MOCK_USER_ID),
    state: SubmissionState.CANCELLED,
    modifiedOn: '2023-04-21T14:52:18+00:00',
  },
}

const rejectedStatus: AccessRequirementStatus = {
  ...noSubmissionStatus,
  isApproved: false,
  currentSubmissionStatus: {
    submissionId: '1234',
    submittedBy: String(MOCK_USER_ID),
    state: SubmissionState.REJECTED,
    modifiedOn: '2023-04-21T14:52:18+00:00',
    rejectedReason: rejectedReason,
  },
}

const approvedStatus: AccessRequirementStatus = {
  ...noSubmissionStatus,
  isApproved: true,
  currentSubmissionStatus: {
    submissionId: '1234',
    submittedBy: String(MOCK_USER_ID),
    state: SubmissionState.APPROVED,
    modifiedOn: '2023-04-21T14:52:18+00:00',
  },
}

async function testWikiToggle() {
  expect(screen.queryByText(mockRenderedMarkdown)).not.toBeInTheDocument()

  let toggle = await screen.findByRole('button', { name: 'View Terms' })
  await userEvent.click(toggle)

  await screen.findByText(mockRenderedMarkdown)
  expect(mockMarkdownSynapse).toHaveBeenCalledWith(
    expect.objectContaining({
      wikiId: mockManagedACTAccessRequirementWikiPageKey.wikiPageId,
      ownerId: mockManagedACTAccessRequirementWikiPageKey.ownerObjectId,
      objectType: mockManagedACTAccessRequirementWikiPageKey.ownerObjectType,
    }),
    expect.anything(),
  )

  toggle = await screen.findByRole('button', { name: 'Hide Terms' })
  await userEvent.click(toggle)

  await waitFor(() =>
    expect(screen.queryByText(mockRenderedMarkdown)).not.toBeInTheDocument(),
  )
}

async function testWikiShownWithoutToggle() {
  await screen.findByText(mockRenderedMarkdown)
  expect(mockMarkdownSynapse).toHaveBeenCalledWith(
    expect.objectContaining({
      wikiId: mockManagedACTAccessRequirementWikiPageKey.wikiPageId,
      ownerId: mockManagedACTAccessRequirementWikiPageKey.ownerObjectId,
      objectType: mockManagedACTAccessRequirementWikiPageKey.ownerObjectType,
    }),
    expect.anything(),
  )

  expect(
    screen.queryByRole('button', { name: /[View|Hide] Terms/ }),
  ).not.toBeInTheDocument()
}

describe('ManagedACTAccessRequirementItem', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  describe('Submission has not been created', () => {
    beforeEach(async () => {
      mockGetAccessRequirementStatus.mockResolvedValue(noSubmissionStatus)
      await renderComponent(defaultProps)
    })

    it('Wiki is shown', async () => {
      await testWikiShownWithoutToggle()
    })

    it('Can request access', async () => {
      const button = await screen.findByRole('button', {
        name: 'Request access',
      })
      await userEvent.click(button)
      expect(mockOnRequestAccess).toHaveBeenCalled()
    })

    it('Hides the dialog when terms are not accepted', async () => {
      const button = await screen.findByRole('button', {
        name: 'I do not accept',
      })
      await userEvent.click(button)
      expect(mockOnHide).toHaveBeenCalled()
      expect(mockOnRequestAccess).not.toHaveBeenCalled()
    })
  })

  describe('Submission is APPROVED', () => {
    beforeEach(async () => {
      mockGetAccessRequirementStatus.mockResolvedValue(approvedStatus)
      await renderComponent(defaultProps)
    })

    it('Request can be updated', async () => {
      await screen.findByText('Your data access request has been approved.')
      const button = await screen.findByRole('button', {
        name: 'Update Request',
      })
      await userEvent.click(button)
      expect(mockOnRequestAccess).toHaveBeenCalled()
    })

    it('Wiki is hidden and can be shown', async () => {
      await testWikiToggle()
    })
  })

  describe('Submission is SUBMITTED', () => {
    beforeEach(async () => {
      mockGetAccessRequirementStatus.mockResolvedValue(submittedStatus)
      await renderComponent(defaultProps)
    })

    it('Request can be cancelled', async () => {
      await screen.findByText('You have submitted a data access request.')
      const button = await screen.findByRole('button', {
        name: 'Cancel Request',
      })
      await userEvent.click(button)
      expect(mockCancelSubmission).toHaveBeenCalledWith(
        submittedStatus.currentSubmissionStatus.submissionId,
        MOCK_ACCESS_TOKEN,
      )
    })

    it('Wiki is shown', async () => {
      await testWikiShownWithoutToggle()
    })
  })
  describe('Submission is REJECTED', () => {
    beforeEach(async () => {
      mockGetAccessRequirementStatus.mockResolvedValue(rejectedStatus)
      await renderComponent(defaultProps)
    })

    it('Request can be updated', async () => {
      await screen.findByText('Your data access request has been rejected.')
      await screen.findByText(
        rejectedStatus.currentSubmissionStatus.rejectedReason,
      )
      const button = await screen.findByRole('button', {
        name: 'Update Request',
      })
      await userEvent.click(button)
      expect(mockOnRequestAccess).toHaveBeenCalled()
    })

    it('Wiki is shown', async () => {
      await testWikiShownWithoutToggle()
    })
  })
  describe('Submission is CANCELLED', () => {
    beforeEach(async () => {
      mockGetAccessRequirementStatus.mockResolvedValue(cancelledStatus)
      await renderComponent(defaultProps)
    })

    it('Request can be updated', async () => {
      await screen.findByText('Your data access request has been canceled.')
      const button = await screen.findByRole('button', {
        name: 'Update Request',
      })
      await userEvent.click(button)
      expect(mockOnRequestAccess).toHaveBeenCalled()
    })

    it('Wiki is shown', async () => {
      await testWikiShownWithoutToggle()
    })
  })

  // See PLFM-7800
  it.todo('Informs a user when their submission has expired')
})
