import TableFeedCards from './TableFeedCards'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import syn23519444Json from '../../mocks/query/syn23519444.json'
import { act } from '@testing-library/react'
import { render, fireEvent } from '@testing-library/react'
import { SynapseTestContext } from '../../mocks/MockSynapseContext'
import SynapseClient from '../../synapse-client'

jest.mock('../../synapse-client', () => ({
  getQueryTableResults: jest.fn(),
}))

const data = syn23519444Json as QueryResultBundle
const mockGetQueryTableResults = jest.mocked(SynapseClient.getQueryTableResults)

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
    mockGetQueryTableResults.mockResolvedValue(data)
  })

  it('displays news cards from a Synapse Table', async () => {
    // We must await asynchronous events for our assertions to pass
    // eslint-disable-next-line @typescript-eslint/require-await
    await act(async () => init())
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
