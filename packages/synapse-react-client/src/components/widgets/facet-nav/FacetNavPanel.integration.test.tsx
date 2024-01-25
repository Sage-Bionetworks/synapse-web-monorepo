import React from 'react'
import FacetNavPanel, { FacetNavPanelProps } from './FacetNavPanel'
import { render, screen, within } from '@testing-library/react'
import {
  FacetColumnResultValues,
  QueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import testData from '../../../mocks/mockQueryResponseDataWithManyEnumFacets'
import { SynapseConstants } from '../../../utils'
import { QueryVisualizationWrapper } from '../../QueryVisualizationWrapper/QueryVisualizationWrapper'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import { truncate } from './FacetPlotLegendUtils'
import { mockQueryBundleRequest } from '../../../mocks/mockFileViewQuery'
import QueryWrapper from '../../QueryWrapper'
import { server } from '../../../mocks/msw/server'
import { getHandlersForTableQuery } from '../../../mocks/msw/handlers/tableQueryHandlers'
import { mockTableEntity } from '../../../mocks/entity/mockTableEntity'

const mockApplyCallback = jest.fn(() => null)
const mockHideCallback = jest.fn(() => null)
const mockSetPlotTypeCallback = jest.fn(() => null)

const stringFacetValues: FacetColumnResultValues = {
  facetType: 'enumeration',
  columnName: 'Make',
  concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
  facetValues: [
    { value: 'Honda', count: 2, isSelected: false },
    { value: 'Chevy', count: 1, isSelected: true },
    {
      value: SynapseConstants.VALUE_NOT_SET,
      count: 1,
      isSelected: false,
    },
  ],
}

function createTestProps(overrides?: FacetNavPanelProps): FacetNavPanelProps {
  const defaultProps: FacetNavPanelProps = {
    applyChangesToGraphSlice: mockApplyCallback,
    applyChangesToFacetFilter: mockApplyCallback,
    index: 1,
    facetToPlot: stringFacetValues,
    onHide: mockHideCallback,
    plotType: 'PIE',
    onSetPlotType: mockSetPlotTypeCallback,
    isModalView: false,
  }
  return {
    ...defaultProps,
    ...overrides,
  }
}

let props: FacetNavPanelProps

const request: QueryBundleRequest = {
  ...mockQueryBundleRequest,
  entityId: mockTableEntity.id,
  query: {
    sql: `SELECT * FROM ${mockTableEntity.id}`,
  },
}

function renderComponent(overrides?: FacetNavPanelProps) {
  props = createTestProps(overrides)
  return render(
    <QueryWrapper initQueryRequest={request}>
      <QueryVisualizationWrapper>
        <FacetNavPanel {...props} />
      </QueryVisualizationWrapper>
    </QueryWrapper>,
    { wrapper: createWrapper() },
  )
}

describe('FacetNavPanel tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    server.use(...getHandlersForTableQuery(testData))
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('should initiate the panel with correct buttons and classes when not expanded', async () => {
    renderComponent()
    const panel = await screen.findByRole('figure')
    expect(panel).toHaveClass('FacetNavPanel')

    const buttons = await screen.findAllByRole<HTMLButtonElement>('button')
    expect(buttons.length).toBe(3)
    await screen.findByRole('button', { name: 'Filter by specific facet' })
    await screen.findByRole('button', { name: 'Expand to large graph' })
    await screen.findByRole('button', { name: 'Hide graph under Show More' })

    const panelBody = await within(panel).findByRole('graphics-object')
    expect(panelBody).toHaveClass('FacetNavPanel__body')
    expect(panelBody).not.toHaveClass('FacetNavPanel__body--expanded')
  })

  it('should initiate the panel with correct buttons and class when expanded', async () => {
    //when expanded the onCollapse callback is passed but onExpand is not
    renderComponent({
      ...props,
      onSetPlotType: mockSetPlotTypeCallback,
      isModalView: true,
    })
    const panel = await screen.findByRole('figure')
    expect(panel).toHaveClass('FacetNavPanel--expanded')

    await within(panel).findByText('Chart Type')
    await within(panel).findByText('Filter All Data By')

    const panelBody = await within(panel).findByRole('graphics-object')
    expect(panelBody).toHaveClass('FacetNavPanel__body')
  })

  it('should truncate values', () => {
    expect(truncate(undefined, 10)).toEqual(undefined)
    expect(truncate('', 0)).toEqual('')
    expect(truncate('', 5)).toEqual('')
    expect(truncate('123456789', 5)).toEqual('1234…')
    expect(truncate('12345', 5)).toEqual('12345')
  })
})
