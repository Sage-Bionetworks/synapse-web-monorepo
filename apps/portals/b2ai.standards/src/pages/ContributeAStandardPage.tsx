import { Box } from '@mui/material'
import { JsonSchemaForm } from 'synapse-react-client/components/JsonSchemaForm/JsonSchemaForm'
import {
  newStandardFormSchema,
  newStandardUiSchema,
} from '../config/newStandardConfig'
import { FormEvent } from 'react'

export default function ContributeAStandard() {
  const blankFormData = newStandardFormSchema.properties.map(id => [id, ''])
  console.log(blankFormData)

  const onSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    // TODO: implement submit handler
    console.log(formData)
    return true
  }

  return (
    <Box
      className="JsonSchemaFormContainer"
      sx={{
        maxWidth: '700px',
        margin: '0 auto',
        padding: '50px',
      }}
    >
      <JsonSchemaForm
        schema={newStandardFormSchema}
        uiSchema={newStandardUiSchema}
        formContext={{
          descriptionVariant: 'expand',
        }}
      />
    </Box>
  )
}
