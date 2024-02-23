import React from 'react'
import FeaturedToolsList from './FeaturedToolsList'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import syn26344826Json from '../../mocks/query/syn26344826.json'
import { render, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import SynapseClient from '../../synapse-client'
import { createWrapper } from '../../testutils/TestingLibraryUtils'

jest.mock('../../synapse-client', () => ({
  getQueryTableResults: jest.fn(),
  getUseUtcTimeFromCookie: jest.fn(() => false),
}))

const mockGetQueryTableResults = jest.mocked(SynapseClient.getQueryTableResults)

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
