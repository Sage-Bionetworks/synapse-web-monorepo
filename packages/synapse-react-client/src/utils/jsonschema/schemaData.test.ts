import { RJSFSchema } from '@rjsf/utils'
import {
  getAttachmentsNotInSchemaData,
  getSchemaDataFileHandleIds,
  isFileHandleIdValue,
  SYNAPSE_FILE_HANDLE_ID_FORMAT,
} from './schemaData'

const schema: RJSFSchema = {
  type: 'object',
  properties: {
    agreement: { type: 'number', format: SYNAPSE_FILE_HANDLE_ID_FORMAT },
    consent: { type: 'number', format: SYNAPSE_FILE_HANDLE_ID_FORMAT },
    title: { type: 'string' },
    extras: {
      type: 'array',
      items: { type: 'number', format: SYNAPSE_FILE_HANDLE_ID_FORMAT },
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

describe('getAttachmentsNotInSchemaData', () => {
  it('omits the attachments that the answers reference', () => {
    expect(
      getAttachmentsNotInSchemaData(['123', '555'], schema, { agreement: 123 }),
    ).toEqual(['555'])
  })

  it('returns every attachment when the schema is unavailable', () => {
    expect(
      getAttachmentsNotInSchemaData(['123', '555'], undefined, {
        agreement: 123,
      }),
    ).toEqual(['123', '555'])
  })

  it('returns no attachments when there are none', () => {
    expect(getAttachmentsNotInSchemaData(undefined, schema, {})).toEqual([])
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
