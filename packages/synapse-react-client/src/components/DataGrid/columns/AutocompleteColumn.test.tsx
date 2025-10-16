import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AutocompleteCell, AutocompleteCellProps } from './AutocompleteColumn'

vi.mock('@/components/Datagrid/utils/parseFreeTextUsingJsonSchemaType', () => {
  return {
    default: vi.fn(val => val),
  }
})

describe('AutocompleteColumn', () => {
  it('should initialize and render AutocompleteCell with basic props', () => {
    const mockSetRowData = vi.fn()
    const choices = ['option1', 'option2', 'option3']
    const rowData = 'option1'

    const mockCellProps: Partial<AutocompleteCellProps> = {
      rowData,
      setRowData: mockSetRowData,
      choices,
    }

    render(<AutocompleteCell {...(mockCellProps as AutocompleteCellProps)} />)

    // Check that the component renders an input field
    const input = screen.getByRole('combobox')
    expect(input).toBeInTheDocument()

    // Check that the input displays the current value
    expect(input).toHaveValue('option1')
  })
})
