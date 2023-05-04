import * as React from 'react'
import { act, render, screen, waitFor, within } from '@testing-library/react'
import DataAccessRequestAccessorsFilesForm, {
  DataAccessRequestAccessorsFilesFormProps,
} from '../../../../src/lib/containers/AccessRequirementList/ManagedACTAccessRequirementRequestFlow/DataAccessRequestAccessorsFilesForm'
import { MOCK_RESEARCH_PROJECT_ID } from '../../../../mocks/dataaccess/MockResearchProject'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import { MOCK_FILE_ENTITY_ID } from '../../../../mocks/entity/mockFileEntity'
import { SynapseClient } from '../../../../src/lib'
import {
  MOCK_USER_ID,
  MOCK_USER_ID_2,
  MOCK_USER_ID_3,
  mockUserData,
  mockUserGroupHeader2,
  mockUserGroupHeader3,
  mockUserProfileData,
  mockUserProfileData2,
  mockUserProfileData3,
} from '../../../../mocks/user/mock_user_profile'
import {
  MOCK_DATA_ACCESS_RENEWAL,
  MOCK_DATA_ACCESS_RENEWAL_ID,
  MOCK_DATA_ACCESS_REQUEST,
  MOCK_DATA_ACCESS_REQUEST_ID,
} from '../../../../mocks/dataaccess/MockDataAccessRequest'
import { mockManagedACTAccessRequirement } from '../../../../mocks/mockAccessRequirements'
import { mockSubmittedSubmission } from '../../../../mocks/dataaccess/MockSubmission'
import {
  AccessorChange,
  AccessType,
  RestrictableObjectType,
  SubmissionState,
} from '../../../../src/lib/utils/synapseTypes'
import userEvent from '@testing-library/user-event'
import { MOCK_ACCESS_TOKEN } from '../../../../mocks/MockSynapseContext'
import * as UserSearchBoxV2Module from '../../../../src/lib/containers/UserSearchBoxV2'
import { SynapseClientError } from '../../../../src/lib/utils/SynapseClientError'

jest
  .spyOn(SynapseClient, 'getUserProfile')
  .mockResolvedValue(mockUserProfileData)

jest.spyOn(SynapseClient, 'getUserProfileById').mockImplementation((_, id) => {
  return Promise.resolve(
    mockUserData.find(user => String(user.id) === id).userProfile,
  )
})

jest.spyOn(SynapseClient, 'getUserBundle').mockImplementation(id => {
  return Promise.resolve(
    mockUserData.find(user => String(user.id) === id).userBundle,
  )
})

let interceptedOnSelectUserCallback = null

jest.spyOn(UserSearchBoxV2Module, 'default').mockImplementation(props => {
  interceptedOnSelectUserCallback = props.onChange
  return <div data-testid={'UserSearchBoxV2-MOCK'}></div>
})

const mockGetDataRequestForUpdate = jest.spyOn(
  SynapseClient,
  'getDataAccessRequestForUpdate',
)

const mockUpdateDataAccessRequest = jest
  .spyOn(SynapseClient, 'updateDataAccessRequest')
  .mockImplementation(req => Promise.resolve(req))

jest.spyOn(SynapseClient, 'getFiles').mockResolvedValue({ requestedFiles: [] })

const mockCreateSubmission = jest
  .spyOn(SynapseClient, 'submitDataAccessRequest')
  .mockResolvedValue({
    submissionId: mockSubmittedSubmission.id,
    submittedBy: mockSubmittedSubmission.submittedBy,
    state: SubmissionState.SUBMITTED,
    modifiedOn: mockSubmittedSubmission.modifiedOn,
  })

const mockOnHide = jest.fn()
const mockOnCancel = jest.fn()
const mockOnSubmissionCreated = jest.fn()

const defaultProps: DataAccessRequestAccessorsFilesFormProps = {
  researchProjectId: MOCK_RESEARCH_PROJECT_ID,
  managedACTAccessRequirement: mockManagedACTAccessRequirement,
  entityId: MOCK_FILE_ENTITY_ID,
  onHide: mockOnHide,
  onCancel: mockOnCancel,
  onSubmissionCreated: mockOnSubmissionCreated,
}

async function renderComponent(
  props: DataAccessRequestAccessorsFilesFormProps,
) {
  let renderResult
  await act(async () => {
    renderResult = render(<DataAccessRequestAccessorsFilesForm {...props} />, {
      wrapper: createWrapper(),
    })
  })
  return renderResult
}

const DOWNLOAD_DUC_TEMPLATE_TEXT = 'Download DUC Template'
const UPLOAD_DUC_BUTTON_TEXT = 'Upload Data Use Certificate'
const UPLOAD_IRB_LETTER_BUTTON_TEXT = 'Upload IRB Approval Letter'
const UPLOAD_ATTACHMENT_BUTTON_TEXT = 'Upload Attachment'
const PUBLICATIONS_FIELD_LABEL_TEXT = 'Publication(s)'
const SUMMARY_OF_USE_FIELD_LABEL_TEXT = 'Summary of use'
describe('RequestDataAccessStep2: basic functionality', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Allows adding and removing an accessor on a request', async () => {
    mockGetDataRequestForUpdate.mockResolvedValue({
      ...MOCK_DATA_ACCESS_REQUEST,
      accessorChanges: [
        { userId: String(MOCK_USER_ID), type: AccessType.GAIN_ACCESS },
      ],
    })
    await renderComponent(defaultProps)

    // Verify that only the current user appears
    await screen.findByText(
      `${mockUserProfileData.firstName} ${mockUserProfileData.lastName}`,
      { exact: false },
    )
    expect(
      screen.queryByText(
        `${mockUserProfileData2.firstName} ${mockUserProfileData2.lastName}`,
        { exact: false },
      ),
    ).not.toBeInTheDocument()

    // No remove buttons should be present, because self cannot be removed as an accessor
    expect(screen.queryByLabelText('Remove user')).not.toBeInTheDocument()

    // Add user 2
    expect(interceptedOnSelectUserCallback).toBeDefined()
    await act(() => {
      interceptedOnSelectUserCallback(MOCK_USER_ID_2, mockUserGroupHeader2)
    })

    // Both users are now visible as accessors
    await screen.findByText(
      `${mockUserProfileData.firstName} ${mockUserProfileData.lastName}`,
      { exact: false },
    )
    await screen.findByText(
      `${mockUserProfileData2.firstName} ${mockUserProfileData2.lastName}`,
      { exact: false },
    )

    // One remove button should be present for user 2
    const removeAccessorButton = await screen.findByLabelText('Remove user')

    await userEvent.click(removeAccessorButton)

    // Once again, verify that only the current user appears and no remove buttons appear
    await screen.findByText(
      `${mockUserProfileData.firstName} ${mockUserProfileData.lastName}`,
      { exact: false },
    )
    expect(
      screen.queryByText(
        `${mockUserProfileData2.firstName} ${mockUserProfileData2.lastName}`,
        { exact: false },
      ),
    ).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Remove user')).not.toBeInTheDocument()
  })

  it('Shows renew/revoke controls for existing accessors on a renewal', async () => {
    /*
     * The current user's access cannot be changed, other existing accessors can be revoked, but not removed,
     * and any new users not on the previous request can be removed
     */
    mockGetDataRequestForUpdate.mockResolvedValue({
      ...MOCK_DATA_ACCESS_RENEWAL,
      accessorChanges: [
        { userId: String(MOCK_USER_ID), type: AccessType.RENEW_ACCESS },
        { userId: String(MOCK_USER_ID_2), type: AccessType.RENEW_ACCESS },
      ],
    })
    await renderComponent(defaultProps)

    // Verify that both users appear
    await screen.findByText(
      `${mockUserProfileData.firstName} ${mockUserProfileData.lastName}`,
      { exact: false },
    )
    await screen.findByText(
      `${mockUserProfileData2.firstName} ${mockUserProfileData2.lastName}`,
      { exact: false },
    )

    // A radiogroup should be shown for user 2 where we can renew or revoke their access
    const accessorChangeRadioGroup = screen.getByRole('radiogroup')
    within(accessorChangeRadioGroup).getByRole('radio', { name: 'Renew' })
    const revokeOption = within(accessorChangeRadioGroup).getByRole('radio', {
      name: 'Revoke',
    })
    // Let's revoke user 2's access
    await userEvent.click(revokeOption)

    // No remove buttons should be present, because current users cannot be removed as an accessor
    expect(screen.queryByLabelText('Remove user')).not.toBeInTheDocument()

    // Add user 3
    expect(interceptedOnSelectUserCallback).toBeDefined()
    await act(() => {
      interceptedOnSelectUserCallback(MOCK_USER_ID_3, mockUserGroupHeader3)
    })

    // 3 users are now visible as accessors
    await screen.findByText(
      `${mockUserProfileData.firstName} ${mockUserProfileData.lastName}`,
      { exact: false },
    )
    await screen.findByText(
      `${mockUserProfileData2.firstName} ${mockUserProfileData2.lastName}`,
      { exact: false },
    )
    await screen.findByText(
      `${mockUserProfileData3.firstName} ${mockUserProfileData3.lastName}`,
      { exact: false },
    )

    // Still only one radiogroup for user 2
    screen.getByRole('radiogroup')

    // One remove button should be present for user 3
    screen.getByLabelText('Remove user')

    // Submit the request so we can inspect the request object
    const submitButton = await screen.findByRole('button', { name: 'Submit' })
    await userEvent.click(submitButton)

    await waitFor(() => {
      expect(mockUpdateDataAccessRequest).toHaveBeenCalled()
      const updatedRequest = mockUpdateDataAccessRequest.mock.calls[0][0]
      expect(updatedRequest.accessorChanges).toHaveLength(3)
      expect(updatedRequest.accessorChanges).toContainEqual({
        userId: String(MOCK_USER_ID),
        type: AccessType.RENEW_ACCESS,
      })
      expect(updatedRequest.accessorChanges).toContainEqual({
        userId: String(MOCK_USER_ID_2),
        type: AccessType.REVOKE_ACCESS,
      })
      expect(updatedRequest.accessorChanges).toContainEqual({
        userId: String(MOCK_USER_ID_3),
        type: AccessType.GAIN_ACCESS,
      })
    })

    expect(mockCreateSubmission).toHaveBeenCalledWith(
      {
        requestId: MOCK_DATA_ACCESS_RENEWAL_ID,
        requestEtag: MOCK_DATA_ACCESS_RENEWAL.etag,
        subjectId: MOCK_FILE_ENTITY_ID,
        subjectType: RestrictableObjectType.ENTITY,
      },
      MOCK_ACCESS_TOKEN,
    )
  })

  it('Shows an error if the data access request cannot be fetched', async () => {
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {})
    const errorMessage = 'Some error happened when getting the request'
    mockGetDataRequestForUpdate.mockRejectedValue(
      new SynapseClientError(
        500,
        errorMessage,
        expect.getState().currentTestName,
      ),
    )
    await renderComponent(defaultProps)

    const alert = await screen.findByRole('alert')
    within(alert).getByText(errorMessage)
    consoleErrorSpy.mockRestore()
  })

  it('should show DUC template and field if required', async () => {
    mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_REQUEST)
    await renderComponent({
      ...defaultProps,
      managedACTAccessRequirement: {
        ...mockManagedACTAccessRequirement,
        isDUCRequired: true,
      },
    })

    await screen.findByRole('button', { name: DOWNLOAD_DUC_TEMPLATE_TEXT })
    await screen.findByRole('button', { name: UPLOAD_DUC_BUTTON_TEXT })
  })

  it('should not show DUC template and field if not required', async () => {
    mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_REQUEST)
    await renderComponent({
      ...defaultProps,
      managedACTAccessRequirement: {
        ...mockManagedACTAccessRequirement,
        isDUCRequired: false,
      },
    })

    expect(
      screen.queryByRole('button', { name: DOWNLOAD_DUC_TEMPLATE_TEXT }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: UPLOAD_DUC_BUTTON_TEXT }),
    ).not.toBeInTheDocument()
  })

  it('should show IRB field if required', async () => {
    mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_REQUEST)
    await renderComponent({
      ...defaultProps,
      managedACTAccessRequirement: {
        ...mockManagedACTAccessRequirement,
        isIRBApprovalRequired: true,
      },
    })

    await screen.findByRole('button', { name: UPLOAD_IRB_LETTER_BUTTON_TEXT })
  })

  it('should not show IRB field if not required', async () => {
    mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_REQUEST)
    await renderComponent({
      ...defaultProps,
      managedACTAccessRequirement: {
        ...mockManagedACTAccessRequirement,
        isIRBApprovalRequired: false,
      },
    })

    expect(
      screen.queryByRole('button', { name: UPLOAD_IRB_LETTER_BUTTON_TEXT }),
    ).not.toBeInTheDocument()
  })

  it('should show attachments if required', async () => {
    mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_REQUEST)
    await renderComponent({
      ...defaultProps,
      managedACTAccessRequirement: {
        ...mockManagedACTAccessRequirement,
        areOtherAttachmentsRequired: true,
      },
    })

    await screen.findByRole('button', { name: UPLOAD_ATTACHMENT_BUTTON_TEXT })
  })

  it('should not show attachments if not required', async () => {
    mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_REQUEST)
    await renderComponent({
      ...defaultProps,
      managedACTAccessRequirement: {
        ...mockManagedACTAccessRequirement,
        areOtherAttachmentsRequired: false,
      },
    })

    expect(
      screen.queryByRole('button', { name: UPLOAD_ATTACHMENT_BUTTON_TEXT }),
    ).not.toBeInTheDocument()
  })

  it('should show publications and summary of use for a renewal', async () => {
    mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_RENEWAL)
    await renderComponent(defaultProps)
    await screen.findByLabelText(PUBLICATIONS_FIELD_LABEL_TEXT)
    await screen.findByLabelText(SUMMARY_OF_USE_FIELD_LABEL_TEXT)
  })
  it('should not show publications and summary of use for a request', async () => {
    mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_REQUEST)
    await renderComponent(defaultProps)

    expect(
      screen.queryByLabelText(PUBLICATIONS_FIELD_LABEL_TEXT),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByLabelText(SUMMARY_OF_USE_FIELD_LABEL_TEXT),
    ).not.toBeInTheDocument()
  })

  it('Automatically adds the current user as an accessor with GAIN_ACCESS', async () => {
    const emptyAccessorChanges: AccessorChange[] = []
    mockGetDataRequestForUpdate.mockResolvedValue({
      ...MOCK_DATA_ACCESS_REQUEST,
      accessorChanges: emptyAccessorChanges,
    })
    await renderComponent(defaultProps)

    // Verify that the current user appears
    await screen.findByText(
      `${mockUserProfileData.firstName} ${mockUserProfileData.lastName}`,
      { exact: false },
    )

    // Submit the request so we can inspect the request object
    const submitButton = await screen.findByRole('button', { name: 'Submit' })
    await userEvent.click(submitButton)

    await waitFor(() => {
      expect(mockUpdateDataAccessRequest).toHaveBeenCalled()
      const updatedRequest = mockUpdateDataAccessRequest.mock.calls[0][0]
      expect(updatedRequest.accessorChanges).toHaveLength(1)
      expect(updatedRequest.accessorChanges).toContainEqual({
        userId: String(MOCK_USER_ID),
        type: AccessType.GAIN_ACCESS,
      })
    })

    expect(mockCreateSubmission).toHaveBeenCalledWith(
      {
        requestId: MOCK_DATA_ACCESS_REQUEST_ID,
        requestEtag: MOCK_DATA_ACCESS_REQUEST.etag,
        subjectId: MOCK_FILE_ENTITY_ID,
        subjectType: RestrictableObjectType.ENTITY,
      },
      MOCK_ACCESS_TOKEN,
    )
  })

  it('SWC-5765 - filters duplicate accessors on fetch', async () => {
    const accessorChangesWithDuplicate: AccessorChange[] = [
      { userId: String(MOCK_USER_ID), type: AccessType.GAIN_ACCESS },
      { userId: String(MOCK_USER_ID), type: AccessType.GAIN_ACCESS },
      { userId: String(MOCK_USER_ID_2), type: AccessType.GAIN_ACCESS },
      { userId: String(MOCK_USER_ID_2), type: AccessType.GAIN_ACCESS },
    ]
    mockGetDataRequestForUpdate.mockResolvedValue({
      ...MOCK_DATA_ACCESS_REQUEST,
      accessorChanges: accessorChangesWithDuplicate,
    })
    await renderComponent(defaultProps)

    // Verify that each accessor only appears once
    await screen.findByText(
      `${mockUserProfileData.firstName} ${mockUserProfileData.lastName}`,
      { exact: false },
    )
    await screen.findByText(
      `${mockUserProfileData2.firstName} ${mockUserProfileData2.lastName}`,
      { exact: false },
    )

    // Submit the request so we can inspect the request object
    const submitButton = await screen.findByRole('button', { name: 'Submit' })
    await userEvent.click(submitButton)

    await waitFor(() => {
      expect(mockUpdateDataAccessRequest).toHaveBeenCalled()
      const updatedRequest = mockUpdateDataAccessRequest.mock.calls[0][0]
      expect(updatedRequest.accessorChanges).toHaveLength(2)
      expect(updatedRequest.accessorChanges).toContainEqual({
        userId: String(MOCK_USER_ID),
        type: AccessType.GAIN_ACCESS,
      })
      expect(updatedRequest.accessorChanges).toContainEqual({
        userId: String(MOCK_USER_ID_2),
        type: AccessType.GAIN_ACCESS,
      })
    })

    expect(mockCreateSubmission).toHaveBeenCalledWith(
      {
        requestId: MOCK_DATA_ACCESS_REQUEST_ID,
        requestEtag: MOCK_DATA_ACCESS_REQUEST.etag,
        subjectId: MOCK_FILE_ENTITY_ID,
        subjectType: RestrictableObjectType.ENTITY,
      },
      MOCK_ACCESS_TOKEN,
    )
  })
})
