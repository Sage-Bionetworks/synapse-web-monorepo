import { Box, Select, TextField } from '@mui/material'
import Form, {
  FormDataRecord,
  FormSchema,
} from 'synapse-react-client/components/Form/Form'

export default function ContributeAStandard() {
  const onSubmit = (formData: FormDataRecord) => {
    console.log(formData)
  }

  const fields: FormSchema = {
    type: {
      componentType: Select,
      label: 'Entity Type',
      helperText: 'What kind of thing is this?',
      selections: {
        DataStandardOrTool: 'Data Standard or Tool',
        DataSubstrate: 'Data Substrate',
        DataTopic: 'Data Topic',
        Organization: 'Organization',
        UseCase: 'Use Case',
      },
      isRequired: true,
    },
    relatedTo: {
      componentType: TextField,
      label: 'Related To',
      helperText:
        '(Optional) Is this related to another entity? Please list identifiers on separate lines.',
      isRequired: false,
      additionalOptions: {
        multiline: true,
        rows: 3,
      },
    },
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems={'center'}
      width="100%"
      margin={'100px'}
    >
      <Form fields={fields} onSubmit={onSubmit} />
    </Box>
  )
}
