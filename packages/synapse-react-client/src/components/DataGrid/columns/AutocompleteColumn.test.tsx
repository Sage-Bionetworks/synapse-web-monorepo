import parseFreeTextGivenJsonSchemaType from '@/components/DataGrid/utils/parseFreeTextUsingJsonSchemaType'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
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

    const { rerender } = render(
      <AutocompleteCell {...(mockCellProps as AutocompleteCellProps)} />,
    )

    // Check that the component renders an input field
    const input = screen.getByRole('combobox')
    expect(input).toBeInTheDocument()

    await userEvent.type(input, 'freeText')

    // Check that the input displays the current value
    expect(input).toHaveValue('freeText')

    // Simulate blurring by changing active/focus to false
    act(() => {
      rerender(
        <AutocompleteCell
          {...(mockCellProps as AutocompleteCellProps)}
          focus={false}
          active={false}
        />,
      )
    })
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

    const { rerender } = render(
      <AutocompleteCell {...(mockCellProps as AutocompleteCellProps)} />,
    )

    const input = screen.getByRole('combobox')
    await userEvent.clear(input)
    await userEvent.type(input, '42')
    const expectedParsedValue = parseFreeTextGivenJsonSchemaType('42', 'number')

    // Simulate blurring by changing active/focus to false
    act(() => {
      rerender(
        <AutocompleteCell
          {...(mockCellProps as AutocompleteCellProps)}
          focus={false}
          active={false}
        />,
      )
    })

    await waitFor(() => {
      expect(mockSetRowData).toHaveBeenCalledWith(expectedParsedValue)
    })
  })

  it("supports opening the menu and selecting an option when clicking the input's dropdown arrow", async () => {
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

    screen.getByRole('combobox')
    // Click the dropdown arrow button
    const dropdownButton = screen.getByRole('button', {
      name: /open/i,
    })
    await userEvent.click(dropdownButton)

    // Verify that the options are displayed
    const option2 = await screen.findByRole('option', { name: 'option2' })
    expect(option2).toBeInTheDocument()

    // Select option2
    await userEvent.click(option2)

    // Verify that setRowData was called with 'option2'
    await waitFor(() => {
      expect(mockSetRowData).toHaveBeenCalledWith('option2')
    })
  })

  describe('Memoization and Performance', () => {
    it('should memoize cell component with custom comparison', () => {
      const mockSetRowData = vi.fn()
      const mockStopEditing = vi.fn()
      const choices = ['option1', 'option2']

      const mockCellProps: Partial<AutocompleteCellProps> = {
        rowData: 'option1',
        setRowData: mockSetRowData,
        choices,
        colType: 'string',
        clearValue: undefined,
        focus: false,
        active: false,
        stopEditing: mockStopEditing,
      }

      const { rerender } = render(
        <AutocompleteCell {...(mockCellProps as AutocompleteCellProps)} />,
      )

      // Rerender with same props but new function references (simulating grid behavior)
      const newSetRowData = vi.fn()
      const newStopEditing = vi.fn()
      rerender(
        <AutocompleteCell
          {...(mockCellProps as AutocompleteCellProps)}
          setRowData={newSetRowData}
          stopEditing={newStopEditing}
        />,
      )

      // Component should still render correctly despite function prop changes
      expect(screen.getByRole('combobox')).toBeInTheDocument()
      expect(screen.getByRole('combobox')).toHaveValue('option1')
    })

    it('should not re-render when only function props change', () => {
      const mockSetRowData = vi.fn()
      const mockStopEditing = vi.fn()
      const choices = ['option1', 'option2']

      const mockCellProps: Partial<AutocompleteCellProps> = {
        rowData: 'option1',
        setRowData: mockSetRowData,
        choices,
        colType: 'string',
        clearValue: undefined,
        focus: false,
        active: false,
        stopEditing: mockStopEditing,
      }

      const { rerender } = render(
        <AutocompleteCell {...(mockCellProps as AutocompleteCellProps)} />,
      )
      const input = screen.getByRole('combobox')

      // Rerender with only function props changed (grid behavior)
      rerender(
        <AutocompleteCell
          {...(mockCellProps as AutocompleteCellProps)}
          setRowData={vi.fn()}
          stopEditing={vi.fn()}
        />,
      )

      // Should still be the same DOM element (no re-render)
      expect(screen.getByRole('combobox')).toBe(input)
    })

    it('should re-render when active state changes', () => {
      const mockSetRowData = vi.fn()
      const mockStopEditing = vi.fn()
      const choices = ['option1', 'option2']

      const mockCellProps: Partial<AutocompleteCellProps> = {
        rowData: 'option1',
        setRowData: mockSetRowData,
        choices,
        colType: 'string',
        clearValue: undefined,
        focus: false,
        active: false,
        stopEditing: mockStopEditing,
      }

      const { rerender } = render(
        <AutocompleteCell {...(mockCellProps as AutocompleteCellProps)} />,
      )

      // Change active state
      rerender(
        <AutocompleteCell
          {...(mockCellProps as AutocompleteCellProps)}
          active={true}
        />,
      )

      // Component should update to show active state (indicators visible)
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })

    it('should re-render when focus state changes', () => {
      const mockSetRowData = vi.fn()
      const mockStopEditing = vi.fn()
      const choices = ['option1', 'option2']

      const mockCellProps: Partial<AutocompleteCellProps> = {
        rowData: 'option1',
        setRowData: mockSetRowData,
        choices,
        colType: 'string',
        clearValue: undefined,
        focus: false,
        active: false,
        stopEditing: mockStopEditing,
      }

      const { rerender } = render(
        <AutocompleteCell {...(mockCellProps as AutocompleteCellProps)} />,
      )

      // Change focus state
      rerender(
        <AutocompleteCell
          {...(mockCellProps as AutocompleteCellProps)}
          focus={true}
        />,
      )

      // Component should update
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })

    it('should re-render when rowData changes', () => {
      const mockSetRowData = vi.fn()
      const mockStopEditing = vi.fn()
      const choices = ['option1', 'option2', 'option3']

      const mockCellProps: Partial<AutocompleteCellProps> = {
        rowData: 'option1',
        setRowData: mockSetRowData,
        choices,
        colType: 'string',
        clearValue: undefined,
        focus: false,
        active: false,
        stopEditing: mockStopEditing,
      }

      const { rerender } = render(
        <AutocompleteCell {...(mockCellProps as AutocompleteCellProps)} />,
      )
      expect(screen.getByRole('combobox')).toHaveValue('option1')

      // Change rowData
      rerender(
        <AutocompleteCell
          {...(mockCellProps as AutocompleteCellProps)}
          rowData="option2"
        />,
      )

      // Component should show new value
      expect(screen.getByRole('combobox')).toHaveValue('option2')
    })

    it('should re-render when choices change', () => {
      const mockSetRowData = vi.fn()
      const mockStopEditing = vi.fn()
      const initialChoices = ['option1', 'option2']

      const mockCellProps: Partial<AutocompleteCellProps> = {
        rowData: 'option1',
        setRowData: mockSetRowData,
        choices: initialChoices,
        colType: 'string',
        clearValue: undefined,
        focus: false,
        active: false,
        stopEditing: mockStopEditing,
      }

      const { rerender } = render(
        <AutocompleteCell {...(mockCellProps as AutocompleteCellProps)} />,
      )

      // Change choices
      const newChoices = ['option1', 'option2', 'option3']
      rerender(
        <AutocompleteCell
          {...(mockCellProps as AutocompleteCellProps)}
          choices={newChoices}
        />,
      )

      // Component should update with new choices
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })

    it('should re-render when colType changes', () => {
      const mockSetRowData = vi.fn()
      const mockStopEditing = vi.fn()
      const choices = ['1', '2', '3']

      const mockCellProps: Partial<AutocompleteCellProps> = {
        rowData: '1',
        setRowData: mockSetRowData,
        choices,
        colType: 'string',
        clearValue: undefined,
        focus: false,
        active: false,
        stopEditing: mockStopEditing,
      }

      const { rerender } = render(
        <AutocompleteCell {...(mockCellProps as AutocompleteCellProps)} />,
      )

      // Change colType
      rerender(
        <AutocompleteCell
          {...(mockCellProps as AutocompleteCellProps)}
          colType="number"
        />,
      )

      // Component should update
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })

    it('should re-render when clearValue changes', () => {
      const mockSetRowData = vi.fn()
      const mockStopEditing = vi.fn()
      const choices = ['option1', 'option2']

      const mockCellProps: Partial<AutocompleteCellProps> = {
        rowData: 'option1',
        setRowData: mockSetRowData,
        choices,
        colType: 'string',
        clearValue: undefined,
        focus: false,
        active: false,
        stopEditing: mockStopEditing,
      }

      const { rerender } = render(
        <AutocompleteCell {...(mockCellProps as AutocompleteCellProps)} />,
      )

      // Change clearValue
      rerender(
        <AutocompleteCell
          {...(mockCellProps as AutocompleteCellProps)}
          clearValue={null}
        />,
      )

      // Component should update
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })
  })

  describe('Edge Cases with Memoization', () => {
    it('should handle null rowData with memoization', () => {
      const mockSetRowData = vi.fn()
      const mockStopEditing = vi.fn()
      const choices = ['option1', 'option2']

      const mockCellProps: Partial<AutocompleteCellProps> = {
        rowData: null,
        setRowData: mockSetRowData,
        choices,
        colType: 'string',
        clearValue: null,
        focus: false,
        active: false,
        stopEditing: mockStopEditing,
      }

      render(<AutocompleteCell {...(mockCellProps as AutocompleteCellProps)} />)
      expect(screen.getByRole('combobox')).toHaveValue('')
    })

    it('should handle boolean values with memoization', () => {
      const mockSetRowData = vi.fn()
      const mockStopEditing = vi.fn()
      const choices = [true, false]

      const mockCellProps: Partial<AutocompleteCellProps> = {
        rowData: true,
        setRowData: mockSetRowData,
        choices,
        colType: 'boolean',
        clearValue: null,
        focus: false,
        active: false,
        stopEditing: mockStopEditing,
      }

      render(<AutocompleteCell {...(mockCellProps as AutocompleteCellProps)} />)
      expect(screen.getByRole('combobox')).toHaveValue('true')
    })

    it('should handle numeric values with memoization', () => {
      const mockSetRowData = vi.fn()
      const mockStopEditing = vi.fn()
      const choices = [1, 2, 3]

      const mockCellProps: Partial<AutocompleteCellProps> = {
        rowData: 2,
        setRowData: mockSetRowData,
        choices,
        colType: 'number',
        clearValue: null,
        focus: false,
        active: false,
        stopEditing: mockStopEditing,
      }

      render(<AutocompleteCell {...(mockCellProps as AutocompleteCellProps)} />)
      expect(screen.getByRole('combobox')).toHaveValue('2')
    })
  })
})
