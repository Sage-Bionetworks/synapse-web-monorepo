import {
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Filter } from './Filter'

function NameFilter({ names }: { names: string[] }) {
  const table = useReactTable({
    data: names.map(name => ({ name })),
    columns: [{ accessorKey: 'name', header: 'Name' }],
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })
  return <Filter column={table.getColumn('name')!} table={table} />
}

describe('Filter', () => {
  it('suggests the column values in alphabetical order regardless of case or accents', async () => {
    const user = userEvent.setup()
    render(
      <NameFilter names={['banana', 'Zebra', 'apple', 'Éclair', 'cherry']} />,
    )

    await user.click(
      screen.getByRole('combobox', { name: 'Filter by Name (5)' }),
    )

    const suggestions = screen
      .getAllByRole('option')
      .map(option => option.textContent)
    expect(suggestions).toEqual([
      'apple',
      'banana',
      'cherry',
      'Éclair',
      'Zebra',
    ])
  })
})
