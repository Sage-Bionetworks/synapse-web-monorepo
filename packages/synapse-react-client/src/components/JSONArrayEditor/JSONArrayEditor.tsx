import React, { useCallback, useMemo, useState } from 'react'
import RJSFForm from '@rjsf/core'
import Form from '@rjsf/mui'
import validator from '@rjsf/validator-ajv8'
import { JSONSchema7, JSONSchema7Definition } from 'json-schema'
import ArrayFieldDescriptionTemplate from '../SchemaDrivenAnnotationEditor/template/ArrayFieldDescriptionTemplate'
import ArrayFieldItemTemplate from '../SchemaDrivenAnnotationEditor/template/ArrayFieldItemTemplate'
import ArrayFieldTemplate from '../SchemaDrivenAnnotationEditor/template/ArrayFieldTemplate'
import ArrayFieldTitleTemplate from '../SchemaDrivenAnnotationEditor/template/ArrayFieldTitleTemplate'
import ButtonTemplate from '../SchemaDrivenAnnotationEditor/template/ButtonTemplate'
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Collapse,
  TextField,
  Typography,
} from '@mui/material'
import { GenericObjectType, RJSFSchema } from '@rjsf/utils'
import TextWidget from '../SchemaDrivenAnnotationEditor/widget/TextWidget'
import { DateTimeWidget } from '../SchemaDrivenAnnotationEditor/widget/DateTimeWidget'
import { SelectWidget } from '../SchemaDrivenAnnotationEditor/widget/SelectWidget'
import { BooleanWidget } from '../SchemaDrivenAnnotationEditor/widget/BooleanWidget'
import { getTransformErrors } from '../SchemaDrivenAnnotationEditor/AnnotationEditorUtils'
import ErrorListTemplate from '../SchemaDrivenAnnotationEditor/template/ErrorListTemplate'
import useParseCsv from './useParseCsv'
import { ParseError } from 'papaparse'

const DEFAULT_ARRAY_ITEM_DEFINITION: JSONSchema7Definition = { type: 'string' }

export type JSONArrayEditorProps<T = unknown> = {
  value?: T[]
  arrayItemDefinition?: JSONSchema7Definition
  onChange: (newValue: T[]) => void
  onSubmit: (formData: T[]) => void
  formRef?: React.Ref<RJSFForm<T, RJSFSchema, GenericObjectType>>
}

function getSchema(
  definition: JSONSchema7Definition = DEFAULT_ARRAY_ITEM_DEFINITION,
): JSONSchema7 {
  return {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'array',
    items: definition,
  }
}

function JSONArrayEditor<T = unknown>(props: JSONArrayEditorProps<T>) {
  const {
    value = [],
    onChange,
    onSubmit,
    arrayItemDefinition = DEFAULT_ARRAY_ITEM_DEFINITION,
    formRef,
  } = props
  const [showPasteNewValuesForm, setShowPasteNewValuesForm] = useState(false)
  const [pastedValues, setPastedValues] = useState('')
  const [parseErrors, setParseErrors] = useState<ParseError[]>([])
  const schema = useMemo(
    () => getSchema(arrayItemDefinition),
    [arrayItemDefinition],
  )

  const { parse } = useParseCsv({
    jsonSchemaDefinition: arrayItemDefinition,
  })
  const addPastedValuesToArray = useCallback(async () => {
    if (pastedValues) {
      try {
        const parsedValues = (await parse(pastedValues)) as T[]
        onChange([...value, ...parsedValues])
        setParseErrors([])
        setPastedValues('')
        setShowPasteNewValuesForm(false)
      } catch (e) {
        setParseErrors(e as ParseError[])
      }
    }
  }, [onChange, pastedValues, value, parse])

  const transformErrors = useMemo(() => {
    return getTransformErrors()
  }, [])

  return (
    <Box
      className="JsonSchemaFormContainer"
      sx={{
        // Hide the label/button to show more info
        '.JsonSchemaForm .LabelContainer': {
          display: 'none',
          visibility: 'hidden',
        },
      }}
    >
      <Form
        ref={formRef}
        schema={schema}
        className="JsonSchemaForm"
        noHtml5Validate
        uiSchema={{
          'ui:submitButtonOptions': {
            norender: true,
          },
        }}
        validator={validator}
        formData={value}
        formContext={{
          allowRemovingLastItemInArray: true,
        }}
        onChange={({ formData }) => onChange(formData)}
        onSubmit={({ formData }) => onSubmit(formData)}
        templates={{
          ArrayFieldDescriptionTemplate: ArrayFieldDescriptionTemplate,
          ArrayFieldItemTemplate: ArrayFieldItemTemplate,
          ArrayFieldTemplate: ArrayFieldTemplate,
          ArrayFieldTitleTemplate: ArrayFieldTitleTemplate,
          ButtonTemplates: ButtonTemplate,
          ErrorListTemplate: ErrorListTemplate,
        }}
        transformErrors={transformErrors}
        widgets={{
          TextWidget: TextWidget,
          DateTimeWidget: DateTimeWidget,
          SelectWidget: SelectWidget,
          CheckboxWidget: BooleanWidget,
        }}
      />
      <Button onClick={() => setShowPasteNewValuesForm(true)}>
        Paste new values
      </Button>
      <Collapse sx={{ mt: 2 }} in={showPasteNewValuesForm}>
        <TextField
          multiline
          InputProps={{ inputProps: { 'aria-label': 'CSV or TSV to Append' } }}
          rows={5}
          placeholder={'Place comma or tab delimited values here'}
          value={pastedValues}
          onChange={e => setPastedValues(e.target.value)}
        />
        <Box my={1} display={'flex'} justifyContent={'flex-end'}>
          <Button onClick={() => setShowPasteNewValuesForm(false)}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              addPastedValuesToArray()
            }}
          >
            Add
          </Button>
        </Box>
        {parseErrors && parseErrors.length > 0 && (
          <Alert severity={'error'} sx={{ my: 2 }}>
            <AlertTitle>Parsing errors encountered:</AlertTitle>
            <ul>
              {parseErrors.map((error, index) => {
                return (
                  <Typography
                    component={'li'}
                    lineHeight={1.5}
                    key={index}
                    variant={'smallText1'}
                  >
                    {error.row ? `At ${error.row}: ` : ''}
                    {error.message}
                  </Typography>
                )
              })}
            </ul>
          </Alert>
        )}
      </Collapse>
    </Box>
  )
}

export default JSONArrayEditor
