import * as React from 'react'
import TableFeedCards from '../../../src/lib/containers/TableFeedCards'
import { QueryResultBundle } from '../../../src/lib/utils/synapseTypes/'
import syn23519444Json from '../../../mocks/query/syn23519444.json'
import { act } from '@testing-library/react'
import { render, fireEvent } from '@testing-library/react'
import { SynapseTestContext } from '../../../mocks/MockSynapseContext'

const SynapseClient = require('../../../src/lib/utils/SynapseClient')
const data = syn23519444Json as QueryResultBundle

let container: HTMLElement

function init() {
  container = render(
    <SynapseTestContext>
      <TableFeedCards tableEntityId="syn23519444" />
    </SynapseTestContext>,
  ).container
}

describe('basic tests', () => {
  beforeEach(() => {
    SynapseClient.getQueryTableResults = jest.fn(() => Promise.resolve(data))
  })

  it('displays news cards from a Synapse Table', async () => {
    await act(async () => await init())
    expect(container.querySelector('.FeedItem')).toBeDefined()
    expect(container.querySelectorAll('.FeedItem')).toHaveLength(3)

    // verify and click the View More button
    expect(
      container.querySelector('.FeedViewAllNewsButtonContainer>button'),
    ).toBeDefined()
    const viewMoreButton = container.querySelector<HTMLInputElement>(
      '.FeedViewAllNewsButtonContainer>button',
    )
    fireEvent.click(viewMoreButton!)
    // after clicking more we should now be showing all items (4)
    expect(container.querySelectorAll('.FeedItem')).toHaveLength(4)
  })
})
