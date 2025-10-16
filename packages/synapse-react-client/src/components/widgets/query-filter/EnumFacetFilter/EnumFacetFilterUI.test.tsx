import { SynapseConstants } from '@/utils'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import EnumFacetFilterUI, {
  EnumFacetFilterUIProps,
  RenderedFacetValue,
} from './EnumFacetFilterUI'

const facetValues: RenderedFacetValue[] = [
  { value: 'Honda', count: 2, isSelected: false, displayText: 'Honda' },
  { value: 'Chevy', count: 1, isSelected: true, displayText: 'Chevy' },
  {
    value: SynapseConstants.VALUE_NOT_SET,
    count: 1,
    isSelected: false,
    displayText: SynapseConstants.FRIENDLY_VALUE_NOT_SET,
  },
]

function generateManyFacetValues(): RenderedFacetValue[] {
  const result: RenderedFacetValue[] = []
  for (let i = 0; i < 20; i++) {
    result.push({
      value: `Honda${i}`,
      displayText: `Honda${i}`,
      count: Math.floor(Math.random() * 10),
      isSelected: false,
    })
  }
  return result
}

const mockOnAddValueToSelection = vi.fn()
const mockOnRemoveAllFacetSelections = vi.fn()
const mockOnRemoveValueFromSelection = vi.fn()
const mockOnHoverOverValue = vi.fn()

const defaultProps = {
  onAddValueToSelection: mockOnAddValueToSelection,
  filterIsActive: true,
  containerAs: undefined,
  dropdownType: undefined,
  facetTitle: '',
  facetValues: facetValues,
  hideCollapsible: false,
  onRemoveAllFacetSelections: mockOnRemoveAllFacetSelections,
  onRemoveValueFromSelection: mockOnRemoveValueFromSelection,
  onHoverOverValue: mockOnHoverOverValue,
  canMultiSelect: true,
} satisfies EnumFacetFilterUIProps

function renderComponent(overrides?: Partial<EnumFacetFilterUIProps>) {
  return render(<EnumFacetFilterUI {...defaultProps} {...overrides} />)
}

describe('EnumFacetFilterUI (unit tests)', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Renders the correct UI component', () => {
    it('should render as a dropdown if containerAs = Dropdown', () => {
      const { container } = renderComponent({
        containerAs: 'Dropdown',
      })
      expect(container.querySelector('.dropdown')).toBeDefined()
    })

    it('should render as a collapsible panel with header if containerAs = Collapsible', () => {
      const { container } = renderComponent({
        containerAs: 'Collapsible',
      })

      expect(container.querySelector('div.FacetFilterHeader')).toBeDefined()
    })
  })

  it('display values, selections, and counts', async () => {
    renderComponent()
    const checkboxes = await screen.findAllByRole<HTMLInputElement>('checkbox')

    expect(checkboxes).toHaveLength(4)

    expect(checkboxes[0].checked).toBe(!defaultProps.filterIsActive)
    facetValues.forEach((facetValue, i) => {
      expect(checkboxes[i + 1].checked).toBe(facetValue.isSelected)
    })
  })

  it('displays radio buttons if canMultiSelect is false', async () => {
    renderComponent({
      canMultiSelect: false,
    })

    const selectAllCheckbox = await screen.findByRole<HTMLInputElement>(
      'checkbox',
    )
    expect(selectAllCheckbox.checked).toBe(!defaultProps.filterIsActive)

    const radioOptions = await screen.findAllByRole<HTMLInputElement>('radio')
    expect(radioOptions).toHaveLength(facetValues.length)

    facetValues.forEach((facetValue, i) => {
      expect(radioOptions[i].checked).toBe(facetValue.isSelected)
    })
  })

  describe('collapsible behavior', () => {
    it('should hide content when toggled', async () => {
      const { container } = renderComponent()
      await waitFor(() => {
        const facetFilterElement =
          container.getElementsByClassName('EnumFacetFilter')[0]
        expect(facetFilterElement).toBeDefined()
        expect(facetFilterElement).toHaveClass('MuiCollapse-entered')
      })
      // toggle collapse via button
      const button = container.querySelector(
        'button.FacetFilterHeader__collapseToggleBtn',
      )!
      await userEvent.click(button)

      await waitFor(() =>
        expect(
          container.getElementsByClassName('EnumFacetFilter')[0],
        ).toHaveClass('MuiCollapse-hidden'),
      )
    })
  })

  describe('label initialization', () => {
    it('should show the labels for each option', async () => {
      const { container } = renderComponent()
      await waitFor(() => {
        expect(screen.queryAllByRole('checkbox').length).toBeGreaterThan(0)
      })
      const labels = screen.getAllByRole('checkbox')
      const counts = container.querySelectorAll<HTMLDivElement>(
        '.EnumFacetFilter__count',
      )
      expect(labels).toHaveLength(4)
      expect(counts).toHaveLength(3)

      screen.getByLabelText('All')

      screen.getByLabelText(facetValues[0].value)
      expect(counts[0]).toHaveTextContent(
        facetValues[0].count!.toLocaleString(),
      )

      screen.getByLabelText(facetValues[1].value)
      expect(counts[1]).toHaveTextContent(
        facetValues[1].count!.toLocaleString(),
      )

      screen.getByLabelText('Not Assigned')
      expect(counts[2]).toHaveTextContent(
        facetValues[2].count!.toLocaleString(),
      )
    })

    it('should hide > 5 items if items with index >=5 not selected', async () => {
      const facetValues = generateManyFacetValues()

      const { container } = renderComponent({
        facetValues: facetValues,
      })

      await waitFor(() => {
        expect(screen.queryAllByRole('checkbox').length).toBeGreaterThan(0)
      })
      const labels = container.querySelectorAll<HTMLDivElement>(
        '.EnumFacetFilter__count',
      )
      expect(labels).toHaveLength(5)
    })

    it('should not hide > 5 items if it is a dropdown', async () => {
      const facetValues = generateManyFacetValues()

      renderComponent({
        facetValues: facetValues,
        containerAs: 'Dropdown',
        dropdownType: 'Icon',
      })

      await userEvent.click(screen.getByRole('button'))

      await waitFor(() => {
        // 20 visible values + 1 "Select All"
        expect(screen.queryAllByRole('checkbox').length).toBe(21)
      })
    })

    it('should show all items if items with index >=5 is selected', async () => {
      const facetValues = generateManyFacetValues()
      facetValues[5].isSelected = true

      renderComponent({
        facetValues,
      })

      const checkboxes = await screen.findAllByRole('checkbox')
      expect(checkboxes.length).toEqual(facetValues.length + 1)
    })
  })

  describe('callbacks', () => {
    it('should call addValueToSelectedFacet with debounce option', async () => {
      renderComponent()
      await waitFor(() => {
        expect(screen.queryAllByRole('checkbox').length).toBeGreaterThan(0)
      })
      const individualFacetCheckboxes = screen.getAllByRole('checkbox').slice(1)

      // Ensure the checkboxes are in the correct state before interacting with them
      expect(individualFacetCheckboxes[0]).not.toBeChecked()
      expect(individualFacetCheckboxes[1]).toBeChecked()

      await userEvent.hover(individualFacetCheckboxes[0])
      await waitFor(() => {
        expect(mockOnHoverOverValue).toHaveBeenCalledTimes(1)
      })
      await userEvent.click(individualFacetCheckboxes[0])
      await userEvent.click(individualFacetCheckboxes[1])
      await waitFor(() => {
        expect(mockOnAddValueToSelection).toHaveBeenCalledTimes(1)
        expect(mockOnAddValueToSelection).toHaveBeenCalledWith(
          facetValues[0].value,
        )
        expect(mockOnRemoveValueFromSelection).toHaveBeenCalledTimes(1)
        expect(mockOnRemoveValueFromSelection).toHaveBeenCalledWith(
          facetValues[1].value,
        )
      })
    })
    it('should trigger callback on clear', async () => {
      renderComponent()
      const selectAllCheckbox = await screen.findByLabelText('All')
      await userEvent.click(selectAllCheckbox)
      expect(mockOnRemoveAllFacetSelections).toHaveBeenCalled()
    })
  })

  describe('search facet values', () => {
    it('finds the item with the matching displayText', async () => {
      renderComponent()
      const searchButton = await screen.findByRole('button', { name: 'Search' })
      await userEvent.click(searchButton)

      // There should be one checkbox for each value. There should no longer be a checkbox for the 'All' option
      expect(screen.queryAllByRole('checkbox').length).toBe(facetValues.length)

      const searchInput = await screen.findByRole('textbox')
      await userEvent.type(searchInput, 'Honda')

      // Only the matching option should be shown
      const checkboxes = screen.queryAllByRole('checkbox')
      expect(checkboxes.length).toBe(1)

      // Select the option
      await userEvent.click(checkboxes[0])
      await waitFor(() => {
        expect(mockOnAddValueToSelection).toHaveBeenCalled()
      })

      // Close search
      const closeSearchButton = await screen.findByRole('button', {
        name: 'Close search',
      })
      await userEvent.click(closeSearchButton)
      expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
    })
  })
})
