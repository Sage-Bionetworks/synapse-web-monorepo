import { Box } from '@mui/material'
import { RequestListItem } from '@sage-bionetworks/aridhia-client/generated/models'
import { Meta, StoryObj } from '@storybook/react-vite'
import { HttpHandler } from 'msw'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import {
  getAridhiaDarWizardHandlers,
  getAridhiaRequestsHandler,
  getAridhiaRequestWorkspaceHandler,
  MOCK_ARIDHIA_AUTHENTICATION_REQUEST,
  MOCK_ARIDHIA_DATASET_CODE,
  MOCK_ARIDHIA_FAIR_PORTAL_URL,
  MOCK_ARIDHIA_GATEWAY,
  mockAridhiaRequestListItem,
  mockAridhiaRequestWorkspace,
  MOCK_ARIDHIA_REQUEST_WORKSPACE_NOT_PROVISIONED,
} from '@/mocks/msw/handlers/aridhiaHandlers'
import { getFeatureFlagsOverride } from '@/mocks/msw/handlers/featureFlagHandlers'
import { AridhiaContextProvider } from '@/utils/context/AridhiaContext'
import { FeatureFlagEnum } from '@/utils/featureflag/FeatureFlags'
import { MOCK_PORTAL_ORIGIN } from '@/utils/functions/getEndpoint'
import AridhiaAccessStatus, {
  AridhiaAccessStatusProps,
} from './AridhiaAccessStatus'
import { DAR_DATA_ACCESS_TEXT } from './AridhiaDarStatusPopover'

const PENDING = mockAridhiaRequestListItem({
  code: `ampals-${MOCK_ARIDHIA_DATASET_CODE}-biomarker-tables`,
  name: 'Biomarker tables',
  status: 'pending',
  updatedAt: '2026-10-12T00:00:00Z',
})
const DENIED = mockAridhiaRequestListItem({
  code: `ampals-${MOCK_ARIDHIA_DATASET_CODE}-full-dataset-request`,
  name: 'Full dataset request',
  status: 'denied',
  updatedAt: '2026-09-03T00:00:00Z',
})
const APPROVED = mockAridhiaRequestListItem({
  code: `ampals-${MOCK_ARIDHIA_DATASET_CODE}-demographics-and-vitals`,
  name: 'Demographics and vitals',
  status: 'approved',
  updatedAt: '2026-08-20T00:00:00Z',
})
const TRANSFERRED_TO_WORKSPACE_A = mockAridhiaRequestListItem({
  code: `ampals-${MOCK_ARIDHIA_DATASET_CODE}-clinical-labs`,
  name: 'Clinical labs',
  status: 'approved',
  updatedAt: '2026-07-14T00:00:00Z',
  transferredAt: '2026-07-15T00:00:00Z',
})
const TRANSFERRED_TO_WORKSPACE_B = mockAridhiaRequestListItem({
  code: `ampals-${MOCK_ARIDHIA_DATASET_CODE}-genomics-summary`,
  name: 'Genomics summary',
  status: 'approved',
  updatedAt: '2026-06-02T00:00:00Z',
  transferredAt: '2026-06-03T00:00:00Z',
})
const TRANSFERRED_WORKSPACE_NOT_READY = mockAridhiaRequestListItem({
  code: `ampals-${MOCK_ARIDHIA_DATASET_CODE}-medication-history`,
  name: 'Medication history',
  status: 'approved',
  updatedAt: '2026-11-10T00:00:00Z',
  transferredAt: '2026-11-11T00:00:00Z',
})

const TRANSFERRED_WORKSPACE_LOADING = mockAridhiaRequestListItem({
  code: `ampals-${MOCK_ARIDHIA_DATASET_CODE}-adverse-events`,
  name: 'Adverse events',
  status: 'approved',
  updatedAt: '2026-05-04T00:00:00Z',
  transferredAt: '2026-05-05T00:00:00Z',
})
const TRANSFERRED_WORKSPACE_ERROR = mockAridhiaRequestListItem({
  code: `ampals-${MOCK_ARIDHIA_DATASET_CODE}-vital-signs`,
  name: 'Vital signs',
  status: 'approved',
  updatedAt: '2026-04-06T00:00:00Z',
  transferredAt: '2026-04-07T00:00:00Z',
})

/** `GET /requests/{code}/workspace` per request code; codes absent here get a 404. */
const REQUEST_WORKSPACES = {
  [TRANSFERRED_TO_WORKSPACE_A.code!]:
    mockAridhiaRequestWorkspace('als-clinical-team'),
  [TRANSFERRED_TO_WORKSPACE_B.code!]:
    mockAridhiaRequestWorkspace('als-genomics-team'),
  [TRANSFERRED_WORKSPACE_NOT_READY.code!]:
    MOCK_ARIDHIA_REQUEST_WORKSPACE_NOT_PROVISIONED,
}

function handlers(options: {
  formEnabled: boolean
  requests: RequestListItem[]
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
    aridhiaRequests: [
      getAridhiaRequestsHandler(options.requests),
      getAridhiaRequestWorkspaceHandler(REQUEST_WORKSPACES, {
        unresolvedRequestCodes: [TRANSFERRED_WORKSPACE_LOADING.code!],
        failingRequestCodes: [TRANSFERRED_WORKSPACE_ERROR.code!],
      }),
    ],
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

/** Each transferred request's workspace URL arrives from its own fetch, after the popover opens. */
async function findOpenWorkspaceLinks(
  canvasElement: HTMLElement,
  count: number,
) {
  const body = within(canvasElement.ownerDocument.body)
  await waitFor(
    () =>
      expect(
        body.getAllByRole('link', { name: DAR_DATA_ACCESS_TEXT.openWorkspace }),
      ).toHaveLength(count),
    { timeout: 10_000 },
  )
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

/** Approved, but RDCA-DAP hasn't transferred the data yet — the request record is the route. */
export const ApprovedRequest: Story = {
  parameters: {
    msw: { handlers: handlers({ formEnabled: true, requests: [APPROVED] }) },
  },
  play: ({ canvasElement }) => openStatusPopover(canvasElement),
}

export const TransferredRequest: Story = {
  parameters: {
    msw: {
      handlers: handlers({
        formEnabled: true,
        requests: [TRANSFERRED_TO_WORKSPACE_A],
      }),
    },
  },
  play: async ({ canvasElement }) => {
    await openStatusPopover(canvasElement)
    await findOpenWorkspaceLinks(canvasElement, 1)
  },
}

/** Data transferred, but the workspace has no URL yet (e.g. it's still being provisioned). */
export const TransferredWorkspaceBeingPrepared: Story = {
  parameters: {
    msw: {
      handlers: handlers({
        formEnabled: true,
        requests: [TRANSFERRED_WORKSPACE_NOT_READY],
      }),
    },
  },
  play: async ({ canvasElement }) => {
    await openStatusPopover(canvasElement)
    const body = within(canvasElement.ownerDocument.body)
    await expect(
      await body.findByText(DAR_DATA_ACCESS_TEXT.workspacePreparing),
    ).toBeVisible()
    await expect(
      body.queryByRole('link', { name: DAR_DATA_ACCESS_TEXT.openWorkspace }),
    ).not.toBeInTheDocument()
  },
}

/** Data transferred; the workspace status is still loading. */
export const TransferredWorkspaceLoading: Story = {
  parameters: {
    msw: {
      handlers: handlers({
        formEnabled: true,
        requests: [TRANSFERRED_WORKSPACE_LOADING],
      }),
    },
  },
  play: async ({ canvasElement }) => {
    await openStatusPopover(canvasElement)
    const body = within(canvasElement.ownerDocument.body)
    await expect(
      await body.findByText(DAR_DATA_ACCESS_TEXT.checkingWorkspace),
    ).toBeVisible()
  },
}

/** Data transferred, but the workspace status failed to load; the title still links the request. */
export const TransferredWorkspaceError: Story = {
  parameters: {
    msw: {
      handlers: handlers({
        formEnabled: true,
        requests: [TRANSFERRED_WORKSPACE_ERROR],
      }),
    },
  },
  play: async ({ canvasElement }) => {
    await openStatusPopover(canvasElement)
    const body = within(canvasElement.ownerDocument.body)
    await expect(
      await body.findByText(
        DAR_DATA_ACCESS_TEXT.workspaceError,
        {},
        { timeout: 15_000 },
      ),
    ).toBeVisible()
  },
}

/** Separate approved requests can deliver to separate workspaces; each row links its own. */
export const TransferredToTwoWorkspaces: Story = {
  parameters: {
    msw: {
      handlers: handlers({
        formEnabled: true,
        requests: [TRANSFERRED_TO_WORKSPACE_A, TRANSFERRED_TO_WORKSPACE_B],
      }),
    },
  },
  play: async ({ canvasElement }) => {
    await openStatusPopover(canvasElement)
    await findOpenWorkspaceLinks(canvasElement, 2)
  },
}

/** Only approved requests offer a route to data; pending and denied ones report status only. */
export const EveryRequestState: Story = {
  parameters: {
    msw: {
      handlers: handlers({
        formEnabled: true,
        requests: [
          TRANSFERRED_WORKSPACE_NOT_READY,
          TRANSFERRED_WORKSPACE_LOADING,
          TRANSFERRED_WORKSPACE_ERROR,
          PENDING,
          DENIED,
          APPROVED,
          TRANSFERRED_TO_WORKSPACE_A,
        ],
      }),
    },
  },
  play: async ({ canvasElement }) => {
    await openStatusPopover(canvasElement)
    await findOpenWorkspaceLinks(canvasElement, 1)
  },
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
