import React from 'react'
import FeaturedToolsList from '../../../../src/components/FeaturedToolsList/FeaturedToolsList'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import syn26344826Json from '../../../../mocks/query/syn26344826.json'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { SynapseTestContext } from '../../../../mocks/MockSynapseContext'

const SynapseClient = require('../../../../src/synapse-client/SynapseClient')
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
    SynapseClient.getQueryTableResults = jest.fn(() => Promise.resolve(data))
  })

  it('displays featured tool cards from a Synapse Table', async () => {
    await act(async () => await init())
    expect(container.querySelector('.FeaturedToolCard')).toBeDefined()
    expect(container.querySelectorAll('.FeaturedToolCard')).toHaveLength(3)
  })
})
