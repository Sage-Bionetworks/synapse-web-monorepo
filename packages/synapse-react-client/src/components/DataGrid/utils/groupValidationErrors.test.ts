import {
  groupErrors,
  limitGroups,
  ValidationError,
} from './groupValidationErrors'

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
