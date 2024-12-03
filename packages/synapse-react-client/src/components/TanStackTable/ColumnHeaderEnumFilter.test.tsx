import { upperFirst } from 'lodash-es'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import {
  createColumnHelper,
  getCoreRowModel,
  Table,
  useReactTable,
  getFacetedUniqueValues as defaultGetFacetedUniqueValues,
} from '@tanstack/react-table'
import { ColumnHeaderEnumFilter } from './ColumnHeaderEnumFilter'
import { userEvent } from '@storybook/testing-library'

type TestTableRow = {
  multiSelect: string
  multiSelectWithCounts: string
  singleSelect: string
  numeric: number
  defaultClientSideFacetCalculation: string
}

const columnHelper = createColumnHelper<TestTableRow>()

function getFacetedUniqueValues(table: Table<TestTableRow>, columnId: string) {
  if (columnId === 'multiSelect') {
    return () =>
      new Map([
        ['foo', 0],
        ['bar', 0],
      ])
  }
  if (columnId === 'multiSelectWithCounts') {
    return () =>
      new Map([
        ['alpha', 20],
        ['beta', 10],
      ])
  }
  if (columnId === 'singleSelect') {
    return () =>
      new Map([
        ['java', 0],
        ['c#', 0],
        ['python', 0],
      ])
  }
  if (columnId === 'numeric') {
    return () =>
      new Map([
        [2023, 0],
        [2024, 0],
      ])
  }
  return defaultGetFacetedUniqueValues()(table as Table<unknown>, columnId)
}

const columns = [
  columnHelper.accessor('multiSelect', {
    meta: {
      filterVariant: 'enumeration',
      getDisplayText: value => upperFirst(value),
      enableMultipleSelect: true,
    },
    enableColumnFilter: true,
  }),
  columnHelper.accessor('multiSelectWithCounts', {
    meta: {
      filterVariant: 'enumeration',
      getDisplayText: (value: string) => {
        if (value === 'alpha') {
          return 'α'
        }
        if (value === 'beta') {
          return 'β'
        }
        return ''
      },
      enableMultipleSelect: true,
    },
    enableColumnFilter: true,
  }),
  columnHelper.accessor('singleSelect', {
    meta: {
      filterVariant: 'enumeration',
      getDisplayText: value => value,
      enableMultipleSelect: false,
    },
    enableColumnFilter: true,
  }),
  columnHelper.accessor('numeric', {
    meta: {
      filterVariant: 'enumeration',
      getDisplayText: value => value.toString(),
      enableMultipleSelect: true,
    },
    enableColumnFilter: true,
  }),
  columnHelper.accessor('defaultClientSideFacetCalculation', {
    meta: {
      filterVariant: 'enumeration',
      getDisplayText: value => value,
      enableMultipleSelect: true,
    },
    enableColumnFilter: true,
  }),
]

function ColumnHeaderEnumFilterTestComponent(props: { columnId: string }) {
  const { columnId } = props
  const table = useReactTable({
    data: [
      {
        defaultClientSideFacetCalculation: 'blue',
        multiSelect: '',
        multiSelectWithCounts: '',
        singleSelect: '',
        numeric: 0,
      },
      {
        defaultClientSideFacetCalculation: 'red',
        multiSelect: '',
        multiSelectWithCounts: '',
        singleSelect: '',
        numeric: 0,
      },
      {
        defaultClientSideFacetCalculation: 'blue',
        multiSelect: '',
        multiSelectWithCounts: '',
        singleSelect: '',
        numeric: 0,
      },
    ],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues,
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

  it('renders enumerated values, multiselect off', async () => {
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

  it('works with the default getFacetedUniqueValues implementation', async () => {
    const columnIdUnderTest = 'defaultClientSideFacetCalculation'
    const { user } = renderComponent(columnIdUnderTest)
    const button = screen.getByRole('button', {
      name: `Filter by ${columnIdUnderTest}`,
    })
    await user.click(button)

    // Verify that the counts appear
    screen.getByRole('checkbox', { name: 'blue' })
    screen.getByText('(2)')
    screen.getByRole('checkbox', { name: 'red' })
    screen.getByText('(1)')
  })
})
