import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { SynapseConstants } from '../../../../utils'
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

const mockOnAddValueToSelection = jest.fn()
const mockOnRemoveAllFacetSelections = jest.fn()
const mockOnRemoveValueFromSelection = jest.fn()
const mockOnHoverOverValue = jest.fn()

const defaultProps = {
  onAddValueToSelection: mockOnAddValueToSelection,
  allIsSelected: false,
  containerAs: undefined,
  dropdownType: undefined,
  facetTitle: '',
  facetValues: facetValues,
  hideCollapsible: false,
  onRemoveAllFacetSelections: mockOnRemoveAllFacetSelections,
  onRemoveValueFromSelection: mockOnRemoveValueFromSelection,
  onHoverOverValue: mockOnHoverOverValue,
} satisfies EnumFacetFilterUIProps

function renderComponent(overrides?: Partial<EnumFacetFilterUIProps>) {
  return render(<EnumFacetFilterUI {...defaultProps} {...overrides} />)
}

describe('EnumFacetFilterUI (unit tests)', () => {
  beforeEach(() => {
    jest.clearAllMocks()
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

    expect(checkboxes[0].checked).toBe(defaultProps.allIsSelected)
    facetValues.forEach((facetValue, i) => {
      expect(checkboxes[i + 1].checked).toBe(facetValue.isSelected)
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
      fireEvent.click(button)

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
      const labels = container.querySelectorAll<HTMLSpanElement>(
        'input[type="checkbox"] ~ label',
      )
      const counts = container.querySelectorAll<HTMLDivElement>(
        '.EnumFacetFilter__count',
      )
      expect(labels).toHaveLength(4)
      expect(counts).toHaveLength(3)

      expect(labels[0].textContent).toBe('All')

      expect(labels[1].textContent).toBe(`${facetValues[0].value}`)
      expect(counts[0].textContent).toBe(`${facetValues[0].count}`)

      expect(labels[2].textContent).toBe(`${facetValues[1].value}`)
      expect(counts[1].textContent).toBe(`${facetValues[1].count}`)

      expect(labels[3].textContent).toBe(`Not Assigned`)
      expect(counts[2].textContent).toBe(`${facetValues[2].count}`)
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

    it('should show all items if items with index >=5 is selected', async () => {
      const facetValues = generateManyFacetValues()
      facetValues[5].isSelected = true

      const { container } = renderComponent({
        facetValues,
      })

      await waitFor(() => {
        expect(screen.queryAllByRole('checkbox').length).toBeGreaterThan(0)
      })
      const labels = container.querySelectorAll(
        'input[type="checkbox"] ~ label',
      )
      expect(labels).toHaveLength(facetValues.length + 1)
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
