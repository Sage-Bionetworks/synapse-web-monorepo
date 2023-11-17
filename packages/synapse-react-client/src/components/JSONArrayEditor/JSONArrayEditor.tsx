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
import { parse, ParseError } from 'papaparse'
import { RJSFSchema } from '@rjsf/utils'
import TextWidget from '../SchemaDrivenAnnotationEditor/widget/TextWidget'
import { DateTimeWidget } from '../SchemaDrivenAnnotationEditor/widget/DateTimeWidget'
import { SelectWidget } from '../SchemaDrivenAnnotationEditor/widget/SelectWidget'
import { BooleanWidget } from '../SchemaDrivenAnnotationEditor/widget/BooleanWidget'
import { getTransformErrors } from '../SchemaDrivenAnnotationEditor/AnnotationEditorUtils'
import ErrorListTemplate from '../SchemaDrivenAnnotationEditor/template/ErrorListTemplate'

export type JSONArrayEditorProps = {
  value?: string[]
  arrayItemDefinition?: JSONSchema7Definition
  onChange: (newValue: string[]) => void
  onSubmit: (formData: string[]) => void
}

function getSchema(
  definition: JSONSchema7Definition = { type: 'string' },
): JSONSchema7 {
  return {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'array',
    items: definition,
  }
}

const JSONArrayEditor = React.forwardRef(function JSONArrayEditor(
  props: JSONArrayEditorProps,
  ref: React.Ref<RJSFForm<any, RJSFSchema, any>>,
) {
  const { value = [], onChange, onSubmit, arrayItemDefinition } = props
  const [showPasteNewValuesForm, setShowPasteNewValuesForm] = useState(false)
  const [pastedValues, setPastedValues] = useState('')
  const [parseErrors, setParseErrors] = useState<ParseError[]>([])
  const addPastedValuesToArray = useCallback(() => {
    if (pastedValues) {
      parse<string[]>(pastedValues, {
        complete: result => {
          if (result.errors.length > 0) {
            setParseErrors(result.errors)
          } else {
            onChange([...value, ...result.data[0]])
            setParseErrors([])
            setPastedValues('')
            setShowPasteNewValuesForm(false)
          }
        },
      })
    } else {
      setParseErrors([])
      setPastedValues('')
      setShowPasteNewValuesForm(false)
    }
  }, [onChange, pastedValues, value])

  const schema = useMemo(
    () => getSchema(arrayItemDefinition),
    [arrayItemDefinition],
  )

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
        ref={ref}
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
          <Button onClick={addPastedValuesToArray}>Add</Button>
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
})

export default JSONArrayEditor
