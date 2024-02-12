import React from 'react'
import { rest, server } from '../../mocks/msw/server'
import { render, screen } from '@testing-library/react'
import {
  AccessApprovalSearchRequest,
  AccessApprovalSearchResponse,
  AccessApprovalSearchResult,
} from '@sage-bionetworks/synapse-types'
import {
  AccessApprovalsTable,
  AccessApprovalsTableProps,
} from './AccessApprovalsTable'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { MOCK_USER_ID } from '../../mocks/user/mock_user_profile'
import {
  mockAccessApprovalSearchResult2,
  mockApprovalSearchResponse,
} from '../../mocks/MockAccessApprovals'
import userEvent from '@testing-library/user-event'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../utils/functions/getEndpoint'

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
    jest.clearAllMocks()
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
