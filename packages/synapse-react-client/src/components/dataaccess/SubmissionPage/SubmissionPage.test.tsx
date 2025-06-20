import AccessRequirementList from '@/components/AccessRequirementList/AccessRequirementList'
import { mockManagedACTAccessRequirement } from '@/mocks/accessRequirement/mockAccessRequirements'
import {
  mockApprovedSubmission,
  mockCancelledSubmission,
  mockRejectedSubmission,
  mockSubmissions,
  mockSubmittedSubmission,
} from '@/mocks/dataaccess/MockSubmission'
import { server } from '@/mocks/msw/server'
import { mockActTeam } from '@/mocks/team/mockTeam'
import {
  MOCK_USER_ID,
  MOCK_USER_ID_2,
  MOCK_USER_ID_3,
  MOCK_USER_NAME,
  MOCK_USER_NAME_2,
  MOCK_USER_NAME_3,
} from '@/mocks/user/mock_user_profile'
import { useGetUserAccessApproval } from '@/synapse-queries/dataaccess/useAccessApprovals'
import {
  getUseQueryErrorMock,
  getUseQueryIdleMock,
  getUseQuerySuccessMock,
} from '@/testutils/ReactQueryMockUtils'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  ACCESS_REQUIREMENT_ACL,
  ACCESS_REQUIREMENT_BY_ID,
  ACCESS_REQUIREMENT_WIKI_PAGE_KEY,
  DATA_ACCESS_SUBMISSION_BY_ID,
} from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  AccessApproval,
  SynapseClientError,
} from '@sage-bionetworks/synapse-client'
import {
  ACCESS_TYPE,
  AccessControlList,
  FileHandleAssociation,
  SubmissionState,
} from '@sage-bionetworks/synapse-types'
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import failOnConsoleError from 'jest-fail-on-console'
import { http, HttpResponse } from 'msw'
import { useNavigate } from 'react-router'
import * as RejectDataAccessRequestModalModule from '../RejectDataAccessRequestModal'
import { CancelDataAccessRequestConfirmationModal } from './CancelDataAccessRequestConfirmationModal'
import SubmissionPage, { SubmissionPageProps } from './SubmissionPage'

function renderComponent(props: SubmissionPageProps) {
  render(<SubmissionPage {...props} />, {
    wrapper: createWrapper(),
  })
}

const SUBMITTED_SUBMISSION_ID = mockSubmittedSubmission.id
const CANCELLED_SUBMISSION_ID = mockCancelledSubmission.id
const APPROVED_SUBMISSION_ID = mockApprovedSubmission.id
const REJECTED_SUBMISSION_ID = mockRejectedSubmission.id

const onServerReceivedUpdate = vi.fn()

vi.mock('react-router')
vi.mock('./CancelDataAccessRequestConfirmationModal')
vi.mock('@/synapse-queries/dataaccess/useAccessApprovals')

vi.mock('@/components/AccessRequirementList/AccessRequirementList')

// Mock links to file handles
vi.mock('../../widgets/FileHandleLink', () => ({
  FileHandleLink: ({
    fileHandleAssociation,
  }: {
    fileHandleAssociation: FileHandleAssociation
  }) => (
    <div data-testid="FileHandleLink">
      {JSON.stringify(fileHandleAssociation)}
    </div>
  ),
}))

vi.mocked(useNavigate).mockReturnValue(vi.fn())

// Mock the access requirement wiki
vi.mock('../../Markdown/MarkdownSynapse', () => ({
  __esModule: true,
  default: () => <div>Wiki Contents...</div>,
}))

// Mock the reject submission modal
const mockRejectDataAccessRequestModal = vi
  .spyOn(RejectDataAccessRequestModalModule, 'default')
  .mockImplementation(() => <div data-testid="RejectDataAccessRequestModal" />)

const mockCancelSubmissionModal = vi
  .mocked(CancelDataAccessRequestConfirmationModal)
  .mockImplementation(() => (
    <div data-testid={'CancelDataAccessRequestConfirmationModal'} />
  ))

const mockAccessRequirementList = vi
  .mocked(AccessRequirementList)
  .mockImplementation(() => {
    return <div data-testid="AccessRequirementList" />
  })

const mockGetUserAccessApproval = vi
  .mocked(useGetUserAccessApproval)
  .mockReturnValue(getUseQueryIdleMock())

const mockAccessApproval: AccessApproval = {
  id: 123,
  etag: '0000-etag',
  createdOn: new Date().toISOString(),
  modifiedOn: new Date().toISOString(),
  createdBy: String(MOCK_USER_ID_2),
  modifiedBy: String(MOCK_USER_ID_2),
  requirementId: mockManagedACTAccessRequirement.id,
  requirementVersion: mockManagedACTAccessRequirement.versionNumber,
  submitterId: String(MOCK_USER_ID),
  accessorId: String(MOCK_USER_ID),
  expiredOn: undefined,
  state: 'APPROVED',
}

describe('Submission Page tests', () => {
  failOnConsoleError()
  beforeAll(() => {
    server.listen()

    // Configure MSW
    server.use(
      // Return submission based on ID
      http.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${DATA_ACCESS_SUBMISSION_BY_ID(':id')}`,

        ({ params }) => {
          const submission = mockSubmissions.find(
            submission => params.id === submission.id,
          )
          return HttpResponse.json(submission, { status: 200 })
        },
      ),

      // Return a mocked access requirement
      http.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUIREMENT_BY_ID(':id')}`,

        () => {
          return HttpResponse.json(mockManagedACTAccessRequirement, {
            status: 200,
          })
        },
      ),
      // Return a 404 for the AR's ACL (there are no designated reviewers)
      http.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUIREMENT_ACL(':id')}`,

        () => {
          return HttpResponse.json({ status: 'Not Found' }, { status: 404 })
        },
      ),
      // Return a wiki page key for the AR (we'll mock out the actual wiki part)
      http.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}`,

        () => {
          return HttpResponse.json(
            {
              wikiPageId: 123,
              ownerObjectId: mockManagedACTAccessRequirement.id,
              ownerObjectType: 'ACCESS_REQUIREMENT',
            },
            { status: 200 },
          )
        },
      ),
      http.put(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${DATA_ACCESS_SUBMISSION_BY_ID(':id')}`,
        async ({ request }) => {
          onServerReceivedUpdate(await request.json())
          return new Response('', { status: 200 })
        },
      ),
    )
  })
  afterEach(() => {
    server.restoreHandlers()
    vi.clearAllMocks()
  })
  afterAll(() => server.close())

  it('Renders all fields', async () => {
    renderComponent({
      submissionId: SUBMITTED_SUBMISSION_ID,
      isReviewer: true,
    })

    await screen.findByText('Status')
    await screen.findByText('SUBMITTED')

    await screen.findByRole('button', { name: 'Approve' })
    await screen.findByRole('button', { name: 'Reject' })

    await screen.findByText('Assigned Reviewer')
    await screen.findByText(mockActTeam.name)

    await screen.findByText('Conditions')
    await screen.findByText('Expiration period: 1 day(s)')

    await screen.findByText('Modified By')
    await screen.findByText('Modified On')

    await screen.findByText('Submitted By')
    await screen.findByText('Submitted On')

    await screen.findByText(
      'Data Requesters (' +
        mockSubmittedSubmission.accessorChanges.length.toString() +
        ')',
    )

    // This username appears three times, in 'submittedBy', 'modifiedBy', and as an accessor
    expect(await screen.findAllByText('@' + MOCK_USER_NAME)).toHaveLength(3)

    // This username only appears as an accessor
    await screen.findByText('@' + MOCK_USER_NAME_2)

    await screen.findByText('Institution')
    await screen.findByText(
      mockSubmittedSubmission.researchProjectSnapshot.institution,
    )

    await screen.findByText('Project Lead')
    await screen.findByText(
      mockSubmittedSubmission.researchProjectSnapshot.projectLead,
    )

    await screen.findByText('Intended Data Use Statement')
    await screen.findByText(
      mockSubmittedSubmission.researchProjectSnapshot.intendedDataUseStatement,
    )

    // The page should show 4 file handle downloads - the IRB, the DUC, and the two additional attachments
    expect(await screen.findAllByTestId('FileHandleLink')).toHaveLength(4)
  })

  it('Allows approving a SUBMITTED submission', async () => {
    renderComponent({
      submissionId: SUBMITTED_SUBMISSION_ID,
      isReviewer: true,
    })

    const approveButton = await screen.findByRole('button', { name: 'Approve' })

    await userEvent.click(approveButton)

    // Modal appears
    const confirmationDialog = await screen.findByRole('dialog')
    await within(confirmationDialog).findByText('Approve Request?')
    const approveConfirmButton = await within(confirmationDialog).findByRole(
      'button',
      {
        name: 'Approve Request',
      },
    )

    await userEvent.click(approveConfirmButton)

    await waitFor(() =>
      expect(onServerReceivedUpdate).toHaveBeenCalledWith(
        expect.objectContaining({
          newState: SubmissionState.APPROVED,
        }),
      ),
    )
    await waitForElementToBeRemoved(confirmationDialog)
  })

  it('Shows the rejection modal', async () => {
    renderComponent({
      submissionId: SUBMITTED_SUBMISSION_ID,
      isReviewer: true,
    })

    // The modal is not rendered
    expect(
      screen.queryByTestId('RejectDataAccessRequestModal'),
    ).not.toBeInTheDocument()
    expect(mockRejectDataAccessRequestModal).not.toHaveBeenCalled()

    // Click the reject button
    const rejectButton = await screen.findByRole('button', { name: 'Reject' })
    await userEvent.click(rejectButton)

    // The modal should be shown
    expect(mockRejectDataAccessRequestModal).toHaveBeenLastRenderedWithProps({
      open: true, // !
      submissionId: SUBMITTED_SUBMISSION_ID,
      onClose: expect.anything(),
    })
  })

  it('Does not render action buttons for an APPROVED submission', () => {
    renderComponent({
      submissionId: APPROVED_SUBMISSION_ID,
      isReviewer: true,
    })

    expect(
      screen.queryByRole('button', { name: 'Approve' }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Reject' }),
    ).not.toBeInTheDocument()
  })

  it('Does not render action buttons for a REJECTED submission', () => {
    renderComponent({
      submissionId: REJECTED_SUBMISSION_ID,
      isReviewer: true,
    })

    expect(
      screen.queryByRole('button', { name: 'Approve' }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Reject' }),
    ).not.toBeInTheDocument()
  })

  it('Renders a user card if the AR has an ACL', async () => {
    // Fetching the AR's ACL will yield a designated reviewer
    server.use(
      http.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUIREMENT_ACL(':id')}`,

        () => {
          const responseBody: AccessControlList = {
            id: '1234',
            resourceAccess: [
              {
                principalId: MOCK_USER_ID,
                accessType: [ACCESS_TYPE.REVIEW_SUBMISSIONS],
              },
              {
                // User 3 should not be shown
                principalId: MOCK_USER_ID_3,
                accessType: [ACCESS_TYPE.EXEMPTION_ELIGIBLE],
              },
            ],
          }
          return HttpResponse.json(responseBody, { status: 200 })
        },
      ),
    )

    renderComponent({
      submissionId: SUBMITTED_SUBMISSION_ID,
      isReviewer: true,
    })

    // User 1 now appears as the submitter, modifier, an accessor, and the Reviewer
    await waitFor(() =>
      expect(screen.getAllByText('@' + MOCK_USER_NAME)).toHaveLength(4),
    )

    // User 3 should not appear - they are not a reviewer
    expect(screen.queryByText('@' + MOCK_USER_NAME_3)).not.toBeInTheDocument()

    // When an ACL exists, don't show the ACT as the reviewer
    expect(screen.queryByText(mockActTeam.name)).not.toBeInTheDocument()
  })

  describe('Viewing page as an accessor', () => {
    it('supports canceling a SUBMITTED request', async () => {
      mockGetUserAccessApproval.mockReturnValue(
        getUseQueryErrorMock(
          new SynapseClientError(
            404,
            'Not found',
            expect.getState().currentTestName!,
          ),
        ),
      )

      renderComponent({
        submissionId: SUBMITTED_SUBMISSION_ID,
        isReviewer: false,
      })

      await screen.findByText('Status')
      await screen.findByText('SUBMITTED')

      const cancelRequestButton = await screen.findByRole('button', {
        name: 'Cancel Request',
      })

      await userEvent.click(cancelRequestButton)

      expect(mockCancelSubmissionModal).toHaveBeenLastRenderedWithProps({
        open: true,
        submissionId: String(SUBMITTED_SUBMISSION_ID),
        accessRequirementId: String(mockManagedACTAccessRequirement.id),
        onClose: expect.any(Function),
      })
      expect(mockAccessRequirementList).not.toHaveBeenCalled()
    })

    it('supports updating an APPROVED and unexpired request', async () => {
      const futureDate = new Date()
      futureDate.setFullYear(futureDate.getFullYear() + 1)
      mockGetUserAccessApproval.mockReturnValue(
        getUseQuerySuccessMock({
          ...mockAccessApproval,
          expiredOn: futureDate.toISOString(),
          state: 'APPROVED',
        }),
      )
      renderComponent({
        submissionId: APPROVED_SUBMISSION_ID,
        isReviewer: false,
      })

      await screen.findByText('Status')
      await screen.findByText('APPROVED')

      const updateRequestButton = await screen.findByRole('button', {
        name: 'Update Request',
      })

      await userEvent.click(updateRequestButton)

      expect(mockAccessRequirementList).toHaveBeenLastRenderedWithProps({
        renderAsModal: true,
        accessRequirementFromProps: [mockManagedACTAccessRequirement],
        onHide: expect.any(Function),
        onSubmissionCreated: expect.any(Function),
      })
      expect(mockCancelSubmissionModal).not.toHaveBeenRenderedWithProps(
        expect.objectContaining({ open: true }),
      )
    })

    it('supports updating an APPROVED and expired request', async () => {
      const pastDate = new Date()
      pastDate.setFullYear(pastDate.getFullYear() - 1)
      mockGetUserAccessApproval.mockReturnValue(
        getUseQuerySuccessMock({
          ...mockAccessApproval,
          expiredOn: pastDate.toISOString(),
          state: 'APPROVED',
        }),
      )
      renderComponent({
        submissionId: APPROVED_SUBMISSION_ID,
        isReviewer: false,
      })

      await screen.findByText('Status')
      await screen.findByText('Expired')

      const updateRequestButton = await screen.findByRole('button', {
        name: 'Update Request',
      })

      await userEvent.click(updateRequestButton)

      expect(mockAccessRequirementList).toHaveBeenLastRenderedWithProps({
        renderAsModal: true,
        accessRequirementFromProps: [mockManagedACTAccessRequirement],
        onHide: expect.any(Function),
        onSubmissionCreated: expect.any(Function),
      })
      expect(mockCancelSubmissionModal).not.toHaveBeenRenderedWithProps(
        expect.objectContaining({ open: true }),
      )
    })

    it('supports updating a CANCELLED request', async () => {
      mockGetUserAccessApproval.mockReturnValue(
        getUseQueryErrorMock(
          new SynapseClientError(
            404,
            'Not found',
            expect.getState().currentTestName!,
          ),
        ),
      )

      renderComponent({
        submissionId: CANCELLED_SUBMISSION_ID,
        isReviewer: false,
      })

      await screen.findByText('Status')
      await screen.findByText('CANCELLED')

      const modifyRequestButton = await screen.findByRole('button', {
        name: 'Modify Request',
      })

      await userEvent.click(modifyRequestButton)

      expect(mockAccessRequirementList).toHaveBeenLastRenderedWithProps({
        renderAsModal: true,
        accessRequirementFromProps: [mockManagedACTAccessRequirement],
        onHide: expect.any(Function),
        onSubmissionCreated: expect.any(Function),
      })
      expect(mockCancelSubmissionModal).not.toHaveBeenRenderedWithProps(
        expect.objectContaining({ open: true }),
      )
    })

    it('supports updating a REJECTED request', async () => {
      const pastDate = new Date()
      pastDate.setFullYear(pastDate.getFullYear() - 1)
      mockGetUserAccessApproval.mockReturnValue(
        getUseQueryErrorMock(
          new SynapseClientError(
            404,
            'Not found',
            expect.getState().currentTestName!,
          ),
        ),
      )

      renderComponent({
        submissionId: REJECTED_SUBMISSION_ID,
        isReviewer: false,
      })

      await screen.findByText('Status')
      await screen.findByText('REJECTED')

      const modifyRequestButton = await screen.findByRole('button', {
        name: 'Modify Request',
      })

      await userEvent.click(modifyRequestButton)

      expect(mockAccessRequirementList).toHaveBeenLastRenderedWithProps({
        renderAsModal: true,
        accessRequirementFromProps: [mockManagedACTAccessRequirement],
        onHide: expect.any(Function),
        onSubmissionCreated: expect.any(Function),
      })
      expect(mockCancelSubmissionModal).not.toHaveBeenRenderedWithProps(
        expect.objectContaining({ open: true }),
      )
    })

    it('hides certain ui elements that should not be shown to accessors', () => {
      renderComponent({
        submissionId: SUBMITTED_SUBMISSION_ID,
        isReviewer: false,
      })

      // approve/reject buttons
      expect(
        screen.queryByRole('button', { name: 'Approve' }),
      ).not.toBeInTheDocument()
      expect(
        screen.queryByRole('button', { name: 'Reject' }),
      ).not.toBeInTheDocument()

      // Assigned reviewer
      expect(screen.queryByText('Assigned Reviewer')).not.toBeInTheDocument()

      // Modified by
      expect(screen.queryByText('Modified By')).not.toBeInTheDocument()
    })
  })
})
