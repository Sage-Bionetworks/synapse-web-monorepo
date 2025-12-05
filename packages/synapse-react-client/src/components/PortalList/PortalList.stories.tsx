import { Meta, StoryObj } from '@storybook/react-vite'
import PortalList from './PortalList'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { http, HttpResponse } from 'msw'
import { Portal, ListPortalsResponse } from '@sage-bionetworks/synapse-client'

const meta = {
  title: 'Synapse/PortalList',
  component: PortalList,
  parameters: {
    stack: 'production',
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const mockPortals: Portal[] = [
  {
    id: '1',
    name: 'NF Data Portal',
    url: 'https://nf.synapse.org',
    createdBy: '1234567',
    createdOn: '2023-01-15T10:30:00.000Z',
    modifiedBy: '1234567',
    modifiedOn: '2024-12-01T14:20:00.000Z',
    etag: 'etag-1',
  },
  {
    id: '2',
    name: 'AD Knowledge Portal',
    url: 'https://adknowledgeportal.synapse.org',
    createdBy: '2345678',
    createdOn: '2022-06-20T08:15:00.000Z',
    modifiedBy: '3456789',
    modifiedOn: '2024-11-15T16:45:00.000Z',
    etag: 'etag-2',
  },
  {
    id: '3',
    name: 'GENIE Portal',
    url: 'https://genie.synapse.org',
    createdBy: '3456789',
    createdOn: '2021-03-10T12:00:00.000Z',
    modifiedBy: '3456789',
    modifiedOn: '2024-10-20T09:30:00.000Z',
    etag: 'etag-3',
  },
  {
    id: '4',
    name: 'Digital Health Portal',
    url: 'https://digitalhealth.synapse.org',
    createdBy: '4567890',
    createdOn: '2023-09-05T15:45:00.000Z',
    modifiedBy: '4567890',
    modifiedOn: '2024-12-03T11:10:00.000Z',
    etag: 'etag-4',
  },
]

const mockPortalsFirstPage: Portal[] = mockPortals.slice(0, 2)
const mockPortalsSecondPage: Portal[] = mockPortals.slice(2, 4)

export const WithPortals: Story = {}

export const WithMockData: Story = {
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        http.post(
          `${MOCK_REPO_ORIGIN}/repo/v1/portal/list`,
          async ({ request }) => {
            const body = await request.json()
            const nextPageToken = (body as { nextPageToken?: string })
              .nextPageToken

            let response: ListPortalsResponse
            if (!nextPageToken) {
              // First page
              response = {
                page: mockPortalsFirstPage,
                nextPageToken: 'token-page-2',
              }
            } else {
              // Second page
              response = {
                page: mockPortalsSecondPage,
                nextPageToken: undefined,
              }
            }

            return HttpResponse.json(response)
          },
        ),
      ],
    },
  },
}

export const WithMockEmptyList: Story = {
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        http.post(`${MOCK_REPO_ORIGIN}/repo/v1/portal/list`, () => {
          const response: ListPortalsResponse = {
            page: [],
            nextPageToken: undefined,
          }
          return HttpResponse.json(response)
        }),
      ],
    },
  },
}

export const WithMockErrorState: Story = {
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        http.post(`${MOCK_REPO_ORIGIN}/repo/v1/portal/list`, () => {
          return HttpResponse.json(
            {
              reason: 'Internal server error',
            },
            { status: 500 },
          )
        }),
      ],
    },
  },
}
