import { entityIdSchema } from './EntityIdSchema'

describe('EntityIdValidator', () => {
  test('syn prefix', () => {
    expect(entityIdSchema.parse('syn123')).toEqual('syn123')
    expect(() => entityIdSchema.parse('syn')).toThrow()
  })

  test('no prefix', () => {
    expect(entityIdSchema.parse('123')).toEqual('123')
  })

  test('integer', () => {
    expect(entityIdSchema.parse(123)).toEqual(123)
  })

  test('does not allow a versioned ID', () => {
    expect(() => entityIdSchema.parse('syn123.4')).toThrow()
    expect(() => entityIdSchema.parse('123.4')).toThrow()
    expect(() => entityIdSchema.parse(123.4)).toThrow()
  })
})
