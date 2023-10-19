import React, { useCallback, useState } from 'react'
import Form from '@rjsf/mui'
import validator from '@rjsf/validator-ajv8'
import { JSONSchema7 } from 'json-schema'
import ArrayFieldDescriptionTemplate from '../SchemaDrivenAnnotationEditor/template/ArrayFieldDescriptionTemplate'
import ArrayFieldItemTemplate from '../SchemaDrivenAnnotationEditor/template/ArrayFieldItemTemplate'
import ArrayFieldTemplate from '../SchemaDrivenAnnotationEditor/template/ArrayFieldTemplate'
import ArrayFieldTitleTemplate from '../SchemaDrivenAnnotationEditor/template/ArrayFieldTitleTemplate'
import ButtonTemplate from '../SchemaDrivenAnnotationEditor/template/ButtonTemplate'
import { Box, Button, Collapse, TextField } from '@mui/material'
import { parse } from 'papaparse'
type JSONArrayEditorProps = {
  value: string[]
  onChange: (newValue: string[]) => void
  onSubmit: (formData: string[]) => void
}

const arraySchema: JSONSchema7 = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'array',
  items: {
    type: 'string',
  },
}

const JSONArrayEditor = React.forwardRef(function JSONArrayEditor(
  props: JSONArrayEditorProps,
  ref: React.Ref<Form>,
) {
  const { value, onChange, onSubmit } = props
  const [showPasteNewValuesForm, setShowPasteNewValuesForm] = useState(false)
  const [pastedValues, setPastedValues] = useState('')

  const addPastedValuesToArray = useCallback(() => {
    if (pastedValues) {
      parse<string[]>(pastedValues, {
        complete: result => {
          console.log(result)
          if (result.errors.length > 0) {
            console.error('Error parsing pasted values', result.errors)
          }
          onChange([...value, ...result.data[0]])
          setPastedValues('')
          setShowPasteNewValuesForm(false)
        },
      })
    } else {
      setPastedValues('')
      setShowPasteNewValuesForm(false)
    }
  }, [onChange, pastedValues, value])

  return (
    <Box
      className="AnnotationEditor"
      sx={{
        // Hide the label/button to show more info
        '.LabelContainer': {
          display: 'none',
          visibility: 'hidden',
        },
      }}
    >
      <Form
        ref={ref}
        schema={arraySchema}
        uiSchema={{
          'ui:submitButtonOptions': {
            norender: true,
          },
        }}
        validator={validator}
        formData={value}
        onChange={({ formData }) => onChange(formData)}
        onSubmit={({ formData }) => onSubmit(formData)}
        templates={{
          ArrayFieldDescriptionTemplate: ArrayFieldDescriptionTemplate,
          ArrayFieldItemTemplate: ArrayFieldItemTemplate,
          ArrayFieldTemplate: ArrayFieldTemplate,
          ArrayFieldTitleTemplate: ArrayFieldTitleTemplate,
          ButtonTemplates: ButtonTemplate,
        }}
      />
      <Button onClick={() => setShowPasteNewValuesForm(true)}>
        Paste new values
      </Button>
      <Collapse sx={{ mt: 2 }} in={showPasteNewValuesForm}>
        <TextField
          InputProps={{ inputProps: { 'aria-label': 'CSV or TSV to Append' } }}
          rows={8}
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
      </Collapse>
    </Box>
  )
})

export default JSONArrayEditor
