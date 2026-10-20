import { modelColsToGrid } from '@/components/DataGrid/utils/modelColsToGrid'
import { AGE_MASK_TITLE } from '@/utils/jsonschema/getAgeMaskInfo'
import { getSchemaPropertiesInfo } from '@/utils/jsonschema/getSchemaPropertyInfo'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { JSONSchema7 } from 'json-schema'
import { ageColumn, parseAgeInput } from './AgeColumn'
import { AutocompleteCellProps, AutocompleteOption } from './AutocompleteColumn'

const SENTINELS = ['>= 90', 'Unknown']

describe('parseAgeInput', () => {
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
    expect(parseAgeInput(text, SENTINELS)).toBe(expected)
  })

  it('keeps a numeric-looking sentinel as a string', () => {
    expect(parseAgeInput('999', ['999'])).toBe('999')
  })
})

describe('ageColumn', () => {
  function renderAgeCell(rowData: AutocompleteOption) {
    const AgeCell = ageColumn({
      sentinels: SENTINELS,
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
      <AgeCell {...(cellProps as AutocompleteCellProps)} />,
    )
    const deactivate = () =>
      act(() => {
        rerender(
          <AgeCell
            {...(cellProps as AutocompleteCellProps)}
            focus={false}
            active={false}
          />,
        )
      })
    return { setRowData, deactivate }
  }

  it('offers the sentinels as options', async () => {
    renderAgeCell('')

    expect(
      await screen.findByRole('option', { name: '>= 90' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Unknown' })).toBeInTheDocument()
  })

  it('stores a picked sentinel as a string', async () => {
    const { setRowData } = renderAgeCell('')

    await userEvent.click(await screen.findByRole('option', { name: '>= 90' }))

    await waitFor(() => expect(setRowData).toHaveBeenCalledWith('>= 90'))
  })

  it('stores a typed number as a number when the cell is deactivated', async () => {
    const { setRowData, deactivate } = renderAgeCell('')

    await userEvent.type(screen.getByRole('combobox'), '43')
    deactivate()

    await waitFor(() => expect(setRowData).toHaveBeenCalledWith(43))
  })

  it('stores a typed number as a number when Enter is pressed', async () => {
    const { setRowData } = renderAgeCell('')

    await userEvent.type(screen.getByRole('combobox'), '95{Enter}')

    await waitFor(() => expect(setRowData).toHaveBeenCalledWith(95))
  })

  it('replaces a number stored as a string when a different value is typed', async () => {
    const { setRowData, deactivate } = renderAgeCell('43')
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
    const column = ageColumn({ sentinels: SENTINELS, clearValue: undefined })

    expect(
      column.pasteValue!({ rowData: undefined, value: pasted, rowIndex: 0 }),
    ).toBe(expected)
  })
})

describe('masked age schema in the grid', () => {
  const schema: JSONSchema7 = {
    type: 'object',
    properties: {
      age: {
        anyOf: [
          { type: 'number' },
          { type: 'string', title: AGE_MASK_TITLE, enum: SENTINELS },
        ],
      },
      score: {
        anyOf: [{ type: 'number' }, { type: 'string', enum: ['N/A'] }],
      },
    },
  }

  function pasteInto(columnName: string, value: string) {
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

  it.each<[string, string | number | undefined]>([
    ['43', 43],
    ['>= 90', '>= 90'],
    ['Unknown', 'Unknown'],
    ['', undefined],
  ])(
    'uses the age column, so pasted %j is stored as %j',
    (pasted, expected) => {
      expect(pasteInto('age', pasted)).toBe(expected)
    },
  )

  it('does not use the age column for an anyOf without the AgeMask title', () => {
    expect(pasteInto('score', '43')).toBe('43')
  })
})
