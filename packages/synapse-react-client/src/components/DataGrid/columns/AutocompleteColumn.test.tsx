import { vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import parseFreeTextGivenJsonSchemaType from '@/components/DataGrid/utils/parseFreeTextUsingJsonSchemaType'
import { AutocompleteCell, AutocompleteCellProps } from './AutocompleteColumn'

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
  it('should allow free text entry and update state accordingly', async () => {
    const mockSetRowData = vi.fn()
    const mockStopEditing = vi.fn()
    const choices = ['option1', 'option2', 'option3']
    const rowData = ''

    const mockCellProps: Partial<AutocompleteCellProps> = {
      rowData,
      setRowData: mockSetRowData,
      choices,
      focus: true,
      active: true,
      stopEditing: mockStopEditing,
    }

    render(<AutocompleteCell {...(mockCellProps as AutocompleteCellProps)} />)

    // Check that the component renders an input field
    const input = screen.getByRole('combobox')
    expect(input).toBeInTheDocument()

    await userEvent.type(input, 'freeText')

    // Check that the input displays the current value
    expect(input).toHaveValue('freeText')

    await userEvent.tab() // Simulate blur by tabbing away

    // Verify that setRowData was called with the free text value
    expect(mockSetRowData).toHaveBeenCalledWith('freeText')
  })

  it('should select an existing option and update rowData', async () => {
    const mockSetRowData = vi.fn()
    const mockStopEditing = vi.fn()
    const mockCellProps: Partial<AutocompleteCellProps> = {
      rowData: 'option1',
      setRowData: mockSetRowData,
      choices: ['option1', 'option2'],
      focus: true,
      active: true,
      stopEditing: mockStopEditing,
    }

    render(<AutocompleteCell {...(mockCellProps as AutocompleteCellProps)} />)

    const input = screen.getByRole('combobox')
    await userEvent.click(input)
    const option = await screen.findByRole('option', { name: 'option2' })
    await userEvent.click(option)

    await waitFor(() => expect(mockSetRowData).toHaveBeenCalledWith('option2'))
  })

  it('should parse free text with the provided colType on blur', async () => {
    const mockSetRowData = vi.fn()
    const mockStopEditing = vi.fn()
    const mockCellProps: Partial<AutocompleteCellProps> = {
      rowData: '',
      setRowData: mockSetRowData,
      choices: ['option1'],
      colType: 'number',
      focus: true,
      active: true,
      stopEditing: mockStopEditing,
    }

    render(<AutocompleteCell {...(mockCellProps as AutocompleteCellProps)} />)

    const input = screen.getByRole('combobox')
    await userEvent.clear(input)
    await userEvent.type(input, '42')
    const expectedParsedValue = parseFreeTextGivenJsonSchemaType('42', 'number')
    await userEvent.tab()

    await waitFor(() => {
      expect(mockSetRowData).toHaveBeenCalledWith(expectedParsedValue)
    })
  })
})
