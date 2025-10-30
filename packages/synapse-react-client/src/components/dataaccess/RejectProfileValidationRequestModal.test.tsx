import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import { server } from '@/mocks/msw/server'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { VERIFICATION_SUBMISSION_STATE } from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { REJECT_VALIDATION_CANNED_RESPONSES_TABLE } from '@/utils/SynapseConstants'
import { VerificationStateEnum } from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import failOnConsoleError from 'jest-fail-on-console'
import { http } from 'msw'
import { CannedRejectionDialog } from '../CannedRejectionDialog/CannedRejectionDialog'
import {
  DEFAULT_MESSAGE_APPEND,
  DEFAULT_MESSAGE_PREPEND,
  REJECTION_FORM_PROMPT_COPY,
  RejectProfileValidationRequestModal,
  RejectProfileValidationRequestModalProps,
} from './RejectProfileValidationRequestModal'

// Mock the CannedRejectionDialog component
vi.mock('../CannedRejectionDialog/CannedRejectionDialog', () => ({
  CannedRejectionDialog: vi
    .fn()
    .mockImplementation(({ children }) => <div>{children}</div>),
}))

const mockCannedRejectionDialog = vi.mocked(CannedRejectionDialog)

const props: RejectProfileValidationRequestModalProps = {
  verificationSubmissionId: '123',
  currentState: VerificationStateEnum.SUBMITTED,
  tableId: REJECT_VALIDATION_CANNED_RESPONSES_TABLE,
  open: true,
  onClose: vi.fn(),
}

const updateVerificationSubmissionStateSpy = vi.spyOn(
  SynapseClient,
  'updateVerificationSubmissionState',
)

function renderComponent(
  propOverrides?: Partial<RejectProfileValidationRequestModalProps>,
) {
  const user = userEvent.setup()
  const component = render(
    <RejectProfileValidationRequestModal {...props} {...propOverrides} />,
    {
      wrapper: createWrapper(),
    },
  )

  return { user, component }
}

describe('RejectProfileValidationRequestModal', () => {
  failOnConsoleError()
  beforeAll(() => {
    server.listen()
    server.use(
      http.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${VERIFICATION_SUBMISSION_STATE(':id')}`,
        () => {
          return new Response('', { status: 200 })
        },
      ),
    )
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Renders CannedRejectionDialog, which invokes a callback to reject the submission', async () => {
    const { user } = renderComponent()

    await waitFor(() => {
      expect(mockCannedRejectionDialog).toHaveBeenRenderedWithProps({
        open: true,
        defaultMessageAppend: DEFAULT_MESSAGE_APPEND,
        defaultMessagePrefix: DEFAULT_MESSAGE_PREPEND,
        error: null,
        onClose: expect.any(Function),
        onConfirm: expect.any(Function),
        rejectionFormPromptCopy: REJECTION_FORM_PROMPT_COPY,
        tableId: REJECT_VALIDATION_CANNED_RESPONSES_TABLE,
        children: expect.anything(),
      })
    })

    // Verify internal notes field is rendered (by the mock)
    const internalNotes = 'some internal notes'
    const internalNotesTextBox = await screen.findByRole('textbox', {
      name: 'ACT Internal Notes',
    })
    await act(async () => {
      await user.type(internalNotesTextBox, internalNotes)
    })

    // Generate the email using the mocked modal
    const onConfirmCallback =
      mockCannedRejectionDialog.mock.lastCall![0].onConfirm
    const rejectionMessage = 'some rejection reason'
    act(() => {
      onConfirmCallback(rejectionMessage)
    })

    // Verify that we send the rejection request to the server
    await waitFor(() =>
      expect(updateVerificationSubmissionStateSpy).toHaveBeenCalledTimes(1),
    )
    expect(updateVerificationSubmissionStateSpy).toHaveBeenCalledWith(
      props.verificationSubmissionId,
      {
        state: VerificationStateEnum.REJECTED,
        reason: rejectionMessage,
        notes: internalNotes,
      },
      MOCK_ACCESS_TOKEN,
    )
    await waitFor(() => expect(props.onClose).toHaveBeenCalled())
  })

  it('Handles suspending an existing submission', async () => {
    renderComponent({
      currentState: VerificationStateEnum.APPROVED,
    })

    await waitFor(() => {
      expect(mockCannedRejectionDialog).toHaveBeenRenderedWithProps({
        open: true,
        defaultMessageAppend: DEFAULT_MESSAGE_APPEND,
        defaultMessagePrefix: DEFAULT_MESSAGE_PREPEND,
        error: null,
        onClose: expect.any(Function),
        onConfirm: expect.any(Function),
        rejectionFormPromptCopy: REJECTION_FORM_PROMPT_COPY,
        tableId: REJECT_VALIDATION_CANNED_RESPONSES_TABLE,
        children: expect.anything(),
      })
    })

    // Generate the email using the mocked modal
    const onConfirmCallback =
      mockCannedRejectionDialog.mock.lastCall![0].onConfirm
    const rejectionMessage = 'some rejection reason'
    act(() => {
      onConfirmCallback(rejectionMessage)
    })

    // Verify that we send the rejection request to the server
    await waitFor(() =>
      expect(updateVerificationSubmissionStateSpy).toHaveBeenCalledTimes(1),
    )
    expect(updateVerificationSubmissionStateSpy).toHaveBeenCalledWith(
      props.verificationSubmissionId,
      {
        // New state should be SUSPENDED
        state: VerificationStateEnum.SUSPENDED,
        reason: rejectionMessage,
        notes: '',
      },
      MOCK_ACCESS_TOKEN,
    )
    await waitFor(() => expect(props.onClose).toHaveBeenCalled())
  })
})
