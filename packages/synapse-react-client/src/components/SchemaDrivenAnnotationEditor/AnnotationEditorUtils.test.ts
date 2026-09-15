import { RJSFValidationError } from '@rjsf/utils'
import {
  dropNullishArrayValues,
  dropNullValues,
  getFriendlyPropertyName,
  getSchemaIdForConcreteType,
  transformErrors,
  shouldLiveValidate,
} from './AnnotationEditorUtils'
import { JSONSchema7 } from 'json-schema'
import { test } from 'vitest'

describe('AnnotationEditorUtils tests', () => {
  describe('dropNullValues', () => {
    it('removes null values only', () => {
      const formData = {
        a: 'foo',
        b: {},
        c: [],
        d: '',
        e: undefined,
        f: null,
      }
      const expected = { a: 'foo', b: {}, c: [], d: '', e: undefined }
      expect(dropNullValues(formData)).toEqual(expected)
    })
  })

  describe('dropNullishArrayValues', () => {
    it('will remove an empty array from the formData', () => {
      const formData = {
        array: [],
      }
      const expected = {}
      expect(dropNullishArrayValues(formData)).toEqual(expected)
    })
    it('will remove nullish values from an array', () => {
      const formData = {
        array: [1, null, 2, undefined, 3],
      }
      const expected = { array: [1, 2, 3] }
      expect(dropNullishArrayValues(formData)).toEqual(expected)
    })
    it('will remove an array containing only nullish values from an array', () => {
      const formData = {
        array: [null, undefined],
      }
      const expected = {}
      expect(dropNullishArrayValues(formData)).toEqual(expected)
    })
  })

  describe('getFriendlyPropertyName', () => {
    it('strips the leading period from a schema-defined property', () => {
      const error: RJSFValidationError = {
        stack: '.study[0] is a requiredProperty',
        property: '.study[0]',
      }

      const expected = 'study[0]'

      expect(getFriendlyPropertyName(error)).toEqual(expected)
    })
    it('parses additionalProperties from an error', () => {
      const error: RJSFValidationError = {
        stack: '.study[0] is a requiredProperty',
        property: "['myProperty']",
      }

      const expected = 'myProperty'

      expect(getFriendlyPropertyName(error)).toEqual(expected)
    })
  })

  describe('transformErrors', () => {
    it('combines errors caused by an enumeration defined using anyOf', () => {
      const errors: RJSFValidationError[] = [
        {
          name: 'type',
          property: '.study[0]',
          message: 'should be string',
          params: { type: 'string' },
          stack: '.study[0] should be string',
        },
        {
          name: 'const',
          property: '.study[0]',
          message: 'should be equal to constant',
          params: { allowedValue: 'VMC' },
          stack: '.study[0] should be equal to constant',
        },
        {
          name: 'const',
          property: '.study[0]',
          message: 'should be equal to constant',
          params: { allowedValue: 'WGBS Pilot' },
          stack: '.study[0] should be equal to constant',
        },
        {
          name: 'const',
          property: '.study[0]',
          message: 'should be equal to constant',
          params: { allowedValue: 'Yale-ASD' },
          stack: '.study[0] should be equal to constant',
        },
        {
          name: 'anyOf',
          property: '.study[0]',
          message: 'should match some schema in anyOf',
          params: {},
          stack: '.study[0] should match some schema in anyOf',
        },
      ]
      const expected = expect.arrayContaining([
        expect.objectContaining({
          message: 'should be equal to one of the allowed values',
        }),
      ])

      expect(transformErrors(errors)).toEqual(expected)
    })
  })

  describe('shouldLiveValidate', () => {
    const schema: JSONSchema7 | undefined = {
      properties: {
        foo: {
          type: 'string',
        },
      },
    }
    it('should be true if there are annotations and a schema', () => {
      const annotations: Record<string, unknown> | undefined = {
        foo: 'bar',
      }
      expect(shouldLiveValidate(annotations, schema)).toBe(true)
    })
    it('should be false if annotations is empty', () => {
      const annotations: Record<string, unknown> | undefined = {
        // empty object
      }
      expect(shouldLiveValidate(annotations, schema)).toBe(false)
    })
    it('should be false if annotations is undefined', () => {
      const annotations: Record<string, unknown> | undefined = undefined
      expect(shouldLiveValidate(annotations, schema)).toBe(false)
    })
    it('should be true if there is no schema', () => {
      const annotations: Record<string, unknown> | undefined = {
        foo: 'bar',
      }
      expect(shouldLiveValidate(annotations, undefined)).toBe(false)
    })
  })

  test('getSchemaIdForConcreteType', () => {
    const concreteType = 'org.sagebionetworks.repo.model.FileEntity'
    const expectedSchemaId = 'org.sagebionetworks-repo.model.FileEntity'

    const result = getSchemaIdForConcreteType(concreteType)

    expect(result).toEqual(expectedSchemaId)
  })
})
