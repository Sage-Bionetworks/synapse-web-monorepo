import { RJSFSchema } from '@rjsf/utils'

export const newStandardFormSchema: RJSFSchema = {
  title: 'Contribute A Standard',
  'type:': 'object',
  required: [
    'type',
    'shortName',
    'extendedName',
    'contributorName',
    'contributorOrcid',
  ],
  properties: {
    type: {
      type: 'string',
      title: 'Entity Type',
      enum: [
        'Data Standard or Tool',
        'Data Substrate',
        'Data Topic',
        'Organization',
        'Use Case',
      ],
    },
    category: {
      type: 'string',
      title: 'Category',
    },
    shortName: {
      type: 'string',
      title: 'Short Name',
    },
    extendedName: {
      type: 'string',
      title: 'Extended Name',
    },
    purposeDetail: {
      type: 'string',
      title: 'Purpose Detail',
    },
    subclassOf: {
      type: 'string',
      title: 'Subclass Of',
    },
    relatedTo: {
      type: 'string',
      title: 'Related To',
    },
    contributorName: {
      type: 'string',
      title: 'Contributor Name',
    },
    contributorGithub: {
      type: 'string',
      title: 'Contributor GitHub',
    },
    contributorOrcid: {
      type: 'string',
      title: 'Contributor ORCID',
    },
  },
}

export const newStandardUiSchema = {
  type: {
    'ui:description': 'What kind of thing is this?',
    'ui:placeholder': 'Select a Category',
  },
  category: {
    'ui:description':
      'What should the category be, based on the classes of the [Bridge2AI Standards Schemas](https://bridge2ai.github.io/standards-schemas)? If in doubt, leave blank',
    'ui:enableMarkdownInDescription': true,
    'ui:placeholder': "e.g., 'NamedThing'",
    'ui:options': {
      fullWidth: true,
    },
  },
  shortName: {
    'ui:description':
      'What is the short name of this entity? An acronym or short phrase works best.',
    'ui:placeholder': "e.g., 'ESM Atlas', 'W3C', 'Molecular Biology'",
  },
  extendedName: {
    'ui:description': 'What is the extended name of this entity?',
    'ui:placeholder':
      "e.g., 'ESM Metagenomic Atla', 'World Wide Web Consortium'",
  },
  purposeDetail: {
    'ui:description':
      'What is the description of this entity, in a sentence or two?',
    'ui:placeholder':
      "e.g., 'Any data concerning studies of the structure, function, and interactions of biological materials.'",
  },
  subclassOf: {
    'ui:description':
      '(Optional) Is this a subclass of another entity? Please use an identifier.',
    'ui:placeholder': "e.g., 'B2AI_TOPIC:5'",
  },
  relatedTo: {
    'ui:description':
      '(Optional) Is this related to another entity? Please list identifiers on separate lines.',
    'ui:placeholder': "e.g., 'B2AI_TOPIC:5'",
  },
  contributorName: {
    'ui:description': 'What is your name? This will be used for attribution.',
    'ui:placeholder': "e.g., 'Tabatha Butterscotch'",
  },
  contributorGithub: {
    'ui:description': 'What is your GitHub name, without the @ symbol?',
    'ui:placeholder': "e.g., 'tbuttersco'",
  },
  contributorOrcid: {
    'ui:description': 'What is your ORCID?',
    'ui:placeholder': "e.g.,'0000-0001-2345-6789'",
  },
}
