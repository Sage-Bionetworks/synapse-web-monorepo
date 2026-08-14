import { mockTableEntity } from '@/mocks/entity/mockTableEntity'
import { mockQueryBundleRequest } from '@/mocks/mockFileViewQuery'
import testData from '@/mocks/mockQueryResponseDataWithManyEnumFacets'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseConstants } from '@/utils'
import {
  FacetColumnResultValues,
  QueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import { render, screen, within } from '@testing-library/react'
import { useMeasure } from '@react-hookz/web'
import { QueryVisualizationWrapper } from '../../QueryVisualizationWrapper/QueryVisualizationWrapper'
import QueryWrapper from '../../QueryWrapper'
import FacetNavPanel, { FacetNavPanelProps } from './FacetNavPanel'
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
  const MockPlot = (props: { style?: React.CSSProperties }) => (
    <div data-testid="facet-nav-plot" style={props.style} />
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
    mockPlotContainerMeasurements = {
      width: 400,
      height: 200,
    }
    mockUseMeasure.mockReturnValue([
      mockPlotContainerMeasurements,
      vi.fn(),
    ] as any)
    registerTableQueryResult(request.query, testData)
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

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
})
