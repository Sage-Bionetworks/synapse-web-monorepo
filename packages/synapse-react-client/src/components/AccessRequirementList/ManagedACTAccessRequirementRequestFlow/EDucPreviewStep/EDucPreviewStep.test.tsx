import {
  mockManagedACTAccessRequirement,
  mockManagedACTAccessRequirementWikiPageKey,
} from '@/mocks/accessRequirement/mockAccessRequirements'
import { MOCK_DATA_ACCESS_REQUEST } from '@/mocks/dataaccess/MockDataAccessRequest'
import { server } from '@/mocks/msw/server'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  DATA_ACCESS_REQUEST_PREVIEW,
  DATA_ACCESS_REQUEST_SIGNATURE,
  DATA_ACCESS_REQUEST_SIGNATURE_PRECHECK,
  DATA_ACCESS_REQUEST_SIGNATURE_QUOTA,
} from '@/utils/APIConstants'
import { EDucSignatureStatus } from '@sage-bionetworks/synapse-client'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import MarkdownSynapse from '../../../Markdown/MarkdownSynapse'
import * as AccessRequirementListUtils from '../../AccessRequirementListUtils'
import { ACT_QUOTA_RESET_REQUEST_URL } from '../eDucSignatureUtils'
import { CANCEL_BUTTON_TEXT } from '@/components/ConfirmationDialog/ConfirmationDialog'
import EDucPreviewStep, {
  EDucPreviewStepProps,
  KEEP_EXISTING_DUC_BUTTON_TEXT,
  KEEP_OR_REPLACE_DIALOG_TITLE,
  RESTART_SIGNING_CONFIRM_BUTTON_TEXT,
  RESTART_SIGNING_DIALOG_TITLE,
  SEND_FOR_SIGNATURE_BUTTON_TEXT,
  SEND_NEW_DUC_BUTTON_TEXT,
} from './EDucPreviewStep'

vi.mock('@/utils/hooks/useFetchBlobUrl', () => ({
  useFetchBlobUrl: vi.fn().mockReturnValue({
    blobUrl: 'blob:mockBlobUrl',
    error: undefined,
  }),
}))

vi.mock('../../../Markdown/MarkdownSynapse', () => ({
  __esModule: true,
  default: vi.fn(),
}))
const mockMarkdownSynapse = vi.mocked(MarkdownSynapse)
mockMarkdownSynapse.mockImplementation(() => (
  <div data-testid={'MarkdownSynapseContent'}></div>
))

const mockGetDataRequestForUpdate = vi.spyOn(
  SynapseClient,
  'getDataAccessRequestForUpdate',
)

vi.spyOn(SynapseClient, 'getWikiPageKeyForAccessRequirement').mockResolvedValue(
  mockManagedACTAccessRequirementWikiPageKey,
)
vi.spyOn(
  AccessRequirementListUtils,
  'useCanShowManagedACTWikiInWizard',
).mockReturnValue(true)

const mockOnHide = vi.fn()
const mockOnBackClicked = vi.fn()
const mockOnSendForSignature = vi.fn()
const mockOnManualUpload = vi.fn()

const defaultProps: EDucPreviewStepProps = {
  managedACTAccessRequirement: {
    ...mockManagedACTAccessRequirement,
    eDucTemplateId: 'educ-template-123',
  },
  onHide: mockOnHide,
  onBackClicked: mockOnBackClicked,
  onSendForSignature: mockOnSendForSignature,
  onManualUpload: mockOnManualUpload,
}

function renderComponent(props: EDucPreviewStepProps = defaultProps) {
  const user = userEvent.setup()
  const component = render(<EDucPreviewStep {...props} />, {
    wrapper: createWrapper({ withErrorBoundary: true }),
  })
  return { user, component }
}

const previewEndpoint = `*${DATA_ACCESS_REQUEST_PREVIEW(MOCK_DATA_ACCESS_REQUEST.id)}`
const signatureEndpoint = `*${DATA_ACCESS_REQUEST_SIGNATURE(MOCK_DATA_ACCESS_REQUEST.id)}`
const quotaEndpoint = `*${DATA_ACCESS_REQUEST_SIGNATURE_QUOTA(MOCK_DATA_ACCESS_REQUEST.id)}`
const precheckEndpoint = `*${DATA_ACCESS_REQUEST_SIGNATURE_PRECHECK(MOCK_DATA_ACCESS_REQUEST.id)}`

const MOCK_ENVELOPE_ID = 'docusign-envelope-abc'
const DAR_WITH_IN_FLIGHT_ENVELOPE = {
  ...MOCK_DATA_ACCESS_REQUEST,
  eDucSignatureEnvelopeId: MOCK_ENVELOPE_ID,
}

function successfulPreviewHandler() {
  return http.get(previewEndpoint, () =>
    HttpResponse.json(
      { fileHandleId: 'preview-file-handle-456' },
      { status: 200 },
    ),
  )
}

/**
 * A successful preview handler that counts its calls. GET /preview mints a signature envelope as a
 * server-side side effect, so tests assert on how many times it ran, not just that it ran.
 */
function trackedPreviewHandler() {
  const previewCalls = { count: 0 }
  const handler = http.get(previewEndpoint, () => {
    previewCalls.count += 1
    return HttpResponse.json(
      { fileHandleId: 'preview-file-handle-456' },
      { status: 200 },
    )
  })
  return { previewCalls, handler }
}

function quotaHandler(quota: number, remaining: number) {
  return http.get(quotaEndpoint, () =>
    HttpResponse.json({ quota, remaining }, { status: 200 }),
  )
}

function precheckHandler(canUpdate: boolean) {
  return http.get(precheckEndpoint, () =>
    HttpResponse.json(canUpdate, { status: 200 }),
  )
}

/**
 * The precheck answering as `text/plain` rather than JSON, which the generated client surfaces as
 * the raw string instead of a boolean.
 */
function plainTextPrecheckHandler(canUpdate: boolean) {
  return http.get(
    precheckEndpoint,
    () =>
      new HttpResponse(String(canUpdate), {
        status: 200,
        headers: { 'Content-Type': 'text/plain' },
      }),
  )
}

const PRECHECK_FAILURE_REASON = 'The signature envelope could not be read.'

/**
 * Records every call made to the four endpoints that participate in the send-for-signature
 * sequence, so tests can assert both which calls happened and in what order. `precheck` is
 * the boolean the precheck resolves to, or `'error'` to make the precheck request itself fail.
 */
function trackSignatureCalls(precheck: boolean | 'error' = true) {
  const calls: string[] = []
  const handlers = [
    http.get(precheckEndpoint, () => {
      calls.push('GET precheck')
      return precheck === 'error'
        ? HttpResponse.json(
            { reason: PRECHECK_FAILURE_REASON },
            { status: 400 },
          )
        : HttpResponse.json(precheck, { status: 200 })
    }),
    http.put(signatureEndpoint, () => {
      calls.push('PUT signature')
      return HttpResponse.json<EDucSignatureStatus>({ ducStatus: 'sent' })
    }),
    http.delete(signatureEndpoint, () => {
      calls.push('DELETE signature')
      return new HttpResponse(null, { status: 204 })
    }),
    http.post(signatureEndpoint, () => {
      calls.push('POST signature')
      return HttpResponse.json({ quota: 5, remaining: 4 }, { status: 200 })
    }),
  ]
  return { calls, handlers }
}

async function clickSendForSignature(user: ReturnType<typeof userEvent.setup>) {
  const sendButton = await screen.findByRole('button', {
    name: SEND_FOR_SIGNATURE_BUTTON_TEXT,
  })
  await waitFor(() => expect(sendButton).toBeEnabled())
  await user.click(sendButton)
  return sendButton
}

async function clickDialogButton(
  user: ReturnType<typeof userEvent.setup>,
  name: string,
) {
  const button = await screen.findByRole('button', { name })
  await user.click(button)
  return button
}

/**
 * Finds the remaining-allowance sentence. The count is emphasized, so the sentence spans several
 * text nodes and has to be matched against the paragraph's combined content rather than the direct
 * text children the default matcher sees.
 */
function findAllowanceSentence(sentence: string) {
  return screen.findByText(
    (_content, element) =>
      element?.tagName === 'P' && element.textContent === sentence,
  )
}

describe('EDucPreviewStep', () => {
  beforeAll(() => server.listen())
  // resetHandlers, not restoreHandlers: these tests override the quota and precheck endpoints
  // per case, and `restoreHandlers` leaves `server.use` overrides in place, making the suite
  // order-dependent.
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  beforeEach(() => {
    mockOnHide.mockReset()
    mockOnBackClicked.mockReset()
    mockOnSendForSignature.mockReset()
    mockOnManualUpload.mockReset()
    mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_REQUEST)
  })

  it('shows a loading skeleton while the preview is loading', async () => {
    server.use(http.get(previewEndpoint, () => new Promise<never>(() => {})))
    renderComponent()

    await screen.findByTestId('EDucPreviewStep-loading')
  })

  it('renders the iframe when the preview loads successfully', async () => {
    server.use(successfulPreviewHandler())
    renderComponent()

    const iframe = await screen.findByTitle('eDUC preview')
    expect(iframe).toHaveAttribute('src', 'blob:mockBlobUrl')
  })

  it('shows an error alert when the preview query fails', async () => {
    server.use(
      http.get(previewEndpoint, () =>
        HttpResponse.json({ reason: 'preview failed' }, { status: 500 }),
      ),
    )
    renderComponent()

    await screen.findByText(/couldn't load your DUC preview/i)
    expect(screen.getByText('preview failed')).toBeInTheDocument()
  })

  it('invokes onBackClicked when Back is clicked', async () => {
    server.use(successfulPreviewHandler())
    const { user } = renderComponent()

    const backButton = await screen.findByRole('button', { name: 'Back' })
    await user.click(backButton)

    expect(mockOnBackClicked).toHaveBeenCalledTimes(1)
  })

  it('creates a new envelope without a precheck when no envelope is in flight', async () => {
    const { calls, handlers } = trackSignatureCalls()
    server.use(successfulPreviewHandler(), ...handlers)
    const { user } = renderComponent()

    await clickSendForSignature(user)

    await waitFor(() => expect(mockOnSendForSignature).toHaveBeenCalledTimes(1))
    expect(calls).toEqual(['POST signature'])
  })

  it('shows an error alert and does not advance when signature routing fails', async () => {
    server.use(
      successfulPreviewHandler(),
      http.post(signatureEndpoint, () =>
        HttpResponse.json(
          { reason: 'Required field "institutionalEmail" is missing.' },
          { status: 400 },
        ),
      ),
    )
    const { user } = renderComponent()

    await clickSendForSignature(user)

    await screen.findByText(/couldn't send your DUC for electronic signature/i)
    expect(
      screen.getByText('Required field "institutionalEmail" is missing.'),
    ).toBeInTheDocument()
    expect(mockOnSendForSignature).not.toHaveBeenCalled()
  })

  describe('with an envelope already in flight', () => {
    beforeEach(() => {
      mockGetDataRequestForUpdate.mockResolvedValue(DAR_WITH_IN_FLIGHT_ENVELOPE)
    })

    describe('when the precheck says the envelope can still be updated', () => {
      it('asks the user to choose rather than silently updating', async () => {
        const { calls, handlers } = trackSignatureCalls()
        server.use(successfulPreviewHandler(), ...handlers)
        const { user } = renderComponent()

        await clickSendForSignature(user)

        await screen.findByRole('heading', {
          name: KEEP_OR_REPLACE_DIALOG_TITLE,
        })
        expect(calls).toEqual(['GET precheck'])
        expect(mockOnSendForSignature).not.toHaveBeenCalled()
      })

      it('updates the existing envelope when the user keeps it', async () => {
        const { calls, handlers } = trackSignatureCalls()
        server.use(successfulPreviewHandler(), ...handlers)
        const { user } = renderComponent()

        await clickSendForSignature(user)
        await clickDialogButton(user, KEEP_EXISTING_DUC_BUTTON_TEXT)

        await waitFor(() =>
          expect(mockOnSendForSignature).toHaveBeenCalledTimes(1),
        )
        expect(calls).toEqual(['GET precheck', 'PUT signature'])
      })

      it('voids and recreates the envelope when the user sends a new DUC', async () => {
        const { calls, handlers } = trackSignatureCalls()
        server.use(successfulPreviewHandler(), ...handlers)
        const { user } = renderComponent()

        await clickSendForSignature(user)
        await clickDialogButton(user, SEND_NEW_DUC_BUTTON_TEXT)

        await waitFor(() =>
          expect(mockOnSendForSignature).toHaveBeenCalledTimes(1),
        )
        expect(calls).toEqual([
          'GET precheck',
          'DELETE signature',
          'POST signature',
        ])
      })

      it('makes no further calls when the user cancels', async () => {
        const { calls, handlers } = trackSignatureCalls()
        server.use(successfulPreviewHandler(), ...handlers)
        const { user } = renderComponent()

        await clickSendForSignature(user)
        await clickDialogButton(user, CANCEL_BUTTON_TEXT)

        await waitFor(() =>
          expect(
            screen.queryByRole('heading', {
              name: KEEP_OR_REPLACE_DIALOG_TITLE,
            }),
          ).not.toBeInTheDocument(),
        )
        expect(calls).toEqual(['GET precheck'])
        expect(mockOnSendForSignature).not.toHaveBeenCalled()
      })

      it('offers only the free option when the user is at quota', async () => {
        server.use(
          successfulPreviewHandler(),
          quotaHandler(5, 0),
          precheckHandler(true),
        )
        const { user } = renderComponent()

        await clickSendForSignature(user)

        await screen.findByRole('heading', {
          name: KEEP_OR_REPLACE_DIALOG_TITLE,
        })
        // Keeping the existing DUC spends no routings, so it stays available at quota.
        expect(
          screen.getByRole('button', { name: KEEP_EXISTING_DUC_BUTTON_TEXT }),
        ).toBeEnabled()
        expect(
          screen.getByRole('button', { name: SEND_NEW_DUC_BUTTON_TEXT }),
        ).toBeDisabled()
      })
    })

    it.each([true, false])(
      'trusts a text/plain precheck answering %s',
      async canUpdate => {
        server.use(
          successfulPreviewHandler(),
          quotaHandler(5, 4),
          plainTextPrecheckHandler(canUpdate),
        )
        const { user } = renderComponent()

        await clickSendForSignature(user)

        // The generated client hands back the raw body when the response isn't JSON, so an
        // un-coerced "false" would read as truthy and offer to keep an envelope the server has
        // already ruled out.
        await screen.findByRole('heading', {
          name: canUpdate
            ? KEEP_OR_REPLACE_DIALOG_TITLE
            : RESTART_SIGNING_DIALOG_TITLE,
        })
      },
    )

    it('voids and recreates the envelope when the precheck fails and the user confirms', async () => {
      const { calls, handlers } = trackSignatureCalls(false)
      server.use(successfulPreviewHandler(), quotaHandler(5, 4), ...handlers)
      const { user } = renderComponent()

      await clickSendForSignature(user)

      await screen.findByRole('heading', { name: RESTART_SIGNING_DIALOG_TITLE })
      expect(mockOnSendForSignature).not.toHaveBeenCalled()
      await clickDialogButton(user, RESTART_SIGNING_CONFIRM_BUTTON_TEXT)

      await waitFor(() =>
        expect(mockOnSendForSignature).toHaveBeenCalledTimes(1),
      )
      expect(calls).toEqual([
        'GET precheck',
        'DELETE signature',
        'POST signature',
      ])
    })

    it('makes no further calls when the user declines to restart signing', async () => {
      const { calls, handlers } = trackSignatureCalls(false)
      server.use(successfulPreviewHandler(), quotaHandler(5, 4), ...handlers)
      const { user } = renderComponent()

      await clickSendForSignature(user)

      await screen.findByRole('heading', { name: RESTART_SIGNING_DIALOG_TITLE })
      await clickDialogButton(user, CANCEL_BUTTON_TEXT)

      await waitFor(() =>
        expect(
          screen.queryByRole('heading', {
            name: RESTART_SIGNING_DIALOG_TITLE,
          }),
        ).not.toBeInTheDocument(),
      )
      expect(calls).toEqual(['GET precheck'])
      expect(mockOnSendForSignature).not.toHaveBeenCalled()
    })

    it.each([
      { canUpdate: true, dialogTitle: KEEP_OR_REPLACE_DIALOG_TITLE },
      { canUpdate: false, dialogTitle: RESTART_SIGNING_DIALOG_TITLE },
    ])(
      'reports the remaining monthly allowance in "$dialogTitle"',
      async ({ canUpdate, dialogTitle }) => {
        server.use(
          successfulPreviewHandler(),
          quotaHandler(12, 9),
          precheckHandler(canUpdate),
        )
        const { user } = renderComponent()

        await clickSendForSignature(user)

        await screen.findByRole('heading', { name: dialogTitle })
        await findAllowanceSentence(
          'You can create 9 more electronic DUCs this month.',
        )
      },
    )

    it('singularizes the remaining monthly allowance when one routing is left', async () => {
      server.use(
        successfulPreviewHandler(),
        quotaHandler(12, 1),
        precheckHandler(true),
      )
      const { user } = renderComponent()

      await clickSendForSignature(user)

      await screen.findByRole('heading', {
        name: KEEP_OR_REPLACE_DIALOG_TITLE,
      })
      await findAllowanceSentence(
        'You can create 1 more electronic DUC this month.',
      )
    })

    it('omits the remaining monthly allowance when the quota fetch fails', async () => {
      server.use(
        successfulPreviewHandler(),
        http.get(quotaEndpoint, () =>
          HttpResponse.json(
            { reason: 'quota service unavailable' },
            { status: 500 },
          ),
        ),
        precheckHandler(true),
      )
      const { user } = renderComponent()

      await clickSendForSignature(user)

      await screen.findByRole('heading', {
        name: KEEP_OR_REPLACE_DIALOG_TITLE,
      })
      expect(screen.queryByText(/more electronic DUC/i)).not.toBeInTheDocument()
    })

    it('shows a precheck-specific error and skips the update when the precheck request fails', async () => {
      const { calls, handlers } = trackSignatureCalls('error')
      server.use(successfulPreviewHandler(), ...handlers)
      const { user } = renderComponent()

      await clickSendForSignature(user)

      await screen.findByText(
        /couldn't check the status of your existing signature request/i,
      )
      expect(screen.getByText(PRECHECK_FAILURE_REASON)).toBeInTheDocument()
      expect(calls).toEqual(['GET precheck'])
      expect(mockOnSendForSignature).not.toHaveBeenCalled()
    })

    it('shows an update-specific error and does not advance when the update fails', async () => {
      server.use(
        successfulPreviewHandler(),
        precheckHandler(true),
        http.put(signatureEndpoint, () =>
          HttpResponse.json(
            { reason: 'Envelope recipients could not be corrected.' },
            { status: 400 },
          ),
        ),
      )
      const { user } = renderComponent()

      await clickSendForSignature(user)
      await clickDialogButton(user, KEEP_EXISTING_DUC_BUTTON_TEXT)

      await screen.findByText(
        /couldn't apply your changes to your existing signature request/i,
      )
      expect(
        screen.getByText('Envelope recipients could not be corrected.'),
      ).toBeInTheDocument()
      expect(mockOnSendForSignature).not.toHaveBeenCalled()
    })

    it('shows a void-specific error and does not recreate the envelope when the void fails', async () => {
      let postCallCount = 0
      server.use(
        successfulPreviewHandler(),
        precheckHandler(false),
        http.delete(signatureEndpoint, () =>
          HttpResponse.json(
            { reason: 'Envelope could not be voided.' },
            { status: 400 },
          ),
        ),
        http.post(signatureEndpoint, () => {
          postCallCount += 1
          return HttpResponse.json({ quota: 5, remaining: 4 })
        }),
      )
      const { user } = renderComponent()

      await clickSendForSignature(user)
      await clickDialogButton(user, RESTART_SIGNING_CONFIRM_BUTTON_TEXT)

      await screen.findByText(
        /couldn't cancel your existing signature request/i,
      )
      expect(
        screen.getByText('Envelope could not be voided.'),
      ).toBeInTheDocument()
      expect(postCallCount).toBe(0)
      expect(mockOnSendForSignature).not.toHaveBeenCalled()
    })

    it('does not regenerate the preview when the recreated routing fails after the void', async () => {
      const { previewCalls, handler } = trackedPreviewHandler()
      server.use(
        handler,
        precheckHandler(false),
        http.delete(
          signatureEndpoint,
          () => new HttpResponse(null, { status: 204 }),
        ),
        http.post(signatureEndpoint, () =>
          HttpResponse.json(
            { reason: 'DocuSign rejected the new routing.' },
            { status: 400 },
          ),
        ),
      )
      const { user } = renderComponent()

      await clickSendForSignature(user)
      await clickDialogButton(user, RESTART_SIGNING_CONFIRM_BUTTON_TEXT)

      await screen.findByText(
        /couldn't send your DUC for electronic signature/i,
      )
      // The void already destroyed the envelope; refetching the preview here would mint a
      // replacement the user never asked for and quietly reset the request to draft.
      await waitFor(() => expect(previewCalls.count).toBe(1))
      expect(previewCalls.count).toBe(1)
    })

    it('keeps Send enabled at quota, because correcting an envelope costs no routings', async () => {
      server.use(successfulPreviewHandler(), quotaHandler(5, 0))
      renderComponent()

      const sendButton = await screen.findByRole('button', {
        name: SEND_FOR_SIGNATURE_BUTTON_TEXT,
      })
      await waitFor(() => expect(sendButton).toBeEnabled())
    })

    it('reports the exhausted quota instead of offering to restart signing', async () => {
      const { calls, handlers } = trackSignatureCalls(false)
      server.use(successfulPreviewHandler(), quotaHandler(5, 0), ...handlers)
      const { user } = renderComponent()

      await clickSendForSignature(user)

      await screen.findByText(/used all of your electronic signature requests/i)
      expect(
        screen.getByText(/all 5 of your electronic signature routings/i),
      ).toBeInTheDocument()
      // The quota can only be reset by ACT, so the message has to hand off to their service desk.
      const actLink = screen.getByRole('link', {
        name: /Access and Compliance Team/i,
      })
      expect(actLink).toHaveAttribute('href', ACT_QUOTA_RESET_REQUEST_URL)
      expect(actLink).toHaveAttribute('target', '_blank')
      expect(
        screen.queryByRole('heading', { name: RESTART_SIGNING_DIALOG_TITLE }),
      ).not.toBeInTheDocument()
      expect(calls).toEqual(['GET precheck'])
      expect(mockOnSendForSignature).not.toHaveBeenCalled()
    })
  })

  it('invokes onManualUpload when the Manually print button is clicked', async () => {
    server.use(successfulPreviewHandler())
    const { user } = renderComponent()

    const uploadButton = await screen.findByRole('button', {
      name: 'Manually print and upload PDF',
    })
    await waitFor(() => expect(uploadButton).toBeEnabled())
    await user.click(uploadButton)

    expect(mockOnManualUpload).toHaveBeenCalledTimes(1)
  })

  it('enables the Send-for-signature button when signature quota remains', async () => {
    server.use(successfulPreviewHandler(), quotaHandler(5, 3))
    renderComponent()

    const sendButton = await screen.findByRole('button', {
      name: SEND_FOR_SIGNATURE_BUTTON_TEXT,
    })
    await waitFor(() => expect(sendButton).toBeEnabled())
  })

  it('disables the Send-for-signature button and shows a tooltip when the user is at quota', async () => {
    server.use(successfulPreviewHandler(), quotaHandler(5, 0))
    const { user } = renderComponent()

    const sendButton = await screen.findByRole('button', {
      name: SEND_FOR_SIGNATURE_BUTTON_TEXT,
    })
    await waitFor(() => expect(sendButton).toBeDisabled())

    // Hover the wrapper span so the tooltip fires (MUI Tooltip doesn't listen on disabled buttons).
    await user.hover(sendButton.parentElement!)
    await screen.findByRole('tooltip')
    expect(
      screen.getByText(/all 5 of your electronic signature routings/i),
    ).toBeInTheDocument()
  })

  it('leaves the Send-for-signature button enabled when the quota fetch fails', async () => {
    server.use(
      successfulPreviewHandler(),
      http.get(quotaEndpoint, () =>
        HttpResponse.json(
          { reason: 'quota service unavailable' },
          { status: 500 },
        ),
      ),
    )
    renderComponent()

    const sendButton = await screen.findByRole('button', {
      name: SEND_FOR_SIGNATURE_BUTTON_TEXT,
    })
    await waitFor(() => expect(sendButton).toBeEnabled())
  })
})
