import getSchemaForProperty from '@/utils/jsonschema/getSchemaForProperty'

describe('getSchemaForProperty', () => {
  test('basic case', () => {
    const schema = {
      properties: {
        name: { type: 'string' },
        age: { type: 'integer' },
      },
    }
    const result = getSchemaForProperty(schema, 'name')
    expect(result).toEqual({ type: 'string' })
  })
})
