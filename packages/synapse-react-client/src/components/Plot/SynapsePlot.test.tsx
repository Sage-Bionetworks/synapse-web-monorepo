import mockSyn26438037Counts from '@/mocks/query/syn26438037Counts.json'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { Queries, render, RenderResult, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { SynapseClient } from '../../index'
import SynapsePlot, { SynapsePlotProps } from './SynapsePlot'

const customPlotClickCallback = jest.fn()

const defaultProps: SynapsePlotProps = {
  synapsePlotWidgetParams: {
    query:
      'SELECT resourceType, count(resourceType) FROM syn26438037 GROUP BY resourceType',
    type: 'bar',
  },
  customPlotParams: {
    additionalFilters: [],
    selectedFacets: [],
    onCustomPlotClick: customPlotClickCallback,
  },
}

async function renderComponent(props: SynapsePlotProps) {
  let renderReturn: RenderResult<Queries, HTMLElement, HTMLElement> | undefined
  // We must await asynchronous events for our assertions to pass
  // eslint-disable-next-line @typescript-eslint/require-await
  await act(async () => {
    renderReturn = render(<SynapsePlot {...props} />, {
      wrapper: createWrapper(),
    })
  })
  if (!renderReturn) {
    throw new Error('Error rendering component')
  }
  return renderReturn
}

describe('SynapsePlot', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest
      .spyOn(SynapseClient, 'getFullQueryTableResults')
      .mockResolvedValue(mockSyn26438037Counts as QueryResultBundle)
  })

  it('renders without crashing', async () => {
    await renderComponent(defaultProps)
    const svgXAxisElement = await screen.findByText('Animal Model', {
      exact: true,
    })
    expect(svgXAxisElement).toBeDefined()
  })
})
