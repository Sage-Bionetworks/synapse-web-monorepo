import { Box } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react-vite'
import { HttpHandler } from 'msw'
import { expect, userEvent, within } from 'storybook/test'
import {
  getAridhiaDarWizardHandlers,
  getAridhiaRequestsHandler,
  MOCK_ARIDHIA_AUTHENTICATION_REQUEST,
  MOCK_ARIDHIA_DATASET_CODE,
  MOCK_ARIDHIA_FAIR_PORTAL_URL,
  MOCK_ARIDHIA_GATEWAY,
} from '@/mocks/msw/handlers/aridhiaHandlers'
import { getFeatureFlagsOverride } from '@/mocks/msw/handlers/featureFlagHandlers'
import { AridhiaContextProvider } from '@/utils/context/AridhiaContext'
import { FeatureFlagEnum } from '@/utils/featureflag/FeatureFlags'
import { MOCK_PORTAL_ORIGIN } from '@/utils/functions/getEndpoint'
import AridhiaAccessStatus, {
  AridhiaAccessStatusProps,
} from './AridhiaAccessStatus'

type RequestStatus = 'pending' | 'approved' | 'denied' | 'error'

function mockRequest(name: string, status: RequestStatus, updatedAt: string) {
  return {
    code: `ampals-${MOCK_ARIDHIA_DATASET_CODE}-${name.toLowerCase().replaceAll(/\W+/g, '-')}`,
    name,
    status,
    datasets: [{ code: MOCK_ARIDHIA_DATASET_CODE }],
    created_at: updatedAt,
    updated_at: updatedAt,
  }
}

const PENDING = mockRequest(
  'Biomarker tables',
  'pending',
  '2026-10-12T00:00:00Z',
)
const DENIED = mockRequest(
  'Full dataset request',
  'denied',
  '2026-09-03T00:00:00Z',
)
const APPROVED = mockRequest(
  'Demographics and vitals',
  'approved',
  '2026-08-20T00:00:00Z',
)

function handlers(options: {
  formEnabled: boolean
  requests: unknown[]
}): Record<string, HttpHandler[]> {
  return {
    featureFlags: [
      getFeatureFlagsOverride({
        portalOrigin: MOCK_PORTAL_ORIGIN,
        overrides: {
          [FeatureFlagEnum.AMPALS_RDCA_DAP_FORM_ENABLED]: options.formEnabled,
        },
      }),
    ],
    aridhiaRequests: [getAridhiaRequestsHandler(options.requests)],
    aridhia: getAridhiaDarWizardHandlers(),
  }
}

async function openStatusPopover(canvasElement: HTMLElement) {
  const canvas = within(canvasElement)
  await userEvent.click(
    // The icon appears only after the token exchange and the requests fetch both resolve.
    await canvas.findByRole(
      'button',
      { name: 'View data access request status' },
      { timeout: 10_000 },
    ),
  )
  // The popover renders in a portal outside the story canvas.
  await expect(
    await within(canvasElement.ownerDocument.body).findByRole('list', {
      name: 'Your data access requests',
    }),
  ).toBeVisible()
}

const meta: Meta<AridhiaAccessStatusProps & { isAuthenticated: boolean }> = {
  title: 'Governance/Aridhia/AridhiaAccessStatus',
  component: AridhiaAccessStatus,
  args: {
    datasetCode: MOCK_ARIDHIA_DATASET_CODE,
    fairPortalUrl: MOCK_ARIDHIA_FAIR_PORTAL_URL,
    isAuthenticated: true,
  },
  decorators: [
    Story => (
      <AridhiaContextProvider
        apiBasePath={MOCK_ARIDHIA_GATEWAY}
        authenticationRequest={MOCK_ARIDHIA_AUTHENTICATION_REQUEST}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            pt: 2,
            minHeight: 480,
          }}
        >
          <Story />
        </Box>
      </AridhiaContextProvider>
    ),
  ],
  parameters: { stack: 'mock', layout: 'padded' },
}
export default meta
type Story = StoryObj<typeof meta>

export const NoRequests: Story = {
  parameters: {
    msw: { handlers: handlers({ formEnabled: true, requests: [] }) },
  },
}

export const PendingRequest: Story = {
  parameters: {
    msw: { handlers: handlers({ formEnabled: true, requests: [PENDING] }) },
  },
  play: ({ canvasElement }) => openStatusPopover(canvasElement),
}

export const DeniedRequest: Story = {
  parameters: {
    msw: { handlers: handlers({ formEnabled: true, requests: [DENIED] }) },
  },
  play: ({ canvasElement }) => openStatusPopover(canvasElement),
}

export const ApprovedRequest: Story = {
  parameters: {
    msw: { handlers: handlers({ formEnabled: true, requests: [APPROVED] }) },
  },
  play: ({ canvasElement }) => openStatusPopover(canvasElement),
}

/** An approval grants access even when a newer request was denied or is still pending. */
export const MultipleRequests: Story = {
  parameters: {
    msw: {
      handlers: handlers({
        formEnabled: true,
        requests: [DENIED, PENDING, APPROVED],
      }),
    },
  },
  play: ({ canvasElement }) => openStatusPopover(canvasElement),
}

/** Without the in-app form, the popover only reports status; requesting happens on RDCA-DAP. */
export const MultipleRequestsFormDisabled: Story = {
  parameters: {
    msw: {
      handlers: handlers({ formEnabled: false, requests: [DENIED, PENDING] }),
    },
  },
  play: ({ canvasElement }) => openStatusPopover(canvasElement),
}

export const NewRequestFromPopover: Story = {
  parameters: {
    msw: {
      handlers: handlers({ formEnabled: true, requests: [DENIED, APPROVED] }),
    },
  },
  play: async ({ canvasElement }) => {
    await openStatusPopover(canvasElement)
    const body = within(canvasElement.ownerDocument.body)
    await userEvent.click(
      body.getByRole('button', { name: 'Submit a new request' }),
    )
    await expect(
      await body.findByRole('heading', { name: 'Request Data Access' }),
    ).toBeVisible()
  },
}
