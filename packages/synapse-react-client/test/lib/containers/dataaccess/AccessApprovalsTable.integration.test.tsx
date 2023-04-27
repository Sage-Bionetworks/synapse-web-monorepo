import * as React from 'react'
import { server } from '../../../../mocks/msw/server'
import { render, screen } from '@testing-library/react'
import { AccessApprovalSearchResult } from '../../../../src/lib/utils/synapseTypes'
import {
  AccessApprovalsTable,
  AccessApprovalsTableProps,
} from '../../../../src/lib/containers/AccessApprovalsTable'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import { MOCK_USER_ID } from '../../../../mocks/user/mock_user_profile'
import {
  mockApprovalSearchResponse,
  mockAccessApprovalSearchResult2,
} from '../../../../mocks/MockAccessApprovals'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { useSearchAccessApprovalsInfinite } from '../../../../src/lib/utils/hooks/SynapseAPI/dataaccess/useAccessApprovals'
import userEvent from '@testing-library/user-event'
import * as UseAccessApprovalsModule from '../../../../src/lib/utils/hooks/SynapseAPI/dataaccess/useAccessApprovals'

const mockSearchAccessApprovalsInfinite = jest.spyOn(
  UseAccessApprovalsModule,
  'useSearchAccessApprovalsInfinite',
)

const mockFetchNextPage = jest.fn()

const page2: AccessApprovalSearchResult = mockAccessApprovalSearchResult2

function renderComponent(props: AccessApprovalsTableProps) {
  render(<AccessApprovalsTable {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('AccessApprovalsTable tests', () => {
  beforeAll(() => {
    server.listen()
    mockSearchAccessApprovalsInfinite.mockReturnValue({
      data: {
        pages: [
          {
            results: mockApprovalSearchResponse.results,
            nextTokenPage: mockApprovalSearchResponse.nextPageToken,
          },
          {
            results: page2,
            nextPageToken: null,
          },
        ],
        pageParams: [],
      },
      fetchNextPage: mockFetchNextPage,
      hasNextPage: true,
      isLoading: false,
      isSuccess: true,
    })
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

  it('Renders all of the data', async () => {
    renderComponent({
      accessorId: MOCK_USER_ID.toString(),
    })
    mockAllIsIntersecting(true)
    expect(
      await screen.findAllByText(
        mockAccessApprovalSearchResult2.accessRequirementId,
      ),
    ).toHaveLength(51)
  })

  it('Renders show more button when it has a next page', async () => {
    mockAllIsIntersecting(true)
    renderComponent({
      accessorId: MOCK_USER_ID.toString(),
    })
    const moreButton = screen.queryByRole('button', { name: 'Show More' })
    expect(
      screen.queryByRole('button', { name: 'Show More' }),
    ).toBeInTheDocument()
    await userEvent.click(moreButton!)
    const item2 = await screen.findAllByText('Access Requirement2')
    expect(item2).toHaveLength(1)
  })
})
