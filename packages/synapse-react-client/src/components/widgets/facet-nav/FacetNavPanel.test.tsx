import '@/mocks/msw/server'
import { mockTableEntity } from '@/mocks/entity/mockTableEntity'
import { mockQueryBundleRequest } from '@/mocks/mockFileViewQuery'
import testData from '@/mocks/mockQueryResponseDataWithManyEnumFacets'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseConstants } from '@/utils'
import {
  ColumnTypeEnum,
  FacetColumnResultValues,
  QueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useMeasure } from '@react-hookz/web'
import { QueryVisualizationWrapper } from '../../QueryVisualizationWrapper/QueryVisualizationWrapper'
import QueryWrapper from '../../QueryWrapper'
import FacetNavPanel, {
  extractPlotDataArray,
  FacetNavPanelProps,
} from './FacetNavPanel'
import { truncate } from './FacetPlotLegendUtils'

let mockPlotContainerMeasurements: { width?: number; height?: number } = {
  width: 400,
  height: 200,
}

vi.mock('@react-hookz/web', async () => {
  const actual =
    await vi.importActual<typeof import('@react-hookz/web')>('@react-hookz/web')

  return {
    ...actual,
    useMeasure: vi.fn(),
  }
})

const mockUseMeasure = vi.mocked(useMeasure)

vi.mock('../../Plot/Plot', () => {
  // Clicking the mock plot reports a click on the first slice, as Plotly would.
  const MockPlot = (props: {
    style?: React.CSSProperties
    onClick?: (event: unknown) => void
  }) => (
    <div
      data-testid="facet-nav-plot"
      style={props.style}
      onClick={() =>
        props.onClick?.({
          points: [
            { pointNumber: 0, data: { facetEnumerationValues: ['Honda'] } },
          ],
        })
      }
    />
  )

  return {
    default: MockPlot,
  }
})

const mockApplyCallback = vi.fn(() => null)
const mockHideCallback = vi.fn(() => null)
const mockSetPlotTypeCallback = vi.fn(() => null)

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

function createTestProps(
  overrides?: Partial<FacetNavPanelProps>,
): FacetNavPanelProps {
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

function renderComponent(overrides?: Partial<FacetNavPanelProps>) {
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
  beforeEach(() => {
    mockPlotContainerMeasurements = {
      width: 400,
      height: 200,
    }
    mockUseMeasure.mockReturnValue([
      mockPlotContainerMeasurements,
      vi.fn(),
    ] as any)
    registerTableQueryResult(request.query, testData)
    mockApplyCallback.mockClear()
  })

  it('should initiate the panel with correct buttons and classes when not expanded', async () => {
    renderComponent()
    const panel = await screen.findByRole('figure')
    expect(panel).toHaveClass('FacetNavPanel')

    const buttons = await screen.findAllByRole<HTMLButtonElement>('button')
    expect(buttons.length).toBe(3)
    await screen.findByRole('button', {
      name: `Filter by ${stringFacetValues.columnName}`,
    })
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

    await within(panel).findByRole('combobox', { name: 'Chart Type' })
    await within(panel).findByRole('combobox', { name: 'Filter All Data By' })

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

  it('should render the plot only after a non-zero width is measured', async () => {
    mockPlotContainerMeasurements = {
      width: 0,
      height: 200,
    }
    mockUseMeasure.mockReturnValue([
      mockPlotContainerMeasurements,
      vi.fn(),
    ] as any)

    const firstRender = renderComponent()
    await screen.findByRole('figure')
    expect(screen.queryByTestId('facet-nav-plot')).not.toBeInTheDocument()

    firstRender.unmount()

    mockPlotContainerMeasurements = {
      width: 250.5,
      height: 200,
    }
    mockUseMeasure.mockReturnValue([
      mockPlotContainerMeasurements,
      vi.fn(),
    ] as any)

    renderComponent()
    await screen.findByRole('figure')
    expect(await screen.findByTestId('facet-nav-plot')).toBeInTheDocument()
  })

  it('applies the clicked value as a facet filter', async () => {
    renderComponent()

    await userEvent.click(await screen.findByTestId('facet-nav-plot'))

    expect(mockApplyCallback).toHaveBeenCalledWith(
      stringFacetValues,
      stringFacetValues.facetValues[0],
      true,
    )
  })

  it('cannot change the query when filtering is disabled, but can still be expanded, re-typed and hidden', async () => {
    const user = userEvent.setup()
    renderComponent({ disableFiltering: true })

    await user.click(await screen.findByTestId('facet-nav-plot'))
    expect(mockApplyCallback).not.toHaveBeenCalled()
    expect(
      screen.queryByRole('button', {
        name: `Filter by ${stringFacetValues.columnName}`,
      }),
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Hide graph under Show More' }),
    ).toBeInTheDocument()

    await user.click(
      screen.getByRole('button', { name: 'Expand to large graph' }),
    )
    const dialog = await screen.findByRole('dialog')
    expect(
      await within(dialog).findByRole('combobox', { name: 'Chart Type' }),
    ).toBeInTheDocument()
    expect(
      within(dialog).queryByRole('combobox', { name: 'Filter All Data By' }),
    ).not.toBeInTheDocument()
    await user.click(within(dialog).getByTestId('facet-nav-plot'))
    expect(mockApplyCallback).not.toHaveBeenCalled()
    expect(
      within(dialog).getByRole('button', { name: 'Close' }),
    ).toBeInTheDocument()
  })
})

describe('extractPlotDataArray', () => {
  const facet: FacetColumnResultValues = {
    concreteType:
      'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
    columnName: 'sex',
    facetType: 'enumeration',
    facetValues: [
      { value: 'Female', count: 10, isSelected: false },
      { value: 'Unknown', count: 0, isSelected: false },
    ],
  }

  it('shows post-processed counts as display text in the legend and hover text, without pie percentages', async () => {
    const plotData = await extractPlotDataArray(
      { ...facet, binSize: 5 },
      ColumnTypeEnum.STRING,
      0,
      'PIE',
      undefined,
      true,
    )

    expect(plotData.labels.map(label => label.countText)).toEqual([
      '≈ 10',
      '≈ 0',
    ])
    expect(plotData.data[0]).toMatchObject({
      customdata: ['≈ 10', '≈ 0'],
      hovertemplate: '<b>%{text}: </b><br>%{customdata} <br><extra></extra>',
    })
  })

  it('keeps exact counts and pie percentages when counts are not post-processed', async () => {
    const plotData = await extractPlotDataArray(
      facet,
      ColumnTypeEnum.STRING,
      0,
      'PIE',
    )

    expect(plotData.labels.map(label => label.countText)).toEqual(['10', '0'])
    expect(plotData.data[0]).toMatchObject({
      customdata: undefined,
      hovertemplate:
        '<b>%{text}: </b><br>%{value} (%{percent}) <br><extra></extra>',
    })
  })

  it('draws a horizontal bar chart with one bar per value: counts along x, values along y', async () => {
    const plotData = await extractPlotDataArray(
      facet,
      ColumnTypeEnum.STRING,
      0,
      'HORIZONTAL_BAR',
    )

    expect(plotData.data[0]).toMatchObject({
      type: 'bar',
      orientation: 'h',
      x: [10, 0],
      y: ['Female', 'Unknown'],
      hovertemplate: '<b>%{text}: </b><br>%{x} <br><extra></extra>',
    })
  })
})
