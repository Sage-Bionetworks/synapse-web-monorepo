import {
  mockAccessApprovalSearchResult2,
  mockApprovalSearchResponse,
} from '@/mocks/MockAccessApprovals'
import { rest, server } from '@/mocks/msw/server'
import { MOCK_USER_ID } from '@/mocks/user/mock_user_profile'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  AccessApprovalSearchRequest,
  AccessApprovalSearchResponse,
  AccessApprovalSearchResult,
} from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  AccessApprovalsTable,
  AccessApprovalsTableProps,
} from './AccessApprovalsTable'

const page2: AccessApprovalSearchResult[] = [mockAccessApprovalSearchResult2]

function renderComponent(props: AccessApprovalsTableProps) {
  render(<AccessApprovalsTable {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('AccessApprovalsTable tests', () => {
  beforeAll(() => {
    server.listen()
    server.use(
      rest.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/repo/v1/accessApproval/search`,
        async (req, res, ctx) => {
          const requestBody: AccessApprovalSearchRequest = await req.json()
          let responseBody: AccessApprovalSearchResponse = {
            results: mockApprovalSearchResponse.results,
            nextPageToken: mockApprovalSearchResponse.nextPageToken,
          }

          if (requestBody.nextPageToken) {
            responseBody = {
              results: page2,
              nextPageToken: undefined,
            }
          }
          return res(ctx.status(200), ctx.json(responseBody))
        },
      ),
    )
  })
  afterEach(() => {
    server.restoreHandlers()
    vi.clearAllMocks()
  })
  afterAll(() => server.close())

  it('Renders all fields', async () => {
    renderComponent({
      accessorId: MOCK_USER_ID.toString(),
    })

    await screen.findByText('AR ID')
    await screen.findByText('Access Requirement Name')
    await screen.findByText('Submitter')
    await screen.findByText('Status')
    await screen.findByText('Modified Date')
    await screen.findByText('Expires')
  })

  it('Renders first page of data', async () => {
    renderComponent({
      accessorId: MOCK_USER_ID.toString(),
    })

    await screen.findByText(
      mockApprovalSearchResponse.results[0].accessRequirementId,
    )
  })

  it('pagination works', async () => {
    renderComponent({
      accessorId: MOCK_USER_ID.toString(),
    })
    const showMoreButton = await screen.findByRole('button', {
      name: 'Show More',
    })
    await userEvent.click(showMoreButton)
    await screen.findByText(page2[0].accessRequirementId)
  })
})
