import { mockSchemaBinding } from '@/mocks/mockSchema'
import { Meta, StoryObj } from '@storybook/react-vite'
import {
  SchemaDrivenAnnotationEditor,
  SchemaDrivenAnnotationEditorProps,
} from './SchemaDrivenAnnotationEditor'
import { fn } from 'storybook/test'

const meta: Meta<SchemaDrivenAnnotationEditorProps> = {
  title: 'Synapse/SchemaDrivenAnnotationEditor',
  component: SchemaDrivenAnnotationEditor,
  args: {
    onSuccess: fn(),
    onCancel: fn(),
    onChange: fn(),
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Arrays: Story = {
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281',
  },
}

export const IfThenElse = {
  args: { schemaId: 'dev.grosenbacher.test-IfThenElse' },
}

export const ComplexSchema: Story = {
  args: {
    schemaId: 'nkauer-ad.main',
  },
}

export const DerivedAnnotations: Story = {
  args: {
    entityId: 'syn32673093',
  },
}

export const ErrorsEntity: Story = {
  args: {
    entityId: 'syn25959288',
  },
}

export const DirectlyProvidedSchema: Story = {
  args: {
    validationSchema: {
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: `https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${mockSchemaBinding.jsonSchemaVersionInfo.$id}`,
      type: 'object',
      properties: {
        country: {
          enum: ['USA', 'CA'],
          description: 'Test description for country property',
        },
        showStringArray: {
          type: 'boolean',
        },
      },
      required: ['country'],
      allOf: [
        {
          if: {
            properties: {
              country: {
                const: 'USA',
              },
            },
            required: ['country'],
          },
          then: {
            properties: {
              state: {
                type: 'string',
              },
            },
            required: ['state'],
          },
        },
        {
          if: {
            properties: {
              country: {
                const: 'CA',
              },
            },
            required: ['country'],
          },
          then: {
            properties: {
              province: {
                type: 'string',
              },
            },
            required: ['province'],
          },
        },
        {
          if: {
            properties: {
              showStringArray: {
                const: true,
              },
            },
            required: ['showStringArray'],
          },
          then: {
            properties: {
              stringArray: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            },
          },
        },
      ],
    },
  },
}
