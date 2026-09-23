import { Meta, StoryObj } from '@storybook/react-vite'
import {
  DataAccessRequestType,
  FormTemplate,
} from '@sage-bionetworks/synapse-client'
import { RJSFSchema } from '@rjsf/utils'
import { SUBMISSION_CONTEXT_PROPERTY } from '@/utils/jsonschema/submissionContext'
import { FormTemplatePreview } from './FormTemplatePreview'

function template(steps: FormTemplate['steps']): FormTemplate {
  return {
    id: 'template-1',
    name: 'My Template',
    schema$id: 'org.example-1.0.0',
    steps,
    etag: 'etag-1',
    versionNumber: 1,
  }
}

const schema: RJSFSchema = {
  type: 'object',
  properties: {
    institution: { type: 'string', title: 'Institution' },
    signingOfficial: { type: 'string', title: 'Signing Official' },
    [SUBMISSION_CONTEXT_PROPERTY]: { type: 'string' },
  },
  required: ['institution', SUBMISSION_CONTEXT_PROPERTY],
  allOf: [
    {
      if: {
        properties: {
          [SUBMISSION_CONTEXT_PROPERTY]: {
            const: DataAccessRequestType.RENEWAL,
          },
        },
      },
      then: {
        properties: { summaryOfUse: { type: 'string', title: 'Summary' } },
        required: ['summaryOfUse'],
      },
    },
  ],
}

const meta = {
  title: 'Components/FormTemplateEditor/FormTemplatePreview',
  component: FormTemplatePreview,
  args: {
    template: template([
      {
        title: 'Basics',
        description: 'Tell us about yourself',
        fields: [{ schemaPath: '/institution', uiDefinition: {} }],
      },
    ]),
    jsonSchema: schema,
  },
} satisfies Meta<typeof FormTemplatePreview>
export default meta

type Story = StoryObj<typeof FormTemplatePreview>

export const SingleStep: Story = {}

export const MultiStepStepper: Story = {
  args: {
    template: template([
      {
        title: 'Basics',
        description: 'Tell us about yourself',
        fields: [{ schemaPath: '/institution', uiDefinition: {} }],
      },
      {
        title: 'Additional info',
        fields: [{ schemaPath: '/signingOfficial', uiDefinition: {} }],
      },
    ]),
  },
}

/** "Renewal details" only has a resolvable field once the Renewal toggle above the stepper is
 * selected -- toggle it to see the step appear. */
export const RenewalGatedStep: Story = {
  args: {
    template: template([
      {
        title: 'Basics',
        fields: [{ schemaPath: '/institution', uiDefinition: {} }],
      },
      {
        title: 'Renewal details',
        fields: [{ schemaPath: '/summaryOfUse', uiDefinition: {} }],
      },
    ]),
  },
}

/** No step has a field that resolves for either request type -- nothing to preview yet. */
export const Empty: Story = {
  args: {
    template: template([]),
  },
}
