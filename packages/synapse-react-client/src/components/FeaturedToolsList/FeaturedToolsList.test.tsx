import React from 'react'
import FeaturedToolsList from './FeaturedToolsList'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import syn26344826Json from '../../mocks/query/syn26344826.json'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { SynapseTestContext } from '../../mocks/MockSynapseContext'
import SynapseClient from '../../synapse-client'

jest.mock('../../synapse-client', () => ({
  getQueryTableResults: jest.fn(),
}))

const mockGetQueryTableResults = jest.mocked(SynapseClient.getQueryTableResults)

const data = syn26344826Json as QueryResultBundle

let container: HTMLElement

function init() {
  container = render(
    <SynapseTestContext>
      <FeaturedToolsList
        entityId={'syn26344826'}
        idColumnName={'Resource_id'}
        nameColumnName={'Resource Name'}
        descriptionColumnName={'Description'}
        typeColumnName={'Resource Type'}
        dateColumnName={'Date Added'}
        toolDetailPageURL={'/ToolDetailsPage/resourceId='}
      />
    </SynapseTestContext>,
  ).container
}

describe('basic tests', () => {
  beforeEach(() => {
    mockGetQueryTableResults.mockResolvedValue(data)
  })

  it('displays featured tool cards from a Synapse Table', async () => {
    // We must await asynchronous events for our assertions to pass
    // eslint-disable-next-line @typescript-eslint/require-await
    await act(async () => init())
    expect(container.querySelector('.FeaturedToolCard')).toBeDefined()
    expect(container.querySelectorAll('.FeaturedToolCard')).toHaveLength(3)
  })
})
