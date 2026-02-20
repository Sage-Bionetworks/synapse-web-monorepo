import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import dayjs from 'dayjs'
import {
  FacetTypeNames,
  type Facet,
  type SearchQuery,
} from '@sage-bionetworks/synapse-types'
import { SearchFacetPanel, AppliedFacetsChips } from './SearchFacetPanel'
import { MAX_FACET_VALUES_SHOWN } from './SearchFacetPanelUtils'

vi.mock('../../UserCard/UserBadge', () => ({
  UserBadge: ({ userId }: { userId: string }) => <span>User: {userId}</span>,
}))

const FIXED_NOW_UNIX = 1_700_000_000 // arbitrary fixed point in the past

// Helpers to build mock facets
const makeLiteralFacet = (name: string, values: string[]): Facet => ({
  name,
  type: FacetTypeNames.LITERAL,
  min: 0,
  max: 0,
  constraints: values.map(v => ({ value: v, count: 1 })),
})

const makeDateFacet = (name: string): Facet => ({
  name,
  type: FacetTypeNames.DATE,
  min: 0,
  max: 0,
  constraints: [{ value: 'date', count: 1 }], // non-empty so shouldRenderFacet returns true
})

const defaultQuery: SearchQuery = {
  booleanQuery: [],
  rangeQuery: [],
  start: 0,
}

const defaultPanelProps = {
  query: defaultQuery,
  setQuery: vi.fn() as (newQuery: SearchQuery) => void,
  facets: [] as Facet[],
  onAddFacet: vi.fn() as (facetName: string, facetValue: string) => void,
  onRemoveFacet: vi.fn() as (facetName: string, facetValue: string) => void,
  onSetRangeFacet: vi.fn() as (facetName: string, minValue: string) => void,
  onRemoveRangeFacet: vi.fn() as (facetName: string) => void,
  isFacetApplied: vi.fn(() => false) as (
    facetName: string,
    facetValue: string,
  ) => boolean,
  isRangeFacetApplied: vi.fn(() => false) as (facetName: string) => boolean,
  getAppliedRangeFacet: vi.fn(() => undefined) as (
    facetName: string,
  ) => { min: string } | undefined,
}

describe('SearchFacetPanel', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders facets that are in FACET_DISPLAY_ORDER', () => {
    render(
      <SearchFacetPanel
        {...defaultPanelProps}
        facets={[makeLiteralFacet('node_type', ['dataset'])]}
      />,
    )
    expect(screen.getByText('Entity Type')).toBeInTheDocument()
  })

  it('does not show Reset Filters when no facets are applied', () => {
    render(<SearchFacetPanel {...defaultPanelProps} />)
    expect(screen.queryByText('Reset Filters')).not.toBeInTheDocument()
  })

  it('shows Reset Filters when booleanQuery has entries', () => {
    render(
      <SearchFacetPanel
        {...defaultPanelProps}
        query={{
          ...defaultQuery,
          booleanQuery: [{ key: 'node_type', value: 'dataset', not: false }],
        }}
      />,
    )
    expect(screen.getByText('Reset Filters')).toBeInTheDocument()
  })

  it('shows Reset Filters when rangeQuery has entries', () => {
    render(
      <SearchFacetPanel
        {...defaultPanelProps}
        query={{
          ...defaultQuery,
          rangeQuery: [{ key: 'modified_on', min: '1699990000', max: '' }],
        }}
      />,
    )
    expect(screen.getByText('Reset Filters')).toBeInTheDocument()
  })

  it('calls setQuery with cleared filters when Reset Filters is clicked', async () => {
    const setQuery = vi.fn()
    const query: SearchQuery = {
      ...defaultQuery,
      booleanQuery: [{ key: 'node_type', value: 'dataset', not: false }],
    }
    render(
      <SearchFacetPanel
        {...defaultPanelProps}
        query={query}
        setQuery={setQuery}
      />,
    )

    await userEvent.click(screen.getByText('Reset Filters'))

    expect(setQuery).toHaveBeenCalledWith({
      ...query,
      booleanQuery: [],
      rangeQuery: [],
      start: 0,
    })
  })

  it('does not render a facet with empty constraints', () => {
    render(
      <SearchFacetPanel
        {...defaultPanelProps}
        facets={[
          {
            name: 'node_type',
            type: FacetTypeNames.LITERAL,
            min: 0,
            max: 0,
            constraints: [],
          },
        ]}
      />,
    )
    expect(screen.queryByText('Entity Type')).not.toBeInTheDocument()
  })
})

describe('LiteralFacetValues', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const renderWithLiteralFacet = (
    name: string,
    values: string[],
    overrides: Partial<typeof defaultPanelProps> = {},
  ) =>
    render(
      <SearchFacetPanel
        {...defaultPanelProps}
        facets={[makeLiteralFacet(name, values)]}
        {...overrides}
      />,
    )

  const renderWithNodeTypeFacet = (
    values: string[],
    overrides: Partial<typeof defaultPanelProps> = {},
  ) => renderWithLiteralFacet('node_type', values, overrides)

  it('renders a checkbox for each visible value', () => {
    renderWithNodeTypeFacet(['dataset', 'file', 'folder'])

    expect(
      screen.getByRole('checkbox', { name: /dataset/i }),
    ).toBeInTheDocument()

    expect(screen.getByRole('checkbox', { name: /file/i })).toBeInTheDocument()

    expect(
      screen.getByRole('checkbox', { name: /folder/i }),
    ).toBeInTheDocument()
  })

  it('does not render the "link" entity type', () => {
    renderWithNodeTypeFacet(['dataset', 'link', 'file'])

    expect(
      screen.queryByRole('checkbox', { name: /^link$/i }),
    ).not.toBeInTheDocument()

    expect(
      screen.getByRole('checkbox', { name: /dataset/i }),
    ).toBeInTheDocument()
  })

  it('shows only MAX_FACET_VALUES_SHOWN checkboxes by default when there are more', async () => {
    const dataLength = MAX_FACET_VALUES_SHOWN + 5
    const values = Array.from(
      { length: dataLength },
      (_, i) => `consortium-${i}`,
    )

    renderWithLiteralFacet('consortium', values)
    // Render with 16 values (including "all" facet), but only MAX_FACET_VALUES_SHOWN should be shown initially
    expect(screen.getAllByRole('checkbox')).toHaveLength(
      MAX_FACET_VALUES_SHOWN + 1,
    ) // +1 for the "All" option

    expect(screen.getByText(`Show all ${dataLength}`)).toBeInTheDocument()

    // After clicking "Show all", all checkboxes should be visible
    await userEvent.click(screen.getByText(`Show all ${dataLength}`))
    expect(screen.getAllByRole('checkbox')).toHaveLength(dataLength + 1)
  })

  it('calls onAddFacet when an unchecked checkbox is clicked', async () => {
    const onAddFacet = vi.fn()
    renderWithNodeTypeFacet(['dataset'], { onAddFacet })

    await userEvent.click(screen.getByRole('checkbox', { name: /dataset/i }))
    expect(onAddFacet).toHaveBeenCalledWith('node_type', 'dataset')
  })

  it('calls onRemoveFacet when a checked checkbox is clicked', async () => {
    const onRemoveFacet = vi.fn()
    renderWithNodeTypeFacet(['dataset'], {
      onRemoveFacet,
      isFacetApplied: (name: string, value: string) =>
        name === 'node_type' && value === 'dataset',
    })

    await userEvent.click(screen.getByRole('checkbox', { name: /dataset/i }))
    expect(onRemoveFacet).toHaveBeenCalledWith('node_type', 'dataset')
  })
})

describe('DateRangeFacetValues', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(FIXED_NOW_UNIX * 1000)
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  const renderWithDateFacet = (
    overrides: Partial<typeof defaultPanelProps> = {},
  ) =>
    render(
      <SearchFacetPanel
        {...defaultPanelProps}
        facets={[makeDateFacet('modified_on')]}
        {...overrides}
      />,
    )

  it('"Any Time" is selected when no range facet is applied', () => {
    renderWithDateFacet()
    expect(screen.getByRole('radio', { name: /any time/i })).toBeChecked()
  })

  it('selects the correct preset when getAppliedRangeFacet returns a matching timestamp', () => {
    const oneHourAgo = String(FIXED_NOW_UNIX - 3600)
    renderWithDateFacet({
      getAppliedRangeFacet: () => ({ min: oneHourAgo }),
    })

    expect(screen.getByRole('radio', { name: /past hour/i })).toBeChecked()
  })

  it('calls onSetRangeFacet with the correct timestamp when a preset is selected', () => {
    const onSetRangeFacet = vi.fn()
    renderWithDateFacet({ onSetRangeFacet })

    const expectedMin = String(dayjs().subtract(1, 'hour').unix())
    fireEvent.click(screen.getByRole('radio', { name: /past hour/i }))

    expect(onSetRangeFacet).toHaveBeenCalledWith('modified_on', expectedMin)
  })

  it('calls onRemoveRangeFacet when "Any Time" is selected', () => {
    const onRemoveRangeFacet = vi.fn()
    const oneHourAgo = String(FIXED_NOW_UNIX - 3600)
    renderWithDateFacet({
      onRemoveRangeFacet,
      getAppliedRangeFacet: () => ({ min: oneHourAgo }),
    })

    fireEvent.click(screen.getByRole('radio', { name: /any time/i }))
    expect(onRemoveRangeFacet).toHaveBeenCalledWith('modified_on')
  })
})

describe('AppliedFacetsChips', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(FIXED_NOW_UNIX * 1000)
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  const defaultChipProps = {
    query: defaultQuery,
    onRemoveFacet: vi.fn() as (facetName: string, facetValue: string) => void,
    onRemoveRangeFacet: vi.fn() as (facetName: string) => void,
  }

  it('renders nothing when there are no applied facets', () => {
    const { container } = render(<AppliedFacetsChips {...defaultChipProps} />)
    expect(container.firstChild).toBeNull()
  })

  it('renders a chip for each applied boolean facet', () => {
    render(
      <AppliedFacetsChips
        {...defaultChipProps}
        query={{
          ...defaultQuery,
          booleanQuery: [
            { key: 'node_type', value: 'dataset', not: false },
            { key: 'consortium', value: 'HTAN', not: false },
          ],
        }}
      />,
    )
    expect(screen.getByText('Dataset')).toBeInTheDocument()
    expect(screen.getByText('HTAN')).toBeInTheDocument()
  })

  it('renders a chip for an applied range facet with the preset label', () => {
    const oneHourAgo = String(FIXED_NOW_UNIX - 3600)

    render(
      <AppliedFacetsChips
        {...defaultChipProps}
        query={{
          ...defaultQuery,
          rangeQuery: [{ key: 'modified_on', min: oneHourAgo, max: '' }],
        }}
      />,
    )

    expect(screen.getByText('Past Hour')).toBeInTheDocument()
  })

  it('calls onRemoveFacet when a boolean chip delete icon is clicked', () => {
    const onRemoveFacet = vi.fn()

    render(
      <AppliedFacetsChips
        {...defaultChipProps}
        onRemoveFacet={onRemoveFacet}
        query={{
          ...defaultQuery,
          booleanQuery: [{ key: 'node_type', value: 'dataset', not: false }],
        }}
      />,
    )

    fireEvent.click(screen.getByTestId('CloseIcon'))
    expect(onRemoveFacet).toHaveBeenCalledWith('node_type', 'dataset')
  })

  it('calls onRemoveRangeFacet when a range chip delete icon is clicked', () => {
    const onRemoveRangeFacet = vi.fn()
    const oneHourAgo = String(FIXED_NOW_UNIX - 3600)

    render(
      <AppliedFacetsChips
        {...defaultChipProps}
        onRemoveRangeFacet={onRemoveRangeFacet}
        query={{
          ...defaultQuery,
          rangeQuery: [{ key: 'modified_on', min: oneHourAgo, max: '' }],
        }}
      />,
    )

    fireEvent.click(screen.getByTestId('CloseIcon'))
    expect(onRemoveRangeFacet).toHaveBeenCalledWith('modified_on')
  })
})
