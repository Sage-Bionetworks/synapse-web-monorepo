import { RJSFSchema } from '@rjsf/utils'
import { getSchemaDataFileHandleIds, isFileHandleIdValue } from './schemaData'

const schema: RJSFSchema = {
  type: 'object',
  properties: {
    agreement: { type: 'number', format: 'synapse-filehandle-id' },
    consent: { type: 'number', format: 'synapse-filehandle-id' },
    title: { type: 'string' },
    extras: {
      type: 'array',
      items: { type: 'number', format: 'synapse-filehandle-id' },
    },
  },
}

describe('getSchemaDataFileHandleIds', () => {
  it('lists the file answers as strings, in schema order, without duplicates', () => {
    expect(
      getSchemaDataFileHandleIds(schema, {
        consent: '7',
        agreement: 123,
        title: '456',
      }),
    ).toEqual(['123', '7'])
    expect(
      getSchemaDataFileHandleIds(schema, { agreement: 5, consent: 5 }),
    ).toEqual(['5'])
  })

  it('ignores arrays of file IDs, answers that are not IDs, and missing answers', () => {
    expect(
      getSchemaDataFileHandleIds(schema, {
        extras: [1, 2],
        agreement: 'not-an-id',
      }),
    ).toEqual([])
    expect(getSchemaDataFileHandleIds(schema, {})).toEqual([])
  })
})

describe('isFileHandleIdValue', () => {
  it.each([[123], ['123']])('accepts %p', value => {
    expect(isFileHandleIdValue(value)).toBe(true)
  })

  it.each([[''], ['12a'], [-1], [1.5], [null], [undefined], [[1]]])(
    'rejects %p',
    value => {
      expect(isFileHandleIdValue(value)).toBe(false)
    },
  )
})
