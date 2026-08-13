import {
  mockManagedACTAccessRequirement,
  mockManagedACTAccessRequirementWikiPageKey,
} from '@/mocks/accessRequirement/mockAccessRequirements'
import {
  MOCK_DATA_ACCESS_RENEWAL,
  MOCK_DATA_ACCESS_RENEWAL_ID,
  MOCK_DATA_ACCESS_REQUEST,
  MOCK_DATA_ACCESS_REQUEST_ID,
} from '@/mocks/dataaccess/MockDataAccessRequest'
import { MOCK_RESEARCH_PROJECT_ID } from '@/mocks/dataaccess/MockResearchProject'
import { mockSubmittedSubmission } from '@/mocks/dataaccess/MockSubmission'
import { MOCK_FILE_ENTITY_ID } from '@/mocks/entity/mockFileEntity'
import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import {
  MOCK_USER_ID,
  MOCK_USER_ID_2,
  MOCK_USER_ID_3,
  mockUserData,
  mockUserGroupHeader,
  mockUserGroupHeader2,
  mockUserGroupHeader3,
  mockUserProfileData,
  mockUserProfileData2,
  mockUserProfileData3,
} from '@/mocks/user/mock_user_profile'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  AccessorChange,
  AccessType,
  RestrictableObjectType,
  SubmissionState,
} from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MarkdownSynapse from '../../../Markdown/MarkdownSynapse'
import * as UserSearchBoxModule from '../../../UserSearchBox/UserSearchBox'
import * as AccessRequirementListUtils from '../../AccessRequirementListUtils'
import DataAccessRequestAccessorsFilesForm, {
  DataAccessRequestAccessorsFilesFormProps,
  EDUC_COLLABORATOR_LIMIT,
} from './DataAccessRequestAccessorsFilesForm'

const MARKDOWN_SYNAPSE_TEST_ID = 'MarkdownSynapseContent'
vi.mock('../../../Markdown/MarkdownSynapse', () => ({
  __esModule: true,
  default: vi.fn(),
}))

const mockMarkdownSynapse = vi.mocked(MarkdownSynapse)
mockMarkdownSynapse.mockImplementation(
  () => (<div data-testid={MARKDOWN_SYNAPSE_TEST_ID} />) as any,
)

vi.spyOn(SynapseClient, 'getUserProfile').mockResolvedValue(mockUserProfileData)

vi.spyOn(SynapseClient, 'getGroupHeadersBatch').mockImplementation(ids => {
  const headers = []
  if (ids.includes(mockUserGroupHeader.ownerId)) {
    headers.push(mockUserGroupHeader)
  }

  if (ids.includes(mockUserGroupHeader2.ownerId)) {
    headers.push(mockUserGroupHeader2)
  }

  if (ids.includes(mockUserGroupHeader3.ownerId)) {
    headers.push(mockUserGroupHeader3)
  }

  return Promise.resolve({
    children: headers,
  })
})

vi.spyOn(SynapseClient, 'getUserProfileById').mockImplementation((_, id) => {
  return Promise.resolve(
    mockUserData.find(user => String(user.id) === String(id))!.userProfile!,
  )
})

vi.spyOn(SynapseClient, 'getUserBundle').mockImplementation(id => {
  return Promise.resolve(
    mockUserData.find(user => String(user.id) === String(id))!.userBundle!,
  )
})

const mockedUserSearchBox = vi
  .spyOn(UserSearchBoxModule, 'default')
  .mockImplementation(props => {
    return <div data-testid={'UserSearchBox-MOCK'}></div>
  })

const mockGetDataRequestForUpdate = vi.spyOn(
  SynapseClient,
  'getDataAccessRequestForUpdate',
)

const mockUpdateDataAccessRequest = vi
  .spyOn(SynapseClient, 'updateDataAccessRequest')
  .mockImplementation(req => {
    // Update the 'GET' mock to return the updated object
    mockGetDataRequestForUpdate.mockResolvedValue(req)
    return Promise.resolve(req)
  })

vi.spyOn(SynapseClient, 'getFiles').mockResolvedValue({ requestedFiles: [] })

vi.spyOn(SynapseClient, 'getWikiPageKeyForAccessRequirement').mockResolvedValue(
  mockManagedACTAccessRequirementWikiPageKey,
)

vi.spyOn(
  AccessRequirementListUtils,
  'useCanShowManagedACTWikiInWizard',
).mockReturnValue(true)

const mockCreateSubmission = vi
  .spyOn(SynapseClient, 'submitDataAccessRequest')
  .mockResolvedValue({
    submissionId: mockSubmittedSubmission.id,
    submittedBy: mockSubmittedSubmission.submittedBy,
    state: SubmissionState.SUBMITTED,
    modifiedOn: mockSubmittedSubmission.modifiedOn,
  })

const mockOnHide = vi.fn()
const mockOnCancel = vi.fn()
const mockOnSubmissionCreated = vi.fn()
const mockOnBackClicked = vi.fn()

const defaultProps: DataAccessRequestAccessorsFilesFormProps = {
  researchProjectId: MOCK_RESEARCH_PROJECT_ID,
  managedACTAccessRequirement: mockManagedACTAccessRequirement,
  subjectId: MOCK_FILE_ENTITY_ID,
  subjectType: RestrictableObjectType.ENTITY,
  onHide: mockOnHide,
  onCancel: mockOnCancel,
  onSubmissionCreated: mockOnSubmissionCreated,
  onBackClicked: mockOnBackClicked,
}

function renderComponent(props: DataAccessRequestAccessorsFilesFormProps) {
  const user = userEvent.setup()
  const component = render(<DataAccessRequestAccessorsFilesForm {...props} />, {
    wrapper: createWrapper({ withErrorBoundary: true }),
  })

  return { user, component }
}

const DOWNLOAD_DUC_TEMPLATE_TEXT = 'Download DUC Template'
const UPLOAD_DUC_BUTTON_TEXT = 'Upload Data Use Certificate'
const UPLOAD_IRB_LETTER_BUTTON_TEXT = 'Upload IRB Approval Letter'
const UPLOAD_ATTACHMENT_BUTTON_TEXT = 'Upload Attachment'
const PUBLICATIONS_FIELD_LABEL_TEXT = 'Publication(s)'
const SUMMARY_OF_USE_FIELD_LABEL_TEXT = 'Summary of use'
describe('DataAccessRequestAccessorsFilesForm tests', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('Allows adding and removing an accessor on a request', async () => {
    mockGetDataRequestForUpdate.mockResolvedValue({
      ...MOCK_DATA_ACCESS_REQUEST,
      accessorChanges: [
        { userId: String(MOCK_USER_ID), type: AccessType.GAIN_ACCESS },
      ],
    })
    const { user } = renderComponent(defaultProps)

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
    const interceptedOnSelectUserCallback =
      mockedUserSearchBox.mock.lastCall![0].onChange!
    expect(interceptedOnSelectUserCallback).toBeDefined()
    act(() => {
      interceptedOnSelectUserCallback(
        MOCK_USER_ID_2.toString(),
        mockUserGroupHeader2,
      )
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

    await user.click(removeAccessorButton)

    // Once again, verify that only the current user appears and no remove buttons appear
    await screen.findByText(
      `${mockUserProfileData.firstName} ${mockUserProfileData.lastName}`,
      { exact: false },
    )
    await waitFor(() => {
      expect(
        screen.queryByText(
          `${mockUserProfileData2.firstName} ${mockUserProfileData2.lastName}`,
          { exact: false },
        ),
      ).not.toBeInTheDocument()

      expect(screen.queryByLabelText('Remove user')).not.toBeInTheDocument()
    })
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

    const { user } = renderComponent(defaultProps)

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
    await user.click(revokeOption)

    // No remove buttons should be present, because current users cannot be removed as an accessor
    expect(screen.queryByLabelText('Remove user')).not.toBeInTheDocument()

    // Add user 3
    const interceptedOnSelectUserCallback =
      mockedUserSearchBox.mock.lastCall![0].onChange!
    act(() => {
      interceptedOnSelectUserCallback(
        MOCK_USER_ID_3.toString(),
        mockUserGroupHeader3,
      )
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
    await user.click(submitButton)

    await waitFor(() => {
      expect(mockUpdateDataAccessRequest).toHaveBeenCalled()
      const updatedRequest = mockUpdateDataAccessRequest.mock.lastCall![0]
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
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    const errorMessage = 'Some error happened when getting the request'
    mockGetDataRequestForUpdate.mockRejectedValue(
      new SynapseClientError(
        500,
        errorMessage,
        expect.getState().currentTestName!,
      ),
    )

    renderComponent(defaultProps)

    const alert = await screen.findByRole('alert')
    within(alert).getByText(errorMessage)

    consoleErrorSpy.mockRestore()
  })

  it('should show DUC template and field if required', async () => {
    mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_REQUEST)
    renderComponent({
      ...defaultProps,
      managedACTAccessRequirement: {
        ...mockManagedACTAccessRequirement,
        isDUCRequired: true,
      },
    })

    await screen.findByText(
      'You must list the Synapse user names of all collaborators listed in your Data Use Certificate (DUC).',
    )
    await screen.findByRole('button', { name: DOWNLOAD_DUC_TEMPLATE_TEXT })
    await screen.findByRole('button', { name: UPLOAD_DUC_BUTTON_TEXT })
  })

  it('should not show DUC template and field if not required', () => {
    mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_REQUEST)
    renderComponent({
      ...defaultProps,
      managedACTAccessRequirement: {
        ...mockManagedACTAccessRequirement,
        isDUCRequired: false,
      },
    })

    expect(
      screen.queryByText(
        'You must list the Synapse user names of all collaborators listed in your Data Use Certificate (DUC).',
      ),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: DOWNLOAD_DUC_TEMPLATE_TEXT }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: UPLOAD_DUC_BUTTON_TEXT }),
    ).not.toBeInTheDocument()
  })

  it('should show IRB field if required', async () => {
    mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_REQUEST)
    renderComponent({
      ...defaultProps,
      managedACTAccessRequirement: {
        ...mockManagedACTAccessRequirement,
        isIRBApprovalRequired: true,
      },
    })

    await screen.findByRole('button', { name: UPLOAD_IRB_LETTER_BUTTON_TEXT })
  })

  it('should not show IRB field if not required', () => {
    mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_REQUEST)
    renderComponent({
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
    renderComponent({
      ...defaultProps,
      managedACTAccessRequirement: {
        ...mockManagedACTAccessRequirement,
        areOtherAttachmentsRequired: true,
      },
    })

    await screen.findByRole('button', { name: UPLOAD_ATTACHMENT_BUTTON_TEXT })
  })

  it('should not show attachments if not required', () => {
    mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_REQUEST)
    renderComponent({
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

  it('SWC-7319 - should not show publications and summary of use for a renewal', () => {
    mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_RENEWAL)
    renderComponent(defaultProps)

    expect(
      screen.queryByLabelText(PUBLICATIONS_FIELD_LABEL_TEXT),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByLabelText(SUMMARY_OF_USE_FIELD_LABEL_TEXT),
    ).not.toBeInTheDocument()
  })

  it('should not show publications and summary of use for a request', () => {
    mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_REQUEST)
    renderComponent(defaultProps)

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
    const { user } = renderComponent(defaultProps)

    // Verify that the current user appears
    await screen.findByText(
      `${mockUserProfileData.firstName} ${mockUserProfileData.lastName}`,
      { exact: false },
    )

    // Submit the request so we can inspect the request object
    const submitButton = await screen.findByRole('button', { name: 'Submit' })
    await user.click(submitButton)

    await waitFor(() => {
      expect(mockUpdateDataAccessRequest).toHaveBeenCalled()
      const updatedRequest = mockUpdateDataAccessRequest.mock.lastCall![0]
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
    const { user } = renderComponent(defaultProps)

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
    await user.click(submitButton)

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

  it('Shows the AR wiki', async () => {
    mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_REQUEST)
    renderComponent(defaultProps)
    await screen.findByTestId(MARKDOWN_SYNAPSE_TEST_ID)
    expect(mockMarkdownSynapse).toHaveBeenRenderedWithProps(
      expect.objectContaining({
        wikiId: mockManagedACTAccessRequirementWikiPageKey.wikiPageId,
        ownerId: mockManagedACTAccessRequirementWikiPageKey.ownerObjectId,
        objectType: mockManagedACTAccessRequirementWikiPageKey.ownerObjectType,
      }),
    )
  })

  it('invokes callback when clicking the back button', async () => {
    mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_REQUEST)
    renderComponent(defaultProps)

    const backButton = await screen.findByRole('button', { name: 'Back' })

    await userEvent.click(backButton)

    await waitFor(() => {
      expect(mockOnBackClicked).toHaveBeenCalled()
    })
  })

  describe('when the AR has an eDucTemplateId', () => {
    const eDucProps: DataAccessRequestAccessorsFilesFormProps = {
      ...defaultProps,
      managedACTAccessRequirement: {
        ...mockManagedACTAccessRequirement,
        eDucTemplateId: 'educ-template-123',
      },
    }

    it('renders Signing Official name and email fields', async () => {
      mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_REQUEST)
      renderComponent(eDucProps)

      await screen.findByLabelText(
        /First and last names of your Signing Official/i,
      )
      await screen.findByLabelText(
        /Institutional Email of your Signing Official/i,
      )
    })

    it('keeps Submit disabled until SO name and email are provided', async () => {
      mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_REQUEST)
      const { user } = renderComponent(eDucProps)

      const submitButton = await screen.findByRole('button', { name: 'Submit' })
      expect(submitButton).toBeDisabled()

      const nameField = screen.getByLabelText(
        /First and last names of your Signing Official/i,
      )
      const emailField = screen.getByLabelText(
        /Institutional Email of your Signing Official/i,
      )

      await user.type(nameField, 'Jane Smith')
      expect(submitButton).toBeDisabled()

      await user.type(emailField, 'jane@example.edu')
      await waitFor(() => expect(submitButton).toBeEnabled())
    })

    it('includes signingOfficial in the saved DAR on Submit', async () => {
      mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_REQUEST)
      const { user } = renderComponent(eDucProps)

      const nameField = await screen.findByLabelText(
        /First and last names of your Signing Official/i,
      )
      const emailField = screen.getByLabelText(
        /Institutional Email of your Signing Official/i,
      )

      await user.type(nameField, 'Jane Smith')
      await user.type(emailField, 'jane@example.edu')

      const submitButton = await screen.findByRole('button', { name: 'Submit' })
      await waitFor(() => expect(submitButton).toBeEnabled())
      await user.click(submitButton)

      await waitFor(() => {
        const lastCall = mockUpdateDataAccessRequest.mock.calls.filter(
          call => call[0].signingOfficial,
        )
        expect(lastCall.length).toBeGreaterThan(0)
        const savedRequest = lastCall[lastCall.length - 1][0]
        expect(savedRequest.signingOfficial).toMatchObject({
          name: 'Jane Smith',
          institutionalEmail: 'jane@example.edu',
        })
      })
    })

    it('prefills SO fields from existing DAR', async () => {
      mockGetDataRequestForUpdate.mockResolvedValue({
        ...MOCK_DATA_ACCESS_REQUEST,
        signingOfficial: {
          name: 'Pre-filled Official',
          institutionalEmail: 'prefilled@example.edu',
        },
      })
      renderComponent(eDucProps)

      await waitFor(() => {
        expect(
          screen.getByLabelText(
            /First and last names of your Signing Official/i,
          ),
        ).toHaveValue('Pre-filled Official')
        expect(
          screen.getByLabelText(
            /Institutional Email of your Signing Official/i,
          ),
        ).toHaveValue('prefilled@example.edu')
      })
    })

    it('hides the user search and shows a warning when at the collaborator limit', async () => {
      const cappedAccessorChanges: AccessorChange[] = Array.from(
        { length: EDUC_COLLABORATOR_LIMIT },
        (_, i) => ({
          userId: String(2000 + i),
          type: AccessType.GAIN_ACCESS,
        }),
      )
      mockGetDataRequestForUpdate.mockResolvedValue({
        ...MOCK_DATA_ACCESS_REQUEST,
        accessorChanges: cappedAccessorChanges,
      })

      renderComponent(eDucProps)

      await screen.findByRole('alert')
      expect(screen.getByRole('alert')).toHaveTextContent(
        new RegExp(`maximum of ${EDUC_COLLABORATOR_LIMIT} collaborators`, 'i'),
      )
      expect(screen.queryByTestId('UserSearchBox-MOCK')).not.toBeInTheDocument()
    })

    it('still shows the user search when one below the collaborator limit', async () => {
      const nearCapAccessorChanges: AccessorChange[] = Array.from(
        { length: EDUC_COLLABORATOR_LIMIT - 1 },
        (_, i) => ({
          userId: String(2000 + i),
          type: AccessType.GAIN_ACCESS,
        }),
      )
      mockGetDataRequestForUpdate.mockResolvedValue({
        ...MOCK_DATA_ACCESS_REQUEST,
        accessorChanges: nearCapAccessorChanges,
      })

      renderComponent(eDucProps)

      await screen.findByTestId('UserSearchBox-MOCK')
      expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    })

    it('does not cap collaborators when the AR is not eDUC', async () => {
      const manyAccessorChanges: AccessorChange[] = Array.from(
        { length: EDUC_COLLABORATOR_LIMIT + 5 },
        (_, i) => ({
          userId: String(2000 + i),
          type: AccessType.GAIN_ACCESS,
        }),
      )
      mockGetDataRequestForUpdate.mockResolvedValue({
        ...MOCK_DATA_ACCESS_REQUEST,
        accessorChanges: manyAccessorChanges,
      })

      renderComponent(defaultProps)

      await screen.findByTestId('UserSearchBox-MOCK')
      expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    })

    it('shows "Continue" and calls onEDucContinue instead of submitting when onEDucContinue is set', async () => {
      mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_REQUEST)
      const mockOnEDucContinue = vi.fn()
      const { user } = renderComponent({
        ...eDucProps,
        onEDucContinue: mockOnEDucContinue,
      })

      const nameField = await screen.findByLabelText(
        /First and last names of your Signing Official/i,
      )
      const emailField = screen.getByLabelText(
        /Institutional Email of your Signing Official/i,
      )
      await user.type(nameField, 'Jane Smith')
      await user.type(emailField, 'jane@example.edu')

      const continueButton = await screen.findByRole('button', {
        name: 'Continue',
      })
      await waitFor(() => expect(continueButton).toBeEnabled())
      await user.click(continueButton)

      await waitFor(() => expect(mockOnEDucContinue).toHaveBeenCalledTimes(1))
      expect(mockCreateSubmission).not.toHaveBeenCalled()
    })
  })
})
