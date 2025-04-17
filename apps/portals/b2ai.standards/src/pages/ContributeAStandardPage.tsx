import { Box } from '@mui/material'
import { JsonSchemaForm } from 'synapse-react-client/components/JsonSchemaForm/JsonSchemaForm'
import {
  newStandardFormSchema,
  newStandardUiSchema,
} from '../config/newStandardConfig'

export default function ContributeAStandard() {
  const onSubmit = (formData: FormData) => {
    // TODO: implement submit handler
    console.log(formData)
    return true
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
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
