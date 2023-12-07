import { getDefaultValueValidator } from './DefaultValueValidator'
import { ColumnTypeEnum } from '@sage-bionetworks/synapse-types'

describe('DefaultValueValidator', () => {
  it('STRING', () => {
    const validator = getDefaultValueValidator(ColumnTypeEnum.STRING)
    expect(validator.parse('foo')).toEqual('foo')
    expect(validator.parse('1')).toEqual('1')
    expect(validator.parse('false')).toEqual('false')
    expect(validator.parse('["foo"]')).toEqual('["foo"]')
    expect(validator.parse(true)).toEqual('true')
    expect(validator.parse(false)).toEqual('false')
    expect(validator.parse(Infinity)).toEqual('Infinity')
    expect(validator.parse(NaN)).toEqual('NaN')
    expect(validator.parse(1)).toEqual('1')

    // Null/empty values
    expect(validator.parse('')).toEqual(undefined)
    expect(validator.parse(null)).toEqual(undefined)
    expect(validator.parse(undefined)).toEqual(undefined)
  })

  it('STRING_LIST', () => {
    const validator = getDefaultValueValidator(ColumnTypeEnum.STRING_LIST)
    expect(validator.parse('["foo","bar"]')).toEqual('["foo","bar"]')
    expect(validator.parse(['foo', 'bar'])).toEqual('["foo","bar"]')
    expect(validator.parse([1, 2, 3])).toEqual('["1","2","3"]')
    expect(validator.parse([true, false])).toEqual('["true","false"]')

    // Null/empty values
    expect(validator.parse('')).toEqual(undefined)
    expect(validator.parse([])).toEqual(undefined)
    expect(validator.parse(null)).toEqual(undefined)
    expect(validator.parse(undefined)).toEqual(undefined)

    // Non-array should not be allowed
    expect(() => validator.parse('foo')).toThrow()
    expect(() => validator.parse('{"foo": "bar"')).toThrow()
  })

  it('BOOLEAN', () => {
    const validator = getDefaultValueValidator(ColumnTypeEnum.BOOLEAN)
    expect(validator.parse('true')).toEqual('true')
    expect(validator.parse('false')).toEqual('false')
    expect(validator.parse(true)).toEqual('true')
    expect(validator.parse(false)).toEqual('false')

    // Null/empty values
    expect(validator.parse('')).toEqual(undefined)
    expect(validator.parse(null)).toEqual(undefined)
    expect(validator.parse(undefined)).toEqual(undefined)

    expect(() => validator.parse('foo')).toThrow()
  })

  it('BOOLEAN_LIST', () => {
    const validator = getDefaultValueValidator(ColumnTypeEnum.BOOLEAN_LIST)
    expect(validator.parse('[true,false]')).toEqual('[true,false]')
    expect(validator.parse([true, false])).toEqual('[true,false]')
    expect(validator.parse(['true', 'false'])).toEqual('[true,false]')

    // Null/empty values
    expect(validator.parse('')).toEqual(undefined)
    expect(validator.parse(null)).toEqual(undefined)
    expect(validator.parse(undefined)).toEqual(undefined)

    expect(() => validator.parse('foo')).toThrow()
  })

  it('INTEGER', () => {
    const validator = getDefaultValueValidator(ColumnTypeEnum.INTEGER)
    expect(validator.parse(1)).toEqual('1')
    expect(validator.parse('1')).toEqual('1')

    // Null/empty values
    expect(validator.parse('')).toEqual(undefined)
    expect(validator.parse(null)).toEqual(undefined)
    expect(validator.parse(undefined)).toEqual(undefined)

    // Invalid values
    expect(() => validator.parse(1.234)).toThrow()
    expect(() => validator.parse('foo')).toThrow()
    expect(() => validator.parse(NaN)).toThrow()
    expect(() => validator.parse('NaN')).toThrow()
  })

  it('INTEGER_LIST', () => {
    const validator = getDefaultValueValidator(ColumnTypeEnum.INTEGER_LIST)
    expect(validator.parse('[1,2]')).toEqual('[1,2]')
    expect(validator.parse(['1', '2'])).toEqual('[1,2]')
    expect(validator.parse([1, 2])).toEqual('[1,2]')

    // Null/empty values
    expect(validator.parse('')).toEqual(undefined)
    expect(validator.parse(null)).toEqual(undefined)
    expect(validator.parse(undefined)).toEqual(undefined)

    // Invalid values
    expect(() => validator.parse([1.234])).toThrow()
    expect(() => validator.parse(['foo'])).toThrow()
    expect(() => validator.parse([NaN])).toThrow()
    expect(() => validator.parse(['NaN'])).toThrow()
  })

  it('DOUBLE', () => {
    const validator = getDefaultValueValidator(ColumnTypeEnum.DOUBLE)
    expect(validator.parse(1)).toEqual('1')
    expect(validator.parse(1.23)).toEqual('1.23')
    expect(validator.parse(1e5)).toEqual('100000')
    expect(validator.parse(1e-5)).toEqual('0.00001')
    expect(validator.parse(Infinity)).toEqual('Infinity')
    expect(validator.parse(-Infinity)).toEqual('-Infinity')
    expect(validator.parse(NaN)).toEqual('NaN')

    expect(validator.parse('1')).toEqual('1')
    expect(validator.parse('1.23')).toEqual('1.23')
    expect(validator.parse('1e5')).toEqual('100000')
    expect(validator.parse('1e-5')).toEqual('0.00001')
    expect(validator.parse('Infinity')).toEqual('Infinity')
    expect(validator.parse('-Infinity')).toEqual('-Infinity')
    expect(validator.parse('NaN')).toEqual('NaN')

    // Null/empty values
    expect(validator.parse('')).toEqual(undefined)
    expect(validator.parse(null)).toEqual(undefined)
    expect(validator.parse(undefined)).toEqual(undefined)

    // Invalid values
    expect(() => validator.parse('foo')).toThrow()
    expect(() => validator.parse('true')).toThrow()
  })

  it('DATE', () => {
    const validator = getDefaultValueValidator(ColumnTypeEnum.DATE)
    expect(validator.parse(1701878400000)).toEqual('2023-12-06T16:00:00.000Z')
    expect(validator.parse('1701878400000')).toEqual('2023-12-06T16:00:00.000Z')
    expect(validator.parse('2023-12-06T16:00:31.000Z')).toEqual(
      '2023-12-06T16:00:31.000Z',
    )
    expect(validator.parse('2023-12-06')).toEqual('2023-12-06T00:00:00.000Z')

    // Null/empty values
    expect(validator.parse('')).toEqual(undefined)
    expect(validator.parse(null)).toEqual(undefined)
    expect(validator.parse(undefined)).toEqual(undefined)

    // Invalid values
    expect(() => validator.parse('foo')).toThrow()
    expect(() => validator.parse(NaN)).toThrow()
  })

  it('DATE_LIST', () => {
    const validator = getDefaultValueValidator(ColumnTypeEnum.DATE_LIST)
    expect(validator.parse('[1701878400000,1701982830000]')).toEqual(
      '["2023-12-06T16:00:00.000Z","2023-12-07T21:00:30.000Z"]',
    )
    expect(validator.parse(['1701878400000', '1701982830000'])).toEqual(
      '["2023-12-06T16:00:00.000Z","2023-12-07T21:00:30.000Z"]',
    )
    expect(validator.parse([1701878400000, 1701982830000])).toEqual(
      '["2023-12-06T16:00:00.000Z","2023-12-07T21:00:30.000Z"]',
    )
    expect(
      validator.parse(
        '["2023-12-06T16:00:00.000Z","2023-12-07T21:00:30.000Z"]',
      ),
    ).toEqual('["2023-12-06T16:00:00.000Z","2023-12-07T21:00:30.000Z"]')
    expect(
      validator.parse(['2023-12-06T16:00:00.000Z', '2023-12-07T21:00:30.000Z']),
    ).toEqual('["2023-12-06T16:00:00.000Z","2023-12-07T21:00:30.000Z"]')

    // Null/empty values
    expect(validator.parse('')).toEqual(undefined)
    expect(validator.parse(null)).toEqual(undefined)
    expect(validator.parse(undefined)).toEqual(undefined)

    // Invalid values
    expect(() => validator.parse('foo')).toThrow()
    expect(() => validator.parse(['foo'])).toThrow()
    expect(() => validator.parse([NaN])).toThrow()
  })
})
