import { ColumnTypeEnum } from '@sage-bionetworks/synapse-types'
import getEnumValuesValidator from './EnumValuesValidator'

describe('EnumValuesValidator', () => {
  it('STRING', () => {
    const validator = getEnumValuesValidator(ColumnTypeEnum.STRING)
    expect(validator.parse('foo')).toEqual(['foo'])
    expect(validator.parse(1)).toEqual(['1'])
    expect(validator.parse(['foo', 1, '2', true, false])).toEqual([
      'foo',
      '1',
      '2',
      'true',
      'false',
    ])

    // Null/empty values
    expect(validator.parse('')).toEqual(undefined)
    expect(validator.parse([''])).toEqual(undefined)
    expect(validator.parse([])).toEqual(undefined)
    expect(validator.parse(null)).toEqual(undefined)
    expect(validator.parse(undefined)).toEqual(undefined)
  })

  it('INTEGER', () => {
    const validator = getEnumValuesValidator(ColumnTypeEnum.INTEGER)
    expect(validator.parse(1)).toEqual(['1'])
    expect(validator.parse('1')).toEqual(['1'])
    expect(validator.parse([1, '2'])).toEqual(['1', '2'])

    // Null/empty values
    expect(validator.parse('')).toEqual(undefined)
    expect(validator.parse(null)).toEqual(undefined)
    expect(validator.parse(undefined)).toEqual(undefined)

    // Invalid values
    expect(() => validator.parse('foo')).toThrow()
    expect(() => validator.parse(NaN)).toThrow()
    expect(() => validator.parse('NaN')).toThrow()
  })

  it('ENTITYID', () => {
    const validator = getEnumValuesValidator(ColumnTypeEnum.ENTITYID)
    expect(validator.parse(1)).toEqual(['1'])
    expect(validator.parse('syn1')).toEqual(['syn1'])
    expect(validator.parse([123, 'syn123'])).toEqual(['123', 'syn123'])

    // Null/empty values
    expect(validator.parse('')).toEqual(undefined)
    expect(validator.parse(null)).toEqual(undefined)
    expect(validator.parse(undefined)).toEqual(undefined)

    // Invalid values
    expect(() => validator.parse('foo')).toThrow()
    expect(() => validator.parse(NaN)).toThrow()
    expect(() => validator.parse('NaN')).toThrow()
  })
})
