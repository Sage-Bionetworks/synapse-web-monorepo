import { DataGridRow } from '../DataGridTypes'
import createValidationTestRow from './createValidationTestRow'
import {
  collectValidationErrors,
  countValidationErrors,
  groupErrors,
  limitGroups,
  ValidationError,
} from './groupValidationErrors'

type ValidationStatus = DataGridRow['__validationStatus']

// Keyed by every status, so a new status fails to compile until its expected behavior is listed
const LISTS_CELL_ERRORS: Record<NonNullable<ValidationStatus>, boolean> = {
  valid: false,
  invalid: true,
  pending: true,
}

const statusCases = [
  ...Object.entries(LISTS_CELL_ERRORS).map(([status, listed]) => ({
    status: status as ValidationStatus,
    listed,
  })),
  { status: undefined, listed: false },
]

const CELL_ERRORS = { a: ['x', 'y'], b: ['z'] }
const CELL_ERROR_COUNT = 3

describe('collectValidationErrors', () => {
  it.each(statusCases)(
    'lists the cell errors of a $status row: $listed',
    ({ status, listed }) => {
      const errors = collectValidationErrors([
        createValidationTestRow(status, CELL_ERRORS),
      ])

      const pending = status === 'pending'
      expect(errors).toEqual(
        listed
          ? [
              { rowIndex: 0, columnName: 'a', message: 'x', pending },
              { rowIndex: 0, columnName: 'a', message: 'y', pending },
              { rowIndex: 0, columnName: 'b', message: 'z', pending },
            ]
          : [],
      )
    },
  )

  it('keeps each error at its row position in the grid, counting rows without errors', () => {
    const errors = collectValidationErrors([
      createValidationTestRow('valid', { a: ['stale'] }),
      createValidationTestRow('invalid', { a: ['x'] }),
      createValidationTestRow('invalid'),
      createValidationTestRow('pending', { b: ['y'] }),
    ])

    expect(errors).toEqual([
      { rowIndex: 1, columnName: 'a', message: 'x', pending: false },
      { rowIndex: 3, columnName: 'b', message: 'y', pending: true },
    ])
  })
})

describe('countValidationErrors', () => {
  it('counts the errors collectValidationErrors lists, for rows of every status', () => {
    const rows = statusCases.flatMap(({ status }) => [
      createValidationTestRow(status, CELL_ERRORS),
      createValidationTestRow(status),
      { __validationStatus: status },
    ])

    const listingStatusCount = statusCases.filter(c => c.listed).length
    expect(countValidationErrors(rows)).toBe(
      CELL_ERROR_COUNT * listingStatusCount,
    )
    expect(countValidationErrors(rows)).toBe(
      collectValidationErrors(rows).length,
    )
  })

  it('returns 0 for an empty grid', () => {
    expect(countValidationErrors([])).toBe(0)
  })
})

function err(
  rowIndex: number,
  columnName: string,
  message: string,
): ValidationError {
  return { rowIndex, columnName, message, pending: false }
}

const byColumnThenMessage = (errors: ValidationError[]) =>
  groupErrors(
    errors,
    e => e.columnName,
    e => e.message,
  )

describe('groupErrors', () => {
  it('groups two levels deep in first-seen order', () => {
    const groups = byColumnThenMessage([
      err(0, 'b', 'x'),
      err(1, 'a', 'y'),
      err(2, 'b', 'z'),
      err(3, 'b', 'x'),
    ])

    expect([...groups.keys()]).toEqual(['b', 'a'])
    expect([...groups.get('b')!.keys()]).toEqual(['x', 'z'])
    expect(
      groups
        .get('b')!
        .get('x')!
        .map(r => r.rowIndex),
    ).toEqual([0, 3])
  })
})

describe('limitGroups', () => {
  // Column a: x on rows 0-1. Column b: y on rows 2-4, z on row 5. Column c: w on row 6.
  const errors = [
    err(0, 'a', 'x'),
    err(1, 'a', 'x'),
    err(2, 'b', 'y'),
    err(3, 'b', 'y'),
    err(4, 'b', 'y'),
    err(5, 'b', 'z'),
    err(6, 'c', 'w'),
  ]

  it('keeps everything and hides nothing when the budget equals the row count', () => {
    const limited = limitGroups(byColumnThenMessage(errors), errors.length)

    expect(limited.map(g => g.key)).toEqual(['a', 'b', 'c'])
    expect(limited.every(g => g.hiddenEntryCount === 0)).toBe(true)
    expect(
      limited.flatMap(g => g.entries).every(e => e.hiddenRowCount === 0),
    ).toBe(true)
  })

  it('splits the entry where the budget runs out and drops later groups', () => {
    const limited = limitGroups(byColumnThenMessage(errors), 3)

    expect(limited).toEqual([
      {
        key: 'a',
        totalCount: 2,
        entries: [
          {
            key: 'x',
            rows: [
              { rowIndex: 0, pending: false },
              { rowIndex: 1, pending: false },
            ],
            hiddenRowCount: 0,
          },
        ],
        hiddenEntryCount: 0,
      },
      {
        key: 'b',
        totalCount: 4,
        entries: [
          {
            key: 'y',
            rows: [{ rowIndex: 2, pending: false }],
            hiddenRowCount: 2,
          },
        ],
        hiddenEntryCount: 1,
      },
    ])
  })

  it('counts entries dropped after the budget is spent at an entry boundary', () => {
    const limited = limitGroups(byColumnThenMessage(errors), 5)
    const b = limited.find(g => g.key === 'b')!

    expect(b.totalCount).toBe(4)
    expect(b.entries).toHaveLength(1)
    expect(b.entries[0].hiddenRowCount).toBe(0)
    expect(b.hiddenEntryCount).toBe(1)
    expect(limited.map(g => g.key)).toEqual(['a', 'b'])
  })
})
