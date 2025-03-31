import { mockSubmittedSubmission } from '@/mocks/dataaccess/MockSubmission'
import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import { rest, server } from '@/mocks/msw/server'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { DATA_ACCESS_SUBMISSION_BY_ID } from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { REJECT_SUBMISSION_CANNED_RESPONSES_TABLE } from '@/utils/SynapseConstants'
import { SubmissionState } from '@sage-bionetworks/synapse-types'
import { act, render, waitFor } from '@testing-library/react'
import failOnConsoleError from 'jest-fail-on-console'
import { CannedRejectionDialog } from '../CannedRejectionDialog/CannedRejectionDialog'
import RejectDataAccessRequestModal, {
  DEFAULT_MESSAGE_APPEND,
  DEFAULT_MESSAGE_PREPEND,
  RejectDataAccessRequestModalProps,
  REJECTION_FORM_PROMPT_COPY,
} from './RejectDataAccessRequestModal'

// Mock the CannedRejectionDialog component
jest.mock('../CannedRejectionDialog/CannedRejectionDialog', () => ({
  CannedRejectionDialog: jest.fn().mockImplementation(() => <div />),
}))

const mockCannedRejectionDialog = jest.mocked(CannedRejectionDialog)

const props: RejectDataAccessRequestModalProps = {
  submissionId: mockSubmittedSubmission.id,
  tableId: REJECT_SUBMISSION_CANNED_RESPONSES_TABLE,
  open: true,
  onClose: jest.fn(),
}

const updateSubmissionStatusSpy = jest.spyOn(
  SynapseClient,
  'updateSubmissionStatus',
)

function renderComponent() {
  return render(<RejectDataAccessRequestModal {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('RejectDataAccessRequestModal', () => {
  failOnConsoleError()
  beforeAll(() => {
    server.listen()
    server.use(
      rest.put(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${DATA_ACCESS_SUBMISSION_BY_ID(':id')}`,
        async (req, res, ctx) => {
          return res(ctx.status(200))
        },
      ),
    )
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Renders CannedRejectionDialog, which invokes a callback to update the submission status', async () => {
    renderComponent()

    await waitFor(() => {
      expect(mockCannedRejectionDialog).toHaveBeenCalledWith(
        {
          open: true,
          defaultMessageAppend: DEFAULT_MESSAGE_APPEND,
          defaultMessagePrefix: DEFAULT_MESSAGE_PREPEND,
          error: null,
          onClose: expect.any(Function),
          onConfirm: expect.any(Function),
          rejectionFormPromptCopy: REJECTION_FORM_PROMPT_COPY,
          tableId: REJECT_SUBMISSION_CANNED_RESPONSES_TABLE,
        },
        expect.anything(),
      )
    })

    const onConfirmCallback =
      mockCannedRejectionDialog.mock.lastCall![0].onConfirm

    const rejectionMessage = 'some rejection reason'
    act(() => {
      onConfirmCallback(rejectionMessage)
    })

    // Verify that we send the rejection request to the server
    await waitFor(() =>
      expect(updateSubmissionStatusSpy).toHaveBeenCalledTimes(1),
    )
    expect(updateSubmissionStatusSpy).toHaveBeenCalledWith(
      {
        submissionId: mockSubmittedSubmission.id,
        newState: SubmissionState.REJECTED,
        rejectedReason: rejectionMessage,
      },
      MOCK_ACCESS_TOKEN,
    )
    await waitFor(() => expect(props.onClose).toHaveBeenCalled())
  })
})
