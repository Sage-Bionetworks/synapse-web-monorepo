import { RJSFSchema } from '@rjsf/utils'
import dayjs from 'dayjs'
import { describe, expect, it } from 'vitest'
import {
  ALLOWED_VALUES_MESSAGE,
  jsonSchemaFormValidator,
} from './JsonSchemaFormValidator'

/** The messages the shared validator gives `value`, the only property of a one-field form. */
function messagesFor(property: RJSFSchema, value: unknown, required = false) {
  const schema: RJSFSchema = {
    type: 'object',
    properties: { field: { title: 'My field', ...property } },
    ...(required ? { required: ['field'] } : {}),
  }
  const { errors } = jsonSchemaFormValidator.validateFormData(
    value === undefined ? {} : { field: value },
    schema,
  )
  return errors.map(error => error.message)
}

describe('jsonSchemaFormValidator', () => {
  it('flags a missing required field', () => {
    expect(messagesFor({ type: 'string' }, undefined, true)).toEqual([
      'This field is required',
    ])
  })

  it('reports the property of a missing required field unquoted', () => {
    const { errors } = jsonSchemaFormValidator.validateFormData(
      {},
      {
        type: 'object',
        properties: { field: { type: 'string' } },
        required: ['field'],
      },
    )
    expect(errors).toEqual([
      expect.objectContaining({
        name: 'required',
        property: 'field',
        params: { missingProperty: 'field' },
        message: 'This field is required',
      }),
    ])
  })

  it.each([
    [{ minLength: 200 }, 'short', 'Must be at least 200 characters'],
    [{ minLength: 1 }, '', 'Must be at least 1 character'],
    [{ maxLength: 3 }, 'long', 'Must be at most 3 characters'],
  ])('flags text length %o', (rule, value, message) => {
    expect(messagesFor({ type: 'string', ...rule }, value)).toEqual([message])
  })

  it.each([
    [{ minimum: 1 }, 0, 'Must be 1 or more'],
    [{ maximum: 10 }, 10.5, 'Must be 10 or less'],
    [{ exclusiveMinimum: 0 }, 0, 'Must be greater than 0'],
    [{ exclusiveMaximum: 2.5 }, 2.5, 'Must be less than 2.5'],
  ])('flags number range %o', (rule, value, message) => {
    expect(messagesFor({ type: 'number', ...rule }, value)).toEqual([message])
  })

  it.each([
    ['email', 'jane@', 'Enter a valid email address'],
    ['uri', 'not a url', 'Enter a valid URL'],
    ['uuid', '1234', 'Enter a valid UUID'],
    ['date', '2027-02-30', 'Enter a valid date'],
    ['date-time', 'tomorrow', 'Enter a valid date and time'],
  ])('flags a malformed %s', (format, value, message) => {
    expect(messagesFor({ type: 'string', format }, value)).toEqual([message])
  })

  it('accepts well-formed values', () => {
    expect(
      messagesFor({ type: 'string', format: 'email' }, 'jane@example.edu'),
    ).toEqual([])
    expect(messagesFor({ type: 'number', minimum: 1 }, 1)).toEqual([])
  })

  it('flags a value outside an enum', () => {
    expect(messagesFor({ type: 'string', enum: ['a', 'b'] }, 'c')).toEqual([
      ALLOWED_VALUES_MESSAGE,
    ])
  })

  it('flags a date before its formatMinimum, naming today as "today"', () => {
    const today = dayjs().format('YYYY-MM-DD')
    const yesterday = dayjs().subtract(1, 'day').format('YYYY-MM-DD')
    const dateTime: RJSFSchema = {
      type: 'string',
      format: 'date-time',
      formatMinimum: `${today}T00:00:00.000Z`,
    }
    expect(messagesFor(dateTime, `${yesterday}T00:00:00.000Z`)).toEqual([
      'Must be today or later',
    ])
    expect(messagesFor(dateTime, `${today}T00:00:00.000Z`)).toEqual([])
    expect(
      messagesFor(
        { type: 'string', format: 'date', formatMinimum: '2027-03-05' },
        '2027-03-04',
      ),
    ).toEqual(['Must be Mar 5, 2027 or later'])
    expect(
      messagesFor(
        { type: 'string', format: 'date', formatMaximum: '2027-03-05' },
        '2027-03-06',
      ),
    ).toEqual(['Must be Mar 5, 2027 or earlier'])
  })

  it('keeps ajv’s message for an unknown format and other rules', () => {
    expect(messagesFor({ type: 'string', format: 'ipv4' }, 'x')).toEqual([
      'must match format "ipv4"',
    ])
    expect(messagesFor({ type: 'string', pattern: '^\\d+$' }, 'x')).toEqual([
      String.raw`must match pattern "^\d+$"`,
    ])
    expect(messagesFor({ type: 'number' }, 'x')).toEqual(['must be number'])
  })
})
