import { mockManagedACTAccessRequirement } from '@/mocks/accessRequirement/mockAccessRequirements'
import { MOCK_DATA_ACCESS_REQUEST } from '@/mocks/dataaccess/MockDataAccessRequest'
import { getAccessRequirementHandlers } from '@/mocks/msw/handlers/accessRequirementHandlers'
import {
  getDataAccessRequestHandlers,
  MOCK_EDUC_SIGNATURE_STATUS,
} from '@/mocks/msw/handlers/dataAccessRequestHandlers'
import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import { getWikiHandlers } from '@/mocks/msw/handlers/wikiHandlers'
import {
  ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE,
  DATA_ACCESS_REQUEST_PREVIEW,
  DATA_ACCESS_REQUEST_SIGNATURE_PRECHECK,
  DATA_ACCESS_REQUEST_SIGNATURE_QUOTA,
  DATA_ACCESS_REQUEST_SIGNATURE_STATUS,
} from '@/utils/APIConstants'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { EDucSignatureStatus } from '@sage-bionetworks/synapse-client'
import { Meta, StoryObj } from '@storybook/react-vite'
import { http, HttpResponse } from 'msw'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import EDucPreviewStep, {
  SEND_FOR_SIGNATURE_BUTTON_TEXT,
} from './EDucPreviewStep'

const eDucManagedACTAccessRequirement = {
  ...mockManagedACTAccessRequirement,
  eDucTemplateId: 'template-abc-123',
}

const SAMPLE_PDF_URL =
  'https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf'

// The story renders the chrome around the iframe; the iframe src is overridden via previewSrcOverride.
const previewHandler = http.get(
  `${MOCK_REPO_ORIGIN}${DATA_ACCESS_REQUEST_PREVIEW(MOCK_DATA_ACCESS_REQUEST.id)}`,
  () =>
    HttpResponse.json(
      { fileHandleId: 'mock-preview-file-handle-123' },
      { status: 200 },
    ),
)

/**
 * Serves a DAR that already has a DocuSign envelope in flight, plus the matching signature
 * status and precheck outcome. `canUpdateEnvelope: false` drives the "start a new signature
 * request?" confirmation dialog.
 */
function inFlightEnvelopeHandlers(options: {
  canUpdateEnvelope: boolean
  signatureStatus?: EDucSignatureStatus
}) {
  const { canUpdateEnvelope, signatureStatus = MOCK_EDUC_SIGNATURE_STATUS } =
    options
  return [
    http.get(
      `${MOCK_REPO_ORIGIN}${ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE(mockManagedACTAccessRequirement.id)}`,
      () =>
        HttpResponse.json({
          ...MOCK_DATA_ACCESS_REQUEST,
          eDucSignatureEnvelopeId: 'docusign-envelope-123',
        }),
    ),
    http.get(
      `${MOCK_REPO_ORIGIN}${DATA_ACCESS_REQUEST_SIGNATURE_STATUS(MOCK_DATA_ACCESS_REQUEST.id)}`,
      () => HttpResponse.json(signatureStatus),
    ),
    http.get(
      `${MOCK_REPO_ORIGIN}${DATA_ACCESS_REQUEST_SIGNATURE_PRECHECK(MOCK_DATA_ACCESS_REQUEST.id)}`,
      () => HttpResponse.json(canUpdateEnvelope),
    ),
  ]
}

function quotaHandler(quota: number, remaining: number) {
  return http.get(
    `${MOCK_REPO_ORIGIN}${DATA_ACCESS_REQUEST_SIGNATURE_QUOTA(MOCK_DATA_ACCESS_REQUEST.id)}`,
    () => HttpResponse.json({ quota, remaining }, { status: 200 }),
  )
}

const meta: Meta<typeof EDucPreviewStep> = {
  title:
    'Governance/Data Access Request Flow/Managed Access Requirement/Step 2c - eDUC Preview',
  component: EDucPreviewStep,
  parameters: {
    stack: 'mock',
    chromatic: { viewports: [600, 1200] },
    msw: {
      handlers: [
        previewHandler,
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        ...getWikiHandlers(MOCK_REPO_ORIGIN),
        ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN),
        ...getDataAccessRequestHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

/**
 * Presses "Send for electronic signature" so the story lands on whichever confirmation the
 * precheck selects. MUI portals dialog content to `document.body`, outside the story canvas.
 */
const openSendConfirmation: Story['play'] = async ({ canvasElement }) => {
  const canvas = within(canvasElement.ownerDocument.body)
  const sendButton = await canvas.findByRole('button', {
    name: SEND_FOR_SIGNATURE_BUTTON_TEXT,
  })
  await waitFor(() => expect(sendButton).toBeEnabled())
  await userEvent.click(sendButton)
}

export const Preview: Story = {
  name: 'eDUC preview step',
  args: {
    managedACTAccessRequirement: eDucManagedACTAccessRequirement,
    // The real portal servlet is not served in Storybook, so point the iframe at a public
    // sample PDF that the browser can render directly.
    previewSrcOverride: SAMPLE_PDF_URL,
  },
}

export const PreviewWithUpdatableEnvelope: Story = {
  name: 'eDUC preview — in-flight envelope that can still be updated',
  parameters: {
    msw: {
      handlers: [
        ...inFlightEnvelopeHandlers({ canUpdateEnvelope: true }),
        previewHandler,
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        ...getWikiHandlers(MOCK_REPO_ORIGIN),
        ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN),
        ...getDataAccessRequestHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
  args: {
    managedACTAccessRequirement: eDucManagedACTAccessRequirement,
    previewSrcOverride: SAMPLE_PDF_URL,
  },
}

export const PreviewWithUnupdatableEnvelope: Story = {
  name: 'eDUC preview — in-flight envelope that cannot be updated',
  parameters: {
    msw: {
      handlers: [
        ...inFlightEnvelopeHandlers({
          canUpdateEnvelope: false,
          signatureStatus: {
            ...MOCK_EDUC_SIGNATURE_STATUS,
            ducStatus: 'completed',
          },
        }),
        previewHandler,
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        ...getWikiHandlers(MOCK_REPO_ORIGIN),
        ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN),
        ...getDataAccessRequestHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
  args: {
    managedACTAccessRequirement: eDucManagedACTAccessRequirement,
    previewSrcOverride: SAMPLE_PDF_URL,
  },
}

/**
 * Pressing Send on a correctable envelope asks the user to choose, because only they know whether
 * their edits are material enough to warrant collecting signatures again.
 */
export const KeepOrReplaceConfirmation: Story = {
  name: 'eDUC preview — "keep or replace" confirmation',
  parameters: PreviewWithUpdatableEnvelope.parameters,
  args: PreviewWithUpdatableEnvelope.args,
  play: openSendConfirmation,
}

/**
 * The same action on an envelope DocuSign can no longer correct, where replacing it is the only
 * way to deliver the user's changes.
 */
export const RestartSigningConfirmation: Story = {
  name: 'eDUC preview — "restart signing" confirmation',
  parameters: PreviewWithUnupdatableEnvelope.parameters,
  args: PreviewWithUnupdatableEnvelope.args,
  play: openSendConfirmation,
}

export const PreviewError: Story = {
  name: 'eDUC preview — error state',
  parameters: {
    msw: {
      handlers: [
        http.get(
          `${MOCK_REPO_ORIGIN}${DATA_ACCESS_REQUEST_PREVIEW(MOCK_DATA_ACCESS_REQUEST.id)}`,
          () =>
            HttpResponse.json(
              { reason: 'Preview could not be generated at this time.' },
              { status: 500 },
            ),
        ),
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        ...getWikiHandlers(MOCK_REPO_ORIGIN),
        ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN),
        ...getDataAccessRequestHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
  args: {
    managedACTAccessRequirement: eDucManagedACTAccessRequirement,
  },
}

export const PreviewAtQuota: Story = {
  name: 'eDUC preview — user at signature quota',
  parameters: {
    msw: {
      handlers: [
        previewHandler,
        quotaHandler(3, 0),
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        ...getWikiHandlers(MOCK_REPO_ORIGIN),
        ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN),
        ...getDataAccessRequestHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
  args: {
    managedACTAccessRequirement: eDucManagedACTAccessRequirement,
    previewSrcOverride: SAMPLE_PDF_URL,
  },
}

/**
 * At quota with an envelope that still looks correctable, so Send stays enabled — updating an
 * envelope spends no routings. Pressing Send runs a precheck that disagrees, and because a
 * recreate would spend a routing the user doesn't have, the quota is reported instead of the
 * "start a new signature request?" confirmation.
 */
export const PreviewAtQuotaWithInFlightEnvelope: Story = {
  name: 'eDUC preview — at signature quota with an in-flight envelope',
  parameters: {
    msw: {
      handlers: [
        ...inFlightEnvelopeHandlers({ canUpdateEnvelope: false }),
        previewHandler,
        quotaHandler(3, 0),
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        ...getWikiHandlers(MOCK_REPO_ORIGIN),
        ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN),
        ...getDataAccessRequestHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
  args: {
    managedACTAccessRequirement: eDucManagedACTAccessRequirement,
    previewSrcOverride: SAMPLE_PDF_URL,
  },
}
