import {
  groupValidationMessagesByColumn,
  parseValidationMessage,
  ROW_LEVEL_KEY,
} from './parseValidationMessage'

const PROPERTY_KEY_MESSAGES = [
  {
    messageType: 'required key',
    propertyKeyMessage: (key: string) => `required key [${key}] not found`,
  },
  {
    messageType: 'extraneous key',
    propertyKeyMessage: (key: string) =>
      `extraneous key [${key}] is not permitted`,
  },
]

describe('parseValidationMessage', () => {
  it.each([
    {
      description: 'a column message',
      raw: '#/platform: null is not a valid enum value',
      expected: {
        columnName: 'platform',
        message: 'null is not a valid enum value',
      },
    },
    {
      description: 'an array item message',
      raw: '#/items/1: must be a number',
      expected: { columnName: 'items', message: 'must be a number' },
    },
    {
      description: 'a message about a value nested in a column',
      raw: '#/tags/0/label: expected type: String',
      expected: { columnName: 'tags', message: 'expected type: String' },
    },
    {
      description: 'a row-level message',
      raw: '#: only 1 subschema matches out of 2',
      expected: {
        columnName: undefined,
        message: 'only 1 subschema matches out of 2',
      },
    },
    {
      description: 'a message that contains colons',
      raw: '#/platform: Error: null is not valid: check documentation',
      expected: {
        columnName: 'platform',
        message: 'Error: null is not valid: check documentation',
      },
    },
    {
      description: 'surrounding whitespace',
      raw: '  #/  platform  :   null is not a valid enum value  ',
      expected: {
        columnName: 'platform',
        message: 'null is not a valid enum value',
      },
    },
    {
      description: 'no space after the separator',
      raw: '#/version:must be a number',
      expected: { columnName: 'version', message: 'must be a number' },
    },
    {
      description: 'an escaped slash in the column name',
      raw: '#/a~1b: slash in name',
      expected: { columnName: 'a/b', message: 'slash in name' },
    },
    {
      description: 'an escaped tilde in the column name',
      raw: '#/c~0d: tilde in name',
      expected: { columnName: 'c~d', message: 'tilde in name' },
    },
    {
      description: 'an escaped tilde followed by 1 in the column name',
      raw: '#/e~01f: escaped tilde followed by 1',
      expected: { columnName: 'e~1f', message: 'escaped tilde followed by 1' },
    },
    {
      description: 'an escaped slash in an array column name',
      raw: '#/g~1h/0: slash in array column name',
      expected: { columnName: 'g/h', message: 'slash in array column name' },
    },
    {
      description: 'a message without a pointer, as a row-level message',
      raw: 'invalid message without hash',
      expected: {
        columnName: undefined,
        message: 'invalid message without hash',
      },
    },
    {
      description: 'a pointer without a message, as a row-level message',
      raw: '#/platform',
      expected: { columnName: undefined, message: '#/platform' },
    },
  ])('parses $description', ({ raw, expected }) => {
    expect(parseValidationMessage(raw)).toEqual(expected)
  })

  it.each([null, undefined, 123, '', '   '])(
    'returns undefined for %j',
    raw => {
      expect(parseValidationMessage(raw as string)).toBeUndefined()
    },
  )

  describe.each(PROPERTY_KEY_MESSAGES)(
    'for $messageType messages',
    ({ propertyKeyMessage }) => {
      it('attributes a row-level message to the property', () => {
        const message = propertyKeyMessage('missingColumn')

        expect(parseValidationMessage(`#: ${message}`)).toEqual({
          columnName: 'missingColumn',
          message,
        })
      })

      it('keeps the property name literal', () => {
        const message = propertyKeyMessage('a~1b')

        expect(parseValidationMessage(`#: ${message}`)?.columnName).toBe('a~1b')
      })

      it("attributes a message about a property whose name contains ']'", () => {
        const message = propertyKeyMessage('a]b')

        expect(parseValidationMessage(`#: ${message}`)?.columnName).toBe('a]b')
      })

      it('attributes a message nested in a column to that column', () => {
        const message = propertyKeyMessage('inner')

        expect(parseValidationMessage(`#/nested: ${message}`)).toEqual({
          columnName: 'nested',
          message,
        })
      })
    },
  )

  describe('when a column name contains a colon', () => {
    const message = 'expected type: String, found: Integer'

    it('attributes the message to the known column', () => {
      expect(
        parseValidationMessage(
          `#/time:utc: ${message}`,
          new Set(['time', 'time:utc']),
        ),
      ).toEqual({ columnName: 'time:utc', message })
    })

    it('attributes an array item message to the known column', () => {
      expect(
        parseValidationMessage(
          `#/time:utc/0: ${message}`,
          new Set(['time:utc']),
        ),
      ).toEqual({ columnName: 'time:utc', message })
    })

    it('splits at the first colon when the column is not known', () => {
      expect(parseValidationMessage(`#/time:utc: ${message}`)).toEqual({
        columnName: 'time',
        message: `utc: ${message}`,
      })
    })
  })
})

describe('groupValidationMessagesByColumn', () => {
  it('groups messages by column in message order, with row-level messages under the row-level key', () => {
    const result = groupValidationMessagesByColumn([
      { columnName: 'platform', message: 'null is not a valid enum value' },
      { columnName: undefined, message: 'only 1 subschema matches out of 2' },
      { columnName: 'version', message: 'must be a number' },
      { columnName: 'platform', message: 'required Column is missing' },
    ])

    expect(result).toEqual(
      new Map([
        [
          'platform',
          ['null is not a valid enum value', 'required Column is missing'],
        ],
        [ROW_LEVEL_KEY, ['only 1 subschema matches out of 2']],
        ['version', ['must be a number']],
      ]),
    )
    expect(Array.from(result.keys())).toEqual([
      'platform',
      ROW_LEVEL_KEY,
      'version',
    ])
  })

  it('returns an empty map when there are no messages', () => {
    expect(groupValidationMessagesByColumn([])).toEqual(new Map())
  })
})
