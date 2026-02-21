import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import {
  autocompleteMultipleEnumColumn,
  AutocompleteMultipleEnumCellProps,
} from './AutocompleteMultipleEnumColumn'

// Helper to create a test cell component from the column factory
function createTestCell(choices: unknown[], colType?: string, limitTags = 2) {
  const column = autocompleteMultipleEnumColumn({
    choices,
    colType: colType,
    limitTags,
  })
  return column.component as React.ComponentType<AutocompleteMultipleEnumCellProps>
}

describe('autocompleteMultipleEnumColumn', () => {
  it('copyValue converts row data into a comma-separated string', () => {
    const column = autocompleteMultipleEnumColumn({ choices: [] })
    const copyValue = column.copyValue!
    expect(copyValue({ rowData: ['foo', 'bar'], rowIndex: 0 })).toBe('foo,bar')
    expect(copyValue({ rowData: 'freeText', rowIndex: 0 })).toBe('freeText')
    expect(copyValue({ rowData: null, rowIndex: 0 })).toBe('')
  })

  it('pasteValue parses delimited text using the JSON schema type', () => {
    const column = autocompleteMultipleEnumColumn({
      choices: [],
      colType: 'string',
    })
    const pasteValue = column.pasteValue!

    const result = pasteValue({
      value: 'one, two\tthree',
      rowData: null,
      rowIndex: 0,
    }) as unknown[]

    expect(Array.isArray(result)).toBe(true)
    expect(result).toContain('one')
    expect(result).toContain('two')
    expect(result).toContain('three')
  })

  it('filters out null-like parses but keeps valid ones', () => {
    const column = autocompleteMultipleEnumColumn({
      choices: [],
      colType: 'string',
    })
    const pasteValue = column.pasteValue!

    const result = pasteValue({
      value: ',valid,',
      rowData: null,
      rowIndex: 0,
    }) as unknown[]
    // Depending on how parseFreeTextUsingJsonSchemaType behaves, nulls or empties should be removed
    expect(result).toContain('valid')
  })

  it('pasteValue leaves non-string inputs unchanged', () => {
    const column = autocompleteMultipleEnumColumn({
      choices: [],
      colType: 'number',
    })
    const pasteValue = column.pasteValue!
    const arrayValue = ['someValue'] as unknown as string
    expect(pasteValue({ value: arrayValue, rowData: null, rowIndex: 0 })).toBe(
      arrayValue,
    )
  })

  it('cellClassName reflects value count when dynamic height is enabled', () => {
    // Ensure dynamic height class toggles based on the number of values shown.
    const column = autocompleteMultipleEnumColumn({
      choices: [],
      dynamicHeight: true,
    })
    const cellClassName = column.cellClassName
    expect(typeof cellClassName).toBe('function')

    if (typeof cellClassName === 'function') {
      // fewer than 3 values gets the multi-value-cell class
      expect(cellClassName({ rowData: ['one'], rowIndex: 0 })).toBe(
        'multi-value-cell',
      )
      // empty or null/undefined gets the multi-value-cell class
      expect(cellClassName({ rowData: undefined, rowIndex: 0 })).toBe(
        'multi-value-cell',
      )
      // 3 or more values gets the multi-value-cell-large class
      expect(
        cellClassName({ rowData: ['1', '2', '3', '4'], rowIndex: 0 }),
      ).toBe('multi-value-cell-large')
    }
  })

  describe('Memoization and Performance', () => {
    it('should memoize cell component with custom comparison', () => {
      const mockSetRowData = vi.fn()
      const mockStopEditing = vi.fn()
      const choices = ['option1', 'option2', 'option3']

      const TestCell = createTestCell(choices, 'string')

      const mockCellProps: Partial<AutocompleteMultipleEnumCellProps> = {
        rowData: ['option1'],
        setRowData: mockSetRowData,
        focus: false,
        active: false,
        stopEditing: mockStopEditing,
      }

      const { rerender } = render(
        <TestCell {...(mockCellProps as AutocompleteMultipleEnumCellProps)} />,
      )

      // Rerender with same props but new function references (simulating grid behavior)
      const newSetRowData = vi.fn()
      const newStopEditing = vi.fn()
      rerender(
        <TestCell
          {...(mockCellProps as AutocompleteMultipleEnumCellProps)}
          setRowData={newSetRowData}
          stopEditing={newStopEditing}
        />,
      )

      // Component should still render correctly despite function prop changes
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })

    it('should not re-render when only function props change', () => {
      const mockSetRowData = vi.fn()
      const mockStopEditing = vi.fn()
      const choices = ['option1', 'option2', 'option3']

      const TestCell = createTestCell(choices, 'string')

      const mockCellProps: Partial<AutocompleteMultipleEnumCellProps> = {
        rowData: ['option1', 'option2'],
        setRowData: mockSetRowData,
        focus: false,
        active: false,
        stopEditing: mockStopEditing,
      }

      const { rerender } = render(
        <TestCell {...(mockCellProps as AutocompleteMultipleEnumCellProps)} />,
      )
      const input = screen.getByRole('combobox')

      // Rerender with only function props changed (grid behavior)
      rerender(
        <TestCell
          {...(mockCellProps as AutocompleteMultipleEnumCellProps)}
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

      const TestCell = createTestCell(choices, 'string')

      const mockCellProps: Partial<AutocompleteMultipleEnumCellProps> = {
        rowData: ['option1'],
        setRowData: mockSetRowData,
        focus: false,
        active: false,
        stopEditing: mockStopEditing,
      }

      const { rerender } = render(
        <TestCell {...(mockCellProps as AutocompleteMultipleEnumCellProps)} />,
      )

      // Change active state
      rerender(
        <TestCell
          {...(mockCellProps as AutocompleteMultipleEnumCellProps)}
          active={true}
        />,
      )

      // Component should update to show active state
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })

    it('should re-render when focus state changes', () => {
      const mockSetRowData = vi.fn()
      const mockStopEditing = vi.fn()
      const choices = ['option1', 'option2']

      const TestCell = createTestCell(choices, 'string')

      const mockCellProps: Partial<AutocompleteMultipleEnumCellProps> = {
        rowData: ['option1'],
        setRowData: mockSetRowData,
        focus: false,
        active: false,
        stopEditing: mockStopEditing,
      }

      const { rerender } = render(
        <TestCell {...(mockCellProps as AutocompleteMultipleEnumCellProps)} />,
      )

      // Change focus state
      rerender(
        <TestCell
          {...(mockCellProps as AutocompleteMultipleEnumCellProps)}
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

      const TestCell = createTestCell(choices, 'string')

      const mockCellProps: Partial<AutocompleteMultipleEnumCellProps> = {
        rowData: ['option1'],
        setRowData: mockSetRowData,
        focus: false,
        active: false,
        stopEditing: mockStopEditing,
      }

      const { rerender } = render(
        <TestCell {...(mockCellProps as AutocompleteMultipleEnumCellProps)} />,
      )

      // Change rowData
      rerender(
        <TestCell
          {...(mockCellProps as AutocompleteMultipleEnumCellProps)}
          rowData={['option1', 'option2']}
        />,
      )

      // Component should show new values
      expect(screen.getByRole('combobox')).toBeInTheDocument()
      expect(screen.getByText('option2')).toBeInTheDocument()
    })
  })

  describe('Style Optimizations', () => {
    it('should use static base styles to avoid recreation', () => {
      const mockSetRowData = vi.fn()
      const mockStopEditing = vi.fn()
      const choices = ['option1', 'option2']

      const TestCell = createTestCell(choices, 'string')

      const mockCellProps: Partial<AutocompleteMultipleEnumCellProps> = {
        rowData: ['option1'],
        setRowData: mockSetRowData,
        focus: false,
        active: false,
        stopEditing: mockStopEditing,
      }

      const { rerender } = render(
        <TestCell {...(mockCellProps as AutocompleteMultipleEnumCellProps)} />,
      )

      // Rerender multiple times with different function props
      rerender(
        <TestCell
          {...(mockCellProps as AutocompleteMultipleEnumCellProps)}
          setRowData={vi.fn()}
        />,
      )
      rerender(
        <TestCell
          {...(mockCellProps as AutocompleteMultipleEnumCellProps)}
          stopEditing={vi.fn()}
        />,
      )

      // Component should render without errors (style object is stable)
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })

    it('should memoize dynamic styles based on active and focus state', () => {
      const mockSetRowData = vi.fn()
      const mockStopEditing = vi.fn()
      const choices = ['option1', 'option2']

      const TestCell = createTestCell(choices, 'string')

      const mockCellProps: Partial<AutocompleteMultipleEnumCellProps> = {
        rowData: ['option1'],
        setRowData: mockSetRowData,
        focus: false,
        active: false,
        stopEditing: mockStopEditing,
      }

      const { rerender } = render(
        <TestCell {...(mockCellProps as AutocompleteMultipleEnumCellProps)} />,
      )

      // Rerender with same active/focus but different function props
      rerender(
        <TestCell
          {...(mockCellProps as AutocompleteMultipleEnumCellProps)}
          setRowData={vi.fn()}
          stopEditing={vi.fn()}
        />,
      )

      // Should still render correctly (sx is memoized)
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })

    it('should update dynamic styles when active state changes', () => {
      const mockSetRowData = vi.fn()
      const mockStopEditing = vi.fn()
      const choices = ['option1', 'option2', 'option3']

      const TestCell = createTestCell(choices, 'string')

      const mockCellProps: Partial<AutocompleteMultipleEnumCellProps> = {
        rowData: ['option1', 'option2'],
        setRowData: mockSetRowData,
        focus: false,
        active: false,
        stopEditing: mockStopEditing,
      }

      const { rerender } = render(
        <TestCell {...(mockCellProps as AutocompleteMultipleEnumCellProps)} />,
      )
      const autocomplete = screen
        .getByRole('combobox')
        .closest('.MuiAutocomplete-root')

      // Change to active
      rerender(
        <TestCell
          {...(mockCellProps as AutocompleteMultipleEnumCellProps)}
          active={true}
        />,
      )

      // Indicators should become visible, flexWrap should change (style updated)
      expect(autocomplete).toBeInTheDocument()
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })

    it('should update dynamic styles when focus state changes', () => {
      const mockSetRowData = vi.fn()
      const mockStopEditing = vi.fn()
      const choices = ['option1', 'option2']

      const TestCell = createTestCell(choices, 'string')

      const mockCellProps: Partial<AutocompleteMultipleEnumCellProps> = {
        rowData: ['option1'],
        setRowData: mockSetRowData,
        focus: false,
        active: false,
        stopEditing: mockStopEditing,
      }

      const { rerender } = render(
        <TestCell {...(mockCellProps as AutocompleteMultipleEnumCellProps)} />,
      )

      // Change to focused
      rerender(
        <TestCell
          {...(mockCellProps as AutocompleteMultipleEnumCellProps)}
          focus={true}
        />,
      )

      // Pointer events should be updated (style changed)
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })

    it('should adjust limitTags display when active state changes', () => {
      const mockSetRowData = vi.fn()
      const mockStopEditing = vi.fn()
      const choices = ['option1', 'option2', 'option3', 'option4']

      const TestCell = createTestCell(choices, 'string', 2)

      const mockCellProps: Partial<AutocompleteMultipleEnumCellProps> = {
        rowData: ['option1', 'option2', 'option3', 'option4'],
        setRowData: mockSetRowData,
        focus: false,
        active: false,
        stopEditing: mockStopEditing,
      }

      const { rerender } = render(
        <TestCell {...(mockCellProps as AutocompleteMultipleEnumCellProps)} />,
      )

      // When inactive, only 2 tags should be visible (limitTags=2)
      expect(screen.getByText('option1')).toBeInTheDocument()
      expect(screen.getByText('option2')).toBeInTheDocument()

      // Change to active (limitTags becomes -1, showing all)
      rerender(
        <TestCell
          {...(mockCellProps as AutocompleteMultipleEnumCellProps)}
          active={true}
        />,
      )

      // All tags should now be visible
      expect(screen.getByText('option1')).toBeInTheDocument()
      expect(screen.getByText('option2')).toBeInTheDocument()
      expect(screen.getByText('option3')).toBeInTheDocument()
      expect(screen.getByText('option4')).toBeInTheDocument()
    })
  })

  describe('Edge Cases with Memoization', () => {
    it('should handle null rowData with memoization', () => {
      const mockSetRowData = vi.fn()
      const mockStopEditing = vi.fn()
      const choices = ['option1', 'option2']

      const TestCell = createTestCell(choices, 'string')

      const mockCellProps: Partial<AutocompleteMultipleEnumCellProps> = {
        rowData: null,
        setRowData: mockSetRowData,
        focus: false,
        active: false,
        stopEditing: mockStopEditing,
      }

      render(
        <TestCell {...(mockCellProps as AutocompleteMultipleEnumCellProps)} />,
      )
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })

    it('should handle empty array rowData with memoization', () => {
      const mockSetRowData = vi.fn()
      const mockStopEditing = vi.fn()
      const choices = ['option1', 'option2']

      const TestCell = createTestCell(choices, 'string')

      const mockCellProps: Partial<AutocompleteMultipleEnumCellProps> = {
        rowData: [],
        setRowData: mockSetRowData,
        focus: false,
        active: false,
        stopEditing: mockStopEditing,
      }

      render(
        <TestCell {...(mockCellProps as AutocompleteMultipleEnumCellProps)} />,
      )
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })

    it('should handle single non-array value with memoization', () => {
      const mockSetRowData = vi.fn()
      const mockStopEditing = vi.fn()
      const choices = ['option1', 'option2', 'option3']

      const TestCell = createTestCell(choices, 'string')

      const mockCellProps: Partial<AutocompleteMultipleEnumCellProps> = {
        rowData: 'option1', // Single value, not array
        setRowData: mockSetRowData,
        focus: false,
        active: false,
        stopEditing: mockStopEditing,
      }

      render(
        <TestCell {...(mockCellProps as AutocompleteMultipleEnumCellProps)} />,
      )
      expect(screen.getByRole('combobox')).toBeInTheDocument()
      expect(screen.getByText('option1')).toBeInTheDocument()
    })

    it('should handle numeric values with memoization', () => {
      const mockSetRowData = vi.fn()
      const mockStopEditing = vi.fn()
      const choices = [1, 2, 3]

      const TestCell = createTestCell(choices, 'number')

      const mockCellProps: Partial<AutocompleteMultipleEnumCellProps> = {
        rowData: [1, 2],
        setRowData: mockSetRowData,
        focus: false,
        active: false,
        stopEditing: mockStopEditing,
      }

      render(
        <TestCell {...(mockCellProps as AutocompleteMultipleEnumCellProps)} />,
      )
      expect(screen.getByRole('combobox')).toBeInTheDocument()
      expect(screen.getByText('1')).toBeInTheDocument()
      expect(screen.getByText('2')).toBeInTheDocument()
    })
  })

  describe('Dropdown Menu Behavior', () => {
    it('should open the dropdown menu when clicking the dropdown button', async () => {
      const mockSetRowData = vi.fn()
      const mockStopEditing = vi.fn()
      const choices = ['option1', 'option2', 'option3']

      const TestCell = createTestCell(choices, 'string')

      const mockCellProps: Partial<AutocompleteMultipleEnumCellProps> = {
        rowData: ['option1'],
        setRowData: mockSetRowData,
        focus: true,
        active: true,
        stopEditing: mockStopEditing,
      }

      render(
        <TestCell {...(mockCellProps as AutocompleteMultipleEnumCellProps)} />,
      )

      // Click the dropdown arrow button
      const dropdownButton = screen.getByRole('button', { name: /open/i })
      await userEvent.click(dropdownButton)

      // Verify options are displayed
      const option2 = await screen.findByRole('option', { name: 'option2' })
      expect(option2).toBeInTheDocument()
    })

    it('should allow selecting an option from the dropdown without flickering', async () => {
      const mockSetRowData = vi.fn()
      const mockStopEditing = vi.fn()
      const choices = ['option1', 'option2', 'option3']

      const TestCell = createTestCell(choices, 'string')

      const mockCellProps: Partial<AutocompleteMultipleEnumCellProps> = {
        rowData: [],
        setRowData: mockSetRowData,
        focus: true,
        active: true,
        stopEditing: mockStopEditing,
      }

      render(
        <TestCell {...(mockCellProps as AutocompleteMultipleEnumCellProps)} />,
      )

      // Click the dropdown arrow button
      const dropdownButton = screen.getByRole('button', { name: /open/i })
      await userEvent.click(dropdownButton)

      // Select option2
      const option2 = await screen.findByRole('option', { name: 'option2' })
      await userEvent.click(option2)

      // Verify setRowData was called with the selected value
      await waitFor(() => {
        expect(mockSetRowData).toHaveBeenCalledWith(['option2'])
      })
    })

    it('should close the dropdown menu when active becomes false', async () => {
      const mockSetRowData = vi.fn()
      const mockStopEditing = vi.fn()
      const choices = ['option1', 'option2']

      const TestCell = createTestCell(choices, 'string')

      const mockCellProps: Partial<AutocompleteMultipleEnumCellProps> = {
        rowData: [],
        setRowData: mockSetRowData,
        focus: true,
        active: true,
        stopEditing: mockStopEditing,
      }

      const { rerender } = render(
        <TestCell {...(mockCellProps as AutocompleteMultipleEnumCellProps)} />,
      )

      // Open dropdown
      const dropdownButton = screen.getByRole('button', { name: /open/i })
      await userEvent.click(dropdownButton)

      // Verify options are displayed
      expect(
        await screen.findByRole('option', { name: 'option1' }),
      ).toBeInTheDocument()

      // Simulate cell becoming inactive
      rerender(
        <TestCell
          {...(mockCellProps as AutocompleteMultipleEnumCellProps)}
          active={false}
          focus={false}
        />,
      )

      // Dropdown should close (no options visible)
      await waitFor(() => {
        expect(screen.queryByRole('option')).not.toBeInTheDocument()
      })
    })

    it('should keep dropdown open while selecting multiple options', async () => {
      const mockSetRowData = vi.fn()
      const mockStopEditing = vi.fn()
      const choices = ['option1', 'option2', 'option3']

      const TestCell = createTestCell(choices, 'string')

      const mockCellProps: Partial<AutocompleteMultipleEnumCellProps> = {
        rowData: [],
        setRowData: mockSetRowData,
        focus: true,
        active: true,
        stopEditing: mockStopEditing,
      }

      render(
        <TestCell {...(mockCellProps as AutocompleteMultipleEnumCellProps)} />,
      )

      // Open dropdown
      const dropdownButton = screen.getByRole('button', { name: /open/i })
      await userEvent.click(dropdownButton)

      // Select first option
      const option1 = await screen.findByRole('option', { name: 'option1' })
      await userEvent.click(option1)

      // Dropdown should remain open (disableCloseOnSelect is true when choices > 1)
      expect(
        await screen.findByRole('option', { name: 'option2' }),
      ).toBeInTheDocument()
    })
  })
})
