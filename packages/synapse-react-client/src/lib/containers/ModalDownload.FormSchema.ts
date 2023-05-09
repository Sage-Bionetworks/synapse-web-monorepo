import { UiSchema } from '@rjsf/core'
import { JSONSchema7 } from 'json-schema'

export const writeHeaderOption = 'First line is the columns names.'
export const includeRowIdAndRowVersionOption =
  'Include row metadata (Row Id and Row Version).'
export const csvOption = 'Comma Separated Values (CSV)'
export const tsvOption = 'Tab Separated Values (TSV)'

// Step 1
const stepOneFormSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    'File Type': {
      type: 'string',
      oneOf: [
        {
          const: csvOption,
          title: csvOption,
        },
        {
          const: tsvOption,
          title: tsvOption,
        },
      ],
    },
    Contents: {
      type: 'array',
      title: 'Contents',
      items: {
        type: 'string',
        enum: [writeHeaderOption, includeRowIdAndRowVersionOption],
      },
      uniqueItems: true,
    },
  },
}

const stepOneFormUISchema: UiSchema = {
  'File Type': {
    'ui:widget': 'radio',
  },
  Contents: {
    'ui:widget': 'checkboxes',
  },
}

// Step 2
const stepTwoFormSchema: JSONSchema7 = {
  description:
    'File is ready for download. Select the download button to download the file.',
  type: 'object',
}

const stepTwoFormUISchema: UiSchema = {}

export const formSchemaArray = [stepOneFormSchema, stepTwoFormSchema]
export const formSchemaUIArray = [stepOneFormUISchema, stepTwoFormUISchema]
