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
      isRequired: true,
      selections: {
        DataStandardOrTool: 'Data Standard or Tool',
        DataSubstrate: 'Data Substrate',
        DataTopic: 'Data Topic',
        Organization: 'Organization',
        UseCase: 'Use Case',
      },
    },
    category: {
      componentType: TextField,
      label: 'Category',
      helperText:
        'What should the category be, based on the classes of the Bridge2AI Standards Schemas (https://bridge2ai.github.io/standards-schemas)? If in doubt, leave blank.', // TODO: Can we make this a real hyperlink?
      placeholder: 'e.g., "NamedThing"',
      isRequired: false,
    },
    shortName: {
      componentType: TextField,
      label: 'Short Name',
      helperText:
        'What is the short name of this entity? An acronym or short phrase works best.',
      placeholder: 'e.g., "ESM Atlas", "W3C", "Molecular Biology"',
      isRequired: true,
    },
    extendedName: {
      componentType: TextField,
      label: 'Extended Name',
      helperText: 'What is the extended name of this entity?',
      placeholder: 'e.g., "ESM Metagenomic Atlas", "World Wide Web Consortium"',
      isRequired: true,
    },
    purposeDetail: {
      componentType: TextField,
      label: 'Purpose Detail',
      helperText:
        'What is the description of this entity, in a sentence or two?',
      placeholder:
        'e.g., "Any data concerning studies of the structure, function, and interactinos of biological materials."', // TODO: This is too long
      isRequired: false,
    },
    subclassOf: {
      componentType: TextField,
      label: 'Subclass Of',
      helperText:
        '(Optional) Is this a subclass of another entity? Please use an identifier.',
      placeholder: 'e.g., "B2AI_TOPIC:5"',
      isRequired: false,
    },
    relatedTo: {
      componentType: TextField,
      label: 'Related To',
      helperText:
        '(Optional) Is this related to another entity? Please list identifiers on separate lines.',
      placeholder: 'e.g., "B2AI_TOPIC:5"',
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
