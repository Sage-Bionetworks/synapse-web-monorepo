import { ValidationResults } from '@sage-bionetworks/synapse-types'
import { getDisplayedRowValidation } from './getDisplayedRowValidation'
import { ROW_LEVEL_KEY } from './parseValidationMessage'

const NULL_STRING_MESSAGE = 'expected type: String, found: Null'
const ROW_LEVEL_MESSAGE = 'only 1 subschema matches out of 2'

function getValidation(
  validationResults: Partial<ValidationResults> | undefined,
  {
    columnNames = ['c0', 'c1', 'c2'],
    removedColumnNames = [],
    isValidationUpToDate = true,
  }: {
    columnNames?: string[]
    removedColumnNames?: string[]
    isValidationUpToDate?: boolean
  } = {},
) {
  return getDisplayedRowValidation({
    validationResults: validationResults as ValidationResults | undefined,
    isValidationUpToDate,
    columnNames: new Set(columnNames),
    removedColumnNames: new Set(removedColumnNames),
  })
}

function getInvalidRowValidation(
  allValidationMessages: string[],
  options?: Parameters<typeof getValidation>[1],
) {
  return getValidation({ isValid: false, allValidationMessages }, options)
}

describe('getDisplayedRowValidation', () => {
  it('leaves the state unset for a row that has not been validated', () => {
    expect(getValidation(undefined)).toEqual({})
  })

  it('shows a row that has not been validated, and has changed, as pending', () => {
    expect(getValidation(undefined, { isValidationUpToDate: false })).toEqual({
      __validationStatus: 'pending',
    })
  })

  it('shows a valid row as valid', () => {
    expect(getValidation({ isValid: true, allValidationMessages: [] })).toEqual(
      { __validationStatus: 'valid', __cellValidationResults: new Map() },
    )
  })

  it('groups the messages of an invalid row by column', () => {
    expect(
      getInvalidRowValidation([
        '#/c1: must be a number',
        `#: ${ROW_LEVEL_MESSAGE}`,
      ]),
    ).toEqual({
      __validationStatus: 'invalid',
      __cellValidationResults: new Map([
        ['c1', ['must be a number']],
        [ROW_LEVEL_KEY, [ROW_LEVEL_MESSAGE]],
      ]),
    })
  })

  it('shows a row as invalid when it has no messages', () => {
    expect(getInvalidRowValidation([])).toEqual({
      __validationStatus: 'invalid',
      __cellValidationResults: new Map(),
    })
    expect(getValidation({ isValid: false })).toEqual({
      __validationStatus: 'invalid',
    })
  })

  it('shows a message in an unexpected format as a row-level error', () => {
    expect(getInvalidRowValidation(['unparseable message'])).toEqual({
      __validationStatus: 'invalid',
      __cellValidationResults: new Map([
        [ROW_LEVEL_KEY, ['unparseable message']],
      ]),
    })
  })

  it('shows a row that has changed since it was validated as pending, keeping its messages', () => {
    expect(
      getInvalidRowValidation(['#/c1: must be a number'], {
        isValidationUpToDate: false,
      }),
    ).toEqual({
      __validationStatus: 'pending',
      __cellValidationResults: new Map([['c1', ['must be a number']]]),
    })
  })

  describe('when a column has been removed', () => {
    const removedColumnNames = ['c2']

    it('omits the messages for the removed column, keeping messages for displayed columns', () => {
      expect(
        getInvalidRowValidation(
          ['#/c1: must be a number', `#/c2: ${NULL_STRING_MESSAGE}`],
          { removedColumnNames },
        ),
      ).toEqual({
        __validationStatus: 'invalid',
        __cellValidationResults: new Map([['c1', ['must be a number']]]),
      })
    })

    it.each([
      `#/c2/0: ${NULL_STRING_MESSAGE}`,
      `#/c2/0/label: ${NULL_STRING_MESSAGE}`,
      '#: required key [c2] not found',
      '#: extraneous key [c2] is not permitted',
    ])('omits the message "%s"', message => {
      expect(
        getInvalidRowValidation([message], { removedColumnNames }),
      ).toEqual({
        __validationStatus: 'valid',
        __cellValidationResults: new Map(),
      })
    })

    it('shows the row as valid when all of its errors belong to removed columns', () => {
      expect(
        getInvalidRowValidation(
          [`#/c1: ${NULL_STRING_MESSAGE}`, `#/c2: ${NULL_STRING_MESSAGE}`],
          { removedColumnNames: ['c1', 'c2'] },
        ),
      ).toEqual({
        __validationStatus: 'valid',
        __cellValidationResults: new Map(),
      })
    })

    it.each([`#: ${ROW_LEVEL_MESSAGE}`, 'unparseable message'])(
      'keeps the row invalid when it also has the row-level error "%s"',
      message => {
        const { __validationStatus, __cellValidationResults } =
          getInvalidRowValidation([message, `#/c2: ${NULL_STRING_MESSAGE}`], {
            removedColumnNames,
          })

        expect(__validationStatus).toBe('invalid')
        expect(Array.from(__cellValidationResults!.keys())).toEqual([
          ROW_LEVEL_KEY,
        ])
      },
    )

    it('keeps errors for properties that are not columns in the grid', () => {
      expect(
        getInvalidRowValidation(
          [
            '#: required key [notAColumn] not found',
            `#/c2: ${NULL_STRING_MESSAGE}`,
          ],
          { removedColumnNames },
        ),
      ).toEqual({
        __validationStatus: 'invalid',
        __cellValidationResults: new Map([
          ['notAColumn', ['required key [notAColumn] not found']],
        ]),
      })
    })

    it('keeps row-level errors when a removed column is named like the row-level key', () => {
      expect(
        getInvalidRowValidation(
          [
            `#: ${ROW_LEVEL_MESSAGE}`,
            `#/${ROW_LEVEL_KEY}: ${NULL_STRING_MESSAGE}`,
          ],
          {
            columnNames: ['c0', ROW_LEVEL_KEY],
            removedColumnNames: [ROW_LEVEL_KEY],
          },
        ),
      ).toEqual({
        __validationStatus: 'invalid',
        __cellValidationResults: new Map([
          [ROW_LEVEL_KEY, [ROW_LEVEL_MESSAGE]],
        ]),
      })
    })

    it.each([
      {
        columnName: 'a/b',
        message: `#/a~1b: ${NULL_STRING_MESSAGE}`,
      },
      {
        columnName: 'time:utc',
        message: `#/time:utc: ${NULL_STRING_MESSAGE}`,
      },
      {
        columnName: 'a]b',
        message: '#: extraneous key [a]b] is not permitted',
      },
    ])(
      'omits errors for a removed column named "$columnName"',
      ({ columnName, message }) => {
        expect(
          getInvalidRowValidation([message], {
            columnNames: ['c0', columnName],
            removedColumnNames: [columnName],
          }),
        ).toEqual({
          __validationStatus: 'valid',
          __cellValidationResults: new Map(),
        })
      },
    )

    it('shows a row that has changed since it was validated as pending, even when all of its errors are omitted', () => {
      expect(
        getInvalidRowValidation([`#/c2: ${NULL_STRING_MESSAGE}`], {
          removedColumnNames,
          isValidationUpToDate: false,
        }),
      ).toEqual({
        __validationStatus: 'pending',
        __cellValidationResults: new Map(),
      })
    })
  })
})
