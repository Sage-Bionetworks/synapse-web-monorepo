import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { EvaluationRound } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { EvaluationRoundEditorList } from './EvaluationRoundEditorList'

describe('test EvaluationRoundEditorList', () => {
  const evaluationId = '123123123'
  const nextPageToken = 'firstPage'

  let evaluationRoundsList: EvaluationRound[]
  let mockGetEvaulationsList: jest.Mock

  beforeEach(() => {
    evaluationRoundsList = [
      {
        id: '4',
        etag: '7250762f-287f-4d35-a1ed-3d373940c28e',
        evaluationId: evaluationId,
        roundStart: '2020-10-23T01:14:00.000Z',
        roundEnd: '2020-10-31T07:00:00.000Z',
        limits: [
          { limitType: 'TOTAL', maximumSubmissions: 999 },
          { limitType: 'DAILY', maximumSubmissions: 123 },
          { limitType: 'MONTHLY', maximumSubmissions: 456 },
        ],
      },
      {
        id: '1',
        etag: '563b5276-8aa0-4d97-a7c5-f1661c8dd47f',
        evaluationId: evaluationId,
        roundStart: '2020-10-31T07:00:00.000Z',
        roundEnd: '2020-11-18T08:00:00.000Z',
        limits: [],
      },
      {
        id: '5',
        etag: 'b6fa2bf8-e181-44df-9baa-8902fc29aa1c',
        evaluationId: evaluationId,
        roundStart: '2020-11-24T08:00:00.000Z',
        roundEnd: '2020-12-17T08:00:00.000Z',
        limits: [
          { limitType: 'DAILY', maximumSubmissions: 123213 },
          { limitType: 'WEEKLY', maximumSubmissions: 3123 },
        ],
      },
    ]

    mockGetEvaulationsList = jest.fn()
    const spyFetchEvaluationList = jest.spyOn(
      SynapseClient,
      'getEvaluationRoundsList',
    )
    spyFetchEvaluationList.mockImplementation(mockGetEvaulationsList)
    mockGetEvaulationsList
      .mockResolvedValueOnce({
        page: evaluationRoundsList.slice(0, 2),
        nextPageToken: nextPageToken,
      })
      //no next page token on the second page since it is done
      .mockResolvedValueOnce({ page: evaluationRoundsList.slice(2) })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('error fetching page', async () => {
    mockGetEvaulationsList.mockReset()
    const error = new TypeError('you got a new error!')
    mockGetEvaulationsList.mockRejectedValue(error)

    render(<EvaluationRoundEditorList evaluationId={evaluationId} />, {
      wrapper: createWrapper(),
    })

    await waitFor(() => {
      expect(screen.queryByRole('form')).not.toBeInTheDocument()
      expect(screen.queryByRole('alert')).toBeInTheDocument()
    })
  })

  it('fetched pages', async () => {
    render(<EvaluationRoundEditorList evaluationId={evaluationId} />, {
      wrapper: createWrapper(),
    })
    await waitFor(() => {
      expect(mockGetEvaulationsList).toHaveBeenCalledWith(
        evaluationId,
        { nextPageToken: undefined },
        MOCK_CONTEXT_VALUE.accessToken,
      )
      expect(mockGetEvaulationsList).toHaveBeenCalledWith(
        evaluationId,
        { nextPageToken: nextPageToken },
        MOCK_CONTEXT_VALUE.accessToken,
      )

      expect(screen.getAllByRole('form')).toHaveLength(3)
      expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    })
  })

  it('add round button', async () => {
    render(<EvaluationRoundEditorList evaluationId={evaluationId} />, {
      wrapper: createWrapper(),
    })

    await waitFor(() => {
      expect(screen.getAllByRole('form')).toHaveLength(3)
      expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    })

    await userEvent.click(screen.getByRole('button', { name: 'Add Round' }))

    expect(screen.getAllByRole('form')).toHaveLength(4)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
