import { JsonSchemaForm } from '@/components/JsonSchemaForm/JsonSchemaForm'
import TextWidget from '@/components/SchemaDrivenAnnotationEditor/widget/TextWidget'
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Collapse,
  TextField,
  Typography,
} from '@mui/material'
import RJSFForm from '@rjsf/core'
import { GenericObjectType, RJSFSchema } from '@rjsf/utils'
import { JSONSchema7, JSONSchema7Definition } from 'json-schema'
import { ParseError } from 'papaparse'
import { Ref, useCallback, useMemo, useState } from 'react'
import { transformErrors } from '../SchemaDrivenAnnotationEditor/AnnotationEditorUtils'
import useParseCsv, { UseParseCsvError } from './useParseCsv'

const DEFAULT_ARRAY_ITEM_DEFINITION: JSONSchema7Definition = { type: 'string' }

export type JSONArrayEditorProps<T = unknown> = {
  value?: T[]
  arrayItemDefinition?: JSONSchema7Definition
  onChange: (newValue: T[]) => void
  onSubmit: (formData: T[]) => void
  formRef?: Ref<RJSFForm<T, RJSFSchema, GenericObjectType>>
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
        if (e instanceof UseParseCsvError) {
          setParseErrors(e.parseErrors)
        } else {
          throw e
        }
      }
    }
  }, [onChange, pastedValues, value, parse])

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
      <JsonSchemaForm
        formRef={formRef}
        schema={schema}
        noHtml5Validate
        uiSchema={{
          'ui:submitButtonOptions': {
            norender: true,
          },
        }}
        formData={value}
        formContext={{
          allowRemovingLastItemInArray: true,
        }}
        onChange={({ formData }) => onChange(formData)}
        onSubmit={({ formData }) => onSubmit(formData)}
        transformErrors={transformErrors}
        widgets={{
          TextWidget: TextWidget,
        }}
      />
      <Button onClick={() => setShowPasteNewValuesForm(true)}>
        Paste new values
      </Button>
      <Collapse sx={{ mt: 2 }} in={showPasteNewValuesForm}>
        <TextField
          multiline
          rows={5}
          placeholder={'Place comma or tab delimited values here'}
          value={pastedValues}
          onChange={e => setPastedValues(e.target.value)}
          slotProps={{
            input: { inputProps: { 'aria-label': 'CSV or TSV to Append' } },
          }}
        />
        <Box
          sx={{
            my: 1,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
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
                    key={index}
                    variant={'smallText1'}
                    sx={{
                      lineHeight: 1.5,
                    }}
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
