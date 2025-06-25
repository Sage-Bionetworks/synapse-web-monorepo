import mockProject from '@/mocks/entity/mockProject'
import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { webhookService } from '@/mocks/msw/handlers/webhookHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions/index'
import {
  ErrorResponseCode,
  SynapseObjectType,
  VerifyWebhookResponse,
  WebhookToJSON,
  WebhookVerificationStatus,
} from '@sage-bionetworks/synapse-client'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import * as ToastMessageModule from '../ToastMessage/ToastMessage'
import WebhookDashboard from './WebhookDashboard'

const displayToastSpy = vi.spyOn(ToastMessageModule, 'displayToast')

async function renderComponent() {
  const user = userEvent.setup()
  render(<WebhookDashboard />, { wrapper: createWrapper() })

  const createWebhookButton = await screen.findByRole('button', {
    name: 'Create Webhook',
  })
  return { user, createWebhookButton }
}

async function submitVerificationCodeForWebhook(
  user: ReturnType<typeof userEvent.setup>,
) {
  const verifyCodeButton = await screen.findByRole('button', {
    name: 'Verify code',
  })
  await user.click(verifyCodeButton)
  const verifyCodeDialog = await screen.findByRole('dialog')
  const verificationCodeInput = within(verifyCodeDialog).getByRole('textbox', {
    name: 'Verification code',
  })
  await user.type(verificationCodeInput, '123456')
  const verifyCodeDialogButton = within(verifyCodeDialog).getByRole('button', {
    name: 'Verify',
  })
  await user.click(verifyCodeDialogButton)
  return verifyCodeDialogButton
}

async function createWebhook(user: ReturnType<typeof userEvent.setup>) {
  const createWebhookDialog = await screen.findByRole('dialog')

  const entityIdInput = within(createWebhookDialog).getByRole('textbox', {
    name: 'Entity ID',
  })
  await user.type(entityIdInput, mockProject.id)
  const createEventsCheckbox = within(createWebhookDialog).getByRole(
    'checkbox',
    { name: 'Create' },
  )
  await user.click(createEventsCheckbox)
  const endpointInput = within(createWebhookDialog).getByRole('textbox', {
    name: 'Endpoint',
  })
  await user.type(endpointInput, 'https://example.com/events')
  const createButton = within(createWebhookDialog).getByRole('button', {
    name: 'Create Webhook',
  })
  await user.click(createButton)
}

describe('WebhookDashboard', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  beforeEach(() => {
    webhookService.clear()
  })

  it('Allows creating, verifying, updating, and deleting a webhook', async () => {
    const { user, createWebhookButton } = await renderComponent()
    await screen.findByText(/You have not created any webhooks/)

    // Create a webhook
    await user.click(createWebhookButton)
    await createWebhook(user)

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      expect(screen.getAllByRole('row')).toHaveLength(2)
    })

    // Verify the webhook
    const verifyCodeDialogButton = await submitVerificationCodeForWebhook(user)

    await waitFor(() => {
      expect(verifyCodeDialogButton).not.toBeInTheDocument()
      expect(screen.getByText('Verified')).toBeInTheDocument()
    })

    // Update the webhook
    await user.click(screen.getByRole('button', { name: 'Edit' }))
    const editWebhookDialog = await screen.findByRole('dialog')
    // Verify the 'Danger Zone' appears
    within(editWebhookDialog).getByText(/danger zone/i)
    await user.click(
      within(editWebhookDialog).getByRole('checkbox', { name: 'Update' }),
    )
    const updateButton = within(editWebhookDialog).getByRole('button', {
      name: 'Update Webhook',
    })
    await user.click(updateButton)

    await waitFor(() => {
      expect(editWebhookDialog).not.toBeInTheDocument()
    })

    // Delete the webhook
    await user.click(screen.getByRole('button', { name: 'Edit' }))
    const deleteButton = await screen.findByRole('button', {
      name: 'Delete Webhook',
    })
    await user.click(deleteButton)
    const deleteDialog = await screen.findByRole('dialog', {
      name: 'Confirm Delete Webhook?',
    })
    const confirmDeleteButton = within(deleteDialog).getByRole('button', {
      name: 'Delete',
    })
    await user.click(confirmDeleteButton)

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      screen.getByText(/You have not created any webhooks/)
      expect(screen.queryByRole('row')).not.toBeInTheDocument()
    })
  })

  it('Allows requesting a new verification code when the verification status is FAILED', async () => {
    // Preload the mock service to return a webhook with verification status FAILED
    webhookService.clear()
    webhookService.create(
      WebhookToJSON({
        objectId: mockProject.id,
        objectType: SynapseObjectType.ENTITY,
        eventTypes: new Set(['CREATE']),
        verificationStatus: WebhookVerificationStatus.FAILED,
      }),
    )

    const sendVerificationCodeSpy = vi.spyOn(
      MOCK_CONTEXT_VALUE.synapseClient.webhookServicesClient,
      'putRepoV1WebhookWebhookIdVerificationCode',
    )

    const { user } = await renderComponent()
    await screen.findByText(/Failed/)
    const resendCodeButton = await screen.findByRole('button', {
      name: 'Resend code',
    })
    await user.click(resendCodeButton)

    await waitFor(() => {
      expect(sendVerificationCodeSpy).toHaveBeenCalled()
    })
  })

  it('Shows an error when verification fails due to code expiration', async () => {
    // Preload the mock service to return a webhook waiting for verification
    webhookService.create(
      WebhookToJSON({
        objectId: mockProject.id,
        objectType: SynapseObjectType.ENTITY,
        eventTypes: new Set(['CREATE']),
        verificationStatus: WebhookVerificationStatus.CODE_SENT,
      }),
    )

    // When the verification code is expired, the server will return a 200 code, but the response will indicate that the verification failed
    const failureResponse: VerifyWebhookResponse = {
      isValid: false,
      invalidReason: '"The verification code has expired."',
    }
    // Update the handler to report that the verification code expired
    server.use(
      http.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/repo/v1/webhook/:webhookId/verify`,
        ({ params }) => {
          const webhookId = params.webhookId as string

          const webhook = webhookService.getOneById(webhookId)
          if (!webhook) {
            return HttpResponse.json(
              { reason: `Webhook with ID ${webhookId} not found` },
              { status: 404 },
            )
          }

          webhookService.update(webhookId, {
            ...webhook,
            verificationStatus: WebhookVerificationStatus.FAILED,
          })

          return HttpResponse.json(failureResponse, { status: 200 })
        },
      ),
    )

    const { user } = await renderComponent()

    // Submit the verification code
    const verifyCodeDialogButton = await submitVerificationCodeForWebhook(user)

    await waitFor(() => {
      // Dialog closes
      expect(verifyCodeDialogButton).not.toBeInTheDocument()
      // Toast is shown
      expect(displayToastSpy).toHaveBeenCalledWith(
        `Webhook was not verified: ${failureResponse.invalidReason}`,
        'danger',
      )
      // The webhook is refetched and the new status is shown
      expect(screen.getByText('Failed')).toBeInTheDocument()
    })
  })

  it('Shows a link to the help desk when attempting to enter an invalid endpoint URL', async () => {
    // Update the create handler to return the specific error code that indicates use of an invalid URL
    server.use(
      http.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}/repo/v1/webhook`,
        () => {
          return HttpResponse.json(
            {
              concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
              reason:
                'Unsupported invoke endpoint, please contact support for more information.',
              errorCode: ErrorResponseCode.UNSUPPORTED_WEBHOOK_DOMAIN,
            },
            { status: 400 },
          )
        },
      ),
    )

    const { user, createWebhookButton } = await renderComponent()

    await user.click(createWebhookButton)
    await createWebhook(user)

    const alert = await screen.findByRole('alert')
    within(alert).getByText(
      /Synapse only permits configuring webhooks on verified domains/i,
    )
    within(alert).getByText(
      /Please fill out this form to request verification for your webhook domain/i,
    )
  })
})
