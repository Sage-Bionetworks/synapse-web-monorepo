import syn26344826Json from '@/mocks/query/syn26344826.json'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { act, render, waitFor } from '@testing-library/react'
import FeaturedToolsList from './FeaturedToolsList'

vi.mock('../../synapse-client/SynapseClient', () => ({
  getQueryTableResults: vi.fn(),
  getUseUtcTimeFromCookie: vi.fn(() => false),
}))

const mockGetQueryTableResults = vi.mocked(SynapseClient.getQueryTableResults)

const data = syn26344826Json as QueryResultBundle

function init() {
  return render(
    <FeaturedToolsList
      entityId={'syn26344826'}
      idColumnName={'Resource_id'}
      nameColumnName={'Resource Name'}
      descriptionColumnName={'Description'}
      typeColumnName={'Resource Type'}
      dateColumnName={'Date Added'}
      toolDetailPageURL={'/ToolDetailsPage/resourceId='}
      filterClause='ORDER BY "Date Added" DESC'
    />,
    { wrapper: createWrapper() },
  )
}

describe('basic tests', () => {
  beforeEach(() => {
    mockGetQueryTableResults.mockResolvedValue(data)
  })

  it('displays featured tool cards from a Synapse Table', async () => {
    // We must await asynchronous events for our assertions to pass
    // eslint-disable-next-line @typescript-eslint/require-await
    const { container } = await act(async () => init())
    await waitFor(() => {
      expect(container.querySelector('.FeaturedToolCard')).toBeDefined()
      expect(container.querySelectorAll('.FeaturedToolCard')).toHaveLength(3)
    })
  })
})
