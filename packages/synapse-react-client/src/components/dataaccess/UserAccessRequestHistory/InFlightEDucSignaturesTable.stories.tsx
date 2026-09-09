import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import { DATA_ACCESS_REQUEST_LIST } from '@/utils/APIConstants'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { AccessRequestList } from '@sage-bionetworks/synapse-client'
import { Meta, StoryObj } from '@storybook/react-vite'
import { http, HttpResponse } from 'msw'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { InFlightEDucSignaturesTable } from './InFlightEDucSignaturesTable'

const page1: AccessRequestList = {
  results: [
    {
      requestId: '100',
      accessRequirementId: '9602701',
      accessRequirementName: 'ROSMAP eDUC',
      isEDuc: true,
      status: 'sent',
      signaturesAcquired: 2,
      signaturesRequested: 5,
      modifiedOn: '2026-08-20T10:00:00Z',
    },
    {
      requestId: '101',
      accessRequirementId: '9602702',
      accessRequirementName: 'MSSM Study Data',
      isEDuc: true,
      status: 'delivered',
      signaturesAcquired: 4,
      signaturesRequested: 5,
      modifiedOn: '2026-08-19T10:00:00Z',
    },
    {
      requestId: '199',
      accessRequirementId: '9602703',
      accessRequirementName: 'Legacy TOU (non-eDUC)',
      isEDuc: false,
      status: 'submitted',
      modifiedOn: '2026-06-05T10:00:00Z',
    },
  ],
  nextPageToken: 'page-2',
}

const page2: AccessRequestList = {
  results: [
    {
      requestId: '102',
      accessRequirementId: '9602704',
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

function paginatedListHandler(pages: AccessRequestList[]) {
  return http.post<never, { nextPageToken?: string }>(
    `${MOCK_REPO_ORIGIN}${DATA_ACCESS_REQUEST_LIST}`,
    async ({ request }) => {
      const body = await request.json()
      const nextPageToken = body?.nextPageToken
      if (!nextPageToken) {
        return HttpResponse.json(pages[0], { status: 200 })
      }
      const index = Number(nextPageToken.replace(/^page-/, '')) - 1
      const page = pages[index] ?? { results: [] }
      return HttpResponse.json(page, { status: 200 })
    },
  )
}

const meta: Meta<typeof InFlightEDucSignaturesTable> = {
  title:
    'Governance/User Access Request History/InFlight eDUC Signatures Table',
  component: InFlightEDucSignaturesTable,
  // The Actions column's "Review Signatures and Submit" is a react-router Link and needs router context.
  decorators: [
    Story => {
      const router = createMemoryRouter([{ path: '/*', element: <Story /> }], {
        initialEntries: ['/'],
      })
      return <RouterProvider router={router} />
    },
  ],
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
  name: 'With in-flight requests (paginated)',
  parameters: {
    msw: {
      handlers: [
        paginatedListHandler([page1, page2]),
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
        paginatedListHandler([emptyList]),
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
}
