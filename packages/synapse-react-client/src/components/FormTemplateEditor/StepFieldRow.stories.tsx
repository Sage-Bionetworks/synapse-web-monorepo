import { Meta, StoryObj } from '@storybook/react-vite'
import { StepFieldRow } from './StepFieldRow'

const meta = {
  title: 'Components/FormTemplateEditor/StepFieldRow',
  component: StepFieldRow,
  args: {
    sortableId: 'slot:0:0',
    sortableIndex: 0,
    sortableGroup: 'step:0',
    field: { schemaPath: '/institution', uiDefinition: null },
    resolvedProperty: { type: 'string', title: 'Institution' },
    context: 'ALWAYS',
    propertyKey: 'institution',
    isFirst: false,
    isLast: false,
    onChange: (patch: unknown) => console.log('onChange', patch),
    onMoveUp: () => console.log('onMoveUp'),
    onMoveDown: () => console.log('onMoveDown'),
    onRemove: () => console.log('onRemove'),
  },
} satisfies Meta<typeof StepFieldRow>
export default meta

type Story = StoryObj<typeof StepFieldRow>

export const Default: Story = {}

export const FirstAndLastRow: Story = {
  args: {
    isFirst: true,
    isLast: true,
  },
}

export const SubmissionContextAndPublicBadges: Story = {
  args: {
    field: {
      schemaPath: '/summaryOfUse',
      uiDefinition: null,
      submissionContext: 'RENEWAL_ONLY',
      isPublic: true,
    },
    resolvedProperty: { type: 'string', title: 'Summary of use' },
    context: 'RENEWAL_ONLY',
    propertyKey: 'summaryOfUse',
  },
}

/** The slot's schemaPath no longer resolves to a real property -- e.g. the property was deleted
 * from the schema after this slot was bound to it. */
export const UnresolvedField: Story = {
  args: {
    field: { schemaPath: '/deletedProperty', uiDefinition: null },
    resolvedProperty: undefined,
    propertyKey: 'deletedProperty',
  },
}

/** Expand the row (click "Expand field") to reveal the template-file control for this type. */
export const FileField: Story = {
  args: {
    field: { schemaPath: '/consentForm', uiDefinition: null },
    resolvedProperty: { format: 'synapse-filehandle-id' },
    propertyKey: 'consentForm',
  },
}
