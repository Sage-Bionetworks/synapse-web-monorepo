import { modelColsToGrid } from '@/components/DataGrid/utils/modelColsToGrid'
import { getSchemaPropertiesInfo } from '@/utils/jsonschema/getSchemaPropertyInfo'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { JSONSchema7 } from 'json-schema'
import { AutocompleteCellProps, AutocompleteOption } from './AutocompleteColumn'
import {
  numberOrEnumColumn,
  parseNumberOrEnumInput,
} from './NumberOrEnumColumn'

const ENUM_VALUES = ['>= 90', 'Unknown']

describe('parseNumberOrEnumInput', () => {
  it.each<[string, string | number]>([
    ['43', 43],
    [' 43 ', 43],
    ['\n43\n', 43],
    ['43.5', 43.5],
    ['-1', -1],
    ['95', 95],
    ['>= 90', '>= 90'],
    [' >= 90 ', '>= 90'],
    ['Unknown', 'Unknown'],
    ['unknown', 'unknown'],
    ['93+', '93+'],
    ['43abc', '43abc'],
    ['0x2B', '0x2B'],
    ['1e2', '1e2'],
    ['Infinity', 'Infinity'],
    ['', ''],
  ])('parses %j as %j', (text, expected) => {
    expect(parseNumberOrEnumInput(text, ENUM_VALUES)).toBe(expected)
  })

  it('keeps a numeric-looking allowed string as a string', () => {
    expect(parseNumberOrEnumInput('999', ['999'])).toBe('999')
  })
})

describe('numberOrEnumColumn', () => {
  function renderCell(rowData: AutocompleteOption) {
    const NumberOrEnumCell = numberOrEnumColumn({
      enumValues: ENUM_VALUES,
      clearValue: undefined,
    }).component!
    const setRowData = vi.fn()
    const cellProps: Partial<AutocompleteCellProps> = {
      rowData,
      setRowData,
      stopEditing: vi.fn(),
      focus: true,
      active: true,
    }

    const { rerender } = render(
      <NumberOrEnumCell {...(cellProps as AutocompleteCellProps)} />,
    )
    const deactivate = () =>
      act(() => {
        rerender(
          <NumberOrEnumCell
            {...(cellProps as AutocompleteCellProps)}
            focus={false}
            active={false}
          />,
        )
      })
    return { setRowData, deactivate }
  }

  it('offers the allowed strings as options', async () => {
    renderCell('')

    expect(
      await screen.findByRole('option', { name: '>= 90' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Unknown' })).toBeInTheDocument()
  })

  it('stores a picked option as a string', async () => {
    const { setRowData } = renderCell('')

    await userEvent.click(await screen.findByRole('option', { name: '>= 90' }))

    await waitFor(() => expect(setRowData).toHaveBeenCalledWith('>= 90'))
  })

  it('stores a typed number as a number when the cell is deactivated', async () => {
    const { setRowData, deactivate } = renderCell('')

    await userEvent.type(screen.getByRole('combobox'), '43')
    deactivate()

    await waitFor(() => expect(setRowData).toHaveBeenCalledWith(43))
  })

  it('stores a typed number as a number when Enter is pressed', async () => {
    const { setRowData } = renderCell('')

    await userEvent.type(screen.getByRole('combobox'), '95{Enter}')

    await waitFor(() => expect(setRowData).toHaveBeenCalledWith(95))
  })

  it('replaces a number stored as a string when a different value is typed', async () => {
    const { setRowData, deactivate } = renderCell('43')
    const input = screen.getByRole('combobox')

    await userEvent.clear(input)
    await userEvent.type(input, '44')
    deactivate()

    await waitFor(() => expect(setRowData).toHaveBeenCalledWith(44))
  })

  it.each<[string, string | number]>([
    ['43', 43],
    [' >= 90 ', '>= 90'],
    ['93+', '93+'],
  ])('parses pasted %j as %j', (pasted, expected) => {
    const column = numberOrEnumColumn({
      enumValues: ENUM_VALUES,
      clearValue: undefined,
    })

    expect(
      column.pasteValue!({ rowData: undefined, value: pasted, rowIndex: 0 }),
    ).toBe(expected)
  })
})

describe('number-or-enum schemas in the grid', () => {
  const schema: JSONSchema7 = {
    type: 'object',
    properties: {
      age: {
        anyOf: [{ type: 'number' }, { type: 'string', enum: ENUM_VALUES }],
      },
      score: {
        oneOf: [{ type: 'number' }, { const: 'N/A' }, { const: 'Not run' }],
      },
      notes: {
        anyOf: [{ type: 'number' }, { type: 'string' }],
      },
    },
  }

  function pasteInto(columnName: string, value: string) {
    // getEnumeratedValues logs when RJSF cannot read the `notes` anyOf as an enumeration
    vi.spyOn(console, 'error').mockImplementation(() => {})
    const [column] = modelColsToGrid(
      [columnName],
      [0],
      getSchemaPropertiesInfo(schema),
    )
    const pastedRow = column.pasteValue!({
      rowData: {},
      value,
      rowIndex: 0,
    }) as Record<string, unknown>
    return pastedRow[columnName]
  }

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it.each<[string, string, string | number | undefined]>([
    ['age', '43', 43],
    ['age', '>= 90', '>= 90'],
    ['age', 'Unknown', 'Unknown'],
    ['age', '', undefined],
    ['score', '7.5', 7.5],
    ['score', 'Not run', 'Not run'],
  ])(
    'uses the number-or-enum column for %s, so pasted %j is stored as %j',
    (columnName, pasted, expected) => {
      expect(pasteInto(columnName, pasted)).toBe(expected)
    },
  )

  it('does not use the number-or-enum column when the strings are not a closed set', () => {
    expect(pasteInto('notes', '43')).toBe('43')
  })
})
