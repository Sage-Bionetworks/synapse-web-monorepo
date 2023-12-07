import { ColumnTypeEnum } from '@sage-bionetworks/synapse-types'
import { ColumnModelFormDataZodSchema } from './ColumnModelValidator'

describe('ColumnModel validation', () => {
  it('Does not require optional fields', () => {
    const columnModels = ColumnModelFormDataZodSchema.parse([
      {
        name: 'foo',
        columnType: ColumnTypeEnum.STRING,
      },
    ])

    expect(columnModels).toEqual([
      {
        name: 'foo',
        columnType: ColumnTypeEnum.STRING,
      },
    ])
  })
  describe('maximumSize', () => {
    it('handles no size', () => {
      const columnModels = ColumnModelFormDataZodSchema.parse([
        {
          name: 'no size',
          columnType: ColumnTypeEnum.STRING,
        },
      ])
      expect(columnModels).toEqual([
        {
          name: 'no size',
          columnType: ColumnTypeEnum.STRING,
        },
      ])
    })
    it('handles empty string', () => {
      const columnModels = ColumnModelFormDataZodSchema.parse([
        {
          name: 'empty string',
          columnType: ColumnTypeEnum.STRING,
          maximumSize: '',
        },
      ])

      expect(columnModels).toEqual([
        {
          name: 'empty string',
          columnType: ColumnTypeEnum.STRING,
        },
      ])
    })
    it('handles exactly the minimum value', () => {
      const columnModels = ColumnModelFormDataZodSchema.parse([
        {
          name: 'min',
          columnType: ColumnTypeEnum.STRING,
          maximumSize: '1',
        },
      ])

      expect(columnModels).toEqual([
        {
          name: 'min',
          columnType: ColumnTypeEnum.STRING,
          maximumSize: 1,
        },
      ])
    })
    it('handles exactly the maximum value', () => {
      const columnModels = ColumnModelFormDataZodSchema.parse([
        {
          name: 'max',
          columnType: ColumnTypeEnum.STRING,
          maximumSize: '1000',
        },
      ])

      expect(columnModels).toEqual([
        {
          name: 'max',
          columnType: ColumnTypeEnum.STRING,
          maximumSize: 1000,
        },
      ])
    })
    it('handles a value with number type', () => {
      const columnModels = ColumnModelFormDataZodSchema.parse([
        {
          name: 'as number',
          columnType: ColumnTypeEnum.STRING,
          maximumSize: 50,
        },
      ])

      expect(columnModels).toEqual([
        {
          name: 'as number',
          columnType: ColumnTypeEnum.STRING,
          maximumSize: 50,
        },
      ])
    })
    it('rejects a value of zero', () => {
      expect(() =>
        console.log(
          ColumnModelFormDataZodSchema.parse([
            {
              name: 'zero',
              columnType: ColumnTypeEnum.STRING,
              maximumSize: '0',
            },
          ]),
        ),
      ).toThrow()
    })
    it('rejects a value over the maximum', () => {
      expect(() =>
        ColumnModelFormDataZodSchema.parse([
          {
            name: 'overMax',
            columnType: ColumnTypeEnum.STRING,
            maximumSize: '1001',
          },
        ]),
      ).toThrow()
    })
    it('rejects a non-number value', () => {
      expect(() =>
        ColumnModelFormDataZodSchema.parse([
          {
            name: 'nonNumber',
            columnType: ColumnTypeEnum.STRING,
            maximumSize: 'foo',
          },
        ]),
      ).toThrow()
    })
    it('does not allow maximumSize for disallowed columns', () => {
      expect(() =>
        ColumnModelFormDataZodSchema.parse([
          {
            name: 'boolean',
            columnType: ColumnTypeEnum.BOOLEAN,
            maximumSize: '10',
          },
        ]),
      ).toThrow()
    })
  })
  describe('maximumListLength', () => {
    it('handles no maximumListLength', () => {
      const columnModels = ColumnModelFormDataZodSchema.parse([
        {
          name: 'no max list length',
          columnType: ColumnTypeEnum.STRING_LIST,
        },
      ])

      expect(columnModels).toEqual([
        {
          name: 'no max list length',
          columnType: ColumnTypeEnum.STRING_LIST,
        },
      ])
    })
    it('handles empty string', () => {
      const columnModels = ColumnModelFormDataZodSchema.parse([
        {
          name: 'empty string',
          columnType: ColumnTypeEnum.STRING_LIST,
          maximumListLength: '',
        },
      ])

      expect(columnModels).toEqual([
        {
          name: 'empty string',
          columnType: ColumnTypeEnum.STRING_LIST,
        },
      ])
    })
    it('handles exactly the minimum value', () => {
      const columnModels = ColumnModelFormDataZodSchema.parse([
        {
          name: 'min',
          columnType: ColumnTypeEnum.STRING_LIST,
          maximumListLength: '1',
        },
      ])

      expect(columnModels).toEqual([
        {
          name: 'min',
          columnType: ColumnTypeEnum.STRING_LIST,
          maximumListLength: 1,
        },
      ])
    })
    it('handles exactly the maximum value', () => {
      const columnModels = ColumnModelFormDataZodSchema.parse([
        {
          name: 'max',
          columnType: ColumnTypeEnum.STRING_LIST,
          maximumListLength: '100',
        },
      ])

      expect(columnModels).toEqual([
        {
          name: 'max',
          columnType: ColumnTypeEnum.STRING_LIST,
          maximumListLength: 100,
        },
      ])
    })
    it('handles a value of number type', () => {
      const columnModels = ColumnModelFormDataZodSchema.parse([
        {
          name: 'as number',
          columnType: ColumnTypeEnum.STRING_LIST,
          maximumListLength: 50,
        },
      ])

      expect(columnModels).toEqual([
        {
          name: 'as number',
          columnType: ColumnTypeEnum.STRING_LIST,
          maximumListLength: 50,
        },
      ])
    })
    it('rejects a value of 0', () => {
      expect(() =>
        console.log(
          ColumnModelFormDataZodSchema.parse([
            {
              name: 'zero',
              columnType: ColumnTypeEnum.STRING_LIST,
              maximumListLength: '0',
            },
          ]),
        ),
      ).toThrow()
    })
    it('rejects a value over the maximum', () => {
      expect(() =>
        ColumnModelFormDataZodSchema.parse([
          {
            name: 'overMax',
            columnType: ColumnTypeEnum.STRING_LIST,
            maximumListLength: '101',
          },
        ]),
      ).toThrow()
    })
    it('rejects a non-number value', () => {
      expect(() =>
        ColumnModelFormDataZodSchema.parse([
          {
            name: 'nonNumber',
            columnType: ColumnTypeEnum.STRING_LIST,
            maximumListLength: 'foo',
          },
        ]),
      ).toThrow()
    })
    it('does not allow maximumListLength for disallowed columns', () => {
      expect(() =>
        ColumnModelFormDataZodSchema.parse([
          {
            name: 'boolean',
            columnType: ColumnTypeEnum.BOOLEAN,
            maximumListLength: '10',
          },
        ]),
      ).toThrow()
    })
  })
  describe('defaultValue', () => {
    it('defaultValue is a string', () => {
      const columnModels = ColumnModelFormDataZodSchema.parse([
        {
          name: 'string',
          columnType: ColumnTypeEnum.STRING,
          defaultValue: 'foo',
        },
      ])

      expect(columnModels).toEqual([
        {
          name: 'string',
          columnType: ColumnTypeEnum.STRING,
          defaultValue: 'foo',
        },
      ])
    })
    it('defaultValue is a string array', () => {
      const columnModels = ColumnModelFormDataZodSchema.parse([
        {
          name: 'stringList serialized',
          columnType: ColumnTypeEnum.STRING_LIST,
          defaultValue: '["foo","bar"]',
        },
        {
          name: 'stringList not serialized',
          columnType: ColumnTypeEnum.STRING_LIST,
          defaultValue: ['foo', 'bar'],
        },
        {
          name: 'stringList contains non-string type',
          columnType: ColumnTypeEnum.STRING_LIST,
          defaultValue: ['foo', 'bar', 1],
        },
      ])

      expect(columnModels).toEqual([
        {
          name: 'stringList serialized',
          columnType: ColumnTypeEnum.STRING_LIST,
          defaultValue: '["foo","bar"]',
        },
        {
          name: 'stringList not serialized',
          columnType: ColumnTypeEnum.STRING_LIST,
          defaultValue: '["foo","bar"]',
        },
        {
          name: 'stringList contains non-string type',
          columnType: ColumnTypeEnum.STRING_LIST,
          defaultValue: '["foo","bar","1"]',
        },
      ])
    })
    it('defaultValue is boolean', () => {
      const columnModels = ColumnModelFormDataZodSchema.parse([
        {
          name: 'boolean',
          columnType: ColumnTypeEnum.BOOLEAN,
          defaultValue: 'false',
        },
        {
          name: 'serialized boolean list',
          columnType: ColumnTypeEnum.BOOLEAN_LIST,
          defaultValue: '[true,false]',
        },
        {
          name: 'deserialized boolean list',
          columnType: ColumnTypeEnum.BOOLEAN_LIST,
          defaultValue: [true, false],
        },
      ])

      expect(columnModels).toEqual([
        {
          name: 'boolean',
          columnType: ColumnTypeEnum.BOOLEAN,
          defaultValue: 'false',
        },
        {
          name: 'serialized boolean list',
          columnType: ColumnTypeEnum.BOOLEAN_LIST,
          defaultValue: '[true,false]',
        },
        {
          name: 'deserialized boolean list',
          columnType: ColumnTypeEnum.BOOLEAN_LIST,
          defaultValue: '[true,false]',
        },
      ])
    })
    it('defaultValue is an integer', () => {
      const columnModels = ColumnModelFormDataZodSchema.parse([
        {
          name: 'int',
          columnType: ColumnTypeEnum.INTEGER,
          defaultValue: '1',
        },
      ])

      expect(columnModels).toEqual([
        {
          name: 'int',
          columnType: ColumnTypeEnum.INTEGER,
          defaultValue: '1',
        },
      ])
    })

    it('defaultValue is an integer list', () => {
      const columnModels = ColumnModelFormDataZodSchema.parse([
        {
          name: 'serialized integer list',
          columnType: ColumnTypeEnum.INTEGER_LIST,
          defaultValue: '[1,2,3]',
        },
        {
          name: 'deserialized integer list',
          columnType: ColumnTypeEnum.INTEGER_LIST,
          defaultValue: [1, 2, 3],
        },
      ])

      expect(columnModels).toEqual([
        {
          name: 'serialized integer list',
          columnType: ColumnTypeEnum.INTEGER_LIST,
          defaultValue: '[1,2,3]',
        },
        {
          name: 'deserialized integer list',
          columnType: ColumnTypeEnum.INTEGER_LIST,
          defaultValue: '[1,2,3]',
        },
      ])
    })
    it('defaultValue is a double', () => {
      const columnModels = ColumnModelFormDataZodSchema.parse([
        {
          name: 'double',
          columnType: ColumnTypeEnum.DOUBLE,
          defaultValue: '1.23e-10',
        },
        {
          name: 'infinity',
          columnType: ColumnTypeEnum.DOUBLE,
          defaultValue: 'Infinity',
        },
        {
          name: 'negative infinity',
          columnType: ColumnTypeEnum.DOUBLE,
          defaultValue: '-Infinity',
        },
        {
          name: 'NaN',
          columnType: ColumnTypeEnum.DOUBLE,
          defaultValue: 'NaN',
        },
      ])

      expect(columnModels).toEqual([
        {
          name: 'double',
          columnType: ColumnTypeEnum.DOUBLE,
          defaultValue: '1.23e-10',
        },
        {
          name: 'infinity',
          columnType: ColumnTypeEnum.DOUBLE,
          defaultValue: 'Infinity',
        },
        {
          name: 'negative infinity',
          columnType: ColumnTypeEnum.DOUBLE,
          defaultValue: '-Infinity',
        },
        {
          name: 'NaN',
          columnType: ColumnTypeEnum.DOUBLE,
          defaultValue: 'NaN',
        },
      ])
    })
    it('defaultValue is datetime', () => {
      const columnModels = ColumnModelFormDataZodSchema.parse([
        {
          name: 'iso timestamp',
          columnType: ColumnTypeEnum.DATE,
          defaultValue: '1672531200000',
        },
        {
          name: 'unix timestamp',
          columnType: ColumnTypeEnum.DATE,
          defaultValue: '2023-01-01T00:00:00.000Z',
        },
      ])

      expect(columnModels).toEqual([
        {
          name: 'iso timestamp',
          columnType: ColumnTypeEnum.DATE,
          defaultValue: '2023-01-01T00:00:00.000Z',
        },
        {
          name: 'unix timestamp',
          columnType: ColumnTypeEnum.DATE,
          defaultValue: '2023-01-01T00:00:00.000Z',
        },
      ])
    })
    it('defaultValue is an array of datetime', () => {
      const columnModels = ColumnModelFormDataZodSchema.parse([
        {
          name: 'iso timestamp serialized',
          columnType: ColumnTypeEnum.DATE_LIST,
          defaultValue: '[1672531200000]',
        },
        {
          name: 'iso timestamp deserialized',
          columnType: ColumnTypeEnum.DATE_LIST,
          defaultValue: [1672531200000],
        },
        {
          name: 'unix timestamp serialized',
          columnType: ColumnTypeEnum.DATE_LIST,
          defaultValue:
            '["2023-01-01T00:00:00.000Z","2024-01-01T00:00:00.000Z"]',
        },
        {
          name: 'unix timestamp deserialized',
          columnType: ColumnTypeEnum.DATE_LIST,
          defaultValue: [
            '2023-01-01T00:00:00.000Z',
            '2024-01-01T00:00:00.000Z',
          ],
        },
      ])

      expect(columnModels).toEqual([
        {
          name: 'iso timestamp serialized',
          columnType: ColumnTypeEnum.DATE_LIST,
          defaultValue: '["2023-01-01T00:00:00.000Z"]',
        },
        {
          name: 'iso timestamp deserialized',
          columnType: ColumnTypeEnum.DATE_LIST,
          defaultValue: '["2023-01-01T00:00:00.000Z"]',
        },
        {
          name: 'unix timestamp serialized',
          columnType: ColumnTypeEnum.DATE_LIST,
          defaultValue:
            '["2023-01-01T00:00:00.000Z","2024-01-01T00:00:00.000Z"]',
        },
        {
          name: 'unix timestamp deserialized',
          columnType: ColumnTypeEnum.DATE_LIST,
          defaultValue:
            '["2023-01-01T00:00:00.000Z","2024-01-01T00:00:00.000Z"]',
        },
      ])
    })
    it('rejects defaultValues of incorrect type', () => {
      expect(() =>
        ColumnModelFormDataZodSchema.parse([
          {
            name: 'integer with string default',
            columnType: ColumnTypeEnum.INTEGER,
            defaultValue: 'foo',
          },
        ]),
      ).toThrow()
    })
  })
  describe('enumValues', () => {
    describe('STRING', () => {
      it('Handles an array of string enum values', () => {
        const columnModels = ColumnModelFormDataZodSchema.parse([
          {
            name: 'foo',
            columnType: ColumnTypeEnum.STRING,
            enumValues: ['foo', 'bar'],
          },
        ])
        expect(columnModels).toEqual([
          {
            name: 'foo',
            columnType: ColumnTypeEnum.STRING,
            enumValues: ['foo', 'bar'],
          },
        ])
      })
      it('Handles and removes an empty array', () => {
        const columnModels = ColumnModelFormDataZodSchema.parse([
          {
            name: 'foo',
            columnType: ColumnTypeEnum.STRING,
            enumValues: [],
          },
        ])
        expect(columnModels).toEqual([
          {
            name: 'foo',
            columnType: ColumnTypeEnum.STRING,
          },
        ])
      })
    })
    describe('INTEGER', () => {
      it('Handles an array of integers', () => {
        const columnModels = ColumnModelFormDataZodSchema.parse([
          {
            name: 'foo',
            columnType: ColumnTypeEnum.INTEGER,
            enumValues: [1, 2],
          },
        ])
        expect(columnModels).toEqual([
          {
            name: 'foo',
            columnType: ColumnTypeEnum.INTEGER,
            enumValues: ['1', '2'],
          },
        ])
      })
      it('Handles an array of integers formatted as strings', () => {
        const columnModels = ColumnModelFormDataZodSchema.parse([
          {
            name: 'foo',
            columnType: ColumnTypeEnum.INTEGER,
            enumValues: ['1', '2'],
          },
        ])
        expect(columnModels).toEqual([
          {
            name: 'foo',
            columnType: ColumnTypeEnum.INTEGER,
            enumValues: ['1', '2'],
          },
        ])
      })
      it('Rejects non-integer values', () => {
        expect(() =>
          ColumnModelFormDataZodSchema.parse([
            {
              name: 'foo',
              columnType: ColumnTypeEnum.INTEGER,
              enumValues: ['foo', 'bar'],
            },
          ]),
        ).toThrow()
      })
    })
    describe('ENTITYID', () => {
      it('Handles an array of entityIds', () => {
        const columnModels = ColumnModelFormDataZodSchema.parse([
          {
            name: 'foo',
            columnType: ColumnTypeEnum.ENTITYID,
            enumValues: ['syn123', '456', 789],
          },
        ])
        expect(columnModels).toEqual([
          {
            name: 'foo',
            columnType: ColumnTypeEnum.ENTITYID,
            enumValues: ['syn123', '456', '789'],
          },
        ])
      })
      it('Rejects an improperly formatted synId', () => {
        expect(() =>
          ColumnModelFormDataZodSchema.parse([
            {
              name: 'foo',
              columnType: ColumnTypeEnum.ENTITYID,
              enumValues: ['syn'],
            },
          ]),
        ).toThrow()
      })
    })
  })
})
