import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import { DATA_ACCESS_REQUEST_LIST } from '@/utils/APIConstants'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { AccessRequestList } from '@sage-bionetworks/synapse-client'
import { Meta, StoryObj } from '@storybook/react-vite'
import { http, HttpResponse } from 'msw'
import { InFlightEDucSignaturesTable } from './InFlightEDucSignaturesTable'

const populatedList: AccessRequestList = {
  results: [
    {
      requestId: '100',
      accessRequirementName: 'ROSMAP eDUC',
      isEDuc: true,
      status: 'sent',
      signaturesAcquired: 2,
      signaturesRequested: 5,
      modifiedOn: '2026-08-20T10:00:00Z',
    },
    {
      requestId: '101',
      accessRequirementName: 'MSSM Study Data',
      isEDuc: true,
      status: 'delivered',
      signaturesAcquired: 4,
      signaturesRequested: 5,
      modifiedOn: '2026-08-19T10:00:00Z',
    },
    {
      requestId: '102',
      accessRequirementName: 'AMP-PD Data',
      isEDuc: true,
      status: 'completed',
      signaturesAcquired: 3,
      signaturesRequested: 3,
      modifiedOn: '2026-08-21T10:00:00Z',
    },
  ],
}

const emptyList: AccessRequestList = { results: [] }

function listHandler(response: AccessRequestList) {
  return http.post(`${MOCK_REPO_ORIGIN}${DATA_ACCESS_REQUEST_LIST}`, () =>
    HttpResponse.json(response, { status: 200 }),
  )
}

const meta: Meta<typeof InFlightEDucSignaturesTable> = {
  title:
    'Governance/User Access Request History/InFlight eDUC Signatures Table',
  component: InFlightEDucSignaturesTable,
  parameters: {
    stack: 'mock',
    chromatic: { viewports: [600, 1200] },
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN)],
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const WithInFlightRequests: Story = {
  name: 'With in-flight requests',
  parameters: {
    msw: {
      handlers: [
        listHandler(populatedList),
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
}

export const Empty: Story = {
  name: 'No in-flight requests (renders nothing)',
  parameters: {
    msw: {
      handlers: [
        listHandler(emptyList),
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
}
