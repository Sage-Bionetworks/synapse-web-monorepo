import AccessRequirementList from '@/components/AccessRequirementList/AccessRequirementList'
import { DiscussionThread } from '@/components/Forum'
import { mockManagedACTAccessRequirement } from '@/mocks/accessRequirement/mockAccessRequirements'
import { mockClinicalSchema } from '@/mocks/accessRequirement/mockJsonSchemas'
import { MOCK_FILE_HANDLE_ID } from '@/mocks/mock_file_handle'
import { getFormTemplateHandlers } from '@/mocks/msw/handlers/formTemplateHandlers'
import { getRegisteredSchemaHandlers } from '@/mocks/msw/handlers/schemaHandlers'
import { SubmissionWithFormTemplateRef } from '@/synapse-queries/dataaccess/useGeneratedSubmissionForm'
import { SUBMISSION_CONTEXT_PROPERTY } from '@/utils/jsonschema/submissionContext'
import { JSONSchema7 } from 'json-schema'
import { OTHER_RESPONSES_TITLE } from './SubmissionSchemaAnswers'
import {
  mockApprovedSubmission,
  mockCancelledSubmission,
  mockRejectedSubmission,
  mockSchemaDataAndFirstClassSubmission,
  mockSchemaDataSubmission,
  mockSubmissions,
  mockSubmittedSubmission,
} from '@/mocks/dataaccess/MockSubmission'
import { server } from '@/mocks/msw/server'
import { generateDiscussionThreadBundle } from '@/mocks/faker/generateDiscussion'
import { mockActTeam } from '@/mocks/team/mockTeam'
import {
  MOCK_USER_ID,
  MOCK_USER_ID_2,
  MOCK_USER_ID_3,
  MOCK_USER_NAME,
  MOCK_USER_NAME_2,
  MOCK_USER_NAME_3,
} from '@/mocks/user/mock_user_profile'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  ACCESS_REQUIREMENT_ACL,
  ACCESS_REQUIREMENT_BY_ID,
  ACCESS_REQUIREMENT_WIKI_PAGE_KEY,
  DATA_ACCESS_SUBMISSION_BY_ID,
  THREAD_FOR_SUBMISSION,
  USER_PROFILE,
} from '@/utils/APIConstants'
import { formatDate } from '@/utils/functions/DateFormatter'
import dayjs from 'dayjs'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { AccessApproval } from '@sage-bionetworks/synapse-client'
import {
  ACCESS_TYPE,
  AccessControlList,
  FileHandleAssociateType,
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
import { delay, http, HttpResponse } from 'msw'
import type { MockInstance } from 'vitest'
import { useNavigate } from 'react-router'
import * as RejectDataAccessRequestModalModule from '../RejectDataAccessRequestModal'
import { CancelDataAccessRequestConfirmationModal } from './CancelDataAccessRequestConfirmationModal'
import SubmissionPage, {
  SUBMISSION_PRINT_TITLE,
  SubmissionPageProps,
} from './SubmissionPage'

function renderComponent(props: SubmissionPageProps) {
  render(<SubmissionPage {...props} />, {
    wrapper: createWrapper(),
  })
}

/** The value the submission details list gives for `label` */
function getSubmissionDetail(label: string) {
  const index = screen
    .getAllByRole('term')
    .findIndex(term => term.textContent === label)
  return screen.getAllByRole('definition')[index]
}

const SUBMITTED_SUBMISSION_ID = mockSubmittedSubmission.id
const CANCELLED_SUBMISSION_ID = mockCancelledSubmission.id
const APPROVED_SUBMISSION_ID = mockApprovedSubmission.id
const REJECTED_SUBMISSION_ID = mockRejectedSubmission.id

const onServerReceivedUpdate = vi.fn()

vi.mock('react-router')
vi.mock('./CancelDataAccessRequestConfirmationModal')

vi.mock('@/components/AccessRequirementList/AccessRequirementList')

vi.mock('@/components/Forum', () => ({
  DiscussionThread: vi.fn(),
}))

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

const mockDiscussionThread = vi
  .mocked(DiscussionThread)
  .mockImplementation(() => <div data-testid="DiscussionThread" />)

const USER_ACCESS_APPROVAL_PATH = (submissionId: string | number) =>
  `${DATA_ACCESS_SUBMISSION_BY_ID(submissionId)}/userAccessApproval`

function mockUserAccessApprovalResponse(accessApproval: AccessApproval) {
  server.use(
    http.get(
      `${getEndpoint(
        BackendDestinationEnum.REPO_ENDPOINT,
      )}${USER_ACCESS_APPROVAL_PATH(':id')}`,
      () => HttpResponse.json(accessApproval, { status: 200 }),
    ),
  )
}

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
  beforeEach(() => {
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
      // By default, the user has no access approval
      http.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${USER_ACCESS_APPROVAL_PATH(':id')}`,
        () =>
          HttpResponse.json(
            { reason: 'No access approval found' },
            { status: 404 },
          ),
      ),
      // By default, the submission has no associated thread
      http.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${THREAD_FOR_SUBMISSION(':id')}`,
        () =>
          HttpResponse.json(
            { reason: 'No thread found for submission' },
            { status: 404 },
          ),
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
    vi.clearAllMocks()
  })

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

    // Named in full three times: as the submitter, the modifier, and a data requester
    expect(
      await screen.findAllByText(`First Last (@${MOCK_USER_NAME})`),
    ).toHaveLength(3)

    // Only a data requester
    await screen.findByText(`John Doe (@${MOCK_USER_NAME_2})`)

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

    const approveButton = await screen.findByRole('button', {
      name: 'Approve',
    })

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

    // Only the reviewer card shows User 1 by username alone; elsewhere they are named in full
    await waitFor(() =>
      expect(screen.getAllByText('@' + MOCK_USER_NAME)).toHaveLength(1),
    )

    // User 3 should not appear - they are not a reviewer
    expect(screen.queryByText('@' + MOCK_USER_NAME_3)).not.toBeInTheDocument()

    // When an ACL exists, don't show the ACT as the reviewer
    expect(screen.queryByText(mockActTeam.name)).not.toBeInTheDocument()
  })

  describe('Download PDF', () => {
    const repoEndpoint = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
    const pageTitle = 'Synapse'
    let titleWhilePrinting: string | undefined
    let printSpy: MockInstance<Window['print']>

    beforeEach(() => {
      document.title = pageTitle
      titleWhilePrinting = undefined
      printSpy = vi.spyOn(window, 'print').mockImplementation(() => {
        titleWhilePrinting = document.title
      })
    })
    afterEach(() => {
      printSpy.mockRestore()
    })

    it.each([
      { viewer: 'reviewer', isReviewer: true },
      { viewer: 'requester', isReviewer: false },
    ])(
      'prints the loaded submission for a $viewer, titled so the PDF is named for it',
      async ({ isReviewer }) => {
        renderComponent({ submissionId: SUBMITTED_SUBMISSION_ID, isReviewer })

        const downloadButton = await screen.findByRole('button', {
          name: 'Download PDF',
        })
        await waitFor(() => expect(downloadButton).toBeEnabled())

        await userEvent.click(downloadButton)
        expect(printSpy).toHaveBeenCalledOnce()
        expect(titleWhilePrinting).toBe(
          `${SUBMISSION_PRINT_TITLE} ${SUBMITTED_SUBMISSION_ID}`,
        )

        window.dispatchEvent(new Event('afterprint'))
        expect(document.title).toBe(pageTitle)
      },
    )

    // Each case stalls one request the printout needs, once everything else it waits for has loaded.
    it.each([
      {
        stalled: 'the current user profile',
        submissionId: SUBMITTED_SUBMISSION_ID,
        isReviewer: true,
        path: USER_PROFILE,
        loaded: `${mockManagedACTAccessRequirement.name} (${mockSubmittedSubmission.accessRequirementId})`,
      },
      {
        stalled: 'the access requirement',
        submissionId: SUBMITTED_SUBMISSION_ID,
        isReviewer: true,
        path: ACCESS_REQUIREMENT_BY_ID(':id'),
        loaded: 'Submission ID',
      },
      {
        stalled: "the requester's access approval",
        submissionId: APPROVED_SUBMISSION_ID,
        isReviewer: false,
        path: USER_ACCESS_APPROVAL_PATH(':id'),
        loaded: `${mockManagedACTAccessRequirement.name} (${mockApprovedSubmission.accessRequirementId})`,
      },
      {
        stalled: 'the form template',
        submissionId: mockSchemaDataSubmission.id,
        isReviewer: true,
        path: '/repo/v1/accessRequirement/formTemplate/*',
        loaded: `${mockManagedACTAccessRequirement.name} (${mockSchemaDataSubmission.accessRequirementId})`,
      },
    ])(
      'keeps Download PDF disabled while $stalled is loading',
      async ({ submissionId, isReviewer, path, loaded }) => {
        server.use(
          ...getFormTemplateHandlers(repoEndpoint),
          ...getRegisteredSchemaHandlers(repoEndpoint, [
            mockClinicalSchema as JSONSchema7,
          ]),
          http.get(`${repoEndpoint}${path}`, () => delay('infinite')),
        )
        renderComponent({ submissionId, isReviewer })

        await screen.findByText(loaded)
        expect(
          screen.getByRole('button', { name: 'Download PDF' }),
        ).toBeDisabled()
      },
    )

    it('keeps Download PDF disabled while the submission is loading', async () => {
      server.use(
        http.get(`${repoEndpoint}${DATA_ACCESS_SUBMISSION_BY_ID(':id')}`, () =>
          delay('infinite'),
        ),
      )
      renderComponent({
        submissionId: SUBMITTED_SUBMISSION_ID,
        isReviewer: true,
      })

      expect(
        await screen.findByRole('button', { name: 'Download PDF' }),
      ).toBeDisabled()
    })
  })

  it('shows the submission ID, submitter, submission date and each requester with their access change', async () => {
    renderComponent({
      submissionId: SUBMITTED_SUBMISSION_ID,
      isReviewer: false,
    })

    await screen.findByText(
      `${mockManagedACTAccessRequirement.name} (${mockSubmittedSubmission.accessRequirementId})`,
    )
    expect(getSubmissionDetail('Submission ID')).toHaveTextContent(
      SUBMITTED_SUBMISSION_ID,
    )
    expect(getSubmissionDetail('Submitted On')).toHaveTextContent(
      formatDate(dayjs(mockSubmittedSubmission.submittedOn)),
    )
    await waitFor(() =>
      expect(getSubmissionDetail('Submitted By')).toHaveTextContent(
        `First Last (@${MOCK_USER_NAME})`,
      ),
    )
    await waitFor(() =>
      expect(
        getSubmissionDetail(
          `Data Requesters (${mockSubmittedSubmission.accessorChanges.length})`,
        ),
      ).toHaveTextContent(`John Doe (@${MOCK_USER_NAME_2})Gain`),
    )
  })

  describe('Viewing page as an accessor', () => {
    it('supports canceling a SUBMITTED request', async () => {
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
      mockUserAccessApprovalResponse({
        ...mockAccessApproval,
        expiredOn: futureDate.toISOString(),
        state: 'APPROVED',
      })
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
      mockUserAccessApprovalResponse({
        ...mockAccessApproval,
        expiredOn: pastDate.toISOString(),
        state: 'APPROVED',
      })
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

    it('renders the Discussion section when the submission has an associated thread', async () => {
      const thread = generateDiscussionThreadBundle({
        forumId: 'test-forum-id',
        projectId: 'test-project-id',
      })
      server.use(
        http.get(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${THREAD_FOR_SUBMISSION(':id')}`,
          () => HttpResponse.json(thread, { status: 200 }),
        ),
      )

      renderComponent({
        submissionId: SUBMITTED_SUBMISSION_ID,
        isReviewer: false,
      })

      await screen.findByTestId('DiscussionThread')
      expect(mockDiscussionThread).toHaveBeenLastRenderedWithProps(
        expect.objectContaining({ threadId: thread.id }),
      )
    })

    it('does not render the Discussion section when there is no associated thread', async () => {
      renderComponent({
        submissionId: SUBMITTED_SUBMISSION_ID,
        isReviewer: false,
      })

      await screen.findByText('SUBMITTED')
      expect(screen.queryByTestId('DiscussionThread')).not.toBeInTheDocument()
      expect(mockDiscussionThread).not.toHaveBeenCalled()
    })

    it('hides certain ui elements that should not be shown to accessors', async () => {
      renderComponent({
        submissionId: SUBMITTED_SUBMISSION_ID,
        isReviewer: false,
      })

      // Wait for the submission details, which include Modified By for a reviewer
      await screen.findByText('Submitted By')

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

  describe('Schema-driven submissions', () => {
    const repoEndpoint = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

    let servedSubmission: SubmissionWithFormTemplateRef | undefined

    beforeEach(() => {
      servedSubmission = undefined
      server.use(
        // Falls through to the suite-wide handler unless a test serves its own submission
        http.get(`${repoEndpoint}${DATA_ACCESS_SUBMISSION_BY_ID(':id')}`, () =>
          servedSubmission
            ? HttpResponse.json(servedSubmission, { status: 200 })
            : undefined,
        ),
        ...getFormTemplateHandlers(repoEndpoint),
        ...getRegisteredSchemaHandlers(repoEndpoint, [
          mockClinicalSchema as JSONSchema7,
        ]),
      )
    })

    function serveSubmission(submission: SubmissionWithFormTemplateRef) {
      servedSubmission = submission
    }

    it('renders schemaData answers labelled and grouped by template step, in order', async () => {
      renderComponent({
        submissionId: mockSchemaDataSubmission.id,
        isReviewer: true,
      })

      const formResponses = (
        await screen.findByRole('heading', { name: 'Form Responses' })
      ).closest('section')!
      const stepHeadings = await within(formResponses).findAllByRole(
        'heading',
        { level: 3 },
      )
      expect(stepHeadings.map(h => h.textContent)).toEqual([
        'Project Details',
        'Compliance',
      ])

      const projectDetails = stepHeadings[0].closest('section')!
      within(projectDetails).getByText('Project Title')
      within(projectDetails).getByText('Longitudinal Biomarker Study')
      within(projectDetails).getByText('Data Use Purpose')
      within(projectDetails).getByText('Research')

      // Renewal-only field is omitted for an initial request
      expect(screen.queryByText('IRB Approval Number')).not.toBeInTheDocument()
    })

    it('renders file answers as downloads associated with the submission', async () => {
      renderComponent({
        submissionId: mockSchemaDataSubmission.id,
        isReviewer: true,
      })

      const compliance = (
        await screen.findByRole('heading', { name: 'Compliance' })
      ).closest('section')!
      const fileLink = within(compliance).getByTestId('FileHandleLink')
      expect(JSON.parse(fileLink.textContent ?? '')).toEqual({
        fileHandleId: String(MOCK_FILE_HANDLE_ID),
        associateObjectId: mockSchemaDataSubmission.id,
        associateObjectType:
          FileHandleAssociateType.DataAccessSubmissionAttachment,
      })
    })

    it('lists a schema-driven submission’s attachments that are not form answers under Other Attachments', async () => {
      serveSubmission({
        ...mockSchemaDataSubmission,
        attachments: [String(MOCK_FILE_HANDLE_ID), '555'],
      })
      renderComponent({
        submissionId: mockSchemaDataSubmission.id,
        isReviewer: true,
      })

      const otherAttachments = (
        await screen.findByText('Other Attachments')
      ).closest('section')!
      const links = within(otherAttachments).getAllByTestId('FileHandleLink')
      expect(
        links.map(
          link =>
            (JSON.parse(link.textContent ?? '') as FileHandleAssociation)
              .fileHandleId,
        ),
      ).toEqual(['555'])
    })

    it('does not list a schema-driven submission’s files twice', async () => {
      serveSubmission({
        ...mockSchemaDataSubmission,
        attachments: [String(MOCK_FILE_HANDLE_ID)],
      })
      renderComponent({
        submissionId: mockSchemaDataSubmission.id,
        isReviewer: true,
      })

      const compliance = (
        await screen.findByRole('heading', { name: 'Compliance' })
      ).closest('section')!
      await within(compliance).findByTestId('FileHandleLink')
      expect(screen.getAllByTestId('FileHandleLink')).toHaveLength(1)
      expect(screen.queryByText('Other Attachments')).not.toBeInTheDocument()
    })

    it('omits research project fields when the submission has no research project snapshot', async () => {
      renderComponent({
        submissionId: mockSchemaDataSubmission.id,
        isReviewer: true,
      })

      await screen.findByText('Longitudinal Biomarker Study')
      expect(screen.queryByText('Institution')).not.toBeInTheDocument()
      expect(screen.queryByText('Project Lead')).not.toBeInTheDocument()
    })

    it('renders both first-class fields and schemaData answers when both are present', async () => {
      renderComponent({
        submissionId: mockSchemaDataAndFirstClassSubmission.id,
        isReviewer: true,
      })

      await screen.findByText(
        mockSchemaDataAndFirstClassSubmission.researchProjectSnapshot
          .institution,
      )
      await screen.findByText('Intended Data Use Statement')
      // Renewal-only field is included for a renewal
      await screen.findByText('IRB Approval Number')
      screen.getByText('IRB-2026-0042')
    })

    it('does not render a form responses section for a submission without schemaData', async () => {
      renderComponent({
        submissionId: SUBMITTED_SUBMISSION_ID,
        isReviewer: true,
      })

      await screen.findByText('Intended Data Use Statement')
      expect(
        screen.queryByRole('heading', { name: 'Form Responses' }),
      ).not.toBeInTheDocument()
    })

    it('renders no form responses section for empty schemaData', async () => {
      serveSubmission({ ...mockSchemaDataSubmission, schemaData: {} })
      renderComponent({
        submissionId: mockSchemaDataSubmission.id,
        isReviewer: true,
      })

      await screen.findByRole('button', { name: 'Approve' })
      expect(
        screen.queryByRole('heading', { name: 'Form Responses' }),
      ).not.toBeInTheDocument()
    })

    it('omits the Documents heading when a schema-driven submission has no first-class documents', async () => {
      renderComponent({
        submissionId: mockSchemaDataSubmission.id,
        isReviewer: true,
      })

      await screen.findByRole('heading', { name: 'Form Responses' })
      expect(
        screen.queryByRole('heading', { name: 'Documents' }),
      ).not.toBeInTheDocument()
    })

    it('keeps the Documents heading for a ManagedACT submission', async () => {
      renderComponent({
        submissionId: SUBMITTED_SUBMISSION_ID,
        isReviewer: true,
      })

      await screen.findByRole('heading', { name: 'Documents' })
    })

    it('collapses the Access Requirement Wiki by default and shows it when expanded', async () => {
      const user = userEvent.setup()
      renderComponent({
        submissionId: SUBMITTED_SUBMISSION_ID,
        isReviewer: true,
      })

      const wikiToggle = await screen.findByRole('button', {
        name: 'Access Requirement Wiki',
      })
      expect(wikiToggle).toHaveAttribute('aria-expanded', 'false')
      expect(screen.queryByText('Wiki Contents...')).not.toBeInTheDocument()

      await user.click(wikiToggle)

      expect(wikiToggle).toHaveAttribute('aria-expanded', 'true')
      expect(await screen.findByText('Wiki Contents...')).toBeVisible()
    })

    it('lists answers that are not placed in a template step under Other responses', async () => {
      serveSubmission({
        ...mockSchemaDataSubmission,
        schemaData: {
          ...mockSchemaDataSubmission.schemaData,
          legacyAnswer: 'Kept from an earlier schema',
        },
      })
      renderComponent({
        submissionId: mockSchemaDataSubmission.id,
        isReviewer: true,
      })

      const otherResponses = (
        await screen.findByRole('heading', { name: OTHER_RESPONSES_TITLE })
      ).closest('section')!
      within(otherResponses).getByText('legacyAnswer')
      within(otherResponses).getByText('Kept from an earlier schema')
      expect(
        within(otherResponses).queryByText(SUBMISSION_CONTEXT_PROPERTY),
      ).not.toBeInTheDocument()
    })

    it('shows an error alongside the answers listed by key, and keeps review actions, when the template cannot be loaded', async () => {
      serveSubmission({
        ...mockSchemaDataSubmission,
        formTemplateRef: { templateId: 'missing', templateVersionNumber: 1 },
      } satisfies SubmissionWithFormTemplateRef)
      renderComponent({
        submissionId: mockSchemaDataSubmission.id,
        isReviewer: true,
      })

      const formResponses = (
        await screen.findByRole('heading', { name: 'Form Responses' })
      ).closest('section')!
      await within(formResponses).findByRole('alert')
      const otherResponses = within(formResponses)
        .getByRole('heading', { name: OTHER_RESPONSES_TITLE })
        .closest('section')!
      within(otherResponses).getByText('projectTitle')
      within(otherResponses).getByText('Longitudinal Biomarker Study')
      screen.getByRole('button', { name: 'Approve' })
      screen.getByRole('button', { name: 'Reject' })
    })

    it('lists every attachment when the template cannot be loaded, since the answers then show no links', async () => {
      serveSubmission({
        ...mockSchemaDataSubmission,
        attachments: [String(MOCK_FILE_HANDLE_ID), '555'],
        formTemplateRef: { templateId: 'missing', templateVersionNumber: 1 },
      } satisfies SubmissionWithFormTemplateRef)
      renderComponent({
        submissionId: mockSchemaDataSubmission.id,
        isReviewer: true,
      })

      const otherAttachments = (
        await screen.findByText('Other Attachments')
      ).closest('section')!
      expect(
        within(otherAttachments).getAllByTestId('FileHandleLink'),
      ).toHaveLength(2)
    })

    it('approves a schema-driven submission the same way as a ManagedACT submission', async () => {
      renderComponent({
        submissionId: mockSchemaDataSubmission.id,
        isReviewer: true,
      })

      await userEvent.click(
        await screen.findByRole('button', { name: 'Approve' }),
      )
      const confirmationDialog = await screen.findByRole('dialog')
      await userEvent.click(
        within(confirmationDialog).getByRole('button', {
          name: 'Approve Request',
        }),
      )

      await waitFor(() =>
        expect(onServerReceivedUpdate).toHaveBeenCalledWith(
          expect.objectContaining({
            submissionId: mockSchemaDataSubmission.id,
            newState: SubmissionState.APPROVED,
          }),
        ),
      )
    })

    it('opens the rejection modal for a schema-driven submission the same way as a ManagedACT submission', async () => {
      renderComponent({
        submissionId: mockSchemaDataSubmission.id,
        isReviewer: true,
      })

      await userEvent.click(
        await screen.findByRole('button', { name: 'Reject' }),
      )

      expect(mockRejectDataAccessRequestModal).toHaveBeenLastRenderedWithProps({
        open: true,
        submissionId: mockSchemaDataSubmission.id,
        onClose: expect.anything(),
      })
    })
  })
})
