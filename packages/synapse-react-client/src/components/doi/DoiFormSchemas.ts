import { RJSFSchema } from '@rjsf/utils'

// The JSON Schema defining the UI form for creating/updating DOIs
export const doiFormSchema: RJSFSchema = {
  definitions: {
    'org.sagebionetworks.repo.model.doi.v2.DoiResourceTypeGeneral': {
      type: 'string',
      enum: [
        'Audiovisual',
        'Collection',
        'DataPaper',
        'Dataset',
        'Event',
        'Image',
        'InteractiveResource',
        'Model',
        'PhysicalObject',
        'Service',
        'Software',
        'Sound',
        'Text',
        'Workflow',
        'Other',
      ],
    },
  },
  type: 'object',
  properties: {
    titles: {
      description: 'The title or titles of your work.',
      type: 'array',
      items: {
        type: 'string',
      },
      title: 'Title(s)',
    },
    creators: {
      title: 'Creator(s)',
      description:
        'The main creators or authors of your work, in priority order. These may be the names of actual people and/or institutions.',
      type: 'array',
      items: {
        type: 'string',
      },
    },
    resourceTypeGeneral: {
      $ref: '#/definitions/org.sagebionetworks.repo.model.doi.v2.DoiResourceTypeGeneral',
      title: 'General Resource Type',
      description: 'The general type of content that best matches this work.',
    },
    publicationYear: {
      type: 'integer',
      title: 'Publication Year',
      description:
        'The year this work became or will become public. May be at most one year in the future.',
    },
  },
  required: ['titles', 'creators', 'resourceTypeGeneral', 'publicationYear'],
}

// The RJSF UiSchema for the DOI form
export const doiFormUiSchema = {
  'ui:submitButtonOptions': { norender: true },
  'ui:order': ['creators', 'titles', 'resourceTypeGeneral', 'publicationYear'],
  creators: {
    items: {
      'ui:placeholder': 'Last, First',
    },
  },
  titles: {
    items: {
      'ui:placeholder': 'My Synapse Object',
    },
  },
  publicationYear: {
    'ui:placeholder': 'YYYY',
  },
}
