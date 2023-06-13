import React from 'react'
import FacetNavPanel, {
  FacetNavPanelProps,
} from '../../../../src/components/widgets/facet-nav/FacetNavPanel'
import { render, screen, within } from '@testing-library/react'
import { FacetColumnResultValues } from '@sage-bionetworks/synapse-types'
import testData from '../../../../mocks/mockQueryResponseDataWithManyEnumFacets'
import { SynapseConstants } from '../../../../src/utils'
import {
  QueryContextProvider,
  QueryContextType,
} from '../../../../src/components/QueryContext/QueryContext'
import { QueryVisualizationContextProvider } from '../../../../src/components/QueryVisualizationWrapper'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import failOnConsole from 'jest-fail-on-console'
import { truncate } from '../../../../src/components/widgets/facet-nav/FacetPlotLegendUtils'

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

const defaultQueryContext: Partial<QueryContextType> = {
  data: testData,
  getLastQueryRequest: () => ({}),
  isLoadingNewBundle: false,
}

let props: FacetNavPanelProps

function init(
  overrides?: FacetNavPanelProps,
  queryContextProps?: Partial<QueryContextType>,
) {
  props = createTestProps(overrides)
  return render(
    <QueryContextProvider
      queryContext={{
        ...defaultQueryContext,
        ...queryContextProps,
      }}
    >
      <QueryVisualizationContextProvider
        queryVisualizationContext={{
          getColumnDisplayName: jest.fn(col => col),
        }}
      >
        <FacetNavPanel {...props} />
      </QueryVisualizationContextProvider>
    </QueryContextProvider>,
    { wrapper: createWrapper() },
  )
}

describe('FacetNavPanel tests', () => {
  failOnConsole()
  it('should initiate the panel with correct buttons and classes when not expanded', async () => {
    init()
    const panel = await screen.findByRole('graphics-document')
    expect(panel).toHaveClass('FacetNavPanel')

    const buttons = await screen.findAllByRole<HTMLButtonElement>('button')
    expect(buttons.length).toBe(3)
    expect(buttons[0].querySelector('svg')!.getAttribute('data-icon')).toBe(
      'filter',
    )
    expect(buttons[1].querySelector('svg')!.getAttribute('data-icon')).toBe(
      'expand',
    )
    expect(buttons[2].querySelector('svg')!.getAttribute('data-icon')).toBe(
      'close',
    )

    const panelBody = await within(panel).findByRole('graphics-object')
    expect(panelBody).toHaveClass('FacetNavPanel__body')
    expect(panelBody).not.toHaveClass('FacetNavPanel__body--expanded')
  })

  it('should initiate the panel with correct buttons and class when expanded', async () => {
    //when expanded the onCollapse callback is passed but onExpand is not
    init({
      ...props,
      onSetPlotType: mockSetPlotTypeCallback,
      isModalView: true,
    })
    const panel = await screen.findByRole('graphics-document')
    expect(panel).toHaveClass('FacetNavPanel--expanded')

    await within(panel).findByText('Chart Type')
    await within(panel).findByText('Filter All Data By')

    const panelBody = await within(panel).findByRole('graphics-object')
    expect(panelBody).not.toHaveClass('FacetNavPanel__body')
    expect(panelBody).toHaveClass('FacetNavPanel__body--expanded')
  })

  it('should truncate values', () => {
    expect(truncate(undefined, 10)).toEqual(undefined)
    expect(truncate('', 0)).toEqual('')
    expect(truncate('', 5)).toEqual('')
    expect(truncate('123456789', 5)).toEqual('1234…')
    expect(truncate('12345', 5)).toEqual('12345')
  })
})
