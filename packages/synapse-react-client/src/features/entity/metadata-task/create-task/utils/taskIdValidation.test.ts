import { isValidTaskIdInput, parseTaskIdInput } from './taskIdValidation'

describe('isValidTaskIdInput', () => {
  it.each(['1', '42', '999999'])('accepts positive integer "%s"', value => {
    expect(isValidTaskIdInput(value)).toBe(true)
  })

  it.each(['0', '-1', '1.5', 'abc', '01', ' ', ''])(
    'rejects invalid input "%s"',
    value => {
      expect(isValidTaskIdInput(value)).toBe(false)
    },
  )

  it('allows an empty string when allowEmpty is true', () => {
    expect(isValidTaskIdInput('', { allowEmpty: true })).toBe(true)
    expect(isValidTaskIdInput('   ', { allowEmpty: true })).toBe(true)
  })

  it('still rejects invalid non-empty input when allowEmpty is true', () => {
    expect(isValidTaskIdInput('abc', { allowEmpty: true })).toBe(false)
  })
})

describe('parseTaskIdInput', () => {
  it('parses a valid positive integer string', () => {
    expect(parseTaskIdInput('42')).toBe(42)
  })

  it('returns undefined for invalid input', () => {
    expect(parseTaskIdInput('abc')).toBeUndefined()
    expect(parseTaskIdInput('')).toBeUndefined()
    expect(parseTaskIdInput('-1')).toBeUndefined()
    expect(parseTaskIdInput('1.5')).toBeUndefined()
  })
})
