import { createSchemaUtils, RJSFSchema, RJSFValidationError } from '@rjsf/utils'
import {
  ALLOWED_VALUES_MESSAGE,
  jsonSchemaFormValidator,
} from '@/components/JsonSchemaForm/JsonSchemaFormValidator'
import {
  dropNullishArrayValues,
  dropNullValues,
  getFriendlyPropertyName,
  getJsonSchemaForForm,
  getSchemaIdForConcreteType,
  shapeAnnotationFormData,
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
          message: 'must be string',
          params: { type: 'string' },
          stack: '.study[0] must be string',
        },
        {
          name: 'const',
          property: '.study[0]',
          message: 'must be equal to constant',
          params: { allowedValue: 'VMC' },
          stack: '.study[0] must be equal to constant',
        },
        {
          name: 'const',
          property: '.study[0]',
          message: 'must be equal to constant',
          params: { allowedValue: 'WGBS Pilot' },
          stack: '.study[0] must be equal to constant',
        },
        {
          name: 'anyOf',
          property: '.study[0]',
          message: 'must match a schema in anyOf',
          params: {},
          stack: '.study[0] must match a schema in anyOf',
        },
      ]

      expect(transformErrors(errors)).toEqual([
        expect.objectContaining({
          property: '.study[0]',
          message: ALLOWED_VALUES_MESSAGE,
        }),
      ])
    })

    it('simplifies the errors the shared validator gives a value outside an anyOf enum', () => {
      const schema: RJSFSchema = {
        type: 'object',
        properties: {
          study: {
            type: 'array',
            items: {
              type: 'string',
              anyOf: [{ const: 'VMC' }, { const: 'Yale-ASD' }],
            },
          },
        },
      }
      const { errors } = jsonSchemaFormValidator.validateFormData(
        { study: ['VMC', 'Unknown'] },
        schema,
        undefined,
        transformErrors,
      )

      expect(errors).toEqual([
        expect.objectContaining({
          property: '.study.1',
          message: ALLOWED_VALUES_MESSAGE,
        }),
      ])
    })

    it('leaves anyOf errors alone when the property also breaks another rule', () => {
      const schema: RJSFSchema = {
        type: 'object',
        properties: {
          study: {
            type: 'string',
            maxLength: 2,
            anyOf: [{ const: 'VMC' }, { const: 'Yale-ASD' }],
          },
        },
      }
      const { errors } = jsonSchemaFormValidator.validateFormData(
        { study: 'Unknown' },
        schema,
        undefined,
        transformErrors,
      )

      // The validator reports the two options' identical `const` errors once
      expect(
        errors
          .map(error => error.name ?? '')
          .toSorted((a, b) => a.localeCompare(b)),
      ).toEqual(['anyOf', 'const', 'maxLength'])
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

  describe('shapeAnnotationFormData', () => {
    // The form schema for a validation schema with conditionals, as `getJsonSchemaForForm` builds it
    const formSchema = getJsonSchemaForForm({
      type: 'object',
      properties: {
        country: { enum: ['USA', 'CA'] },
        showStringArray: { type: 'boolean' },
      },
      allOf: [
        {
          if: { properties: { country: { const: 'USA' } } },
          then: { properties: { state: { type: 'string' } } },
        },
        {
          if: { properties: { showStringArray: { const: true } } },
          then: {
            properties: {
              stringArray: { type: 'array', items: { type: 'string' } },
            },
          },
        },
      ],
    })
    const schemaUtils = createSchemaUtils<Record<string, unknown>>(
      {
        validator: jsonSchemaFormValidator,
        additionalPropertiesWhenAbsent: 'allow',
      },
      formSchema,
    )

    it('stores a custom annotation as an array and a schema-defined one as a single value', () => {
      expect(
        shapeAnnotationFormData(schemaUtils, formSchema, {
          country: 'USA',
          state: ['Washington'],
          custom: 'value',
        }),
      ).toEqual({ country: 'USA', state: 'Washington', custom: ['value'] })
    })

    it('keeps a schema-defined array that a change took out of the schema, as a custom annotation', () => {
      // RJSF 7 drops an array whose field leaves the form, since it renders an extra key's value only as a scalar
      const previous = { showStringArray: true, stringArray: ['one', 'two'] }
      const next = { showStringArray: false }

      expect(
        shapeAnnotationFormData(schemaUtils, formSchema, next, previous),
      ).toEqual({ showStringArray: false, stringArray: ['one', 'two'] })
    })

    it('does not bring back a custom annotation the user removed', () => {
      const previous = { country: 'CA', custom: ['value'] }
      const next = { country: 'CA' }

      expect(
        shapeAnnotationFormData(schemaUtils, formSchema, next, previous),
      ).toBe(next)
    })
  })
})
