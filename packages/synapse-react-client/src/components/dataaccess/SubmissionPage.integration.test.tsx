import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import SubmissionPage, { SubmissionPageProps } from './SubmissionPage'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import {
  ACCESS_REQUIREMENT_ACL,
  ACCESS_REQUIREMENT_BY_ID,
  ACCESS_REQUIREMENT_WIKI_PAGE_KEY,
  DATA_ACCESS_SUBMISSION_BY_ID,
} from '../../utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../utils/functions/getEndpoint'
import {
  AccessControlList,
  ACCESS_TYPE,
  SubmissionState,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'
import {
  mockApprovedSubmission,
  mockRejectedSubmission,
  mockSubmissions,
  mockSubmittedSubmission,
} from '../../mocks/dataaccess/MockSubmission'
import { mockManagedACTAccessRequirement } from '../../mocks/mockAccessRequirements'
import { rest, server } from '../../mocks/msw/server'
import {
  MOCK_USER_ID,
  MOCK_USER_NAME,
  MOCK_USER_NAME_2,
} from '../../mocks/user/mock_user_profile'
import * as RejectDataAccessRequestModalModule from './RejectDataAccessRequestModal'
import failOnConsoleError from 'jest-fail-on-console'
import { mockActTeam } from '../../mocks/team/mockTeam'

function renderComponent(props: SubmissionPageProps) {
  render(<SubmissionPage {...props} />, {
    wrapper: createWrapper(),
  })
}

const SUBMITTED_SUBMISSION_ID = mockSubmittedSubmission.id
const APPROVED_SUBMISSION_ID = mockApprovedSubmission.id
const REJECTED_SUBMISSION_ID = mockRejectedSubmission.id

const onServerReceivedUpdate = jest.fn()

// Mock links to file handles
jest.mock('../../../src/components/widgets/FileHandleLink', () => ({
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

// Mock the access requirement wiki
jest.mock('../../../src/components/Markdown/MarkdownSynapse', () => ({
  __esModule: true,
  default: () => <div>Wiki Contents...</div>,
}))

// Mock the reject submission modal
const mockRejectDataAccessRequestModal = jest
  .spyOn(RejectDataAccessRequestModalModule, 'default')
  .mockImplementation(() => <div data-testid="RejectDataAccessRequestModal" />)

describe('Submission Page tests', () => {
  failOnConsoleError()
  beforeAll(() => {
    server.listen()

    // Configure MSW
    server.use(
      // Return submission based on ID
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${DATA_ACCESS_SUBMISSION_BY_ID(':id')}`,

        async (req, res, ctx) => {
          const submission = mockSubmissions.find(
            submission => req.params.id === submission.id,
          )
          return res(ctx.status(200), ctx.json(submission))
        },
      ),

      // Return a mocked access requirement
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUIREMENT_BY_ID(':id')}`,

        async (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(mockManagedACTAccessRequirement))
        },
      ),
      // Return a 404 for the AR's ACL (there are no designated reviewers)
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUIREMENT_ACL(':id')}`,

        async (req, res, ctx) => {
          return res(ctx.status(404), ctx.json({ status: 'Not Found' }))
        },
      ),
      // Return a wiki page key for the AR (we'll mock out the actual wiki part)
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}`,

        async (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              wikiPageId: 123,
              ownerObjectId: mockManagedACTAccessRequirement.id,
              ownerObjectType: 'ACCESS_REQUIREMENT',
            }),
          )
        },
      ),
      rest.put(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${DATA_ACCESS_SUBMISSION_BY_ID(':id')}`,
        async (req, res, ctx) => {
          onServerReceivedUpdate(await req.json())
          return res(ctx.status(200))
        },
      ),
    )
  })
  afterEach(() => {
    server.restoreHandlers()
    jest.clearAllMocks()
  })
  afterAll(() => server.close())

  it('Renders all fields', async () => {
    renderComponent({
      submissionId: SUBMITTED_SUBMISSION_ID,
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
    })

    const approveButton = await screen.findByRole('button', { name: 'Approve' })

    await userEvent.click(approveButton)

    // Modal appears
    const confirmationDialog = await screen.findByRole('dialog')
    await within(confirmationDialog).findByText('Approve Request?')
    const approveConfirmButton = await within(confirmationDialog).findByRole(
      'button',
      {
        name: 'Approve',
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
    })

    // The modal is rendered but not shown
    expect(
      screen.queryByTestId('RejectDataAccessRequestModal'),
    ).toBeInTheDocument()
    expect(mockRejectDataAccessRequestModal).toHaveBeenLastCalledWith(
      {
        open: false,
        submissionId: SUBMITTED_SUBMISSION_ID,
        onClose: expect.anything(),
      },
      expect.anything(),
    )

    // Click the reject button
    const rejectButton = await screen.findByRole('button', { name: 'Reject' })
    await userEvent.click(rejectButton)

    // The modal should be shown
    expect(mockRejectDataAccessRequestModal).toHaveBeenLastCalledWith(
      {
        open: true, // !
        submissionId: SUBMITTED_SUBMISSION_ID,
        onClose: expect.anything(),
      },
      expect.anything(),
    )
  })

  it('Does not render action buttons for an APPROVED submission', () => {
    renderComponent({
      submissionId: APPROVED_SUBMISSION_ID,
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
    })

    expect(
      screen.queryByRole('button', { name: 'Approve' }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Reject' }),
    ).not.toBeInTheDocument()
  })

  // Flaky in TravisCI
  it.skip('Renders a user card if the AR has an ACL', async () => {
    // Fetching the AR's ACL will yield a designated reviewer
    server.use(
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUIREMENT_ACL(':id')}`,

        async (req, res, ctx) => {
          const responseBody: AccessControlList = {
            id: '1234',
            resourceAccess: [
              {
                principalId: MOCK_USER_ID,
                accessType: [ACCESS_TYPE.REVIEW_SUBMISSIONS],
              },
            ],
          }
          return res(ctx.status(200), ctx.json(responseBody))
        },
      ),
    )

    renderComponent({
      submissionId: SUBMITTED_SUBMISSION_ID,
    })

    // When an ACL exists, don't show the ACT as the reviewer
    expect(screen.queryByText(mockActTeam.name)).not.toBeInTheDocument()

    // User 1 now appears as the submitter, modifier, an accessor, and the Reviewer
    await waitFor(() =>
      expect(screen.getAllByText('@' + MOCK_USER_NAME)).toHaveLength(4),
    )
  })
})
