import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import {
  MOCK_USER_ID,
  MOCK_USER_ID_2,
  MOCK_USER_ID_3,
} from '@/mocks/user/mock_user_profile'
import { DATA_ACCESS_REQUEST_LIST } from '@/utils/APIConstants'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import {
  AccessRequestList,
  UserSubmissionSearchResponse,
} from '@sage-bionetworks/synapse-client'
import { SubmissionState } from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react-vite'
import { http, HttpResponse } from 'msw'
import { UserAccessRequestHistoryPlace } from './UserAccessRequestHistoryPlace'

const meta = {
  title: 'Governance/UserAccessRequestHistoryPlace',
  component: UserAccessRequestHistoryPlace,
  args: {
    useMemoryRouter: true,
    routerBaseName: '/',
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        // In-flight eDUC signatures — powers the top table via useListAllUserDataAccessRequests.
        // Response is paginated by nextPageToken; the queryFn walks every page before rendering.
        http.post<never, { nextPageToken?: string }>(
          `${MOCK_REPO_ORIGIN}${DATA_ACCESS_REQUEST_LIST}`,
          async ({ request }) => {
            const body = await request.json()
            const isSecondPage = body?.nextPageToken === 'page-2'
            const page: AccessRequestList = isSecondPage
              ? { results: page2 }
              : { results: page1, nextPageToken: 'page-2' }
            return HttpResponse.json(page, { status: 200 })
          },
        ),
        // Submission history — powers the bottom table via useSearchAccessSubmissionUserRequestsInfinite.
        http.post(
          `${MOCK_REPO_ORIGIN}/repo/v1/dataAccessSubmission/userRequests`,
          () =>
            HttpResponse.json<UserSubmissionSearchResponse>(
              { results: submissionHistory },
              { status: 200 },
            ),
        ),
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const page1: AccessRequestList['results'] = [
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
    requestId: '199',
    accessRequirementName: 'Legacy TOU (non-eDUC)',
    isEDuc: false,
    status: 'submitted',
    modifiedOn: '2026-06-05T10:00:00Z',
  },
]

const page2: AccessRequestList['results'] = [
  {
    requestId: '102',
    accessRequirementName: 'AMP-PD Data',
    isEDuc: true,
    status: 'completed',
    signaturesAcquired: 3,
    signaturesRequested: 3,
    modifiedOn: '2026-08-21T10:00:00Z',
  },
]

const futureDate = new Date()
futureDate.setFullYear(futureDate.getFullYear() + 5)
const pastDate = new Date()
pastDate.setFullYear(pastDate.getFullYear() - 5)

const submissionHistory: UserSubmissionSearchResponse['results'] = [
  {
    id: '1',
    accessRequirementName: 'ROSMAP eDUC',
    state: SubmissionState.APPROVED,
    createdOn: pastDate.toISOString(),
    submitterId: MOCK_USER_ID.toString(),
    userAccessApproval: { expiredOn: futureDate.toISOString() },
  },
  {
    id: '2',
    accessRequirementName: 'ADNI Study Data',
    state: SubmissionState.APPROVED,
    createdOn: pastDate.toISOString(),
    submitterId: MOCK_USER_ID_2.toString(),
    userAccessApproval: { expiredOn: pastDate.toISOString() },
  },
  {
    id: '3',
    accessRequirementName: 'MSSM Study Data',
    state: SubmissionState.REJECTED,
    createdOn: '2025-03-15T12:00:00Z',
    submitterId: MOCK_USER_ID_3.toString(),
  },
  {
    id: '4',
    accessRequirementName: 'AMP-PD Data',
    state: SubmissionState.SUBMITTED,
    createdOn: '2025-04-05T12:00:00Z',
    submitterId: MOCK_USER_ID_3.toString(),
  },
]

export const Demo: Story = {
  name: 'UserAccessRequestHistoryPlace',
}
