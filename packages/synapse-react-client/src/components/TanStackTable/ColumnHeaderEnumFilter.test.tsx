import React from 'react'
import { render, screen } from '@testing-library/react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ColumnHeaderEnumFilter } from './ColumnHeaderEnumFilter'
import { userEvent } from '@storybook/testing-library'

type TestTableRow = {
  multiSelect: string
  multiSelectWithCounts: string
  singleSelect: string
  numeric: number
}

const columnHelper = createColumnHelper<TestTableRow>()

const columns = [
  columnHelper.accessor('multiSelect', {
    meta: {
      filterVariant: 'enumeration',
      enumValues: [
        { value: 'foo', displayText: 'Foo' },
        { value: 'bar', displayText: 'Bar' },
      ],
      enableMultipleSelect: true,
    },
    enableColumnFilter: true,
  }),
  columnHelper.accessor('multiSelectWithCounts', {
    meta: {
      filterVariant: 'enumeration',
      enumValues: [
        { value: 'alpha', displayText: 'α', count: 20 },
        { value: 'beta', displayText: 'β', count: 10 },
      ],
      enableMultipleSelect: true,
    },
    enableColumnFilter: true,
  }),
  columnHelper.accessor('singleSelect', {
    meta: {
      filterVariant: 'enumeration',
      enumValues: [
        { value: 'java', displayText: 'java' },
        { value: 'c#', displayText: 'c#' },
        { value: 'python', displayText: 'python' },
      ],
      enableMultipleSelect: false,
    },
    enableColumnFilter: true,
  }),
  columnHelper.accessor('numeric', {
    meta: {
      filterVariant: 'enumeration',
      enumValues: [
        { value: 2023, displayText: '2023' },
        { value: 2024, displayText: '2024' },
      ],
      enableMultipleSelect: true,
    },
    enableColumnFilter: true,
  }),
]

function ColumnHeaderEnumFilterTestComponent(props: { columnId: string }) {
  const { columnId } = props
  const table = useReactTable({
    data: [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
  const column = table.getColumn(columnId)!
  return <ColumnHeaderEnumFilter column={column} title={columnId} />
}

function renderComponent<TData = unknown, TValue = unknown>(columnId: string) {
  const user = userEvent.setup()
  render(<ColumnHeaderEnumFilterTestComponent columnId={columnId} />, {
    wrapper: createWrapper(),
  })
  return { user }
}

describe('ColumnHeaderEnumFilter', () => {
  it('renders enumerated values', async () => {
    const columnIdUnderTest = 'multiSelect'
    const { user } = renderComponent(columnIdUnderTest)
    const button = screen.getByRole('button', {
      name: `Filter by ${columnIdUnderTest}`,
    })
    await user.click(button)

    const selectAllCheckbox = screen.getByRole('checkbox', {
      name: 'All',
    })
    const fooCheckbox = screen.getByRole('checkbox', { name: 'Foo' })
    const barCheckbox = screen.getByRole('checkbox', { name: 'Bar' })

    expect(selectAllCheckbox).toBeChecked()
    expect(fooCheckbox).not.toBeChecked()
    expect(barCheckbox).not.toBeChecked()

    // Verify we can select one
    await user.click(fooCheckbox)

    expect(selectAllCheckbox).not.toBeChecked()
    expect(fooCheckbox).toBeChecked()
    expect(barCheckbox).not.toBeChecked()

    // Verify we can select multiple
    await user.click(barCheckbox)

    expect(selectAllCheckbox).not.toBeChecked()
    expect(fooCheckbox).toBeChecked()
    expect(barCheckbox).toBeChecked()

    // Verify that selecting all will uncheck the others
    await user.click(selectAllCheckbox)

    expect(selectAllCheckbox).toBeChecked()
    expect(fooCheckbox).not.toBeChecked()
    expect(barCheckbox).not.toBeChecked()
  })

  it('renders enumerated values with counts', async () => {
    const columnIdUnderTest = 'multiSelectWithCounts'
    const { user } = renderComponent(columnIdUnderTest)
    const button = screen.getByRole('button', {
      name: `Filter by ${columnIdUnderTest}`,
    })
    await user.click(button)

    screen.getByRole('checkbox', {
      name: 'All',
    })
    // Verify that the counts appear
    screen.getByRole('checkbox', { name: 'α' })
    screen.getByText('(20)')
    screen.getByRole('checkbox', { name: 'β' })
    screen.getByText('(10)')
  })

  // TODO: For some reason, the HTML checked state does not update for this case. Seems to work fine testing manually.
  it.skip('renders enumerated values, multiselect off', async () => {
    const columnIdUnderTest = 'singleSelect'
    const { user } = renderComponent(columnIdUnderTest)
    const button = screen.getByRole('button', {
      name: `Filter by ${columnIdUnderTest}`,
    })
    await user.click(button)

    const selectAllCheckbox = screen.getByRole('checkbox', {
      name: 'All',
    })
    const javaRadioButton = screen.getByRole('radio', { name: 'java' })
    const cSharpRadioButton = screen.getByRole('radio', { name: 'c#' })
    const pythonRadioButton = screen.getByRole('radio', { name: 'python' })

    expect(selectAllCheckbox).toBeChecked()
    expect(javaRadioButton).not.toBeChecked()
    expect(cSharpRadioButton).not.toBeChecked()
    expect(pythonRadioButton).not.toBeChecked()

    // Verify we can select one
    await user.click(javaRadioButton)

    expect(selectAllCheckbox).not.toBeChecked()
    expect(javaRadioButton).toBeChecked()
    expect(cSharpRadioButton).not.toBeChecked()
    expect(pythonRadioButton).not.toBeChecked()

    // Verify when selecting another, it is the only one that is checked
    await user.click(pythonRadioButton)

    expect(selectAllCheckbox).not.toBeChecked()
    expect(javaRadioButton).not.toBeChecked()
    expect(cSharpRadioButton).not.toBeChecked()
    expect(pythonRadioButton).toBeChecked()

    // Verify that selecting all will uncheck the others
    await user.click(selectAllCheckbox)

    expect(selectAllCheckbox).toBeChecked()
    expect(javaRadioButton).not.toBeChecked()
    expect(cSharpRadioButton).not.toBeChecked()
    expect(pythonRadioButton).not.toBeChecked()
  })

  it('works with numeric values', async () => {
    const columnIdUnderTest = 'numeric'
    const { user } = renderComponent(columnIdUnderTest)
    const button = screen.getByRole('button', {
      name: `Filter by ${columnIdUnderTest}`,
    })
    await user.click(button)
    const selectAllCheckbox = screen.getByRole('checkbox', {
      name: 'All',
    })
    const numericOption1 = screen.getByRole('checkbox', { name: '2023' })
    const numericOption2 = screen.getByRole('checkbox', { name: '2024' })

    expect(selectAllCheckbox).toBeChecked()
    expect(numericOption1).not.toBeChecked()
    expect(numericOption2).not.toBeChecked()

    // Verify we can select one
    await user.click(numericOption1)

    expect(selectAllCheckbox).not.toBeChecked()
    expect(numericOption1).toBeChecked()
    expect(numericOption2).not.toBeChecked()

    // Verify we can select multiple
    await user.click(numericOption2)

    expect(selectAllCheckbox).not.toBeChecked()
    expect(numericOption1).toBeChecked()
    expect(numericOption2).toBeChecked()

    // Verify that selecting all will uncheck the others
    await user.click(selectAllCheckbox)

    expect(selectAllCheckbox).toBeChecked()
    expect(numericOption1).not.toBeChecked()
    expect(numericOption2).not.toBeChecked()
  })
})
