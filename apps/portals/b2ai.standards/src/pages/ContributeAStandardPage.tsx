import { Box, Select, TextField, Typography } from '@mui/material'
import Form, {
  FormData,
  FieldSchema,
} from 'synapse-react-client/components/Form/Form'

export default function ContributeAStandard() {
  const onSubmit = (formData: FormData) => {
    // TODO: implement submit handler
    console.log(formData)
    return true
  }

  const fields: FieldSchema = {
    type: {
      componentType: Select,
      label: 'Entity Type',
      helperText: 'What kind of thing is this?',
      placeholder: 'Select a Category',
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
      helperText: (
        <span>
          What should the category be, based on the classes of the{' '}
          <a
            href="https://bridge2ai.github.io/standards-schemas"
            target="_blank"
          >
            Bridge2AI Standards Schemas
          </a>
          ? If in doubt, leave blank.
        </span>
      ),
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
        'e.g., "Any data concerning studies of the structure, function, and interactions of biological materials."',
      isRequired: false,
      additionalProperties: {
        multiline: true,
        rows: 3,
      },
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
      additionalProperties: {
        multiline: true,
        rows: 3,
      },
    },
    contributorName: {
      componentType: TextField,
      label: 'Contributor Name',
      helperText: 'What is your name? This will be used for attribution.',
      placeholder: 'e.g., "Tabatha Butterscotch"',
      isRequired: true,
    },
    contributorGithub: {
      // TODO: Do we even still want this field, now that you don't need a GitHub account to submit a new entity?
      componentType: TextField,
      label: 'Contributor GitHub',
      helperText: 'What is your GitHub name, without the @ symbol?',
      placeholder: 'e.g., "tbuttersco"',
      isRequired: false,
    },
    contributorORCID: {
      componentType: TextField,
      label: 'Contributor ORCID',
      helperText: 'What is your ORCID?',
      placeholder: 'e.g., "0000-0001-2345-6789"',
      isRequired: true,
      validationFunc: (input: string) => {
        const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/
        return regex.test(input)
      },
    },
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      padding="50px"
    >
      <Typography variant="h3" component="h1">
        Contribute a Standard
      </Typography>
      <Form fields={fields} onSubmit={onSubmit} />
    </Box>
  )
}
